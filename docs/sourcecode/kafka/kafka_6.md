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