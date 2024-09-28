(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1148:function(n,a,e){n.exports=e.p+"assets/img/agent1.f63ce419.png"},1149:function(n,a,e){n.exports=e.p+"assets/img/agent2.a0e456f3.png"},1150:function(n,a,e){n.exports=e.p+"assets/img/agent3.a879ad6e.png"},1151:function(n,a,e){n.exports=e.p+"assets/img/agent4.a61c7c19.png"},1152:function(n,a,e){n.exports=e.p+"assets/img/agent5.3e9df4e9.png"},1153:function(n,a,e){n.exports=e.p+"assets/img/agent6.de28d6e8.png"},1154:function(n,a,e){n.exports=e.p+"assets/img/agent7.5d1b6a5a.png"},1155:function(n,a,e){n.exports=e.p+"assets/img/agent8.006d45c8.png"},2068:function(n,a,e){"use strict";e.r(a);var t=e(12),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[n._v("#")]),n._v(" "),t("strong",[n._v("简介")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    本文用示例介绍javaagent的用法。\n")])])]),t("h2",{attrs:{id:"javaagent简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javaagent简介"}},[n._v("#")]),n._v(" "),t("strong",[n._v("javaagent简介")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    JavaAgent 是JDK 1.5 以后引入的，也叫做Java代理。\n")])])]),t("p",[t("strong",[n._v("javaagent的作用")])]),n._v(" "),t("ul",[t("li",[n._v("可以在加载java文件之前进行拦截，修改字节码。")]),n._v(" "),t("li",[n._v("可以在运行期间修改已经加载的类的字节码。")]),n._v(" "),t("li",[n._v("这种用法有很多的限制。")]),n._v(" "),t("li",[n._v("javaagent结合javassist功能更强大：可以创建类、方法、变量等。")])]),n._v(" "),t("p",[n._v("这实际上提供了一种虚拟机级别的 AOP 实现方式。通过以上方法就能实现对一些框架或是技术的采集点进行字节码修改，完成这些功能：对应用进行监控，对执行指定方法或是接口时额外添加操作（打印日志、打印方法执行时间、采集方法的入参和结果等）。")]),n._v(" "),t("p",[n._v("很多APM监控系统就是基于此实现的，例如：Arthas、SkyWalking。")]),n._v(" "),t("p",[t("strong",[n._v("javaagent的使用方式")])]),n._v(" "),t("ul",[t("li",[t("p",[n._v("方式1：在一个普通 Java 程序（带有 main 函数的 Java 类）运行时，通过 -javaagent 参数指定一个特定的 jar 文件（包含 Instrumentation 代理）来启动 Instrumentation 的代理程序。\n-javaagent 这个参数的个数是不限的，如果指定了多个，则会按指定的先后执行，执行完各个 agent 后，才会执行主程序的 main 方法。例如：")]),n._v(" "),t("p",[n._v("java -javaagent:D:\\workspace\\javaagent.jar=hello1 -javaagent:D:\\workspace\\javaagent.jar=hello2 -jar D:\\workspace\\myTest.jar")])]),n._v(" "),t("li",[t("p",[n._v("方式2：在一个普通 Java 程序（带有 main 函数的 Java 类）运行时，通过 Java Tool API 中的 attach 方式指定进程id和特定jar包地址，启动 Instrumentation 的代理程序。")])])]),n._v(" "),t("p",[t("strong",[n._v("javaagent其他的功能")])]),n._v(" "),t("ul",[t("li",[n._v("获取所有已经被加载过的类")]),n._v(" "),t("li",[n._v("获取所有已经被初始化过了的类（执行过了clinit方法，是上面的一个子集）")]),n._v(" "),t("li",[n._v("获取某个对象的大小")]),n._v(" "),t("li",[n._v("将某个jar加入到bootstrapclasspath里作为高优先级被bootstrapClassloader加载")]),n._v(" "),t("li",[n._v("将某个jar加入到classpath里供AppClassload去加载")]),n._v(" "),t("li",[n._v("设置某些native方法的前缀，主要在查找native方法的时候做规则匹配")])]),n._v(" "),t("h2",{attrs:{id:"静态agent与动态agent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#静态agent与动态agent"}},[n._v("#")]),n._v(" "),t("strong",[n._v("静态agent与动态agent")])]),n._v(" "),t("p",[n._v("Agent分为如下两种：")]),n._v(" "),t("ul",[t("li",[n._v("静态Instrument：在main加载之前运行的Agent")]),n._v(" "),t("li",[n._v("动态Instrument：在main运行之后运行的Agent（JDK1.6以后提供）。")])]),n._v(" "),t("p",[t("strong",[n._v("静态Instrument（启动时）加载Instrument过程")])]),n._v(" "),t("ul",[t("li",[t("p",[n._v("创建并初始化 JPLISAgent；")])]),n._v(" "),t("li",[t("p",[n._v("监听VMInit事件，在JVM初始化完成之后做下面的事情：")]),n._v(" "),t("ul",[t("li",[n._v("创建InstrumentationImpl对象；")]),n._v(" "),t("li",[n._v("监听ClassFileLoadHook事件；")]),n._v(" "),t("li",[n._v("调用InstrumentationImpl的loadClassAndCallPremain方法，在这个方法里会去调用javaagent中MANIFEST.MF里指定的Premain-Class类的premain方法 ；")])])]),n._v(" "),t("li",[t("p",[n._v("解析javaagent中MANIFEST.MF文件的参数，并根据这些参数来设置JPLISAgent里的一些内容。")])])]),n._v(" "),t("p",[t("strong",[n._v("动态Instrument运行时加载Instrument过程")])]),n._v(" "),t("p",[n._v("通过JVM的attach机制来请求目标JVM加载对应的agent，过程大致如下：")]),n._v(" "),t("ul",[t("li",[n._v("创建并初始化JPLISAgent；")]),n._v(" "),t("li",[n._v("解析 javaagent 里 MANIFEST.MF 里的参数；")]),n._v(" "),t("li",[n._v("创建 InstrumentationImpl 对象；")]),n._v(" "),t("li",[n._v("监听 ClassFileLoadHook 事件；")]),n._v(" "),t("li",[n._v("调用 InstrumentationImpl 的loadClassAndCallAgentmain方法，在这个方法里会去调用javaagent里 MANIFEST.MF 里指定的Agent-Class类的agentmain方法。")])]),n._v(" "),t("h2",{attrs:{id:"示例1-简单用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例1-简单用法"}},[n._v("#")]),n._v(" "),t("strong",[n._v("示例1：简单用法")])]),n._v(" "),t("p",[t("strong",[n._v("agent程序")])]),n._v(" "),t("p",[n._v("项目结构")]),n._v(" "),t("p",[t("img",{attrs:{src:e(1148),alt:""}})]),n._v(" "),t("p",[t("strong",[n._v("1.提供premain方法")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('package com.example.a;\n \nimport java.lang.instrument.Instrumentation;\n \npublic class DemoAgent {\n    /**\n     * 该方法在main方法之前运行，与main方法运行在同一个JVM中\n     */\n    public static void premain(String arg, Instrumentation instrumentation) {\n        System.out.println("agent的premain(String arg, Instrumentation instrumentation)方法");\n    }\n \n    /**\n     * 若不存在 premain(String agentArgs, Instrumentation inst)，\n     * 则会执行 premain(String agentArgs)\n     */\n    public static void premain(String arg) {\n        System.out.println("agent的premain(String arg)方法");\n    }\n}\n')])])]),t("p",[t("strong",[n._v("2.提供META-INF/MANIFEST.MF")])]),n._v(" "),t("p",[n._v("在src/main/java的同级目录下新建META-INF文件夹，在里边新建MANIFEST.MF文件（注意最后一行必须是空行）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("Manifest-Version: 1.0\nCan-Redefine-Classes: true\nCan-Retransform-Classes: true\nPremain-Class: com.example.a.DemoAgent\n")])])]),t("ul",[t("li",[n._v("Premain-Class ：包含 premain 方法的类（类的全路径名）")]),n._v(" "),t("li",[n._v("Agent-Class ：包含 agentmain 方法的类（类的全路径名）")]),n._v(" "),t("li",[n._v("Boot-Class-Path ：设置引导类加载器搜索的路径列表。查找类的特定于平台的机制失败后，引导类加载器会搜索这些路径。按列出的顺序搜索路径。列表中的路径由一个或多个空格分开。路径使用分层 URI 的路径组件语法。如果该路径以斜杠字符（“/”）开头，则为绝对路径，否则为相对路径。相对路径根据代理 JAR 文件的绝对路径解析。忽略格式不正确的路径和不存在的路径。如果代理是在 VM 启动之后某一时刻启动的，则忽略不表示 JAR 文件的路径。（可选）")]),n._v(" "),t("li",[n._v("Can-Redefine-Classes ：true表示能重定义此代理所需的类，默认值为 false（可选）")]),n._v(" "),t("li",[n._v("Can-Retransform-Classes ：true 表示能重转换此代理所需的类，默认值为 false （可选）")]),n._v(" "),t("li",[n._v("Can-Set-Native-Method-Prefix： true表示能设置此代理所需的本机方法前缀，默认值为 false（可选）")])]),n._v(" "),t("p",[t("strong",[n._v("3.将其打包为jar包")])]),n._v(" "),t("p",[n._v("步骤1：打包的配置入口")]),n._v(" "),t("ul",[t("li",[n._v("File=> Project Structure=> Project Settings=> Artifacts=> + => JAR=> From modules with dependencies...")])]),n._v(" "),t("p",[t("img",{attrs:{src:e(1149),alt:""}})]),n._v(" "),t("p",[n._v("步骤2：打包的配置")]),n._v(" "),t("p",[t("img",{attrs:{src:e(1150),alt:""}})]),n._v(" "),t("p",[n._v("步骤3：打包")]),n._v(" "),t("p",[n._v("Build=> Build Artifacts...=> Build")]),n._v(" "),t("p",[n._v("此时会生成out目录，并生成jar包：")]),n._v(" "),t("p",[t("img",{attrs:{src:e(1151),alt:""}})]),n._v(" "),t("p",[t("strong",[n._v("也可使用maven配置META-INF/MANIFEST.MF")])]),n._v(" "),t("p",[n._v("使用maven，打包方便，而且不用手写META-INF/MANIFEST.MF，用插件即可：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.5.1</version>\n            \x3c!-- 指定maven编译的jdk版本。若不指定,maven3默认用jdk 1.5 maven2默认用jdk1.3 --\x3e\n            <configuration>\n                <source>8</source>\n                <target>8</target>\n            </configuration>\n        </plugin>\n \n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-jar-plugin</artifactId>\n            <version>3.2.0</version>\n            <configuration>\n                <archive>\n                    \x3c!--自动添加META-INF/MANIFEST.MF --\x3e\n                    <manifest>\n                        <addClasspath>true</addClasspath>\n                    </manifest>\n                    <manifestEntries>\n                        <Menifest-Version>1.0</Menifest-Version>\n                        <Premain-Class>com.example.a.DemoAgent</Premain-Class>\n                        <Can-Redefine-Classes>true</Can-Redefine-Classes>\n                        <Can-Retransform-Classes>true</Can-Retransform-Classes>\n                    </manifestEntries>\n                </archive>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")])])]),t("p",[n._v("maven的项目结构为：")]),n._v(" "),t("p",[t("img",{attrs:{src:e(1152),alt:""}})]),n._v(" "),t("p",[t("strong",[n._v("应用程序")]),n._v("\n项目结构")]),n._v(" "),t("p",[t("img",{attrs:{src:e(1153),alt:""}})]),n._v(" "),t("p",[t("strong",[n._v("1.提供main程序")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('package com.example.a;\n \npublic class Demo {\n    public static void main(String[] args) {\n        System.out.println("应用的main方法");\n    }\n}\n')])])]),t("p",[t("strong",[n._v("2.打包")])]),n._v(" "),t("p",[n._v("打包方法和agent的项目略有不同。见：Intellij IDEA--将Java项目打包为jar包--方法/实例_IT利刃出鞘的博客-CSDN博客")]),n._v(" "),t("p",[t("strong",[n._v("测试")]),n._v("\njava -javaagent:D:\\tmp\\demo_javaagent.jar -jar demo_java.jar")]),n._v(" "),t("p",[n._v("结果：")]),n._v(" "),t("p",[t("img",{attrs:{src:e(1154),alt:""}})]),n._v(" "),t("h2",{attrs:{id:"示例2-统计方法的执行时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例2-统计方法的执行时间"}},[n._v("#")]),n._v(" "),t("strong",[n._v("示例2：统计方法的执行时间")])]),n._v(" "),t("p",[n._v("需求：写一个agent，统计应用的某个方法的执行时间。（本处要统计的方法是：TimeTest#test方法）")]),n._v(" "),t("p",[t("strong",[n._v("agent程序")])]),n._v(" "),t("p",[t("strong",[n._v("agent代码")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('package com.example.a;\n \nimport java.lang.instrument.Instrumentation;\n \npublic class DemoAgent {\n    /**\n     * 该方法在main方法之前运行，与main方法运行在同一个JVM中\n     */\n    public static void premain(String arg, Instrumentation instrumentation) {\n        System.out.println("agent的premain(String arg, Instrumentation instrumentation)方法");\n \n        instrumentation.addTransformer(new MyTransformer());\n    }\n \n    /**\n     * 若不存在 premain(String agentArgs, Instrumentation inst)，\n     * 则会执行 premain(String agentArgs)\n     */\n    public static void premain(String arg) {\n        System.out.println("agent的premain(String arg)方法");\n    }\n}\n')])])]),t("p",[t("strong",[n._v("Transformer代码")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('package com.example.a;\n \nimport javassist.ClassPool;\nimport javassist.CtClass;\nimport javassist.CtMethod;\n \nimport java.lang.instrument.ClassFileTransformer;\nimport java.lang.instrument.IllegalClassFormatException;\nimport java.security.ProtectionDomain;\n \npublic class MyTransformer implements ClassFileTransformer {\n    private final String injectedClass = "com.example.a.TimeTest";\n    private final String injectedMethod = "test";\n \n    @Override\n    public byte[] transform(ClassLoader loader,\n                            String className,\n                            Class<?> classBeingRedefined,\n                            ProtectionDomain protectionDomain,\n                            byte[] classfileBuffer) throws IllegalClassFormatException {\n \n        String realClassName = className.replace("/", ".");\n \n        if (realClassName.equals(injectedClass)) {\n            CtClass ctClass;\n            try {\n                // 使用全称，取得字节码类<使用javassist>\n                ClassPool classPool = ClassPool.getDefault();\n                ctClass = classPool.get(realClassName);\n \n                // 得到方法实例\n                CtMethod ctMethod = ctClass.getDeclaredMethod(injectedMethod);\n                // 添加变量\n                ctMethod.addLocalVariable("time", CtClass.longType);\n                ctMethod.insertBefore("System.out.println(\\"------------ Before --------\\");");\n                ctMethod.insertBefore("time = System.currentTimeMillis();");\n \n                ctMethod.insertAfter("System.out.println(\\"Elapsed Time(ms): \\" + (System.currentTimeMillis() - time));");\n                ctMethod.insertAfter("System.out.println(\\"------------- After --------\\");");\n \n                return ctClass.toBytecode();\n            } catch (Throwable e) { //这里要用Throwable，不要用Exception\n                System.out.println(e.getMessage());\n                e.printStackTrace();\n            }\n        }\n \n        // 返回原类字节码\n        return classfileBuffer;\n    }\n}\n')])])]),t("p",[t("strong",[n._v("pom.xml")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n \n  <groupId>com.example</groupId>\n  <artifactId>demo_javaagent</artifactId>\n  <version>1.0-SNAPSHOT</version>\n \n  <dependencies>\n    <dependency>\n      <groupId>org.javassist</groupId>\n      <artifactId>javassist</artifactId>\n      <version>3.28.0-GA</version>\n    </dependency>\n  </dependencies>\n \n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>3.5.1</version>\n        \x3c!-- 指定maven编译的jdk版本。若不指定,maven3默认用jdk 1.5 maven2默认用jdk1.3 --\x3e\n        <configuration>\n          <source>8</source>\n          <target>8</target>\n        </configuration>\n      </plugin>\n \n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-jar-plugin</artifactId>\n        <version>3.2.0</version>\n        <configuration>\n          <archive>\n            \x3c!--自动添加META-INF/MANIFEST.MF --\x3e\n            <manifest>\n              <addClasspath>true</addClasspath>\n            </manifest>\n            <manifestEntries>\n              <Menifest-Version>1.0</Menifest-Version>\n              <Premain-Class>com.example.a.DemoAgent</Premain-Class>\n              <Can-Redefine-Classes>true</Can-Redefine-Classes>\n              <Can-Retransform-Classes>true</Can-Retransform-Classes>\n            </manifestEntries>\n          </archive>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n \n \n</project>\n')])])]),t("p",[t("strong",[n._v("应用程序")])]),n._v(" "),t("p",[t("strong",[n._v("main类")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('package com.example.a;\n \npublic class Demo {\n    public static void main(String[] args) {\n        System.out.println("应用的main方法");\n        new TimeTest().test();\n    }\n}\n')])])]),t("p",[t("strong",[n._v("测试类")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('package com.example.a;\n \npublic class TimeTest {\n    public void test() {\n        System.out.println("开始执行TimeTest#test");\n        System.out.println("sleep开始");\n        try {\n            Thread.sleep(1000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n        System.out.println("sleep结束");\n    }\n}\n')])])]),t("p",[t("strong",[n._v("pom.xml")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n \n    <groupId>com.example</groupId>\n    <artifactId>demo_maven</artifactId>\n    <version>1.0-SNAPSHOT</version>\n \n    <dependencies>\n        <dependency>\n            <groupId>org.javassist</groupId>\n            <artifactId>javassist</artifactId>\n            <version>3.28.0-GA</version>\n        </dependency>\n    </dependencies>\n \n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <version>3.5.1</version>\n                \x3c!-- 指定maven编译的jdk版本。若不指定,maven3默认用jdk 1.5 maven2默认用jdk1.3 --\x3e\n                <configuration>\n                    <source>8</source>\n                    <target>8</target>\n                </configuration>\n            </plugin>\n \n            <plugin>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <configuration>\n                    <archive>\n                        <manifest>\n                            <mainClass>com.example.a.Demo</mainClass>\n                        </manifest>\n                    </archive>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <appendAssemblyId>false</appendAssemblyId>\n \n                </configuration>\n \n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>assembly</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n')])])]),t("p",[t("strong",[n._v("测试")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("java -javaagent:D:\\tmp\\demo_javaagent-1.0-SNAPSHOT.jar -jar demo_maven-1.0-SNAPSHOT.jar\n")])])]),t("p",[n._v("结果：\n"),t("img",{attrs:{src:e(1155),alt:""}})])])}),[],!1,null,null,null);a.default=s.exports}}]);