(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1779:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("有 n 个城市通过一些航班连接。给你一个数组 flights ，其中 flights[i] = [fromi, toi, pricei] ，表示该航班都从城市 fromi 开始，以价格 pricei 抵达 toi。")]),t._v(" "),n("p",[t._v("现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到出一条最多经过 k 站中转的路线，使得从 src 到 dst 的 价格最便宜 ，并返回该价格。 如果不存在这样的路线，则输出 -1。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[t._v("输入:\nn = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]\nsrc = 0, dst = 2, k = 1\n输出: 200\n解释:\n城市航班图如下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(529),alt:""}})]),t._v(" "),n("p",[t._v("从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。\n示例 2：")]),t._v(" "),n("p",[t._v("输入:\nn = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]\nsrc = 0, dst = 2, k = 0\n输出: 500\n解释:\n城市航班图如下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(529),alt:""}})]),t._v(" "),n("p",[t._v("从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。")]),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("1 <= n <= 100")]),t._v(" "),n("li",[t._v("0 <= flights.length <= (n * (n - 1) / 2)")]),t._v(" "),n("li",[t._v("flights[i].length == 3")]),t._v(" "),n("li",[t._v("0 <= fromi, toi < n")]),t._v(" "),n("li",[t._v("fromi != toi")]),t._v(" "),n("li",[t._v("1 <= pricei <= 10"),n("sup",[t._v("4")])]),t._v(" "),n("li",[t._v("航班没有重复，且不存在自环")]),t._v(" "),n("li",[t._v("0 <= src, dst, k < n")]),t._v(" "),n("li",[t._v("src != dst")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("//使用动态规划求解")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用动态规划求解")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findCheapestPrice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" flights"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//dp[i][j]表示用了i次从src到达j地需要的最少花费")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//二维表格全部铺设成高昂价格")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//无论几次，从出发点到出发点总是花费为0")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("src"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//核心代码：")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" now "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" flights"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//到达该航线目的地的最小花费，要么是本次值不变，要么是用了少一次到达本次航线的出发点的最少花费加上本条航线要的钱")]),t._v("\n                dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MAX_VALUE "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},529:function(t,s){t.exports="data:image/png;base64,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"}}]);