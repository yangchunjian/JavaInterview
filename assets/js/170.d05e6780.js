(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1407:function(s,t,a){"use strict";a.r(t);var n=a(12),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[n("img",{attrs:{src:a(670),alt:"leetcode_keyboard.png"}})]),s._v(" "),n("p",[s._v("二指输入法定制键盘在 X-Y 平面上的布局如上图所示，其中每个大写英文字母都位于某个坐标处。")]),s._v(" "),n("ul",[n("li",[s._v("例如字母 A 位于坐标 (0,0)，字母 B 位于坐标 (0,1)，字母 P 位于坐标 (2,3) 且字母 Z 位于坐标 (4,1)。\n给你一个待输入字符串 word，请你计算并返回在仅使用两根手指的情况下，键入该字符串需要的最小移动总距离。")])]),s._v(" "),n("p",[s._v("坐标 (x1,y1) 和 (x2,y2) 之间的 距离 是 |x1 - x2| + |y1 - y2|。")]),s._v(" "),n("p",[s._v("注意，两根手指的起始位置是零代价的，不计入移动总距离。你的两根手指的起始位置也不必从首字母或者前两个字母开始。")]),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：word = \"CAKE\"\n输出：3\n解释：\n使用两根手指输入 \"CAKE\" 的最佳方案之一是：\n手指 1 在字母 'C' 上 -> 移动距离 = 0\n手指 1 在字母 'A' 上 -> 移动距离 = 从字母 'C' 到字母 'A' 的距离 = 2\n手指 2 在字母 'K' 上 -> 移动距离 = 0\n手指 2 在字母 'E' 上 -> 移动距离 = 从字母 'K' 到字母 'E' 的距离  = 1\n总距离 = 3\n")])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：word = \"HAPPY\"\n输出：6\n解释：\n使用两根手指输入 \"HAPPY\" 的最佳方案之一是：\n手指 1 在字母 'H' 上 -> 移动距离 = 0\n手指 1 在字母 'A' 上 -> 移动距离 = 从字母 'H' 到字母 'A' 的距离 = 2\n手指 2 在字母 'P' 上 -> 移动距离 = 0\n手指 2 在字母 'P' 上 -> 移动距离 = 从字母 'P' 到字母 'P' 的距离 = 0\n手指 1 在字母 'Y' 上 -> 移动距离 = 从字母 'A' 到字母 'Y' 的距离 = 4\n总距离 = 6\n")])])]),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("2 <= word.length <= 300")]),s._v(" "),n("li",[s._v("每个 word[i] 都是一个大写英文字母。")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("dp数组")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("minimumDistance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n         * dp数组的三个维度分别表示：[当前输入到第几个字符][左手在第几个字符i][右手在第几个字符j]\n         * 可以得到下面两个信息：\n         * 1、两个手不可能同时放在最后输入的字符上（也就是不可能出现dp[3][3][3]这种情况）\n         * 2、左右手的顺序可以互换（也就是dp[3][0][3]==dp[3][3][0]）\n         */")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" dp "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化第一个字符，左手不动，右手放在第一个字符上")]),s._v("\n        dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n             * 假设输入到第5个字符，可能的状态有：\n             * 1、dp[5][0][5]：左手没用过，右手停在第5个字符，这种情况只能来自dp[4][0][4];\n             * 2、dp[5][1][5]：左手停在第1个字符，右手停在第5个字符，这种情况只能来自dp[4][1][4]；\n             * 3、dp[5][2][5] <-- dp[4][2][4]\n             * 4、dp[5][3][5] <-- dp[4][3][4]\n             * 5、dp[5][4][5]：这种情况就比较复杂了，首先不能来自dp[4][4][4]，因为左右手不可能都停在第4个字符，所以它可能来自下面几种情况，取最小值。\n             *      1）dp[4][4][0]：前4个都用的左手，到第5个直接用右手。dp[5][5][4]=dp[4][4][0]+0;\n             *      2）dp[4][4][1]：之前左手在第4个字符，右手在第1个字符。dp[5][5][4]=dp[4][4][1]+dis(word[1],word[5])，右手从第1个字符到第5个字符\n             *      3）dp[4][4][2]：dp[5][5][4]=dp[4][2][4]+dis(word[2],word[5]);\n             *      4）dp[4][4][3]：dp[5][5][4]=dp[4][4][3]+dis(word[3],word[5]);\n             *      因为左右手可以替换，dp[5][5][4]=dp[5][4][5]，dp[4][4][0]=dp[4][0][4];\n             *\n             */")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 求dp[i][0][i]到dp[i][i-2][i];")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 求dp[i][i-1][i]")]),s._v("\n            dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" j"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("j "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 求dp[n][0][n]到dp[n][n-1][n]的最小值")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MAX_VALUE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            ans "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("dis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" c2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("abs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("abs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=r.exports},670:function(s,t){s.exports="data:image/png;base64,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"}}]);