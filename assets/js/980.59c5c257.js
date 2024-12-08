(window.webpackJsonp=window.webpackJsonp||[]).push([[980],{2151:function(n,e,i){"use strict";i.r(e);var o=i(12),r=Object(o.a)({},(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h2",{attrs:{id:"解答"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[n._v("#")]),n._v(" 解答")]),n._v(" "),i("ol",[i("li",[i("p",[n._v("创建一个maven项目，在pom文件中添加如下依赖：")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v('<?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n     xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n<modelVersion>4.0.0</modelVersion>\n\n<groupId>com.wisdom</groupId>\n<artifactId>spring-boot-starter-hello</artifactId>\n<version>1.0-REALEASE</version>\n<packaging>jar</packaging>\n\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-autoconfigure</artifactId>\n        <version>2.0.0.RELEASE</version>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n        </plugin>\n    </plugins>\n</build>\n</project>\n')])])])])]),n._v(" "),i("p",[n._v("spring-boot-autoconfigure此jar包中包含大量核心注解，包含条件注解等。")]),n._v(" "),i("p",[n._v("创建properties属性类，用于读取属性。")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v('@ConfigurationProperties(prefix = "com.wisdom")\npublic class HelloServiceProperties {\n\n    private String name = "wisdom";\n\n    private String hobby = "basketball";\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getHobby() {\n        return hobby;\n    }\n\n    public void setHobby(String hobby) {\n        this.hobby = hobby;\n    }\n}\n')])])]),i("p",[n._v("@ConfigurationProperties配置此注解可以自动导入application.properties配置文件中的属性，前提需要指定属性前缀prefix。如果application.properties文件中未指定相应属性，便使用默认的，如上name=“wisdom”,hobby=“basketball”.")]),n._v(" "),i("p",[n._v("创建配置类")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v('public class HelloServiceConfiguration {\n\n    private String name;\n\n    private String hobby;\n\n    public String getName() {\n        return "name is " + name;\n    }\n\n    public String getHobby() {\n        return "hobby is " + hobby;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public void setHobby(String hobby) {\n        this.hobby = hobby;\n    }\n}\n')])])]),i("p",[n._v("创建自动配置类：")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v('@Configuration\n@EnableConfigurationProperties(HelloServiceProperties.class)\n@ConditionalOnClass(HelloServiceConfiguration.class)\n@ConditionalOnProperty(prefix = "com.wisdom", value = "enabled", matchIfMissing = true)\npublic class HelloServiceAutoConfiguration {\n\n    @Autowired\n    private HelloServiceProperties helloServiceProperties;\n\n    @Bean\n    @ConditionalOnMissingBean(HelloServiceConfiguration.class)\n    public HelloServiceConfiguration helloServiceConfiguration() {\n        HelloServiceConfiguration helloService = new HelloServiceConfiguration();\n        helloService.setName(helloServiceProperties.getName());\n        helloService.setHobby(helloServiceProperties.getHobby());\n        return helloService;\n    }\n}\n')])])]),i("ul",[i("li",[n._v("@Configuration：表明此类是一个配置类，将变为一个bean被spring进行管理。")]),n._v(" "),i("li",[n._v("@EnableConfigurationProperties：启用属性配置，将读取HelloServiceProperties里面的属性。")]),n._v(" "),i("li",[n._v("@ConditionalOnClass：当类路径下面有HelloServiceConfiguration此类时，自动配置。")]),n._v(" "),i("li",[n._v("@ConditionalOnProperty：判断指定的属性是否具备指定的值。")]),n._v(" "),i("li",[n._v("@ConditionalOnMissingBean：当容器中没有指定bean是，创建此bean。")])]),n._v(" "),i("p",[n._v("在resources文件夹下面新建一个META-INF文件，并在下面创建spring.factories文件，将4中的配置类进行注册。")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v("org.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\n com.wisdom.HelloServiceAutoConfiguration\n")])])]),i("p",[n._v("至此，自定义的spring-boot-starter-hello编写完毕，当然springboot官方建议对于非官方的starter命名方式为xxx-spring-boot-starter。执行mvn clean install将项目打成一个jar包。")]),n._v(" "),i("p",[n._v("新建一个springboot项目，在pom文件中添加刚刚打包的jar的坐标。")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v("<dependency>\n           <groupId>com.wisdom</groupId>\n           <artifactId>spring-boot-starter-hello</artifactId>\n           <version>1.0-REALEASE</version>\n</dependency>\n")])])]),i("p",[n._v("在启动类上编写访问接口")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v('@SpringBootApplication\n@RestController\npublic class Springboot03Application {\n\n    @Autowired\n    private HelloServiceConfiguration helloService;\n\n    public static void main(String[] args) {\n        SpringApplication.run(Springboot03Application.class, args);\n    }\n\n    @RequestMapping("/name")\n    public String getName() {\n        return helloService.getName();\n    }\n\n    @RequestMapping("/hobby")\n    public String getHobby() {\n        return helloService.getHobby();\n    }\n}\n')])])]),i("p",[n._v("启动此springboot项目，依次访问 localhost:8080/name 和localhost:8080/hobby。")]),n._v(" "),i("p",[n._v("由于没有在application.properties中添加指定属性，所以会使用默认的属性。")]),n._v(" "),i("p",[n._v("接下来在application.properties添加我们自己的属性")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v("com.wisdom.hobby=football\ncom.wisdom.name=messi\n")])])]),i("p",[n._v("重启springboot项目，继续访问")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[n._v("localhost:8080/name 和localhost:8080/hobby。\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);