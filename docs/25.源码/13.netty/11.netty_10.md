---
title: Netty代码写法总结10
date: 2022-06-20 22:12:19
permalink: /pages/7f0581/
categories: 
  - sourcecode
  - netty
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---


## 总结10

### Runnable初始化
 
```java
public abstract class AbstractOioChannel extends AbstractChannel {

    protected static final int SO_TIMEOUT = 1000;

    private volatile boolean readPending;

    private final Runnable readTask = new Runnable() {
        @Override
        public void run() {
            if (!isReadPending() && !config().isAutoRead()) {
                // ChannelConfig.setAutoRead(false) was called in the meantime so just return
                return;
            }

            setReadPending(false);
            doRead();
        }
    };
```

### 类名定义为group，里面存放类对象

```java
public interface ChannelGroup extends Set<Channel>, Comparable<ChannelGroup> {

    /**
     * Returns the name of this group.  A group name is purely for helping
     * you to distinguish one group from others.
     */
    String name();

    /**
     * Returns the {@link Channel} which has the specified {@link ChannelId}.
     *
     * @return the matching {@link Channel} if found. {@code null} otherwise.
     */
    Channel find(ChannelId id);


```


### 继承迭代器，及线程类Future<T>
```java
public interface ChannelGroupFuture extends Future<Void>, Iterable<ChannelFuture> {

    /**
     * Returns the {@link ChannelGroup} which is associated with this future.
     */
    ChannelGroup group();

    /**
     * Returns the {@link ChannelFuture} of the individual I/O operation which
     * is associated with the specified {@link Channel}.
     *
     * @return the matching {@link ChannelFuture} if found.
     *         {@code null} otherwise.
     */
    ChannelFuture find(Channel channel);

```

### 泛型扩展
```java

/**
 */
final class CombinedIterator<E> implements Iterator<E> {

    private final Iterator<E> i1;
    private final Iterator<E> i2;
    private Iterator<E> currentIterator;

    CombinedIterator(Iterator<E> i1, Iterator<E> i2) {
        if (i1 == null) {
            throw new NullPointerException("i1");
        }
        if (i2 == null) {
            throw new NullPointerException("i2");
        }
        this.i1 = i1;
        this.i2 = i2;
        currentIterator = i1;
    }
```

### 定义WeakHashMap

```java

/**
 * The default {@link ChannelPipeline} implementation.  It is usually created
 * by a {@link Channel} implementation when the {@link Channel} is created.
 */
final class DefaultChannelPipeline implements ChannelPipeline {

    static final InternalLogger logger = InternalLoggerFactory.getInstance(DefaultChannelPipeline.class);

    @SuppressWarnings("unchecked")
    private static final WeakHashMap<Class<?>, String>[] nameCaches =
            new WeakHashMap[Runtime.getRuntime().availableProcessors()];

    static {
        for (int i = 0; i < nameCaches.length; i ++) {
            nameCaches[i] = new WeakHashMap<Class<?>, String>();
        }
    }

```

### 