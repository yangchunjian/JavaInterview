(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1422:function(t,s,a){"use strict";a.r(s);var n=a(12),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),n("p",[t._v("你需要制定一份 d 天的工作计划表。工作之间存在依赖，要想执行第 i 项工作，你必须完成全部 j 项工作（ 0 <= j < i）。")]),t._v(" "),n("p",[t._v("你每天 至少 需要完成一项任务。工作计划的总难度是这 d 天每一天的难度之和，而一天的工作难度是当天应该完成工作的最大难度。")]),t._v(" "),n("p",[t._v("给你一个整数数组 jobDifficulty 和一个整数 d，分别代表工作难度和需要计划的天数。第 i 项工作的难度是 jobDifficulty[i]。")]),t._v(" "),n("p",[t._v("返回整个工作计划的 最小难度 。如果无法制定工作计划，则返回 -1 。")]),t._v(" "),n("p",[t._v("示例 1：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(673),alt:"untitled.png"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：jobDifficulty = [6,5,4,3,2,1], d = 2\n输出：7\n解释：第一天，您可以完成前 5 项工作，总难度 = 6.\n第二天，您可以完成最后一项工作，总难度 = 1.\n计划表的难度 = 6 + 1 = 7\n")])])]),n("p",[t._v("示例 2：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：jobDifficulty = [9,9,9], d = 4\n输出：-1\n解释：就算你每天完成一项工作，仍然有一天是空闲的，你无法制定一份能够满足既定工作时间的计划表。\n")])])]),n("p",[t._v("示例 3：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：jobDifficulty = [1,1,1], d = 3\n输出：3\n解释：工作计划为每天一项工作，总难度为 3 。\n")])])]),n("p",[t._v("示例 4：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：jobDifficulty = [7,1,7,1,7,1], d = 3\n输出：15\n")])])]),n("p",[t._v("示例 5：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("输入：jobDifficulty = [11,111,22,222,33,333,44,444], d = 6\n输出：843\n")])])]),n("p",[t._v("提示：")]),t._v(" "),n("ul",[n("li",[t._v("1 <= jobDifficulty.length <= 300")]),t._v(" "),n("li",[t._v("0 <= jobDifficulty[i] <= 1000")]),t._v(" "),n("li",[t._v("1 <= d <= 10")])]),t._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),n("p",[t._v("int[][] max = new int[n][n];")]),t._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[t._v("#")]),t._v(" 解法")]),t._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("minDifficulty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" jobDifficulty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jobDifficulty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" max "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" u "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                u "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jobDifficulty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" u"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x3f3f3f3f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" day "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" day "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" day"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("day"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("day"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("day "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("ul",[n("li",[t._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=p.exports},673:function(t,s){t.exports="data:image/png;base64,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"}}]);