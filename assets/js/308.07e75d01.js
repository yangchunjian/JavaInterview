(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{1053:function(a,s,t){"use strict";t.r(s);var n=t(10),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),t("p",[a._v("Salary 表：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("+-------------+----------+\n| Column Name | Type     |\n+-------------+----------+\n| id          | int      |\n| name        | varchar  |\n| sex         | ENUM     |\n| salary      | int      |\n+-------------+----------+\nid 是这个表的主键。\nsex 这一列的值是 ENUM 类型，只能从 ('m', 'f') 中取。\n本表包含公司雇员的信息。\n")])])]),t("p"),a._v(" "),t("p",[a._v("请你编写一个 SQL 查询来交换所有的 'f' 和 'm' （即，将所有 'f' 变为 'm' ，反之亦然），仅使用 单个 update 语句 ，且不产生中间临时表。")]),a._v(" "),t("p",[a._v("注意，你必须仅使用一条 update 语句，且 不能 使用 select 语句。")]),a._v(" "),t("p",[a._v("查询结果如下例所示。")]),a._v(" "),t("p"),a._v(" "),t("p",[a._v("示例 1:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("输入：\nSalary 表：\n+----+------+-----+--------+\n| id | name | sex | salary |\n+----+------+-----+--------+\n| 1  | A    | m   | 2500   |\n| 2  | B    | f   | 1500   |\n| 3  | C    | m   | 5500   |\n| 4  | D    | f   | 500    |\n+----+------+-----+--------+\n输出：\n+----+------+-----+--------+\n| id | name | sex | salary |\n+----+------+-----+--------+\n| 1  | A    | f   | 2500   |\n| 2  | B    | m   | 1500   |\n| 3  | C    | f   | 5500   |\n| 4  | D    | m   | 500    |\n+----+------+-----+--------+\n解释：\n(1, A) 和 (3, C) 从 'm' 变为 'f' 。\n(2, B) 和 (4, D) 从 'f' 变为 'm' 。\n")])])]),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),t("p",[a._v("set sex = if(sex = 'm','f','m')")]),a._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n# "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Write")]),a._v(" your "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MySQL")]),a._v(" query statement below\n\nupdate salary set sex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sex "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'m'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'f'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'m'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[a._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);