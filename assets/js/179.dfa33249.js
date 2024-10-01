(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1552:function(s,t,a){"use strict";a.r(t);var n=a(12),A=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"题目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[s._v("#")]),s._v(" 题目")]),s._v(" "),n("p",[s._v("你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。")]),s._v(" "),n("p",[s._v("如果你能使这个正方形，则返回 true ，否则返回 false 。")]),s._v(" "),n("p"),s._v(" "),n("p",[s._v("示例 1:")]),s._v(" "),n("p",[n("img",{attrs:{src:a(773),alt:""}})]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入: matchsticks = [1,1,2,2,2]\n输出: true\n解释: 能拼成一个边长为2的正方形，每边两根火柴。\n")])])]),n("p",[s._v("示例 2:")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("输入: matchsticks = [3,3,3,3,4]\n输出: false\n解释: 不能用所有火柴拼成一个正方形。\n")])])]),n("p"),s._v(" "),n("p",[s._v("提示:")]),s._v(" "),n("ul",[n("li",[s._v("1 <= matchsticks.length <= 15")]),s._v(" "),n("li",[s._v("1 <= matchsticks[i] <= 10"),n("sup",[s._v("8")])])]),s._v(" "),n("h2",{attrs:{id:"思路"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),n("p",[s._v("可以看成是固定个数的固定容量的水桶的接水问题。对于例子[1, 1, 2, 2, 2]，按从大到小排列变成[2, 2, 2, 1, 1]。 正方形的四条边抽象成四个水桶，每个水桶的容量为2，超过容量就会溢出。nums[0] = 2，用第一个桶装，刚刚好装满； nums[1] = 2，用第一个桶装，发现2 + 2 = 4 > 2，那么就用第二个桶装，第二个桶也装满；nums[2] = 2，用第一个和第二个 桶都装不下，用第三个桶装，那么第三个桶也装满；nums[3] = 1，只能用第四个桶装，但没装满；nums[4] = 1，也只能用第四个桶装， 第四个桶也装满了。四个桶都恰好装满表示能构成正方形。")]),s._v(" "),n("h2",{attrs:{id:"解法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),n("div",{staticClass:"language-java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Solution")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("makesquare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Arrays")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("allocate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sum "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("allocate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" avg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" avg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" avg "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" avg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" avg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("allocate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pos "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" avg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        sums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" nums"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("ul",[n("li",[s._v("分析出几种情况，然后分别对各个情况实现")])])])}),[],!1,null,null,null);t.default=A.exports},773:function(s,t){s.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAD9AP0DASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAcIBQkCBAYDAf/EAFoQAAAFAwIBBAoKDwUDDQAAAAABAgMEBQYHCBESCSExQRMUGThRV2FykZUVFhcyNXF3gbPSIjlSU1RWdYKWobG0tdPUI0Jig5KistEYJDRDRlhjc3STpKXC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/xAAgEQEBAAICAwEBAQEAAAAAAAAAAQIRAzESEyFBYSJR/9oADAMBAAIRAxEAPwDamAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADrVGp06kRHJ9VnxoUZouJx6Q6ltCC8JqUZEQDsgINuvXDpKsuSuHXM+Wib7Z8K24U4pqkn4D7Bx7GPPxeUa0XS3SZbzrSEqM9iN2LJbT6VNkRALJAI2s7Upp9yCpDVmZosyrPr6I8atR1PfO3xcZegSM2608gnGnErSrnJST3IwHMAAAAAAAAAAAAAAAAAAAAAAAEE5x1s6ddO1xM2llC8ZEKsPNJfKJGpsiSom1FuRmbaTSW/g338gkzKmQaDinHFyZHuaUbFMt6mvz31J24jJCTMkpI+lSlbJSXWZkQ0l2BjfOGtVUfJicj0x29LQnJTMRca3lSFsuK7PFdLhbVxN8JmhJHtzNltzbDrHG5XUS3TZF3VTRuf/bKu/o7M+oHdVNHH45V39HZn1BB9PsDlGm2EMsZExIlDaSQnslLc32Iv/TGO37QeUf8AGRh/1W7/AEw19KbTL3VTRx+OVd/R2Z9QO6qaOPxyrv6OzPqCGvaDyj/jIw/6rd/pg9oPKP8AjIw/6rd/pg9RtMvdVNHH45V39HZn1A7qpo4/HKu/o7M+oIa9oPKP+MjD/qt3+mD2g8o/4yMP+q3f6YPUbTL3VTRx+OVd/R2Z9QO6qaOPxyrv6OzPqCGvaDyj/jIw/wCq3f6YPaDyj/jIw/6rd/pg9RtMvdVNHH45V39HZn1B15/KwaN4MV2QV2199xCDUhlFAkpW6ZF71JrSSdz8pkXlIRF7QeUf8ZGH/Vbv9MIpzto51r54gwUZAvnGksqSpTsZuA0/GM1GW3OZRyI+nrC8V/DaxlK5RnL2SY51fBeiy7LloSzPsNUqdZaprbpeFJG0tKvmWYh3URVc7amZFIk5Q0GXGtFFM+wsQcktx2HUme5k42TWx7/dFsrboMh9MXZg1f4KoFOsC9NJ0y8I1HZTFjzqJVUIS6hPQo0JQ4W/zJ+ISIetLNaSIl6BL5Lfw1dPP/8AHC4Y4/8ASW1DduQLrshhB03krKAbUfn43K1EnSS8pLeZcWZj3uKs7aRMvXj7k+ScD0ixLt4zZTTLjtuIbanettLnBzK5ubiSnfbmHpX9ZWfXmjapXJ/3j2wrmQcitEhsj8Jn2v8A8BCidKuoPUTniHnnOlBo9iRYbjDkekQJKX5RpZVxNJM0Goi6jNSlb823CW/N1PvyJVs7s5OrTRd0ZxLuJqPBWsjNL9JUuCtB9Rl2JRJ9JGXkEWPaHM9Yba7Lpm1P3jbzLJmtuj1pzt2Co/BsRcKS/wApRmL0WQ5NKlNnUT4TJPSo+r5xGuWNZ+lvEDMlF6ZboKpsbdK6dTninS+Mv7ptM8RpPzti8ozuWrqxdK1QdYutjBThxNQmnhm9aJESRO3BZ6z4+Aul1TOyiPwmRpaL4ugTJjLlKtJeR2m2pWREWjUj5nYFysnBW0e+2xuK3ZP5l+gQpWteGVM0ulE0paWK1WYT26EXFcxFDhEZcxmREokGRc//AFpH5OoRvcWhnPGoKb7NaisnWxBUSuNmBbNCYW40R7GaO2VIQovS58YvhMul22fUG9rOumA1Vbauqk1WE8W7ciFNbebWXkUkzIxmUqSsuJCiUR9ZHuNRGadBeHtN+B7oyqmFc1dqFEZYNo5lUUw2a3ZDbRGaWCQexdk36eoe55OvWRky4b/iYJvW3U0u3oduuz6SlxLhvJInkcJm44ZrcQonF7GZn0FtzFsJeKw22fgPjFkJkspdQe5KLcfYZKAAAAAAAAAAAAjfUflD3F8E3xlBtKVSLfo0iTESroVKNPCwk/IbqkEfkMBVDUrcc7WDqBY0qWvLebxvj6QzV8kz2VrQUySk92KYlSeYz3I9y36SUfSyW/ndTNg1zTrkKjazMZUE10SElijX1RobXM/Si4W25CU8xEpokoT1e9b32SS9/Z6SaLZmCdMdFvjItzRqW9dTJXhdFaqsnhU9JmETiCWpZ7momzQkkluZq4j2NSjE845zhpo1PW1WbOsK+6JdsR2I5EqdNNDjTqo608C+Jl5KFm2ZK24iTw8/SNpfCf1O3tse1u1L+tWl3Vb7zEun1WI1Mivt7GTjTiSUlXoMen9hKf8AeE+ghSHQBUa5jGv5Q0xVx9x1rGNzKZpTjit1exkviejEfxkSl/5m3UL2Nq40ErwkOMtz6R0fYSn/AHhPoIPYSn/eE+ghkAHO6rH+wlP+8J9BB7CU/wC8J9BDIAG6Mf7CU/7wn0EHsJT/ALwn0EMgAbox/sJT/vCfQQHQ6efSwn0EMgAbowkm1KVI6Y6C+IhCGoXRbifUDDiO3g3WI9QpiFJgTqZUVx3Y5me+5J52zPfrUkzFih+GRHzGLM8ommvKFohz/YDymMc6wb3gQ0q2aYq9PaqyW09RETqyT6EkXkGV/wCThrFkI7FM1uzUNq6e1rDgsr+ZZL3L5hfRcdlfvmyHDtCJ95Id+zfZpr8Vyf8AWLucM8v6mMuXm0o91RCqhxYyi+5NtXZCJPkTsJWxnoawJjd5Mu1sRUc5nMfbtVSqoPkZf3kqfNRIPypIha9MOOnnS2Q+iW0J96kiE9k/IaeHp2P0IQhD6tm0ERJQkuFKSLqIi6CHo4VtU2GREhhO5eQZcBLnlTSq/KasNNaIsjcCCL7CmF/9jGFacdU5hGtew0MtpbJWF4Tp8Jbbn2VPOLM8pz3kWRvNpn8RjCuWOu/ZsL5Eof0qRpw/qZNj1vblTGSP7khlBjLf+DWvNIZMY5drAAARQAAAAAABDesTGdYzBpmyDj63kG5ValSHFwWi6Xn2VJebaLyrU2SfzhMg/FESiNJ9BgNRSL0omfpekKy7kh9uUBblQj3DRpDRpaeqFMistkl1Ci2UklEs+HoNLpkfSYkzUJZVt4c1R6dr5xjblLtOXX6zNpM9NHiNxGpUQksp4HG2yJKtkuLLcy8HgLb2/KI0iTie88P6pGqO5Ot3H1Zmxq9Gi8KXktT0NtodQRmRGZKQotjMt1LR0FuZRNOzpa+tbU7h2i4np9SapOLjnXNWp9TZKOakqJlKUNt8RqP7NLaDPwublzJ3P0Sy/XOknaM6lUso5VzRqPOA5Fo993DCp1FNaTScmNTWVME+RHz7K3L84lF1C+8LftZG/TsPE2dbcdTDUk20pJJ7pSRbEXzD3aUkhJJLqGfJZ1FjkAAM1AAAAAAAAAAAAAAAAAAAAAAAFWuU57yLI3m0z+IxhXLHXfs2F8iUP6VIsbynPeRZG82mfxGMK5Y679mwvkSh/SpG3D+ucmx+3/g1rzSGTGMt/wCDWvNIZMZZdrAAARQAAAAAAAAAFQ+VULfRxcP5WpP742IRsGGhHKNXcyyRNoTjmEeyS26XYgm7lVO84uL8rUn98bENWD9sfvD5N4P0sQb8Lmth1vtIapzRJLb7Ehkxj6J8Ht+aX7BkBje3QAAIAAAAAAAAAAAAAAAAAAAAAAACrXKc95FkbzaZ/EYwrljrv2bC+RKH9KkWN5TnvIsjebTP4jGFcsdd+zYXyJQ/pUjbh/XOTY/b/wAGteaQyYxlv/BrXmkMmMsu1gAAIoAAAAAAAAACofKqd5xcX5WpP742IasH7Y/eHybwfpYgmXlVO84uL8rUn98bENWD9sfvD5N4P0sQb8TmtiNE+D2/NL9gyAx9E+D2/NL9gyAxvbqAAAgAAAAAAAAAAAAAAAAAAAAAAAKtcpz3kWRvNpn8RjCuWOu/ZsL5Eof0qRY3lOe8iyN5tM/iMYVyx137NhfIlD+lSNuH9c5Nj9v/AAa15pDJjGW/8GteaQyYyy7WAAAigAAAAAAAAAKh8qqfDo1uRZkfCiq0lSj26C7cbFdsA5GsvKev27rtsGutVekOY9ix0ymm1oSbiHohLTssiPcj5ugbDc3XNZll4muq78hRosi36NTHpsxmQyh1DqUJ3SgkL+xUpSiSSSPpUZCivJk35EydjypxK8xFYuukVRZTXO1W2X3ocj+3jLVwpIzR9ktKd+bZBbc2w24rHNbEqJ8Ht+aX7BkB14DKWIyG0nzERDsDK9ugAAQAAAAAAAAAAAAAAAAAAAAAAAFWuU57yLI3m0z+IxhXLHXfs2F8iUP6VIsTyn8hljRHkMnXEoN32NQgjPbiV7IRz2Ly7EfoFHNIWfKdmjV7btZVTTpJ0rHHtcbaecIzfcYcQo1J8O6TM9unZJjbis+xzW3m3/g1rzSGTGMt496YyZfckMmMsu1gAAIoAAAAAAAAI31H5Q9xfBN8ZQbSlUi36NIkxEq6FSjTwsJPyG6pBH5DAVQ1K3HO1g6gWNKlry3m8b4+kM1fJM9la0FMkpPdimJUnmM9yPct+klH0slvgNSlj3DpuyLRdZ+LaGo6LBSxRr6o0JrmfpX2LbchKeYiU0SW09XvW99kkvf2Gkmi2ZgnTHRb4yLc0alvXUyV4XRWqrJ4VPSZhE4glqWe5qJs0JJJbmauI9jUoxPOOc4aaNT1tVmzrCvuiXbEdiORKnTTQ406qOtPAviZeShZtmStuIk8PP0jaf4idpFx5e1Ev21KXdNvz25lPqsRqZFfQe5ONLSSkn85GPUCiOgCo1zGNfyhpirj7jrWMbmUzSnHFbq9jJfE9GI/jIlL/wAzbqF7G1caCV4SGeU19I5AADlQAAAAAAAAAAAAAAAAAAAAAHFakoSa1GREktzM+oBRjlRzfu1nCOE1vON02+r9is1EkHsa2G+FBpPyf25q+NJCIdReHLRwjmfAuUMdUCNRCm3hGtWS1FTwIcjv7ITuXhJJuF846GY9RydS+RMEXhFpDUKn0PMtSoVPdbUZlMiMHDU3I5+tRLPfbm3IxLeuwi7V08mX97LlH/3jG+G8cdubq1duzZJv0lpKj50p2HoBWvRzqMj5zt+6HJdH9h6lbNyTKG/DUrdRIbMjbWZH0GaT2MupSVELJkZGW5dYzzmslj9AAHCgAAAAAACG9YmM6xmDTNkHH1vINyq1KkOLgtF0vPsqS820XlWpsk/nCZB+KIlEaT6DAaikXpRM/S9IVl3JD7coC3KhHuGjSGjS09UKZFZbJLqFFspJKJZ8PQaXTI+kxJmoSyrbw5qj07XzjG3KXacuv1mbSZ6aPEbiNSohJZTwONtkSVbJcWW5l4PAW3t+URpEnE954f1SNUdydbuPqzNjV6NF4UvJanobbQ6gjMiMyUhRbGZbqWjoLcyiadnS19a2p3DtFxPT6k1ScXHOuatT6myUc1JUTKUobb4jUf2aW0Gfhc3LmTufoll+udJO0Z1KpZRyrmjUecByLR77uGFTqKa0mk5MamsqYJ8iPn2VuX5xKLqF94W/ayN+nYeJs6246mGpJtpSST3Ski2IvmHu0pJCSSXUM+SzqLHIAAZqAAAAAAAAAAAAAAAAAAAACPdQ9wybTwJkW54bqmpFKtaqS2lpPnStEZxSTL4jIhIQiXVwwuVpby3HbIzU5ZdYSRF0/wDRHAGsSJarGPMZaL1Pp4EVC6UVWS7ttu5OdadQaj8iFoL4kiy+uh1t17TjS0KI5MjLNKcQguk0pWRKP4i4k+keNvLDlbz1yfWNnsfpNy6bQoFDrlI7GrhWp+NGS262k+pWxr26uJKejpEVacJGorUxny0r8ztAkQqHi5DrkNh6GqMl2aaeFJpQr3yzWSFqX0bNkQ9Orfkcf1N2mlb1j65c9WVH4m4dUKl3C0guZPEtvdxRfGqQZH5vkGxCE52WMhfhIhr2xivt3lEMtrQg9qbadHiun/jWlhwv1H+obA6QZnBb3+5IccnW3Ud0AAYqAAAAAAAAAAqHyqhb6OLh/K1J/fGxCNgw0I5Rq7mWSJtCccwj2SW3S7EE3cqp3nFxflak/vjYhqwftj94fJvB+liDfhc1sOt9pDVOaJJbfYkMmMfRPg9vzS/YMgMb26AABAAAAAAAAAAAAAAAAAAAAAHm8lWwV7Y7uezlGRFXKRMp259XZmVI/wD0PSD8MtyMj6wFGeS/uZ6q6b6FQagpRzLbnVCiSULP7JtSH1LSgy6tkOoLbwEQt/IselyZpTzZSSt9+YhRXThxYO1uZswVLkqRCrs1u8qG0ZbINt8+J0k+UuzIT5ewn4BcXUFlSHh/At55Okukk6JRpD0YjPbjkqRwMI/OdUgvnGuVs1YkVF0mk1e2ozUdliKtD0KoXbGt6nvIPdKm4KVoUaT6yMjZMX9pqOCG2nb+6QpZydeOlWbp2tFUlpSajc6nrlqCl9K1yVbtn/7KWf1i7TKeBtKfAQmfySEcwABmoAAAAAAAAACofKqd5xcX5WpP742IasH7Y/eHybwfpYgmXlVO84uL8rUn98bENWD9sfvD5N4P0sQb8TmtiNE+D2/NL9gyAx9E+D2/NL9gyAxvbqAAOpUqvSqNEXPq9SiwYzfOt6Q8ltCfjUoyIhB2wEYVLVDpuo7htVTPVgRVpPY0uXFEIyP/AFjrw9WOmCoukzB1CY7fWo9iSi5Ihmf+2AlcBjaHclvXNBRU7crkCqQ3PeSIchDzaviUkzIxkgAAAAAAAAAAAAAAAAAa+uUMprmHM/YY1WUyNwR2Kgdq3C8R7JOK8SjbNXxJXJPfwkkvAOHKGXZPyRScT6XLaqG0zJFwsvVRLat1IpsdSTNay+44lcfl7AfgFjddGKk5h0tX7arSN5semqqsEyTurtiKZPpSXgNXYzRv4FmNfuh+65WojUJGyfcCHHjxtYlOt+Itw9zVNcQaHHj8p/8AOv8AURjbD/U0l+Nm+NKFDp0dmNT4qI8OCyiLGabSRJbaQkkpSRdRERERCRhg7TgFDpjfNzmW5jODjO7pAAAcKAAAAAAAAAAqHyqp8OjW5FmR8KKrSVKPboLtxsV1wFkeyso6/Luu6wq81V6Q5j2LHTKbQtCTcQ9EJadlkR7kfN0DZvXKJSripb9HrdNi1CFITwux5TKXWnC332UlRGR85F0kKXZZ5N3H943JU7kpN7X1b3sq4pbsKiVREeIgjMz4UtdjMiSW/MnoLqG3FZHNWYuLOeHMXUQ5uQcnW3QkMI4lImVFpDp83QlvfjUfkIjMVnvHlT8dT56rc064vvHK9YM9iVT4DkeInqIzWpBubb/+GRbdYrPcPJQ3dZ9dRc2Nsh0+qrjr424N1UVElpfPvwuKLiSsj/8ALIe2tzPmpDTfBKh5d0pxnLYiK4SqGP2ENsNp61mwjdJEfhV2MPXv7Tf49m9UuUpzop4rhvK18I0CVuRRaU0mZUybMubZZGoyV4TJxs9+ougfSj8nFYFyONVHM1+ZAyfVt93H6tWHWmDP/ChKjWkv8wxK+FNbmkPKRx4lPyLDodXdLZVNuIu0H0L324OJz+zWryIWoWlpp0mVGRJpr7D7Ky3S40slJUXkMuYxLcceov1RnIODNDOlu0yuLImMrLpsIz4I7dSgnU5Ulf3LaXuyLWf7OkzIiFfKhkzTvkyG57m3Jw1656M5xIRU4FsNQCWXQZpdjIUZf6yP4hYnlMtGd+6jYdBvrGs+O9V7YjrYOkSHOxolNqVxGpCj+xJZHtzK2Iy359xH2PNWGWcd0Kn2hlTR7kxyXSo6InZbappyoiyQXCRp4S4S3IuciUY6xu5upUCWxbEnH16RL0xnpI1C2a5GeQ8uFSa+63HkElRGSHScYUtSD2508Qt03yjeWaM0T9waHcpNw0Fu7IZbW6aC6z2Jnb0mQ6pa7Iv/AHNs9H5fa2r/AIj5yNc1QkMqZoGibOUuYrmbbfoa2WzPq4lklXCXl2C+N+J9e7tLlWtIddgm5c9z1qzqg2rgep1Yo0g321F0lvHS4n9e/kGf7pzoi8dKPUdR/kDXrXdL2rHLOY5OoOTiy1LUfdmplR6LWpRLS4REZETqGyUpR+E1cJ9HNzCdYePdbDjRGnEunI/PpjpH/uiTi39XayvdOdEXjpR6jqP8gO6c6IvHSj1HUf5Arl7nWtnxSabfVrv1Q9zrWz4pNNvq136oen+nksb3TnRF46Ueo6j/ACA7pzoi8dKPUdR/kCuXuda2fFJpt9Wu/VD3OtbPik02+rXfqh6f6eSxvdOdEXjpR6jqP8gO6c6IvHSj1HUf5Arl7nWtnxSabfVrv1Q9zrWz4pNNvq136oen+nksb3TnRF46Ueo6j/IDunOiLx0o9R1H+QK5e51rZ8Umm31a79UPc61s+KTTb6td+qHp/p5LG90f0R3KSreTmaM4dSScUkO0eehCuMuHY1KYIiI99ufmFbeTDx3Bt62r6ciml1ab5mUvs6ecnWIqG0t8/WW61n+cIsynor1VZgu2iXFdFDxNb6KWtJGm3+zR0rRxEZmpPYz4j5uYbD8B4vp1k0Vmn0qlswiU4cqX2IjIn5ayLsrp7mfOpRb+Ad44eEtLdp0hNk1GQguoiH3HFCeFBJ8BDkPM6AAAAAAAAAAAAAAcVJSr3ySMcgAfFcSO4WymkmXxDGTrXpk1JkuOjn8gzICy2dCu2VNFWCcquuzLvxtRp8t0uFUtLPYJJ+D+2aNK+b4xAiOTqq+OH5EnA2oTJOP+zL4+1o0/tmGRl0bs7o49v8SjMbBBwU02v3yCMdzkv6mlASxfyjVuK7WpGruj1mMnmIqza7BKMvKZNrV/tDHzsUcoXX1k3UtS9nUltXv3KbbTanNvJxtF+oyGwhdPiOe+ZSfzD5ew8HffsKfQLM5Pw0oRaOh2537qpt7ZU1DZDvSsU10n2UtSDp0RKiPfh7GlSzJPhJKk79B83MLlUazEux0nK4yX8Y9m3Aite8aSXzD7pSlJbJIiC8t1qGnno9lUtpRKWySjLw847xW7TE9EZBfMMoA48qumM9r9N/B0egPa/TfwdHoGTATyqaYz2v038HR6A9r9N/B0egZMA8qaYz2v038HR6A9r9N/B0egZMA8qaYz2v038HR6A9r9N/B0egZMA8qaYs7eph9MZHoHcjQY8RPCy2SS8hDsAG7V0AACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="}}]);