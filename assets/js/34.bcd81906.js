(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1334:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。")]),s._v(" "),n("p",[s._v("给定一个由整数坐标组成的数组 queens ，表示黑皇后的位置；以及一对坐标 king ，表示白国王的位置，返回所有可以攻击国王的皇后的坐标(任意顺序)。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(635),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]\n输出：[[0,1],[1,0],[3,3]]\n解释： \n[0,1] 的皇后可以攻击到国王，因为他们在同一行上。 \n[1,0] 的皇后可以攻击到国王，因为他们在同一列上。 \n[3,3] 的皇后可以攻击到国王，因为他们在同一条对角线上。 \n[0,4] 的皇后无法攻击到国王，因为她被位于 [0,1] 的皇后挡住了。 \n[4,0] 的皇后无法攻击到国王，因为她被位于 [1,0] 的皇后挡住了。 \n[2,4] 的皇后无法攻击到国王，因为她和国王不在同一行/列/对角线上。\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(636),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]\n输出：[[2,2],[3,4],[4,4]]\n")])])]),n("p",[s._v("示例 3：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(637),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], king = [3,4]\n输出：[[2,3],[1,4],[1,6],[3,7],[4,3],[5,4],[4,5]]\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("1 <= queens.length <= 63")]),s._v(" "),n("li",[s._v("queens[i].length == 2")]),s._v(" "),n("li",[s._v("0 <= queens[i][j] < 8")]),s._v(" "),n("li",[s._v("king.length == 2")]),s._v(" "),n("li",[s._v("0 <= king[0], king[1] < 8")]),s._v(" "),n("li",[s._v("一个棋盘格上最多只能放置一枚棋子。")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("/**")]),s._v(" "),n("ol",[n("li",[s._v("使用seen数组判断棋盘该位置是否有queen，有为true,没有为false")]),s._v(" "),n("li",[s._v("遍历king的所有方向，并移动，如果遇到queen,则将该位置加入到结果中，并break跳出循环，说明该方向已找到，\n不用再继续找了\n*/")])]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n1. 使用seen数组判断棋盘该位置是否有queen，有为true,没有为false\n2. 遍历king的所有方向，并移动，如果遇到queen,则将该位置加入到结果中，并break跳出循环，说明该方向已找到，\n    不用再继续找了\n */")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("queensAttacktheKing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" queens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" king"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("seen "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" queen"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("queens"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            seen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("queen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("queen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" directions "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" dx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" directions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" dy"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" directions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("dy"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" king"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" king"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("dx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("dx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("dy"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("dy"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("dx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("dy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("asList")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports},635:function(s,t,a){s.exports=a.p+"assets/img/untitled-diagram.458b7f9c.jpeg"},636:function(s,t,a){s.exports=a.p+"assets/img/untitled-diagram-1-1-1.75e8c751.jpeg"},637:function(s,t,a){s.exports=a.p+"assets/img/untitled-diagram-2.80f083b1.jpeg"}}]);