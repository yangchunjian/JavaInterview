(window.webpackJsonp=window.webpackJsonp||[]).push([[725],{1823:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("给你一个由若干单词组成的句子 sentence ，单词间由空格分隔。每个单词仅由大写和小写英文字母组成。")]),t._v(" "),s("p",[t._v("请你将句子转换为 “山羊拉丁文（Goat Latin）”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。山羊拉丁文的规则如下：")]),t._v(" "),s("ul",[s("li",[t._v("如果单词以元音开头（'a', 'e', 'i', 'o', 'u'），在单词后添加\"ma\"。")]),t._v(" "),s("li",[t._v('例如，单词 "apple" 变为 "applema" 。')]),t._v(" "),s("li",[t._v('如果单词以辅音字母开头（即，非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"。')]),t._v(" "),s("li",[t._v('例如，单词 "goat" 变为 "oatgma" 。')]),t._v(" "),s("li",[t._v("根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从 1 开始。")]),t._v(" "),s("li",[t._v('例如，在第一个单词后添加 "a" ，在第二个单词后添加 "aa" ，以此类推。')])]),t._v(" "),s("p",[t._v("返回将 sentence 转换为山羊拉丁文后的句子。")]),t._v(" "),s("p"),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('输入：sentence = "I speak Goat Latin"\n输出："Imaa peaksmaaa oatGmaaaa atinLmaaaaa"\n')])])]),s("p",[t._v("示例 2：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('输入：sentence = "The quick brown fox jumped over the lazy dog"\n输出："heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"\n')])])]),s("p"),t._v(" "),s("p",[t._v("提示：")]),t._v(" "),s("ul",[s("li",[t._v("1 <= sentence.length <= 150")]),t._v(" "),s("li",[t._v("sentence 由英文字母和空格组成")]),t._v(" "),s("li",[t._v("sentence 不含前导或尾随空格")]),t._v(" "),s("li",[t._v("sentence 中的所有单词由单个空格分隔")])]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("StringBuilder sb = new StringBuilder();")]),t._v(" "),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toGoatLatin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" strs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" sb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" vowel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aeiouAEIOU"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tsb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vowel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("substring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ma"')]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" strs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ma"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\tsb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\tsb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);