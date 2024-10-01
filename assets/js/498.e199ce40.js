(window.webpackJsonp=window.webpackJsonp||[]).push([[498],{1541:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("有 buckets 桶液体，其中 正好有一桶 含有毒药，其余装的都是水。它们从外观看起来都一样。")]),s._v(" "),n("p",[s._v("为了弄清楚哪只水桶含有毒药，你可以喂一些猪喝，通过观察猪是否会死进行判断。不幸的是，你只有 minutesToTest 分钟时间来确定哪桶液体是有毒的。")]),s._v(" "),n("p",[s._v("喂猪的规则如下：")]),s._v(" "),n("ul",[n("li",[s._v("选择若干活猪进行喂养")]),s._v(" "),n("li",[s._v("可以允许小猪同时饮用任意数量的桶中的水，并且该过程不需要时间。")]),s._v(" "),n("li",[s._v("小猪喝完水后，必须有 minutesToDie 分钟的冷却时间。在这段时间里，你只能观察，而不允许继续喂猪。")]),s._v(" "),n("li",[s._v("过了 minutesToDie 分钟后，所有喝到毒药的猪都会死去，其他所有猪都会活下来。")]),s._v(" "),n("li",[s._v("重复这一过程，直到时间用完。")]),s._v(" "),n("li",[s._v("给你桶的数目 buckets ，minutesToDie 和 minutesToTest ，返回 在规定时间内判断哪个桶有毒所需的 最小 猪数 。")])]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：buckets = 1000, minutesToDie = 15, minutesToTest = 60\n输出：5\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：buckets = 4, minutesToDie = 15, minutesToTest = 15\n输出：2\n")])])]),n("p",[s._v("示例 3：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：buckets = 4, minutesToDie = 15, minutesToTest = 30\n输出：2\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("1 <= buckets <= 1000")]),s._v(" "),n("li",[s._v("1 <= minutesToDie <= minutesToTest <= 100")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("//思路： 一个猪代表一个维度\n//       例如：两头猪代表两个维度,一头猪代表行row,一头猪代表列column\n//             通过minutesToTest/minutesToDie获取可以测试的轮数.\n//             如：我们有25个桶,5行5列. \n//                 第1次,测试第1行,第1列\n//                 第2次,测试第2行,第2列 ......\n//                 行猪死在第3次,列猪死在第2次,说明第3行第2列的桶是***\n//                 实际上,并不用测试满5次,第4次时就可以确定答案了\n//                 如果测试完第4次后,行猪和列猪都没有死,说明第5行第5列的桶是***,而无需额外的测试\n//             所以每一个维度的最大值为minutesToTest/minutesToDie+1\n//             那么我们只需要确定需要有多少个维度(猪)能够满足条件即可\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//思路： 一个猪代表一个维度")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//       例如：两头猪代表两个维度,一头猪代表行row,一头猪代表列column")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             通过minutesToTest/minutesToDie获取可以测试的轮数.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             如：我们有25个桶,5行5列. ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//                 第1次,测试第1行,第1列")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//                 第2次,测试第2行,第2列 ......")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//                 行猪死在第3次,列猪死在第2次,说明第3行第2列的桶是***")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//                 实际上,并不用测试满5次,第4次时就可以确定答案了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//                 如果测试完第4次后,行猪和列猪都没有死,说明第5行第5列的桶是***,而无需额外的测试")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             所以每一个维度的最大值为minutesToTest/minutesToDie+1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             那么我们只需要确定需要有多少个维度(猪)能够满足条件即可")]),s._v("\n\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("poorPigs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" buckets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" minutesToDie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" minutesToTest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pigs "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maxRound "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" minutesToTest"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("minutesToDie"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("maxRound"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pigs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" buckets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            pigs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pigs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports}}]);