---
title: java.io.File
date: 2022-04-23 11:15:32
permalink: /pages/f292a7/
categories: 
  - sourcecode
author: 
  name: JavaInterview.cn
  link: http://JavaInterview.cn
tags: 
  - 
---


## 定义
1. `public class File implements Serializable, Comparable<File>`传输和比较
2. `private static final FileSystem fs = DefaultFileSystem.getFileSystem();`设置为`UnixFileSystem`


## 原生函数
1. `public native boolean checkAccess(File f, int access);`检查文件操作权限
2. `public native boolean createFileExclusively(String path) throws IOException;`创建文件底层也是原生方法
3. `public native boolean createDirectory(File f);` 创建目录
3. 删除逻辑：
```java
    public boolean delete(File f) {
        // Keep canonicalization caches in sync after file deletion
        // and renaming operations. Could be more clever than this
        // (i.e., only remove/update affected entries) but probably
        // not worth it since these entries expire after 30 seconds
        // anyway.
        cache.clear();
        javaHomePrefixCache.clear();
        return delete0(f);
    }

```
```java

    // Caches for canonicalization results to improve startup performance.
    // The first cache handles repeated canonicalizations of the same path
    // name. The prefix cache handles repeated canonicalizations within the
    // same directory, and must not create results differing from the true
    // canonicalization algorithm in canonicalize_md.c. For this reason the
    // prefix cache is conservative and is not used for complex path names.
    private ExpiringCache cache = new ExpiringCache();
    // On Unix symlinks can jump anywhere in the file system, so we only
    // treat prefixes in java.home as trusted and cacheable in the
    // canonicalization algorithm
    private ExpiringCache javaHomePrefixCache = new ExpiringCache();
```

```java
    private native boolean delete0(File f); //原生删除方法 
```



## 3. 内部类
1.  TempDirectory类：
```java
    private static class TempDirectory {
        private TempDirectory() { }

        // temporary directory location
        private static final File tmpdir = new File(AccessController
            .doPrivileged(new GetPropertyAction("java.io.tmpdir")));
        static File location() {
            return tmpdir;
        }

        // file name generation
        private static final SecureRandom random = new SecureRandom();
        static File generateFile(String prefix, String suffix, File dir)
            throws IOException
        {
            long n = random.nextLong();
            if (n == Long.MIN_VALUE) {
                n = 0;      // corner case
            } else {
                n = Math.abs(n);
            }

            // Use only the file name from the supplied prefix
            prefix = (new File(prefix)).getName();

            String name = prefix + Long.toString(n) + suffix;
            File f = new File(dir, name);
            if (!name.equals(f.getName()) || f.isInvalid()) {
                if (System.getSecurityManager() != null)
                    throw new IOException("Unable to create temporary file");
                else
                    throw new IOException("Unable to create temporary file, " + f);
            }
            return f;
        }
    }

```
2. PathStatus类的定义：
```java

    /**
     * Enum type that indicates the status of a file path.
     */
    private static enum PathStatus { INVALID, CHECKED };
```