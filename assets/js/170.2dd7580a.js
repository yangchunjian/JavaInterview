(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1402:function(s,t,a){"use strict";a.r(t);var n=a(12),p=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("在 x 轴上有一个一维的花园。花园长度为 n，从点 0 开始，到点 n 结束。")]),s._v(" "),n("p",[s._v("花园里总共有 n + 1 个水龙头，分别位于 [0, 1, ..., n] 。")]),s._v(" "),n("p",[s._v("给你一个整数 n 和一个长度为 n + 1 的整数数组 ranges ，其中 ranges[i] （下标从 0 开始）表示：如果打开点 i 处的水龙头，可以灌溉的区域为 [i -  ranges[i], i + ranges[i]] 。")]),s._v(" "),n("p",[s._v("请你返回可以灌溉整个花园的 最少水龙头数目 。如果花园始终存在无法灌溉到的地方，请你返回 -1 。")]),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(671),alt:"1685_example_1.png"}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：n = 5, ranges = [3,4,1,1,0,0]\n输出：1\n解释：\n点 0 处的水龙头可以灌溉区间 [-3,3]\n点 1 处的水龙头可以灌溉区间 [-3,5]\n点 2 处的水龙头可以灌溉区间 [1,3]\n点 3 处的水龙头可以灌溉区间 [2,4]\n点 4 处的水龙头可以灌溉区间 [4,4]\n点 5 处的水龙头可以灌溉区间 [5,5]\n只需要打开点 1 处的水龙头即可灌溉整个花园 [0,5] 。\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：n = 3, ranges = [0,0,0,0]\n输出：-1\n解释：即使打开所有水龙头，你也无法灌溉整个花园。\n")])])]),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("1 <= n <= 104")]),s._v(" "),n("li",[s._v("ranges.length == n + 1")]),s._v(" "),n("li",[s._v("0 <= ranges[i] <= 100")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("优先队列")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("minTaps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ranges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Queue")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" q"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("PriorityQueue")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ranges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("ranges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" max"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ans"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("poll")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                ans"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                max"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=p.exports},671:function(s,t){s.exports="data:image/png;base64,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"}}]);