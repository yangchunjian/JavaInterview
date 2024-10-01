(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{1641:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("表：Stadium\n+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| id            | int     |\n| visit_date    | date    |\n| people        | int     |\n+---------------+---------+\nvisit_date 是表的主键\n每日人流量信息被记录在这三列信息中：序号 (id)、日期 (visit_date)、 人流量 (people)\n每天只有一行记录，日期随着 id 的增加而增加\n")])])]),s("p"),t._v(" "),s("p",[t._v("编写一个 SQL 查询以找出每行的人数大于或等于 100 且 id 连续的三行或更多行记录。")]),t._v(" "),s("p",[t._v("返回按 visit_date 升序排列 的结果表。")]),t._v(" "),s("p",[t._v("查询结果格式如下所示。")]),t._v(" "),s("p"),t._v(" "),s("p",[t._v("示例 1:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("输入：\nStadium 表:\n+------+------------+-----------+\n| id   | visit_date | people    |\n+------+------------+-----------+\n| 1    | 2017-01-01 | 10        |\n| 2    | 2017-01-02 | 109       |\n| 3    | 2017-01-03 | 150       |\n| 4    | 2017-01-04 | 99        |\n| 5    | 2017-01-05 | 145       |\n| 6    | 2017-01-06 | 1455      |\n| 7    | 2017-01-07 | 199       |\n| 8    | 2017-01-09 | 188       |\n+------+------------+-----------+\n输出：\n+------+------------+-----------+\n| id   | visit_date | people    |\n+------+------------+-----------+\n| 5    | 2017-01-05 | 145       |\n| 6    | 2017-01-06 | 1455      |\n| 7    | 2017-01-07 | 199       |\n| 8    | 2017-01-09 | 188       |\n+------+------------+-----------+\n解释：\nid 为 5、6、7、8 的四行 id 连续，并且每行都有 >= 100 的人数记录。\n请注意，即使第 7 行和第 8 行的 visit_date 不是连续的，输出也应当包含第 8 行，因为我们只需要考虑 id 连续的记录。\n不输出 id 为 2 和 3 的行，因为至少需要三条 id 连续的记录。\n")])])]),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("利用多表联合查询，分为三种情况顺序")]),t._v(" "),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n# "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Write")]),t._v(" your "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySQL")]),t._v(" query statement below\n\nselect distinct a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("* from stadium a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stadium b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("stadium c\nwhere a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" and b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" and c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("people"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nand "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" or\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" or\n     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" and b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" order by a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);