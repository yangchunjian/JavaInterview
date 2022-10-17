---
title: SpringBoot自定义starter
date: 2022-10-17 12:02:26
permalink: /pages/9ad196/
categories:
  - interview
  - hf
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 解答

1. 创建一个maven项目，在pom文件中添加如下依赖：



       <?xml version="1.0" encoding="UTF-8"?>
        <project xmlns="http://maven.apache.org/POM/4.0.0"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
       <modelVersion>4.0.0</modelVersion>
    
       <groupId>com.wisdom</groupId>
       <artifactId>spring-boot-starter-hello</artifactId>
       <version>1.0-REALEASE</version>
       <packaging>jar</packaging>
    
       <dependencies>
           <dependency>
               <groupId>org.springframework.boot</groupId>
               <artifactId>spring-boot-autoconfigure</artifactId>
               <version>2.0.0.RELEASE</version>
           </dependency>
       </dependencies>
    
       <build>
           <plugins>
               <plugin>
                   <groupId>org.springframework.boot</groupId>
                   <artifactId>spring-boot-maven-plugin</artifactId>
               </plugin>
           </plugins>
       </build>
       </project>


spring-boot-autoconfigure此jar包中包含大量核心注解，包含条件注解等。

创建properties属性类，用于读取属性。
    
    @ConfigurationProperties(prefix = "com.wisdom")
    public class HelloServiceProperties {
    
        private String name = "wisdom";
    
        private String hobby = "basketball";
    
        public String getName() {
            return name;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public String getHobby() {
            return hobby;
        }
    
        public void setHobby(String hobby) {
            this.hobby = hobby;
        }
    }



@ConfigurationProperties配置此注解可以自动导入application.properties配置文件中的属性，前提需要指定属性前缀prefix。如果application.properties文件中未指定相应属性，便使用默认的，如上name=“wisdom”,hobby=“basketball”.

创建配置类

    public class HelloServiceConfiguration {
    
        private String name;
    
        private String hobby;
    
        public String getName() {
            return "name is " + name;
        }
    
        public String getHobby() {
            return "hobby is " + hobby;
        }
    
        public void setName(String name) {
            this.name = name;
        }
    
        public void setHobby(String hobby) {
            this.hobby = hobby;
        }
    }



创建自动配置类：

    @Configuration
    @EnableConfigurationProperties(HelloServiceProperties.class)
    @ConditionalOnClass(HelloServiceConfiguration.class)
    @ConditionalOnProperty(prefix = "com.wisdom", value = "enabled", matchIfMissing = true)
    public class HelloServiceAutoConfiguration {
    
        @Autowired
        private HelloServiceProperties helloServiceProperties;
    
        @Bean
        @ConditionalOnMissingBean(HelloServiceConfiguration.class)
        public HelloServiceConfiguration helloServiceConfiguration() {
            HelloServiceConfiguration helloService = new HelloServiceConfiguration();
            helloService.setName(helloServiceProperties.getName());
            helloService.setHobby(helloServiceProperties.getHobby());
            return helloService;
        }
    }



- @Configuration：表明此类是一个配置类，将变为一个bean被spring进行管理。
- @EnableConfigurationProperties：启用属性配置，将读取HelloServiceProperties里面的属性。
- @ConditionalOnClass：当类路径下面有HelloServiceConfiguration此类时，自动配置。
- @ConditionalOnProperty：判断指定的属性是否具备指定的值。
- @ConditionalOnMissingBean：当容器中没有指定bean是，创建此bean。

在resources文件夹下面新建一个META-INF文件，并在下面创建spring.factories文件，将4中的配置类进行注册。

    org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
     com.wisdom.HelloServiceAutoConfiguration

至此，自定义的spring-boot-starter-hello编写完毕，当然springboot官方建议对于非官方的starter命名方式为xxx-spring-boot-starter。执行mvn clean install将项目打成一个jar包。

新建一个springboot项目，在pom文件中添加刚刚打包的jar的坐标。

    <dependency>
               <groupId>com.wisdom</groupId>
               <artifactId>spring-boot-starter-hello</artifactId>
               <version>1.0-REALEASE</version>
    </dependency>

在启动类上编写访问接口

    @SpringBootApplication
    @RestController
    public class Springboot03Application {
    
        @Autowired
        private HelloServiceConfiguration helloService;
    
        public static void main(String[] args) {
            SpringApplication.run(Springboot03Application.class, args);
        }
    
        @RequestMapping("/name")
        public String getName() {
            return helloService.getName();
        }
    
        @RequestMapping("/hobby")
        public String getHobby() {
            return helloService.getHobby();
        }
    }


启动此springboot项目，依次访问 localhost:8080/name 和localhost:8080/hobby。


由于没有在application.properties中添加指定属性，所以会使用默认的属性。

接下来在application.properties添加我们自己的属性

    com.wisdom.hobby=football
    com.wisdom.name=messi

重启springboot项目，继续访问

    localhost:8080/name 和localhost:8080/hobby。
