(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1249:function(n,t,a){"use strict";a.r(t);var e=a(12),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("Table: Product")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| product_id   | int     |\n| product_name | varchar |\n| unit_price   | int     |\n+--------------+---------+\nProduct_id是该表的主键。\n该表的每一行显示每个产品的名称和价格。\n")])])]),a("p",[n._v("Table: Sales")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| seller_id   | int     |\n| product_id  | int     |\n| buyer_id    | int     |\n| sale_date   | date    |\n| quantity    | int     |\n| price       | int     |\n+------ ------+---------+\n这个表没有主键，它可以有重复的行。\nproduct_id 是 Product 表的外键。\n该表的每一行包含关于一个销售的一些信息。\n")])])]),a("p"),n._v(" "),a("p",[n._v("编写一个SQL查询，报告2019年春季才售出的产品。即仅在2019-01-01至2019-03-31（含）之间出售的商品。")]),n._v(" "),a("p",[n._v("以 任意顺序 返回结果表。")]),n._v(" "),a("p",[n._v("查询结果格式如下所示。")]),n._v(" "),a("p"),n._v(" "),a("p",[n._v("示例 1:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("输入：\nProduct table:\n+------------+--------------+------------+\n| product_id | product_name | unit_price |\n+------------+--------------+------------+\n| 1          | S8           | 1000       |\n| 2          | G4           | 800        |\n| 3          | iPhone       | 1400       |\n+------------+--------------+------------+\nSales table:\n+-----------+------------+----------+------------+----------+-------+\n| seller_id | product_id | buyer_id | sale_date  | quantity | price |\n+-----------+------------+----------+------------+----------+-------+\n| 1         | 1          | 1        | 2019-01-21 | 2        | 2000  |\n| 1         | 2          | 2        | 2019-02-17 | 1        | 800   |\n| 2         | 2          | 3        | 2019-06-02 | 1        | 800   |\n| 3         | 3          | 4        | 2019-05-13 | 2        | 2800  |\n+-----------+------------+----------+------------+----------+-------+\n输出：\n+-------------+--------------+\n| product_id  | product_name |\n+-------------+--------------+\n| 1           | S8           |\n+-------------+--------------+\n解释:\nid为1的产品仅在2019年春季销售。\nid为2的产品在2019年春季销售，但也在2019年春季之后销售。\nid 3的产品在2019年春季之后销售。\n我们只退回产品1，因为它是2019年春季才销售的产品。\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),a("p",[n._v("SUM(sale_date < '2019-01-01')=0")]),n._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\n# Write your MySQL query statement below\n\nSELECT p.product_id,product_name FROM sales s,product p \nWHERE s.product_id=p.product_id\nGROUP BY p.product_id\nHAVING SUM(sale_date < '2019-01-01')=0\nAND SUM(sale_date>'2019-03-31')=0;\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),a("ul",[a("li",[n._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=s.exports}}]);