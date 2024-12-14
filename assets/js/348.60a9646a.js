(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1327:function(s,a,n){"use strict";n.r(a);var t=n(12),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("部门表 Department：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| id            | int     |\n| revenue       | int     |\n| month         | varchar |\n+---------------+---------+\n(id, month) 是表的联合主键。\n这个表格有关于每个部门每月收入的信息。\n月份（month）可以取下列值 ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]。\n')])])]),n("p"),s._v(" "),n("p",[s._v("编写一个 SQL 查询来重新格式化表，使得新的表中有一个部门 id 列和一些对应 每个月 的收入（revenue）列。")]),s._v(" "),n("p",[s._v("查询结果格式如下面的示例所示：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("Department 表：\n+------+---------+-------+\n| id   | revenue | month |\n+------+---------+-------+\n| 1    | 8000    | Jan   |\n| 2    | 9000    | Jan   |\n| 3    | 10000   | Feb   |\n| 1    | 7000    | Feb   |\n| 1    | 6000    | Mar   |\n+------+---------+-------+\n\n查询得到的结果表：\n+------+-------------+-------------+-------------+-----+-------------+\n| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |\n+------+-------------+-------------+-------------+-----+-------------+\n| 1    | 8000        | 7000        | 6000        | ... | null        |\n| 2    | 9000        | null        | null        | ... | null        |\n| 3    | null        | 10000       | null        | ... | null        |\n+------+-------------+-------------+-------------+-----+-------------+\n\n注意，结果表有 13 列 (1个部门 id 列 + 12个月份的收入列)。\n")])])]),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n# "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Write")]),s._v(" your "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySQL")]),s._v(" query statement below\n\nSELECT\n    `id`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Jan'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jan_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Feb'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Feb_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Mar'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Mar_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Apr'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Apr_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'May'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("May_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Jun'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jun_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Jul'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Jul_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Aug'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Aug_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Sep'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Sep_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Oct'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Oct_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Nov'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Nov_Revenue")]),s._v("`"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CASE `month` WHEN "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'Dec'")]),s._v(" THEN `revenue` ELSE "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("NULL")]),s._v(" END"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AS `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Dec_Revenue")]),s._v("`\nFROM\n    `"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v("`\nGROUP BY `id`\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);