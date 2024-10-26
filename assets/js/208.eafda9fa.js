(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1885:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。")]),t._v(" "),n("p",[t._v("示例:\n输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]\n输出: 2\n解释:\n这五个点如下图所示。组成的橙色三角形是最大的，面积为2。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(869),alt:""}})]),t._v(" "),n("p",[t._v("注意:")]),t._v(" "),n("ul",[n("li",[t._v("3 <= points.length <= 50.")]),t._v(" "),n("li",[t._v("不存在重复的点。")]),t._v(" "),n("li",[t._v("-50 <= points[i][j] <= 50.")]),t._v(" "),n("li",[t._v("结果误差值在 10^-6 以内都认为是正确答案。")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("//  枚举 + 数学 向量叉积\n\n//三个点构成两个共起点的向量。\n//两个向量可作平行四边形，面积是它们构成的行列式值的绝对值。\n//三角形面积是平行四边形面积的一半。\n//不需要回头：如果某个点p1曾被选中作为起点，那么在p2作为起点时，不需要考虑p1作为终点的情况。\n//理由：设第三个点p3,向量p1p2、p1p3构成的三角形和向量p2p1、p2p3构成的三角形是同一个。\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  枚举 + 数学 向量叉积 ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("largestTriangleArea")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" points"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" xAB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" yAB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" xAC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" yAC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xAB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yAC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" xAC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yAB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xAB "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yAC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" xAC "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" yAB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},869:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAh0AAAG8CAIAAAD1qoBmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABzTSURBVHhe7dz5l1TlmcBx8x/kL5iTczI/TE5+CIwYjEjilsli4iSGLGqc6IxEYzJuUeMYFXdxRXBfISgIitCKijsKuALi1jTQLA0CTUN3V3dt3VXdVcyj9/GmRYQq+u3u53n5fk6dPnXft6i+C3W/falqDtkNAEA4dAUAEBJdAQCERFcAACHRFQBASHQFABDSAXZl06ZNeg8AgAEOpCuZTOYb3/iGLgAAMMCBdGXSpEmHHHKIfNVlAAA+V3dX5GLl61//unRFvuoQAACfq7srycVKgksWAMAe6utKerGS4JIFALCH+roy8GIlwSULAGCgOrqyx8VKgksWAMBAdXTlyxcrCS5ZAACpWruy14uVBJcsAIBUrV35qouVBJcsAIBETV3Zx8VKgksWAECipq7s+2IlwSULAEDU8b59SktyyIH8WQBA3OgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAABCoisAgJDoCgAgJLoCAAiJrgAAQqIrAICQ6AoAICS6AgAIia4AAEKiKwCAkOgKACAkugIACImuAFZUq1W9B3g2qK5kAQRSKpX0BQY4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Zh85R0eHHV2xj64ALox8V0TPG4+mz5mbfYGODi+6Yh9dAVww0RXRs2R6+rS5uX/T0WFEV+yjK4ALVroiiovvT585P+8yHR0udMU+ugK4YKgrovjy3emT5xdcpaPDgq7YR1cAF2x1RRRemJo+f/7p63R06NEV++gK4IK5rojCc7ek36Lw7E06OsToin10BXDBYldEYeEN6XcpPD8crze6Yh9dAVww2hWRb7gm/UbFl+7Q0SFDV+yjK4ALdrsi8k9ekX6v4qv36ujQoCv20RXABdNdEbkn/i/9dsXXH9LRIUBX7KMrgAvWuyJycy5Mv2PPspk6GhpdsY+uAC446IrIzjov/aY9b83W0aDoin10BXDBR1dEduaf0+/b++4TOhoOXbGPrgAuuOnK7v5ydvof02/du7JBxwOhK/bRFcAFP13ZvbtaKnQ/eHr63UvvP6sTIdAV++gK4IKnrohqsbv7vlPTFSh99IJODBpdsY+uAC4464qo5Nq77v5dug6l1a/qxODQFfvoCuCCv66ISldr1x2/SlejvHapTgwCXbGPrgAuuOyKqHRs6br9BF2TSWPK69/WiQNFV+yjK4ALXrsi+nduzNz602RNOq8+vG/TCp04IHTFProCuOC4K6K/dW3mph9qWq4b37flA52oH12xj64ALvjuiujb+nHnDUdpWiYf07dttU7Uia7YR1cAF9x3RfRtXtV57bhklTI3/6h/xzqdqAddsY+uAC7E0BVR3ri886qxmpbbju/ftUknakZX7KMrgAuRdEWUm9/suOLfkxXrmvqLSudWnagNXbGPrgAuxNMVUV7zerpuXXf+utLdphM1oCv20RXAhai6IkqNr6Sr133PyZV8h07sD12xj64ALsTWFVH68Pl0Dbvv/69qT00nVrpiH10BXIiwK6J31cJ0Jbsf+p9quUcnvhpdsY+uAC7E2RXRu2J+up7ZGWftruwnGHTFProCuBBtV0TvO4+nq5p95C86+hXoin10BXAh5q6InjdnpWubm32+ju4NXbGPrgAuRN4V0bN0RrrCubkX6+iX0BX76ArgQvxdEcXXHkjXOTfv7zr6RXTFProCuHBQdEUUX7knXe38gkk6OgBdsY+uAC4cLF0RhRenpWuef+paHf0cXbGPrgAuHERdEYVFt6YrX3jmRh39DF2xj64ALhxcXRGFZyan619YdJuO0hUP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"}}]);