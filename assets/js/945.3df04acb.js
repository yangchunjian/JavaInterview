(window.webpackJsonp=window.webpackJsonp||[]).push([[945],{2113:function(a,t,e){"use strict";e.r(t);var s=e(12),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"java-平台级模块系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java-平台级模块系统"}},[a._v("#")]),a._v(" Java 平台级模块系统")]),a._v(" "),e("p",[a._v("Java 9 的定义功能是一套全新的模块系统。当代码库越来越大，创建复杂，盘根错节的“意大利面条式代码”的几率呈指数级的增长。这时候就得面对两个基础的问题: 很难真正地对代码进行封装, 而系统并没有对不同部分（也就是 JAR 文件）之间的依赖关系有个明确的概念。")]),a._v(" "),e("p",[a._v("每一个公共类都可以被类路径之下任何其它的公共类所访问到, 这样就会导致无意中使用了并不想被公开访问的 API。此外，类路径本身也存在问题: 你怎么知晓所有需要的 JAR 都已经有了, 或者是不是会有重复的项呢? 模块系统把这俩个问题都给解决了。")]),a._v(" "),e("p",[a._v("模块化的 JAR 文件都包含一个额外的模块描述器。在这个模块描述器中, 对其它模块的依赖是通过 “requires” 来表示的。另外, “exports” 语句控制着哪些包是可以被其它模块访问到的。所有不被导出的包默认都封装在模块的里面。")]),a._v(" "),e("p",[a._v("如下是一个模块描述器的示例，存在于 “module-info.java” 文件中:")]),a._v(" "),e("p",[a._v("module blog {\nexports com.pluralsight.blog;")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("   requires cms;\n}\n")])])]),e("p",[a._v("我们可以如下展示模块：")]),a._v(" "),e("p",[a._v("请注意，两个模块都包含封装的包，因为它们没有被导出（使用橙色盾牌可视化）。 没有人会偶然地使用来自这些包中的类。Java 平台本身也使用自己的模块系统进行了模块化。通过封装 JDK 的内部类，平台更安全，持续改进也更容易。")]),a._v(" "),e("p",[a._v("当启动一个模块化应用时， JVM 会验证是否所有的模块都能使用，这基于 "),e("code",[a._v("requires")]),a._v(" 语句——比脆弱的类路径迈进了一大步。模块允许你更好地强制结构化封装你的应用并明确依赖。你可以在这个课程中学习更多关于 Java 9 中模块工作的信息 。")]),a._v(" "),e("h2",{attrs:{id:"linking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linking"}},[a._v("#")]),a._v(" Linking")]),a._v(" "),e("p",[a._v("当你使用具有显式依赖关系的模块和模块化的 JDK 时，新的可能性出现了。")]),a._v(" "),e("p",[a._v("你的应用程序模块现在将声明其对其他应用程序模块的依赖以及对其所使用的 JDK 模块的依赖。为什么不使用这些信息创建一个最小的运行时环境，其中只包含运行应用程序所需的那些模块呢？ 这可以通过 Java 9 中的新的 jlink 工具实现。")]),a._v(" "),e("p",[a._v("你可以创建针对应用程序进行优化的最小运行时映像而不需要使用完全加载 JDK 安装版本。")]),a._v(" "),e("h2",{attrs:{id:"jshell-交互式-java-repl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jshell-交互式-java-repl"}},[a._v("#")]),a._v(" JShell : 交互式 Java REPL")]),a._v(" "),e("p",[a._v("许多语言已经具有交互式编程环境，Java 现在加入了这个俱乐部。您可以从控制台启动 jshell ，并直接启动输入和执行 Java 代码。 jshell 的即时反馈使它成为探索 API 和尝试语言特性的好工具。")]),a._v(" "),e("p",[a._v("测试一个 Java 正则表达式是一个很好的说明 jshell 如何使您的生活更轻松的例子。 交互式 shell 还可以提供良好的教学环境以及提高生产力，您可以在此了解更多信息。")]),a._v(" "),e("p",[a._v("在教人们如何编写 Java 的过程中，不再需要解释 “public static void main（String [] args）” 这句废话。")]),a._v(" "),e("h2",{attrs:{id:"改进的-javadoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改进的-javadoc"}},[a._v("#")]),a._v(" 改进的 Javadoc")]),a._v(" "),e("p",[a._v("有时一些小事情可以带来很大的不同。你是否就像我一样在一直使用 Google 来查找正确的 Javadoc 页面呢？ 这不再需要了。Javadoc 现在支持在 API 文档中的进行搜索。")]),a._v(" "),e("p",[a._v("另外，Javadoc 的输出现在符合兼容 HTML5 标准。此外，你会注意到，每个 Javadoc 页面都包含有关 JDK 模块类或接口来源的信息。")]),a._v(" "),e("h2",{attrs:{id:"集合工厂方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集合工厂方法"}},[a._v("#")]),a._v(" 集合工厂方法")]),a._v(" "),e("p",[a._v("通常，您希望在代码中创建一个集合（例如，List 或 Set ），并直接用一些元素填充它。 实例化集合，几个 “add” 调用，使得代码重复。 Java 9，添加了几种集合工厂方法：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('Set<Integer> ints = Set.of( 1 ,  2 ,  3 );\nList<String> strings = List.of( "first" ,  "second" );\n')])])]),e("p",[a._v("除了更短和更好阅读之外，这些方法也可以避免您选择特定的集合实现。 事实上，从工厂方法返回已放入数个元素的集合实现是高度优化的。这是可能的，因为它们是不可变的：在创建后，继续添加元素到这些集合会导致 “UnsupportedOperationException” 。")]),a._v(" "),e("h2",{attrs:{id:"改进的-stream-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改进的-stream-api"}},[a._v("#")]),a._v(" 改进的 Stream API")]),a._v(" "),e("p",[a._v("长期以来，Stream API 都是 Java 标准库最好的改进之一。通过这套 API 可以在集合上建立用于转换的申明管道。在 Java 9 中它会变得更好。")]),a._v(" "),e("p",[a._v("Stream 接口中添加了 4 个新的方法：dropWhile, takeWhile, ofNullable。还有个 iterate 方法的新重载方法，可以让你提供一个 Predicate (判断条件)来指定什么时候结束迭代：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("IntStream.iterate( 1 , i -> i <  100 , i -> i +  1 ).forEach(System.out::println);\n")])])]),e("p",[a._v("第二个参数是一个 Lambda，它会在当前 IntStream 中的元素到达 100 的时候返回 true。因此这个简单的示例是向控制台打印 1 到 99。")]),a._v(" "),e("p",[a._v("除了对 Stream 本身的扩展，Optional 和 Stream 之间的结合也得到了改进。现在可以通过 Optional 的新方法 "),e("code",[a._v("stram")]),a._v(" 将一个 Optional 对象转换为一个(可能是空的) Stream 对象：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("Stream<Integer> s = Optional.of( 1 ).stream();\n")])])]),e("p",[a._v("在组合复杂的 Stream 管道时，将 Optional 转换为 Stream 非常有用。")]),a._v(" "),e("h2",{attrs:{id:"私有接口方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#私有接口方法"}},[a._v("#")]),a._v(" 私有接口方法")]),a._v(" "),e("p",[a._v("Java 8 为我们带来了接口的默认方法。 接口现在也可以包含行为，而不仅仅是方法签名。 但是，如果在接口上有几个默认方法，代码几乎相同，会发生什么情况？ 通常，您将重构这些方法，调用一个可复用的私有方法。")]),a._v(" "),e("p",[a._v("但默认方法不能是私有的。 将复用代码创建为一个默认方法不是一个解决方案，因为该辅助方法会成为公共API的一部分。 使用 Java 9，您可以向接口添加私有辅助方法来解决此问题：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('public  interface  MyInterface {\n \n     void  normalInterfaceMethod();\n \n     default  void  interfaceMethodWithDefault() {  init(); }\n \n     default  void  anotherDefaultMethod() { init(); }\n \n     // This method is not part of the public API exposed by MyInterface\n     private  void  init() { System.out.println( "Initializing" ); }\n}\n')])])]),e("p",[a._v("如果您使用默认方法开发 API ，那么私有接口方法可能有助于构建其实现。")]),a._v(" "),e("h2",{attrs:{id:"http-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-2"}},[a._v("#")]),a._v(" HTTP/2")]),a._v(" "),e("p",[a._v("Java 9 中有新的方式来处理 HTTP 调用。这个迟到的特性用于代替老旧的 "),e("code",[a._v("HttpURLConnection")]),a._v(" API，并提供对 WebSocket 和 HTTP/2 的支持。")]),a._v(" "),e("p",[a._v("注意：新的 HttpClient API 在 Java 9 中以所谓的孵化器模块交付。也就是说，这套 API 不能保证 100% 完成。不过你可以在 Java 9 中开始使用这套 API：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v('HttpClient client = HttpClient.newHttpClient();\n \nHttpRequest req =\n    HttpRequest.newBuilder(URI.create( "http://www.google.com" ))\n               .header( "User-Agent" , "Java" )\n               .GET()\n               .build();\n \n \nHttpResponse<String> resp = client.send(req, HttpResponse.BodyHandler.asString());\nHttpResponse<String> resp = client.send(req, HttpResponse.BodyHandler.asString());\n')])])]),e("p",[a._v("除了这个简单的请求/响应模型之外，HttpClient 还提供了新的 API 来处理 HTTP/2 的特性，比如流和服务端推送。")]),a._v(" "),e("h2",{attrs:{id:"多版本兼容-jar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多版本兼容-jar"}},[a._v("#")]),a._v(" 多版本兼容 JAR")]),a._v(" "),e("p",[a._v("我们最后要来着重介绍的这个特性对于库的维护者而言是个特别好的消息。当一个新版本的 Java 出现的时候，你的库用户要花费数年时间才会切换到这个新的版本。")]),a._v(" "),e("p",[a._v("这就意味着库得去向后兼容你想要支持的最老的 Java 版本 (许多情况下就是 Java 6 或者 7)。这实际上意味着未来的很长一段时间，你都不能在库中运用 Java 9 所提供的新特性。幸运的是，多版本兼容 JAR 功能能让你创建仅在特定版本的 Java 环境中运行库程序时选择使用的 class 版本：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("multirelease.jar\n├── META-INF\n│   └── versions\n│       └──  9\n│           └── multirelease\n│               └── Helper. class\n├── multirelease\n     ├── Helper. class\n     └── Main. class\n")])])]),e("p",[a._v("在上述场景中， multirelease.jar 可以在 Java 9 中使用, 不过 Helper 这个类使用的不是顶层的 multirelease.Helper 这个 class, 而是处在“META-INF/versions/9”下面的这个。")]),a._v(" "),e("p",[a._v("这是特别为 Java 9 准备的 class 版本，可以运用 Java 9 所提供的特性和库。同时，在早期的 Java 诸版本中使用这个 JAR 也是能运行的，因为较老版本的 Java 只会看到顶层的这个 Helper 类。")])])}),[],!1,null,null,null);t.default=v.exports}}]);