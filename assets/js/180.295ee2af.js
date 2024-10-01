(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1571:function(A,t,s){"use strict";s.r(t);var a=s(12),n=Object(a.a)({},(function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[A._v("#")]),A._v(" 题目")]),A._v(" "),a("p",[A._v("给定一个由非重叠的轴对齐矩形的数组 rects ，其中 rects[i] = [ai, bi, xi, yi] 表示 (ai, bi) 是第 i 个矩形的左下角点，(xi, yi) 是第 i 个矩形的右上角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。")]),A._v(" "),a("p",[A._v("在给定的矩形覆盖的空间内的任何整数点都有可能被返回。")]),A._v(" "),a("p",[A._v("请注意 ，整数点是具有整数坐标的点。")]),A._v(" "),a("p",[A._v("实现 Solution 类:")]),A._v(" "),a("ul",[a("li",[A._v("Solution(int[][] rects) 用给定的矩形数组 rects 初始化对象。")]),A._v(" "),a("li",[A._v("int[] pick() 返回一个随机的整数点 [u, v] 在给定的矩形所覆盖的空间内。")])]),A._v(" "),a("p",[A._v("示例 1：")]),A._v(" "),a("p",[a("img",{attrs:{src:s(774),alt:""}})]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v('输入: \n["Solution", "pick", "pick", "pick", "pick", "pick"]\n[[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]\n输出: \n[null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]]\n\n解释：\nSolution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);\nsolution.pick(); // 返回 [1, -2]\nsolution.pick(); // 返回 [1, -1]\nsolution.pick(); // 返回 [-1, -2]\nsolution.pick(); // 返回 [-2, -2]\nsolution.pick(); // 返回 [0, 0]\n')])])]),a("p"),A._v(" "),a("p",[A._v("提示：")]),A._v(" "),a("ul",[a("li",[A._v("1 <= rects.length <= 100")]),A._v(" "),a("li",[A._v("rects[i].length == 4")]),A._v(" "),a("li",[A._v("-10"),a("sup",[A._v("9")]),A._v(" <= ai < xi <= 10"),a("sup",[A._v("9")])]),A._v(" "),a("li",[A._v("-10"),a("sup",[A._v("9")]),A._v(" <= bi < yi <= 10"),a("sup",[A._v("9")])]),A._v(" "),a("li",[A._v("xi - ai <= 2000")]),A._v(" "),a("li",[A._v("yi - bi <= 2000")]),A._v(" "),a("li",[A._v("所有的矩形不重叠。")]),A._v(" "),a("li",[A._v("pick 最多被调用 10"),a("sup",[A._v("4")]),A._v(" 次。")])]),A._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[A._v("#")]),A._v(" 思路")]),A._v(" "),a("p",[A._v("数组")]),A._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[A._v("#")]),A._v(" 解法")]),A._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[A._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("class")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Solution")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("//先根据每一个矩阵点的数量按加权概率选取矩阵")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("//再等概率地选取矩阵中的各点")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("rects "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        areas "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("pick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("//随机选取[1,areas[areas.length - 1]]")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v(" areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<=")]),A._v(" areas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Math")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v(" rects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("new")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(",")]),A._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(rects);\n * int[] param_1 = obj.pick();\n */")]),A._v("\n")])]),A._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[A._v("1")]),a("br"),a("span",{staticClass:"line-number"},[A._v("2")]),a("br"),a("span",{staticClass:"line-number"},[A._v("3")]),a("br"),a("span",{staticClass:"line-number"},[A._v("4")]),a("br"),a("span",{staticClass:"line-number"},[A._v("5")]),a("br"),a("span",{staticClass:"line-number"},[A._v("6")]),a("br"),a("span",{staticClass:"line-number"},[A._v("7")]),a("br"),a("span",{staticClass:"line-number"},[A._v("8")]),a("br"),a("span",{staticClass:"line-number"},[A._v("9")]),a("br"),a("span",{staticClass:"line-number"},[A._v("10")]),a("br"),a("span",{staticClass:"line-number"},[A._v("11")]),a("br"),a("span",{staticClass:"line-number"},[A._v("12")]),a("br"),a("span",{staticClass:"line-number"},[A._v("13")]),a("br"),a("span",{staticClass:"line-number"},[A._v("14")]),a("br"),a("span",{staticClass:"line-number"},[A._v("15")]),a("br"),a("span",{staticClass:"line-number"},[A._v("16")]),a("br"),a("span",{staticClass:"line-number"},[A._v("17")]),a("br"),a("span",{staticClass:"line-number"},[A._v("18")]),a("br"),a("span",{staticClass:"line-number"},[A._v("19")]),a("br"),a("span",{staticClass:"line-number"},[A._v("20")]),a("br"),a("span",{staticClass:"line-number"},[A._v("21")]),a("br"),a("span",{staticClass:"line-number"},[A._v("22")]),a("br"),a("span",{staticClass:"line-number"},[A._v("23")]),a("br"),a("span",{staticClass:"line-number"},[A._v("24")]),a("br"),a("span",{staticClass:"line-number"},[A._v("25")]),a("br"),a("span",{staticClass:"line-number"},[A._v("26")]),a("br"),a("span",{staticClass:"line-number"},[A._v("27")]),a("br"),a("span",{staticClass:"line-number"},[A._v("28")]),a("br"),a("span",{staticClass:"line-number"},[A._v("29")]),a("br"),a("span",{staticClass:"line-number"},[A._v("30")]),a("br"),a("span",{staticClass:"line-number"},[A._v("31")]),a("br"),a("span",{staticClass:"line-number"},[A._v("32")]),a("br"),a("span",{staticClass:"line-number"},[A._v("33")]),a("br"),a("span",{staticClass:"line-number"},[A._v("34")]),a("br"),a("span",{staticClass:"line-number"},[A._v("35")]),a("br"),a("span",{staticClass:"line-number"},[A._v("36")]),a("br"),a("span",{staticClass:"line-number"},[A._v("37")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[A._v("#")]),A._v(" 总结")]),A._v(" "),a("ul",[a("li",[A._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=n.exports},774:function(A,t){A.exports="data:image/jpeg;base64,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"}}]);