---
title: Kafka代码写法总结6
categories: 
  - sourcecode
  - kafka
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
tags: 
  - Java
date: 2022-07-13 11:02:26
permalink: /pages/d80477/
---

## 总结6

### 有循环依赖的情况

```java

/**
 * A record that can be serialized and deserialized according to a pre-defined schema
 */
public class Struct {
    private final Schema schema;
    private final Object[] values;


/**
 * The schema for a compound record definition
 */
public class Schema extends Type {
    private final static Object[] NO_VALUES = new Object[0];

    private final BoundField[] fields;
    private final Map<String, BoundField> fieldsByName;
    private final boolean tolerateMissingFieldsWithDefaults;
    private final Struct cachedStruct;



/**
 * A serializable type
 */
public abstract class Type {

    /**
     * Write the typed object to the buffer
     *
     * @throws SchemaException If the object is not valid for its type
     */
    public abstract void write(ByteBuffer buffer, Object o);

    /**
     * Read the typed object from the buffer
     *
     * @throws SchemaException If the object is not valid for its type
     */
    public abstract Object read(ByteBuffer buffer);

    /**
     * Validate the object. If succeeded return its typed object.
     *
     * @throws SchemaException If validation failed
     */
    public abstract Object validate(Object o);

    /**
     * Return the size of the object in bytes
     */
    public abstract int sizeOf(Object o);

    /**
     * Check if the type supports null values
     * @return whether or not null is a valid value for the type implementation
     */
    public boolean isNullable() {
        return false;
    }

    /**
     * If the type is an array, return the type of the array elements.  Otherwise, return empty.
     */
    public Optional<Type> arrayElementType() {
        return Optional.empty();
    }

    /**
     * Returns true if the type is an array.
     */
    public final boolean isArray() {
        return arrayElementType().isPresent();
    }

public class BoundField {
    public final Field def;
    final int index;
    final Schema schema;

```

### Action类
```java
@InterfaceStability.Evolving
public class Action {

    private final ResourcePattern resourcePattern;
    private final AclOperation operation;
    private final int resourceReferenceCount;
    private final boolean logIfAllowed;
    private final boolean logIfDenied;


```

### Optional类包装
```java
@InterfaceStability.Evolving
public class AclCreateResult {
    public static final AclCreateResult SUCCESS = new AclCreateResult();

    private final ApiException exception;

    private AclCreateResult() {
        this(null);
    }

    public AclCreateResult(ApiException exception) {
        this.exception = exception;
    }

    /**
     * Returns any exception during create. If exception is empty, the request has succeeded.
     */
    public Optional<ApiException> exception() {
        return exception == null ? Optional.empty() : Optional.of(exception);
    }
}

```


### AbortTransactionSpec类
```java
@InterfaceStability.Evolving
public class AbortTransactionSpec {
    private final TopicPartition topicPartition;
    private final long producerId;
    private final short producerEpoch;
    private final int coordinatorEpoch;


```

### FeatureMetadata类
```java

/**
 * Encapsulates details about finalized as well as supported features. This is particularly useful
 * to hold the result returned by the {@link Admin#describeFeatures(DescribeFeaturesOptions)} API.
 */
public class FeatureMetadata {

    private final Map<String, FinalizedVersionRange> finalizedFeatures;

    private final Optional<Long> finalizedFeaturesEpoch;

    private final Map<String, SupportedVersionRange> supportedFeatures;

```

### 消费者配置
```java

/**
 * The consumer configuration keys
 */
public class ConsumerConfig extends AbstractConfig {
    private static final ConfigDef CONFIG;

    // a list contains all the assignor names that only assign subscribed topics to consumer. Should be updated when new assignor added.
    // This is to help optimize ConsumerCoordinator#performAssignment method
    public static final List<String> ASSIGN_FROM_SUBSCRIBED_ASSIGNORS =
        Collections.unmodifiableList(Arrays.asList(
            RANGE_ASSIGNOR_NAME,
            ROUNDROBIN_ASSIGNOR_NAME,
            STICKY_ASSIGNOR_NAME,
            COOPERATIVE_STICKY_ASSIGNOR_NAME
        ));
```

### Consumer接口 
```java
/**
 * @see KafkaConsumer
 * @see MockConsumer
 */
public interface Consumer<K, V> extends Closeable {

    /**
     * @see KafkaConsumer#assignment()
     */
    Set<TopicPartition> assignment();

    /**
     * @see KafkaConsumer#subscription()
     */
    Set<String> subscription();

    /**
     * @see KafkaConsumer#subscribe(Collection)
     */
    void subscribe(Collection<String> topics);

    /**
     * @see KafkaConsumer#subscribe(Collection, ConsumerRebalanceListener)
     */
    void subscribe(Collection<String> topics, ConsumerRebalanceListener callback);

    /**
     * @see KafkaConsumer#assign(Collection)
     */
    void assign(Collection<TopicPartition> partitions);

    /**
    * @see KafkaConsumer#subscribe(Pattern, ConsumerRebalanceListener)
    */
    void subscribe(Pattern pattern, ConsumerRebalanceListener callback);

    /**
    * @see KafkaConsumer#subscribe(Pattern)
    */
    void subscribe(Pattern pattern);

    /**
     * @see KafkaConsumer#unsubscribe()
     */
    void unsubscribe();

    /**
     * @see KafkaConsumer#poll(long)
     */
    @Deprecated
    ConsumerRecords<K, V> poll(long timeout);

    /**
     * @see KafkaConsumer#poll(Duration)
     */
    ConsumerRecords<K, V> poll(Duration timeout);

    /**
     * @see KafkaConsumer#commitSync()
     */
    void commitSync();

    /**
     * @see KafkaConsumer#commitSync(Duration)
     */
    void commitSync(Duration timeout);

    /**
     * @see KafkaConsumer#commitSync(Map)
     */
    void commitSync(Map<TopicPartition, OffsetAndMetadata> offsets);

    /**
     * @see KafkaConsumer#commitSync(Map, Duration)
     */
    void commitSync(final Map<TopicPartition, OffsetAndMetadata> offsets, final Duration timeout);
    /**
     * @see KafkaConsumer#commitAsync()
     */
    void commitAsync();

    /**
     * @see KafkaConsumer#commitAsync(OffsetCommitCallback)
     */
    void commitAsync(OffsetCommitCallback callback);

    /**
     * @see KafkaConsumer#commitAsync(Map, OffsetCommitCallback)
     */
    void commitAsync(Map<TopicPartition, OffsetAndMetadata> offsets, OffsetCommitCallback callback);

    /**
     * @see KafkaConsumer#seek(TopicPartition, long)
     */
    void seek(TopicPartition partition, long offset);

    /**
     * @see KafkaConsumer#seek(TopicPartition, OffsetAndMetadata)
     */
    void seek(TopicPartition partition, OffsetAndMetadata offsetAndMetadata);

    /**
     * @see KafkaConsumer#seekToBeginning(Collection)
     */
    void seekToBeginning(Collection<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#seekToEnd(Collection)
     */
    void seekToEnd(Collection<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#position(TopicPartition)
     */
    long position(TopicPartition partition);
    
    /**
     * @see KafkaConsumer#position(TopicPartition, Duration)
     */
    long position(TopicPartition partition, final Duration timeout);

    /**
     * @see KafkaConsumer#committed(TopicPartition)
     */
    @Deprecated
    OffsetAndMetadata committed(TopicPartition partition);

    /**
     * @see KafkaConsumer#committed(TopicPartition, Duration)
     */
    @Deprecated
    OffsetAndMetadata committed(TopicPartition partition, final Duration timeout);

    /**
     * @see KafkaConsumer#committed(Set)
     */
    Map<TopicPartition, OffsetAndMetadata> committed(Set<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#committed(Set, Duration)
     */
    Map<TopicPartition, OffsetAndMetadata> committed(Set<TopicPartition> partitions, final Duration timeout);

    /**
     * @see KafkaConsumer#metrics()
     */
    Map<MetricName, ? extends Metric> metrics();

    /**
     * @see KafkaConsumer#partitionsFor(String)
     */
    List<PartitionInfo> partitionsFor(String topic);

    /**
     * @see KafkaConsumer#partitionsFor(String, Duration)
     */
    List<PartitionInfo> partitionsFor(String topic, Duration timeout);

    /**
     * @see KafkaConsumer#listTopics()
     */
    Map<String, List<PartitionInfo>> listTopics();

    /**
     * @see KafkaConsumer#listTopics(Duration)
     */
    Map<String, List<PartitionInfo>> listTopics(Duration timeout);

    /**
     * @see KafkaConsumer#paused()
     */
    Set<TopicPartition> paused();

    /**
     * @see KafkaConsumer#pause(Collection)
     */
    void pause(Collection<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#resume(Collection)
     */
    void resume(Collection<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#offsetsForTimes(Map)
     */
    Map<TopicPartition, OffsetAndTimestamp> offsetsForTimes(Map<TopicPartition, Long> timestampsToSearch);

    /**
     * @see KafkaConsumer#offsetsForTimes(Map, Duration)
     */
    Map<TopicPartition, OffsetAndTimestamp> offsetsForTimes(Map<TopicPartition, Long> timestampsToSearch, Duration timeout);

    /**
     * @see KafkaConsumer#beginningOffsets(Collection)
     */
    Map<TopicPartition, Long> beginningOffsets(Collection<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#beginningOffsets(Collection, Duration)
     */
    Map<TopicPartition, Long> beginningOffsets(Collection<TopicPartition> partitions, Duration timeout);

    /**
     * @see KafkaConsumer#endOffsets(Collection)
     */
    Map<TopicPartition, Long> endOffsets(Collection<TopicPartition> partitions);

    /**
     * @see KafkaConsumer#endOffsets(Collection, Duration)
     */
    Map<TopicPartition, Long> endOffsets(Collection<TopicPartition> partitions, Duration timeout);

    /**
     * @see KafkaConsumer#currentLag(TopicPartition)
     */
    OptionalLong currentLag(TopicPartition topicPartition);

    /**
     * @see KafkaConsumer#groupMetadata()
     */
    ConsumerGroupMetadata groupMetadata();

    /**
     * @see KafkaConsumer#enforceRebalance()
     */
    void enforceRebalance();

    /**
     * @see KafkaConsumer#enforceRebalance(String)
     */
    void enforceRebalance(final String reason);

    /**
     * @see KafkaConsumer#close()
     */
    void close();

    /**
     * @see KafkaConsumer#close(Duration)
     */
    void close(Duration timeout);

    /**
     * @see KafkaConsumer#wakeup()
     */
    void wakeup();

}

```

### Fetcher<K,V>类
```java
public class Fetcher<K, V> implements Closeable {
    private final Logger log;
    private final LogContext logContext;
    private final ConsumerNetworkClient client;
    private final Time time;
    private final int minBytes;
    private final int maxBytes;
    private final int maxWaitMs;
    private final int fetchSize;
    private final long retryBackoffMs;
    private final long requestTimeoutMs;
    private final int maxPollRecords;
    private final boolean checkCrcs;
    private final String clientRackId;
    private final ConsumerMetadata metadata;
    private final FetchManagerMetrics sensors;
    private final SubscriptionState subscriptions;
    private final ConcurrentLinkedQueue<CompletedFetch> completedFetches;
    private final BufferSupplier decompressionBufferSupplier = BufferSupplier.create();
    private final Deserializer<K> keyDeserializer;
    private final Deserializer<V> valueDeserializer;
    private final IsolationLevel isolationLevel;
    private final Map<Integer, FetchSessionHandler> sessionHandlers;
    private final AtomicReference<RuntimeException> cachedListOffsetsException = new AtomicReference<>();
    private final AtomicReference<RuntimeException> cachedOffsetForLeaderException = new AtomicReference<>();
    private final OffsetsForLeaderEpochClient offsetsForLeaderEpochClient;
    private final Set<Integer> nodesWithPendingFetchRequests;
    private final ApiVersions apiVersions;
    private final AtomicInteger metadataUpdateVersion = new AtomicInteger(-1);

    private CompletedFetch nextInLineFetch = null;

```

### Heartbeat心跳
```java
/**
 * A helper class for managing the heartbeat to the coordinator
 */
public final class Heartbeat {
    private final int maxPollIntervalMs;
    private final GroupRebalanceConfig rebalanceConfig;
    private final Time time;
    private final Timer heartbeatTimer;
    private final Timer sessionTimer;
    private final Timer pollTimer;
    private final Logger log;

    private volatile long lastHeartbeatSend = 0L;
    private volatile boolean heartbeatInFlight = false;


```

### RequestFuture<T>
```java
public class RequestFuture<T> implements ConsumerNetworkClient.PollCondition {

    private static final Object INCOMPLETE_SENTINEL = new Object();
    private final AtomicReference<Object> result = new AtomicReference<>(INCOMPLETE_SENTINEL);
    private final ConcurrentLinkedQueue<RequestFutureListener<T>> listeners = new ConcurrentLinkedQueue<>();
    private final CountDownLatch completedLatch = new CountDownLatch(1);

    /**
     * Check whether the response is ready to be handled
     * @return true if the response is ready, false otherwise
     */
    public boolean isDone() {
        return result.get() != INCOMPLETE_SENTINEL;
    }

    public boolean awaitDone(long timeout, TimeUnit unit) throws InterruptedException {
        return completedLatch.await(timeout, unit);
    }

```

