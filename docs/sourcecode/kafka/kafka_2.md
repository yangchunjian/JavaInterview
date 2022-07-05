---
title: Kafka代码写法总结2
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
tag: 
  text: java
titleTag: Java
---

## 总结2

### KafkaClient类
```java
public interface KafkaClient extends Closeable {

    /**
     * Check if we are currently ready to send another request to the given node but don't attempt to connect if we
     * aren't.
     *
     * @param node The node to check
     * @param now The current timestamp
     */
    boolean isReady(Node node, long now);

    /**
     * Initiate a connection to the given node (if necessary), and return true if already connected. The readiness of a
     * node will change only when poll is invoked.
     *
     * @param node The node to connect to.
     * @param now The current time
     * @return true iff we are ready to immediately initiate the sending of another request to the given node.
     */
    boolean ready(Node node, long now);

    /**
     * Return the number of milliseconds to wait, based on the connection state, before attempting to send data. When
     * disconnected, this respects the reconnect backoff time. When connecting or connected, this handles slow/stalled
     * connections.
     *
     * @param node The node to check
     * @param now The current timestamp
     * @return The number of milliseconds to wait.
     */
    long connectionDelay(Node node, long now);

    /**
     * Return the number of milliseconds to wait, based on the connection state and the throttle time, before
     * attempting to send data. If the connection has been established but being throttled, return throttle delay.
     * Otherwise, return connection delay.
     *
     * @param node the connection to check
     * @param now the current time in ms
     */
    long pollDelayMs(Node node, long now);

    /**
     * Check if the connection of the node has failed, based on the connection state. Such connection failure are
     * usually transient and can be resumed in the next {@link #ready(org.apache.kafka.common.Node, long)} }
     * call, but there are cases where transient failures needs to be caught and re-acted upon.
     *
     * @param node the node to check
     * @return true iff the connection has failed and the node is disconnected
     */
    boolean connectionFailed(Node node);

    /**
     * Check if authentication to this node has failed, based on the connection state. Authentication failures are
     * propagated without any retries.
     *
     * @param node the node to check
     * @return an AuthenticationException iff authentication has failed, null otherwise
     */
    AuthenticationException authenticationException(Node node);

    /**
     * Queue up the given request for sending. Requests can only be sent on ready connections.
     * @param request The request
     * @param now The current timestamp
     */
    void send(ClientRequest request, long now);

    /**
     * Do actual reads and writes from sockets.
     *
     * @param timeout The maximum amount of time to wait for responses in ms, must be non-negative. The implementation
     *                is free to use a lower value if appropriate (common reasons for this are a lower request or
     *                metadata update timeout)
     * @param now The current time in ms
     * @throws IllegalStateException If a request is sent to an unready node
     */
    List<ClientResponse> poll(long timeout, long now);

    /**
     * Disconnects the connection to a particular node, if there is one.
     * Any pending ClientRequests for this connection will receive disconnections.
     *
     * @param nodeId The id of the node
     */
    void disconnect(String nodeId);

    /**
     * Closes the connection to a particular node (if there is one).
     * All requests on the connection will be cleared.  ClientRequest callbacks will not be invoked
     * for the cleared requests, nor will they be returned from poll().
     *
     * @param nodeId The id of the node
     */
    void close(String nodeId);

    /**
     * Choose the node with the fewest outstanding requests. This method will prefer a node with an existing connection,
     * but will potentially choose a node for which we don't yet have a connection if all existing connections are in
     * use.
     *
     * @param now The current time in ms
     * @return The node with the fewest in-flight requests.
     */
    Node leastLoadedNode(long now);

    /**
     * The number of currently in-flight requests for which we have not yet returned a response
     */
    int inFlightRequestCount();

    /**
     * Return true if there is at least one in-flight request and false otherwise.
     */
    boolean hasInFlightRequests();

    /**
     * Get the total in-flight requests for a particular node
     *
     * @param nodeId The id of the node
     */
    int inFlightRequestCount(String nodeId);

    /**
     * Return true if there is at least one in-flight request for a particular node and false otherwise.
     */
    boolean hasInFlightRequests(String nodeId);

    /**
     * Return true if there is at least one node with connection in the READY state and not throttled. Returns false
     * otherwise.
     *
     * @param now the current time
     */
    boolean hasReadyNodes(long now);

    /**
     * Wake up the client if it is currently blocked waiting for I/O
     */
    void wakeup();

    /**
     * Create a new ClientRequest.
     *
     * @param nodeId the node to send to
     * @param requestBuilder the request builder to use
     * @param createdTimeMs the time in milliseconds to use as the creation time of the request
     * @param expectResponse true iff we expect a response
     */
    ClientRequest newClientRequest(String nodeId, AbstractRequest.Builder<?> requestBuilder,
                                   long createdTimeMs, boolean expectResponse);

    /**
     * Create a new ClientRequest.
     *
     * @param nodeId the node to send to
     * @param requestBuilder the request builder to use
     * @param createdTimeMs the time in milliseconds to use as the creation time of the request
     * @param expectResponse true iff we expect a response
     * @param requestTimeoutMs Upper bound time in milliseconds to await a response before disconnecting the socket and
     *                         cancelling the request. The request may get cancelled sooner if the socket disconnects
     *                         for any reason including if another pending request to the same node timed out first.
     * @param callback the callback to invoke when we get a response
     */
    ClientRequest newClientRequest(String nodeId,
                                   AbstractRequest.Builder<?> requestBuilder,
                                   long createdTimeMs,
                                   boolean expectResponse,
                                   int requestTimeoutMs,
                                   RequestCompletionHandler callback);



    /**
     * Initiates shutdown of this client. This method may be invoked from another thread while this
     * client is being polled. No further requests may be sent using the client. The current poll()
     * will be terminated using wakeup(). The client should be explicitly shutdown using {@link #close()}
     * after poll returns. Note that {@link #close()} should not be invoked concurrently while polling.
     */
    void initiateClose();

    /**
     * Returns true if the client is still active. Returns false if {@link #initiateClose()} or {@link #close()}
     * was invoked for this client.
     */
    boolean active();

}

```

### 元数据类
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

### 缓存类
```java
public class MetadataCache {
    private final String clusterId;
    private final Map<Integer, Node> nodes;
    private final Set<String> unauthorizedTopics;
    private final Set<String> invalidTopics;
    private final Set<String> internalTopics;
    private final Node controller;
    private final Map<TopicPartition, PartitionMetadata> metadataByPartition;
    private final Map<String, Uuid> topicIds;

```

### 各种池化定义
```java
public class SimpleMemoryPool implements MemoryPool {
    protected final Logger log = LoggerFactory.getLogger(getClass()); //subclass-friendly

    protected final long sizeBytes;
    protected final boolean strict;
    protected final AtomicLong availableMemory;
    protected final int maxSingleAllocationSize;
    protected final AtomicLong startOfNoMemPeriod = new AtomicLong(); //nanoseconds
    protected volatile Sensor oomTimeSensor;

    public SimpleMemoryPool(long sizeInBytes, int maxSingleAllocationBytes, boolean strict, Sensor oomPeriodSensor) {
        if (sizeInBytes <= 0 || maxSingleAllocationBytes <= 0 || maxSingleAllocationBytes > sizeInBytes)
            throw new IllegalArgumentException("must provide a positive size and max single allocation size smaller than size."
                + "provided " + sizeInBytes + " and " + maxSingleAllocationBytes + " respectively");
        this.sizeBytes = sizeInBytes;
        this.strict = strict;
        this.availableMemory = new AtomicLong(sizeInBytes);
        this.maxSingleAllocationSize = maxSingleAllocationBytes;
        this.oomTimeSensor = oomPeriodSensor;
    }

```

### 集群Cluster
```java

public final class Cluster {

    private final boolean isBootstrapConfigured;
    private final List<Node> nodes;
    private final Set<String> unauthorizedTopics;
    private final Set<String> invalidTopics;
    private final Set<String> internalTopics;
    private final Node controller;
    private final Map<TopicPartition, PartitionInfo> partitionsByTopicPartition;
    private final Map<String, List<PartitionInfo>> partitionsByTopic;
    private final Map<String, List<PartitionInfo>> availablePartitionsByTopic;
    private final Map<Integer, List<PartitionInfo>> partitionsByNode;
    private final Map<Integer, Node> nodesById;
    private final ClusterResource clusterResource;
    private final Map<String, Uuid> topicIds;
    private final Map<Uuid, String> topicNames;


/**
 * This is used to describe per-partition state in the MetadataResponse.
 */
public class PartitionInfo {
    private final String topic;
    private final int partition;
    private final Node leader;
    private final Node[] replicas;
    private final Node[] inSyncReplicas;
    private final Node[] offlineReplicas;
```

### Metrics矩阵类，声明为Final
```java
public class Metrics implements Closeable {

    private final MetricConfig config;
    private final ConcurrentMap<MetricName, KafkaMetric> metrics;
    private final ConcurrentMap<String, Sensor> sensors;
    private final ConcurrentMap<Sensor, List<Sensor>> childrenSensors;
    private final List<MetricsReporter> reporters;
    private final Time time;
    private final ScheduledThreadPoolExecutor metricsScheduler;
    private static final Logger log = LoggerFactory.getLogger(Metrics.class);

public class MetricConfig {

    private Quota quota;
    private int samples;
    private long eventWindow;
    private long timeWindowMs;
    private Map<String, String> tags;
    private Sensor.RecordingLevel recordingLevel;


```

### 序列化与反序列化
```java
public interface Serializer<T> extends Closeable {

    /**
     * Configure this class.
     * @param configs configs in key/value pairs
     * @param isKey whether is for key or value
     */
    default void configure(Map<String, ?> configs, boolean isKey) {
        // intentionally left blank
    }

    /**
     * Convert {@code data} into a byte array.
     *
     * @param topic topic associated with data
     * @param data typed data
     * @return serialized bytes
     */
    byte[] serialize(String topic, T data);

    /**
     * Convert {@code data} into a byte array.
     *
     * @param topic topic associated with data
     * @param headers headers associated with the record
     * @param data typed data
     * @return serialized bytes
     */
    default byte[] serialize(String topic, Headers headers, T data) {
        return serialize(topic, data);
    }

    /**
     * Close this serializer.
     * <p>
     * This method must be idempotent as it may be called multiple times.
     */
    @Override
    default void close() {
        // intentionally left blank
    }
}


public class ByteArraySerializer implements Serializer<byte[]> {
    @Override
    public byte[] serialize(String topic, byte[] data) {
        return data;
    }
}

public class ByteArrayDeserializer implements Deserializer<byte[]> {

    @Override
    public byte[] deserialize(String topic, byte[] data) {
        return data;
    }
}

```

