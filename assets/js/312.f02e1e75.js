(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1278:function(s,a,t){"use strict";t.r(a);var n=t(12),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),t("p",[s._v("泰波那契序列 Tn 定义如下：")]),s._v(" "),t("p",[s._v("T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2")]),s._v(" "),t("p",[s._v("给你整数 n，请返回第 n 个泰波那契数 Tn 的值。")]),s._v(" "),t("p"),s._v(" "),t("p",[s._v("示例 1：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("输入：n = 4\n输出：4\n解释：\nT_3 = 0 + 1 + 1 = 2\nT_4 = 1 + 1 + 2 = 4\n")])])]),t("p",[s._v("示例 2：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("输入：n = 25\n输出：1389537\n")])])]),t("p"),s._v(" "),t("p",[s._v("提示：")]),s._v(" "),t("ul",[t("li",[s._v("0 <= n <= 37")]),s._v(" "),t("li",[s._v("答案保证是一个 32 位整数，即 answer <= 2^31 - 1。")])]),s._v(" "),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),t("p",[s._v("直接用递归的话会超时，给定的通项公式可以进一步推导 T(n+3) = T(n+2) + T(n+1) +T(n+0)， T(n+4) = T(n+3) + T(n+2) + T(n+1)， 两者相减 T(n+4) - T(n+3) = T(n+3) - T(n)， 所以T(n) = 2T(n-1) - T(n+4)")]),s._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tribonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tribonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tribonacci")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=r.exports}}]);