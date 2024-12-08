(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1417:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给你三个正整数 a、b 和 c。")]),s._v(" "),n("p",[s._v("你可以对 a 和 b 的二进制表示进行位翻转操作，返回能够使按位或运算   a OR b == c  成立的最小翻转次数。")]),s._v(" "),n("p",[s._v("「位翻转操作」是指将一个数的二进制表示任何单个位上的 1 变成 0 或者 0 变成 1 。")]),s._v(" "),n("p",[s._v("示例 1：\n"),n("img",{attrs:{src:a(667),alt:"sample_3_1676.png"}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：a = 2, b = 6, c = 5\n输出：3\n解释：翻转后 a = 1 , b = 4 , c = 5 使得 a OR b == c\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：a = 4, b = 2, c = 7\n输出：1\n")])])]),n("p",[s._v("示例 3：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：a = 1, b = 2, c = 3\n输出：0\n")])])]),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("1 <= a <= 10^9")]),s._v(" "),n("li",[s._v("1 <= b <= 10^9")]),s._v(" "),n("li",[s._v("1 <= c <= 10^9")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("Integer.bitCount")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("minFlips")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" d "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bitCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bitCount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports},667:function(s,t){s.exports="data:image/png;base64,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"}}]);