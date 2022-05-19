---
title: Netty代码写法总结6
categories: 
  - sourcecode
  - netty
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-18 23:34:30
permalink: /pages/173567/
---


## 总结6

### 接口泛型，输入输出

```java


/**
 * Maintains the mapping from the objects of one type to the objects of the other type.
 */
public interface Mapping<IN, OUT> {

    /**
     * Returns mapped value of the specified input.
     */
    OUT map(IN input);
}
```

### 返回类型为空

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


### 空参方法

```java


/**
 * A handle associated with a {@link TimerTask} that is returned by a
 * {@link Timer}.
 */
public interface Timeout {

    /**
     * Returns the {@link Timer} that created this handle.
     */
    Timer timer();

    /**
     * Returns the {@link TimerTask} which is associated with this handle.
     */
    TimerTask task();

    /**
     * Returns {@code true} if and only if the {@link TimerTask} associated
     * with this handle has been expired.
     */
    boolean isExpired();

    /**
     * Returns {@code true} if and only if the {@link TimerTask} associated
     * with this handle has been cancelled.
     */
    boolean isCancelled();

    /**
     * Attempts to cancel the {@link TimerTask} associated with this handle.
     * If the task has been executed or cancelled already, it will return with
     * no side effect.
     *
     * @return True if the cancellation completed successfully, otherwise false
     */
    boolean cancel();
}

```

### ForkJoin定义

```java

@SuppressWarnings("all")
public abstract class ForkJoinTask<V> implements Future<V>, Serializable {


    /** The run status of this task */
    volatile int status; // accessed directly by pool and workers
    static final int DONE_MASK   = 0xf0000000;  // mask out non-completion bits
    static final int NORMAL      = 0xf0000000;  // must be negative
    static final int CANCELLED   = 0xc0000000;  // must be < NORMAL
    static final int EXCEPTIONAL = 0x80000000;  // must be < CANCELLED
    static final int SIGNAL      = 0x00010000;  // must be >= 1 << 16
    static final int SMASK       = 0x0000ffff;  // short bits for tags


    
```

### Synchronized锁

```java


    /**
     * Marks completion and wakes up threads waiting to join this
     * task.
     *
     * @param completion one of NORMAL, CANCELLED, EXCEPTIONAL
     * @return completion status on exit
     */
    private int setCompletion(int completion) {
        for (int s;;) {
            if ((s = status) < 0)
                return s;
            if (U.compareAndSwapInt(this, STATUS, s, s | completion)) {
                if ((s >>> 16) != 0)
                    synchronized (this) { notifyAll(); }
                return completion;
            }
        }
    }
```

### 自定义线程类

```java


@SuppressWarnings("all")
public class ForkJoinWorkerThread extends Thread {
    /*
     * ForkJoinWorkerThreads are managed by ForkJoinPools and perform
     * ForkJoinTasks. For explanation, see the internal documentation
     * of class ForkJoinPool.
     *
     * This class just maintains links to its pool and WorkQueue.  The
     * pool field is set immediately upon construction, but the
     * workQueue field is not set until a call to registerWorker
     * completes. This leads to a visibility race, that is tolerated
     * by requiring that the workQueue field is only accessed by the
     * owning thread.
     */

    final ForkJoinPool pool;                // the pool this thread works in
    final ForkJoinPool.WorkQueue workQueue; // work-stealing mechanics

    /**
     * Creates a ForkJoinWorkerThread operating in the given pool.
     *
     * @param pool the pool this thread works in
     * @throws NullPointerException if pool is null
     */
    protected ForkJoinWorkerThread(ForkJoinPool pool) {
        // Use a placeholder until a useful name can be set in registerWorker
        super("aForkJoinWorkerThread");
        this.pool = pool;
        this.workQueue = pool.registerWorker(this);
    }
```

### 类内部写静态接口，基础接口扩展方法

```java

@SuppressWarnings("all")
public class ConcurrentHashMapV8<K,V>
        implements ConcurrentMap<K,V>, Serializable {
    private static final long serialVersionUID = 7249069246763182397L;

    /**
     * An object for traversing and partitioning elements of a source.
     * This interface provides a subset of the functionality of JDK8
     * java.util.Spliterator.
     */
    public static interface ConcurrentHashMapSpliterator<T> {
        /**
         * If possible, returns a new spliterator covering
         * approximately one half of the elements, which will not be
         * covered by this spliterator. Returns null if cannot be
         * split.
         */
        ConcurrentHashMapSpliterator<T> trySplit();
        /**
         * Returns an estimate of the number of elements covered by
         * this Spliterator.
         */
        long estimateSize();

        /** Applies the action to each untraversed element */
        void forEachRemaining(Action<? super T> action);
        /** If an element remains, applies the action and returns true. */
        boolean tryAdvance(Action<? super T> action);
    }

```
