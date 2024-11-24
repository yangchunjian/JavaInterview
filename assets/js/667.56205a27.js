(window.webpackJsonp=window.webpackJsonp||[]).push([[667],{1757:function(a,n,s){"use strict";s.r(n);var t=s(12),e=Object(t.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),s("p",[a._v("World 表：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| name        | varchar |\n| continent   | varchar |\n| area        | int     |\n| population  | int     |\n| gdp         | int     |\n+-------------+---------+\nname 是这张表的主键。\n这张表的每一行提供：国家名称、所属大陆、面积、人口和 GDP 值。\n")])])]),s("p"),a._v(" "),s("p",[a._v("如果一个国家满足下述两个条件之一，则认为该国是 大国 ：")]),a._v(" "),s("p",[a._v("面积至少为 300 万平方公里（即，3000000 km2），或者\n人口至少为 2500 万（即 25000000）\n编写一个 SQL 查询以报告 大国 的国家名称、人口和面积。")]),a._v(" "),s("p",[a._v("按 任意顺序 返回结果表。")]),a._v(" "),s("p",[a._v("查询结果格式如下例所示。")]),a._v(" "),s("p"),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("输入：\nWorld 表：\n+-------------+-----------+---------+------------+--------------+\n| name        | continent | area    | population | gdp          |\n+-------------+-----------+---------+------------+--------------+\n| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |\n| Albania     | Europe    | 28748   | 2831741    | 12960000000  |\n| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |\n| Andorra     | Europe    | 468     | 78115      | 3712000000   |\n| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |\n+-------------+-----------+---------+------------+--------------+\n输出：\n+-------------+------------+---------+\n| name        | population | area    |\n+-------------+------------+---------+\n| Afghanistan | 25500100   | 652230  |\n| Algeria     | 37100000   | 2381741 |\n+-------------+------------+---------+\n")])])]),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("or\n")])])]),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("\n# "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Write")]),a._v(" your "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MySQL")]),a._v(" query statement below\n\nselect name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("population"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("area \nfrom world \nwhere area "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000000")]),a._v(" or population "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25000000")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("ul",[s("li",[a._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);n.default=e.exports}}]);