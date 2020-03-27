# CSS 理论碎片

## CSS 的优先级规则

优先级由高到低：

- `!important`
- 匹配优先级计算 如果存在内联样式，那么 A = 1, 否则 A = 0;
- B 的值等于 ID 选择器 出现的次数;
- C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;
- D 的值等于 标签选择器 和 伪元素 出现的总次数 。
  若以上规则都无法解决，后来者优先级高
  user agent stylesheet

## 行内元素的`margin`起作用吗

- 对于 **行内替换元素** 来说，4 个方向的`margin`都是起作用的；
- 对于 **行内非替换元素** 来说，只有`margin-left`和`margin-right`起作用，`margin-top`和`margin-bottom`是不起作用的。

## `vertical-align`

`vertical-align`只有在 display 属性为 `inline` 和 `table-cell` 时起作用，最常使用的应用场景是对齐图片和文字。

## 元素垂直居中的方法

1. 当不需要指定元素的高度时，可以直接给一个相同的 padding-top 和 padding-bottom，让元素和 padding 一起撑起来容器；
1. 需要指定容器高度，或者不能使用 padding 的时候，设置元素 display: table-cell 和 vertical-align: middle；
1. 不需要严格的兼容，可以用 flexbox 的话，就使用 flexbox；
1. 内容只有一行文本时，把容器的 line-height 属性设置为和容器的高度一样；
1. 上面的方法都不能用时，如果知道容器和元素的高度，用绝对定位；
1. 如果不知道元素的高度时，结合定位和 transform 一起用。

## 层叠上下文

层叠上下文是用来描述页面中元素在垂直于屏幕方向排列规则而创建出的模型。

层叠上下文中重叠的元素按照一定的规则在垂直方向排列。层叠上下文是 HTML 元素层级的一个子层级，因为只有一部分元素可以生成自己的层叠上下文。

### 定位元素|未定位元素

从是否定位的角度可以把页面中的元素分为两类：

- 定位元素，position 的值为 relative,absolute,fixed 或 sticky 的元素；
- 未定位元素，不是定位元素的都是未定位元素。

### `z-index`

我们知道定位元素覆盖在未定位元素上面，那么已定位元素之间如何覆盖呢？`z-index` 就是一个可以让我们精确地控制已定位元素之间的渲染顺序的工具：`z-index`的值可以是任意整数 (正数、负数或 0)，值越大，越覆盖在上面。

当一个元素被显示设置`z-index`值，不管是正数、负数还是 0，所有这个元素和它的所有后代元素形成一个层叠上下文。层叠上下文的后代元素只参与和根元素的对比，不参与和根元素以外的元素对比。

### 在一个独立的层叠上下文中，元素如何排列

- 层叠上下文的根元素
- z-index 为负值的已定位元素（包括它们的子元素）
- 未定位元素
- z-index 为 auto 的已定位元素（包括它们的子元素）
- z-index 为正值的已定位元素（包括它们的子元素）

注意 z-index 值为负时，要排在未定位元素下面。这个顺序是一定要记住的，就像 Event Loop，几乎所有层叠上下文的问题，都可以适用于这个顺序列表。

## em 和 rem

- `1em`，等于本元素的字体大小，所以在不同的元素里 1em 的绝对大小是不一样的。
- `1rem`，等于根元素的字体大小，在一个页面中，无论在哪个元素上 1rem 都是一样的。
- `em` 适合于用在需要大小需要跟随字体变化的属性上，比如 padding、margin、height、width 等等，元素继承了不同的字体大小，这些属性最好也能跟着变化；
- `rem`适用于字体，这样就可以通过改变根元素的字体大小来改变整个页面的字体大小。

## 物理像素，逻辑像素和像素密度

- 物理像素：设备的实际像素，比如 iPhoneXS 有 1242X2688 物理像素
- 逻辑像素：在写 CSS 代码时，针对于我们的单位 px，其宽度为 414px & 896px，也就是说当我们赋予一个 DIV 414px，这个 DIV 就会填满手机的宽度
- 像素密度：1242/414=3，也就是说，在单边上，一个逻辑像素=3 个物理像素，我们就说这个屏幕的像素密度为 3，也就是我们常说的 3 倍屏。

对于图片来说，为了保证其不失真，1 个图片像素至少要对应一个物理像素，假如原始图片是 500X300 像素，那么在 3 倍屏上就要放一个 1500X900 像素的图片才能保证 1 个物理像素至少对应一个图片像素，才能不失真。

## 移动端适配

### 纬度

移动端适配主要有两个维度：

- 适配不同像素密度。这一部分比较简单，针对不同的像素密度，使用 CSS 媒体查询，选择不同精度的图片，以保证图片不会失真

- 适配不同屏幕大小。由于不同的屏幕有着不同的逻辑像素大小，所以如果直接使用 px 作为开发单位，会使得开发的页面在某一款手机上可以准确显示，但是在另一款手机上就会失真。为了适配不同屏幕的大小，应按照比例来还原设计稿的内容。

为了能让页面的尺寸自适应，可以使用 rem，em，vw，vh 等相对单位。

### 百分比

将所有元素的尺寸都设置成百分比，这样来实现移动端适配，可行吗？

不可行。

因为 width 、height 、margin/padding 等属性虽然支持百分比，但是其默认的相对参考值是包含块而不是屏幕的尺寸。font-size 也支持百分比，但其相对参考值是父元素的 font-size 值。border-radius 、box-shadow 等属性也只能部分或完全不支持百分比值。

使用 vw 和 vh 是可行的，因为其比例是相对于屏幕尺寸的。

## 响应式开发

- 移动端优先。由于移动端页面限制条件比较多，如视口面积小、网速慢、考虑 touch 事件等等因素，从移动端页面扩展到 PC 端页面要更容易一些
- 使用媒体查询根据不同的视口宽度调整样式
- 使用流式布局来保证布局会随着视口宽度的改变进行调整
- 调整 viewport，避免浏览器使用虚拟 viewport