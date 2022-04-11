---
title: java.util.concurrent.ConcurrentHashMap
author: interview
date: '2022-4-10'
---



# 0. 概要
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



