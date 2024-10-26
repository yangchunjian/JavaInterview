(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{1406:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("表: Customer")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| customer_id   | int     |\n| name          | varchar |\n| visited_on    | date    |\n| amount        | int     |\n+---------------+---------+\n在 SQL 中，(customer_id, visited_on) 是该表的主键。\n该表包含一家餐馆的顾客交易数据。\nvisited_on 表示 (customer_id) 的顾客在 visited_on 那天访问了餐馆。\namount 是一个顾客某一天的消费总额。\n")])])]),a("p",[s._v("你是餐馆的老板，现在你想分析一下可能的营业额变化增长（每天至少有一位顾客）。")]),s._v(" "),a("p",[s._v("计算以 7 天（某日期 + 该日期前的 6 天）为一个时间段的顾客消费平均值。average_amount 要 保留两位小数。")]),s._v(" "),a("p",[s._v("结果按 visited_on 升序排序。")]),s._v(" "),a("p",[s._v("返回结果格式的例子如下。")]),s._v(" "),a("p",[s._v("示例 1:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("输入：\nCustomer 表:\n+-------------+--------------+--------------+-------------+\n| customer_id | name         | visited_on   | amount      |\n+-------------+--------------+--------------+-------------+\n| 1           | Jhon         | 2019-01-01   | 100         |\n| 2           | Daniel       | 2019-01-02   | 110         |\n| 3           | Jade         | 2019-01-03   | 120         |\n| 4           | Khaled       | 2019-01-04   | 130         |\n| 5           | Winston      | 2019-01-05   | 110         |\n| 6           | Elvis        | 2019-01-06   | 140         |\n| 7           | Anna         | 2019-01-07   | 150         |\n| 8           | Maria        | 2019-01-08   | 80          |\n| 9           | Jaze         | 2019-01-09   | 110         |\n| 1           | Jhon         | 2019-01-10   | 130         |\n| 3           | Jade         | 2019-01-10   | 150         |\n+-------------+--------------+--------------+-------------+\n输出：\n+--------------+--------------+----------------+\n| visited_on   | amount       | average_amount |\n+--------------+--------------+----------------+\n| 2019-01-07   | 860          | 122.86         |\n| 2019-01-08   | 840          | 120            |\n| 2019-01-09   | 840          | 120            |\n| 2019-01-10   | 1000         | 142.86         |\n+--------------+--------------+----------------+\n解释：\n第一个七天消费平均值从 2019-01-01 到 2019-01-07 是restaurant-growth/restaurant-growth/ (100 + 110 + 120 + 130 + 110 + 140 + 150)/7 = 122.86\n第二个七天消费平均值从 2019-01-02 到 2019-01-08 是 (110 + 120 + 130 + 110 + 140 + 150 + 80)/7 = 120\n第三个七天消费平均值从 2019-01-03 到 2019-01-09 是 (120 + 130 + 110 + 140 + 150 + 80 + 110)/7 = 120\n第四个七天消费平均值从 2019-01-04 到 2019-01-10 是 (130 + 110 + 140 + 150 + 80 + 110 + 130 + 150)/7 = 142.86\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("datediff")]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n    dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("visited_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" average_amount\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" visited_on "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" customer c\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" datediff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("visited_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("visited_on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("visited_on\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" dates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("visited_on\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports}}]);