(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1987:function(s,t,a){"use strict";a.r(t);var n=a(12),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("在 R 行 C 列的矩阵上，我们从 (r0, c0) 面朝东面开始")]),s._v(" "),n("p",[s._v("这里，网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。")]),s._v(" "),n("p",[s._v("现在，我们以顺时针按螺旋状行走，访问此网格中的每个位置。")]),s._v(" "),n("p",[s._v("每当我们移动到网格的边界之外时，我们会继续在网格之外行走（但稍后可能会返回到网格边界）。")]),s._v(" "),n("p",[s._v("最终，我们到过网格的所有 R * C 个空间。")]),s._v(" "),n("p",[s._v("按照访问顺序返回表示网格位置的坐标列表。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：R = 1, C = 4, r0 = 0, c0 = 0\n输出：[[0,0],[0,1],[0,2],[0,3]]\n")])])]),n("p",[n("img",{attrs:{src:a(905),alt:""}})]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 2：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：R = 5, C = 6, r0 = 1, c0 = 4\n输出：[[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]\n")])])]),n("p",[n("img",{attrs:{src:a(906),alt:""}})]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("1 <= R <= 100")]),s._v(" "),n("li",[s._v("1 <= C <= 100")]),s._v(" "),n("li",[s._v("0 <= r0 < R")]),s._v(" "),n("li",[s._v("0 <= c0 < C")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("dir是方向指针，分别是dx和dy的下标0123")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("spiralMatrixIII")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("R")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" r0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" c0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("R")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" r0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" step "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//dir是方向指针，分别是dx和dy的下标0123")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" dir "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dx "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dy "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("R")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("step"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" dx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" dy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("R")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    pos"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            dir "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" dir"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" dir "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("step"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//两次加一次步长")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=r.exports},905:function(s,t){s.exports="data:image/png;base64,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"},906:function(s,t){s.exports="data:image/png;base64,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"}}]);