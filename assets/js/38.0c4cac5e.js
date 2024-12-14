(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1380:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。")]),t._v(" "),n("p",[t._v("如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。")]),t._v(" "),n("p",[t._v("请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。")]),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(654),alt:"untitled-diagram-6.jpg"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：grid = [[1,0],[0,1]]\n输出：0\n解释：没有一台服务器能与其他服务器进行通信。\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(655),alt:"untitled-diagram-4-1.jpg"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：grid = [[1,0],[1,1]]\n输出：3\n解释：所有这些服务器都至少可以与一台别的服务器进行通信。\n")])])]),n("p",[t._v("示例 3：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(656),alt:"untitled-diagram-1-3.jpg"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]\n输出：4\n解释：第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。\n")])])]),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("m == grid.length")]),t._v(" "),n("li",[t._v("n == grid[i].length")]),t._v(" "),n("li",[t._v("1 <= m <= 250")]),t._v(" "),n("li",[t._v("1 <= n <= 250")]),t._v(" "),n("li",[t._v("grid[i][j] == 0 or 1")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("一次遍历即可，T: o(mn) S: o(1)")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("countServers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一次遍历即可，T: o(mn) S: o(1)")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    cur"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},654:function(t,s){t.exports="data:image/jpeg;base64,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"},655:function(t,s){t.exports="data:image/jpeg;base64,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"},656:function(t,s,a){t.exports=a.p+"assets/img/untitled-diagram-1-3.c2ab0f6e.jpg"}}]);