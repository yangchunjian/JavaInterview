(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1948:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("你会得到一个字符串 s (索引从 0 开始)，你必须对它执行 k 个替换操作。替换操作以三个长度均为 k 的并行数组给出：indices, sources,  targets。")]),s._v(" "),n("p",[s._v("要完成第 i 个替换操作:")]),s._v(" "),n("ul",[n("li",[s._v("检查 子字符串  sources[i] 是否出现在 原字符串 s 的索引 indices[i] 处。")]),s._v(" "),n("li",[s._v("如果没有出现， 什么也不做 。")]),s._v(" "),n("li",[s._v("如果出现，则用 targets[i] 替换 该子字符串。")])]),s._v(" "),n("p",[s._v('例如，如果 s = "abcd" ， indices[i] = 0 , sources[i] = "ab"， targets[i] = "eee" ，那么替换的结果将是 "eeecd" 。')]),s._v(" "),n("p",[s._v("所有替换操作必须 同时 发生，这意味着替换操作不应该影响彼此的索引。测试用例保证元素间不会重叠 。")]),s._v(" "),n("ul",[n("li",[s._v('例如，一个 s = "abc" ，  indices = [0,1] ， sources = ["ab"，"bc"] 的测试用例将不会生成，因为 "ab" 和 "bc" 替换重叠。')])]),s._v(" "),n("p",[s._v("在对 s 执行所有替换操作后返回 结果字符串 。")]),s._v(" "),n("p",[s._v("子字符串 是字符串中连续的字符序列。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(888),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('输入：s = "abcd", indexes = [0,2], sources = ["a","cd"], targets = ["eee","ffff"]\n输出："eeebffff"\n解释：\n"a" 从 s 中的索引 0 开始，所以它被替换为 "eee"。\n"cd" 从 s 中的索引 2 开始，所以它被替换为 "ffff"。\n')])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(889),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('输入：s = "abcd", indexes = [0,2], sources = ["ab","ec"], targets = ["eee","ffff"]\n输出："eeecd"\n解释：\n"ab" 从 s 中的索引 0 开始，所以它被替换为 "eee"。\n"ec" 没有从原始的 S 中的索引 2 开始，所以它没有被替换。\n')])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("1 <= s.length <= 1000")]),s._v(" "),n("li",[s._v("k == indices.length == sources.length == targets.length")]),s._v(" "),n("li",[s._v("1 <= k <= 100")]),s._v(" "),n("li",[s._v("0 <= indexes[i] < s.length")]),s._v(" "),n("li",[s._v("1 <= sources[i].length, targets[i].length <= 50")]),s._v(" "),n("li",[s._v("s 仅由小写英文字母组成")]),s._v(" "),n("li",[s._v("sources[i] 和 targets[i] 仅由小写英文字母组成")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("startsWith")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("findReplaceString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" sources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" targets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("startsWith")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringBuilder")]),s._v(" sb "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n               sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("targets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n               i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sources"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports},888:function(s,t,a){s.exports=a.p+"assets/img/833-ex1.a3b89c0d.png"},889:function(s,t,a){s.exports=a.p+"assets/img/833-ex2-1.c084cadd.png"}}]);