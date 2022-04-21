---
title: java.lang.Class
category: Java
tag: 
  - Java基础
author: JavaInterview.cn
date: 2022-4-10
permalink: /pages/4fce6c/
categories: 
  - sourcecode
tags: 
  - 
---

## 定义
1. 类的定义
```java
public final class Class<T> implements java.io.Serializable,
                              GenericDeclaration,
                              Type,
                              AnnotatedElement {
    private static final int ANNOTATION= 0x00002000;
    private static final int ENUM      = 0x00004000;
    private static final int SYNTHETIC = 0x00001000;

    private static native void registerNatives();
    static {
        registerNatives();
    }
```

## 成员变量
1. 
```java
    // Initialized in JVM not by private constructor
    // This field is filtered from reflection access, i.e. getDeclaredField
    // will throw NoSuchFieldException
    private final ClassLoader classLoader;

```


## 成员函数
1. 原生方法：
```java
    /** Called after security check for system loader access checks have been made. */
    private static native Class<?> forName0(String name, boolean initialize,
                                            ClassLoader loader,
                                            Class<?> caller)
        throws ClassNotFoundException;

```

```java
    public native boolean isInstance(Object obj);

```

2. 普通方法
```java
    @CallerSensitive
    public ClassLoader getClassLoader() {
        ClassLoader cl = getClassLoader0();
        if (cl == null)
            return null;
        SecurityManager sm = System.getSecurityManager();
        if (sm != null) {
            ClassLoader.checkClassLoaderPermission(cl, Reflection.getCallerClass());
        }
        return cl;
    }
```




## 内部类
1. 
