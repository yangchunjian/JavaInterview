(window.webpackJsonp=window.webpackJsonp||[]).push([[609],{1680:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("最初记事本上只有一个字符 'A' 。你每次可以对这个记事本进行两种操作：")]),s._v(" "),a("ul",[a("li",[s._v("Copy All（复制全部）：复制这个记事本中的所有字符（不允许仅复制部分字符）。")]),s._v(" "),a("li",[s._v("Paste（粘贴）：粘贴 上一次 复制的字符。")])]),s._v(" "),a("p",[s._v("给你一个数字 n ，你需要使用最少的操作次数，在记事本上输出 恰好 n 个 'A' 。返回能够打印出 n 个 'A' 的最少操作次数。")]),s._v(" "),a("p"),s._v(" "),a("p",[s._v("示例 1：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("输入：3\n输出：3\n解释：\n最初, 只有一个字符 'A'。\n第 1 步, 使用 Copy All 操作。\n第 2 步, 使用 Paste 操作来获得 'AA'。\n第 3 步, 使用 Paste 操作来获得 'AAA'。\n")])])]),a("p",[s._v("示例 2：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("输入：n = 1\n输出：0\n")])])]),a("p"),s._v(" "),a("p",[s._v("提示：")]),s._v(" "),a("ul",[a("li",[s._v("1 <= n <= 1000")])]),s._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("n>1时 其实就是将n分解为m个数字的乘积 且m个数字的和最小 即把一个数分解为n个质数的和 从小到大的去试探")]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// n>1时 其实就是将n分解为m个数字的乘积 且m个数字的和最小 即把一个数分解为n个质数的和 从小到大的去试探")]),s._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("minSteps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                res "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports}}]);