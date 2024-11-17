(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{1762:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),t("p",[s._v("表: Seat")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n+-------------+---------+\nId是该表的主键列。\n该表的每一行都表示学生的姓名和ID。\nId是一个连续的增量。\n")])])]),t("p"),s._v(" "),t("p",[s._v("编写SQL查询来交换每两个连续的学生的座位号。如果学生的数量是奇数，则最后一个学生的id不交换。")]),s._v(" "),t("p",[s._v("按 id 升序 返回结果表。")]),s._v(" "),t("p",[s._v("查询结果格式如下所示。")]),s._v(" "),t("p"),s._v(" "),t("p",[s._v("示例 1:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("输入: \nSeat 表:\n+----+---------+\n| id | student |\n+----+---------+\n| 1  | Abbot   |\n| 2  | Doris   |\n| 3  | Emerson |\n| 4  | Green   |\n| 5  | Jeames  |\n+----+---------+\n输出: \n+----+---------+\n| id | student |\n+----+---------+\n| 1  | Doris   |\n| 2  | Abbot   |\n| 3  | Green   |\n| 4  | Emerson |\n| 5  | Jeames  |\n+----+---------+\n解释:\n请注意，如果学生人数为奇数，则不需要更换最后一名学生的座位。\n")])])]),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),t("p",[s._v("CASE    WHEN    THEN")]),s._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("\n# "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Write")]),s._v(" your "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySQL")]),s._v(" query statement below\n\nSELECT "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE \n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WHEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MOD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AND")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FROM")]),s._v(" seat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" THEN id\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WHEN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("MOD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" THEN id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElSE")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        END"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AS")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" student\nFROM seat\nORDER "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BY")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("ul",[t("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);