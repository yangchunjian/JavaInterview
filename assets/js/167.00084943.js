(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1386:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给你一个大小为 m x n 的矩阵 mat 和一个整数阈值 threshold。")]),t._v(" "),n("p",[t._v("请你返回元素总和小于或等于阈值的正方形区域的最大边长；如果没有这样的正方形区域，则返回 0 。")]),t._v(" "),n("p",[t._v("示例 1：\n"),n("img",{attrs:{src:a(658),alt:"e1(1).png"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4\n输出：2\n解释：总和小于或等于 4 的正方形的最大边长为 2，如图所示。\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1\n输出：0\n")])])]),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("m == mat.length")]),t._v(" "),n("li",[t._v("n == mat[i].length")]),t._v(" "),n("li",[t._v("1 <= m, n <= 300")]),t._v(" "),n("li",[t._v("0 <= mat[i][j] <= 10"),n("sup",[t._v("4")])]),t._v(" "),n("li",[t._v("0 <= threshold <= 10"),n("sup",[t._v("5")])])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("前缀和")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxSideLength")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" threshold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n         * 涉及知识点 ： 1、 前缀和  2、 容斥原理\n         *              容斥原理：\n         *                  正方形面积 = 已求出的矩形面积运算得出\n\n         *                  sum[i][j] = mat[i][j] + sum[i - 1][j] + \n         *                              sum[i][j - 1] - sum[i - 1][j - 1]\n\n         *                  1  1  1      1  1     1  1  1       1  1\n         *                  1  1  1    = 1  1  +  1  1  1   -   1  1  +       \n         *                  1  1  1      1  1                             1\n\n         *                  ->  9 = 6 + 6 - 4 + 1\n         *              前缀和：\n         *                  计算所有位置面积以方便求解过程中使用         \n         */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         \n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据容斥原理计算前缀和")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据所求出前缀和求解")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从边长为1开始扩展正方形大小")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" threshold"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},658:function(t,s){t.exports="data:image/png;base64,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"}}]);