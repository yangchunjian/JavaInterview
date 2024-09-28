(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{1227:function(t,s,n){"use strict";n.r(s);var a=n(12),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("Customer 表：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| customer_id | int     |\n| product_key | int     |\n+-------------+---------+\n该表可能包含重复的行。\ncustomer_id 不为 NULL。\nproduct_key 是 Product 表的外键(reference 列)。\n")])])]),n("p",[t._v("Product 表：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| product_key | int     |\n+-------------+---------+\nproduct_key 是这张表的主键（具有唯一值的列）。\n")])])]),n("p",[t._v("编写解决方案，报告 Customer 表中购买了 Product 表中所有产品的客户的 id。")]),t._v(" "),n("p",[t._v("返回结果表 无顺序要求 。")]),t._v(" "),n("p",[t._v("返回结果格式如下所示。")]),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：\nCustomer 表：\n+-------------+-------------+\n| customer_id | product_key |\n+-------------+-------------+\n| 1           | 5           |\n| 2           | 6           |\n| 3           | 5           |\n| 3           | 6           |\n| 1           | 6           |\n+-------------+-------------+\nProduct 表：\n+-------------+\n| product_key |\n+-------------+\n| 5           |\n| 6           |\n+-------------+\n输出：\n+-------------+\n| customer_id |\n+-------------+\n| 1           |\n| 3           |\n+-------------+\n解释：\n购买了所有产品（5 和 6）的客户的 id 是 1 和 3 。\n")])])]),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("having")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" customer_id\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Customer\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" customer_id\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("having")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" product_key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Product"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);