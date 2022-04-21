---
title: java.util.concurrent.atomic.AtomicInteger
category: Java
tag: 
  - Java基础
author: JavaInterview.cn
permalink: /pages/b54825/
categories: 
  - sourcecode
tags: 
  - null
date: 2022-04-21 22:12:56
---


## 1. 成员变量
1. `static final Unsafe unsafe = Unsafe.getUnsafe()`设置unsafe.compareAndSwapInt更新，
```java
    // setup to use Unsafe.compareAndSwapInt for updates
    private static final Unsafe unsafe = Unsafe.getUnsafe();
    private static final long valueOffset;

    static {
        try {
            valueOffset = unsafe.objectFieldOffset
                (AtomicInteger.class.getDeclaredField("value"));
        } catch (Exception ex) { throw new Error(ex); }
    }
```


## 2. 成员函数
1. `getAndIncrement`方法的实现方式是：
```java
    public final int getAndAddInt(Object o, long offset, int delta) {
        int v;
        do {
            v = getIntVolatile(o, offset);
        } while (!compareAndSwapInt(o, offset, v, v + delta));
        return v;
    }

```
do{}while()循环中得到v返回，其中`getIntVolatile`方法为native原生方法，
```java
    /** Volatile version of {@link #getInt(Object, long)}  */
    public native int     getIntVolatile(Object o, long offset);

```
其中`compareAndSwapInt`方法也为native原生方法，
```java
    /**
     * Atomically update Java variable to <tt>x</tt> if it is currently
     * holding <tt>expected</tt>.
     * @return <tt>true</tt> if successful
     */
    public final native boolean compareAndSwapInt(Object o, long offset,
                                                  int expected,
                                                  int x);

```
加一时offset为1，减一时offset为-1。
