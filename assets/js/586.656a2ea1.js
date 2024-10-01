(window.webpackJsonp=window.webpackJsonp||[]).push([[586],{1657:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),t("p",[s._v("表: Triangle")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| x           | int  |\n| y           | int  |\n| z           | int  |\n+-------------+------+\n在 SQL 中，(x, y, z)是该表的主键列。\n该表的每一行包含三个线段的长度。\n")])])]),t("p",[s._v("对每三个线段报告它们是否可以形成一个三角形。")]),s._v(" "),t("p",[s._v("以 任意顺序 返回结果表。")]),s._v(" "),t("p",[s._v("查询结果格式如下所示。")]),s._v(" "),t("p",[s._v("示例 1:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("输入:\nTriangle 表:\n+----+----+----+\n| x  | y  | z  |\n+----+----+----+\n| 13 | 15 | 30 |\n| 10 | 20 | 15 |\n+----+----+----+\n输出:\n+----+----+----+----------+\n| x  | y  | z  | triangle |\n+----+----+----+----------+\n| 13 | 15 | 30 | No       |\n| 10 | 20 | 15 | Yes      |\n+----+----+----+----------+\n")])])]),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),t("p",[s._v("if语法")]),s._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Write your MySQL query statement below")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("z "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("z"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("y "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("z"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Yes'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'No'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" triangle\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Triangle\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);