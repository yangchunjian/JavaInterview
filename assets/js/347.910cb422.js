(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{1326:function(n,s,t){"use strict";t.r(s);var a=t(12),e=Object(a.a)({},(function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),t("p",[n._v("表: Queue")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| person_id   | int     |\n| person_name | varchar |\n| weight      | int     |\n| turn        | int     |\n+-------------+---------+\nperson_id 是这个表具有唯一值的列。\n该表展示了所有候车乘客的信息。\n表中 person_id 和 turn 列将包含从 1 到 n 的所有数字，其中 n 是表中的行数。\nturn 决定了候车乘客上巴士的顺序，其中 turn=1 表示第一个上巴士，turn=n 表示最后一个上巴士。\nweight 表示候车乘客的体重，以千克为单位。\n")])])]),t("p",[n._v("有一队乘客在等着上巴士。然而，巴士有1000  千克 的重量限制，所以其中一部分乘客可能无法上巴士。")]),n._v(" "),t("p",[n._v("编写解决方案找出 最后一个 上巴士且不超过重量限制的乘客，并报告 person_name 。题目测试用例确保顺位第一的人可以上巴士且不会超重。")]),n._v(" "),t("p",[n._v("返回结果格式如下所示。")]),n._v(" "),t("p",[n._v("示例 1：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("输入：\nQueue 表\n+-----------+-------------+--------+------+\n| person_id | person_name | weight | turn |\n+-----------+-------------+--------+------+\n| 5         | Alice       | 250    | 1    |\n| 4         | Bob         | 175    | 5    |\n| 3         | Alex        | 350    | 2    |\n| 6         | John Cena   | 400    | 3    |\n| 1         | Winston     | 500    | 6    |\n| 2         | Marie       | 200    | 4    |\n+-----------+-------------+--------+------+\n输出：\n+-------------+\n| person_name |\n+-------------+\n| John Cena   |\n+-------------+\n解释：\n为了简化，Queue 表按 turn 列由小到大排序。\n+------+----+-----------+--------+--------------+\n| Turn | ID | Name      | Weight | Total Weight |\n+------+----+-----------+--------+--------------+\n| 1    | 5  | Alice     | 250    | 250          |\n| 2    | 3  | Alex      | 350    | 600          |\n| 3    | 6  | John Cena | 400    | 1000         | (最后一个上巴士)\n| 4    | 2  | Marie     | 200    | 1200         | (无法上巴士)\n| 5    | 4  | Bob       | 175    | ___          |\n| 6    | 1  | Winston   | 500    | ___          |\n+------+----+-----------+--------+--------------+\n")])])]),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),t("p",[n._v("sum() + 开窗，然后过滤总重量<=1000kg的所有数据，然后对turn倒序排序取第一个即可")]),n._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" \n    person_name \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("from")]),n._v(" \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" person_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" turn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("weight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("over")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("order")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("by")]),n._v(" turn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("as")]),n._v(" total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("from")]),n._v(" Queue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" t \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("where")]),n._v(" total "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("<=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1000")]),n._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("order")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("by")]),n._v(" turn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("desc")]),n._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("limit")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v("\n\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),t("ul",[t("li",[n._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);