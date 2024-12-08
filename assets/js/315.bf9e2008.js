(window.webpackJsonp=window.webpackJsonp||[]).push([[315],{1286:function(s,t,n){"use strict";n.r(t);var a=n(12),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。")]),s._v(" "),n("p",[s._v("叶子节点 是指没有子节点的节点。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[s._v("输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\n输出：true\n解释：等于目标和的根节点到叶节点路径如上图所示。\n示例 2：")]),s._v(" "),n("p",[s._v("输入：root = [1,2,3], targetSum = 5\n输出：false\n解释：树中存在两条根节点到叶子节点的路径：\n(1 --\x3e 2): 和为 3\n(1 --\x3e 3): 和为 4\n不存在 sum = 5 的根节点到叶子节点的路径。\n示例 3：")]),s._v(" "),n("p",[s._v("输入：root = [], targetSum = 0\n输出：false\n解释：由于树是空的，所以不存在根节点到叶子节点的路径。")]),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("树中节点的数目在范围 [0, 5000] 内")]),s._v(" "),n("li",[s._v("-1000 <= Node.val <= 1000")]),s._v(" "),n("li",[s._v("-1000 <= targetSum <= 1000")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("递归")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasPathSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TreeNode")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" targetSum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" targetSum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasPathSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasPathSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if(root==null && targetSum==0){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     return false;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// if(root==null){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     return false;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Queue<TreeNode> s = new LinkedList<>();")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// s.add(root);")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// while(!s.isEmpty()){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     int size = s.size();")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     for(int i=0;i<size;i++){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         TreeNode node = s.poll();")]),s._v("\n            \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         if(node.left==null && node.right==null){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             if(targetSum == node.val){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//                 return true;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             }")]),s._v("\n                   \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         }")]),s._v("\n                \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         if(node.left!=null){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             node.left.val += node.val;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             s.add(node.left);")]),s._v("\n                    \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         }")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         if(node.right!=null){")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             node.right.val += node.val;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             s.add(node.right);")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             // sum += node.right.val;")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         }")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     }")]),s._v("\n\n\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// }")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// return false;")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports}}]);