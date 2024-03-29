---
title: Kafka代码写法总结5
categories: 
  - sourcecode
  - kafka
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
date: 2022-07-11 16:30:50
permalink: /pages/f87e0f/
tags: 
  - 
---

## 总结5

### Node节点
```java
public class Node {

    private static final Node NO_NODE = new Node(-1, "", -1);

    private final int id;
    private final String idString;
    private final String host;
    private final int port;
    private final String rack;

    // Cache hashCode as it is called in performance sensitive parts of the code (e.g. RecordAccumulator.ready)
    private Integer hash;

    public Node(int id, String host, int port) {
        this(id, host, port, null);
    }

    public Node(int id, String host, int port, String rack) {
        this.id = id;
        this.idString = Integer.toString(id);
        this.host = host;
        this.port = port;
        this.rack = rack;
    }

    public static Node noNode() {
        return NO_NODE;
    }

    /**
     * Check whether this node is empty, which may be the case if noNode() is used as a placeholder
     * in a response payload with an error.
     * @return true if it is, false otherwise
     */
    public boolean isEmpty() {
        return host == null || host.isEmpty() || port < 0;
    }

    /**
     * The node id of this node
     */
    public int id() {
        return id;
    }

    /**
     * String representation of the node id.
     * Typically the integer id is used to serialize over the wire, the string representation is used as an identifier with NetworkClient code
     */
    public String idString() {
        return idString;
    }

    /**
     * The host name for this node
     */
    public String host() {
        return host;
    }

    /**
     * The port for this node
     */
    public int port() {
        return port;
    }

    /**
     * True if this node has a defined rack
     */
    public boolean hasRack() {
        return rack != null;
    }

    /**
     * The rack for this node
     */
    public String rack() {
        return rack;
    }

    @Override
    public int hashCode() {
        Integer h = this.hash;
        if (h == null) {
            int result = 31 + ((host == null) ? 0 : host.hashCode());
            result = 31 * result + id;
            result = 31 * result + port;
            result = 31 * result + ((rack == null) ? 0 : rack.hashCode());
            this.hash = result;
            return result;
        } else {
            return h;
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Node other = (Node) obj;
        return id == other.id &&
            port == other.port &&
            Objects.equals(host, other.host) &&
            Objects.equals(rack, other.rack);
    }

    @Override
    public String toString() {
        return host + ":" + port + " (id: " + idString + " rack: " + rack + ")";
    }

}

```
 
### RecordMetadata类
```java
public final class RecordMetadata {

    /**
     * Partition value for record without partition assigned
     */
    public static final int UNKNOWN_PARTITION = -1;

    private final long offset;
    // The timestamp of the message.
    // If LogAppendTime is used for the topic, the timestamp will be the timestamp returned by the broker.
    // If CreateTime is used for the topic, the timestamp is the timestamp in the corresponding ProducerRecord if the
    // user provided one. Otherwise, it will be the producer local time when the producer record was handed to the
    // producer.
    private final long timestamp;
    private final int serializedKeySize;
    private final int serializedValueSize;
    private final TopicPartition topicPartition;

```