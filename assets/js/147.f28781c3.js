(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{2132:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[n("strong",[s._v("描述")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入两个递增的链表，单个链表的长度为n，合并这两个链表并使新链表中的节点仍然是递增排序的。\n数据范围： 0 =< n <= 10000，-1000 <= 节点值 <= 1000，\n要求：空间复杂度 O(1)，时间复杂度 O(n)\n")])])]),n("p",[s._v("如输入{1,3,5},{2,4,6}时，合并后的链表为{1,2,3,4,5,6}，所以对应的输出为{1,2,3,4,5,6}，转换过程如下图所示：\n"),n("img",{attrs:{src:a(964),alt:""}})]),s._v(" "),n("p",[s._v("或输入{-1,2,4},{1,3,4}时，合并后的链表为{-1,1,2,3,4,4}，所以对应的输出为{-1,1,2,3,4,4}，转换过程如下图所示：\n"),n("img",{attrs:{src:a(965),alt:""}})]),s._v(" "),n("p",[s._v("示例1")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：\n{1,3,5},{2,4,6}\n返回值：\n{1,2,3,4,5,6}\n")])])]),n("p",[s._v("示例2")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：\n{},{}\n返回值：\n{}\n")])])]),n("p",[s._v("示例3")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：\n{-1,2,4},{1,3,4}\n返回值：\n{-1,1,2,3,4,4}\n")])])]),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("设置虚拟头结点，同时遍历两个节点，比较两个节点值的结果，小的节点放在虚拟头节点后面，\n最后再把没有遍历完的节点接在虚拟头节点的后面")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Merge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" list1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" list2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 伪节点(哨兵)")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" fake "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 静止")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" pfake "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 动态")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 定义两个指针")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" p1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" list1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),s._v(" p2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" list2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 谁最小，就把谁卸下来，穿到伪节点这一串上")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" p2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                pfake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                p2"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                pfake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                p1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            \n            pfake"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pfake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最后肯定剩下一个null一个非空")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            pfake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            pfake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("p1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" fake"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports},964:function(s,t,a){s.exports=a.p+"assets/img/BM4_1.76447058.png"},965:function(s,t,a){s.exports=a.p+"assets/img/BM4_2.30af502d.png"}}]);