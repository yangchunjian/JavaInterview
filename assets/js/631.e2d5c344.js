(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{1710:function(s,n,a){"use strict";a.r(n);var e=a(12),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("表: Orders")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("+-----------------+----------+\n| Column Name     | Type     |\n+-----------------+----------+\n| order_number    | int      |\n| customer_number | int      |\n+-----------------+----------+\nOrder_number是该表的主键。\n此表包含关于订单ID和客户ID的信息。\n")])])]),a("p"),s._v(" "),a("p",[s._v("编写一个SQL查询，为下了 最多订单 的客户查找 customer_number 。")]),s._v(" "),a("p",[s._v("测试用例生成后， 恰好有一个客户 比任何其他客户下了更多的订单。")]),s._v(" "),a("p",[s._v("查询结果格式如下所示。")]),s._v(" "),a("p"),s._v(" "),a("p",[s._v("示例 1:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("输入: \nOrders 表:\n+--------------+-----------------+\n| order_number | customer_number |\n+--------------+-----------------+\n| 1            | 1               |\n| 2            | 2               |\n| 3            | 3               |\n| 4            | 3               |\n+--------------+-----------------+\n输出: \n+-----------------+\n| customer_number |\n+-----------------+\n| 3               |\n+-----------------+\n解释: \ncustomer_number 为 '3' 的顾客有两个订单，比顾客 '1' 或者 '2' 都要多，因为他们只有一个订单。\n所以结果是该顾客的 customer_number ，也就是 3 。\n")])])]),a("p"),s._v(" "),a("p",[s._v("进阶： 如果有多位顾客订单数并列最多，你能找到他们所有的 customer_number 吗？")]),s._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("COUNT()函数")]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("\n# "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Write")]),s._v(" your "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MySQL")]),s._v(" query statement below\n\nSELECT\n    customer_number\nFROM\n    orders\nGROUP BY \n    customer_number\nORDER "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BY")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("customer_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" DESC\nLIMIT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);n.default=t.exports}}]);