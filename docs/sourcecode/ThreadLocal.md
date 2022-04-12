---
title: java.lang.ThreadLocal<T>
category: Java
tag:
  - Java基础
author: interview
date: '2022-4-10'
---


## 1. 成员变量
1. `AtomicInteger nextHashCode`获得下个hashcode


## 2. 成员函数
1. `get()`从`ThreadLocalMap`中取元素`ThreadLocalMap.Entry`,`ThreadLocalMap`没有元素时，设置初始化值
    ```java
        private T setInitialValue() {
            T value = initialValue();
            Thread t = Thread.currentThread();
            ThreadLocalMap map = getMap(t);
            if (map != null)
                map.set(this, value);
            else
                createMap(t, value);
            return value;
        }
    ```
2. `remove()`从`ThreadLocalMap`中`remove(this)`


## 3. 内部类
1. `static final class SuppliedThreadLocal<T> extends ThreadLocal<T>`在ThreadLocal默认初始化时使用
    ```java
        public static <S> ThreadLocal<S> withInitial(Supplier<? extends S> supplier) {
            return new SuppliedThreadLocal<>(supplier);
        }
    
    ```
2. `static class ThreadLocalMap`类用于存储数据，此类中还有静态类
    ```java
        static class Entry extends WeakReference<ThreadLocal<?>> {
            /** The value associated with this ThreadLocal. */
            Object value;

            Entry(ThreadLocal<?> k, Object v) {
                super(k);
                value = v;
            }
        }

    ```