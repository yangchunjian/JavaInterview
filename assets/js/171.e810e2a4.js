(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{1501:function(A,s,t){"use strict";t.r(s);var a=t(12),n=Object(a.a)({},(function(){var A=this,s=A.$createElement,a=A._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[A._v("#")]),A._v(" 题目")]),A._v(" "),a("p",[A._v("给你一个大小为 m x n 的矩阵 board 表示甲板，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.' ，返回在甲板 board 上放置的 战舰 的数量。")]),A._v(" "),a("p",[A._v("战舰 只能水平或者垂直放置在 board 上。换句话说，战舰只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状建造，其中 k 可以是任意大小。两艘战舰之间至少有一个水平或垂直的空位分隔 （即没有相邻的战舰）。")]),A._v(" "),a("p"),A._v(" "),a("p",[A._v("示例 1：")]),A._v(" "),a("p",[a("img",{attrs:{src:t(752),alt:""}})]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v('输入：board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]\n输出：2\n')])])]),a("p",[A._v("示例 2：")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v('输入：board = [["."]]\n输出：0\n')])])]),a("p"),A._v(" "),a("p",[A._v("提示：")]),A._v(" "),a("ul",[a("li",[A._v("m == board.length")]),A._v(" "),a("li",[A._v("n == board[i].length")]),A._v(" "),a("li",[A._v("1 <= m, n <= 200")]),A._v(" "),a("li",[A._v("board[i][j] 是 '.' 或 'X'")])]),A._v(" "),a("p",[A._v("进阶：你可以实现一次扫描算法，并只使用 O(1) 额外空间，并且不修改 board 的值来解决这个问题吗？")]),A._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[A._v("#")]),A._v(" 思路")]),A._v(" "),a("p",[A._v("当遍历到X时，只需要判断top和left是否为X，如果不是，就表示当前X是一个ship，因为不会给出错误测试用例，所以一次遍历即可")]),A._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[A._v("#")]),A._v(" 解法")]),A._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[A._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("class")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Solution")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 当遍历到X时，只需要判断top和left是否为X，如果不是，就表示当前X是一个ship，因为不会给出错误测试用例，所以一次遍历即可")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("countBattleships")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[A._v("'X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Boolean")]),A._v(" isShip "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[A._v("'X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                            isShip "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[A._v("'X'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                            isShip "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("isShip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                        count "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])]),A._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[A._v("1")]),a("br"),a("span",{staticClass:"line-number"},[A._v("2")]),a("br"),a("span",{staticClass:"line-number"},[A._v("3")]),a("br"),a("span",{staticClass:"line-number"},[A._v("4")]),a("br"),a("span",{staticClass:"line-number"},[A._v("5")]),a("br"),a("span",{staticClass:"line-number"},[A._v("6")]),a("br"),a("span",{staticClass:"line-number"},[A._v("7")]),a("br"),a("span",{staticClass:"line-number"},[A._v("8")]),a("br"),a("span",{staticClass:"line-number"},[A._v("9")]),a("br"),a("span",{staticClass:"line-number"},[A._v("10")]),a("br"),a("span",{staticClass:"line-number"},[A._v("11")]),a("br"),a("span",{staticClass:"line-number"},[A._v("12")]),a("br"),a("span",{staticClass:"line-number"},[A._v("13")]),a("br"),a("span",{staticClass:"line-number"},[A._v("14")]),a("br"),a("span",{staticClass:"line-number"},[A._v("15")]),a("br"),a("span",{staticClass:"line-number"},[A._v("16")]),a("br"),a("span",{staticClass:"line-number"},[A._v("17")]),a("br"),a("span",{staticClass:"line-number"},[A._v("18")]),a("br"),a("span",{staticClass:"line-number"},[A._v("19")]),a("br"),a("span",{staticClass:"line-number"},[A._v("20")]),a("br"),a("span",{staticClass:"line-number"},[A._v("21")]),a("br"),a("span",{staticClass:"line-number"},[A._v("22")]),a("br"),a("span",{staticClass:"line-number"},[A._v("23")]),a("br"),a("span",{staticClass:"line-number"},[A._v("24")]),a("br"),a("span",{staticClass:"line-number"},[A._v("25")]),a("br"),a("span",{staticClass:"line-number"},[A._v("26")]),a("br"),a("span",{staticClass:"line-number"},[A._v("27")]),a("br"),a("span",{staticClass:"line-number"},[A._v("28")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[A._v("#")]),A._v(" 总结")]),A._v(" "),a("ul",[a("li",[A._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=n.exports},752:function(A,s){A.exports="data:image/jpeg;base64,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"}}]);