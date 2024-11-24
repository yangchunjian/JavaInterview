(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1727:function(t,a,s){"use strict";s.r(a);var n=s(12),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),s("p",[t._v("Table: Activity")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n")])])]),s("p",[t._v("（player_id，event_date）是此表的主键（具有唯一值的列的组合）。")]),t._v(" "),s("p",[t._v("这张表显示了某些游戏的玩家的活动情况。")]),t._v(" "),s("p",[t._v("每一行是一个玩家的记录，他在某一天使用某个设备注销之前登录并玩了很多游戏（可能是 0）。")]),t._v(" "),s("p",[t._v("编写解决方案，报告在首次登录的第二天再次登录的玩家的 比率，四舍五入到小数点后两位。换句话说，你需要计算从首次登录日期开始至少连续两天登录的玩家的数量，然后除以玩家总数。")]),t._v(" "),s("p",[t._v("结果格式如下所示：")]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("p",[t._v("输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Activity table:\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-03-02 | 6            |\n| 2         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\n")])])]),s("p",[t._v("输出：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("+-----------+\n| fraction  |\n+-----------+\n| 0.33      |\n+-----------+\n")])])]),s("p",[t._v("解释：")]),t._v(" "),s("p",[t._v("只有 ID 为 1 的玩家在第一天登录后才重新登录，所以答案是 1/3 = 0.33")]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("round、count、distinct、datediff")]),t._v(" "),s("h2",{attrs:{id:"解法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\n\n# "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Write")]),t._v(" your "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySQL")]),t._v(" query statement below\n        select\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distinct t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("distinct t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" fraction\n        from\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select player_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" first_date\n        from activity\n        group by player_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" t1\n        left join activity t2\n        on t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player_id\n        and "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("datediff")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("event_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);a.default=e.exports}}]);