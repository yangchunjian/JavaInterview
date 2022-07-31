---
title: Kafka代码写法总结9
categories: 
  - sourcecode
  - kafka
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
tags: 
  - Java
date: 2022-07-31 15:38:24
permalink: /pages/f0b2d1/
---

## 总结9

### 构造参数和JDK包
```java
public class NodeApiVersions {
    private final Map<ApiKeys, ApiVersion> supportedVersions = new EnumMap(ApiKeys.class);
    private final List<ApiVersion> unknownApis = new ArrayList();

    public static NodeApiVersions create() {
        return create(Collections.emptyList());
    }

    public static NodeApiVersions create(Collection<ApiVersion> overrides) {
        List<ApiVersion> apiVersions = new LinkedList(overrides);
        Iterator var2 = ApiKeys.zkBrokerApis().iterator();

        while(var2.hasNext()) {
            ApiKeys apiKey = (ApiKeys)var2.next();
            boolean exists = false;
            Iterator var5 = apiVersions.iterator();

            while(var5.hasNext()) {
                ApiVersion apiVersion = (ApiVersion)var5.next();
                if(apiVersion.apiKey() == apiKey.id) {
                    exists = true;
                    break;
                }
            }

            if(!exists) {
                apiVersions.add(ApiVersionsResponse.toApiVersion(apiKey));
            }
        }

        return new NodeApiVersions(apiVersions);
    }

```

### NetworkClient类定义

```java
public class NetworkClient implements KafkaClient {
    private final Logger log;
    private final Selectable selector;
    private final MetadataUpdater metadataUpdater;
    private final Random randOffset;
    private final ClusterConnectionStates connectionStates;
    private final InFlightRequests inFlightRequests;
    private final int socketSendBuffer;
    private final int socketReceiveBuffer;
    private final String clientId;
    private int correlation;
    private final int defaultRequestTimeoutMs;
    private final long reconnectBackoffMs;
    private final Time time;
    private final boolean discoverBrokerVersions;
    private final ApiVersions apiVersions;
    private final Map<String, Builder> nodesNeedingApiVersionsFetch;
    private final List<ClientResponse> abortedSends;
    private final Sensor throttleTimeSensor;
    private final AtomicReference<NetworkClient.State> state;

```

### Map<String, ?> originals问号占位

```java
public class AbstractConfig {
    private final Logger log;
    private final Set<String> used;
    private final Map<String, ?> originals;
    private final Map<String, Object> values;
    private final ConfigDef definition;
    public static final String CONFIG_PROVIDERS_CONFIG = "config.providers";
    private static final String CONFIG_PROVIDERS_PARAM = ".param.";

    public AbstractConfig(ConfigDef definition, Map<?, ?> originals, Map<String, ?> configProviderProps, boolean doLog) {
        this.log = LoggerFactory.getLogger(this.getClass());
        this.used = ConcurrentHashMap.newKeySet();
        Iterator var5 = originals.entrySet().iterator();

        while(var5.hasNext()) {
            Entry<?, ?> entry = (Entry)var5.next();
            if(!(entry.getKey() instanceof String)) {
                throw new ConfigException(entry.getKey().toString(), entry.getValue(), "Key must be a string.");
            }
        }

        this.originals = this.resolveConfigVariables(configProviderProps, originals);
        this.values = definition.parse(this.originals);
        Map<String, Object> configUpdates = this.postProcessParsedConfig(Collections.unmodifiableMap(this.values));
        Iterator var9 = configUpdates.entrySet().iterator();

        while(var9.hasNext()) {
            Entry<String, Object> update = (Entry)var9.next();
            this.values.put(update.getKey(), update.getValue());
        }

        definition.parse(this.values);
        this.definition = definition;
        if(doLog) {
            this.logAll();
        }

    }
```

### Sender类

```java
public class Sender implements Runnable {
    private final Logger log;
    private final KafkaClient client;
    private final RecordAccumulator accumulator;
    private final ProducerMetadata metadata;
    private final boolean guaranteeMessageOrder;
    private final int maxRequestSize;
    private final short acks;
    private final int retries;
    private final Time time;
    private volatile boolean running;
    private volatile boolean forceClose;
    private final Sender.SenderMetrics sensors;
    private final int requestTimeoutMs;
    private final long retryBackoffMs;
    private final ApiVersions apiVersions;
    private final TransactionManager transactionManager;
    private final Map<TopicPartition, List<ProducerBatch>> inFlightBatches;
```

### Metadata类

```java

public class Metadata implements Closeable {
    private final Logger log;
    private final long refreshBackoffMs;
    private final long metadataExpireMs;
    private int updateVersion;
    private int requestVersion;
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


### StickyPartitionCache缓存
```java
public class StickyPartitionCache {
    private final ConcurrentMap<String, Integer> indexCache = new ConcurrentHashMap();

    public StickyPartitionCache() {
    }

    public int partition(String topic, Cluster cluster) {
        Integer part = (Integer)this.indexCache.get(topic);
        return part == null?this.nextPartition(topic, cluster, -1):part.intValue();
    }

    public int nextPartition(String topic, Cluster cluster, int prevPartition) {
        List<PartitionInfo> partitions = cluster.partitionsForTopic(topic);
        Integer oldPart = (Integer)this.indexCache.get(topic);
        Integer newPart = oldPart;
        if(oldPart != null && oldPart.intValue() != prevPartition) {
            return ((Integer)this.indexCache.get(topic)).intValue();
        } else {
            List<PartitionInfo> availablePartitions = cluster.availablePartitionsForTopic(topic);
            if(availablePartitions.size() < 1) {
                Integer random = Integer.valueOf(Utils.toPositive(ThreadLocalRandom.current().nextInt()));
                newPart = Integer.valueOf(random.intValue() % partitions.size());
            } else if(availablePartitions.size() == 1) {
                newPart = Integer.valueOf(((PartitionInfo)availablePartitions.get(0)).partition());
            } else {
                while(newPart == null || newPart.equals(oldPart)) {
                    int random = Utils.toPositive(ThreadLocalRandom.current().nextInt());
                    newPart = Integer.valueOf(((PartitionInfo)availablePartitions.get(random % availablePartitions.size())).partition());
                }
            }

            if(oldPart == null) {
                this.indexCache.putIfAbsent(topic, newPart);
            } else {
                this.indexCache.replace(topic, Integer.valueOf(prevPartition), newPart);
            }

            return ((Integer)this.indexCache.get(topic)).intValue();
        }
    }
}

```

### TransactionManager事务管理

```java
public class TransactionManager {
    private static final int NO_INFLIGHT_REQUEST_CORRELATION_ID = -1;
    private static final int NO_LAST_ACKED_SEQUENCE_NUMBER = -1;
    private final Logger log;
    private final String transactionalId;
    private final int transactionTimeoutMs;
    private final ApiVersions apiVersions;
    private final TransactionManager.TopicPartitionBookkeeper topicPartitionBookkeeper;
    private final Map<TopicPartition, CommittedOffset> pendingTxnOffsetCommits;
    private final Map<TopicPartition, Integer> partitionsWithUnresolvedSequences;
    private final Set<TopicPartition> partitionsToRewriteSequences;
    private final PriorityQueue<TransactionManager.TxnRequestHandler> pendingRequests;
    private final Set<TopicPartition> newPartitionsInTransaction;
    private final Set<TopicPartition> pendingPartitionsInTransaction;
    private final Set<TopicPartition> partitionsInTransaction;
    private TransactionManager.PendingStateTransition pendingTransition;
    private final long retryBackoffMs;
    private static final long ADD_PARTITIONS_RETRY_BACKOFF_MS = 20L;
    private int inFlightRequestCorrelationId = -1;
    private Node transactionCoordinator;
    private Node consumerGroupCoordinator;
    private boolean coordinatorSupportsBumpingEpoch;
    private volatile TransactionManager.State currentState;
    private volatile RuntimeException lastError;
    private volatile ProducerIdAndEpoch producerIdAndEpoch;
    private volatile boolean transactionStarted;
    private volatile boolean epochBumpRequired;
```