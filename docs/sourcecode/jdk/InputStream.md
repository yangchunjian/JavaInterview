---
title: java.io.InputStream
category: Java
author: JavaInterview.cn
categories: 
  - sourcecode
tags: 
  - Java
  - InputStream
date: 2022-04-28 22:48:07
permalink: /pages/10d215/
---


## 定义
1. `public abstract class InputStream implements Closeable {`



## 成员变量
1. 缓存量
```java
    // MAX_SKIP_BUFFER_SIZE is used to determine the maximum buffer size to
    // use when skipping.
    private static final int MAX_SKIP_BUFFER_SIZE = 2048;

```


## 成员方法
1. read方法
```java
public abstract int read() throws IOException;
```

2. 可用容量
```java
public int available() throws IOException {
```

3. skip方法
```java
    /**
     * Skips over and discards <code>n</code> bytes of data from this input
     * stream. The <code>skip</code> method may, for a variety of reasons, end
     * up skipping over some smaller number of bytes, possibly <code>0</code>.
     * This may result from any of a number of conditions; reaching end of file
     * before <code>n</code> bytes have been skipped is only one possibility.
     * The actual number of bytes skipped is returned. If {@code n} is
     * negative, the {@code skip} method for class {@code InputStream} always
     * returns 0, and no bytes are skipped. Subclasses may handle the negative
     * value differently.
     *
     * <p> The <code>skip</code> method of this class creates a
     * byte array and then repeatedly reads into it until <code>n</code> bytes
     * have been read or the end of the stream has been reached. Subclasses are
     * encouraged to provide a more efficient implementation of this method.
     * For instance, the implementation may depend on the ability to seek.
     *
     * @param      n   the number of bytes to be skipped.
     * @return     the actual number of bytes skipped.
     * @exception  IOException  if the stream does not support seek,
     *                          or if some other I/O error occurs.
     */
    public long skip(long n) throws IOException
```
## 内部类
没有内部类