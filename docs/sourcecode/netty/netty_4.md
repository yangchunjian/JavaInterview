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

### 

