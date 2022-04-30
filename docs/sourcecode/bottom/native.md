---
title: Java编写原生方法
category: Java
author: JavaInterview.cn
categories: 
  - sourcecode
tags: 
  - Java
  - 原生方法
date: 2022-04-30 22:55:38
permalink: /pages/65ab2d/
---

## 原生方法
代码坐标

```java
<dependency>
    <groupId>cn.javainterview</groupId>
    <artifactId>javainterview-core</artifactId>
    <version>1.0.5</version>
</dependency>
```

例子： `cn.javainterview.core.jni.JavaInterviewJNI.print`，输入字符串，打印字符串

1. 编写cn.javainterview.core.jni.JavaInterviewJNI类
```java
package cn.javainterview.core.jni;

/**
 * @author JavaInterview
 * @email 1091938307@qq.com
 * @created 2022-04-30
 * @timed 21:22
 */
public class JavaInterviewJNI {

    public native void print(String i);

    static {
        System.loadLibrary("javainterview");
        //需求生成的动态链接库名字(linux下为libjavainterview.so)
        //需求生成的动态链接库名字(mac下为libjavainterview.jnilib)

    }


    public static void main(String[] args) {
        System.out.println("java.library.path=" + System.getProperty("java.library.path")); //输出的值是以:分隔的，区分多个路径，生成的libjavainterview.jnilib文件放在任意一个路径下就行
        JavaInterviewJNI javaInterviewJNI = new JavaInterviewJNI();
        javaInterviewJNI.print("Hello JavaInterview ！！！");
    }
}

```
2. 编译cn.javainterview.core.jni.JavaInterviewJNI.java文件
```java
javac cn.javainterview.core.jni.JavaInterviewJNI.java
```
生成cn.javainterview.core.jni.JavaInterviewJNI.class文件

注意
.java文件和.class不要放在同一个目录下,可以把.class文件放在cn.javainterview.core.jni.compile文件下

3. 执行javah cn.javainterview.core.jni.JavaInterviewJNI命令生成cn.javainterview.core.jni.JavaInterviewJNI.h文件
```java
javah -classpath /Users/yangchunjian/ownprojects/JavaInterview/javainterview-core/src/main/java cn.javainterview.core.jni.JavaInterviewJNI

```

4. 编写cn_javainterview_core_jni_JavaInterviewJNI.cpp文件
```c++
#include<stdio.h>
#include<stdlib.h>
#include<iostream>//预处理
#include<string> //引入string
using namespace std;//命名空间


#include "cn_javainterview_core_jni_JavaInterviewJNI.h"
std::string jstring2str(JNIEnv* env, jstring jstr)
{
    char*   rtn   =   NULL;
    jclass   clsstring   =   env->FindClass("java/lang/String");
    jstring   strencode   =   env->NewStringUTF("UTF-8");
    jmethodID   mid   =   env->GetMethodID(clsstring,   "getBytes",   "(Ljava/lang/String;)[B");
    jbyteArray   barr=   (jbyteArray)env->CallObjectMethod(jstr,mid,strencode);
    jsize   alen   =   env->GetArrayLength(barr);
    jbyte*   ba   =   env->GetByteArrayElements(barr,JNI_FALSE);
    if(alen   >   0)
    {
        rtn   =   (char*)malloc(alen+1);
        memcpy(rtn,ba,alen);
        rtn[alen]=0;
    }
    env->ReleaseByteArrayElements(barr,ba,0);
    std::string stemp(rtn);
    free(rtn);
    return   stemp;
}

JNIEXPORT void JNICALL Java_cn_javainterview_core_jni_JavaInterviewJNI_print
  (JNIEnv* env, jobject, jstring i)
{
      std::string input = jstring2str(env,i);
      printf("%s",input.c_str());

}


```
4. 生成jnilib文件
```g++
g++ -shared -o libjavainterview.jnilib cn_javainterview_core_jni_JavaInterviewJNI.cpp  -I${JAVA_HOME}/include -I${JAVA_HOME}/include/darwin
```

5. 把`libjavainterview.jnilib`放在系统`java.library.path`目录下让虚拟机加载

6. 执行JavaInterviewJNI.java的mian方法，输出
```java
Hello JavaInterview ！！！
```
设置成功


