(window.webpackJsonp=window.webpackJsonp||[]).push([[503],{1558:function(s,a,n){"use strict";n.r(a);var t=n(12),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给定方法 rand7 可生成 [1,7] 范围内的均匀随机整数，试写一个方法 rand10 生成 [1,10] 范围内的均匀随机整数。")]),s._v(" "),n("p",[s._v("你只能调用 rand7() 且不能调用其他方法。请不要使用系统的 Math.random() 方法。")]),s._v(" "),n("p",[s._v("每个测试用例将有一个内部参数 n，即你实现的函数 rand10() 在测试时将被调用的次数。请注意，这不是传递给 rand10() 的参数。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入: 1\n输出: [2]\n")])])]),n("p",[s._v("示例 2:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入: 2\n输出: [2,8]\n")])])]),n("p",[s._v("示例 3:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入: 3\n输出: [3,8,10]\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示:")]),s._v(" "),n("ul",[n("li",[s._v("1 <= n <= 10"),n("sup",[s._v("5")])])]),s._v(" "),n("p",[s._v("进阶:")]),s._v(" "),n("ul",[n("li",[s._v("rand7()调用次数的 期望值 是多少 ?")]),s._v(" "),n("li",[s._v("你能否尽量少调用 rand7() ?")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("//方法是，把等概率产生数的空间扩大\n//使得该空间大于要产生新的数的范围，然后\n//找到最接近这个空间的一个值k，使得k%新数==0\n//也就是说使得k是这个要新生成数的倍数。\n\n//对于本例子来讲，就是把等概率产生数的空间扩大至0-48\n//然后取最接近48且为10的倍数的一个值k，这个值是40\n//然后每次产生一个新值，若该值小于40，那么对该值mod10\n//也就是说新空间中的0，10，20，30代表10；1，11，21，31\n//代表1；2，12，22，32代表2；以此类推。\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * The rand7() API is already defined in the parent class SolBase.\n * public int rand7();\n * @return a random integer in the range 1 to 7\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 都是把等概率空间扩大，然后从大的等概率空间中取小范围的数。")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只不过第一种速度较慢。因为多余空间较多，而第二种较快，因为多余空间较少。")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SolBase")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方法是，把等概率产生数的空间扩大")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使得该空间大于要产生新的数的范围，然后")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//找到最接近这个空间的一个值k，使得k%新数==0")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//也就是说使得k是这个要新生成数的倍数。")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对于本例子来讲，就是把等概率产生数的空间扩大至0-48")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//然后取最接近48且为10的倍数的一个值k，这个值是40")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//然后每次产生一个新值，若该值小于40，那么对该值mod10")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//也就是说新空间中的0，10，20，30代表10；1，11，21，31")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//代表1；2，12，22，32代表2；以此类推。")]),s._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rand10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rand7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rand7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);