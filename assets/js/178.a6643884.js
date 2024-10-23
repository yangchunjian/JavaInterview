(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1471:function(a,t,s){"use strict";s.r(t);var n=s(12),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),n("p",[a._v("给你 "),n("strong",[a._v("二维")]),a._v(" 平面上两个 "),n("strong",[a._v("由直线构成且边与坐标轴平行/垂直")]),a._v(" 的矩形，请你计算并返回两个矩形覆盖的总面积。")]),a._v(" "),n("p",[a._v("每个矩形由其 "),n("strong",[a._v("左下")]),a._v(" 顶点和 "),n("strong",[a._v("右上")]),a._v(" 顶点坐标表示：")]),a._v(" "),n("ul",[n("li",[a._v("第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。")]),a._v(" "),n("li",[a._v("第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。")])]),a._v(" "),n("p",[a._v("示例 1：")]),a._v(" "),n("p",[n("img",{attrs:{src:s(738),alt:""}})]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("输入：ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2\n输出：45\n")])])]),n("p",[a._v("示例 2：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("输入：ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2\n输出：16\n")])])]),n("p"),a._v(" "),n("p",[a._v("提示：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("-104 <= ax1, ay1, ax2, ay2, bx1, by1, bx2, by2 <= 10<sup>4</sup>\n")])])]),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),n("p",[a._v("【笔记】总面积=单个面积1+单个面积2-重叠面积。")]),a._v(" "),n("p",[a._v("但是，我们应该写成：（先做减法）")]),a._v(" "),n("p",[a._v("总面积 = 单个面积1 - 重叠面积 + 单个面积2")]),a._v(" "),n("p",[a._v("这样，才不会溢出。")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[a._v("\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br")])]),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("假设左边是 a, 右边是 b\n┌--------┓\n|        |\n|    ┌---╋-----┓ \n|    |   |     |\n┗----╋---┘     |\n     |         |\n     ┗---------┘\n\n┗、┓是已知的坐标\n求两个 ╋ 的坐标就好啦\n左下角: [x1, y1] = [max(ax1, bx1), max(ay1, ay2)]\n右上角: [x2, y2] = [min(ax2, bx2), min(ay2, by2)]\n所以, 重叠部分面积就是 (x2 - x1) * (y2 - y1)\n当然, 这是假设有重叠部分的前提下得出的结论\n如若没有重叠部分, 如下:\n┌--------┓\n|        |\n|        |  ┌---------┓ \n|        |  |         |\n┗--------┘  |         |\n            |         |\n            ┗---------┘\n那么 x1 = bx1, x2 = ax2 (用上述方式), 即 x2 - x1 < 0\n所以严谨的说, 重叠部分面积应该是:\nmax(0, x2 - x1) * max(0, y2 - y1)\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Solution")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("computeArea")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ax1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ay1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ax2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" ay2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" bx1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" by1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" bx2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" by2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x1"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ax1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("bx1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" y1"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ay1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("by1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" x2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ax2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("bx2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" y2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ay2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("by2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x1"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v("x2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v("y1"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v("y2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ax2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ax1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ay2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ay1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bx2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("bx1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("by2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("by1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ax2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ax1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ay2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ay1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("x2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("x1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("y1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bx2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("bx1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("by2"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("by1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),n("ul",[n("li",[a._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=r.exports},738:function(a,t,s){a.exports=s.p+"assets/img/rectangle-plane.300350bb.png"}}]);