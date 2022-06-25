---
title: java.util.concurrent.ConcurrentHashMap
author: JavaInterview.cn
permalink: /pages/be6173/
categories: 
  - sourcecode
tags: 
  - Java
date: 2022-04-21 22:12:56
tag: 
  text: java
---



## 0. 概要
- 1. 位移操作

## 1. 位移操作
1. 通过位移操作（左移右移）确定容量（最大容量，默认容量等）
2. 通过`Runtime.getRuntime().availableProcessors()`获得CPU数量，限制某些尺寸
3. 通过Node<K,V>操作，不暴露，批量任务时，只读遍历。负hash值时，可以有key和value为空。不然key和value不能为空。
```java
    static class Node<K,V> implements Map.Entry<K,V> {
        final int hash;
        final K key;
        volatile V val;
        volatile Node<K,V> next;

```
4. 

## 2. Node操作（增删改查）
1. `volatile`修饰的变量
2. `transient`修饰的内部类
```java
    // views
    private transient KeySetView<K,V> keySet;
    private transient ValuesView<K,V> values;
    private transient EntrySetView<K,V> entrySet;

```
3. `final V putVal(K key, V value, boolean onlyIfAbsent) `添加数据方法
    1. 算出key的hashcode值
    2. 初始化表initTable()
    3. 扩容`helpTransfer`时，Node<K,V>[]数组拷贝赋值
    4. `synchronized (f) `f是Node<K,V> f，对节点加锁
    5. `compareAndSwapLong`等控制并发
    6. `addCount(1L, binCount);`添加到计数中，如果表太小并且尚未调整大小，则启动传输
    7. `sun.misc.Unsafe U;`加锁控制
        ```java
            private static final long LOCKSTATE;
            static {
                try {
                    U = sun.misc.Unsafe.getUnsafe();
                    Class<?> k = TreeBin.class;
                    LOCKSTATE = U.objectFieldOffset
                        (k.getDeclaredField("lockState"));
                } catch (Exception e) {
                    throw new Error(e);
                }
            }

        ```
    


