---
title: Netty代码写法总结3
categories: 
  - sourcecode
  - netty
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-10 23:54:53
permalink: /pages/1272b3/
---

## 总结3

### 编码及解码

```java

    private static byte[] alphabet(Base64Dialect dialect) {
        if (dialect == null) {
            throw new NullPointerException("dialect");
        }
        return dialect.alphabet;
    }

    private static byte[] decodabet(Base64Dialect dialect) {
        if (dialect == null) {
            throw new NullPointerException("dialect");
        }
        return dialect.decodabet;
    }
```

### 字节数组枚举

```java

public enum Base64Dialect {
    /**
     * Standard Base64 encoding as described in the Section 3 of
     * <a href="http://www.faqs.org/rfcs/rfc3548.html">RFC3548</a>.
     */
    STANDARD(new byte[] {
            (byte) 'A', (byte) 'B', (byte) 'C', (byte) 'D', (byte) 'E',
            (byte) 'F', (byte) 'G', (byte) 'H', (byte) 'I', (byte) 'J',
            (byte) 'K', (byte) 'L', (byte) 'M', (byte) 'N', (byte) 'O',
            (byte) 'P', (byte) 'Q', (byte) 'R', (byte) 'S', (byte) 'T',
            (byte) 'U', (byte) 'V', (byte) 'W', (byte) 'X', (byte) 'Y',
            (byte) 'Z', (byte) 'a', (byte) 'b', (byte) 'c', (byte) 'd',
            (byte) 'e', (byte) 'f', (byte) 'g', (byte) 'h', (byte) 'i',
            (byte) 'j', (byte) 'k', (byte) 'l', (byte) 'm', (byte) 'n',
            (byte) 'o', (byte) 'p', (byte) 'q', (byte) 'r', (byte) 's',
            (byte) 't', (byte) 'u', (byte) 'v', (byte) 'w', (byte) 'x',
            (byte) 'y', (byte) 'z', (byte) '0', (byte) '1', (byte) '2',
            (byte) '3', (byte) '4', (byte) '5', (byte) '6', (byte) '7',
            (byte) '8', (byte) '9', (byte) '+', (byte) '/' },
```

### Final域属性

```java

/**
 * Configuration for Cross-Origin Resource Sharing (CORS).
 */
public final class CorsConfig {

    private final Set<String> origins;
    private final boolean anyOrigin;
    private final boolean enabled;
    private final Set<String> exposeHeaders;
    private final boolean allowCredentials;
    private final long maxAge;
    private final Set<HttpMethod> allowedRequestMethods;
    private final Set<String> allowedRequestHeaders;
    private final boolean allowNullOrigin;
    private final Map<CharSequence, Callable<?>> preflightHeaders;
    private final boolean shortCurcuit;

    private CorsConfig(final Builder builder) {
        origins = new LinkedHashSet<String>(builder.origins);
        anyOrigin = builder.anyOrigin;
        enabled = builder.enabled;
        exposeHeaders = builder.exposeHeaders;
        allowCredentials = builder.allowCredentials;
        maxAge = builder.maxAge;
        allowedRequestMethods = builder.requestMethods;
        allowedRequestHeaders = builder.requestHeaders;
        allowNullOrigin = builder.allowNullOrigin;
        preflightHeaders = builder.preflightHeaders;
        shortCurcuit = builder.shortCurcuit;
    }
```

### 抽象类继承类实现接口

```java
/**
 * Abstract HttpData implementation
 */
public abstract class AbstractHttpData extends AbstractReferenceCounted implements HttpData {

    private static final Pattern STRIP_PATTERN = Pattern.compile("(?:^\\s+|\\s+$|\\n)");
    private static final Pattern REPLACE_PATTERN = Pattern.compile("[\\r\\t]");

    private final String name;
    protected long definedSize;
    protected long size;
    private Charset charset = HttpConstants.DEFAULT_CHARSET;
    private boolean completed;
    private long maxSize = DefaultHttpDataFactory.MAXSIZE;

    protected AbstractHttpData(String name, Charset charset, long size) {
        if (name == null) {
            throw new NullPointerException("name");
        }

        name = REPLACE_PATTERN.matcher(name).replaceAll(" ");
        name = STRIP_PATTERN.matcher(name).replaceAll("");

        if (name.isEmpty()) {
            throw new IllegalArgumentException("empty name");
        }

        this.name = name;
        if (charset != null) {
            setCharset(charset);
        }
        definedSize = size;
    }

```

### 构造函数

```java

/**
 * Web Socket text frame
 */
public class TextWebSocketFrame extends WebSocketFrame {

    /**
     * Creates a new empty text frame.
     */
    public TextWebSocketFrame() {
        super(Unpooled.buffer(0));
    }

    /**
     * Creates a new text frame with the specified text string. The final fragment flag is set to true.
     *
     * @param text
     *            String to put in the frame
     */
    public TextWebSocketFrame(String text) {
        super(fromText(text));
    }

    /**
     * Creates a new text frame with the specified binary data. The final fragment flag is set to true.
     *
     * @param binaryData
     *            the content of the frame.
     */
    public TextWebSocketFrame(ByteBuf binaryData) {
        super(binaryData);
    }
```

### 初始化Set大小及构造函数中判空

```java

/**
 * Simple implementation of {@link Http2Connection}.
 */
public class DefaultHttp2Connection implements Http2Connection {

    private final Set<Listener> listeners = new HashSet<Listener>(4);
    private final IntObjectMap<Http2Stream> streamMap = new IntObjectHashMap<Http2Stream>();
    private final ConnectionStream connectionStream = new ConnectionStream();
    private final Set<Http2Stream> activeStreams = new LinkedHashSet<Http2Stream>();
    private final DefaultEndpoint<Http2LocalFlowController> localEndpoint;
    private final DefaultEndpoint<Http2RemoteFlowController> remoteEndpoint;
    private final Http2StreamRemovalPolicy removalPolicy;

    /**
     * Creates a connection with an immediate stream removal policy.
     *
     * @param server
     *            whether or not this end-point is the server-side of the HTTP/2 connection.
     */
    public DefaultHttp2Connection(boolean server) {
        this(server, immediateRemovalPolicy());
    }

    /**
     * Creates a new connection with the given settings.
     *
     * @param server
     *            whether or not this end-point is the server-side of the HTTP/2 connection.
     * @param removalPolicy
     *            the policy to be used for removal of closed stream.
     */
    public DefaultHttp2Connection(boolean server, Http2StreamRemovalPolicy removalPolicy) {

        this.removalPolicy = checkNotNull(removalPolicy, "removalPolicy");
        localEndpoint = new DefaultEndpoint<Http2LocalFlowController>(server);
        remoteEndpoint = new DefaultEndpoint<Http2RemoteFlowController>(!server);

        // Tell the removal policy how to remove a stream from this connection.
        removalPolicy.setAction(new Action() {
            @Override
            public void removeStream(Http2Stream stream) {
                DefaultHttp2Connection.this.removeStream((DefaultStream) stream);
            }
        });

        // Add the connection stream to the map.
        streamMap.put(connectionStream.id(), connectionStream);
    }
```

### 自定义异常，组合异常

```java

/**
 * Exception thrown when an HTTP/2 error was encountered.
 */
public class Http2Exception extends Exception {
    private static final long serialVersionUID = -6943456574080986447L;
    private final Http2Error error;

    public Http2Exception(Http2Error error) {
        this.error = error;
    }

    public Http2Exception(Http2Error error, String message) {
        super(message);
        this.error = error;
    }

    public Http2Exception(Http2Error error, String message, Throwable cause) {
        super(message, cause);
        this.error = error;
    }

    public Http2Error error() {
        return error;
    }
```

### 静态块为静态属性赋值

```java

@Sharable
public class ProtobufDecoder extends MessageToMessageDecoder<ByteBuf> {

    private static final boolean HAS_PARSER;

    static {
        boolean hasParser = false;
        try {
            // MessageLite.getParsetForType() is not available until protobuf 2.5.0.
            MessageLite.class.getDeclaredMethod("getParserForType");
            hasParser = true;
        } catch (Throwable t) {
            // Ignore
        }

        HAS_PARSER = hasParser;
    }
```

### 原子类AtomicLong增减 

```java

/**
 * TrafficCounter is associated with {@link AbstractTrafficShapingHandler}.
 *
 * <p>A <tt>TrafficCounter</tt> counts the read and written bytes such that the
 * {@link AbstractTrafficShapingHandler} can limit the traffic, globally or per channel.</p>
 *
 * <p>It computes the statistics for both read and written every {@link #checkInterval}, and calls
 * back to its parent {@link AbstractTrafficShapingHandler#doAccounting} method.  If the checkInterval
 * is set to 0, no accounting will be done and statistics will only be computed at each receive or
 * write operation.</p>
 */
public class TrafficCounter {
    private static final InternalLogger logger =
            InternalLoggerFactory.getInstance(TrafficCounter.class);

    /**
     * @return the time in ms using nanoTime, so not real EPOCH time but elapsed time in ms.
     */
    public static long milliSecondFromNano() {
        return System.nanoTime() / 1000000;
    }

    /**
     * Current written bytes
     */
    private final AtomicLong currentWrittenBytes = new AtomicLong();

    /**
     * Current read bytes
     */
    private final AtomicLong currentReadBytes = new AtomicLong();
```




