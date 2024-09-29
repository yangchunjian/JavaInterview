(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{1610:function(n,s,a){"use strict";a.r(s);var t=a(12),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("表：Employee")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| empId       | int     |\n| name        | varchar |\n| supervisor  | int     |\n| salary      | int     |\n+-------------+---------+\nempId 是该表中具有唯一值的列。\n该表的每一行都表示员工的姓名和 id，以及他们的工资和经理的 id。\n")])])]),a("p",[n._v("表：Bonus")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| empId       | int  |\n| bonus       | int  |\n+-------------+------+\nempId 是该表具有唯一值的列。\nempId 是 Employee 表中 empId 的外键(reference 列)。\n该表的每一行都包含一个员工的 id 和他们各自的奖金。\n")])])]),a("p",[n._v("编写解决方案，报告每个奖金 少于 1000 的员工的姓名和奖金数额。")]),n._v(" "),a("p",[n._v("以 任意顺序 返回结果表。")]),n._v(" "),a("p",[n._v("结果格式如下所示。")]),n._v(" "),a("p",[n._v("示例 1：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("输入：\nEmployee table:\n+-------+--------+------------+--------+\n| empId | name   | supervisor | salary |\n+-------+--------+------------+--------+\n| 3     | Brad   | null       | 4000   |\n| 1     | John   | 3          | 1000   |\n| 2     | Dan    | 3          | 2000   |\n| 4     | Thomas | 3          | 4000   |\n+-------+--------+------------+--------+\nBonus table:\n+-------+-------+\n| empId | bonus |\n+-------+-------+\n| 2     | 500   |\n| 4     | 2000  |\n+-------+-------+\n输出：\n+------+-------+\n| name | bonus |\n+------+-------+\n| Brad | null  |\n| John | null  |\n| Dan  | 500   |\n+------+-------+\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),a("p",[n._v("左链接")]),n._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Write your MySQL query statement below")]),n._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("bonus "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("from")]),n._v(" Employee e\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("left")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("join")]),n._v(" Bonus b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("on")]),n._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("empId "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("empId\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("where")]),n._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("bonus "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("1000")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("or")]),n._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("bonus "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("is")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[n._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),a("ul",[a("li",[n._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);