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


### Selector类
```java
public class Selector implements Selectable, AutoCloseable {

    public static final long NO_IDLE_TIMEOUT_MS = -1;
    public static final int NO_FAILED_AUTHENTICATION_DELAY = 0;

    private enum CloseMode {
        GRACEFUL(true),            // process outstanding buffered receives, notify disconnect
        NOTIFY_ONLY(true),         // discard any outstanding receives, notify disconnect
        DISCARD_NO_NOTIFY(false);  // discard any outstanding receives, no disconnect notification

        boolean notifyDisconnect;

        CloseMode(boolean notifyDisconnect) {
            this.notifyDisconnect = notifyDisconnect;
        }
    }

    private final Logger log;
    private final java.nio.channels.Selector nioSelector;
    private final Map<String, KafkaChannel> channels;
    private final Set<KafkaChannel> explicitlyMutedChannels;
    private boolean outOfMemory;
    private final List<NetworkSend> completedSends;
    private final LinkedHashMap<String, NetworkReceive> completedReceives;
    private final Set<SelectionKey> immediatelyConnectedKeys;
    private final Map<String, KafkaChannel> closingChannels;
    private Set<SelectionKey> keysWithBufferedRead;
    private final Map<String, ChannelState> disconnected;
    private final List<String> connected;
    private final List<String> failedSends;
    private final Time time;
    private final SelectorMetrics sensors;
    private final ChannelBuilder channelBuilder;
    private final int maxReceiveSize;
    private final boolean recordTimePerConnection;
    private final IdleExpiryManager idleExpiryManager;
    private final LinkedHashMap<String, DelayedAuthenticationFailureClose> delayedClosingChannels;
    private final MemoryPool memoryPool;
    private final long lowMemThreshold;
    private final int failedAuthenticationDelayMs;

    //indicates if the previous call to poll was able to make progress in reading already-buffered data.
    //this is used to prevent tight loops when memory is not available to read any more data
    private boolean madeReadProgressLastPoll = true;

```

### 批量操作

```java
public final class ProducerBatch {
    private static final Logger log = LoggerFactory.getLogger(ProducerBatch.class);
    final long createdMs;
    final TopicPartition topicPartition;
    final ProduceRequestResult produceFuture;
    private final List<ProducerBatch.Thunk> thunks;
    private final MemoryRecordsBuilder recordsBuilder;
    private final AtomicInteger attempts;
    private final boolean isSplitBatch;
    private final AtomicReference<ProducerBatch.FinalState> finalState;
    int recordCount;
    int maxRecordSize;
    private long lastAttemptMs;
    private long lastAppendTime;
    private long drainedMs;
    private boolean retry;
    private boolean reopened;
```

### ErrorLoggingCallback错误回调类

```java
public class ErrorLoggingCallback implements Callback {
    private static final Logger log = LoggerFactory.getLogger(ErrorLoggingCallback.class);
    private String topic;
    private byte[] key;
    private byte[] value;
    private int valueLength;
    private boolean logAsString;

    public ErrorLoggingCallback(String topic, byte[] key, byte[] value, boolean logAsString) {
        this.topic = topic;
        this.key = key;
        if(logAsString) {
            this.value = value;
        }

        this.valueLength = value == null?-1:value.length;
        this.logAsString = logAsString;
    }

    public void onCompletion(RecordMetadata metadata, Exception e) {
        if(e != null) {
            String keyString = this.key == null?"null":(this.logAsString?new String(this.key, StandardCharsets.UTF_8):this.key.length + " bytes");
            String valueString = this.valueLength == -1?"null":(this.logAsString?new String(this.value, StandardCharsets.UTF_8):this.valueLength + " bytes");
            log.error("Error when sending message to topic {} with key: {}, value: {} with error:", new Object[]{this.topic, keyString, valueString, e});
        }

    }
}

```