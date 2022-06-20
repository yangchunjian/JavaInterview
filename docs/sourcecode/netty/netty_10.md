---
title: Netty代码写法总结10
date: 2022-06-20 22:12:19
permalink: /pages/7f0581/
categories:
  - sourcecode
  - netty
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 总结10

### Runnable初始化
 
```java
public abstract class AbstractOioChannel extends AbstractChannel {

    protected static final int SO_TIMEOUT = 1000;

    private volatile boolean readPending;

    private final Runnable readTask = new Runnable() {
        @Override
        public void run() {
            if (!isReadPending() && !config().isAutoRead()) {
                // ChannelConfig.setAutoRead(false) was called in the meantime so just return
                return;
            }

            setReadPending(false);
            doRead();
        }
    };
```
