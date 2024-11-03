(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{1465:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(712),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：root = [1,null,2,3]\n输出：[3,2,1]\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：root = []\n输出：[]\n")])])]),n("p",[t._v("示例 3：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：root = [1]\n输出：[1]\n")])])]),n("p"),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("树中节点的数目在范围 [0, 100] 内")]),t._v(" "),n("li",[t._v("-100 <= Node.val <= 100")])]),t._v(" "),n("p",[t._v("进阶：递归算法很简单，你可以通过迭代算法完成吗？")]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("递归")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postorderTraversal")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("postOrder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports},712:function(t,s){t.exports="data:image/jpeg;base64,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"}}]);