# 使用 VuePress 构建个人博客

- VuePress、Valine
- 我的博客示例：[yangtao.site/vuepress/](http://www.yangtao.site/vuepress/)

## 文档

- [VuePress 中文网](http://caibaojian.com/vuepress/)
- [Vuepress 搭建带评论功能的静态博客](https://www.vue-js.com/topic/5bf04edcfffaa30f33091dde)
- [Valine](https://valine.js.org/) - 一款快速、简洁且高效的无后端评论系统
- [Valine: 独立博客评论系统](https://deserts.io/diy-a-comment-system/)

## 开始

```bash
git clone https://github.com/yangtao2o/vuepress.git

cd vuepress

# 安装依赖
➜  vuepress git:(master) ✗ npm i

# 启动一个本地服务
➜  vuepress git:(master) ✗ npm run dev

> vuepress@1.0.0 dev /Users/yangtao/Documents/yangtao/myblog/vuepress
> vuepress dev docs

DONE  [11:06:21] Build 63b84b finished in 3731 ms!

> VuePress dev server listening at http://localhost:8080/vuepress/

# 构建发布
npm run deploy
```

## 报错

### Question

```js
(node:84725) UnhandledPromiseRejectionWarning: TypeError: res.getHeader is not a function
```

查看： [Issues](https://github.com/vuejs/vuepress/issues/1417)

解决：

While the npm user can re-install webpack-dev-middleware with a specific version:

```bash
npm install webpack-dev-middleware@3.6.0
```

When webpack-dev-middleware fixes the issue and publishes, the issue can be closed.
