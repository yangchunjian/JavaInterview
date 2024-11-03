(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{1713:function(a,s,n){"use strict";n.r(s);var t=n(12),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),n("p",[a._v("表: Employee")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| id          | int     |\n| name        | varchar |\n| department  | varchar |\n| managerId   | int     |\n+-------------+---------+\nid 是此表的主键（具有唯一值的列）。\n该表的每一行表示雇员的名字、他们的部门和他们的经理的id。\n如果managerId为空，则该员工没有经理。\n没有员工会成为自己的管理者。\n")])])]),n("p",[a._v("编写一个解决方案，找出至少有五个直接下属的经理。")]),a._v(" "),n("p",[a._v("以 任意顺序 返回结果表。")]),a._v(" "),n("p",[a._v("查询结果格式如下所示。")]),a._v(" "),n("p",[a._v("示例 1:")]),a._v(" "),n("p",[a._v("输入:")]),a._v(" "),n("p",[a._v("Employee 表:")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("+-----+-------+------------+-----------+\n| id  | name  | department | managerId |\n+-----+-------+------------+-----------+\n| 101 | John  | A          | Null      |\n| 102 | Dan   | A          | 101       |\n| 103 | James | A          | 101       |\n| 104 | Amy   | A          | 101       |\n| 105 | Anne  | A          | 101       |\n| 106 | Ron   | B          | 101       |\n+-----+-------+------------+-----------+\n")])])]),n("p",[a._v("输出:")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("+------+\n| name |\n+------+\n| John |\n+------+\n")])])]),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),n("p",[a._v("in子查询")]),a._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[a._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Write your MySQL query statement below")]),a._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" name\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" Employee\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" id "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("in")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" managerId\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" Employee\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("group")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("by")]),a._v(" managerId\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("having")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),n("ul",[n("li",[a._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);