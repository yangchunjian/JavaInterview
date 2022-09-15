(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{1034:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"题目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[a._v("#")]),a._v(" 题目")]),a._v(" "),t("p",[a._v("某城市开了一家新的电影院，吸引了很多人过来看电影。该电影院特别注意用户体验，专门有个 LED显示板做电影推荐，上面公布着影评和相关电影描述。")]),a._v(" "),t("p",[a._v("作为该电影院的信息部主管，您需要编写一个 SQL查询，找出所有影片描述为非 boring (不无聊) 的并且 id 为奇数 的影片，结果请按等级 rating 排列。")]),a._v(" "),t("p"),a._v(" "),t("p",[a._v("例如，下表 cinema:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("+---------+-----------+--------------+-----------+\n|   id    | movie     |  description |  rating   |\n+---------+-----------+--------------+-----------+\n|   1     | War       |   great 3D   |   8.9     |\n|   2     | Science   |   fiction    |   8.5     |\n|   3     | irish     |   boring     |   6.2     |\n|   4     | Ice song  |   Fantacy    |   8.6     |\n|   5     | House card|   Interesting|   9.1     |\n+---------+-----------+--------------+-----------+\n")])])]),t("p",[a._v("对于上面的例子，则正确的输出是为：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("+---------+-----------+--------------+-----------+\n|   id    | movie     |  description |  rating   |\n+---------+-----------+--------------+-----------+\n|   5     | House card|   Interesting|   9.1     |\n|   1     | War       |   great 3D   |   8.9     |\n+---------+-----------+--------------+-----------+\n")])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),t("p",[a._v("!= 或者 %")]),a._v(" "),t("h2",{attrs:{id:"解法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[a._v("#")]),a._v(" 解法")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("\n# "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Write")]),a._v(" your "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MySQL")]),a._v(" query statement below\n\nselect "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" from cinema where description "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token char"}},[a._v("'boring'")]),a._v(" and id "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" order by rating desc\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("ul",[t("li",[a._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);s.default=r.exports}}]);