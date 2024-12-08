(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1558:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给你两个整数：m 和 n ，表示矩阵的维数。")]),t._v(" "),n("p",[t._v("另给你一个整数链表的头节点 head 。")]),t._v(" "),n("p",[t._v("请你生成一个大小为 m x n 的螺旋矩阵，矩阵包含链表中的所有整数。")]),t._v(" "),n("p",[t._v("链表中的整数从矩阵 左上角 开始、顺时针 按 螺旋 顺序填充。如果还存在剩余的空格，则用 -1 填充。")]),t._v(" "),n("p",[t._v("返回生成的矩阵。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(766),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]\n输出：[[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]\n解释：上图展示了链表中的整数在矩阵中是如何排布的。\n注意，矩阵中剩下的空格用 -1 填充。\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(767),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：m = 1, n = 4, head = [0,1,2]\n输出：[[0,1,2,-1]]\n解释：上图展示了链表中的整数在矩阵中是如何从左到右排布的。 \n注意，矩阵中剩下的空格用 -1 填充。\n")])])]),n("p"),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("1 <= m, n <= 10"),n("sup",[t._v("5")])]),t._v(" "),n("li",[t._v("1 <= m * n <= 10"),n("sup",[t._v("5")])]),t._v(" "),n("li",[t._v("链表中节点数目在范围 [1, m * n] 内")]),t._v(" "),n("li",[t._v("0 <= Node.val <= 1000")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("spiralMatrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n        一个模拟的万能转向trick(参考灵神)\n         */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上右下左四个进给方向")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dirs "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// idx为进给方向,x与y是遍历指针")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了进给第一步向右走了之后才赋值,初始化(x,y)=(0.-1)")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 链表还没走完就继续循环")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" newX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dirs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" dirs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 越界或者碰到已经覆盖过的->转向")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" newX "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" newY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" newY "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newX"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("idx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" dirs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" dirs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("idx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports},766:function(t,s,a){t.exports=a.p+"assets/img/ex1new.408fcf45.jpeg"},767:function(t,s){t.exports="data:image/jpeg;base64,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"}}]);