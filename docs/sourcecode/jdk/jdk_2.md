---
title: JDK代码写法总结2
categories: 
  - sourcecode
  - jdk
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-06-23 18:23:52
permalink: /pages/4358ab/
---

## 总结2

### 类中啥都能放

```java
public class File
    implements Serializable, Comparable<File>
{

    /**
     * The FileSystem object representing the platform's local file system.
     */
    private static final FileSystem fs = DefaultFileSystem.getFileSystem();

    /**
     * This abstract pathname's normalized pathname string. A normalized
     * pathname string uses the default name-separator character and does not
     * contain any duplicate or redundant separators.
     *
     * @serial
     */
    private final String path;

    /**
     * Enum type that indicates the status of a file path.
     */
    private static enum PathStatus { INVALID, CHECKED };

    /**
     * The flag indicating whether the file path is invalid.
     */
    private transient PathStatus status = null;

```

### 实现多个接口

```java

public abstract class OutputStream implements Closeable, Flushable {
    /**
     * Writes the specified byte to this output stream. The general
     * contract for <code>write</code> is that one byte is written
     * to the output stream. The byte to be written is the eight
     * low-order bits of the argument <code>b</code>. The 24
     * high-order bits of <code>b</code> are ignored.
     * <p>
     * Subclasses of <code>OutputStream</code> must provide an
     * implementation for this method.
     *
     * @param      b   the <code>byte</code>.
     * @exception  IOException  if an I/O error occurs. In particular,
     *             an <code>IOException</code> may be thrown if the
     *             output stream has been closed.
     */
    public abstract void write(int b) throws IOException;
```

### Object锁
```java
public class RandomAccessFile implements DataOutput, DataInput, Closeable {

    private FileDescriptor fd;
    private FileChannel channel = null;
    private boolean rw;

    /**
     * The path of the referenced file
     * (null if the stream is created with a file descriptor)
     */
    private final String path;

    private Object closeLock = new Object();
    private volatile boolean closed = false;

    private static final int O_RDONLY = 1;
    private static final int O_RDWR =   2;
    private static final int O_SYNC =   4;
    private static final int O_DSYNC =  8;
```