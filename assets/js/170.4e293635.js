(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1476:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给你一个 m x n 的矩阵 matrix 和一个整数 k ，找出并返回矩阵内部矩形区域的不超过 k 的最大数值和。")]),t._v(" "),n("p",[t._v("题目数据保证总会存在一个数值和不超过 k 的矩形区域。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(744),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：matrix = [[1,0,1],[0,-2,3]], k = 2\n输出：2\n解释：蓝色边框圈出来的矩形区域 [[0, 1], [-2, 3]] 的数值和是 2，且 2 是不超过 k 的最大数字（k = 2）。\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：matrix = [[2,2,-1]], k = 3\n输出：3\n")])])]),n("p"),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("m == matrix.length")]),t._v(" "),n("li",[t._v("n == matrix[i].length")]),t._v(" "),n("li",[t._v("1 <= m, n <= 100")]),t._v(" "),n("li",[t._v("-100 <= matrix[i][j] <= 100")]),t._v(" "),n("li",[t._v("-10"),n("sup",[t._v("5")]),t._v(" <= k <= 10"),n("sup",[t._v("5")])])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("// 枚举所有 的小矩形\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 枚举所有 的小矩形")]),t._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxSumSubmatrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" xlen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xlen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ylen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("xlen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ylen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" xlen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ylen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" matrix"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MIN_VALUE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" xlen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" ylen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" xlen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" q "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" q "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ylen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},744:function(t,s){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACwAP8DASIAAhEBAxEB/8QAHgABAQEBAAIDAQEAAAAAAAAAAAgJBwUGAgMEAQr/xABMEAAABAMDBAoQBAQHAQEAAAAAAQIDBAUHBggRCRJ2tBMUGBkhOFiU0tQVMTQ1N0dUVVZxcoaSlcTFFkFTYSIjMpMXM0JRgpGxdXP/xAAcAQEAAwEAAwEAAAAAAAAAAAAABAUHAgEDBgj/xAA2EQABAQQCEAYDAQEAAAAAAAAAAQIDBAUGBxEVFzI0NTZScXOBg7Gys9ESUWGRkpMTIjEhQf/aAAwDAQACEQMRAD8A6ndwprXu8VYmb29fvj1Ls3ta084k7cBC7XfaQ1DRSkNmlTic/wDozSPONR4kZ48OBdV3HldOXpVbmsH0QybvgHn+n9pNcUKrAEqbjyunL0qtzWD6IbjyunL0qtzWD6IqsABKm48rpy9Krc1g+iG48rpy9Krc1g+iKrAASpuPK6cvSq3NYPohuPK6cvSq3NYPoiqwAEqbjyunL0qtzWD6I9JrhdUrNZ2itv7QTS+tUueQUssvNYyJlcXDQpMRzTcI4tcO4aU4khZEaDw4cFGLhHM7zvFrqzoNPtQeFrIcaw2sY5kOHt4ugxhuy3QqlXq/xJ/h5PLMy78L7T252aiYhnZNs7NmbHsLLuOG11445vbThjw4dx3oW8p6b00+ZR/Uh0vIy+OD3f8AuA0uH6PrLrepNRelEVKZe0wjp34LFlhFX9nbDS/7pVSng5e5fuGXjf8AVs8TIbehbynpvTT5lH9SDehbynpvTT5lH9SGvID4W77TLPd/Wnck2qh/JfcyG3oW8p6b00+ZR/Ug3oW8p6b00+ZR/UhryAXfaZZ7v607i1UP5L7mQ29C3lPTemnzKP6kG9C3lPTemnzKP6kNeQC77TLPd/WncWqh/JfcyG3oW8p6b00+ZR/Ug3oW8p6b00+ZR/UhryAXfaZZ7v607i1UP5L7mH1Asn5WW8XYNdQ7E2msZBS5Eyi5WbU1jYpp/ZYdeYs8GoZxOaZ9o87HDtkQ6RvQt5T03pp8yj+pCuslnxYH9MJ5rAr8LvtMs939adxaqH8l9zIbehbynpvTT5lH9SDehbynpvTT5lH9SGvIBd9plnu/rTuLVQ/kvuZDb0LeU9N6afMo/qQb0LeU9N6afMo/qQ15ALvtMs939adxaqH8l9zIbehbynpvTT5lH9SDehbynpvTT5lH9SGvIBd9plnu/rTuLVQ/kvuZDb0LeU9N6afMo/qQ8HbvJaXgae2ItDb6dWwp69L7NSqLnEW1CzCNU8tmHZU6tLZKhEpNZpQZERqIscMTLtjZUczvO8WurOg0+1B4TpXXrS+LjnMO8bd+FttlF/RP4qoi/wDTluVw7LKqln3M88kvaF+SzOpEI0XBGnJSV/x270hqnDOG6whZ/mQyUyWnf63XtSj6sa0QHcjfqHz9d6IlOI1dX0XZ7ZZgzO3ipLmTd8A8/wBP7Sa4oVWJUybvgHn+n9pNcUKrGTk8AAAAA/ilJQk1rUSUpLEzM8CIv9xONGL+lE681vnlCKfwNpX5tImYuIcmj8LDplsS3DuoaWbLiX1OKI1OFmmbaSMiM+DgxAo8AAABzO87xa6s6DT7UHh0wczvO8WurOg0+1B4WshxrDaxjmQ4e3i6CHcjL44Pd/7gNLhmjkZfHB7v/cBpcNArty7jt10XZEluCs7eKgAAZUTgA4peNvhUKutQcI5VS0rqJjMUmuClEuY2zHPoLtrJsjIkIx4M5akpM+AjMx6Rd7yjt2a8baVixVmJxN7P2ijDNMHLLRQiIZ2LMsTzWltuONKVgWJIz84/yI8DAFRAAAAAAAJAyWfFgf0wnmsCvxIGSz4sD+mE81gV+AAAAAAP4pSUJNa1ElKSxMzPAiL/AHE40Yv6UTrzW+eUIp/A2lfm0iZi4hyaPwsOmWxLcO6hpZsuJfU4ojU4WaZtpIyIz4ODECjwAAAHM7zvFrqzoNPtQeHTBzO87xa6s6DT7UHhayHGsNrGOZDh7eLoM28lp3+t17Uo+rGtEB3I36hkvktO/wBbr2pR9WNaIDuRv1DRK78uI3d9F2Q5ZgzO3ipLmTd8A8/0/tJrihVYlTJu+Aef6f2k1xQqsZMTwAAAM8b4VQb6VdqrWgurXdbFPSSy0ElmHnlrSUtpt1DrKXFtrijIkspJKyI22s51RfsZpEvZIiUvyC+lPpFEuIcel1mJtCOLbxzVKbioZJmWPDhiQ2se/wAlz2T/APBjRks+P3bf/wCRPtfYAGzQAAADmd53i11Z0Gn2oPDpg5ned4tdWdBp9qDwtZDjWG1jHMhw9vF0EO5GXxwe7/3AaXDNHIy+OD3f+4DS4aBXbl3HbrouyJLcFZ28VAAAyonGNlPpPIb4+VQtM3UuCRO7OyOMmWxy6JwUw5Dy/wDkMsqT/qb2TBRp7SsTxxIzHm8rJQiwNBZ/TSsNF7KyqxcY9Fuw7rMkgkQcPtmHNDzD6W2yJCVl/ERmRFjgWPaHicn4y5J8pxb+XTEjZiDctQ0SFEZGatuErg/4kZ+odey30Ywmm9Mpeav5y53GvEWJf0pYSRn/ANqIAaC0nteqoFMLJ24WWC59JYOYLLDDBbrKVK4PWZj2scnumSWJs7djpZI4wlE9B2Slja85OaeO10dssTwHWAAAAAEgZLPiwP6YTzWBX4kDJZ8WB/TCeawK/AAAAAZ43wqg30q7VWtBdWu62KeklloJLMPPLWkpbTbqHWUuLbXFGRJZSSVkRttZzqi/YzSJeyREpfkF9KfSKJcQ49LrMTaEcW3jmqU3FQyTMseHDEhtY9/kueyf/gxoyWfH7tv/APIn2vsADZoAAABzO87xa6s6DT7UHh0wczvO8WurOg0+1B4WshxrDaxjmQ4e3i6DNvJad/rde1KPqxrRAdyN+oZL5LTv9br2pR9WNaIDuRv1DRK78uI3d9F2Q5ZgzO3ipLmTd8A8/wBP7Sa4oVWJUybvgHn+n9pNcUKrGTE8AAAD4PEZtLIixM0n/wCDJvJu0UrJYW+3bC1dtqS2zs9JIqVzptiZTWQxUJCurXGsqQlLrjaUKNSSMyIj4SIzIazgAAAAADmd53i11Z0Gn2oPDpg5ned4tdWdBp9qDwtZDjWG1jHMhw9vF0EO5GXxwe7/ANwGlwzRyMvjg93/ALgNLhoFduXcduui7IktwVnbxUAADKicZiXu7pd4ukl51u+LdPkJ2hfin9uzGUsN7M8zEm3mPYsZyVPsup7aWzziMz4C4FFzw6JX3sonWCytobx9N10/sXZtRNxCH5W/K0JYNZKeSzDRK1RDjruYSc8zzSIiPEsCI9fgAH54CBhJXAQ0sgGUsw0IyhhltJcCG0JJKUl+xEREP0AAAAAACQMlnxYH9MJ5rAr8SBks+LA/phPNYFfgAAAAPg8Rm0siLEzSf/gybybtFKyWFvt2wtXbakts7PSSKlc6bYmU1kMVCQrq1xrKkJS642lCjUkjMiI+EiMyGs4AAAAAA5ned4tdWdBp9qDw6YOZ3neLXVnQafag8LWQ41htYxzIcPbxdBm3ktO/1uvalH1Y1ogO5G/UMl8lp3+t17Uo+rGtEB3I36hold+XEbu+i7IcswZnbxUlzJu+Aef6f2k1xQqsSpk3fAPP9P7Sa4oVWMmJ4AAAAAAAAAAAHM7zvFrqzoNPtQeHTBzO87xa6s6DT7UHhayHGsNrGOZDh7eLoIdyMvjg93/uA0uGaORl8cHu/wDcBpcNArty7jt10XZEluCs7eKgAAZUTgAAAAAAAAAACQMlnxYH9MJ5rAr8SBks+LA/phPNYFfgAAAAAAAAAAAAOZ3neLXVnQafag8OmDmd53i11Z0Gn2oPC1kONYbWMcyHD28XQZt5LTv9br2pR9WNaIDuRv1DJfJad/rde1KPqxrRAdyN+oaJXflxG7vouyHLMGZ28VM1bnd1yo1TKXTa0Fnr2lTbEMM2tnkE7LZLEpTDOOtxayU+RYkZKXiRqxNR4l28MCLue4ZrJy/a1c7T0h5TJu+Aef6f2k1xQqsZMTyQNwzWTl+1q52npBuGaycv2tXO09IV+AAkDcM1k5ftaudp6QbhmsnL9rVztPSFfgAJA3DNZOX7WrnaekG4ZrJy/a1c7T0hX4ACQNwzWTl+1q52npD0utdzarFl6NW9tNMb7tXZ7CSizE0jn5VHRSTho9tqFcWqHdLO4W3CSaFfsoxeY5ned4tdWdBp9qDwtZDjWG1jHMhw9vF0GX2TnoZbKtH+IP4Sr/bWmfYfsTtj8NvEjshsu283ZsTLHY9iVm//AKqFnbhmsnL9rVztPSHEMjL44Pd/7gNLhoFduXcduui7IktwVnbxUkDcM1k5ftaudp6QbhmsnL9rVztPSFfgMqJxIG4ZrJy/a1c7T0g3DNZOX7WrnaekK/AASBuGaycv2tXO09INwzWTl+1q52npCvwAEgbhmsnL9rVztPSDcM1k5ftaudp6Qr8ABl1cVuu1EqbQn8RWbvZVOsNDNT+awS5ZJolKYZbjcQZKfw4Dzl4lnY4niXbwwIqG3DNZOX7WrnaekGSz4sD+mE81gV+AJA3DNZOX7WrnaekG4ZrJy/a1c7T0hX4ACQNwzWTl+1q52npBuGaycv2tXO09IV+AAkDcM1k5ftaudp6QbhmsnL9rVztPSFfgAJA3DNZOX7WrnaekPS613NqsWXo1b200xvu1dnsJKLMTSOflUdFJOGj22oVxaod0s7hbcJJoV+yjF5jmd53i11Z0Gn2oPC1kONYbWMcyHD28XQZt5LTv9br2pR9WNaIDuRv1DJfJad/rde1KPqxrRAdyN+oaJXflxG7vouyHLMGZ28VJcybvgHn+n9pNcUKrEqZN3wDz/T+0muKFVjJieAAAAAcUvG3wqFXWoOEcqpaV1ExmKTXBSiXMbZjn0F21k2RkSEY8GctSUmfARmY9Iu95R27NeNtKxYqzE4m9n7RRhmmDllooREM7FmWJ5rS23HGlKwLEkZ+cf5EeBgCogAAAHM7zvFrqzoNPtQeHTBzO87xa6s6DT7UHhayHGsNrGOZDh7eLoIdyMvjg93/uA0uGaORl8cHu/wDcBpcNArty7jt10XZEluCs7eKgAAZUTgAdoSPWbKjXUKMWii7JxM8ndrJrL3VMRjNmoFEQiHcI8FIN55xppRlw45i1YYGR8PAAK4AcFu533bvl6GIelVNbURDU8h2jfdks1htqxpNF21pTipDhFjw7GtWH54DvQAAAACQMlnxYH9MJ5rAr8SBks+LA/phPNYFfgAAAAADhV42+nQG64cPA1OtO+qcxbWzw8llcOcTGuNY4Z5pxJDaTMjwNxSSPA8McDHqt3rKM3aLx9o2rGWVnU2kNoorHakrtDBohnYrDhMmltuONKVh/oz84/wAiPAwBT4AAADmd53i11Z0Gn2oPDpg5ned4tdWdBp9qDwtZDjWG1jHMhw9vF0GbeS07/W69qUfVjWiA7kb9QyXyWnf63XtSj6sa0QHcjfqGiV35cRu76LshyzBmdvFSXMm74B5/p/aTXFCqxKmTd8A8/wBP7Sa4oVWMmJ4AAAGNlPpPIb4+VQtM3UuCRO7OyOMmWxy6JwUw5Dy/+QyypP8Aqb2TBRp7SsTxxIzHm8rJQiwNBZ/TSsNF7KyqxcY9Fuw7rMkgkQcPtmHNDzD6W2yJCVl/ERmRFjgWPaHicn4y5J8pxb+XTEjZiDctQ0SFEZGatuErg/4kZ+odey30Ywmm9Mpeav5y53GvEWJf0pYSRn/2ogBoLSe16qgUwsnbhZYLn0lg5gssMMFuspUrg9ZmPaxye6ZJYmzt2OlkjjCUT0HZKWNrzk5p47XR2yxPAdYAAczvO8WurOg0+1B4dMHM7zvFrqzoNPtQeFrIcaw2sY5kOHt4ugh3Iy+OD3f+4DS4Zo5GXxwe7/3AaXDQK7cu47ddF2RJbgrO3ioABFd9HKP7kKpUtp5/g1+LOyEqRM9ufiLaGZnOLRmZm1Xcf6Mcc4u32hlROKrqnZ601rab2lsvYydsyaeTeVxEFAzB5KlIhXXEGknTJP8AEebjjwYHwfkI3ua5MGyFE02lmF4GQ2HqRNZi+2iWORECcbDw0MScV4sxTeal1Sz/AKiJR4EXCWJkPcrkOUD3ZVqbTWa/wk/CH4dl7Mds/Z7shs+yOGjNzdrNZuGGOOJ+oepX9r/cTSqMO79d+aXPaqzk0wbjkG0b/Yg3eBKUoTjskUojLNR2k4kpX5EYEf1IsjZmmWVWszZi7dCQsqbZtDKUvwMvPNh4Z1wknGspSk8Ep2I14oLgLEywIuAbWCDMntcCnFE5i9XuukX2RqTOW3FsQi3dm7Fpe4XFuuHjskSvEyUZHgkjURGozMxeYAAAACQMlnxYH9MJ5rAr8SBks+LA/phPNYFfgAAAAI9tbk6qV2rvKR95yq1s37Sy9anIyLs9PIRpUubShrNbI1moiJlpKc40LSpJ4Hj+YgK99LaMWvvl2CkdyKWyRyYZ0Cl9Vjmm0y/sgmIzkrZ2DBr+BBEpa0fw4FwnwGNibTTqndQ4OdUkKoEoKaTqXRUG9BQUyh1TBtlaDQ4tDRmpRGklHwmkyI+2QymvPUJn+S4tnY6sV22pE6egJ867LoyEnpQ8QtxTZE4bbhttoStpaTPtISpJlwKxMjIDYqFS+mFZTEqJTxNpJxRdo1YcJ/8AY+0eo0iqBDVWpbZOpcHDHDs2nk8JNUs8P8vZmkrNPDw8BmZD24ABzO87xa6s6DT7UHh0wczvO8WurOg0+1B4WshxrDaxjmQ4e3i6DNvJad/rde1KPqxrRAdyN+oZL5LTv9br2pR9WNaIDuRv1DRK78uI3d9F2Q5ZgzO3ipLmTd8A8/0/tJrihVYlTJu+Aef6f2k1xQqsZMTwAAAMxL3d0u8XSS863fFunyE7QvxT+3ZjKWG9meZiTbzHsWM5Kn2XU9tLZ5xGZ8BcCi54dEr72UTrBZW0N4+m66f2Ls2om4hD8rflaEsGslPJZholaohx13MJOeZ5pERHiWBEevwAD88BAwkrgIaWQDKWYaEZQwy2kuBDaEklKS/YiIiH6AAABzO87xa6s6DT7UHh0wczvO8WurOg0+1B4WshxrDaxjmQ4e3i6CHcjL44Pd/7gNLhmjkZfHB7v/cBpcNArty7jt10XZEluCs7eKgAAZUTjnN4m2FtLBUSthamnNmZnP7UQcsdKUS+XQTkW+7FL/gbNLTaVKVmmolHgR8CTGGlOLHZQKk9Qouq1h6KVThbWxuzG9Noynj8weNTqs5xZbahXCStR44qSRKwMyxwMyH+hEABj9Sq8RlbJpVCx8sttZ+pqLOxc/l7E3VE0vZh2kwS4hCXzW6UAk207GasV5xZpYniWGI2BAAAAAAEgZLPiwP6YTzWBX4kDJZ8WB/TCeawK/AAAAAZUXjrn95m7heaib1F0az7lo4OYxb8xflsKyT70K8/jthhyGIyW8y4ZmZG3iosT/pMiUfqk+o7f6yjdvrNKrxYBVN7GyFZk6p6WPStphCzLZXGoaJWt959SUkRGf8AAWHbSRnjsEAA8TZKzEpsVZeUWPkLGwy2SwTMBCo/NLTSCQnH98CIeWAAAHM7zvFrqzoNPtQeHTBzO87xa6s6DT7UHhayHGsNrGOZDh7eLoM28lp3+t17Uo+rGtEB3I36hkvktO/1uvalH1Y1ogO5G/UNErvy4jd30XZDlmDM7eKkuZN3wDz/AE/tJrihVYlTJu+Aef6f2k1xQqsZMTwAAAAAAAAAAAOZ3neLXVnQafag8OmDmd53i11Z0Gn2oPC1kONYbWMcyHD28XQQ7kZfHB7v/cBpcM0cjL44Pd/7gNLhoFduXcduui7IktwVnbxUAADKicAAAAAAAAAAASBks+LA/phPNYFfiQMlnxYH9MJ5rAr8AAAAAAAAAAAABzO87xa6s6DT7UHh0wczvO8WurOg0+1B4WshxrDaxjmQ4e3i6DNvJad/rde1KPqxrRAdyN+oZL5LTv8AW69qUfVjWiA7kb9Q0Su/LiN3fRdkOWYMzt4qRCVzOr1NWYqV00vW28kssjJhFTNUDLoKFZYQ/EOqddMiNKlHipR8KlGeBEWOBEPo3Pt6flj1O/twvQF1KZbWeKkEY+O1mP0yGVo2yiWFQnWCF9z7en5Y9Tv7cL0A3Pt6flj1O/twvQF0bWY/TINrMfpkPP5Gc1DxYIX3Pt6flj1O/twvQDc+3p+WPU7+3C9AXRtZj9Mg2sx+mQfkZzUFghfc+3p+WPU7+3C9ANz7en5Y9Tv7cL0BdG1mP0yDazH6ZB+RnNQWCF9z7en5Y9Tv7cL0B4m112W9JaGyc6kDt7G300RM5dEwaoGYph0wkUTjakG08aGzUTasc1RpIzzTPAsRf21mP0yA4Zg+DYyHuhoxYR8xEO0TxMqippRbKHhWfElhTFeIybFfYVw23Z1Y7Ev9oyL6sPq3uGvPnqx/O4vqw2kdk0veVnLh0GfqHw7ASzyZHwkNiu/UvznfwTuV9qnHqYvb3DXnz1Y/ncX1YN7hrz56sfzuL6sNoewEs8mR8JB2AlnkyPhILv1L8538E7i1Tj1MXt7hrz56sfzuL6sG9w1589WP53F9WG0PYCWeTI+Eg7ASzyZHwkF36l+c7+Cdxapx6mL29w1589WP53F9WDe4a8+erH87i+rDaHsBLPJkfCQdgJZ5Mj4SC79S/Od/BO4tU49TF7e4a8+erH87i+rBvcNefPVj+dxfVhtD2AlnkyPhIOwEs8mR8JBd+pfnO/gncWqcepi9vcNefPVj+dxfVg3uGvPnqx/O4vqw2h7ASzyZHwkHYCWeTI+Egu/UvznfwTuLVOPUxe3uGvPnqx/O4vqwb3DXnz1Y/ncX1YbQ9gJZ5Mj4SDsBLPJkfCQXfqX5zv4J3FqnHqYvb3DXnz1Y/ncX1YN7hrz56sfzuL6sNoewEs8mR8JB2AlnkyPhILv1L8538E7i1Tj1MXt7hrz56sfzuL6sG9w1589WP53F9WG0PYCWeTI+Eg7ASzyZHwkF36l+c7+Cdxapx6mL29w1589WP53F9WDe4a8+erH87i+rDaHsBLPJkfCQdgJZ5Mj4SC79S/Od/BO4tU49TPm5BdmqHQWeWiXbKJlEUmdqgdrnLnXXMzYdnzs/ZG0YY7KnDDHtH2uDHRCCI0wzZH2yIfnbksvaUS0MIIy/YfuIiSRERYEQy+klIoylUyeTWPsflbsWbCWE/VlGU/zQiE5y5ZcMIwz/AA//2Q=="}}]);