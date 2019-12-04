(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(t,e,i){"use strict";i.r(e);var o=i(0),s=Object(o.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("p",[t._v("主要区别是，NodeList 可以包含各种类型的节点，HTMLCollection 只能包含 HTML 元素节点。")]),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("NodeList 实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到 NodeList 实例。")]),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("NodeList 实例很像数组，可以使用 length 属性和 forEach 方法。但是，它不是数组，不能使用 pop 或 push 之类数组特有的方法。")]),t._v(" "),i("p",[t._v("如果 NodeList 实例要使用数组方法，可以将其转为真正的数组。")]),t._v(" "),i("p",[t._v("除了使用 forEach 方法遍历 NodeList 实例，还可以使用 for 循环。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("HTMLCollection 是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。")]),t._v(" "),i("p",[t._v("它的返回值是一个类似数组的对象，但是与 NodeList 接口不同，HTMLCollection 没有 forEach 方法，只能使用 for 循环遍历。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("共同点：")]),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("区别：")]),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("参考资料：")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"http://wangdoc.com/javascript/dom/nodelist.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeList 接口，HTMLCollection 接口"),i("OutboundLink")],1)]),t._v(" "),i("li",[i("a",{attrs:{href:"https://www.jianshu.com/p/f6ff5ebe45fd",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTMLCollection vs. NodeList"),i("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"html-理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html-理论","aria-hidden":"true"}},[this._v("#")]),this._v(" Html 理论")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"nodelist-和-htmlcollection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-和-htmlcollection","aria-hidden":"true"}},[this._v("#")]),this._v(" NodeList 和 HTMLCollection")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nodelist-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodelist-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" NodeList 接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("Node.childNodes")])]),this._v(" "),e("li",[e("code",[this._v("document.querySelectorAll()")]),this._v(" 等节点搜索方法")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("code",[t._v("NodeList.prototype.length")]),t._v("，length 属性返回 NodeList 实例包含的节点数量")]),t._v(" "),i("li",[i("code",[t._v("NodeList.prototype.forEach()")]),t._v("，遍历 NodeList 的所有成员")]),t._v(" "),i("li",[i("code",[t._v("NodeList.prototype.item()")]),t._v("，item 方法接受一个整数值作为参数，表示成员的位置，返回该位置上的成员。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("下面三个方法，都返回一个 ES6 的遍历器对象，"),e("code",[this._v("for...of")]),this._v(" 可获取每一个成员信息：")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("code",[t._v("NodeList.prototype.keys()")]),t._v("，返回键名的遍历器")]),t._v(" "),i("li",[i("code",[t._v("NodeList.prototype.values()")]),t._v("，返回键值的遍历器")]),t._v(" "),i("li",[i("code",[t._v("NodeList.prototype.entries()")]),t._v("，返回的遍历器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"htmlcollection-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlcollection-接口","aria-hidden":"true"}},[this._v("#")]),this._v(" HTMLCollection 接口")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("返回 HTMLCollection 实例的，主要是一些 Document 对象的集合属性，比如 "),e("code",[this._v("document.links")]),this._v("、"),e("code",[this._v("document.forms")]),this._v("、"),e("code",[this._v("document.images")]),this._v(" 等。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("HTMLCollection.prototype.length")])]),this._v(" "),e("li",[e("code",[this._v("HTMLCollection.prototype.item()")])]),this._v(" "),e("li",[e("code",[this._v("HTMLCollection.prototype.namedItem()")]),this._v("，参数是一个字符串，表示 id 属性或 name 属性的值，返回对应的元素节点。如果没有对应的节点，则返回 null。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比","aria-hidden":"true"}},[this._v("#")]),this._v(" 对比")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("类数组对象，有 length 属性")]),this._v(" "),e("li",[this._v("共同的方法：item，可以通过 item(index) 或者 item(id) 来访问返回结果中的元素")]),this._v(" "),e("li",[this._v("实时变动的（live），document 上的更改会反映到相关对象上（例外："),e("code",[this._v("document.querySelectorAll")]),this._v(" 返回的 NodeList 不是实时的）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("NodeList 可以包含任何节点类型，HTMLCollection 只包含元素节点（elementNode），elementNode 就是 HTML 中的标签")]),this._v(" "),e("li",[this._v("HTMLCollection 比 NodeList 多一项方法：namedItem，可以通过传递 id 或 name 属性来获取节点信息")])])}],!1,null,null,null);e.default=s.exports}}]);