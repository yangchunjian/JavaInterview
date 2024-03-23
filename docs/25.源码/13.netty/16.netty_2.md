---
title: Netty代码写法总结2
categories: 
  - sourcecode
  - netty
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-10 08:55:43
permalink: /pages/d71570/
tag: 
  text: java
titleTag: Java
---

## 总结2

### 构造上下文

DNS解析,Map转Set

```java
    private final Set<Future<DnsResponse>> queriesInProgress =
            Collections.newSetFromMap(new IdentityHashMap<Future<DnsResponse>, Boolean>());
    private List<InetAddress> resolvedAddresses;
    private StringBuilder trace;
    private int allowedQueries;
    private boolean triedCNAME;

    DnsNameResolverContext(DnsNameResolver parent, String hostname, int port, Promise<InetSocketAddress> promise) {
        this.parent = parent;
        this.promise = promise;
        this.hostname = hostname;
        this.port = port;

        maxAllowedQueries = parent.maxQueriesPerResolve();
        resolveAddressTypes = parent.resolveAddressTypesUnsafe();
        allowedQueries = maxAllowedQueries;
    }
```

### 增加链路StringBuilder

```java

    private void addTrace(InetSocketAddress nameServerAddr, String msg) {
        if (trace == null) {
            trace = new StringBuilder(128);
        }

        trace.append(StringUtil.NEWLINE);
        trace.append("\tfrom ");
        trace.append(nameServerAddr);
        trace.append(": ");
        trace.append(msg);
    }
```

### 定义组Group的概念

```java
/**
 * A {@link NameResolverGroup} of {@link DnsNameResolver}s.
 */
public final class DnsNameResolverGroup extends NameResolverGroup<InetSocketAddress> {

    private final ChannelFactory<? extends DatagramChannel> channelFactory;
    private final InetSocketAddress localAddress;
    private final Iterable<InetSocketAddress> nameServerAddresses;

    public DnsNameResolverGroup(
            Class<? extends DatagramChannel> channelType,
            InetSocketAddress nameServerAddress) {
        this(channelType, ANY_LOCAL_ADDR, nameServerAddress);
    }

    
/**
 * Creates and manages {@link NameResolver}s so that each {@link EventExecutor} has its own resolver instance.
 */
public abstract class NameResolverGroup<T extends SocketAddress> implements Closeable {


```


### 移位操作及for(;;)死循环

```java

    private int allocateId() {
        int id = ThreadLocalRandom.current().nextInt(parent.promises.length());
        final int maxTries = parent.promises.length() << 1;
        int tries = 0;
        for (;;) {
            if (parent.promises.compareAndSet(id, null, this)) {
                return id;
            }

            id = id + 1 & 0xFFFF;

            if (++ tries >= maxTries) {
                throw new IllegalStateException("query ID space exhausted: " + question);
            }
        }
    }
```


