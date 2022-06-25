---
title: java.lang.Object
category: Java
tag: 
  - Java源码
author: JavaInterview.cn
permalink: /pages/098918/
categories: 
  - sourcecode
tags: 
  - Java
date: 2022-04-21 22:12:56
titleTag: Java
---


## 成员函数
1. 原生方法
```java
private static native void registerNatives();
public final native Class<?> getClass();
public native int hashCode();
protected native Object clone() throws CloneNotSupportedException;
public final native void notify();
public final native void notifyAll();
public final native void wait(long timeout) throws InterruptedException;
```


2. 普通方法
```java
public boolean equals(Object obj) {
        return (this == obj);
}

public String toString() {
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}

public final void wait(long timeout, int nanos) throws InterruptedException;
public final void wait() throws InterruptedException;
protected void finalize() throws Throwable;

```