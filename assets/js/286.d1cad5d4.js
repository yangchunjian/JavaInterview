(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{1245:function(n,a,t){"use strict";t.r(a);var s=t(12),e=Object(s.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),t("p",[n._v("销售表 Sales：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("+-------------+-------+\n| Column Name | Type  |\n+-------------+-------+\n| sale_id     | int   |\n| product_id  | int   |\n| year        | int   |\n| quantity    | int   |\n| price       | int   |\n+-------------+-------+\n(sale_id, year) 是销售表 Sales 的主键（具有唯一值的列的组合）。\nproduct_id 是关联到产品表 Product 的外键（reference 列）。\n该表的每一行显示 product_id 在某一年的销售情况。\n注意: price 表示每单位价格。\n")])])]),t("p",[n._v("产品表 Product：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| product_id   | int     |\n| product_name | varchar |\n+--------------+---------+\nproduct_id 是表的主键（具有唯一值的列）。\n该表的每一行表示每种产品的产品名称。\n")])])]),t("p",[n._v("编写解决方案，以获取 Sales 表中所有 sale_id 对应的 product_name 以及该产品的所有 year 和 price 。")]),n._v(" "),t("p",[n._v("返回结果表 无顺序要求 。")]),n._v(" "),t("p",[n._v("结果格式示例如下。")]),n._v(" "),t("p",[n._v("示例 1：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("输入：\nSales 表：\n+---------+------------+------+----------+-------+\n| sale_id | product_id | year | quantity | price |\n+---------+------------+------+----------+-------+\n| 1       | 100        | 2008 | 10       | 5000  |\n| 2       | 100        | 2009 | 12       | 5000  |\n| 7       | 200        | 2011 | 15       | 9000  |\n+---------+------------+------+----------+-------+\nProduct 表：\n+------------+--------------+\n| product_id | product_name |\n+------------+--------------+\n| 100        | Nokia        |\n| 200        | Apple        |\n| 300        | Samsung      |\n+------------+--------------+\n输出：\n+--------------+-------+-------+\n| product_name | year  | price |\n+--------------+-------+-------+\n| Nokia        | 2008  | 5000  |\n| Nokia        | 2009  | 5000  |\n| Apple        | 2011  | 9000  |\n+--------------+-------+-------+\n")])])]),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),t("p",[n._v("这题inner或者left都可以")]),n._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[n._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Write your MySQL query statement below")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("product_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("year")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("price\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("from")]),n._v(" Sales s\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("inner")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("join")]),n._v(" Product p\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("on")]),n._v(" s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("product_id "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("product_id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("ul",[t("li",[n._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);