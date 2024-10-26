(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1969:function(A,s,a){"use strict";a.r(s);var t=a(12),n=Object(t.a)({},(function(){var A=this,s=A.$createElement,t=A._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[A._v("#")]),A._v(" 题目")]),A._v(" "),t("p",[A._v("给你一个 n * n 的网格 grid ，上面放置着一些 1 x 1 x 1 的正方体。每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。")]),A._v(" "),t("p",[A._v("放置好正方体后，任何直接相邻的正方体都会互相粘在一起，形成一些不规则的三维形体。")]),A._v(" "),t("p",[A._v("请你返回最终这些形体的总表面积。")]),A._v(" "),t("p",[A._v("注意：每个形体的底面也需要计入表面积中。")]),A._v(" "),t("p"),A._v(" "),t("p",[A._v("示例 1：")]),A._v(" "),t("p",[t("img",{attrs:{src:a(904),alt:""}})]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[A._v("输入：grid = [[1,2],[3,4]]\n输出：34\n")])])]),t("p",[A._v("示例 2：")]),A._v(" "),t("p",[t("img",{attrs:{src:a(905),alt:""}})]),A._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[A._v("输入：grid = [[1,1,1],[1,0,1],[1,1,1]]\n输出：32\n")])])]),t("p",[A._v("示例 3：")]),A._v(" "),t("p",[t("img",{attrs:{src:a(906),alt:""}}),A._v("\n输入：grid = [[2,2,2],[2,1,2],[2,2,2]]\n输出：46")]),A._v(" "),t("p",[A._v("提示：")]),A._v(" "),t("ul",[t("li",[A._v("n == grid.length")]),A._v(" "),t("li",[A._v("n == grid[i].length")]),A._v(" "),t("li",[A._v("1 <= n <= 50")]),A._v(" "),t("li",[A._v("0 <= grid[i][j] <= 50")])]),A._v(" "),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[A._v("#")]),A._v(" 思路")]),A._v(" "),t("p",[A._v("// 首先，一个柱体一个柱体的看，每个柱体是由：2个底面（上表面/下表面）+ 所有的正方体都贡献了4个侧表面积。")]),A._v(" "),t("p",[A._v("// 然后，把柱体贴合在一起之后，我们需要把贴合的表面积给减掉，两个柱体贴合的表面积就是 两个柱体高的最小值*2。")]),A._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[A._v("#")]),A._v(" 解法")]),A._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[A._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("class")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Solution")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 首先，一个柱体一个柱体的看，每个柱体是由：2个底面（上表面/下表面）+ 所有的正方体都贡献了4个侧表面积。")]),A._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 然后，把柱体贴合在一起之后，我们需要把贴合的表面积给减掉，两个柱体贴合的表面积就是 两个柱体高的最小值*2。")]),A._v("\n\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[A._v("surfaceArea")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" n "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v(" area "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" i"),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" j"),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 先把grid[i][j]赋值给level，省掉了bound check，可以略微略微略微优化一下耗时...")]),A._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" level "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("level "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(">")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 一个柱体中：2个底面 + 所有的正方体都贡献了4个侧表面积 ")]),A._v("\n                    area "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+=")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("level "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<<")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 减掉 i 与 i-1 相贴的两份表面积")]),A._v("\n                    area "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-=")]),A._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(">")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("?")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[A._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("level"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v(" grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<<")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" \n                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 减掉 j 与 j-1 相贴的两份表面积")]),A._v("\n                    area "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-=")]),A._v(" j "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(">")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("?")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[A._v("min")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("level"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v(" grid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<<")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),A._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("  \n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" area"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])]),A._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[A._v("1")]),t("br"),t("span",{staticClass:"line-number"},[A._v("2")]),t("br"),t("span",{staticClass:"line-number"},[A._v("3")]),t("br"),t("span",{staticClass:"line-number"},[A._v("4")]),t("br"),t("span",{staticClass:"line-number"},[A._v("5")]),t("br"),t("span",{staticClass:"line-number"},[A._v("6")]),t("br"),t("span",{staticClass:"line-number"},[A._v("7")]),t("br"),t("span",{staticClass:"line-number"},[A._v("8")]),t("br"),t("span",{staticClass:"line-number"},[A._v("9")]),t("br"),t("span",{staticClass:"line-number"},[A._v("10")]),t("br"),t("span",{staticClass:"line-number"},[A._v("11")]),t("br"),t("span",{staticClass:"line-number"},[A._v("12")]),t("br"),t("span",{staticClass:"line-number"},[A._v("13")]),t("br"),t("span",{staticClass:"line-number"},[A._v("14")]),t("br"),t("span",{staticClass:"line-number"},[A._v("15")]),t("br"),t("span",{staticClass:"line-number"},[A._v("16")]),t("br"),t("span",{staticClass:"line-number"},[A._v("17")]),t("br"),t("span",{staticClass:"line-number"},[A._v("18")]),t("br"),t("span",{staticClass:"line-number"},[A._v("19")]),t("br"),t("span",{staticClass:"line-number"},[A._v("20")]),t("br"),t("span",{staticClass:"line-number"},[A._v("21")]),t("br"),t("span",{staticClass:"line-number"},[A._v("22")]),t("br"),t("span",{staticClass:"line-number"},[A._v("23")]),t("br"),t("span",{staticClass:"line-number"},[A._v("24")]),t("br"),t("span",{staticClass:"line-number"},[A._v("25")]),t("br"),t("span",{staticClass:"line-number"},[A._v("26")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[A._v("#")]),A._v(" 总结")]),A._v(" "),t("ul",[t("li",[A._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=n.exports},904:function(A,s){A.exports="data:image/jpeg;base64,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"},905:function(A,s){A.exports="data:image/jpeg;base64,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"},906:function(A,s){A.exports="data:image/jpeg;base64,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"}}]);