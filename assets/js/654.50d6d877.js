(window.webpackJsonp=window.webpackJsonp||[]).push([[654],{1738:function(s,a,n){"use strict";n.r(a);var t=n(12),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给定一个表 tree，id 是树节点的编号， p_id 是它父节点的 id 。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("+----+------+\n| id | p_id |\n+----+------+\n| 1  | null |\n| 2  | 1    |\n| 3  | 1    |\n| 4  | 2    |\n| 5  | 2    |\n+----+------+\n")])])]),n("p",[s._v("树中每个节点属于以下三种类型之一：")]),s._v(" "),n("ul",[n("li",[s._v("叶子：如果这个节点没有任何孩子节点。")]),s._v(" "),n("li",[s._v("根：如果这个节点是整棵树的根，即没有父节点。")]),s._v(" "),n("li",[s._v("内部节点：如果这个节点既不是叶子节点也不是根节点。")])]),s._v(" "),n("p",[s._v("写一个查询语句，输出所有节点的编号和节点的类型，并将结果按照节点编号排序。上面样例的结果为：")]),s._v(" "),n("p"),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("+----+------+\n| id | Type |\n+----+------+\n| 1  | Root |\n| 2  | Inner|\n| 3  | Leaf |\n| 4  | Leaf |\n| 5  | Leaf |\n+----+------+\n")])])]),n("p"),s._v(" "),n("p",[s._v("解释")]),s._v(" "),n("ul",[n("li",[s._v("节点 '1' 是根节点，因为它的父节点是 NULL ，同时它有孩子节点 '2' 和 '3' 。")]),s._v(" "),n("li",[s._v("节点 '2' 是内部节点，因为它有父节点 '1' ，也有孩子节点 '4' 和 '5' 。")]),s._v(" "),n("li",[s._v("节点 '3', '4' 和 '5' 都是叶子节点，因为它们都有父节点同时没有孩子节点。")])]),s._v(" "),n("p",[s._v("样例中树的形态如下：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("                      1\n                    /   \\\n                  2       3\n                /   \\\n              4       5\n")])])]),n("p"),s._v(" "),n("p",[s._v("注意")]),s._v(" "),n("p",[s._v("如果树中只有一个节点，你只需要输出它的根属性。")]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("case when  then  when  then  else  end \n")])])]),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n# "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Write")]),s._v(" your "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySQL")]),s._v(" query statement below\n\nselect id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" when t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p_id is "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v(" then "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Root'")]),s._v(" \n     when t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id in "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("select p_id from tree "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" then "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Inner'")]),s._v("\n     "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Leaf'")]),s._v(" \n     end as "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Type")]),s._v("\nfrom tree t \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);