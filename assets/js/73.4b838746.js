(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1261:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。")]),t._v(" "),n("p",[t._v("叶子节点 是指没有子节点的节点。")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(614),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22\n输出：[[5,4,11,2],[5,8,4,5]]\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(615),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：root = [1,2,3], targetSum = 5\n输出：[]\n")])])]),n("p",[t._v("示例 3：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：root = [1,2], targetSum = 0\n输出：[]\n")])])]),n("p"),t._v(" "),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("树中节点总数在范围 [0, 5000] 内")]),t._v(" "),n("li",[t._v("-1000 <= Node.val <= 1000")]),t._v(" "),n("li",[t._v("-1000 <= targetSum <= 1000")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("dfs")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ret "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pathSum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cur "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" curSum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" targetSum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("curSum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("targetSum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ret"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("curSum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("targetSum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dfs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("curSum"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("targetSum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List<List<Integer>> result = new ArrayList();")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List<Integer> path = new ArrayList();")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// public List<List<Integer>> pathSum(TreeNode root, int targetSum) {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     backTracking(root, targetSum);")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     return result;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// void backTracking(TreeNode root, int targetSum) {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     if (root == null) return;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     path.add(root.val);")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     targetSum -= root.val;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     if (root.left == null && root.right == null && targetSum == 0) {")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         result.add(new ArrayList<>(path));")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     backTracking(root.left, targetSum);")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     backTracking(root.right, targetSum);")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     path.remove(path.size() - 1);")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br"),n("span",{staticClass:"line-number"},[t._v("51")]),n("br"),n("span",{staticClass:"line-number"},[t._v("52")]),n("br"),n("span",{staticClass:"line-number"},[t._v("53")]),n("br"),n("span",{staticClass:"line-number"},[t._v("54")]),n("br"),n("span",{staticClass:"line-number"},[t._v("55")]),n("br"),n("span",{staticClass:"line-number"},[t._v("56")]),n("br"),n("span",{staticClass:"line-number"},[t._v("57")]),n("br"),n("span",{staticClass:"line-number"},[t._v("58")]),n("br"),n("span",{staticClass:"line-number"},[t._v("59")]),n("br"),n("span",{staticClass:"line-number"},[t._v("60")]),n("br"),n("span",{staticClass:"line-number"},[t._v("61")]),n("br"),n("span",{staticClass:"line-number"},[t._v("62")]),n("br"),n("span",{staticClass:"line-number"},[t._v("63")]),n("br"),n("span",{staticClass:"line-number"},[t._v("64")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports},614:function(t,s,a){t.exports=a.p+"assets/img/pathsumii1.1a579f9f.jpeg"},615:function(t,s){t.exports="data:image/jpeg;base64,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"}}]);