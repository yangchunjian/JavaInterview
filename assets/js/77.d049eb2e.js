(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1326:function(A,s,t){"use strict";t.r(s);var a=t(12),r=Object(a.a)({},(function(){var A=this,s=A.$createElement,a=A._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[A._v("#")]),A._v(" 题目")]),A._v(" "),a("p",[A._v("给定一个数组 coordinates ，其中 coordinates[i] = [x, y] ， [x, y] 表示横坐标为 x、纵坐标为 y 的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。")]),A._v(" "),a("p"),A._v(" "),a("p",[A._v("示例 1：")]),A._v(" "),a("p",[a("img",{attrs:{src:t(638),alt:""}})]),A._v(" "),a("p",[A._v("输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]\n输出：true\n示例 2：")]),A._v(" "),a("p",[a("img",{attrs:{src:t(639),alt:""}})]),A._v(" "),a("p",[A._v("输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]\n输出：false")]),A._v(" "),a("p"),A._v(" "),a("p",[A._v("提示：")]),A._v(" "),a("ul",[a("li",[A._v("2 <= coordinates.length <= 1000")]),A._v(" "),a("li",[A._v("coordinates[i].length == 2")]),A._v(" "),a("li",[A._v("-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4")]),A._v(" "),a("li",[A._v("coordinates 中不含重复的点")])]),A._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[A._v("#")]),A._v(" 思路")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v("// 线性回归是吧，判断有没有这样一个方程f(x)=kx+b，使得所有点都在线上\n\n// 注意直线与y轴平行的情况\n")])])]),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[A._v("#")]),A._v(" 解法")]),A._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[A._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("class")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Solution")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 线性回归是吧，判断有没有这样一个方程f(x)=kx+b，使得所有点都在线上")]),A._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 注意直线与y轴平行的情况")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("boolean")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("checkStraightLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" one"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" two"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("double")]),A._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v("two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v("two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v("two"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("double")]),A._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("MAX_VALUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" y"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v("coordinates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("!=")]),A._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("*")]),A._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+")]),A._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[A._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])]),A._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[A._v("1")]),a("br"),a("span",{staticClass:"line-number"},[A._v("2")]),a("br"),a("span",{staticClass:"line-number"},[A._v("3")]),a("br"),a("span",{staticClass:"line-number"},[A._v("4")]),a("br"),a("span",{staticClass:"line-number"},[A._v("5")]),a("br"),a("span",{staticClass:"line-number"},[A._v("6")]),a("br"),a("span",{staticClass:"line-number"},[A._v("7")]),a("br"),a("span",{staticClass:"line-number"},[A._v("8")]),a("br"),a("span",{staticClass:"line-number"},[A._v("9")]),a("br"),a("span",{staticClass:"line-number"},[A._v("10")]),a("br"),a("span",{staticClass:"line-number"},[A._v("11")]),a("br"),a("span",{staticClass:"line-number"},[A._v("12")]),a("br"),a("span",{staticClass:"line-number"},[A._v("13")]),a("br"),a("span",{staticClass:"line-number"},[A._v("14")]),a("br"),a("span",{staticClass:"line-number"},[A._v("15")]),a("br"),a("span",{staticClass:"line-number"},[A._v("16")]),a("br"),a("span",{staticClass:"line-number"},[A._v("17")]),a("br"),a("span",{staticClass:"line-number"},[A._v("18")]),a("br"),a("span",{staticClass:"line-number"},[A._v("19")]),a("br"),a("span",{staticClass:"line-number"},[A._v("20")]),a("br"),a("span",{staticClass:"line-number"},[A._v("21")]),a("br"),a("span",{staticClass:"line-number"},[A._v("22")]),a("br"),a("span",{staticClass:"line-number"},[A._v("23")]),a("br"),a("span",{staticClass:"line-number"},[A._v("24")]),a("br"),a("span",{staticClass:"line-number"},[A._v("25")]),a("br"),a("span",{staticClass:"line-number"},[A._v("26")]),a("br"),a("span",{staticClass:"line-number"},[A._v("27")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[A._v("#")]),A._v(" 总结")]),A._v(" "),a("ul",[a("li",[A._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},638:function(A,s){A.exports="data:image/jpeg;base64,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"},639:function(A,s){A.exports="data:image/jpeg;base64,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"}}]);