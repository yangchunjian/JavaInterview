(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1711:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("在本问题中，有根树指满足以下条件的 有向 图。该树只有一个根节点，所有其他节点都是该根节点的后继。该树除了根节点之外的每一个节点都有且只有一个父节点，而根节点没有父节点。")]),t._v(" "),n("p",[t._v("输入一个有向图，该图由一个有着 n 个节点（节点值不重复，从 1 到 n）的树及一条附加的有向边构成。附加的边包含在 1 到 n 中的两个不同顶点间，这条附加的边不属于树中已存在的边。")]),t._v(" "),n("p",[t._v("结果图是一个以边组成的二维数组 edges 。 每个元素是一对 [ui, vi]，用以表示 有向 图中连接顶点 ui 和顶点 vi 的边，其中 ui 是 vi 的一个父节点。")]),t._v(" "),n("p",[t._v("返回一条能删除的边，使得剩下的图是有 n 个节点的有根树。若有多个答案，返回最后出现在给定二维数组的答案。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(816),alt:""}})]),t._v(" "),n("p",[t._v("输入：edges = [[1,2],[1,3],[2,3]]\n输出：[2,3]\n示例 2：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(817),alt:""}})]),t._v(" "),n("p",[t._v("输入：edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]\n输出：[4,1]")]),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("n == edges.length")]),t._v(" "),n("li",[t._v("3 <= n <= 1000")]),t._v(" "),n("li",[t._v("edges[i].length == 2")]),t._v(" "),n("li",[t._v("1 <= ui, vi <= n")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    // 寻找是否存在入度为 2 的顶点\n\n    // 如果存在入度为 2 的顶点\n    // 尝试删除指向该顶点的某一条边，看剩下的点是否能够构成树\n    // 如果可以构成树，直接返回该边，否则返回另一条边\n\n    Arrays.equals(e, remove)\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findRedundantDirectedConnection")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" in "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 寻找是否存在入度为 2 的顶点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("in"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果存在入度为 2 的顶点")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试删除指向该顶点的某一条边，看剩下的点是否能够构成树")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果可以构成树，直接返回该边，否则返回另一条边")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新初始化并查集")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除加入形成环的边")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断有向边构成的图形是否为树")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" remove"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化并查集")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1001")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" edges"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳过要删除的边")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remove"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 删除之后构成的图案不为树")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports},816:function(t,s){t.exports="data:image/jpeg;base64,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"},817:function(t,s,a){t.exports=a.p+"assets/img/graph2.5e537e5c.jpeg"}}]);