---
title: Netty代码写法总结12
categories: 
  - sourcecode
  - netty
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-06-22 19:56:46
permalink: /pages/6a587f/
tag: 
  text: java
---


## 总结12

### throws多个异常

```java

/**
 * Abstract {@link Future} implementation which does not allow for cancellation.
 *
 * @param <V>
 */
public abstract class AbstractFuture<V> implements Future<V> {

    @Override
    public V get() throws InterruptedException, ExecutionException {
        await();

        Throwable cause = cause();
        if (cause == null) {
            return getNow();
        }
        throw new ExecutionException(cause);
    }

    @Override
    public V get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
        if (await(timeout, unit)) {
            Throwable cause = cause();
            if (cause == null) {
                return getNow();
            }
            throw new ExecutionException(cause);
        }
        throw new TimeoutException();
    }
}

```

### 重新赋值

```java

    @Override
    public ProgressivePromise<V> setProgress(long progress, long total) {
        if (total < 0) {
            // total unknown
            total = -1; // normalize
            if (progress < 0) {
                throw new IllegalArgumentException("progress: " + progress + " (expected: >= 0)");
            }
        } else if (progress < 0 || progress > total) {
            throw new IllegalArgumentException(
                    "progress: " + progress + " (expected: 0 <= progress <= total (" + total + "))");
        }

        if (isDone()) {
            throw new IllegalStateException("complete already");
        }

        notifyProgressiveListeners(progress, total);
        return this;
    }

```

### 大方法拆成多个小方法

```java

    @Override
    public Promise<V> sync() throws InterruptedException {
        await();
        rethrowIfFailed();
        return this;
    }

    @Override
    public Promise<V> syncUninterruptibly() {
        awaitUninterruptibly();
        rethrowIfFailed();
        return this;
    }

    private void rethrowIfFailed() {
        Throwable cause = cause();
        if (cause == null) {
            return;
        }

        PlatformDependent.throwException(cause);
    }
```


### 