(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{1296:function(e,t,a){"use strict";a.r(t);var n=a(12),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[e._v("#")]),e._v(" 题目")]),e._v(" "),a("p",[e._v("Views 表：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| article_id    | int     |\n| author_id     | int     |\n| viewer_id     | int     |\n| view_date     | date    |\n+---------------+---------+\n此表无主键，因此可能会存在重复行。\n此表的每一行都表示某人在某天浏览了某位作者的某篇文章。\n请注意，同一人的 author_id 和 viewer_id 是相同的。\n")])])]),a("p"),e._v(" "),a("p",[e._v("请编写一条 SQL 查询以找出所有浏览过自己文章的作者，结果按照 id 升序排列。")]),e._v(" "),a("p",[e._v("查询结果的格式如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Views 表：\n+------------+-----------+-----------+------------+\n| article_id | author_id | viewer_id | view_date  |\n+------------+-----------+-----------+------------+\n| 1          | 3         | 5         | 2019-08-01 |\n| 1          | 3         | 6         | 2019-08-02 |\n| 2          | 7         | 7         | 2019-08-01 |\n| 2          | 7         | 6         | 2019-08-02 |\n| 4          | 7         | 1         | 2019-07-22 |\n| 3          | 4         | 4         | 2019-07-21 |\n| 3          | 4         | 4         | 2019-07-21 |\n+------------+-----------+-----------+------------+\n\n结果表：\n+------+\n| id   |\n+------+\n| 4    |\n| 7    |\n+------+\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[e._v("#")]),e._v(" 思路")]),e._v(" "),a("p",[e._v("distinct")]),e._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n# Write your MySQL query statement below\nselect distinct viewer_id as id\nfrom views \nwhere author_id=viewer_id\norder by id \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("ul",[a("li",[e._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=s.exports}}]);