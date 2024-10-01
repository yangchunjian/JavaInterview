(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1645:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("给你二叉树的根节点 root ，请你采用前序遍历的方式，将二叉树转化为一个由括号和整数组成的字符串，返回构造出的字符串。")]),t._v(" "),n("p",[t._v('空节点使用一对空括号对 "()" 表示，转化后需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。')]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(803),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('输入：root = [1,2,3,4]\n输出："1(2(4))(3)"\n解释：初步转化后得到 "1(2(4)())(3()())" ，但省略所有不必要的空括号对后，字符串应该是"1(2(4))(3)" 。\n')])])]),n("p",[t._v("示例 2：\n"),n("img",{attrs:{src:a(804),alt:""}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('输入：root = [1,2,3,null,4]\n输出："1(2()(4))(3)"\n解释：和第一个示例类似，但是无法省略第一个空括号对，否则会破坏输入与输出一一映射的关系。\n \n')])])]),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("树中节点的数目范围是 [1, 10"),n("sup",[t._v("4")]),t._v("]")]),t._v(" "),n("li",[t._v("-1000 <= Node.val <= 1000")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("前序遍历")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("tree2str")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" sb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringBuilder")]),t._v(" sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("helper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    sb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports},803:function(t,s){t.exports="data:image/jpeg;base64,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UqL1oTp9Sv7Oq6GnuF1ro/3aybiA8fuubiuxHFrlkVHne5TUjJNb8loXiWlGRFsNmpJP4oLZGfRb78teXt8duRyqgRB64IIaaGOmpoWRRRNDI42NDWsaBwAAOwAHsvYiICIiAiIgIiICIiAiIgIiIMO1T0f0y1sxabDNVMMtuR2mbkiGrj+uF38cUjSHxP8A77HNd+6nyDahuJ0f4i2y7qrnDYou0GK59QtvVHE32ZFVjieGMeA1oPY9yeO9aIglQXz4nFvHytTg+3y6vHYVdLc7rBG79yyQdX/BeuXTz4iuo4+UzPXTTHTG3S9pf6EWKouVaY/dokriAxx8dbPHkfoqvRBonRnZrpBpBkD8/qG3fOM+qBzUZfltYbjci739Jzx0QDzx6bQ7g8FxC3siICIiAiIgIiICIiAiIgKVd9eT3zLqDEdo+A10kGS6zV5objUQ93W7HYeH3Gpd2IHUwemA7gODpADyFUtVVU1DSzVtbURU9PTxulmmleGMjY0cuc5x7AAAkk+FJmzyjqdctTs+3rZBTSfKZLK7FcAinYQ6mxyjlIMzQRy01E7XPI57FruOzkFR4pi9jwjGLThuM0EdFaLHRQ2+hpoxw2KCJgYxo/wa0LtURAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEReueeGlhkqamZkUMTS+SR7g1rGgckknsAB7oJh30Zhf71j2MbWtO650GX6115ssk0XJdb7FGA+5VbgO4aIeY+4+oPk47tVEYXh9g0+xCzYNitC2js9goYbdQwN4+iGJgY0H9TwOSfc8n3Uw7SoJtfdYM93oXqF77VcJH4bp2yVp4isVJKRPVsB54+YqA48g8jpkb4KrhAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARce4XG32mimuV1rqeipKdvXNUVErY442/q5ziAB+5Wmsh3tbSMWqn0V33DYQZoz0vbSXRlX0n3BMHWAf2QbtRadxTeLtXzaqZQ45r/g89VIeI4JrxFTSyH9GsmLXOP7AErb8UsVREyeCVkkcjQ9j2OBa5pHIII8ghB+1MG+zOchnxDHttunFaYc31suJx2mkYeXUNqA6rjWOAIPQyDlp478PJHdqp2SSOKN0sr2sYwFznOPAAHkk+ykPaq2TcTrxn28i5tdLj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"},804:function(t,s,a){t.exports=a.p+"assets/img/cons2-tree.37f45bb9.png"}}]);