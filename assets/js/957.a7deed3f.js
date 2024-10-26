(window.webpackJsonp=window.webpackJsonp||[]).push([[957],{2124:function(e,t,s){"use strict";s.r(t);var a=s(12),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[e._v("#")]),e._v(" 解答")]),e._v(" "),s("p",[e._v("问题：")]),e._v(" "),s("p",[e._v("The selected directory is not a valid home for Go SDK")]),e._v(" "),s("p",[e._v("出现这个错误的原因是 idea 的 Go-plugin 插件，和 Go 的sdk版本不匹配；")]),e._v(" "),s("p",[e._v("解决：")]),e._v(" "),s("p",[e._v("（1）在 golang 安装路径（SDK的安装路径）下寻找：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("go1.17.3\\src\\runtime\\internal\\sys\\zversion.go 文件\n")])])]),s("p",[e._v("（2）增加一个自己的版本，在 zversion.go 文件中追加如下行(你的版本号)并保存；")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("const TheVersion = `go1.17.3`\n")])])]),s("p",[e._v("（3）重启Goland，进行SDK配置；")]),e._v(" "),s("p",[e._v("一般这种情况下，Goland已经帮你自动配置SDK了；")])])}),[],!1,null,null,null);t.default=n.exports}}]);