---
title: Kafka代码写法总结4
categories: 
  - sourcecode
  - kafka
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 总结4

### AbstractConfig配置 
```java
public class AbstractConfig {

    private final Logger log = LoggerFactory.getLogger(getClass());

    /**
     * Configs for which values have been requested, used to detect unused configs.
     * This set must be concurrent modifiable and iterable. It will be modified
     * when directly accessed or as a result of RecordingMap access.
     */
    private final Set<String> used = ConcurrentHashMap.newKeySet();

    /* the original values passed in by the user */
    private final Map<String, ?> originals;

    /* the parsed values */
    private final Map<String, Object> values;

    private final ConfigDef definition;

    public static final String CONFIG_PROVIDERS_CONFIG = "config.providers";

    private static final String CONFIG_PROVIDERS_PARAM = ".param.";

```
