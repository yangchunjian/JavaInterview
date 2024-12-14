(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1441:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),a("p",[s._v("表：Movies")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| movie_id      | int     |\n| title         | varchar |\n+---------------+---------+\nmovie_id 是这个表的主键(具有唯一值的列)。\ntitle 是电影的名字。\n")])])]),a("p",[s._v("表：Users")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| user_id       | int     |\n| name          | varchar |\n+---------------+---------+\nuser_id 是表的主键(具有唯一值的列)。\n'name' 列具有唯一值。\n")])])]),a("p",[s._v("表：MovieRating")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("+---------------+---------+\n| Column Name   | Type    |\n+---------------+---------+\n| movie_id      | int     |\n| user_id       | int     |\n| rating        | int     |\n| created_at    | date    |\n+---------------+---------+\n(movie_id, user_id) 是这个表的主键(具有唯一值的列的组合)。\n这个表包含用户在其评论中对电影的评分 rating 。\ncreated_at 是用户的点评日期。\n")])])]),a("p",[s._v("请你编写一个解决方案：")]),s._v(" "),a("ul",[a("li",[s._v("查找评论电影数量最多的用户名。如果出现平局，返回字典序较小的用户名。")]),s._v(" "),a("li",[s._v("查找在 February 2020 平均评分最高 的电影名称。如果出现平局，返回字典序较小的电影名称。\n字典序 ，即按字母在字典中出现顺序对字符串排序，字典序较小则意味着排序靠前。")])]),s._v(" "),a("p",[s._v("返回结果格式如下例所示。")]),s._v(" "),a("p",[s._v("示例 1：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('输入：\nMovies 表：\n+-------------+--------------+\n| movie_id    |  title       |\n+-------------+--------------+\n| 1           | Avengers     |\n| 2           | Frozen 2     |\n| 3           | Joker        |\n+-------------+--------------+\nUsers 表：\n+-------------+--------------+\n| user_id     |  name        |\n+-------------+--------------+\n| 1           | Daniel       |\n| 2           | Monica       |\n| 3           | Maria        |\n| 4           | James        |\n+-------------+--------------+\nMovieRating 表：\n+-------------+--------------+--------------+-------------+\n| movie_id    | user_id      | rating       | created_at  |\n+-------------+--------------+--------------+-------------+\n| 1           | 1            | 3            | 2020-01-12  |\n| 1           | 2            | 4            | 2020-02-11  |\n| 1           | 3            | 2            | 2020-02-12  |\n| 1           | 4            | 1            | 2020-01-01  |\n| 2           | 1            | 5            | 2020-02-17  |\n| 2           | 2            | 2            | 2020-02-01  |\n| 2           | 3            | 2            | 2020-03-01  |\n| 3           | 1            | 3            | 2020-02-22  |\n| 3           | 2            | 4            | 2020-02-25  |\n+-------------+--------------+--------------+-------------+\n输出：\nResult 表：\n+--------------+\n| results      |\n+--------------+\n| Daniel       |\n| Frozen 2     |\n+--------------+\n解释：\nDaniel 和 Monica 都点评了 3 部电影（"Avengers", "Frozen 2" 和 "Joker"） 但是 Daniel 字典序比较小。\nFrozen 2 和 Joker 在 2 月的评分都是 3.5，但是 Frozen 2 的字典序比较小。\n')])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("union all")]),s._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" name results "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("movie_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ct "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" movierating m "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("users u\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("user_id\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" ct "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a1\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("union")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" title results "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v("  m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rating "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" movierating mr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Movies m\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("movie_id  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("movie_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("year")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" mr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("movie_id\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" ag "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("title\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ul",[a("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports}}]);