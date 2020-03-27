# 浏览器是怎么缓存资源的

浏览器缓存（Brower Caching）是浏览器在本地磁盘对用户最近请求过的文档进行存储，当访问者再次访问同一页面时，浏览器就可以直接从本地磁盘加载文档。这样做的好处有：减少冗余数据传输、减少服务器负担、加快客户端加载网页的速度。

浏览器的缓存规则分为两大块：**强制缓存**和**协商缓存**。对于某个文件来说，具体是采用哪种缓存方式，由HTTP Response Headers设置，当然也可以通过 meta 标签，但是现在越来越多浏览器忽略设置缓存的 meta 标签，所以还是推荐通过 HTTP Response Headers 设置。

## 强制缓存

首先客户端会检查本地缓存中是否有所要请求的数据，如果有，就直接从缓存中获取数据；如果没有，就从服务器获取数据。

HTTP Response Headers 中 Cache-Control 和 Expires 字段都表示对本资源启动强制缓存，其中 Cache-Control 是 http1.1 标准中的字段，而 Expires 是 http1.0 的字段，Cache-Control 优先级更高，使用更广泛。

Cache-Control 的值的单位为秒，关键字 max-age 表示可以被缓存多长时间。

```code
cache-control: max-age=36029314
```

百度首页加载的一个资源返回头中出现了 Cache-Control 字段，当 Cache-Control 值设为 `max-age=300` 时，则代表在这个请求正确返回时间（浏览器也会记录下来）的 5 分钟内再次加载资源，就会命中强缓存。

cache-control 的值除了数字外，还有下面几个比较常用的设置值：

`-no-cache`： 不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在ETag，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载。

`-no-store`： 直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源。

`-public`： 可以被所有的用户缓存，包括终端用户和 CDN 等中间代理服务器。

`-private`： 只能被终端用户的浏览器缓存，不允许 CDN 等中继缓存服务器对其缓存。

Expires 字段规定了过期时间，浏览器再次加载资源时，如果在这个过期时间内，则命中强缓存。

## 协商缓存

客户端先从本地缓存中获得一个缓存标识，带着这个标识向服务器发送请求进行验证，如果证明缓存没有失效就会返回 304，此时直接从本地缓存中获取数据；如果证明缓存失效，就从服务端获取数据。

协商缓存也有 2 个标识头：Last-Modified 和 Etag。

### Last-Modified

资源被服务器返回时，HTTP Response Headers 中的 Last-Modified 返回头标识了此资源在服务器上的最后修改时间。浏览器再次请求服务器时，会将上次 Last-Modified 的值作为 if-Modified-Since 头的值发送，服务器收到请求后，查看最后修改时间以后资源是否被修改过，如果没有被修改过，就返回 304，从缓存读取；修改过，返回状态 200 以及整个资源。

```code
last-modified: Wed, 13 Nov 2019 15:16:37 GMT
```

### Etag

至于 Etag 头，资源被服务器返回时，服务器通过算法生成针对这个资源的唯一标识作为 Etag 的值返回给浏览器。下次浏览器再次请求时，浏览器将上次 Etag 的值作为这个表示头的值发送给服务器。通过唯一标识来检测资源是否被修改过，如果没有被修改过，就返回 304，从缓存读取。修改过，返回状态 200 以及整个资源。

```code
etag: W/"36BE6ECF0746FFAC5024A69C27141E08"
```

### 总结

Etag 要优于 Last-Modified。Last-Modified 的时间单位是秒，如果某个文件在 1 秒内改变了多次，那么他们的 Last-Modified 其实并没有体现出来修改，但是 Etag 每次都会改变确保了精度。

在性能上，Etag 要逊于 Last-Modified，毕竟 Last-Modified 只需要记录时间，而 Etag 需要服务器通过算法来计算出一个 hash 值。

在优先级上，服务器校验优先考虑 Etag。

## 浏览器缓存

浏览器缓存这一块，最重要的是能区分开强制缓存和协商缓存：完全不向服务器发送请求的是强制缓存，向服务器发送请求的是协商缓存，涉及到 304 的都是协商缓存。

总结一下浏览器缓存的全过程：

浏览器第一次加载资源，服务器返回 200，浏览器从服务器下载资源文件，并缓存住资源文件与 response header 以供下次加载时对比使用；

下一次加载资源时，由于强制缓存优先级较高，先比较当前时间与上一次返回 200 时的时间差，如果没有超过cache-control 设置的 max-age，则没有过期，并命中强缓存，直接从本地读取资源。如果浏览器不支持HTTP1.1，则使用 expires 头判断是否过期；

如果资源已过期，则表明强制缓存没有被命中，则开始协商缓存，向服务器发送带有 `If-None-Match` 和 `If-Modified-Since` 的请求；

服务器收到请求后，优先根据 Etag 的值判断被请求的文件有没有做修改，Etag 值一致则没有修改，命中协商缓存，返回 304；如果不一致则有改动，直接返回新的资源文件带上新的 Etag 值并返回 200；

如果服务器收到的请求没有 Etag 值，则将 `If-Modified-Since` 和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回 304；不一致则返回新的 `last-modified` 和文件并返回 200。

## 其他问题

### 点击刷新按钮或者按 F5

浏览器直接对本地的缓存文件过期，但是会带上`If-Modifed-Since`，`If-None-Match`，这就意味着服务器会对文件检查新鲜度，返回结果可能是 304，也有可能是 200。

### 用户按 Ctrl+F5

浏览器不仅会对本地文件过期，而且不会带上 `If-Modifed-Since`，`If-None-Match`，相当于之前从来没有请求过，返回结果是 200。

### 地址栏回车

浏览器发起请求，按照正常流程，本地检查是否过期，然后服务器检查新鲜度，最后返回内容。

最后还可以提到，你注意到很多网站的资源后面都加了版本号，这样做的目的是：每次升级了 JS 或 CSS 文件后，为了防止浏览器进行缓存，强制改变版本号，客户端浏览器就会重新下载新的 JS 或 CSS 文件 ，以保证用户能够及时获得网站的最新更新。

### 缓存的资源都存在哪里

缓存位置一共有 3 种，按优先级从高到低分别是：

- Service Worker：运行在 JavaScript 主线程之外，虽然由于脱离了浏览器窗体无法直接访问 DOM，但是它可以完成离线缓存、消息推送、网络代理等功能。

- Memory Cache：就是内存缓存，它的效率最快，但是存活时间最短，你一关掉浏览器 Memory Cache 里的文件就被清空了。

- Disk Cache：Cache 资源被存储在硬盘上，存活时间比 Memory Cache 要持久很多。

[原文地址](https://www.imooc.com/read/68/article/1558)