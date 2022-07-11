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

### Metadata
```java
public class Metadata implements Closeable {
    private final Logger log;
    private final long refreshBackoffMs;
    private final long metadataExpireMs;
    private int updateVersion;  // bumped on every metadata response
    private int requestVersion; // bumped on every new topic addition
    private long lastRefreshMs;
    private long lastSuccessfulRefreshMs;
    private KafkaException fatalException;
    private Set<String> invalidTopics;
    private Set<String> unauthorizedTopics;
    private MetadataCache cache = MetadataCache.empty();
    private boolean needFullUpdate;
    private boolean needPartialUpdate;
    private final ClusterResourceListeners clusterResourceListeners;
    private boolean isClosed;
    private final Map<TopicPartition, Integer> lastSeenLeaderEpochs;
```

### KafkaFutureImpl任务

```java

/**
 * A flexible future which supports call chaining and other asynchronous programming patterns.
 */
public class KafkaFutureImpl<T> extends KafkaFuture<T> {

    private final KafkaCompletableFuture<T> completableFuture;

    private final boolean isDependant;

    public KafkaFutureImpl() {
        this(false, new KafkaCompletableFuture<>());
    }

    private KafkaFutureImpl(boolean isDependant, KafkaCompletableFuture<T> completableFuture) {
        this.isDependant = isDependant;
        this.completableFuture = completableFuture;
    }
```

### DataInputStreamReadable数据输入流
```java

public class DataInputStreamReadable implements Readable, Closeable {
    protected final DataInputStream input;

    public DataInputStreamReadable(DataInputStream input) {
        this.input = input;
    }

    @Override
    public byte readByte() {
        try {
            return input.readByte();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public short readShort() {
        try {
            return input.readShort();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public int readInt() {
        try {
            return input.readInt();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public long readLong() {
        try {
            return input.readLong();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public double readDouble() {
        try {
            return input.readDouble();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void readArray(byte[] arr) {
        try {
            input.readFully(arr);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public int readUnsignedVarint() {
        try {
            return ByteUtils.readUnsignedVarint(input);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ByteBuffer readByteBuffer(int length) {
        byte[] arr = new byte[length];
        readArray(arr);
        return ByteBuffer.wrap(arr);
    }

    @Override
    public int readVarint() {
        try {
            return ByteUtils.readVarint(input);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public long readVarlong() {
        try {
            return ByteUtils.readVarlong(input);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public int remaining() {
        try {
            return input.available();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void close() {
        try {
            input.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}

```