(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{1661:function(e,t,a){"use strict";a.r(t);var n=a(12),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[e._v("#")]),e._v(" 题目")]),e._v(" "),a("p",[e._v("SQL架构\n活动表 Activity：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("+--------------+---------+\n| Column Name  | Type    |\n+--------------+---------+\n| player_id    | int     |\n| device_id    | int     |\n| event_date   | date    |\n| games_played | int     |\n+--------------+---------+\n表的主键是 (player_id, event_date)。\n这张表展示了一些游戏玩家在游戏平台上的行为活动。\n每行数据记录了一名玩家在退出平台之前，当天使用同一台设备登录平台后打开的游戏的数目（可能是 0 个）。\n")])])]),a("p",[e._v("写一条 SQL 查询语句获取每位玩家 第一次登陆平台的日期。")]),e._v(" "),a("p",[e._v("查询结果的格式如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("Activity 表：\n+-----------+-----------+------------+--------------+\n| player_id | device_id | event_date | games_played |\n+-----------+-----------+------------+--------------+\n| 1         | 2         | 2016-03-01 | 5            |\n| 1         | 2         | 2016-05-02 | 6            |\n| 2         | 3         | 2017-06-25 | 1            |\n| 3         | 1         | 2016-03-02 | 0            |\n| 3         | 4         | 2018-07-03 | 5            |\n+-----------+-----------+------------+--------------+\n\nResult 表：\n+-----------+-------------+\n| player_id | first_login |\n+-----------+-------------+\n| 1         | 2016-03-01  |\n| 2         | 2017-06-25  |\n| 3         | 2016-03-02  |\n+-----------+-------------+\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[e._v("#")]),e._v(" 思路")]),e._v(" "),a("p",[e._v("min函数和group by")]),e._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n# Write your MySQL query statement below\n\nselect player_id,min(event_date) first_login\nfrom activity\ngroup by player_id\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("ul",[a("li",[e._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=s.exports}}]);