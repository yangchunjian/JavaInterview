(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1552:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("假设有一个同时存储文件和目录的文件系统。下图展示了文件系统的一个示例：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(765),alt:""}})]),s._v(" "),n("p",[s._v("这里将 dir 作为根目录中的唯一目录。dir 包含两个子目录 subdir1 和 subdir2 。subdir1 包含文件 file1.ext 和子目录 subsubdir1；subdir2 包含子目录 subsubdir2，该子目录下包含文件 file2.ext 。")]),s._v(" "),n("p",[s._v("在文本格式中，如下所示(⟶表示制表符)：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("dir\n⟶ subdir1\n⟶ ⟶ file1.ext\n⟶ ⟶ subsubdir1\n⟶ subdir2\n⟶ ⟶ subsubdir2\n⟶ ⟶ ⟶ file2.ext\n")])])]),n("p",[s._v("如果是代码表示，上面的文件系统可以写为 \"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext\" 。'\\n' 和 '\\t' 分别是换行符和制表符。")]),s._v(" "),n("p",[s._v("文件系统中的每个文件和文件夹都有一个唯一的 绝对路径 ，即必须打开才能到达文件/目录所在位置的目录顺序，所有路径用 '/' 连接。上面例子中，指向 file2.ext 的 绝对路径 是 \"dir/subdir2/subsubdir2/file2.ext\" 。每个目录名由字母、数字和/或空格组成，每个文件名遵循 name.extension 的格式，其中 name 和 extension由字母、数字和/或空格组成。")]),s._v(" "),n("p",[s._v("给定一个以上述格式表示文件系统的字符串 input ，返回文件系统中 指向 文件 的 最长绝对路径 的长度 。 如果系统中没有文件，返回 0。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(766),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('输入：input = "dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext"\n输出：20\n解释：只有一个文件，绝对路径为 "dir/subdir2/file.ext" ，路径长度 20\n')])])]),n("p",[s._v("示例 2：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(767),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('输入：input = "dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext"\n输出：32\n解释：存在两个文件：\n"dir/subdir1/file1.ext" ，路径长度 21\n"dir/subdir2/subsubdir2/file2.ext" ，路径长度 32\n返回 32 ，因为这是最长的路径\n')])])]),n("p",[s._v("示例 3：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('输入：input = "a"\n输出：0\n解释：不存在任何文件\n')])])]),n("p",[s._v("示例 4：")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v('输入：input = "file1.txt\\nfile2.txt\\nlongfile.txt"\n输出：12\n解释：根目录下有 3 个文件。\n因为根目录中任何东西的绝对路径只是名称本身，所以答案是 "longfile.txt" ，路径长度为 12\n')])])]),n("p"),s._v(" "),n("p",[s._v("提示：")]),s._v(" "),n("p",[s._v("1 <= input.length <= 10"),n("sup",[s._v("4")]),s._v("\ninput 可能包含小写或大写的英文字母，一个换行符 '\\n'，一个制表符 '\\t'，一个点 '.'，一个空格 ' '，和数字。")]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("java100%，通过栈记录目录长度")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// java100%，通过栈记录目录长度")]),s._v("\n\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("lengthLongestPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" splits "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayDeque")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Integer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" stack "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayDeque")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" split "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" splits"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//通过'\\t'个数以及stack大小，先判断是哪一层的")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("charAt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token char"}},[s._v("'\\t'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("k"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("length")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("peek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("split"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexOf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                res "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Math")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                stack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("len "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=e.exports},765:function(s,t,a){s.exports=a.p+"assets/img/mdir.4377bfef.jpeg"},766:function(s,t,a){s.exports=a.p+"assets/img/dir1.589ffc07.jpeg"},767:function(s,t,a){s.exports=a.p+"assets/img/dir2.7eb58022.jpeg"}}]);