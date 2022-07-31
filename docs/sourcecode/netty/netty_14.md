---
title: Netty代码写法总结14
categories: 
  - sourcecode
  - netty
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
date: 2022-07-31 15:59:44
permalink: /pages/914595/
---


## 总结14

### PromiseTask类定义

```java
class PromiseTask<V> extends DefaultPromise<V> implements RunnableFuture<V> {

    static <T> Callable<T> toCallable(Runnable runnable, T result) {
        return new RunnableAdapter<T>(runnable, result);
    }

    private static final class RunnableAdapter<T> implements Callable<T> {
        final Runnable task;
        final T result;

        RunnableAdapter(Runnable task, T result) {
            this.task = task;
            this.result = result;
        }

        @Override
        public T call() {
            task.run();
            return result;
        }

        @Override
        public String toString() {
            return "Callable(task: " + task + ", result: " + result + ')';
        }
    }

    protected final Callable<V> task;
```

### ResourceLeak接口定义，方法都返回void

```java
public interface ResourceLeak {
    /**
     * Records the caller's current stack trace so that the {@link ResourceLeakDetector} can tell where the leaked
     * resource was accessed lastly. This method is a shortcut to {@link #record(Object) record(null)}.
     */
    void record();

    /**
     * Records the caller's current stack trace and the specified additional arbitrary information
     * so that the {@link ResourceLeakDetector} can tell where the leaked resource was accessed lastly.
     */
    void record(Object hint);

    /**
     * Close the leak so that {@link ResourceLeakDetector} does not warn about leaked resources.
     *
     * @return {@code true} if called first time, {@code false} if called already
     */
    boolean close();
}

```