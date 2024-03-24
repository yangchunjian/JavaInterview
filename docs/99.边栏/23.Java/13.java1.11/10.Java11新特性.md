---
title: Java1.11新特性
date: 2022-04-23 22:25:57
permalink: /pages/5e04e1/
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
categories: 
  - java
  - 11
tags: 
  - Java
tag: 
  text: java
titleTag: Java
---

Java 11是自Java 8以来的又一个LTS版本，是目前全球使用最多的LTS版本之一。下边我们看一下JAVA11的新特性

## 字符串API增强
在Java 11中，针对String的操作进一步得到加强。避免我们在很常见的场景中引入额外的、复杂的API。

### isBlank()
用来判断字符串是不是空字符"“或者trim()之后(” ")为空字符:


     String blankStr = "    ";
     // true
     boolean trueVal = blankStr.isBlank();
    

### lines()
将一个字符串按照行终止符（换行符\n或者回车符\r）进行分割，并将分割为Stream流:

         String newStr = "Hello Java 11 \n felord.cn \r 2021-09-28";
 ​
         Stream<String> lines = newStr.lines();
         lines.forEach(System.out::println);
             
    // Hello Java 11 
     // 张三李四周吴郑王 
     // 2022-18-44

### strip()
去除字符串前后的“全角和半角”空白字符:

     String str = "HELLO\u3000";
     // str = 6
     System.out.println("str = " + str.length());
     // trim = 6
     System.out.println("trim = " + str.trim().length());
     // strip = 5
     System.out.println("strip = " + str.strip().length());
    

从上面也看出来了差别，trim()只能去除半角空白符。
strip()方法还有两个变种，stripLeading()用来去除前面的全角半角空白符；stripTrailing()用来去除尾部的全角半角空白符。

### repeat(n)
按照给定的次数重复串联字符串的内容：

     String str = "HELLO";
     // 空字符
     String empty = str.repeat(0);
     // HELLO
     String repeatOne = str.repeat(1);
     // HELLOHELLO
     String repeatTwo = str.repeat(2);
    

### 集合转对应类型的数组
之前想集合转对应的数组很麻烦，要么用迭代；要么用Stream流，现在你可以这样：

         List<String> sampleList = Arrays.asList("张三", "java 11");
         // array = {"张三", "java 11"};
         String[] array = sampleList.toArray(String[]::new);



### 断言取反
java.util.function.Predicate是我们很常用的断言谓词函数。在以前取反我们得借助于!符号，到了Java 11我们可以借助于其静态方法not来实现，这样语义就更加清晰了：

          List<String> sampleList = Arrays.asList("张三", "java 11","jack");
            // [jack]
            List<String> result = sampleList.stream()
                    // 过滤以j开头的字符串
                    .filter(s -> s.startsWith("j"))
                    // 同时不包含11的字符串
                    .filter(Predicate.not(s -> s.contains("11")))
                    .collect(Collectors.toList());



### var可以用于修饰Lambda局部变量
在Java 10中引入的var来进行类型推断。在Java 10中它不能用于修饰Lambda表达式的入参，其实对于一个Lambda表达式来说它入参的类型其实是可以根据上下文推断出来的。拿上面的例子来说，s -> s.startsWith(“j”)中的s肯定是字符串类型，因此在Java 11中var可以用于修饰Lambda局部变量:

       List<String> sampleList = Arrays.asList("张三", "java 11","jack");
            List<String> result = sampleList.stream()
                    // 过滤以j开头的字符串
                    .filter((@NotNull var s) -> s.startsWith("j"))
                    // 同时不包含11的字符串
                    .filter(Predicate.not((@NotNull var s) -> s.contains("11")))
                    .collect(Collectors.toList());
    


如果我们不声明var就没有办法为输入参数添加@NotNull注解。

### 文件中读写字符串内容更方便
Java 11中可以更轻松地从文件中读取和写入字符串内容了，我们可以通过Files工具类提供的新的静态方法readString和writeString分别进行读写文件的字符串内容，放在之前老麻烦了，特别是对IO流不熟悉的同学来说。现在简单几行就搞定了：
    
            String dir= "C://yourDir/hello.txt";
    // 写入文件
            Path path = Files.writeString(Path.of(dir), "hello java 11");
    // 读取文件
                String fileContent = Files.readString(path);
                // hello java 11
            System.err.println(fileContent);
    
    

### 嵌套类的访问控制规则
Java 11之前，内部嵌套类访问外部类的私有属性和方法是可行的：

    public class Outer {
        private int outerInt;
    
         class Inner {
           public void printOuterField() {
             System.out.println("Outer field = " + outerInt);
           }
        }
    }

但是如果你通过反射API实现内部类访问外部类的私有属性和方法就会抛出IllegalStateException异常。Java 11 修复了反射不能访问的问题.

JVM 访问规则不允许嵌套类之间进行私有访问。我们能通过常规方式可以访问是因为 JVM 在编译时为我们隐式地创建了桥接方法。Java 11 中引入了两个新的属性：一个叫做 NestMembers 的属性，用于标识其它已知的静态 nest 成员；另外一个是每个 nest 成员都包含的 NestHost 属性，用于标识出它的 nest 宿主类。在编译期就映射了双方的寄宿关系，不再需要桥接了。

### HttpClient支持HTTP2
Java 9 引入了一个新的酝酿中的 HttpClient API 来处理 HTTP 请求。从 Java 11开始，这个API 现在是最终版本，可以在标准库包 java.net 中使用。让我们来实验一下这个 API 能做些什么。


            var request = HttpRequest.newBuilder()
                    .uri(URI.create("https://baidu.com"))
                    .GET()
                    .build();
            var client = HttpClient.newHttpClient();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println(response.body());
    // <html>
    // <head><title>302 Found</title></head>
    // <body bgcolor="white">
    // <center><h1>302 Found</h1></center>
    // <hr><center>bfe/1.0.8.18</center>
    // </body>
    // </html>

同样的请求可以异步执行。调用 sendAsync 不会阻塞当前线程，而是返回一个CompletableFuture 来构建异步操作管道。

    var request = HttpRequest.newBuilder()
        .uri(URI.create("https://baidu.com"))
        .build();
    var client = HttpClient.newHttpClient();
    client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println);


### 数据流 Streams
流是在 Java 8 中引入的，现在增加了三个新方法。Stream.ofNullable 从单个元素构造流：

    Stream.ofNullable(null)
        .count()   // 0

dropWhile 和 takeWhile 方法都接受一个谓词来决定从流中放弃或选用哪些元素

    Stream.of(1, 2, 3, 2, 1)
        .dropWhile(n -> n < 3)
        .collect(Collectors.toList());  // [3, 2, 1]
    
    Stream.of(1, 2, 3, 2, 1)
        .takeWhile(n -> n < 3)
        .collect(Collectors.toList());  // [1, 2]



### Optionals
Optionals 增加了非常方便的新方法，例如，你现在可以简单地将 Optionals 转换为流，或者提供另一个 Optionals 作为空 Optionals 的回调

    Optional.of("foo").orElseThrow();     // foo
    Optional.of("foo").stream().count();  // 1
    Optional.ofNullable(null)
        .or(() -> Optional.of("fallback"))
        .get();     
    

### Epsilon垃圾收集器
JDK上对这个特性的描述是：开发一个处理内存分配但不实现任何实际内存回收机制的GC，一旦可用堆内存用完，JVM就会退出。我们可以来尝试着使用一下它，首先我们编写一段程序：

    public class EpsilonTest {
        public static void main(String[] args) throws Exception {
            var list = new ArrayList<>();
            boolean flag = true;
            int count = 0;
            while (flag) {
                list.add(new Garbage());
                if (count++ == 500) {
                    list.clear();
                }
            }
        }
    }
    
    class Garbage {
        private double d1 = 1;
        private double d2 = 2;
    
        /**
         * GC在清除本对象时会调用该方法
         */
        @Override
        protected void finalize() throws Throwable {
            System.out.println(this + " collecting");
        }
    }

这是一个无限循环的程序，循环体不断创建Garbage对象并放入集合，当循环次数达到500时将集合清空，此时的500个对象均为垃圾，会被GC清理，清理时调用finalize()方法打印信息。运行这段程序，结果如下:

    ...
    com.itcast.Garbage@1e9c634c collecting
    java.lang.OutOfMemoryError: Java heap space
        at com.itcast.EpsilonTest.main(EpsilonTest.java:11)
    com.itcast.Garbage@1174213e collecting
    com.itcast.Garbage@2029a4b8 collecting
    ...

当程序执行到某一刻时，内存溢出，程序终止。现在我们来使用一下Epsilon，启动参数： UnlockExperimentalVMOptions：解锁隐藏的虚拟机参数。

    -XX:+UnlockExperimentalVMOptions -XX:+UseEpsilonGC -Xms100m -Xmx100m


运行程序后，结果如下：

程序开始
    
    Terminating due to java.lang.OutOfMemoryError: Java heap space


会发现，控制台只输出了这么一句，说明被清除的集合中的对象并没有被回收，而且内存溢出的速度也非常快，这说明该GC是并不会回收垃圾，那么它有什么作用呢？它提供完全被动的GC实现，具有有限的分配限制和尽可能低的延迟开销，但代价是内存占用和内存吞吐量，它的主要用途有以下几个方面：

- 性能测试(它可以帮助过滤掉GC引起的性能假象)
- 内存压力测试
- 非常短的JOB任务
- VM接口测试

### ZGC垃圾回收器
据说这是JDK11最为瞩目的特性，没有之一，是最重磅的升级，那么ZGC的优势在哪里呢？

- GC暂停时间不会超过10毫秒
- 既能处理几百兆的小堆，也能处理几个T的大堆
- 和G1相比，应用吞吐能力不会下降超过15%
- 为未来的GC功能和利用colord指针以及Load barriers优化奠定了基础

ZGC是一个并发、基于region、压缩型的垃圾收集器，只有root扫描阶段会STW(strop the world，停止所有线程)，因此ZGC的停顿时间不会随着堆的增长和存活对象的增长而变长。用法：-XX:UnlockExperimentalVMOptions -XX:+UseZGC虽然功能如此强大，但很遗憾的是，在Windows系统的JDK中并没有提供ZGC，所以也就没有办法测试了

