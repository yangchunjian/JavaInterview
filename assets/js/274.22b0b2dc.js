(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{1227:function(e,s,n){"use strict";n.r(s);var a=n(12),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[e._v("#")]),e._v(" 题目")]),e._v(" "),n("p",[e._v("项目表 Project：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| project_id  | int     |\n| employee_id | int     |\n+-------------+---------+\n主键为 (project_id, employee_id)。\nemployee_id 是员工表 Employee 表的外键。\n这张表的每一行表示 employee_id 的员工正在 project_id 的项目上工作。\n")])])]),n("p",[e._v("员工表 Employee：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("+------------------+---------+\n| Column Name      | Type    |\n+------------------+---------+\n| employee_id      | int     |\n| name             | varchar |\n| experience_years | int     |\n+------------------+---------+\n主键是 employee_id。数据保证 experience_years 非空。\n这张表的每一行包含一个员工的信息。\n")])])]),n("p",[e._v("请写一个 SQL 语句，查询每一个项目中员工的 平均 工作年限，精确到小数点后两位。")]),e._v(" "),n("p",[e._v("以 任意 顺序返回结果表。")]),e._v(" "),n("p",[e._v("查询结果的格式如下。")]),e._v(" "),n("p",[e._v("示例 1:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("输入：\nProject 表：\n+-------------+-------------+\n| project_id  | employee_id |\n+-------------+-------------+\n| 1           | 1           |\n| 1           | 2           |\n| 1           | 3           |\n| 2           | 1           |\n| 2           | 4           |\n+-------------+-------------+\n\nEmployee 表：\n+-------------+--------+------------------+\n| employee_id | name   | experience_years |\n+-------------+--------+------------------+\n| 1           | Khaled | 3                |\n| 2           | Ali    | 2                |\n| 3           | John   | 1                |\n| 4           | Doe    | 2                |\n+-------------+--------+------------------+\n\n输出：\n+-------------+---------------+\n| project_id  | average_years |\n+-------------+---------------+\n| 1           | 2.00          |\n| 2           | 2.50          |\n+-------------+---------------+\n解释：第一个项目中，员工的平均工作年限是 (3 + 2 + 1) / 3 = 2.00；第二个项目中，员工的平均工作年限是 (3 + 2) / 2 = 2.50\n")])])]),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[e._v("#")]),e._v(" 思路")]),e._v(" "),n("p",[e._v("ROUND(AVG(e.experience_years*1.0),2)")]),e._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[e._v("#")]),e._v(" 解法")]),e._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("project_id "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'project_id'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("ROUND")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("AVG")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("experience_years"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" average_years \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" project p\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("left")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("join")]),e._v(" employee e\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("on")]),e._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("employee_id"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("employee_id\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("group")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" project_id\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),n("ul",[n("li",[e._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=t.exports}}]);