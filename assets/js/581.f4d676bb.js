(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1637:function(n,s,a){"use strict";a.r(s);var t=a(12),e=Object(t.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[n._v("#")]),n._v(" 题目")]),n._v(" "),a("p",[n._v("MyNumbers 表：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("+-------------+------+\n| Column Name | Type |\n+-------------+------+\n| num         | int  |\n+-------------+------+\n该表可能包含重复项（换句话说，在SQL中，该表没有主键）。\n这张表的每一行都含有一个整数。\n")])])]),a("p",[n._v("单一数字 是在 MyNumbers 表中只出现一次的数字。")]),n._v(" "),a("p",[n._v("找出最大的 单一数字 。如果不存在 单一数字 ，则返回 null 。")]),n._v(" "),a("p",[n._v("查询结果如下例所示。")]),n._v(" "),a("p",[n._v("示例 1：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("输入：\nMyNumbers 表：\n+-----+\n| num |\n+-----+\n| 8   |\n| 8   |\n| 3   |\n| 3   |\n| 1   |\n| 4   |\n| 5   |\n| 6   |\n+-----+\n输出：\n+-----+\n| num |\n+-----+\n| 6   |\n+-----+\n解释：单一数字有 1、4、5 和 6 。\n6 是最大的单一数字，返回 6 。\n")])])]),a("p",[n._v("示例 2：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[n._v("输入：\nMyNumbers table:\n+-----+\n| num |\n+-----+\n| 8   |\n| 8   |\n| 7   |\n| 7   |\n| 3   |\n| 3   |\n| 3   |\n+-----+\n输出：\n+------+\n| num  |\n+------+\n| null |\n+------+\n解释：输入的表中不存在单一数字，所以返回 null 。\n")])])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[n._v("#")]),n._v(" 思路")]),n._v(" "),a("p",[n._v("利用选中空表返回null的特性")]),n._v(" "),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[n._v("#")]),n._v(" 解法")]),n._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# Write your MySQL query statement below")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("-- 利用选中空表返回null的特性")]),n._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("select")]),n._v(" num \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("from")]),n._v(" mynumbers \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("group")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("by")]),n._v(" num \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("having")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("order")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("by")]),n._v(" num \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("desc")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("limit")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("1")]),n._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),a("ul",[a("li",[n._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);