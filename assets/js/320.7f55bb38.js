(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1286:function(s,t,a){"use strict";a.r(t);var e=a(12),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("配送表: Delivery")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("+-----------------------------+---------+\n| Column Name                 | Type    |\n+-----------------------------+---------+\n| delivery_id                 | int     |\n| customer_id                 | int     |\n| order_date                  | date    |\n| customer_pref_delivery_date | date    |\n+-----------------------------+---------+\ndelivery_id 是该表中具有唯一值的列。\n该表保存着顾客的食物配送信息，顾客在某个日期下了订单，并指定了一个期望的配送日期（和下单日期相同或者在那之后）。\n")])])]),a("p",[s._v("如果顾客期望的配送日期和下单日期相同，则该订单称为 「即时订单」，否则称为「计划订单」。")]),s._v(" "),a("p",[s._v("「首次订单」是顾客最早创建的订单。我们保证一个顾客只会有一个「首次订单」。")]),s._v(" "),a("p",[s._v("编写解决方案以获取即时订单在所有用户的首次订单中的比例。保留两位小数。")]),s._v(" "),a("p",[s._v("结果示例如下所示：")]),s._v(" "),a("p",[s._v("示例 1：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("输入：\nDelivery 表：\n+-------------+-------------+------------+-----------------------------+\n| delivery_id | customer_id | order_date | customer_pref_delivery_date |\n+-------------+-------------+------------+-----------------------------+\n| 1           | 1           | 2019-08-01 | 2019-08-02                  |\n| 2           | 2           | 2019-08-02 | 2019-08-02                  |\n| 3           | 1           | 2019-08-11 | 2019-08-12                  |\n| 4           | 3           | 2019-08-24 | 2019-08-24                  |\n| 5           | 3           | 2019-08-21 | 2019-08-22                  |\n| 6           | 2           | 2019-08-11 | 2019-08-13                  |\n| 7           | 4           | 2019-08-09 | 2019-08-09                  |\n+-------------+-------------+------------+-----------------------------+\n输出：\n+----------------------+\n| immediate_percentage |\n+----------------------+\n| 50.00                |\n+----------------------+\n解释：\n1 号顾客的 1 号订单是首次订单，并且是计划订单。\n2 号顾客的 2 号订单是首次订单，并且是即时订单。\n3 号顾客的 5 号订单是首次订单，并且是计划订单。\n4 号顾客的 7 号订单是首次订单，并且是即时订单。\n因此，一半顾客的首次订单是即时的。\n")])])]),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("order_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" customer_pref_delivery_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" immediate_percentage\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("row_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("over")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("partition")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" customer_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" order_date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" rn\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" delivery\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=n.exports}}]);