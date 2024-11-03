(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1639:function(A,s,t){"use strict";t.r(s);var a=t(12),n=Object(a.a)({},(function(){var A=this,s=A.$createElement,a=A._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":A.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[A._v("#")]),A._v(" 题目")]),A._v(" "),a("p",[A._v("给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。")]),A._v(" "),a("p",[A._v("网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。")]),A._v(" "),a("p",[A._v("岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。")]),A._v(" "),a("p"),A._v(" "),a("p",[A._v("示例 1：")]),A._v(" "),a("p",[a("img",{attrs:{src:t(793),alt:""}})]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v("输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]\n输出：16\n解释：它的周长是上面图片中的 16 个黄色的边\n")])])]),a("p",[A._v("示例 2：")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v("输入：grid = [[1]]\n输出：4\n")])])]),a("p",[A._v("示例 3：")]),A._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[A._v("输入：grid = [[1,0]]\n输出：4\n")])])]),a("p"),A._v(" "),a("p",[A._v("提示：")]),A._v(" "),a("ul",[a("li",[A._v("row == grid.length")]),A._v(" "),a("li",[A._v("col == grid[i].length")]),A._v(" "),a("li",[A._v("1 <= row, col <= 100")]),A._v(" "),a("li",[A._v("grid[i][j] 为 0 或 1")])]),A._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[A._v("#")]),A._v(" 思路")]),A._v(" "),a("p",[A._v("直接遍历数组，只要前面有相邻的方格，就-2")]),A._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[A._v("#")]),A._v(" 解法")]),A._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[A._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("class")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[A._v("Solution")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("// 直接遍历数组，只要前面有相邻的方格，就-2")]),A._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("public")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[A._v("islandPerimeter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[A._v("//重点关注前面遍历过得方格，如果之前有相邻方格，就-2;")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("grid "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("null")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("||")]),A._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" rsp "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("for")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("int")]),A._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("<")]),A._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(".")]),A._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                    rsp "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("+=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v(">")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("&&")]),A._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                        rsp "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("if")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("(")]),A._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v(">")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("0")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("&&")]),A._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("[")]),A._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("]")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("==")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(")")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("{")]),A._v("\n                        rsp "),a("span",{pre:!0,attrs:{class:"token operator"}},[A._v("-=")]),A._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[A._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[A._v("return")]),A._v(" rsp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v(";")]),A._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[A._v("}")]),A._v("\n")])]),A._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[A._v("1")]),a("br"),a("span",{staticClass:"line-number"},[A._v("2")]),a("br"),a("span",{staticClass:"line-number"},[A._v("3")]),a("br"),a("span",{staticClass:"line-number"},[A._v("4")]),a("br"),a("span",{staticClass:"line-number"},[A._v("5")]),a("br"),a("span",{staticClass:"line-number"},[A._v("6")]),a("br"),a("span",{staticClass:"line-number"},[A._v("7")]),a("br"),a("span",{staticClass:"line-number"},[A._v("8")]),a("br"),a("span",{staticClass:"line-number"},[A._v("9")]),a("br"),a("span",{staticClass:"line-number"},[A._v("10")]),a("br"),a("span",{staticClass:"line-number"},[A._v("11")]),a("br"),a("span",{staticClass:"line-number"},[A._v("12")]),a("br"),a("span",{staticClass:"line-number"},[A._v("13")]),a("br"),a("span",{staticClass:"line-number"},[A._v("14")]),a("br"),a("span",{staticClass:"line-number"},[A._v("15")]),a("br"),a("span",{staticClass:"line-number"},[A._v("16")]),a("br"),a("span",{staticClass:"line-number"},[A._v("17")]),a("br"),a("span",{staticClass:"line-number"},[A._v("18")]),a("br"),a("span",{staticClass:"line-number"},[A._v("19")]),a("br"),a("span",{staticClass:"line-number"},[A._v("20")]),a("br"),a("span",{staticClass:"line-number"},[A._v("21")]),a("br"),a("span",{staticClass:"line-number"},[A._v("22")]),a("br"),a("span",{staticClass:"line-number"},[A._v("23")]),a("br"),a("span",{staticClass:"line-number"},[A._v("24")]),a("br"),a("span",{staticClass:"line-number"},[A._v("25")]),a("br"),a("span",{staticClass:"line-number"},[A._v("26")]),a("br"),a("span",{staticClass:"line-number"},[A._v("27")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[A._v("#")]),A._v(" 总结")]),A._v(" "),a("ul",[a("li",[A._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=n.exports},793:function(A,s){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADVCAMAAADkSQVFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAALl6V//yAJnZ6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPjyQvgAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjEyQwRr7AAAAyNJREFUeF7t2tF6ojAUAGG3ff9n7oZkpMYiBz4JEpj/qisJOSPrHbefM7OuX1ev+16JbYfwso5ZN8Et9zdRx0gtcVJzT3WcvjuO31pdx1lHwEQrPW09bN0biEmqOq72jprkjHW/eY91XOsfPReq49IZUGRdhyh6qOPCOdB0zbrbOl+LsLgBph7RNNbx8R27FmL6EMu3x9QjorapO9yzI2+mjr9Ct6/bv4XSUjaF1gzQsi49FIYPpaVsCm1ax4cj63DIupJnXeD4dXz0yzpYB+tgHaaXDlmljg8eWAfrYB2sg3W1E9Xx70fWwTrsWTfkWRewDtbBOlhXsw7WwTpsVse/KtbBOlgH62BdzTqcu+6Qb3Qk83WNXrFhW4DFSzF1Zb6Oc0Ll/kuxKcTyhZi6ct1nt+LHdGuy9O2f6Exd+vo4JtSmLg3AKCHratbhoHUpzLqIdbAO1sG62nnqpvKsg3WwDtbBulr3dUOXdRHrYB2sg3U162AdrIN1mKrLcVeom8izDtbBOlgH62rW4Yh1uep1XedvdOSqmbokfX0LDCtXYV+AxQsx9ShXzdZxTKjcfzF2hVi+DFOPctWFnx1/hdb8RPd6gzFXbVKXvmiGD6WlbAptWPc3zzpYh73qSpR1IetgHayDdTXrcLy60pRYFzh+3Z8862AdrIN1sK7Wcx1JiXUB62AdrIN1tXPVPedZh6PVETSwLmAdrIN1sK5mHc5dd7A3OujJZupavY3TAlMP6Mlm6pg+VO7/WUw9oCe76LNr8wbjQX536aEwUWhFXbor9w9Zh8vXPeVZB+tgHaxDtZSawrqAdbAO1sE6rsI6WAfrYB2s4yqsg3WwDtbBOq7iZHVcvLMO1sE6WAfratbBOlgH67C+rts3OsgpXtYl6ZteYFj58Rd3mDohp7jXcW2UdjBSaN3SNpg6oaeYqevz2VV5r+r6RVBmXV8Iyi5Rx5UzKEGFdZ0pRZl1nSlFWanj83PIRcV0Xf7wfdxtZxw+4H9mexy9B05MdqsDAzTFUcnedRlTNMABdx+py5jnXdxt2ufqCmZcjG0LfbquLet69fPzH7MAp6qE1OcEAAAAAElFTkSuQmCC"}}]);