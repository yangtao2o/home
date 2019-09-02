(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{213:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),s._m(20),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 常用命令"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git教程 - 廖雪峰的官方网站"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/14WBS4GcZlEbBumfUagXMA",target:"_blank",rel:"noopener noreferrer"}},[s._v("珍藏多年的 Git 问题和操作清单"),n("OutboundLink")],1)])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/yangtao2o/git-command",target:"_blank",rel:"noopener noreferrer"}},[s._v("练习 Demo"),n("OutboundLink")],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"git-常用命令练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令练习","aria-hidden":"true"}},[this._v("#")]),this._v(" Git 常用命令练习")])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("使用 "),t("code",[this._v("git bash")]),this._v(" 的过程中，除了常用的那几条，其它的总需要查找手册，索性跟着大牛总结的文章走一遍吧")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Workspace: 工作区")]),this._v(" "),t("li",[this._v("Index / Stage: 暂存区")]),this._v(" "),t("li",[this._v("Repository: 仓库区（或本地仓库）")]),this._v(" "),t("li",[this._v("Remote: 远程仓库")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/19526072/49999253-4c690980-ffd1-11e8-892a-bff60b374d12.png",alt:"image"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"新建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在当前目录 git-command 下新建 Git 代码库，（会生成 .git 文件）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建目录 git-command 并将其初始化为 Git 代码库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init git-command\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从线上获取一个完整的项目代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/yangtao2o/git-command.git\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Git的设置文件为 "),t("code",[this._v(".gitconfig")]),this._v(" ，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示配置信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"yangtao"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx@.qq.com"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"增加、删除文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加、删除文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 增加、删除文件")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加指定文件到暂存区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add index.html\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加指定目录到暂存区，包括子目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add assets\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加当前目录的所有文件到暂存区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加每个变化前，都会要求确认")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于同一个文件的多处变化，可以实现分次提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add -p\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除工作区文件，并将这次删除加入暂存区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止追踪指定文件，但该文件会保留在工作区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件名，并放入暂存区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" index.html index-new.html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"代码提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码提交","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码提交")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存区提交到仓库区 ( -m (msg) )")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My first commit"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定文件提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". -m "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交工作区自上次 commit 之后的变化，直接到仓库区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交时显示所有的 diff 信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -v\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用一次新的 commit ，提交上一次提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果代码没有任何变化，则用来改写上一次 commit 的提交信息")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"new commit"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重做上一次 commit ，并包括指定文件的新变化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 分支")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有的本地分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有的远程分支 ( -r (remotes))")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有的本地分支和远程分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个分支，但依然停留在当前分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch primary\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建，并切换至 该分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b primary-yt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建，指向指定 commit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commitID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建，与指定的远程分支建立追踪关系")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --track "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote-branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到指定分支，并更新工作区")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch-name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到上一个分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立追踪关系，在现有分支与指定的远程分支之间")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote-branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并指定分支 master-yt 到当前分支 master")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge master-yt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择一个\b commit，合并进当前分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commitid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d master-ytt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch-name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -dr "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote/branch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 标签")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 列出标签")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" tag\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"查看信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看信息")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示有变更的文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前分支的版本历史")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"参考目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考目录")])}],!1,null,null,null);t.default=e.exports}}]);