---
title: Netty代码写法总结5
date: 2022-05-18 23:03:11
permalink: /pages/66d7fb/
categories: 
  - sourcecode
  - netty
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---


## 总结5

### 队列操作，定义多个队列

```java

/**
 * Base class for {@link Channel} implementations that are used in an embedded fashion.
 */
public class EmbeddedChannel extends AbstractChannel {

    private static final SocketAddress LOCAL_ADDRESS = new EmbeddedSocketAddress();
    private static final SocketAddress REMOTE_ADDRESS = new EmbeddedSocketAddress();

    private static final ChannelHandler[] EMPTY_HANDLERS = new ChannelHandler[0];
    private enum State { OPEN, ACTIVE, CLOSED }

    private static final InternalLogger logger = InternalLoggerFactory.getInstance(EmbeddedChannel.class);

    private static final ChannelMetadata METADATA = new ChannelMetadata(false);

    private final EmbeddedEventLoop loop = new EmbeddedEventLoop();
    private final ChannelConfig config = new DefaultChannelConfig(this);
    private final Queue<Object> inboundMessages = new ArrayDeque<Object>();
    private final Queue<Object> outboundMessages = new ArrayDeque<Object>();
    private Throwable lastException;
    private State state;
```

### 比较及重写equals和hashcode和toString方法

```java

/**
 * A dummy {@link ChannelId} implementation.
 */
final class EmbeddedChannelId implements ChannelId {

    private static final long serialVersionUID = -251711922203466130L;

    static final ChannelId INSTANCE = new EmbeddedChannelId();

    private EmbeddedChannelId() { }

    @Override
    public String asShortText() {
        return toString();
    }

    @Override
    public String asLongText() {
        return toString();
    }

    @Override
    public int compareTo(ChannelId o) {
        if (o == INSTANCE) {
            return 0;
        }

        return asLongText().compareTo(o.asLongText());
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public String toString() {
        return "embedded";
    }
}

```

### 实现多个接口、初始化队列大小，方法返回this


```java
final class EmbeddedEventLoop extends AbstractScheduledEventExecutor implements ChannelHandlerInvoker, EventLoop {

    private final Queue<Runnable> tasks = new ArrayDeque<Runnable>(2);

    @Override
    public EventLoop unwrap() {
        return this;
    }

    @Override
    public EventLoopGroup parent() {
        return (EventLoopGroup) super.parent();
    }

    @Override
    public EventLoop next() {
        return (EventLoop) super.next();
    }

    @Override
    public void execute(Runnable command) {
        if (command == null) {
            throw new NullPointerException("command");
        }
        tasks.add(command);
    }
```

### 都是类与类之间的关系

```java
public final class EpollChannelOption {
    private static final Class<EpollChannelOption> T = EpollChannelOption.class;

    public static final ChannelOption<Boolean> TCP_CORK = ChannelOption.valueOf(T, "TCP_CORK");
    public static final ChannelOption<Boolean> SO_REUSEPORT = ChannelOption.valueOf(T, "SO_REUSEPORT");
    public static final ChannelOption<Integer> TCP_KEEPIDLE = ChannelOption.valueOf(T, "TCP_KEEPIDLE");
    public static final ChannelOption<Integer> TCP_KEEPINTVL = ChannelOption.valueOf(T, "TCP_KEEPINTVL");
    public static final ChannelOption<Integer> TCP_KEEPCNT = ChannelOption.valueOf(T, "TCP_KEEPCNT");
    public static final ChannelOption<DomainSocketReadMode> DOMAIN_SOCKET_READ_MODE =
            ChannelOption.valueOf(T, "DOMAIN_SOCKET_READ_MODE");
    public static final ChannelOption<EpollMode> EPOLL_MODE =
            ChannelOption.valueOf(T, "EPOLL_MODE");
    private EpollChannelOption() { }
}

```

### 多级泛型

```java
/**
 * Special {@link Future} which is writable.
 */
public interface Promise<V> extends Future<V> {

    /**
     * Marks this future as a success and notifies all
     * listeners.
     *
     * If it is success or failed already it will throw an {@link IllegalStateException}.
     */
    Promise<V> setSuccess(V result);

    /**
     * Marks this future as a success and notifies all
     * listeners.
     *
     * @return {@code true} if and only if successfully marked this future as
     *         a success. Otherwise {@code false} because this future is
     *         already marked as either a success or a failure.
     */
    boolean trySuccess(V result);

    /**
     * Marks this future as a failure and notifies all
     * listeners.
     *
     * If it is success or failed already it will throw an {@link IllegalStateException}.
     */
    Promise<V> setFailure(Throwable cause);

```

### 适配器模型

```java
import java.util.concurrent.Callable;
import java.util.concurrent.RunnableFuture;

class PromiseTask<V> extends DefaultPromise<V> implements RunnableFuture<V> {

    static <T> Callable<T> toCallable(Runnable runnable, T result) {
        return new RunnableAdapter<T>(runnable, result);
    }

    private static final class RunnableAdapter<T> implements Callable<T> {
        final Runnable task;
        final T result;

        RunnableAdapter(Runnable task, T result) {
            this.task = task;
            this.result = result;
        }

        @Override
        public T call() {
            task.run();
            return result;
        }

        @Override
        public String toString() {
            return "Callable(task: " + task + ", result: " + result + ')';
        }
    }

    protected final Callable<V> task;

    PromiseTask(EventExecutor executor, Runnable runnable, V result) {
        this(executor, toCallable(runnable, result));
    }

```