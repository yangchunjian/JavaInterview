(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1275:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),a("p",[t._v("产品数据表: Products")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| product_id    | int     |\n| new_price     | int     |\n| change_date   | date    |\n+---------------+---------+\n(product_id, change_date) 是此表的主键（具有唯一值的列组合）。\n这张表的每一行分别记录了 某产品 在某个日期 更改后 的新价格。\n")])])]),a("p",[t._v("编写一个解决方案，找出在 2019-08-16 时全部产品的价格，假设所有产品在修改前的价格都是 10 。")]),t._v(" "),a("p",[t._v("以 任意顺序 返回结果表。")]),t._v(" "),a("p",[t._v("结果格式如下例所示。")]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("输入：\nProducts 表:\n+------------+-----------+-------------+\n| product_id | new_price | change_date |\n+------------+-----------+-------------+\n| 1          | 20        | 2019-08-14  |\n| 2          | 50        | 2019-08-14  |\n| 1          | 30        | 2019-08-15  |\n| 1          | 35        | 2019-08-16  |\n| 2          | 65        | 2019-08-17  |\n| 3          | 20        | 2019-08-18  |\n+------------+-----------+-------------+\n输出：\n+------------+-------+\n| product_id | price |\n+------------+-------+\n| 2          | 50    |\n| 1          | 35    |\n| 3          | 10    |\n+------------+-------+\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("left join")]),t._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("distinct")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ifnull"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" products p1 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("join")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" row_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("partition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" product_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("by")]),t._v(" change_date "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" rnk\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" products \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" change_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019-08-16'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" p2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("product_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" rnk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);