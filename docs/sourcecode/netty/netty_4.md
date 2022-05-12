---
title: Netty代码写法总结4
categories: 
  - sourcecode
  - netty
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-12 21:54:30
permalink: /pages/a4269e/
---

## 总结4

### Final类并在构造函数里验证空参
```java

public final class ProxyConnectionEvent {

    private final String protocol;
    private final String authScheme;
    private final SocketAddress proxyAddress;
    private final SocketAddress destinationAddress;
    private String strVal;

    /**
     * Creates a new event that indicates a successful connection attempt to the destination address.
     */
    public ProxyConnectionEvent(
            String protocol, String authScheme, SocketAddress proxyAddress, SocketAddress destinationAddress) {
        if (protocol == null) {
            throw new NullPointerException("protocol");
        }
        if (authScheme == null) {
            throw new NullPointerException("authScheme");
        }
        if (proxyAddress == null) {
            throw new NullPointerException("proxyAddress");
        }
        if (destinationAddress == null) {
            throw new NullPointerException("destinationAddress");
        }

        this.protocol = protocol;
        this.authScheme = authScheme;
        this.proxyAddress = proxyAddress;
        this.destinationAddress = destinationAddress;
    }
```

### Epoll调用原生方法
 
```java
/**
 * Tells if <a href="http://netty.io/wiki/native-transports.html">{@code netty-transport-native-epoll}</a> is supported.
 */
public final class Epoll {

    private static final Throwable UNAVAILABILITY_CAUSE;

    static  {
        Throwable cause = null;
        int epollFd = -1;
        int eventFd = -1;
        try {
            epollFd = Native.epollCreate();
            eventFd = Native.eventFd();
        } catch (Throwable t) {
            cause = t;
        } finally {
            if (epollFd != -1) {
                try {
                    Native.close(epollFd);
                } catch (Exception ignore) {
                    // ignore
                }
            }
            if (eventFd != -1) {
                try {
                    Native.close(eventFd);
                } catch (Exception ignore) {
                    // ignore
                }
            }
        }

        if (cause != null) {
            UNAVAILABILITY_CAUSE = cause;
        } else {
            UNAVAILABILITY_CAUSE = null;
        }
    }
    
```
原生方法： 
```java

final class Native {

    static {
        String name = SystemPropertyUtil.get("os.name").toLowerCase(Locale.UK).trim();
        if (!name.startsWith("linux")) {
            throw new IllegalStateException("Only supported on Linux");
        }
        NativeLibraryLoader.load("netty-transport-native-epoll", PlatformDependent.getClassLoader(Native.class));
    }
    

    public static native int eventFd();
    public static native void eventFdWrite(int fd, long value);
    public static native void eventFdRead(int fd);
    public static native int epollCreate();

```
