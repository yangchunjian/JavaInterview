---
title: Netty代码写法总结1
date: 2022-05-09 14:12:45
permalink: /pages/a1918b/
categories:
  - sourcecode
  - netty
tags:
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 总结1

### 可以定义和JDK类名一样的类
```java

/**
 * The result of an asynchronous operation.
 */
@SuppressWarnings("ClassNameSameAsAncestorName")
public interface Future<V> extends java.util.concurrent.Future<V> {

```

### 增加监听器时可以用泛型

```java

    /**
     * Adds the specified listener to this future.  The
     * specified listener is notified when this future is
     * {@linkplain #isDone() done}.  If this future is already
     * completed, the specified listener is notified immediately.
     */
    Future<V> addListener(GenericFutureListener<? extends Future<? super V>> listener);
```

构造器泛型，牛牛写法

```java

/**
 * {@link AbstractBootstrap} is a helper class that makes it easy to bootstrap a {@link Channel}. It support
 * method-chaining to provide an easy way to configure the {@link AbstractBootstrap}.
 *
 * <p>When not used in a {@link ServerBootstrap} context, the {@link #bind()} methods are useful for connectionless
 * transports such as datagram (UDP).</p>
 */
public abstract class AbstractBootstrap<B extends AbstractBootstrap<B, C>, C extends Channel> implements Cloneable {

    private volatile EventLoopGroup group;
    @SuppressWarnings("deprecation")
    private volatile ChannelFactory<? extends C> channelFactory;
    private volatile SocketAddress localAddress;
    private final Map<ChannelOption<?>, Object> options = new LinkedHashMap<ChannelOption<?>, Object>();
    private final Map<AttributeKey<?>, Object> attrs = new LinkedHashMap<AttributeKey<?>, Object>();
    private volatile ChannelHandler handler;

    AbstractBootstrap() {
        // Disallow extending from a different package.
    }

    AbstractBootstrap(AbstractBootstrap<B, C> bootstrap) {
        group = bootstrap.group;
        channelFactory = bootstrap.channelFactory;
        handler = bootstrap.handler;
        localAddress = bootstrap.localAddress;
        synchronized (bootstrap.options) {
            options.putAll(bootstrap.options);
        }
        synchronized (bootstrap.attrs) {
            attrs.putAll(bootstrap.attrs);
        }
    }
```
### 空参函数及异常声明

```java
    /**
     * Waits for this future until it is done, and rethrows the cause of the failure if this future
     * failed.
     */
    Future<V> sync() throws InterruptedException;


```

### 继承JDK类或接口，实现对JDK类或接口的扩展
```java
/**
 * The {@link EventExecutorGroup} is responsible for providing the {@link EventExecutor}'s to use
 * via its {@link #next()} method. Besides this, it is also responsible for handling their
 * life-cycle and allows shutting them down in a global fashion.
 *
 */
public interface EventExecutorGroup extends ScheduledExecutorService, AutoCloseable {

    /**
     * Returns {@code true} if and only if all {@link EventExecutor}s managed by this {@link EventExecutorGroup}
     * are being {@linkplain #shutdownGracefully() shut down gracefuclly} or was {@linkplain #isShutdown() shut down}.
     */
    boolean isShuttingDown();

    /**
     * Shortcut method for {@link #shutdownGracefully(long, long, TimeUnit)} with sensible default values.
     *
     * @return the {@link #terminationFuture()}
     */
    Future<?> shutdownGracefully();

```

### 对国内国外的API DOC用英文注释
```java
/**
 * Invokes the event handler methods of {@link ChannelHandler}.
 * A user can specify a {@link ChannelHandlerInvoker} to implement a custom thread model unsupported by the default
 * implementation. Note that the methods in this interface are not intended to be called by a user.
 */
public interface ChannelHandlerInvoker {

    /**
     * Returns the {@link EventExecutor} which is used to execute an arbitrary task.
     */
    EventExecutor executor();

    /**
     * Invokes {@link ChannelHandler#channelRegistered(ChannelHandlerContext)}. This method is not for a user
     * but for the internal {@link ChannelHandlerContext} implementation. To trigger an event, use the methods in
     * {@link ChannelHandlerContext} instead.
     */
    void invokeChannelRegistered(ChannelHandlerContext ctx);

```

### 重写JDK方法，过期方法加@Deprecated
```java

    /**
     * @deprecated {@link #shutdownGracefully(long, long, TimeUnit)} or {@link #shutdownGracefully()} instead.
     */
    @Override
    @Deprecated
    void shutdown();

    /**
     * @deprecated {@link #shutdownGracefully(long, long, TimeUnit)} or {@link #shutdownGracefully()} instead.
     */
    @Override
    @Deprecated
    List<Runnable> shutdownNow();
```

### 针对不同情况抛不同异常
```java

    /**
     * Set the {@link EventLoopGroup} for the parent (acceptor) and the child (client). These
     * {@link EventLoopGroup}'s are used to handle all the events and IO for {@link ServerChannel} and
     * {@link Channel}'s.
     */
    public ServerBootstrap group(EventLoopGroup parentGroup, EventLoopGroup childGroup) {
        super.group(parentGroup);
        if (childGroup == null) {
            throw new NullPointerException("childGroup");
        }
        if (this.childGroup != null) {
            throw new IllegalStateException("childGroup set already");
        }
        this.childGroup = childGroup;
        return this;
    }
```

### 抽象类实现多个接口

实现JDK接口Comparable做比较，抽象类里可以写抽象方法
```java

@SuppressWarnings("ClassMayBeInterface")
public abstract class ByteBuf implements ReferenceCounted, Comparable<ByteBuf> {

```

### 数组、集合、字符等输入输出

```java

    /**
     * Exposes this buffer's bytes as an NIO {@link ByteBuffer}'s for the specified index and length
     * The returned buffer shares the content with this buffer, while changing the position and limit
     * of the returned NIO buffer does not affect the indexes and marks of this buffer. This method does
     * not modify {@code readerIndex} or {@code writerIndex} of this buffer.  Please note that the
     * returned NIO buffer will not see the changes of this buffer if this buffer is a dynamic
     * buffer and it adjusted its capacity.
     *
     * @throws UnsupportedOperationException
     *         if this buffer cannot create a {@link ByteBuffer} that shares the content with itself
     *
     * @see #nioBufferCount()
     * @see #nioBuffer()
     * @see #nioBuffer(int, int)
     */
    public abstract ByteBuffer[] nioBuffers(int index, int length);
```

### 方法没有实现直接返回异常Exception

```java

    @Override
    public ByteBuf setMedium(int index, int value) {
        throw new ReadOnlyBufferException();
    }

    @Override
    protected void _setMedium(int index, int value) {
        throw new ReadOnlyBufferException();
    }
```

### 构造函数中设置属性值

```java
class ReadOnlyByteBufferBuf extends AbstractReferenceCountedByteBuf {

    protected final ByteBuffer buffer;
    private final ByteBufAllocator allocator;
    private ByteBuffer tmpNioBuf;

    ReadOnlyByteBufferBuf(ByteBufAllocator allocator, ByteBuffer buffer) {
        super(buffer.remaining());
        if (!buffer.isReadOnly()) {
            throw new IllegalArgumentException("must be a readonly buffer: " + StringUtil.simpleClassName(buffer));
        }

        this.allocator = allocator;
        this.buffer = buffer.slice().order(ByteOrder.BIG_ENDIAN);
        writerIndex(this.buffer.limit());
    }
```

### 组合操作，方法返回this 

```java
final class SimpleLeakAwareByteBuf extends WrappedByteBuf {

    private final ResourceLeak leak;

    SimpleLeakAwareByteBuf(ByteBuf buf, ResourceLeak leak) {
        super(buf);
        this.leak = leak;
    }

    @Override
    public ByteBuf touch() {
        return this;
    }

```

### 组合，子类继承父类，并子类组合父类，构造函数里有父类 

```java
/**
 * Wrapper which swap the {@link ByteOrder} of a {@link ByteBuf}.
 */
public class SwappedByteBuf extends ByteBuf {

    private final ByteBuf buf;
    private final ByteOrder order;

    public SwappedByteBuf(ByteBuf buf) {
        if (buf == null) {
            throw new NullPointerException("buf");
        }
        this.buf = buf;
        if (buf.order() == ByteOrder.BIG_ENDIAN) {
            order = ByteOrder.LITTLE_ENDIAN;
        } else {
            order = ByteOrder.BIG_ENDIAN;
        }
    }

    @Override
    public ByteOrder order() {
        return order;
    }
```

### Final类及Final常量,16进制

```java

final class HAProxyConstants {

    /**
     * Command byte constants
     */
    static final byte COMMAND_LOCAL_BYTE = 0x00;
    static final byte COMMAND_PROXY_BYTE = 0x01;

```
### Switch语句使用

```java

    /**
     * Validate an address (IPv4, IPv6, Unix Socket)
     *
     * @param address                    human-readable address
     * @param addrFamily                 the {@link AddressFamily} to check the address against
     * @throws HAProxyProtocolException  if the address is invalid
     */
    private static void checkAddress(String address, AddressFamily addrFamily) {
        if (addrFamily == null) {
            throw new NullPointerException("addrFamily");
        }

        switch (addrFamily) {
            case AF_UNSPEC:
                if (address != null) {
                    throw new HAProxyProtocolException("unable to validate an AF_UNSPEC address: " + address);
                }
                return;
            case AF_UNIX:
                return;
        }

        if (address == null) {
            throw new NullPointerException("address");
        }
```

### 重写方法Override

```java

/**
 * A typical {@code AsciiString} multimap used by protocols that use binary headers (such as HTTP/2) for the
 * representation of arbitrary key-value data. {@link AsciiString} is just a wrapper around a byte array but provides
 * some additional utility when handling text data.
 */
public interface BinaryHeaders extends Headers<AsciiString> {
    /**
     * A visitor that helps reduce GC pressure while iterating over a collection of {@link Headers}.
     */
    interface EntryVisitor extends Headers.EntryVisitor<AsciiString> {
    }

    /**
     * A visitor that helps reduce GC pressure while iterating over a collection of {@link Headers}.
     */
    interface NameVisitor extends Headers.NameVisitor<AsciiString> {
    }

    @Override
    BinaryHeaders add(AsciiString name, AsciiString value);

    @Override
    BinaryHeaders add(AsciiString name, Iterable<? extends AsciiString> values);

    @Override
    BinaryHeaders add(AsciiString name, AsciiString... values);
```

### 接口的空实现

```java
public class EmptyHeaders<T> implements Headers<T> {
    @Override
    public T get(T name) {
        return null;
    }

    @Override
    public T get(T name, T defaultValue) {
        return null;
    }

    @Override
    public T getAndRemove(T name) {
        return null;
    }


```