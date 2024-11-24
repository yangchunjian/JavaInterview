(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1369:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("给出一个满足下述规则的二叉树：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("root.val == 0\n如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1\n如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2\n")])])]),a("p",[s._v("现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。")]),s._v(" "),a("p",[s._v("请你先还原二叉树，然后实现 FindElements 类：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。\nbool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。\n")])])]),a("p"),s._v(" "),a("p",[s._v("示例 1：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(648),alt:""}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('输入：\n["FindElements","find","find"]\n[[[-1,null,-1]],[1],[2]]\n输出：\n[null,false,true]\n解释：\nFindElements findElements = new FindElements([-1,null,-1]); \nfindElements.find(1); // return False \nfindElements.find(2); // return True \n')])])]),a("p",[s._v("示例 2：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(649),alt:""}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('输入：\n["FindElements","find","find","find"]\n[[[-1,-1,-1,-1,-1]],[1],[3],[5]]\n输出：\n[null,true,true,false]\n解释：\nFindElements findElements = new FindElements([-1,-1,-1,-1,-1]);\nfindElements.find(1); // return True\nfindElements.find(3); // return True\nfindElements.find(5); // return False\n')])])]),a("p",[s._v("示例 3：")]),s._v(" "),a("p",[a("img",{attrs:{src:n(650),alt:""}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('输入：\n["FindElements","find","find","find","find"]\n[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]\n输出：\n[null,true,false,false,true]\n解释：\nFindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);\nfindElements.find(2); // return True\nfindElements.find(3); // return False\nfindElements.find(4); // return False\nfindElements.find(5); // return True\n')])])]),a("p"),s._v(" "),a("p",[s._v("提示：")]),s._v(" "),a("ul",[a("li",[s._v("TreeNode.val == -1")]),s._v(" "),a("li",[s._v("二叉树的高度不超过 20")]),s._v(" "),a("li",[s._v("节点的总数在 [1, 10^4] 之间")]),s._v(" "),a("li",[s._v("调用 find() 的总次数在 [1, 10^4] 之间")]),s._v(" "),a("li",[s._v("0 <= target <= 10^6")])]),s._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("set集合存储，前序遍历")]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FindElements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Set")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("HashSet")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FindElements")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rebuildTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rebuildTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rebuildTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rebuildTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("contains")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Your FindElements object will be instantiated and called as such:\n * FindElements obj = new FindElements(root);\n * boolean param_1 = obj.find(target);\n */")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports},648:function(s,t){s.exports="data:image/jpeg;base64,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"},649:function(s,t,n){s.exports=n.p+"assets/img/untitled-diagram-4.8ec1c44d.jpeg"},650:function(s,t,n){s.exports=n.p+"assets/img/untitled-diagram-4-1-1.e5ecebc6.jpeg"}}]);