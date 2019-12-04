(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{176:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("当使用 rem 单位，他们转化为像素大小取决于页根元素的字体大小，即 html 元素的字体大小。 根元素字体大小乘以你 rem 值。")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("当使用 em 单位时，像素值将是 em 值乘以使用 em 单位的元素的字体大小。")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("em 单位取决于一个 font-size 值而非 html 元素的字体大小。")]),t._v(" "),a("p",[t._v("为此，em 单位的主要目的应该是允许保持在一个特定的设计元素范围内的可扩展性。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("不需要 em 单位，并且根据浏览器的字体大小设置缩放的任何尺寸。")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("简单地说，一切可扩展都应该使用 rem 单位。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("创建布局时，往往要以像素为单位更方便，但部署时应使用 rem 单位。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("布局中的列宽通常应该是 %，因此他们可以流畅适应无法预知大小的视区。")]),t._v(" "),a("p",[t._v("然而单一列一般仍然应使用 rem 值来设置最大宽度。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("让我们以一个快速符号点概括我们介绍的内容:")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://caibaojian.com/rem-vs-em.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("rem 与 em 的使用和区别详解"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://caibaojian.com/simple-flexible.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rem 自适应 js 之精简版 flexible.js"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 Flexible 实现手淘 H5 页面的终端适配"),a("OutboundLink")],1),t._v(" --- 这种方案现在已经被官方弃用")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/entry/5a619c62518825734a74c2cc#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("再聊移动端页面的适配"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5cddf289f265da038f77696c",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于移动端适配，你必须要知道的"),a("OutboundLink")],1),t._v(" --- 非常详细")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"css单位-rem-和-em"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css单位-rem-和-em","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS单位 rem 和 em")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动态-rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态-rem","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态 rem")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("获取设备 dpr")]),t._v(" "),a("li",[t._v("算出缩放比例 scale = 1/dpr")]),t._v(" "),a("li",[t._v("创建 meta 以及属性")]),t._v(" "),a("li",[t._v("将 scale 值赋给 initial-scale，maximum-scale")]),t._v(" "),a("li",[t._v("meta 插入到文档中")]),t._v(" "),a("li",[t._v("创建屏幕大小改变重新计算函数并监听")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dpr:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" docEle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    isIos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userAgent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/iphone|ipod|ipad/gi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dpr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" dpr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resizeEvent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orientationchange"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orientationchange"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  docEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dpr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dpr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" metaEle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meta"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  metaEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  metaEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initial-scale="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('",maximum-scale="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  docEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstElementChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("metaEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("recalCulate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" docEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" dpr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("640")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" dpr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    docEle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recalCulate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  win"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resizeEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" recalCulate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-sass-同步-psd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-sass-同步-psd","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 sass 同步 psd")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-scss line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("px2rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$px")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" 750 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$designWidth")]),t._v("/20 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这句是不是感觉很熟悉 这句其实跟上面的那段js是对应的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$designWidth")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 750"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如设计图是750")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.scss")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px2rem.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$designWidth")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 750"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如设计图是750")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".banner ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("px2rem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("300"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如设计稿上的banner是300px 就免去计算环节")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rem-与-em"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem-与-em","aria-hidden":"true"}},[this._v("#")]),this._v(" rem 与 em")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rem-单位如何转换为像素值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rem-单位如何转换为像素值","aria-hidden":"true"}},[this._v("#")]),this._v(" rem 单位如何转换为像素值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"em-单位如何转换为像素值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em-单位如何转换为像素值","aria-hidden":"true"}},[this._v("#")]),this._v(" em 单位如何转换为像素值")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"为什么使用-em-单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-em-单位","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么使用 em 单位")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("例如，您可能使用 em 值设置导航菜单项的"),s("code",[this._v("padding、 margin，line-height")]),this._v("等值。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我建议，当您使用 em 单位，"),s("code",[this._v("他们使用的元素的字体大小应设置对rem单位，以保留的可扩展性，但避免继承混淆")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"通常不使用-em-单位控制字体大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通常不使用-em-单位控制字体大小","aria-hidden":"true"}},[this._v("#")]),this._v(" 通常不使用 em 单位控制字体大小")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用-rem-单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-rem-单位","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 rem 单位")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这几乎在一个标准的设计中占据了一切，包括"),s("code",[this._v("heights，widths，padding，margin，border，font-size，shadows")]),this._v("，几乎包括你布局的每部分。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提示","aria-hidden":"true"}},[this._v("#")]),this._v(" 提示")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以使用预处理比如"),s("code",[this._v("Stylus / Sass / Less")]),this._v("，来自动转换单位或"),s("code",[this._v("PostCSS")]),this._v("之类的插件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("或者，您可以使用 "),s("code",[this._v("PXtoEM")]),this._v(" 手动做您的转换。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("始终使用 rem 单位做媒体查询")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"不要使用-em-或-rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要使用-em-或-rem","aria-hidden":"true"}},[this._v("#")]),this._v(" 不要使用 em 或 rem")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"多列布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多列布局","aria-hidden":"true"}},[this._v("#")]),this._v(" 多列布局")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"当元素应该是严格不可缩放的时候"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当元素应该是严格不可缩放的时候","aria-hidden":"true"}},[this._v("#")]),this._v(" 当元素应该是严格不可缩放的时候")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("rem 和 em 单位是由浏览器基于你的设计中的字体大小计算得到的像素值。")]),t._v(" "),a("li",[t._v("em 单位基于使用他们的元素的字体大小。")]),t._v(" "),a("li",[t._v("rem 单位基于 html 元素的字体大小。")]),t._v(" "),a("li",[t._v("em 单位可能受任何继承的父元素字体大小影响")]),t._v(" "),a("li",[t._v("rem 单位可以从浏览器字体设置中继承字体大小。")]),t._v(" "),a("li",[t._v("使用 em 单位应根据组件的字体大小而不是根元素的字体大小。")]),t._v(" "),a("li",[t._v("在不需要使用 em 单位，并且需要根据浏览器的字体大小设置缩放的情况下使用 rem。")]),t._v(" "),a("li",[t._v("使用 rem 单位，除非你确定你需要 em 单位，包括对字体大小。")]),t._v(" "),a("li",[t._v("媒体查询中使用 rem 单位")]),t._v(" "),a("li",[t._v("不要在多列布局中使用 em 或 rem -改用 %。")]),t._v(" "),a("li",[t._v("不要使用 em 或 rem，如果缩放会不可避免地导致要打破布局元素。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 资料")])}],!1,null,null,null);s.default=e.exports}}]);