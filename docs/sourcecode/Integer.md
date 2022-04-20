---
title: java.lang.Integer
category: Java
tag:
  - Java源码
author: JavaInterview.cn
date: '2022-4-10'
---


## 成员变量
1. `@Native public static final int   MIN_VALUE = 0x80000000;`
2. `@Native public static final int   MAX_VALUE = 0x7fffffff;`
 
## 成员方法
1. `public static String toBinaryString(int i)`
2. `public static int sum(int a, int b)`

## 内部类
1. 缓存，数值<128时放在缓存中 
```java
    private static class IntegerCache {
        static final int low = -128;
        static final int high;
        static final Integer cache[];
        
        static {
            // high value may be configured by property
            int h = 127;
            String integerCacheHighPropValue =
                sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
            if (integerCacheHighPropValue != null) {
                try {
                    int i = parseInt(integerCacheHighPropValue);
                    i = Math.max(i, 127);
                    // Maximum array size is Integer.MAX_VALUE
                    h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
                } catch( NumberFormatException nfe) {
                    // If the property cannot be parsed into an int, ignore it.
                }
            }
            high = h;

            cache = new Integer[(high - low) + 1];
            int j = low;
            for(int k = 0; k < cache.length; k++)
                cache[k] = new Integer(j++);

            // range [-128, 127] must be interned (JLS7 5.1.7)
            assert IntegerCache.high >= 127;
        }
```