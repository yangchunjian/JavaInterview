---
title: Kafka代码写法总结3
categories: 
  - sourcecode
  - kafka
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
date: 2022-07-05 11:33:23
permalink: /pages/48129e/
---

## 总结3

### KafkaProducer类定义
```java
public class KafkaProducer<K, V> implements Producer<K, V> {

    private final Logger log;
    private static final String JMX_PREFIX = "kafka.producer";
    public static final String NETWORK_THREAD_PREFIX = "kafka-producer-network-thread";
    public static final String PRODUCER_METRIC_GROUP_NAME = "producer-metrics";

    private final String clientId;
    // Visible for testing
    final Metrics metrics;
    private final KafkaProducerMetrics producerMetrics;
    private final Partitioner partitioner;
    private final int maxRequestSize;
    private final long totalMemorySize;
    private final ProducerMetadata metadata;
    private final RecordAccumulator accumulator;
    private final Sender sender;
    private final Thread ioThread;
    private final CompressionType compressionType;
    private final Sensor errors;
    private final Time time;
    private final Serializer<K> keySerializer;
    private final Serializer<V> valueSerializer;
    private final ProducerConfig producerConfig;
    private final long maxBlockTimeMs;
    private final ProducerInterceptors<K, V> interceptors;
    private final ApiVersions apiVersions;
    private final TransactionManager transactionManager;

    /**
     * A producer is instantiated by providing a set of key-value pairs as configuration. Valid configuration strings
     * are documented <a href="http://kafka.apache.org/documentation.html#producerconfigs">here</a>. Values can be
     * either strings or Objects of the appropriate type (for example a numeric configuration would accept either the
     * string "42" or the integer 42).
     * <p>
     * Note: after creating a {@code KafkaProducer} you must always {@link #close()} it to avoid resource leaks.
     * @param configs   The producer configs
     *
     */
    public KafkaProducer(final Map<String, Object> configs) {
        this(configs, null, null);
    }

```

### Sender发送类
```java
public class Sender implements Runnable {

    private final Logger log;

    /* the state of each nodes connection */
    private final KafkaClient client;

    /* the record accumulator that batches records */
    private final RecordAccumulator accumulator;

    /* the metadata for the client */
    private final ProducerMetadata metadata;

    /* the flag indicating whether the producer should guarantee the message order on the broker or not. */
    private final boolean guaranteeMessageOrder;

    /* the maximum request size to attempt to send to the server */
    private final int maxRequestSize;

    /* the number of acknowledgements to request from the server */
    private final short acks;

    /* the number of times to retry a failed request before giving up */
    private final int retries;

    /* the clock instance used for getting the time */
    private final Time time;

    /* true while the sender thread is still running */
    private volatile boolean running;

    /* true when the caller wants to ignore all unsent/inflight messages and force close.  */
    private volatile boolean forceClose;

    /* metrics */
    private final SenderMetrics sensors;

    /* the max time to wait for the server to respond to the request*/
    private final int requestTimeoutMs;

    /* The max time to wait before retrying a request which has failed */
    private final long retryBackoffMs;

    /* current request API versions supported by the known brokers */
    private final ApiVersions apiVersions;

    /* all the state related to transactions, in particular the producer id, producer epoch, and sequence numbers */
    private final TransactionManager transactionManager;

    // A per-partition queue of batches ordered by creation time for tracking the in-flight batches
    private final Map<TopicPartition, List<ProducerBatch>> inFlightBatches;
``` 

### MockProducer类定义
```java
public class MockProducer<K, V> implements Producer<K, V> {

    private final Cluster cluster;
    private final Partitioner partitioner;
    private final List<ProducerRecord<K, V>> sent;
    private final List<ProducerRecord<K, V>> uncommittedSends;
    private final Deque<Completion> completions;
    private final Map<TopicPartition, Long> offsets;
    private final List<Map<String, Map<TopicPartition, OffsetAndMetadata>>> consumerGroupOffsets;
    private Map<String, Map<TopicPartition, OffsetAndMetadata>> uncommittedConsumerGroupOffsets;
    private final Serializer<K> keySerializer;
    private final Serializer<V> valueSerializer;
    private boolean autoComplete;
    private boolean closed;
    private boolean transactionInitialized;
    private boolean transactionInFlight;
    private boolean transactionCommitted;
    private boolean transactionAborted;
    private boolean producerFenced;
    private boolean sentOffsets;
    private long commitCount = 0L;
    private final Map<MetricName, Metric> mockMetrics;

    public RuntimeException initTransactionException = null;
    public RuntimeException beginTransactionException = null;
    public RuntimeException sendOffsetsToTransactionException = null;
    public RuntimeException commitTransactionException = null;
    public RuntimeException abortTransactionException = null;
    public RuntimeException sendException = null;
    public RuntimeException flushException = null;
    public RuntimeException partitionsForException = null;
    public RuntimeException closeException = null;

```

### KafkaClient的定义
```java

/**
 * The interface for {@link NetworkClient}
 */
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