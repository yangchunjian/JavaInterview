---
title: java.util.concurrent.locks.AbstractQueuedSynchronizer
category: Java
tag: 
  - Java基础
author: JavaInterview.cn
permalink: /pages/9e3b1a/
categories: 
  - sourcecode
tags: 
  - Java
date: 2022-04-21 22:12:56
titleTag: Java
---


## 成员变量
1. `private volatile int state;`同步状态字段
2. 设置支持`compareAndSet`
```java
    private static final Unsafe unsafe = Unsafe.getUnsafe();
    private static final long stateOffset;
    private static final long headOffset;
    private static final long tailOffset;
    private static final long waitStatusOffset;
    private static final long nextOffset;

    static {
        try {
            stateOffset = unsafe.objectFieldOffset
                (AbstractQueuedSynchronizer.class.getDeclaredField("state"));
            headOffset = unsafe.objectFieldOffset
                (AbstractQueuedSynchronizer.class.getDeclaredField("head"));
            tailOffset = unsafe.objectFieldOffset
                (AbstractQueuedSynchronizer.class.getDeclaredField("tail"));
            waitStatusOffset = unsafe.objectFieldOffset
                (Node.class.getDeclaredField("waitStatus"));
            nextOffset = unsafe.objectFieldOffset
                (Node.class.getDeclaredField("next"));

        } catch (Exception ex) { throw new Error(ex); }
    }

```


## 成员函数
1. 通过`LockSupport.unpark(s.thread);`解锁，通过`LockSupport.park(s.thread);`加锁
2. `tryAcquire`和`tryRelease`是获取和释放非公平锁，`tryAcquireShare`和`tryReleaseShare`是获取和释放公平锁
3. `addWaiter(Node mode)`往队列里添加节点，


## 内部类
1. `public class ConditionObject implements Condition, java.io.Serializable`条件对象里有
`await()`方法做阻塞，`signal()`方法做唤醒，主体是对
```java
        /** First node of condition queue. */
        private transient Node firstWaiter;
        /** Last node of condition queue. */
        private transient Node lastWaiter;

```
头节点和尾节点操作

2.`static final class Node`阻塞队列里的节点Node，阻塞队列名叫CLH，Node类里的成员变量
 ```java
    static final class Node {
        /** Marker to indicate a node is waiting in shared mode */
        static final Node SHARED = new Node();
        /** Marker to indicate a node is waiting in exclusive mode */
        static final Node EXCLUSIVE = null;

        /** waitStatus value to indicate thread has cancelled */
        static final int CANCELLED =  1;
        /** waitStatus value to indicate successor's thread needs unparking */
        static final int SIGNAL    = -1;
        /** waitStatus value to indicate thread is waiting on condition */
        static final int CONDITION = -2;
        /**
         * waitStatus value to indicate the next acquireShared should
         * unconditionally propagate
         */
        static final int PROPAGATE = -3;

```
还有一些Node prev、Node next节点变量，predecessor()方法等，都是对Node的操作。
