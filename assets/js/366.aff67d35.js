(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{1346:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("表：Prices")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| product_id    | int     |\n| start_date    | date    |\n| end_date      | date    |\n| price         | int     |\n+---------------+---------+\n(product_id，start_date，end_date) 是 prices 表的主键（具有唯一值的列的组合）。\nprices 表的每一行表示的是某个产品在一段时期内的价格。\n每个产品的对应时间段是不会重叠的，这也意味着同一个产品的价格时段不会出现交叉。\n")])])]),a("p",[t._v("表：UnitsSold")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| product_id    | int     |\n| purchase_date | date    |\n| units         | int     |\n+---------------+---------+\n该表可能包含重复数据。\n该表的每一行表示的是每种产品的出售日期，单位和产品 id。\n")])])]),a("p",[t._v("编写解决方案以查找每种产品的平均售价。average_price 应该 四舍五入到小数点后两位。如果产品没有任何售出，则假设其平均售价为 0。")]),t._v(" "),a("p",[t._v("返回结果表 无顺序要求 。")]),t._v(" "),a("p",[t._v("结果格式如下例所示。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("输入：\nPrices table:\n+------------+------------+------------+--------+\n| product_id | start_date | end_date   | price  |\n+------------+------------+------------+--------+\n| 1          | 2019-02-17 | 2019-02-28 | 5      |\n| 1          | 2019-03-01 | 2019-03-22 | 20     |\n| 2          | 2019-02-01 | 2019-02-20 | 15     |\n| 2          | 2019-02-21 | 2019-03-31 | 30     |\n+------------+------------+------------+--------+\nUnitsSold table:\n+------------+---------------+-------+\n| product_id | purchase_date | units |\n+------------+---------------+-------+\n| 1          | 2019-02-25    | 100   |\n| 1          | 2019-03-01    | 15    |\n| 2          | 2019-02-10    | 200   |\n| 2          | 2019-03-22    | 30    |\n+------------+---------------+-------+\n输出：\n+------------+---------------+\n| product_id | average_price |\n+------------+---------------+\n| 1          | 6.96          |\n| 2          | 16.96         |\n+------------+---------------+\n解释：\n平均售价 = 产品总价 / 销售的产品数量。\n产品 1 的平均售价 = ((100 * 5)+(15 * 20) )/ 115 = 6.96\n产品 2 的平均售价 = ((200 * 15)+(30 * 30) )/ 230 = 16.96\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("ifnull")]),t._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ifnull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("units"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("units"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" average_price\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Prices p "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v(" UnitsSold s\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("purchase_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("between")]),t._v(" start_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" end_date\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);