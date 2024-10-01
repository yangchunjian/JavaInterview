(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1234:function(s,t,a){"use strict";a.r(t);var n=a(12),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给定一棵二叉树的根 root，请你考虑它所有 从根到叶的路径：从根到任何叶的路径。（所谓一个叶子节点，就是一个没有子节点的节点）")]),s._v(" "),n("p",[s._v("假如通过节点 node 的每种可能的 “根-叶” 路径上值的总和全都小于给定的 limit，则该节点被称之为「不足节点」，需要被删除。")]),s._v(" "),n("p",[s._v("请你删除所有不足节点，并返回生成的二叉树的根。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(602),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1\n")])])]),n("p",[n("img",{attrs:{src:a(603),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输出：[1,2,3,4,null,null,7,8,9,null,14]\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(604),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22\n")])])]),n("p",[n("img",{attrs:{src:a(605),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输出：[5,4,8,11,null,17,4,7,null,null,null,5]\n")])])]),n("p",[s._v("示例 3：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(606),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：root = [5,-6,-6], limit = 0\n输出：[]\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("给定的树有 1 到 5000 个节点")]),s._v(" "),n("li",[s._v("-10^5 <= node.val <= 10^5")]),s._v(" "),n("li",[s._v("-10^9 <= limit <= 10^9")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("如果是叶子节点，直接返回\n非叶子节点，递归计算左右子节点\n如果左右子节点被删，当前节点也不要，直接返回null\n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是叶子节点，直接返回")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 非叶子节点，递归计算左右子节点")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果左右子节点被删，当前节点也不要，直接返回null")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sufficientSubset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" limit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sufficientSubset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sufficientSubset")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("limit"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports},602:function(s,t,a){s.exports=a.p+"assets/img/insufficient-1.75c8c316.png"},603:function(s,t,a){s.exports=a.p+"assets/img/insufficient-2.46d1dcec.png"},604:function(s,t,a){s.exports=a.p+"assets/img/insufficient-3.fb9ecc0a.png"},605:function(s,t,a){s.exports=a.p+"assets/img/insufficient-4.3a70bb03.png"},606:function(s,t){s.exports="data:image/png;base64,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"}}]);