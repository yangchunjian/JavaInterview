(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1516:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("给你一个 n * n 矩阵 grid ，矩阵由若干 0 和 1 组成。请你用四叉树表示该矩阵 grid 。")]),s._v(" "),n("p",[s._v("你需要返回能表示矩阵的 四叉树 的根结点。")]),s._v(" "),n("p",[s._v("注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。")]),s._v(" "),n("p",[s._v("四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；")])]),s._v(" "),n("li",[n("p",[s._v("isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("  class Node {\n      public boolean val;\n      public boolean isLeaf;\n      public Node topLeft;\n      public Node topRight;\n      public Node bottomLeft;\n      public Node bottomRight;\n\n  }\n")])])])])]),s._v(" "),n("p",[s._v("我们可以按以下步骤为二维区域构建四叉树：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("    如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。\n    如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。\n    使用适当的子网格递归每个子节点。\n")])])]),n("p",[n("img",{attrs:{src:a(762),alt:""}})]),s._v(" "),n("p",[s._v("如果你想了解更多关于四叉树的内容，可以参考 wiki 。")]),s._v(" "),n("p",[s._v("四叉树格式：")]),s._v(" "),n("p",[s._v("输出为使用层序遍历后四叉树的序列化形式，其中 null 表示路径终止符，其下面不存在节点。")]),s._v(" "),n("p",[s._v("它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 [isLeaf, val] 。")]),s._v(" "),n("p",[s._v("如果 isLeaf 或者 val 的值为 True ，则表示它在列表 [isLeaf, val] 中的值为 1 ；如果 isLeaf 或者 val 的值为 False ，则表示值为 0 。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(763),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：grid = [[0,1],[1,0]]\n输出：[[0,1],[1,0],[1,1],[1,1],[1,0]]\n解释：此示例的解释如下：\n请注意，在下面四叉树的图示中，0 表示 false，1 表示 True 。\n")])])]),n("p",[n("img",{attrs:{src:a(764),alt:""}})]),s._v(" "),n("p",[s._v("示例 2：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(765),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]\n输出：[[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]\n解释：网格中的所有值都不相同。我们将网格划分为四个子网格。\ntopLeft，bottomLeft 和 bottomRight 均具有相同的值。\ntopRight 具有不同的值，因此我们将其再分为 4 个子网格，这样每个子网格都具有相同的值。\n解释如下图所示：\n")])])]),n("p",[n("img",{attrs:{src:a(766),alt:""}})]),s._v(" "),n("p",[s._v("示例 3：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：grid = [[1,1],[1,1]]\n输出：[[1,1]]\n")])])]),n("p",[s._v("示例 4：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：grid = [[0]]\n输出：[[1,0]]\n")])])]),n("p",[s._v("示例 5：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入：grid = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]\n输出：[[0,1],[1,1],[1,0],[1,0],[1,1]]\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("ul",[n("li",[s._v("n == grid.length == grid[i].length")]),s._v(" "),n("li",[s._v("n == 2^x 其中 0 <= x <= 6")])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("向深层dfs")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n// Definition for a QuadTree node.\nclass Node {\n    public boolean val;\n    public boolean isLeaf;\n    public Node topLeft;\n    public Node topRight;\n    public Node bottomLeft;\n    public Node bottomRight;\n\n    \n    public Node() {\n        this.val = false;\n        this.isLeaf = false;\n        this.topLeft = null;\n        this.topRight = null;\n        this.bottomLeft = null;\n        this.bottomRight = null;\n    }\n    \n    public Node(boolean val, boolean isLeaf) {\n        this.val = val;\n        this.isLeaf = isLeaf;\n        this.topLeft = null;\n        this.topRight = null;\n        this.bottomLeft = null;\n        this.bottomRight = null;\n    }\n    \n    public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node bottomRight) {\n        this.val = val;\n        this.isLeaf = isLeaf;\n        this.topLeft = topLeft;\n        this.topRight = topRight;\n        this.bottomLeft = bottomLeft;\n        this.bottomRight = bottomRight;\n    }\n};\n*/")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \n    \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//n 指的是当前遍历的正方体的边长")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//base case:如果方格边长为1表示已经递归到最深层，一定是叶子")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//向深层dfs      ")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" topL "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" topR "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" bottomL "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" bottomR "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("construct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回值")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("topL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" topR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" bottomL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" bottomR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" topR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" bottomL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" topL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLeaf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" topR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLeaf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" bottomL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLeaf "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" bottomR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLeaf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("topL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bottomL"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bottomR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports},762:function(s,t,a){s.exports=a.p+"assets/img/new_top.6429f825.png"},763:function(s,t,a){s.exports=a.p+"assets/img/grid1.0c06a6ff.png"},764:function(s,t,a){s.exports=a.p+"assets/img/e1tree.c302b44d.png"},765:function(s,t,a){s.exports=a.p+"assets/img/e2mat.54617772.png"},766:function(s,t,a){s.exports=a.p+"assets/img/e2tree.1c33d88f.png"}}]);