

## 总结7

### 变量初始化volatile及类型强转
```java

    @SuppressWarnings("unchecked")
    private volatile NameResolverGroup<SocketAddress> resolver = (NameResolverGroup<SocketAddress>) DEFAULT_RESOLVER;
    private volatile SocketAddress remoteAddress;

```

### 单独抽出验证方法

```java

    /**
     * Connect a {@link Channel} to the remote peer.
     */
    public ChannelFuture connect() {
        validate();
        SocketAddress remoteAddress = this.remoteAddress;
        if (remoteAddress == null) {
            throw new IllegalStateException("remoteAddress not set");
        }

        return doResolveAndConnect(remoteAddress, localAddress());
    }
```

### 构造函数中调用init()方法
init方法里写业务逻辑
```java

    @Override
    @SuppressWarnings("unchecked")
    void init(Channel channel) throws Exception {
        ChannelPipeline p = channel.pipeline();
        p.addLast(handler());

        final Map<ChannelOption<?>, Object> options = options();
        synchronized (options) {
            for (Entry<ChannelOption<?>, Object> e: options.entrySet()) {
                try {
                    if (!channel.config().setOption((ChannelOption<Object>) e.getKey(), e.getValue())) {
                        logger.warn("Unknown channel option: " + e);
                    }
                } catch (Throwable t) {
                    logger.warn("Failed to set a channel option: " + channel, t);
                }
            }
        }

        final Map<AttributeKey<?>, Object> attrs = attrs();
        synchronized (attrs) {
            for (Entry<AttributeKey<?>, Object> e: attrs.entrySet()) {
                channel.attr((AttributeKey<Object>) e.getKey()).set(e.getValue());
            }
        }
    }
```

### 泛型?号，和LinkedHashMap

```java
    private final Map<ChannelOption<?>, Object> options = new LinkedHashMap<ChannelOption<?>, Object>();
    private final Map<AttributeKey<?>, Object> attrs = new LinkedHashMap<AttributeKey<?>, Object>();

```

### 重写toString方法，里面可以加synchronized

```java

    @Override
    public String toString() {
        StringBuilder buf = new StringBuilder()
            .append(StringUtil.simpleClassName(this))
            .append('(');
        if (group != null) {
            buf.append("group: ")
               .append(StringUtil.simpleClassName(group))
               .append(", ");
        }
        if (channelFactory != null) {
            buf.append("channelFactory: ")
               .append(channelFactory)
               .append(", ");
        }
        if (localAddress != null) {
            buf.append("localAddress: ")
               .append(localAddress)
               .append(", ");
        }
        synchronized (options) {
            if (!options.isEmpty()) {
                buf.append("options: ")
                   .append(options)
                   .append(", ");
            }
        }
        synchronized (attrs) {
            if (!attrs.isEmpty()) {
                buf.append("attrs: ")
                   .append(attrs)
                   .append(", ");
            }
        }
        if (handler != null) {
            buf.append("handler: ")
               .append(handler)
               .append(", ");
        }
        if (buf.charAt(buf.length() - 1) == '(') {
            buf.append(')');
        } else {
            buf.setCharAt(buf.length() - 2, ')');
            buf.setLength(buf.length() - 1);
        }
        return buf.toString();
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


### 初始化及初始化的方式

```java

/**
 * Abstract base class for {@link ByteBuf} implementations that count references.
 */
public abstract class AbstractReferenceCountedByteBuf extends AbstractByteBuf {

    private static final AtomicIntegerFieldUpdater<AbstractReferenceCountedByteBuf> refCntUpdater;

    static {
        AtomicIntegerFieldUpdater<AbstractReferenceCountedByteBuf> updater =
                PlatformDependent.newAtomicIntegerFieldUpdater(AbstractReferenceCountedByteBuf.class, "refCnt");
        if (updater == null) {
            updater = AtomicIntegerFieldUpdater.newUpdater(AbstractReferenceCountedByteBuf.class, "refCnt");
        }
        refCntUpdater = updater;
    }

    private volatile int refCnt = 1;
```

### 类数组及类中可以定义枚举类 

```java

/**
 * Base class for {@link Channel} implementations that are used in an embedded fashion.
 */
public class EmbeddedChannel extends AbstractChannel {

    private static final SocketAddress LOCAL_ADDRESS = new EmbeddedSocketAddress();
    private static final SocketAddress REMOTE_ADDRESS = new EmbeddedSocketAddress();

    private static final ChannelHandler[] EMPTY_HANDLERS = new ChannelHandler[0];
    private enum State { OPEN, ACTIVE, CLOSED }
```

### 局部变量、成员变量

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

    void runTasks() {
        for (;;) {
            Runnable task = tasks.poll();
            if (task == null) {
                break;
            }

            task.run();
        }
    }

```

### Object类型判断

```java

    @Override
    protected Object filterOutboundMessage(Object msg) {
        if (msg instanceof DatagramPacket) {
            DatagramPacket p = (DatagramPacket) msg;
            ByteBuf content = p.content();
            if (isSingleDirectBuffer(content)) {
                return p;
            }
            return new DatagramPacket(newDirectBuffer(p, content), p.recipient());
        }

        if (msg instanceof ByteBuf) {
            ByteBuf buf = (ByteBuf) msg;
            if (isSingleDirectBuffer(buf)) {
                return buf;
            }
            return newDirectBuffer(buf);
        }

        if (msg instanceof AddressedEnvelope) {
            @SuppressWarnings("unchecked")
            AddressedEnvelope<Object, SocketAddress> e = (AddressedEnvelope<Object, SocketAddress>) msg;
            if (e.content() instanceof ByteBuf) {
                ByteBuf content = (ByteBuf) e.content();
                if (isSingleDirectBuffer(content)) {
                    return e;
                }
                return new DefaultAddressedEnvelope<ByteBuf, SocketAddress>(newDirectBuffer(e, content), e.recipient());
            }
        }
```

### Class.forName初始化类

```java
class NioDatagramChannelConfig extends DefaultDatagramChannelConfig {

    private static final Object IP_MULTICAST_TTL;
    private static final Object IP_MULTICAST_IF;
    private static final Object IP_MULTICAST_LOOP;
    private static final Method GET_OPTION;
    private static final Method SET_OPTION;

    static {
        ClassLoader classLoader = PlatformDependent.getClassLoader(DatagramChannel.class);
        Class<?> socketOptionType = null;
        try {
            socketOptionType = Class.forName("java.net.SocketOption", true, classLoader);
        } catch (Exception e) {
            // Not Java 7+
        }
        Class<?> stdSocketOptionType = null;
        try {
            stdSocketOptionType = Class.forName("java.net.StandardSocketOptions", true, classLoader);
        } catch (Exception e) {
            // Not Java 7+
        }

        Object ipMulticastTtl = null;
        Object ipMulticastIf = null;
        Object ipMulticastLoop = null;
        Method getOption = null;
        Method setOption = null;
        if (socketOptionType != null) {
            try {
                ipMulticastTtl = stdSocketOptionType.getDeclaredField("IP_MULTICAST_TTL").get(null);
            } catch (Exception e) {
                throw new Error("cannot locate the IP_MULTICAST_TTL field", e);
            }

            try {
                ipMulticastIf = stdSocketOptionType.getDeclaredField("IP_MULTICAST_IF").get(null);
            } catch (Exception e) {
                throw new Error("cannot locate the IP_MULTICAST_IF field", e);
            }

            try {
                ipMulticastLoop = stdSocketOptionType.getDeclaredField("IP_MULTICAST_LOOP").get(null);
            } catch (Exception e) {
                throw new Error("cannot locate the IP_MULTICAST_LOOP field", e);
            }

            try {
                getOption = NetworkChannel.class.getDeclaredMethod("getOption", socketOptionType);
            } catch (Exception e) {
                throw new Error("cannot locate the getOption() method", e);
            }

            try {
                setOption = NetworkChannel.class.getDeclaredMethod("setOption", socketOptionType, Object.class);
            } catch (Exception e) {
                throw new Error("cannot locate the setOption() method", e);
            }
        }
        IP_MULTICAST_TTL = ipMulticastTtl;
        IP_MULTICAST_IF = ipMulticastIf;
        IP_MULTICAST_LOOP = ipMulticastLoop;
        GET_OPTION = getOption;
        SET_OPTION = setOption;
    }
```

### 调用父类方法，返回此类this

```java

    @Override
    public OioServerSocketChannelConfig setRecvByteBufAllocator(RecvByteBufAllocator allocator) {
        super.setRecvByteBufAllocator(allocator);
        return this;
    }
```
可以最后调用父类方法
```java

    @Override
    @SuppressWarnings({ "unchecked", "deprecation" })
    public <T> T getOption(ChannelOption<T> option) {
        if (option == SO_BROADCAST) {
            return (T) Boolean.valueOf(isBroadcast());
        }
        if (option == SO_RCVBUF) {
            return (T) Integer.valueOf(getReceiveBufferSize());
        }
        if (option == SO_SNDBUF) {
            return (T) Integer.valueOf(getSendBufferSize());
        }
        if (option == SO_REUSEADDR) {
            return (T) Boolean.valueOf(isReuseAddress());
        }
        if (option == IP_MULTICAST_LOOP_DISABLED) {
            return (T) Boolean.valueOf(isLoopbackModeDisabled());
        }
        if (option == IP_MULTICAST_ADDR) {
            return (T) getInterface();
        }
        if (option == IP_MULTICAST_IF) {
            return (T) getNetworkInterface();
        }
        if (option == IP_MULTICAST_TTL) {
            return (T) Integer.valueOf(getTimeToLive());
        }
        if (option == IP_TOS) {
            return (T) Integer.valueOf(getTrafficClass());
        }
        if (option == DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION) {
            return (T) Boolean.valueOf(activeOnOpen);
        }
        return super.getOption(option);
    }
```
    
          
### 构造函数

```java

/**
 * A UDP/IP {@link Channel}}.
 */
public interface DatagramChannel extends Channel {
    @Override
    DatagramChannelConfig config();
    @Override
    InetSocketAddress localAddress();
    @Override
    InetSocketAddress remoteAddress();

    /**
     * Return {@code true} if the {@link DatagramChannel} is connected to the remote peer.
     */
    boolean isConnected();

    /**
     * Joins a multicast group and notifies the {@link ChannelFuture} once the operation completes.
     */
    ChannelFuture joinGroup(InetAddress multicastAddress);

    /**
     * Joins a multicast group and notifies the {@link ChannelFuture} once the operation completes.
     *
     * The given {@link ChannelFuture} will be notified and also returned.
     */
    ChannelFuture joinGroup(InetAddress multicastAddress, ChannelPromise future);
```

### 类用名词，方法用动词
别形成思维定式，容易进入只知道复制粘贴的误区

```java
public abstract class CompleteFuture<V> extends AbstractFuture<V> {

    private final EventExecutor executor;

    /**
     * Creates a new instance.
     *
     * @param executor the {@link EventExecutor} associated with this future
     */
    protected CompleteFuture(EventExecutor executor) {
        this.executor = executor;
    }

    /**
     * Return the {@link EventExecutor} which is used by this {@link CompleteFuture}.
     */
    protected EventExecutor executor() {
        return executor;
    }

    @Override
    public Future<V> addListener(GenericFutureListener<? extends Future<? super V>> listener) {
        if (listener == null) {
            throw new NullPointerException("listener");
        }
        DefaultPromise.notifyListener(executor(), this, listener);
        return this;
    }
```