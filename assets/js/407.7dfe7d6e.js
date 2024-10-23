(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1405:function(t,n,s){"use strict";s.r(n);var a=s(12),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("表: Products")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("+------------------+---------+\n| Column Name      | Type    |\n+------------------+---------+\n| product_id       | int     |\n| product_name     | varchar |\n| product_category | varchar |\n+------------------+---------+\nproduct_id 是该表主键(具有唯一值的列)。\n该表包含该公司产品的数据。\n")])])]),s("p",[t._v("表: Orders")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| product_id    | int     |\n| order_date    | date    |\n| unit          | int     |\n+---------------+---------+\n该表可能包含重复行。\nproduct_id 是表单 Products 的外键（reference 列）。\nunit 是在日期 order_date 内下单产品的数目。\n")])])]),s("p",[t._v("写一个解决方案，要求获取在 2020 年 2 月份下单的数量不少于 100 的产品的名字和数目。")]),t._v(" "),s("p",[t._v("返回结果表单的 顺序无要求 。")]),t._v(" "),s("p",[t._v("查询结果的格式如下。")]),t._v(" "),s("p",[t._v("示例 1:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("输入：\nProducts 表:\n+-------------+-----------------------+------------------+\n| product_id  | product_name          | product_category |\n+-------------+-----------------------+------------------+\n| 1           | Leetcode Solutions    | Book             |\n| 2           | Jewels of Stringology | Book             |\n| 3           | HP                    | Laptop           |\n| 4           | Lenovo                | Laptop           |\n| 5           | Leetcode Kit          | T-shirt          |\n+-------------+-----------------------+------------------+\nOrders 表:\n+--------------+--------------+----------+\n| product_id   | order_date   | unit     |\n+--------------+--------------+----------+\n| 1            | 2020-02-05   | 60       |\n| 1            | 2020-02-10   | 70       |\n| 2            | 2020-01-18   | 30       |\n| 2            | 2020-02-11   | 80       |\n| 3            | 2020-02-17   | 2        |\n| 3            | 2020-02-24   | 3        |\n| 4            | 2020-03-01   | 20       |\n| 4            | 2020-03-04   | 30       |\n| 4            | 2020-03-04   | 60       |\n| 5            | 2020-02-25   | 50       |\n| 5            | 2020-02-27   | 50       |\n| 5            | 2020-03-01   | 50       |\n+--------------+--------------+----------+\n输出：\n+--------------------+---------+\n| product_name       | unit    |\n+--------------------+---------+\n| Leetcode Solutions | 130     |\n| Leetcode Kit       | 100     |\n+--------------------+---------+\n解释：\n2020 年 2 月份下单 product_id = 1 的产品的数目总和为 (60 + 70) = 130 。\n2020 年 2 月份下单 product_id = 2 的产品的数目总和为 80 。\n2020 年 2 月份下单 product_id = 3 的产品的数目总和为 (2 + 3) = 5 。\n2020 年 2 月份 product_id = 4 的产品并没有下单。\n2020 年 2 月份下单 product_id = 5 的产品的数目总和为 (50 + 50) = 100 。\n")])])]),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("sum")]),t._v(" "),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" product_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" unit\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" orders a\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" products b \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" order_date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("like")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020-02%'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("having")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);n.default=r.exports}}]);