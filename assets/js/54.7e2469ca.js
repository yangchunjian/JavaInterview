(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1044:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给定一个二叉树的 root ，确定它是否是一个 完全二叉树 。")]),s._v(" "),n("p",[s._v("在一个 完全二叉树 中，除了最后一个关卡外，所有关卡都是完全被填满的，并且最后一个关卡中的所有节点都是尽可能靠左的。它可以包含 1 到 2h 节点之间的最后一级 h 。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(701),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：root = [1,2,3,4,5,6]\n输出：true\n解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(702),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：root = [1,2,3,4,5,null,7]\n输出：false\n解释：值为 7 的结点没有尽可能靠向左侧。\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("树的结点数在范围  [1, 100] 内。")]),s._v(" "),n("li",[s._v("1 <= Node.val <= 1000")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("层序遍历，设置一个停止标志，遇到空节点，停止标志为真，如果停止标志为真，再遍历遇到非空节点，则非完全二叉树。")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isCompleteTree")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Queue")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" queue "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LinkedList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" flag "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isEmpty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                flag "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("flag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports},701:function(s,t){s.exports="data:image/png;base64,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"},702:function(s,t){s.exports="data:image/png;base64,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"}}]);