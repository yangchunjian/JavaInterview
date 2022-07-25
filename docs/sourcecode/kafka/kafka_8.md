---
title: Kafka代码写法总结8
categories: 
  - sourcecode
  - kafka
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
tags: 
  - Java
date: 2022-07-20 09:22:47
permalink: /pages/9da093/
---

## 总结8

### ConfigEntry类
```java
@InterfaceStability.Evolving
public class ConfigEntry {

    private final String name;
    private final String value;
    private final ConfigSource source;
    private final boolean isSensitive;
    private final boolean isReadOnly;
    private final List<ConfigSynonym> synonyms;
    private final ConfigType type;
    private final String documentation;
```