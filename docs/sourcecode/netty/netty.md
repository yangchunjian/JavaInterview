---
title: netty
date: 2022-05-09 14:12:45
permalink: /pages/a1918b/
categories:
  - sourcecode
  - netty
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 总结

### 可以定义和JDK类名一样的类
```java

/**
 * The result of an asynchronous operation.
 */
@SuppressWarnings("ClassNameSameAsAncestorName")
public interface Future<V> extends java.util.concurrent.Future<V> {

```

### 增加监听器时可以用泛型

```java

    /**
     * Adds the specified listener to this future.  The
     * specified listener is notified when this future is
     * {@linkplain #isDone() done}.  If this future is already
     * completed, the specified listener is notified immediately.
     */
    Future<V> addListener(GenericFutureListener<? extends Future<? super V>> listener);
```