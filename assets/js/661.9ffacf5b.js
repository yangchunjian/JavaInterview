(window.webpackJsonp=window.webpackJsonp||[]).push([[661],{1747:function(s,t,e){"use strict";e.r(t);var a=e(12),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"题目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),e("p",[s._v("RequestAccepted 表：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("+----------------+---------+\n| Column Name    | Type    |\n+----------------+---------+\n| requester_id   | int     |\n| accepter_id    | int     |\n| accept_date    | date    |\n+----------------+---------+\n(requester_id, accepter_id) 是这张表的主键(具有唯一值的列的组合)。\n这张表包含发送好友请求的人的 ID ，接收好友请求的人的 ID ，以及好友请求通过的日期。\n")])])]),e("p",[s._v("编写解决方案，找出拥有最多的好友的人和他拥有的好友数目。")]),s._v(" "),e("p",[s._v("生成的测试用例保证拥有最多好友数目的只有 1 个人。")]),s._v(" "),e("p",[s._v("查询结果格式如下例所示。")]),s._v(" "),e("p",[s._v("示例 1：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("输入：\nRequestAccepted 表：\n+--------------+-------------+-------------+\n| requester_id | accepter_id | accept_date |\n+--------------+-------------+-------------+\n| 1            | 2           | 2016/06/03  |\n| 1            | 3           | 2016/06/08  |\n| 2            | 3           | 2016/06/08  |\n| 3            | 4           | 2016/06/09  |\n+--------------+-------------+-------------+\n输出：\n+----+-----+\n| id | num |\n+----+-----+\n| 3  | 3   |\n+----+-----+\n解释：\n编号为 3 的人是编号为 1 ，2 和 4 的人的好友，所以他总共有 3 个好友，比其他人都多。\n")])])]),e("p",[s._v("进阶：在真实世界里，可能会有多个人拥有好友数相同且最多，你能找到所有这些人吗？")]),s._v(" "),e("h2",{attrs:{id:"思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),e("p",[s._v("union all")]),s._v(" "),e("h2",{attrs:{id:"解法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Write your MySQL query statement below")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("\n    id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" num\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" requester_id id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" RequestAccepted\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" accepter_id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" RequestAccepted\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" num "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("ul",[e("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=n.exports}}]);