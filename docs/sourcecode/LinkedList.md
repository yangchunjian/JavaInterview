---
title: java.util.LinkedList
category: Java
tag:
  - Java基础
author: JavaInterview.cn
date: '2022-4-10'
---

## 定义

继承`AbstractSequentialList`类，实现`List`和`Deque`等接口

```java
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable

```

## 成员变量
1. `transient int size = 0;`默认size为0，
2. first节点、last节点，操作时也是操作这两个节点
```java
    /**
     * Pointer to first node.
     * Invariant: (first == null && last == null) ||
     *            (first.prev == null && first.item != null)
     */
    transient Node<E> first;

    /**
     * Pointer to last node.
     * Invariant: (first == null && last == null) ||
     *            (last.next == null && last.item != null)
     */
    transient Node<E> last;

```


## 成员函数

1. `public Object[] toArray()`集合转数组，`public <T> T[] toArray(T[] a)`泛型方法。
2. `public E removeFirst()`和`public E removeLast()`移除元素
3. 对Node的增删改查操作


## 内部类
1. 操作的是Node节点，定义为：
```java
    private static class Node<E> {
        E item;
        Node<E> next;
        Node<E> prev;

```
2. 子链表，在父类AbstractList中，定义为：
```java
class SubList<E> extends AbstractList<E> {
    private final AbstractList<E> l;
    private final int offset;
    private int size;

```

