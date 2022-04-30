---
title: java.lang.Throwable
date: 2022-04-24 20:26:18
permalink: /pages/034f5f/
categories:
  - sourcecode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---



## 定义
```java
public class Throwable implements Serializable {}
```

## 成员变量
1. 安全管理类
```java
    /* The security manager for the system.
     */
    private static volatile SecurityManager security = null;

```
`SecurityManager`里有方法
```java
    public static void checkPermission(Permission perm)
        throws AccessControlException

```
`checkPermission`方法里面有`AccessControlContext stack = getStackAccessControlContext();`
`getStackAccessControlContext`为原生方法：

```java
    /**
     * Returns the AccessControl context. i.e., it gets
     * the protection domains of all the callers on the stack,
     * starting at the first class with a non-null
     * ProtectionDomain.
     *
     * @return the access control context based on the current stack or
     *         null if there was only privileged system code.
     */

    private static native AccessControlContext getStackAccessControlContext();
```
## 成员函数
1. 打印堆栈
```java
    /**
     * Print our stack trace as an enclosed exception for the specified
     * stack trace.
     */
    private void printEnclosedStackTrace(PrintStreamOrWriter s,
                                         StackTraceElement[] enclosingTrace,
                                         String caption,
                                         String prefix,
                                         Set<Throwable> dejaVu) {
        assert Thread.holdsLock(s.lock());
```
其中Thread.holdsLock(Object obj)为原生方法：
```java
   /**
     * Returns <tt>true</tt> if and only if the current thread holds the
     * monitor lock on the specified object.
     *
     * <p>This method is designed to allow a program to assert that
     * the current thread already holds a specified lock:
     * <pre>
     *     assert Thread.holdsLock(obj);
     * </pre>
     *
     * @param  obj the object on which to test lock ownership
     * @throws NullPointerException if obj is <tt>null</tt>
     * @return <tt>true</tt> if the current thread holds the monitor lock on
     *         the specified object.
     * @since 1.4
     */
    public static native boolean holdsLock(Object obj);
```
## 内部类
1. 
```java
    /**
     * Holder class to defer initializing sentinel objects only used
     * for serialization.
     */
    private static class SentinelHolder {
```

抽象类：`PrintStream`和`PrintWriter`的包装类`PrintStreamOrWriter`，确保有一个单一`printStackTrace`实现

````java

    /**
     * Wrapper class for PrintStream and PrintWriter to enable a single
     * implementation of printStackTrace.
     */
    private abstract static class PrintStreamOrWriter {
        /** Returns the object to be locked when using this StreamOrWriter */
        abstract Object lock();

        /** Prints the specified string as a line on this StreamOrWriter */
        abstract void println(Object o);
    }

````