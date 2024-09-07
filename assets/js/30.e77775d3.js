(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1123:function(a,s,t){a.exports=t.p+"assets/img/asm_1.5898fa7b.png"},1124:function(a,s,t){a.exports=t.p+"assets/img/asm_2.a2c9c6b1.gif"},1125:function(a,s,t){a.exports=t.p+"assets/img/asm_3.b2dd674c.png"},1126:function(a,s,t){a.exports=t.p+"assets/img/asm_4.23a46f9c.png"},2005:function(a,s,t){"use strict";t.r(s);var e=t(12),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"asm是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asm是什么"}},[a._v("#")]),a._v(" ASM是什么？")]),a._v(" "),e("p",[a._v("ASM是一个操作Java字节码的类库。")]),a._v(" "),e("p",[a._v("为了能够更好的理解ASM是什么，我们需要来搞清楚两个问题：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("第一个问题，ASM的操作对象是什么呢？\n第二个问题，ASM是如何处理字节码（ByteCode）数据的？\n")])])]),e("p",[a._v("首先，我们来看第一个问题：ASM的操作对象是什么呢？ 回答：ASM所操作的对象是字节码（ByteCode）数据。")]),a._v(" "),e("p",[a._v("我们都知道，一个.java文件经过Java编译器（javac）编译之后会生成一个.class文件。\n在.class文件中，存储的是字节码（ByteCode）数据，如下图所示。ASM所的操作对象是是字节码（ByteCode），而在许多情况下，字节码（ByteCode）的具体表现形式是.class文件。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(1123),alt:""}})]),a._v(" "),e("p",[a._v("接着，我们来看第二个问题：ASM是如何处理字节码（ByteCode）数据的？ 回答：ASM处理字节码（ByteCode）的方式是“拆分－修改－合并”。")]),a._v(" "),e("p",[a._v("ASM处理字节码（ByteCode）数据的思路是这样的：第一步，将.class文件拆分成多个部分；第二步，对某一个部分的信息进行修改；第三步，将多个部分重新组织成一个新的.class文件。")]),a._v(" "),e("p",[a._v("在 Wikipedia上，对ASM进行了如下描述：")]),a._v(" "),e("p",[a._v("ASM provides a simple API for decomposing(将一个整体拆分成多个部分), modifying(修改某一部分的信息), and recomposing(将多个部分重新组织成一个整体) binary Java classes (i.e. ByteCode).")]),a._v(" "),e("h2",{attrs:{id:"asm的过去和现在"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asm的过去和现在"}},[a._v("#")]),a._v(" ASM的过去和现在")]),a._v(" "),e("h3",{attrs:{id:"asm的过去"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asm的过去"}},[a._v("#")]),a._v(" ASM的过去")]),a._v(" "),e("p",[a._v("对于ASM的过去，主要说明三个问题：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("第一个问题，ASM从什么时候开始出现的？\n第二个问题，ASM的作者是谁？\n第三个问题，ASM的名字有什么含义？\n")])])]),e("p",[a._v("在2002年的时候，Eric Bruneton、Romain Lenglet和Thierry Coupaye发表了一篇文章，名为《 ASM: a code manipulation tool to implement adaptable systems》。在这篇文章当中，他们提出了ASM的设计思路。")]),a._v(" "),e("p",[a._v("一般来说，大写字母的组合，可能是多个单词的缩写形式，例如，JVM表示“Java Virtual Machine”。但是，ASM并不是多个单词的首字母缩写形式。在上面的文章中，记录了下面的话：")]),a._v(" "),e("p",[a._v("The ASM name does not mean anything: it is just a reference to the "),e("strong",[a._v("asm")]),a._v(" keyword in C,\nwhich allows some functions to be implemented in assembly language.")]),a._v(" "),e("h3",{attrs:{id:"asm的现在"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asm的现在"}},[a._v("#")]),a._v(" ASM的现在")]),a._v(" "),e("p",[a._v("对于ASM的现在，主要说明两个问题：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("第一个问题，ASM属于哪一个机构？\n第二个问题，ASM的Logo是什么样的？\n")])])]),e("p",[a._v("The ASM library is a project of the  OW2 Consortium. OW2 is an independent, global, open-source software community.")]),a._v(" "),e("p",[a._v("作为一个小故事，我们来说一下OW2组织是如何形成的。OW2组织的形成，与中国的一些大学和公司也有很大的关系（原文内容来自 这里）：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("2002年，ObjectWeb项目启动，它是由INRIA、Bull和France Telecom共同开发的项目，并形成了一个成熟的、开源软件社区。\n2004年，Orientware项目启动，由中国的北京大学、北航、国防科技大学、中创软件和中国科学院软件研究所共同研发。\n2005年，ObjectWeb和Orientware签署了一份协议，决定共享代码库，一起开发中间件软件。\n2006年，ObjectWeb和Orientware两个社区组织融合，形成了OW2组织。OW2组织名字，可能是由ObjectWeb和Orientware名称当中的两组O和W组合而来。\nASM的Logo设计很有特点，它在旋转的过程中，会分别呈现出“A”、“S”和“M”这三个字母，如下图所示：\n")])])]),e("p",[e("img",{attrs:{src:t(1124),alt:""}})]),a._v(" "),e("h3",{attrs:{id:"asm的版本发展"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asm的版本发展"}},[a._v("#")]),a._v(" ASM的版本发展")]),a._v(" "),e("p",[a._v("对于ASM版本的发展，我们要说明两点：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("第一点，Java语言在不断发展，那么，ASM版本也要不断发展来跟得上Java的发展。\n第二点，在选择ASM版本的时候，要注意它支持的Java版本，来确保兼容性。\n比如说，我们常用的Java版本是Java 8和Java 11。针对Java 8版本，我们需要使用ASM 5.0版本，就能正常工作。对于Java 11版本，我们需要使用ASM 7.0版本，就能正常工作。当然，我们可以尽量使用较高的ASM版本。\n")])])]),e("h2",{attrs:{id:"asm能够做什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asm能够做什么"}},[a._v("#")]),a._v(" ASM能够做什么")]),a._v(" "),e("h3",{attrs:{id:"通俗的理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通俗的理解"}},[a._v("#")]),a._v(" 通俗的理解")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("父类：修改成一个新的父类\n接口：添加一个新的接口、删除已有的接口\n字段：添加一个新的字段、删除已有的字段\n方法：添加一个新的方法、删除已有的方法、修改已有的方法\n……（省略）\n")])])]),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Cloneable")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" intValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" strValue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sub")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("clone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CloneNotSupportedException")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("clone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br")])]),e("h3",{attrs:{id:"专业的描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#专业的描述"}},[a._v("#")]),a._v(" 专业的描述")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("ASM is an all-purpose(多用途的；通用的) Java ByteCode manipulation and analysis framework.\nIt can be used to modify existing classes or to dynamically generate classes, directly in binary form.\n\nThe goal of the ASM library is to generate, transform and analyze compiled Java classes,\nrepresented as byte arrays (as they are stored on disk and loaded in the Java Virtual Machine).\n")])])]),e("p",[e("img",{attrs:{src:t(1125),alt:""}})]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("Program analysis, which can range from a simple syntactic parsing to a full semantic analysis, can be used to find potential bugs in applications, to detect unused code, to reverse engineer code, etc.\nProgram generation is used in compilers. This includes traditional compilers, but also stub or skeleton compilers used for distributed programming, Just in Time compilers, etc.\nProgram transformation can be used to optimize or obfuscate programs, to insert debugging or performance monitoring code into applications, for aspect oriented programming, etc.\n")])])]),e("h2",{attrs:{id:"为什么要学习asm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习asm"}},[a._v("#")]),a._v(" 为什么要学习ASM？")]),a._v(" "),e("p",[a._v("平常，我们使用Java语言进行开发，能够解决很多的问题。我们可以把Java语言解决问题的范围称之为“Java语言的世界”。那么，ASM起什么作用呢？**ASM就是一处位于“Java语言的世界”边界上的一扇大门，通过这扇大门，我们可以前往“字节码的世界”。**在“字节码的世界”里，我们会看到不一样的“风景”，能够解决不一样的“问题”。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(1126),alt:""}})]),a._v(" "),e("p",[a._v("ASM往往在一些框架的底层起着重要的作用。接下来，我们介绍两个关于ASM的应用场景：Spring和JDK。这两个应用场景例子的目的，就是希望大家了解到ASM的重要性。")]),a._v(" "),e("h3",{attrs:{id:"spring当中的asm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spring当中的asm"}},[a._v("#")]),a._v(" Spring当中的ASM")]),a._v(" "),e("p",[a._v("第一个应用场景，是Spring框架当中的AOP。 在很多Java项目中，都会使用到Spring框架，而Spring框架当中的AOP（Aspect Oriented Programming）是依赖于ASM的。具体来说，Spring的AOP，可以通过JDK的动态代理来实现，也可以通过CGLIB实现。其中，"),e("code",[a._v("CGLib (Code Generation Library)")]),a._v("是在ASM的基础上构建起来的，所以，Spring AOP是间接的使用了ASM。（参考自 Spring Framework Reference Documentation的 8.6 Proxying mechanisms）。")]),a._v(" "),e("h3",{attrs:{id:"jdk当中的asm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jdk当中的asm"}},[a._v("#")]),a._v(" JDK当中的ASM")]),a._v(" "),e("p",[a._v("第二个应用场景，是JDK当中的Lambda表达式。 在Java 8中引入了一个非常重要的特性，就是支持Lambda表达式。Lambda表达式，允许把方法作为参数进行传递，它能够使代码变的更加简洁紧凑。但是，我们可能没有注意到，其实，在现阶段（Java 8版本），Lambda表达式的调用是通过ASM来实现的。")]),a._v(" "),e("p",[a._v("在rt.jar文件的jdk.internal.org.objectweb.asm包当中，就包含了JDK内置的ASM代码。在JDK 8版本当中，它所使用的ASM 5.0版本。")]),a._v(" "),e("p",[a._v("如果我们跟踪Lambda表达式的编码实现，就会找到"),e("code",[a._v("InnerClassLambdaMetafactory.spinInnerClass()")]),a._v("方法。在这个方法当中，我们就会看到：JDK会使用"),e("code",[a._v("jdk.internal.org.objectweb.asm.ClassWriter")]),a._v("来生成一个类，将lambda表达式的代码包装起来。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("LambdaMetafactory.metafactory() 第一步，找到这个方法\nInnerClassLambdaMetafactory.buildCallSite() 第二步，找到这个方法\nInnerClassLambdaMetafactory.spinInnerClass() 第三步，找到这个方法\n")])])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("第一点，ASM所处理对象是字节码数据，也可以直观的理解成.class文件，不是.java文件。\n第二点，ASM能够对字节码数据进行哪些操作呢？回答：analyze、generate、transform。\n第三点，ASM可以形象的理解为“Java语言世界”的边缘上一扇大门，通过这扇大门，可以帮助我们进入到“字节码的世界”。\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);