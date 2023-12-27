---
title: JavaInterview所有
date: 2022-05-15 00:41:30
permalink: /interview/all/read
categories: 
  - interview
  - all
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---

## javainterview-all

## 坐标
```java
<dependency>
    <groupId>cn.javainterview</groupId>
    <artifactId>javainterview-all</artifactId>
    <version>2.1.0</version>
</dependency>
```

## SunCertPathBuilderException的处理方法
1. cn.javainterview.InstallCert用于生成证书，执行时，在Program arguments中设置域名参数，例如：s01.oss.sonatype.org，
然后run，然后点击回车，生成证书文件，把证书文件放在${java.home}/lib/security下，例如：/Library/Java/JavaVirtualMachines/jdk1.8.0_45.jdk/Contents/Home/jre/lib/security下
2. 其它需要SunCertPathBuilderException处理的域名同理(例如https://repo.maven.apache.org/maven2)，生成文件名要区分开
3. 发布命令mvn clean deploy -B -Djavax.net.ssl.trustStore=/生成的文件路径/文件名 -Djavax.net.ssl.trustStorePassword=changeit，例如：mvn clean deploy -B -Djavax.net.ssl.trustStore=/Users/xxx/ownprojects/JavaInterview/jssecacerts -Djavax.net.ssl.trustStorePassword=changeit
4. 发布命令在root module目录下执行
5. 发布成功后查询地址：
```java
    https://search.maven.org/search (一般这个10-2小时同步，我查时大约3小时，好像慢了点)
    https://mvnrepository.com/search（一般这个时间更久，一天吧）
    https://s01.oss.sonatype.org/
```        
