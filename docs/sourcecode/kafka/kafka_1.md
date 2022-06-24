---
title: Kafka代码写法总结1
categories: 
  - sourcecode
  - kafka
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-06-08 09:00:58
permalink: /pages/2f686f/
---

## 总结1

### k,v泛型

```java
public class AdminApiDriver<K, V> {
    private final Logger log;
    private final long retryBackoffMs;
    private final long deadlineMs;
    private final AdminApiHandler<K, V> handler;
    private final AdminApiFuture<K, V> future;

    private final BiMultimap<ApiRequestScope, K> lookupMap = new BiMultimap<>();
    private final BiMultimap<FulfillmentScope, K> fulfillmentMap = new BiMultimap<>();
    private final Map<ApiRequestScope, RequestState> requestStates = new HashMap<>();




    /**
     * Helper class which maintains a bi-directional mapping from a key to a set of values.
     * Each value can map to one and only one key, but many values can be associated with
     * a single key.
     *
     * @param <K> The key type
     * @param <V> The value type
     */
    private static class BiMultimap<K, V> {
        private final Map<V, K> reverseMap = new HashMap<>();
        private final Map<K, Set<V>> map = new HashMap<>();

        void put(K key, V value) {
            remove(value);
            reverseMap.put(value, key);
            map.computeIfAbsent(key, k -> new HashSet<>()).add(value);
        }

        void remove(V value) {
            K key = reverseMap.remove(value);
            if (key != null) {
                Set<V> set = map.get(key);
                if (set != null) {
                    set.remove(value);
                    if (set.isEmpty()) {
                        map.remove(key);
                    }
                }
            }
        }

        Optional<K> getKey(V value) {
            return Optional.ofNullable(reverseMap.get(value));
        }

        Set<Map.Entry<K, Set<V>>> entrySet() {
            return map.entrySet();
        }
    }
``` 
