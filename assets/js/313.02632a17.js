(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1288:function(n,e,a){"use strict";a.r(e);var r=a(12),s=Object(r.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("Table: Users")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| user_id        | int     |\n| join_date      | date    |\n| favorite_brand | varchar |\n+----------------+---------+\n此表主键是 user_id。\n表中描述了购物网站的用户信息，用户可以在此网站上进行商品买卖。\n")])])]),a("p"),n._v(" "),a("p",[n._v("Table: Orders")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| order_id      | int     |\n| order_date    | date    |\n| item_id       | int     |\n| buyer_id      | int     |\n| seller_id     | int     |\n+---------------+---------+\n此表主键是 order_id。\n外键是 item_id 和（buyer_id，seller_id）。\n")])])]),a("p"),n._v(" "),a("p",[n._v("Table: Items")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| item_id       | int     |\n| item_brand    | varchar |\n+---------------+---------+\n此表主键是 item_id。\n")])])]),a("p"),n._v(" "),a("p",[n._v("请写出一条SQL语句以查询每个用户的注册日期和在 2019 年作为买家的订单总数。")]),n._v(" "),a("p",[n._v("以 任意顺序 返回结果表。")]),n._v(" "),a("p",[n._v("查询结果格式如下。")]),n._v(" "),a("p"),n._v(" "),a("p",[n._v("示例 1:")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("输入：\nUsers 表:\n+---------+------------+----------------+\n| user_id | join_date  | favorite_brand |\n+---------+------------+----------------+\n| 1       | 2018-01-01 | Lenovo         |\n| 2       | 2018-02-09 | Samsung        |\n| 3       | 2018-01-19 | LG             |\n| 4       | 2018-05-21 | HP             |\n+---------+------------+----------------+\nOrders 表:\n+----------+------------+---------+----------+-----------+\n| order_id | order_date | item_id | buyer_id | seller_id |\n+----------+------------+---------+----------+-----------+\n| 1        | 2019-08-01 | 4       | 1        | 2         |\n| 2        | 2018-08-02 | 2       | 1        | 3         |\n| 3        | 2019-08-03 | 3       | 2        | 3         |\n| 4        | 2018-08-04 | 1       | 4        | 2         |\n| 5        | 2018-08-04 | 1       | 3        | 4         |\n| 6        | 2019-08-05 | 2       | 2        | 4         |\n+----------+------------+---------+----------+-----------+\nItems 表:\n+---------+------------+\n| item_id | item_brand |\n+---------+------------+\n| 1       | Samsung    |\n| 2       | Lenovo     |\n| 3       | LG         |\n| 4       | HP         |\n+---------+------------+\n输出：\n+-----------+------------+----------------+\n| buyer_id  | join_date  | orders_in_2019 |\n+-----------+------------+----------------+\n| 1         | 2018-01-01 | 1              |\n| 2         | 2018-02-09 | 2              |\n| 3         | 2018-01-19 | 0              |\n| 4         | 2018-05-21 | 0              |\n+-----------+------------+----------------+\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),a("p",[n._v("left join")]),n._v(" "),a("p",[n._v("count")]),n._v(" "),a("p",[n._v("year")]),n._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("\n# Write your MySQL query statement below\n\nselect user_id buyer_id, join_date, count(order_id) orders_in_2019\nfrom users left join orders\non user_id = buyer_id and year(order_date)='2019'\ngroup by user_id\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),a("ul",[a("li",[n._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);e.default=s.exports}}]);