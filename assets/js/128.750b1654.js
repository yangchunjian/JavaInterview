(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1843:function(t,s,a){"use strict";a.r(s);var n=a(12),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("存在一个 无向图 ，图中有 n 个节点。其中每个节点都有一个介于 0 到 n - 1 之间的唯一编号。给你一个二维数组 graph ，其中 graph[u] 是一个节点数组，由节点 u 的邻接节点组成。形式上，对于 graph[u] 中的每个 v ，都存在一条位于节点 u 和节点 v 之间的无向边。该无向图同时具有以下属性：")]),t._v(" "),n("ul",[n("li",[t._v("不存在自环（graph[u] 不包含 u）。")]),t._v(" "),n("li",[t._v("不存在平行边（graph[u] 不包含重复值）。")]),t._v(" "),n("li",[t._v("如果 v 在 graph[u] 内，那么 u 也应该在 graph[v] 内（该图是无向图）")]),t._v(" "),n("li",[t._v("这个图可能不是连通图，也就是说两个节点 u 和 v 之间可能不存在一条连通彼此的路径。")])]),t._v(" "),n("p",[t._v("二分图 定义：如果能将一个图的节点集合分割成两个独立的子集 A 和 B ，并使图中的每一条边的两个节点一个来自 A 集合，一个来自 B 集合，就将这个图称为 二分图 。")]),t._v(" "),n("p",[t._v("如果图是二分图，返回 true ；否则，返回 false 。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(853),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：graph = [[1,2,3],[0,2],[0,1,3],[0,2]]\n输出：false\n解释：不能将节点分割成两个独立的子集，以使每条边都连通一个子集中的一个节点与另一个子集中的一个节点。\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(854),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：graph = [[1,3],[0,2],[1,3],[0,2]]\n输出：true\n解释：可以将节点分成两组: {0, 2} 和 {1, 3} 。\n")])])]),n("p"),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("graph.length == n")]),t._v(" "),n("li",[t._v("1 <= n <= 100")]),t._v(" "),n("li",[t._v("0 <= graph[u].length < n")]),t._v(" "),n("li",[t._v("0 <= graph[u][i] <= n - 1")]),t._v(" "),n("li",[t._v("graph[u] 不会包含 u")]),t._v(" "),n("li",[t._v("graph[u] 的所有值 互不相同")]),t._v(" "),n("li",[t._v("如果 graph[u] 包含 v，那么 graph[v] 也会包含 u")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("dfs")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每个顶点的颜色，0是蓝色，1是绿色")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isBipartite")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将图放进类的成员变量中")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("graph "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        visited "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        colors "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*对每一个联通分量进行检测，如果有一个联通分量不是二分图，\n          整个图就不是二分图*/")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从v出发，检测是否满足二分图性质")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//染色")]),t._v("\n        colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" w"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" graph"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果相邻顶点w没有被遍历过就要去遍历w并染色")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("visited"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*通过相邻顶点w检测到不是二分图了就返回false，\n                  不需要再看其他相邻顶点了*/")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*如果相邻顶点遍历了而且颜色和当前这个顶点颜色一样，就不满足二分图性质\n              直接返回false，不需要再看其他相邻顶点了*/")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" colors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("w"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*所有相邻顶点都检查了都没发现违反二分图性质，\n          就代表从当前v出发去检测满足二分图，返回true*/")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=p.exports},853:function(t,s){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADeAN4DASIAAhEBAxEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAgGBAcJBQP/xABDEAABAgUCAgQMBAQEBwEAAAABAgMABAUGBwgREiETMXbSCRcYIjc4QVdYk5WzFFFhtCMyQnElUmJyFRYzNGN1grL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9U46tz1qSxdp1oMvVL8qb71SqS+go9ApjX4mqVZ8kANS0uDuo7kDiOyQSASCQC1JZ6oOnXF07flUlHKlUn3W6ZQKOxuX6tVHtxLyrYAJJUQSSASEpUQCQAevtMumWr2zV5jUHqDnWLozTdDQcm5txIXL29LqG6adIJO4aQgKKVLTzUeLmQSVBmJSW176iP8AEJqs0bTrZ8xzYk2pRFYuZ9rc7F5S9mZYqHDyTs4gkgg7Rzk+D1s+rD8RkDUJnS751fNx2fvV1tsH/Q20lIQn8hudoqyEBKS9AMhQB+KxXqdzlZ06jm2EXWqdkyf/ACS7ySHB+nEI+dO3trg0zAz+R6HTc/WFKjeZrFtSKadcsmykHidckQehmAAB5rR4usqUBFfQgMPh7NeNM82bL31i66Jas0x08DoR5j8o9tupl9o+c04PalQ/IjcEE7iJH1FYNunEF2Ter3S9IJlrpp7fT3racukok7vpqDxO7tp5JnEJ4locA4lHfrUdl0VibKVn5qx1QsoWHUBOUWvyomZdR5LbVuUracH9LiFhSFD2KSYDXQhCAQhCAQhCAQhCAQhCAQhCAR1bnrUli7TrQZeqX5U33qlUl9BR6BTGvxNUqz5IAalpcHdR3IHEdkgkAkEgFqSz1QdOuLp2/KpKOVKpPut0ygUdjcv1aqPbiXlWwASSogkkAkJSogEgA9faZdMtXtmrzGoPUHOsXRmm6Gg5NzbiQuXt6XUN006QSdw0hAUUqWnmo8XMgkqDMSktr31Ef4hNVmjadbPmObEm1KIrFzPtbnYvKXszLFQ4eSdnEEkEHaOcnwetn1YfiMgahM6XfOr5uOz96uttg/6G2kpCE/kNztFWQgJSXoBkKAPxWK9TucrOnUc2wi61TsmT/wCSXeSQ4P04hHzp29tcGmYGfyPQ6bn6wpUbzNYtqRTTrlk2Ug8TrkiD0MwAAPNaPF1lSgIr6EBh8PZrxpnmzZe+sXXRLVmmOngdCPMflHtt1MvtHzmnB7UqH5EbggncRI+orBt04guyb1e6XpBMtdNPb6e9bTl0lEnd9NQeJ3dtPJM4hPEtDgHEo79ajsuisTZSs/NWOqFlCw6gJyi1+VEzLqPJbatylbTg/pcQsKQoexSTATnLSnlEa96jNVA/iLP060xhqTYO5afuaoI41PEb7KLLCeEDYlDiQQRvFdRKfg9UirWfljIEx587d+V7jn3XD1htDqGm2/8AakIOw9m5irIBGfvHIVg47kW6pkC+LftmSeX0bcxWamzJNLX/AJQt1SQT+m8aCPNVvFdla1fCJZZtzOMnNVu1sY0linUmkIn35ZoKUUBSyplSFg8ZcUdlDclO+4EB6QUuq0uuU+Xq9FqUrUJGbQHZealXkutOoPUpC0khQP5gxyogbwcYmsX5s1AaXqfOzj1r2RW252htTL5cMs28twKQN/YQGyfzO5PMne+YBEi4BlPJ81d5I03sHobRvqSGSbQl+fRyjy3OhqMq3z2A6UBxKBsEoT1c94rqI71nXbbGIdSGmzNNz1mXo1Mp1Ur1Eqs8+SGxKTUiAOk23PCladx+RMBYkIn/AMvzRt8QlqfOc7sPL80bfEJanznO7AUBCJ/8vzRt8QlqfOc7sPL80bfEJanznO7AUBCJ/wDL80bfEJanznO7Dy/NG3xCWp85zuwFAQif/L80bfEJanznO7Dy/NG3xCWp85zuwFAQif8Ay/NG3xCWp85zuw8vzRt8QlqfOc7sBQEIn/y/NG3xCWp85zuw8vzRt8QlqfOc7sBhZaU8ojXvUZqoH8RZ+nWmMNSbB3LT9zVBHGp4jfZRZYTwgbEocSCCN4rqJL8HJPSV2Y/ydlWWmETSr7yjcFXTMp58cvxtoZSD/lCU8h7OKK0gEcapVOm0WnzNXrFQlpGRkmlPzM1MupaaZbSN1LWtRASkAEkk7ARyYg/wjdgak78sbIU+1kCnWxh21rb/AOJmnyTfFUa/OIRxKaeUD5kuFbe0b7c0K5KAW9btyW7d9FlbktOv06tUmeR0krP06abmZZ9G+3EhxslKhuCNwT1R9KJ08Hj6mWLf/Tn7zkUXAIjfDVQpOlrVTk7BFVqDVLsS8pJGSbVDyiliRedeEvUJVB5gAvFK0oGwSkdXPeLIjzI8NdKzdGo+Kr6os47JT7UzVaS68yrhU4y4mXdCSfaApkkf7jAUVoBWKBIZpxXNeZO2dlauoDZ6zJzKkPS7v9lgrI/tFWxIN7To0za4KbkefUJWws/SUtbVYmTslmTuWTSRIuOK32AeZ4mhy/m41E7CK+gEeauQ79qOgbW/kPN1847uet45ypTWVt1OiSrbxl5xPBu0ouLQgHjSrkpaSQsFPFsQPSqEBDXg57RvW576zHqsvC0qnbUvlKrtqokhUUFD6pJpS1B0pPPY8aQD1HhJTuOZuWEIBElanpGn5B1gaa8XzMjL1CXkX7guqrS77SXW0S7MmEMFaFAghTpUnmOsRWMxMMSjDk1NPNsssoLjjjiglKEgblRJ5AAcyTEk6UHX8/Z6yVrEmGlm3HkJsKwFuJ/6tJlHSqam0c/5HpkEpPIjhWDAUf4p8We7S1fo0t3IeKfFnu0tX6NLdyNXCAyninxZ7tLV+jS3ch4p8We7S1fo0t3I1cIDKeKfFnu0tX6NLdyHinxZ7tLV+jS3cjVwgMp4p8We7S1fo0t3IeKfFnu0tX6NLdyNXCAyninxZ7tLV+jS3ch4p8We7S1fo0t3I1cIDKeKfFnu0tX6NLdyHinxZ7tLV+jS3cjVwgJP8H4hm2KVmbEi2kMTFlZUrjLTCUhIEjMKQ9LOAexKgV7D8kxWESDe06NM2uCm5Hn1CVsLP0lLW1WJk7JZk7lk0kSLjit9gHmeJocv5uNROwivoBHReub1QMudlpz/APMd6QgJ08Hj6mWLf/Tn7zkUXCEAjzN8MhKV6/5vF2KrNp66jVWm6rcM3Lt81Ny6TLMNrI/IqW4P/mPS6YmGJRhyamnm2WWUFxxxxQSlCQNyok8gAOZJiRdK6BqIzpkzV7UpMP2xMoTYVg9O2FJfpMm8VzU2kHcFD00OJJ2BHCsHqgKFzXh6zc840reLr6ky7TKyxwB1AHTSj6ebUw0o/wArjawFA/psdwSD0Bg3UVdmILpldL2r2oNU+6ZZIYtO9X926bd8mkhLZ6VXmtzgHClaFHdStuZUocdcRkcpYmx1mqz5uw8oWnI1+iznNUvMpPE2sdTjS0kLacG52WghQ3PPnAa6ESLKYB1d6fP4Gm/NlNvq0Wf+3tDJKXHXpRvc/wAOWqLP8QgAgIQ4AhISOvnHFu3WdqQxDbFQufNOiKt06mUZkvz1Vol2yM/KBsEDpNgApCdyOR3IgLEj85iYYlGHJqaebZZZQXHHHFBKUJA3KiTyAA5kmJOkdT2sDINPlpnF+iKZkZeoMofl6tdV4ScrLobWkKQssIBdWCCD5pBj8ndKGes/PomNYmb2nrcKg4uwLCS7TqS71+ZNTSiJmZRzHmHbYpBCoD4mT8n3LreuWd066dao9L4zl3RL5DyHLj+A+x/XS6avqeccHmrcTukJPtSfPr2z7RtywbWpVlWhSWKZRaJKNyUjKMp2Q0yhOyR+p5bknmSSTuSYWjZ9rWDbkjaFlW/I0Si0xoMykjJMpaZaQPYEj2k8yeskkkknePsQCEIQCEIQCEIQCEIQCEIQCEIQGGzXh6zc840reLr6ky7TKyxwB1AHTSj6ebUw0o/yuNrAUD+mx3BIPQGDdRV2YgumV0vavag1T7plkhi071f3bpt3yaSEtnpVea3OAcKVoUd1K25lShx1xGRylibHWarPm7DyhacjX6LOc1S8yk8Tax1ONLSQtpwbnZaCFDc8+cBroRIspgHV3p8/gab82U2+rRZ/7e0MkpcdelG9z/Dlqiz/ABCACAhDgCEhI6+ccW7dZ2pDENsVC5806Iq3TqZRmS/PVWiXbIz8oGwQOk2ACkJ3I5HciAsSPzmJhiUYcmpp5tlllBccccUEpQkDcqJPIADmSYk6R1PawMg0+WmcX6IpmRl6gyh+Xq11XhJysuhtaQpCywgF1YIIPmkGPyd0oZ6z8+iY1iZvaetwqDi7AsJLtOpLvX5k1NKImZlHMeYdtikEKgPiZPyfcut65Z3Trp1qj0vjOXdEvkPIcuP4D7H9dLpq+p5xweatxO6Qk+1J8+vbPtG3LBtalWVaFJYplFoko3JSMoynZDTKE7JH6nluSeZJJO5JhaNn2tYNuSNoWVb8jRKLTGgzKSMkylplpA9gSPaTzJ6ySSSSd4+xAIQhAIn/AF+eptljs+59xEUBE/6/PU2yx2fc+4iA7VxP6LLN7P079s3GrjKYn9Flm9n6d+2bjVwCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCJ/1+eptljs+59xEUBE/6/PU2yx2fc+4iA7VxP6LLN7P079s3GrjKYn9Flm9n6d+2bjVwCEIQCEIQCJ/1+eptljs+59xEUBE/6/PU2yx2fc+4iA7VxP6LLN7P079s3GrjKYn9Flm9n6d+2bjVwCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCJ/1+eptljs+59xEUBE/wCvz1Nssdn3PuIgO1cT+iyzez9O/bNxq4ymJ/RZZvZ+nftm41cAhCEAhCEAif8AX56m2WOz7n3ERQET/r89TbLHZ9z7iIDtXE/oss3s/Tv2zcauMpif0WWb2fp37ZuNXAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIn/X56m2WOz7n3ERQET/r89TbLHZ9z7iIDtXE/oss3s/Tv2zcauMpif0WWb2fp37ZuNXAIQhAIQhAIn/X56m2WOz7n3ERQET/r89TbLHZ9z7iIDtXE/oss3s/Tv2zcauMpif0WWb2fp37ZuNXAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIQhAIn/X56m2WOz7n3ERQET/AK/PU2yx2fc+4iA7VxP6LLN7P079s3GrjKYn9Flm9n6d+2bjVwCEIQCEIQCJ/wBfnqbZY7PufcRFARP+vz1Nssdn3PuIgO1cT+iyzez9O/bNxq4ymJ/RZZvZ+nftm41cAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAif9fnqbZY7PufcRFARP+vz1Nssdn3PuIgO1cT+iyzez9O/bNxq4ymJ/RZZvZ+nftm41cAhCEAhCEAif9fnqbZY7PufcRFARP+vz1Nssdn3PuIgO1cT+iyzez9O/bNxq4ymJ/RZZvZ+nftm41cAhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEAif9fnqbZY7PufcRFARP8Ar89TbLHZ9z7iIDtXE/oss3s/Tv2zcauMpif0WWb2fp37ZuNXAIQhAI6tz1qSxdp1oMvVL8qb71SqS+go9ApjX4mqVZ8kANS0uDuo7kDiOyQSASCQC1JZ6oOnXF07flUlHKlUn3W6ZQKOxuX6tVHtxLyrYAJJUQSSASEpUQCQAevtMumWr2zV5jUHqDnWLozTdDQcm5txIXL29LqG6adIJO4aQgKKVLTzUeLmQSVBmJSW176iP8QmqzRtOtnzHNiTalEVi5n2tzsXlL2ZliocPJOziCSCDtH7T3g5Mf3ZJOy2Vc65svtU0nhmU1e8F/h1/mlLKEBKU/6ee0VpCAk9Hg/KVbDKF4k1MZwsqYYSEsNs3SqckQAOQXLPI2WkcuXEBHBnb21waZgZ/I9DpufrClRvM1i2pFNOuWTZSDxOuSIPQzAAA81o8XWVKAivoQGHw9mvGmebNl76xddEtWaY6eB0I8x+Ue23Uy+0fOacHtSofkRuCCdxEj6isG3TiC7JvV7pekEy1009vp71tOXSUSd301B4nd208kziE8S0OAcSjv1qOy6KxNlKz81Y6oWULDqAnKLX5UTMuo8ltq3KVtOD+lxCwpCh7FJMBroQhAIQhAIQhAIQhAIQhAIQhAI6tz1qSxdp1oMvVL8qb71SqS+go9ApjX4mqVZ8kANS0uDuo7kDiOyQSASCQC1JZ6oOnXF07flUlHKlUn3W6ZQKOxuX6tVHtxLyrYAJJUQSSASEpUQCQAevtMumWr2zV5jUHqDnWLozTdDQcm5txIXL29LqG6adIJO4aQgKKVLTzUeLmQSVBmJSW176iP8AEJqs0bTrZ8xzYk2pRFYuZ9rc7F5S9mZYqHDyTs4gkgg7R+094OTH92STstlXOubL7VNJ4ZlNXvBf4df5pSyhASlP+nntFaQgJPR4PylWwyheJNTGcLKmGEhLDbN0qnJEADkFyzyNlpHLlxARwZ29tcGmYGfyPQ6bn6wpUbzNYtqRTTrlk2Ug8TrkiD0MwAAPNaPF1lSgIr6EBh8PZrxpnmzZe+sXXRLVmmOngdCPMflHtt1MvtHzmnB7UqH5EbggncRI+orBt04guyb1e6XpBMtdNPb6e9bTl0lEnd9NQeJ3dtPJM4hPEtDgHEo79ajsuisTZSs/NWOqFlCw6gJyi1+VEzLqPJbatylbTg/pcQsKQoexSTATnLSnlEa96jNVA/iLP060xhqTYO5afuaoI41PEb7KLLCeEDYlDiQQRvFdRKfg9UirWfljIEx587d+V7jn3XD1htDqGm2/9qQg7D2bmKsgEZ28si4+xzJs1HIV929bErML6Np+s1RiSbcX/lSp1SQTzHIfnGiiFtaem/A1MuG5dXWqWpXLfFqUqmy1MkbRkVKlRJOLcQ2hTTqJloq3WokpJTuVE+dsBAW/S6rTK3T2KtRajKz8jNIDjEzKvJdadQepSVpJCh+oMcqIS8EZR6jJYTuury1flXLWrFyvzVvUNuqonn6PLEf9N/gUeicVuklB2Vy4iAVRdsAiRcAynk+au8kab2D0No31JDJNoS/Po5R5bnQ1GVb57AdKA4lA2CUJ6ue8V1Ed6zrttjEOpDTZmm56zL0amU6qV6iVWefJDYlJqRAHSbbnhStO4/ImAsSET/5fmjb4hLU+c53YeX5o2+IS1PnOd2AoCET/AOX5o2+IS1PnOd2Hl+aNviEtT5zndgKAhE/+X5o2+IS1PnOd2Hl+aNviEtT5zndgKAhE/wDl+aNviEtT5zndh5fmjb4hLU+c53YCgIRP/l+aNviEtT5zndh5fmjb4hLU+c53YCgIRP8A5fmjb4hLU+c53YeX5o2+IS1PnOd2AwstKeURr3qM1UD+Is/TrTGGpNg7lp+5qgjjU8RvsossJ4QNiUOJBBG8V1El+DknpK7Mf5OyrLTCJpV95RuCrpmU8+OX420MpB/yhKeQ9nFFaQCM/eWQ7AxzIIquQr5t+2JJ1fAiZrNTYkmlK/ILdUkE/pvGgiLsh6C6dmrUrdWatUNdp1xY9YpaZa3aI1VZyT/4a2gJKlvqR0YSnk4slDgG6vOB2gLDoleodzUtit25WZGq06aTxsTkjMIfYdT+aVoJSof2Mc6PPHwW9NlqZkjPEniuoT01hmVrjUvbKn3VOMqfSpzjU0pW5UOj6Pzt+Y4Cdyd49DoBEb4aqFJ0taqcnYIqtQapdiXlJIyTaoeUUsSLzrwl6hKoPMAF4pWlA2CUjq57xZEeZHhrpWbo1HxVfVFnHZKfamarSXXmVcKnGXEy7oST7QFMkj/cYCitAKxQJDNOK5rzJ2zsrV1AbPWZOZUh6Xd/ssFZH9oq2JBvadGmbXBTcjz6hK2Fn6SlrarEydksydyyaSJFxxW+wDzPE0OX83GonYRX0AiE836xsy6SdSFbVnK0a3ceFKzJINtzdApMuVykyeHdtxxZQFr340lK3EnhKVBKouyEBB/g3bNvaqZBzJqLn7EnrGtDJFTbet+hTjRYWpCVuLVMBrkADxgcQGyiVcJIG5vCEIBElanpGn5B1gaa8XzMjL1CXkX7guqrS77SXW0S7MmEMFaFAghTpUnmOsRWMxMMSjDk1NPNsssoLjjjiglKEgblRJ5AAcyTEk6UHX8/Z6yVrEmGlm3HkJsKwFuJ/wCrSZR0qmptHP8AkemQSk8iOFYMBR/inxZ7tLV+jS3ch4p8We7S1fo0t3I1cIDKeKfFnu0tX6NLdyHinxZ7tLV+jS3cjVwgMp4p8We7S1fo0t3IeKfFnu0tX6NLdyNXCAyninxZ7tLV+jS3ch4p8We7S1fo0t3I1cIDKeKfFnu0tX6NLdyHinxZ7tLV+jS3cjVwgMp4p8We7S1fo0t3IeKfFnu0tX6NLdyNXCAk/wAH4hm2KVmbEi2kMTFlZUrjLTCUhIEjMKQ9LOAexKgV7D8kxWESDe06NM2uCm5Hn1CVsLP0lLW1WJk7JZk7lk0kSLjit9gHmeJocv5uNROwivoBHk5r91uWxdmcXtN1yVe6qXii3JjobvXa7TLlSrkykBSpRJddbQhhJ2So8R3IUeE7AR6xwgJM0KaqtNmY6fOYh06Y6uW0qZZlPamTL1ORlWGlIWvg3Cmph1TjhUN1KXzPWSTFZwhAI8zfDISlev8Am8XYqs2nrqNVabqtwzcu3zU3LpMsw2sj8ipbg/8AmPS6YmGJRhyamnm2WWUFxxxxQSlCQNyok8gAOZJiRdK6BqIzpkzV7UpMP2xMoTYVg9O2FJfpMm8VzU2kHcFD00OJJ2BHCsHqgKFzXh6zc840reLr6ky7TKyxwB1AHTSj6ebUw0o/yuNrAUD+mx3BIPQGDdRV2YgumV0vavag1T7plkhi071f3bpt3yaSEtnpVea3OAcKVoUd1K25lShx1xGRylibHWarPm7DyhacjX6LOc1S8yk8Tax1ONLSQtpwbnZaCFDc8+cBroRG9Qw1qp0tUmbquCM6028rEpbZeFq5JaefekWATuiWqEuOmIAICELASkJHXzjpCV8NdR6NNzFFvrAE41PyThZedpNfS+y4odZSHWEKSP0JP94D03j85iYYlGHJqaebZZZQXHHHFBKUJA3KiTyAA5kmPNGU8MhN3/XpSzcVYGZaqtRX0cvN3DcBRLtq9hW2wwpSh/ZQjvRGlfOmogS9S1e5xambYfCH/wDkGwkPU2kvpI3CZqaWRMzCNiPMO2xSCFQHyMn5PuXW9cs7p1061R6XxnLuiXyHkOXH8B9j+ul01fU844PNW4ndISfak+fXtn2jblg2tSrKtCksUyi0SUbkpGUZTshplCdkj9Ty3JPMkknckwtGz7WsG3JG0LKt+RolFpjQZlJGSZS0y0gewJHtJ5k9ZJJJJO8fYgEIQgEIQgEIQgEIQgEIQgEIQgMNmvD1m55xpW8XX1Jl2mVljgDqAOmlH082phpR/lcbWAoH9NjuCQegMG6irsxBdMrpe1e1Bqn3TLJDFp3q/u3Tbvk0kJbPSq81ucA4UrQo7qVtzKlDjriMjlLE2Os1WfN2HlC05Gv0Wc5ql5lJ4m1jqcaWkhbTg3Oy0EKG5584DXQiN6hhrVTpapM3VcEZ1pt5WJS2y8LVyS08+9IsAndEtUJcdMQAQEIWAlISOvnHSEr4a6j0abmKLfWAJxqfknCy87Sa+l9lxQ6ykOsIUkfoSf7wHpvH5zEwxKMOTU082yyyguOOOKCUoSBuVEnkABzJMeaMp4ZCbv8Ar0pZuKsDMtVWor6OXm7huAol21ewrbYYUpQ/soR3ojSvnTUQJepavc4tTNsPhD//ACDYSHqbSX0kbhM1NLImZhGxHmHbYpBCoD5GT8n3LreuWd066dao9L4zl3RL5DyHLj+A+x/XS6avqeccHmrcTukJPtSfPr2z7RtywbWpVlWhSWKZRaJKNyUjKMp2Q0yhOyR+p5bknmSSTuSYWjZ9rWDbkjaFlW/I0Si0xoMykjJMpaZaQPYEj2k8yeskkkknePsQH//Z"},854:function(t,s){t.exports="data:image/jpeg;base64,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"}}]);