---
title: java.util.concurrent.locks.LockSupport
category: Java
tag: 
  - Java基础
author: JavaInterview.cn
permalink: /pages/ef1d9d/
categories: 
  - sourcecode
tags: 
  - null
date: 2022-04-21 22:12:56
---


## 1. 成员变量
1. 锁的底层都是调用的`private static final sun.misc.Unsafe UNSAFE;`这个方法
2. 


## 2. 成员函数
1. `park(Object blocker)`阻塞当前线程执行，实现方式为：
```java
    public static void park(Object blocker) {
        Thread t = Thread.currentThread();
        setBlocker(t, blocker);
        UNSAFE.park(false, 0L);
        setBlocker(t, null);
    }

```
`setBocker()`的实现方式为：
```java
    private static void setBlocker(Thread t, Object arg) {
        // Even though volatile, hotspot doesn't need a write barrier here.
        UNSAFE.putObject(t, parkBlockerOffset, arg);
    }

```

```java
    /**
     * Block current thread, returning when a balancing
     * <tt>unpark</tt> occurs, or a balancing <tt>unpark</tt> has
     * already occurred, or the thread is interrupted, or, if not
     * absolute and time is not zero, the given time nanoseconds have
     * elapsed, or if absolute, the given deadline in milliseconds
     * since Epoch has passed, or spuriously (i.e., returning for no
     * "reason"). Note: This operation is in the Unsafe class only
     * because <tt>unpark</tt> is, so it would be strange to place it
     * elsewhere.
     */
public native void park(boolean isAbsolute, long time);
```

2. `unpark(Thread thread)`解锁当前线程，实现方式为：
```java
    public static void unpark(Thread thread) {
        if (thread != null)
            UNSAFE.unpark(thread);
    }

```
unpark为：
```java
    /**
     * Unblock the given thread blocked on <tt>park</tt>, or, if it is
     * not blocked, cause the subsequent call to <tt>park</tt> not to
     * block.  Note: this operation is "unsafe" solely because the
     * caller must somehow ensure that the thread has not been
     * destroyed. Nothing special is usually required to ensure this
     * when called from Java (in which there will ordinarily be a live
     * reference to the thread) but this is not nearly-automatically
     * so when calling from native code.
     * @param thread the thread to unpark.
     *
     */
    public native void unpark(Object thread);

```