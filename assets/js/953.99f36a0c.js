(window.webpackJsonp=window.webpackJsonp||[]).push([[953],{2118:function(t,a,e){"use strict";e.r(a);var s=e(12),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Java 11是自Java 8以来的又一个LTS版本，是目前全球使用最多的LTS版本之一。下边我们看一下JAVA11的新特性")]),t._v(" "),e("h2",{attrs:{id:"字符串api增强"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串api增强"}},[t._v("#")]),t._v(" 字符串API增强")]),t._v(" "),e("p",[t._v("在Java 11中，针对String的操作进一步得到加强。避免我们在很常见的场景中引入额外的、复杂的API。")]),t._v(" "),e("h3",{attrs:{id:"isblank"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isblank"}},[t._v("#")]),t._v(" isBlank()")]),t._v(" "),e("p",[t._v('用来判断字符串是不是空字符"“或者trim()之后(” ")为空字符:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(' String blankStr = "    ";\n // true\n boolean trueVal = blankStr.isBlank();\n')])])]),e("h3",{attrs:{id:"lines"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lines"}},[t._v("#")]),t._v(" lines()")]),t._v(" "),e("p",[t._v("将一个字符串按照行终止符（换行符\\n或者回车符\\r）进行分割，并将分割为Stream流:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('     String newStr = "Hello Java 11 \\n felord.cn \\r 2021-09-28";\n')])])]),e("p",[t._v("​\nStream"),e("String",[t._v(" lines = newStr.lines();\nlines.forEach(System.out::println);")])],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("// Hello Java 11 \n // 张三李四周吴郑王 \n // 2022-18-44\n")])])]),e("h3",{attrs:{id:"strip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strip"}},[t._v("#")]),t._v(" strip()")]),t._v(" "),e("p",[t._v("去除字符串前后的“全角和半角”空白字符:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(' String str = "HELLO\\u3000";\n // str = 6\n System.out.println("str = " + str.length());\n // trim = 6\n System.out.println("trim = " + str.trim().length());\n // strip = 5\n System.out.println("strip = " + str.strip().length());\n')])])]),e("p",[t._v("从上面也看出来了差别，trim()只能去除半角空白符。\nstrip()方法还有两个变种，stripLeading()用来去除前面的全角半角空白符；stripTrailing()用来去除尾部的全角半角空白符。")]),t._v(" "),e("h3",{attrs:{id:"repeat-n"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeat-n"}},[t._v("#")]),t._v(" repeat(n)")]),t._v(" "),e("p",[t._v("按照给定的次数重复串联字符串的内容：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v(' String str = "HELLO";\n // 空字符\n String empty = str.repeat(0);\n // HELLO\n String repeatOne = str.repeat(1);\n // HELLOHELLO\n String repeatTwo = str.repeat(2);\n')])])]),e("h3",{attrs:{id:"集合转对应类型的数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合转对应类型的数组"}},[t._v("#")]),t._v(" 集合转对应类型的数组")]),t._v(" "),e("p",[t._v("之前想集合转对应的数组很麻烦，要么用迭代；要么用Stream流，现在你可以这样：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('     List<String> sampleList = Arrays.asList("张三", "java 11");\n     // array = {"张三", "java 11"};\n     String[] array = sampleList.toArray(String[]::new);\n')])])]),e("h3",{attrs:{id:"断言取反"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#断言取反"}},[t._v("#")]),t._v(" 断言取反")]),t._v(" "),e("p",[t._v("java.util.function.Predicate是我们很常用的断言谓词函数。在以前取反我们得借助于!符号，到了Java 11我们可以借助于其静态方法not来实现，这样语义就更加清晰了：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('      List<String> sampleList = Arrays.asList("张三", "java 11","jack");\n        // [jack]\n        List<String> result = sampleList.stream()\n                // 过滤以j开头的字符串\n                .filter(s -> s.startsWith("j"))\n                // 同时不包含11的字符串\n                .filter(Predicate.not(s -> s.contains("11")))\n                .collect(Collectors.toList());\n')])])]),e("h3",{attrs:{id:"var可以用于修饰lambda局部变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#var可以用于修饰lambda局部变量"}},[t._v("#")]),t._v(" var可以用于修饰Lambda局部变量")]),t._v(" "),e("p",[t._v("在Java 10中引入的var来进行类型推断。在Java 10中它不能用于修饰Lambda表达式的入参，其实对于一个Lambda表达式来说它入参的类型其实是可以根据上下文推断出来的。拿上面的例子来说，s -> s.startsWith(“j”)中的s肯定是字符串类型，因此在Java 11中var可以用于修饰Lambda局部变量:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('   List<String> sampleList = Arrays.asList("张三", "java 11","jack");\n        List<String> result = sampleList.stream()\n                // 过滤以j开头的字符串\n                .filter((@NotNull var s) -> s.startsWith("j"))\n                // 同时不包含11的字符串\n                .filter(Predicate.not((@NotNull var s) -> s.contains("11")))\n                .collect(Collectors.toList());\n')])])]),e("p",[t._v("如果我们不声明var就没有办法为输入参数添加@NotNull注解。")]),t._v(" "),e("h3",{attrs:{id:"文件中读写字符串内容更方便"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件中读写字符串内容更方便"}},[t._v("#")]),t._v(" 文件中读写字符串内容更方便")]),t._v(" "),e("p",[t._v("Java 11中可以更轻松地从文件中读取和写入字符串内容了，我们可以通过Files工具类提供的新的静态方法readString和writeString分别进行读写文件的字符串内容，放在之前老麻烦了，特别是对IO流不熟悉的同学来说。现在简单几行就搞定了：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('        String dir= "C://yourDir/hello.txt";\n// 写入文件\n        Path path = Files.writeString(Path.of(dir), "hello java 11");\n// 读取文件\n            String fileContent = Files.readString(path);\n            // hello java 11\n        System.err.println(fileContent);\n')])])]),e("h3",{attrs:{id:"嵌套类的访问控制规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嵌套类的访问控制规则"}},[t._v("#")]),t._v(" 嵌套类的访问控制规则")]),t._v(" "),e("p",[t._v("Java 11之前，内部嵌套类访问外部类的私有属性和方法是可行的：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('public class Outer {\n    private int outerInt;\n\n     class Inner {\n       public void printOuterField() {\n         System.out.println("Outer field = " + outerInt);\n       }\n    }\n}\n')])])]),e("p",[t._v("但是如果你通过反射API实现内部类访问外部类的私有属性和方法就会抛出IllegalStateException异常。Java 11 修复了反射不能访问的问题.")]),t._v(" "),e("p",[t._v("JVM 访问规则不允许嵌套类之间进行私有访问。我们能通过常规方式可以访问是因为 JVM 在编译时为我们隐式地创建了桥接方法。Java 11 中引入了两个新的属性：一个叫做 NestMembers 的属性，用于标识其它已知的静态 nest 成员；另外一个是每个 nest 成员都包含的 NestHost 属性，用于标识出它的 nest 宿主类。在编译期就映射了双方的寄宿关系，不再需要桥接了。")]),t._v(" "),e("h3",{attrs:{id:"httpclient支持http2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpclient支持http2"}},[t._v("#")]),t._v(" HttpClient支持HTTP2")]),t._v(" "),e("p",[t._v("Java 9 引入了一个新的酝酿中的 HttpClient API 来处理 HTTP 请求。从 Java 11开始，这个API 现在是最终版本，可以在标准库包 java.net 中使用。让我们来实验一下这个 API 能做些什么。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('        var request = HttpRequest.newBuilder()\n                .uri(URI.create("https://baidu.com"))\n                .GET()\n                .build();\n        var client = HttpClient.newHttpClient();\n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        System.out.println(response.body());\n// <html>\n// <head><title>302 Found</title></head>\n// <body bgcolor="white">\n// <center><h1>302 Found</h1></center>\n// <hr><center>bfe/1.0.8.18</center>\n// </body>\n// </html>\n')])])]),e("p",[t._v("同样的请求可以异步执行。调用 sendAsync 不会阻塞当前线程，而是返回一个CompletableFuture 来构建异步操作管道。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('var request = HttpRequest.newBuilder()\n    .uri(URI.create("https://baidu.com"))\n    .build();\nvar client = HttpClient.newHttpClient();\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString())\n    .thenApply(HttpResponse::body)\n    .thenAccept(System.out::println);\n')])])]),e("h3",{attrs:{id:"数据流-streams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据流-streams"}},[t._v("#")]),t._v(" 数据流 Streams")]),t._v(" "),e("p",[t._v("流是在 Java 8 中引入的，现在增加了三个新方法。Stream.ofNullable 从单个元素构造流：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("Stream.ofNullable(null)\n    .count()   // 0\n")])])]),e("p",[t._v("dropWhile 和 takeWhile 方法都接受一个谓词来决定从流中放弃或选用哪些元素")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("Stream.of(1, 2, 3, 2, 1)\n    .dropWhile(n -> n < 3)\n    .collect(Collectors.toList());  // [3, 2, 1]\n\nStream.of(1, 2, 3, 2, 1)\n    .takeWhile(n -> n < 3)\n    .collect(Collectors.toList());  // [1, 2]\n")])])]),e("h3",{attrs:{id:"optionals"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optionals"}},[t._v("#")]),t._v(" Optionals")]),t._v(" "),e("p",[t._v("Optionals 增加了非常方便的新方法，例如，你现在可以简单地将 Optionals 转换为流，或者提供另一个 Optionals 作为空 Optionals 的回调")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('Optional.of("foo").orElseThrow();     // foo\nOptional.of("foo").stream().count();  // 1\nOptional.ofNullable(null)\n    .or(() -> Optional.of("fallback"))\n    .get();     \n')])])]),e("h3",{attrs:{id:"epsilon垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epsilon垃圾收集器"}},[t._v("#")]),t._v(" Epsilon垃圾收集器")]),t._v(" "),e("p",[t._v("JDK上对这个特性的描述是：开发一个处理内存分配但不实现任何实际内存回收机制的GC，一旦可用堆内存用完，JVM就会退出。我们可以来尝试着使用一下它，首先我们编写一段程序：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('public class EpsilonTest {\n    public static void main(String[] args) throws Exception {\n        var list = new ArrayList<>();\n        boolean flag = true;\n        int count = 0;\n        while (flag) {\n            list.add(new Garbage());\n            if (count++ == 500) {\n                list.clear();\n            }\n        }\n    }\n}\n\nclass Garbage {\n    private double d1 = 1;\n    private double d2 = 2;\n\n    /**\n     * GC在清除本对象时会调用该方法\n     */\n    @Override\n    protected void finalize() throws Throwable {\n        System.out.println(this + " collecting");\n    }\n}\n')])])]),e("p",[t._v("这是一个无限循环的程序，循环体不断创建Garbage对象并放入集合，当循环次数达到500时将集合清空，此时的500个对象均为垃圾，会被GC清理，清理时调用finalize()方法打印信息。运行这段程序，结果如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("...\ncom.itcast.Garbage@1e9c634c collecting\njava.lang.OutOfMemoryError: Java heap space\n    at com.itcast.EpsilonTest.main(EpsilonTest.java:11)\ncom.itcast.Garbage@1174213e collecting\ncom.itcast.Garbage@2029a4b8 collecting\n...\n")])])]),e("p",[t._v("当程序执行到某一刻时，内存溢出，程序终止。现在我们来使用一下Epsilon，启动参数： UnlockExperimentalVMOptions：解锁隐藏的虚拟机参数。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("-XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC -Xms100m -Xmx100m\n")])])]),e("p",[t._v("运行程序后，结果如下：")]),t._v(" "),e("p",[t._v("程序开始")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("Terminating due to java.lang.OutOfMemoryError: Java heap space\n")])])]),e("p",[t._v("会发现，控制台只输出了这么一句，说明被清除的集合中的对象并没有被回收，而且内存溢出的速度也非常快，这说明该GC是并不会回收垃圾，那么它有什么作用呢？它提供完全被动的GC实现，具有有限的分配限制和尽可能低的延迟开销，但代价是内存占用和内存吞吐量，它的主要用途有以下几个方面：")]),t._v(" "),e("ul",[e("li",[t._v("性能测试(它可以帮助过滤掉GC引起的性能假象)")]),t._v(" "),e("li",[t._v("内存压力测试")]),t._v(" "),e("li",[t._v("非常短的JOB任务")]),t._v(" "),e("li",[t._v("VM接口测试")])]),t._v(" "),e("h3",{attrs:{id:"zgc垃圾回收器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zgc垃圾回收器"}},[t._v("#")]),t._v(" ZGC垃圾回收器")]),t._v(" "),e("p",[t._v("据说这是JDK11最为瞩目的特性，没有之一，是最重磅的升级，那么ZGC的优势在哪里呢？")]),t._v(" "),e("ul",[e("li",[t._v("GC暂停时间不会超过10毫秒")]),t._v(" "),e("li",[t._v("既能处理几百兆的小堆，也能处理几个T的大堆")]),t._v(" "),e("li",[t._v("和G1相比，应用吞吐能力不会下降超过15%")]),t._v(" "),e("li",[t._v("为未来的GC功能和利用colord指针以及Load barriers优化奠定了基础")])]),t._v(" "),e("p",[t._v("ZGC是一个并发、基于region、压缩型的垃圾收集器，只有root扫描阶段会STW(strop the world，停止所有线程)，因此ZGC的停顿时间不会随着堆的增长和存活对象的增长而变长。用法：-XX:UnlockExperimentalVMOptions -XX:+UseZGC虽然功能如此强大，但很遗憾的是，在Windows系统的JDK中并没有提供ZGC，所以也就没有办法测试了")])])}),[],!1,null,null,null);a.default=n.exports}}]);