(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{1242:function(t,a,s){"use strict";s.r(a);var n=s(12),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("ActorDirector 表：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| actor_id    | int     |\n| director_id | int     |\n| timestamp   | int     |\n+-------------+---------+\ntimestamp 是这张表的主键.\n")])])]),s("p"),t._v(" "),s("p",[t._v("写一条SQL查询语句获取合作过至少三次的演员和导演的 id 对 (actor_id, director_id)")]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("ActorDirector 表：\n+-------------+-------------+-------------+\n| actor_id    | director_id | timestamp   |\n+-------------+-------------+-------------+\n| 1           | 1           | 0           |\n| 1           | 1           | 1           |\n| 1           | 1           | 2           |\n| 1           | 2           | 3           |\n| 1           | 2           | 4           |\n| 2           | 1           | 5           |\n| 2           | 1           | 6           |\n+-------------+-------------+-------------+\n\nResult 表：\n+-------------+-------------+\n| actor_id    | director_id |\n+-------------+-------------+\n| 1           | 1           |\n+-------------+-------------+\n唯一的 id 对是 (1, 1)，他们恰好合作了 3 次。\n")])])]),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("group by")]),t._v(" "),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n# "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Write")]),t._v(" your "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySQL")]),t._v(" query statement below\n\nselect actor_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("director_id\nfrom "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActorDirector")]),t._v("\ngroup by actor_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" director_id\nhaving "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=r.exports}}]);