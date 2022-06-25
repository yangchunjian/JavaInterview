---
title: Netty代码写法总结8
date: 2022-06-15 17:48:55
permalink: /pages/2cbdcb/
categories: 
  - sourcecode
  - netty
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---


## 总结8

### Catch中做业务逻辑
```java
**
 * Generates a self-signed certificate using {@code sun.security.x509} package provided by OpenJDK.
 */
final class OpenJdkSelfSignedCertGenerator {

    static String[] generate(String fqdn, KeyPair keypair, SecureRandom random) throws Exception {
        PrivateKey key = keypair.getPrivate();

        // Prepare the information required for generating an X.509 certificate.
        X509CertInfo info = new X509CertInfo();
        X500Name owner = new X500Name("CN=" + fqdn);
        info.set(X509CertInfo.VERSION, new CertificateVersion(CertificateVersion.V3));
        info.set(X509CertInfo.SERIAL_NUMBER, new CertificateSerialNumber(new BigInteger(64, random)));
        try {
            info.set(X509CertInfo.SUBJECT, new CertificateSubjectName(owner));
        } catch (CertificateException ignore) {
            info.set(X509CertInfo.SUBJECT, owner);
        }
        try {
            info.set(X509CertInfo.ISSUER, new CertificateIssuerName(owner));
        } catch (CertificateException ignore) {
            info.set(X509CertInfo.ISSUER, owner);
        }
```

### 单例模式和空方法

```java

/**
 * Insecure {@link java.security.SecureRandom} which relies on {@link ThreadLocalRandom} for random number generation.
 */
final class ThreadLocalInsecureRandom extends SecureRandom {

    private static final long serialVersionUID = -8209473337192526191L;

    private static final SecureRandom INSTANCE = new ThreadLocalInsecureRandom();

    static SecureRandom current() {
        return INSTANCE;
    }

    private ThreadLocalInsecureRandom() { }

    @Override
    public String getAlgorithm() {
        return "insecure";
    }

    @Override
    public void setSeed(byte[] seed) { }
```

### 组合

```java

class JdkSslEngine extends SSLEngine {
    private final SSLEngine engine;
    private final JdkSslSession session;

    JdkSslEngine(SSLEngine engine) {
        this.engine = engine;
        session = new JdkSslSession(engine);
    }

    @Override
    public JdkSslSession getSession() {
        return session;
    }

    public SSLEngine getWrappedEngine() {
        return engine;
    }
```

包装
```java
final class OpenSslX509Certificate extends X509Certificate {

    private final byte[] bytes;
    private X509Certificate wrapped;

    public OpenSslX509Certificate(byte[] bytes) {
        this.bytes = bytes;
    }

    @Override
    public void checkValidity() throws CertificateExpiredException, CertificateNotYetValidException {
        unwrap().checkValidity();
    }


    private X509Certificate unwrap() {
        X509Certificate wrapped = this.wrapped;
        if (wrapped == null) {
            try {
                wrapped = this.wrapped = (X509Certificate) SslContext.X509_CERT_FACTORY.generateCertificate(
                        new ByteArrayInputStream(bytes));
            } catch (CertificateException e) {
                throw new IllegalStateException(e);
            }
        }
        return wrapped;
    }
```

### 接口内部也有接口

```java
/**
 * Interface for a primitive map that uses {@code int}s as keys.
 *
 * @param <V> the value type stored in the map.
 */
public interface IntObjectMap<V> {

    /**
     * An Entry in the map.
     *
     * @param <V> the value type stored in the map.
     */
    interface Entry<V> {
        /**
         * Gets the key for this entry.
         */
        int key();

        /**
         * Gets the value for this entry.
         */
        V value();

        /**
         * Sets the value for this entry.
         */
        void setValue(V value);
    }

    /**
     * Gets the value in the map with the specified key.
     *
     * @param key the key whose associated value is to be returned.
     * @return the value or {@code null} if the key was not found in the map.
     */
    V get(int key);

    /**
     * Puts the given entry into the map.
     *
     * @param key the key of the entry.
     * @param value the value of the entry.
     * @return the previous value for this key or {@code null} if there was no previous mapping.
     */
    V put(int key, V value);

    /**
     * Puts all of the entries from the given map into this map.
     */
    void putAll(IntObjectMap<V> sourceMap);

    /**
     * Removes the entry with the specified key.
     *
     * @param key the key for the entry to be removed from this map.
     * @return the previous value for the key, or {@code null} if there was no mapping.
     */
    V remove(int key);

    /**
     * Returns the number of entries contained in this map.
     */
    int size();

    /**
     * Indicates whether or not this map is empty (i.e {@link #size()} == {@code 0]).

     */
    boolean isEmpty();

    /**
     * Clears all entries from this map.
     */
    void clear();

    /**
     * Indicates whether or not this map contains a value for the specified key.
     */
    boolean containsKey(int key);

    /**
     * Indicates whether or not the map contains the specified value.
     */
    boolean containsValue(V value);

    /**
     * Gets an iterable collection of the entries contained in this map.
     */
    Iterable<Entry<V>> entries();

    /**
     * Gets the keys contained in this map.
     */
    int[] keys();

    /**
     * Gets the values contained in this map.
     */
    V[] values(Class<V> clazz);

    /**
     * Gets the values contatins in this map as a {@link Collection}.
     */
    Collection<V> values();
}

```

### 接口方法声明异常

```java
public interface TimerTask {

    /**
     * Executed after the delay specified with
     * {@link Timer#newTimeout(TimerTask, long, TimeUnit)}.
     *
     * @param timeout a handle which is associated with this task
     */
    void run(Timeout timeout) throws Exception;
}

```

### 泛型类中定义枚举并直接用
```java

public final class ResourceLeakDetector<T> {

    private static final String PROP_LEVEL = "io.netty.leakDetectionLevel";
    private static final Level DEFAULT_LEVEL = Level.SIMPLE;

    /**
     * Represents the level of resource leak detection.
     */
    public enum Level {
        /**
         * Disables resource leak detection.
         */
        DISABLED,
        /**
         * Enables simplistic sampling resource leak detection which reports there is a leak or not,
         * at the cost of small overhead (default).
         */
        SIMPLE,
        /**
         * Enables advanced sampling resource leak detection which reports where the leaked object was accessed
         * recently at the cost of high overhead.
         */
        ADVANCED,
        /**
         * Enables paranoid resource leak detection which reports where the leaked object was accessed recently,
         * at the cost of the highest possible overhead (for testing purposes only).
         */
        PARANOID
    }

    private static Level level;
```

### Stack有构造方法

```java

public abstract class Recycler<T> {

    private static final InternalLogger logger = InternalLoggerFactory.getInstance(Recycler.class);

    private static final AtomicInteger ID_GENERATOR = new AtomicInteger(Integer.MIN_VALUE);
    private static final int OWN_THREAD_ID = ID_GENERATOR.getAndIncrement();
    private static final int DEFAULT_MAX_CAPACITY;
    private static final int INITIAL_CAPACITY;

    static {
        // In the future, we might have different maxCapacity for different object types.
        // e.g. io.netty.recycler.maxCapacity.writeTask
        //      io.netty.recycler.maxCapacity.outboundBuffer
        int maxCapacity = SystemPropertyUtil.getInt("io.netty.recycler.maxCapacity", 0);
        if (maxCapacity <= 0) {
            // TODO: Some arbitrary large number - should adjust as we get more production experience.
            maxCapacity = 262144;
        }

        DEFAULT_MAX_CAPACITY = maxCapacity;
        if (logger.isDebugEnabled()) {
            logger.debug("-Dio.netty.recycler.maxCapacity: {}", DEFAULT_MAX_CAPACITY);
        }

        INITIAL_CAPACITY = Math.min(DEFAULT_MAX_CAPACITY, 256);
    }

    private final int maxCapacity;
    private final FastThreadLocal<Stack<T>> threadLocal = new FastThreadLocal<Stack<T>>() {
        @Override
        protected Stack<T> initialValue() {
            return new Stack<T>(Recycler.this, Thread.currentThread(), maxCapacity);
        }
    };
```

### 自定义异常，可继承JDK里任意Exception子类
```java

/**
 * An {@link IllegalStateException} which is raised when a user attempts to access a {@link ReferenceCounted} whose
 * reference count has been decreased to 0 (and consequently freed).
 */
public class IllegalReferenceCountException extends IllegalStateException {

    private static final long serialVersionUID = -2507492394288153468L;

    public IllegalReferenceCountException() { }

    public IllegalReferenceCountException(int refCnt) {
        this("refCnt: " + refCnt);
    }

    public IllegalReferenceCountException(int refCnt, int increment) {
        this("refCnt: " + refCnt + ", " + (increment > 0? "increment: " + increment : "decrement: " + -increment));
    }
```


### 高级泛型

```java

/**
 * Maps a domain name to its associated value object.
 * <p>
 * DNS wildcard is supported as hostname, so you can use {@code *.netty.io} to match both {@code netty.io}
 * and {@code downloads.netty.io}.
 * </p>
 */
public class DomainNameMapping<V> implements Mapping<String, V> {

    private static final Pattern DNS_WILDCARD_PATTERN = Pattern.compile("^\\*\\..*");

    private final Map<String, V> map;

    private final V defaultValue;

```

### 泛型自己嵌套自己
```java

/**
 * A singleton which is safe to compare via the {@code ==} operator. Created and managed by {@link ConstantPool}.
 */
public interface Constant<T extends Constant<T>> extends Comparable<T> {

    /**
     * Returns the unique number assigned to this {@link Constant}.
     */
    int id();

    /**
     * Returns the name of this {@link Constant}.
     */
    String name();
}
```

### 普通接口中写泛型方法

```java

public interface AttributeMap {
    /**
     * Get the {@link Attribute} for the given {@link AttributeKey}. This method will never return null, but may return
     * an {@link Attribute} which does not have a value set yet.
     */
    <T> Attribute<T> attr(AttributeKey<T> key);

    /**
     * Returns {@code} true if and only if the given {@link Attribute} exists in this {@link AttributeMap}.
     */
    <T> boolean hasAttr(AttributeKey<T> key);
}
```

### 通用的泛型方法

```java

/**
 * An attribute which allows to store a value reference. It may be updated atomically and so is thread-safe.
 *
 * @param <T>   the type of the value it holds.
 */
public interface Attribute<T> {

    /**
     * Returns the key of this attribute.
     */
    AttributeKey<T> key();

    /**
     * Returns the current value, which may be {@code null}
     */
    T get();

    /**
     * Sets the value
     */
    void set(T value);

    /**
     *  Atomically sets to the given value and returns the old value which may be {@code null} if non was set before.
     */
    T getAndSet(T value);

    /**
     *  Atomically sets to the given value if this {@link Attribute} does not contain a value at the moment.
     *  If it was not possible to set the value as it contains a value it will just return the current value.
     */
    T setIfAbsent(T value);

    /**
     * Removes this attribute from the {@link AttributeMap} and returns the old value..  Subsequent {@link #get()}
     * calls will return @{code null}.
     */
    T getAndRemove();

    /**
     * Atomically sets the value to the given updated value if the current value == the expected value.
     * If it the set was successful it returns {@code true} otherwise {@code false}.
     */
    boolean compareAndSet(T oldValue, T newValue);

    /**
     * Removes this attribute from the {@link AttributeMap}.  Subsequent {@link #get()} calls will return @{code null}.
     */
    void remove();
}
```

### 复杂继承和实现

```java
/**
 * Abstract base class for {@link EventExecutor} implementations.
 */
public abstract class AbstractEventExecutor extends AbstractExecutorService implements EventExecutor {

    static final long DEFAULT_SHUTDOWN_QUIET_PERIOD = 2;
    static final long DEFAULT_SHUTDOWN_TIMEOUT = 15;

    private final EventExecutorGroup parent;

    protected AbstractEventExecutor() {
        this(null);
    }

    protected AbstractEventExecutor(EventExecutorGroup parent) {
        this.parent = parent;
    }

    @Override
    public EventExecutorGroup parent() {
        return parent;
    }

    @Override
    public EventExecutor next() {
        return this;
    }

```

### 类的静态方法随便调用，都是工具

```java
public class FastThreadLocal<V> {

    private static final int variablesToRemoveIndex = InternalThreadLocalMap.nextVariableIndex();

    /**
     * Removes all {@link FastThreadLocal} variables bound to the current thread.  This operation is useful when you
     * are in a container environment, and you don't want to leave the thread local variables in the threads you do not
     * manage.
     */
    public static void removeAll() {
        InternalThreadLocalMap threadLocalMap = InternalThreadLocalMap.getIfSet();
        if (threadLocalMap == null) {
            return;
        }

        try {
            Object v = threadLocalMap.indexedVariable(variablesToRemoveIndex);
            if (v != null && v != InternalThreadLocalMap.UNSET) {
                @SuppressWarnings("unchecked")
                Set<FastThreadLocal<?>> variablesToRemove = (Set<FastThreadLocal<?>>) v;
                FastThreadLocal<?>[] variablesToRemoveArray =
                        variablesToRemove.toArray(new FastThreadLocal[variablesToRemove.size()]);
                for (FastThreadLocal<?> tlv: variablesToRemoveArray) {
                    tlv.remove(threadLocalMap);
                }
            }
        } finally {
            InternalThreadLocalMap.remove();
        }
    }

```

### 加锁加监听通知

```java

    @Override
    public Promise<V> addListener(GenericFutureListener<? extends Future<? super V>> listener) {
        if (listener == null) {
            throw new NullPointerException("listener");
        }

        if (isDone()) {
            notifyLateListener(listener);
            return this;
        }

        synchronized (this) {
            if (!isDone()) {
                if (listeners == null) {
                    listeners = listener;
                } else {
                    if (listeners instanceof DefaultFutureListeners) {
                        ((DefaultFutureListeners) listeners).add(listener);
                    } else {
                        final GenericFutureListener<? extends Future<V>> firstListener =
                                (GenericFutureListener<? extends Future<V>>) listeners;
                        listeners = new DefaultFutureListeners(firstListener, listener);
                    }
                }
                return this;
            }
        }

        notifyLateListener(listener);
        return this;
    }
```

### 时间单位TimeUnit

```java
public final class GlobalEventExecutor extends AbstractScheduledEventExecutor {

    private static final InternalLogger logger = InternalLoggerFactory.getInstance(GlobalEventExecutor.class);

    private static final long SCHEDULE_PURGE_INTERVAL = TimeUnit.SECONDS.toNanos(1);

```

### 泛型数组，不确定类型用?号
```java
public class PromiseNotifier<V, F extends Future<V>> implements GenericFutureListener<F> {

    private final Promise<? super V>[] promises;

```

### 十六进制变量定义

```java
@SuppressWarnings("all")
public abstract class ForkJoinTask<V> implements Future<V>, Serializable {

    /*
     * See the internal documentation of class ForkJoinPool for a
     * general implementation overview.  ForkJoinTasks are mainly
     * responsible for maintaining their "status" field amidst relays
     * to methods in ForkJoinWorkerThread and ForkJoinPool.
     *
     * The methods of this class are more-or-less layered into
     * (1) basic status maintenance
     * (2) execution and awaiting completion
     * (3) user-level methods that additionally report results.
     * This is sometimes hard to see because this file orders exported
     * methods in a way that flows well in javadocs.
     */

    /*
     * The status field holds run control status bits packed into a
     * single int to minimize footprint and to ensure atomicity (via
     * CAS).  Status is initially zero, and takes on nonnegative
     * values until completed, upon which status (anded with
     * DONE_MASK) holds value NORMAL, CANCELLED, or EXCEPTIONAL. Tasks
     * undergoing blocking waits by other threads have the SIGNAL bit
     * set.  Completion of a stolen task with SIGNAL set awakens any
     * waiters via notifyAll. Even though suboptimal for some
     * purposes, we use basic builtin wait/notify to take advantage of
     * "monitor inflation" in JVMs that we would otherwise need to
     * emulate to avoid adding further per-task bookkeeping overhead.
     * We want these monitors to be "fat", i.e., not use biasing or
     * thin-lock techniques, so use some odd coding idioms that tend
     * to avoid them, mainly by arranging that every synchronized
     * block performs a wait, notifyAll or both.
     *
     * These control bits occupy only (some of) the upper half (16
     * bits) of status field. The lower bits are used for user-defined
     * tags.
     */

    /** The run status of this task */
    volatile int status; // accessed directly by pool and workers
    static final int DONE_MASK   = 0xf0000000;  // mask out non-completion bits
    static final int NORMAL      = 0xf0000000;  // must be negative
    static final int CANCELLED   = 0xc0000000;  // must be < NORMAL
    static final int EXCEPTIONAL = 0x80000000;  // must be < CANCELLED
    static final int SIGNAL      = 0x00010000;  // must be >= 1 << 16
    static final int SMASK       = 0x0000ffff;  // short bits for tags

```

### finally方法里做逻辑
```java

/**
 * A thread managed by a {@link ForkJoinPool}, which executes
 * {@link ForkJoinTask}s.
 * This class is subclassable solely for the sake of adding
 * functionality -- there are no overridable methods dealing with
 * scheduling or execution.  However, you can override initialization
 * and termination methods surrounding the main task processing loop.
 * If you do create such a subclass, you will also need to supply a
 * custom {@link ForkJoinPool.ForkJoinWorkerThreadFactory} to
 * {@linkplain ForkJoinPool#ForkJoinPool use it} in a {@code ForkJoinPool}.
 *
 * @since 1.7
 * @author Doug Lea
 */
@SuppressWarnings("all")
public class ForkJoinWorkerThread extends Thread {
    /*
     * ForkJoinWorkerThreads are managed by ForkJoinPools and perform
     * ForkJoinTasks. For explanation, see the internal documentation
     * of class ForkJoinPool.
     *
     * This class just maintains links to its pool and WorkQueue.  The
     * pool field is set immediately upon construction, but the
     * workQueue field is not set until a call to registerWorker
     * completes. This leads to a visibility race, that is tolerated
     * by requiring that the workQueue field is only accessed by the
     * owning thread.
     */

    final ForkJoinPool pool;                // the pool this thread works in
    final ForkJoinPool.WorkQueue workQueue; // work-stealing mechanics

    /**
     * Creates a ForkJoinWorkerThread operating in the given pool.
     *
     * @param pool the pool this thread works in
     * @throws NullPointerException if pool is null
     */
    protected ForkJoinWorkerThread(ForkJoinPool pool) {
        // Use a placeholder until a useful name can be set in registerWorker
        super("aForkJoinWorkerThread");
        this.pool = pool;
        this.workQueue = pool.registerWorker(this);
    }

    /**
     * Returns the pool hosting this thread.
     *
     * @return the pool
     */
    public ForkJoinPool getPool() {
        return pool;
    }

    /**
     * Returns the unique index number of this thread in its pool.
     * The returned value ranges from zero to the maximum number of
     * threads (minus one) that may exist in the pool, and does not
     * change during the lifetime of the thread.  This method may be
     * useful for applications that track status or collect results
     * per-worker-thread rather than per-task.
     *
     * @return the index number
     */
    public int getPoolIndex() {
        return workQueue.poolIndex >>> 1; // ignore odd/even tag bit
    }

    /**
     * Initializes internal state after construction but before
     * processing any tasks. If you override this method, you must
     * invoke {@code super.onStart()} at the beginning of the method.
     * Initialization requires care: Most fields must have legal
     * default values, to ensure that attempted accesses from other
     * threads work correctly even before this thread starts
     * processing tasks.
     */
    protected void onStart() {
    }

    /**
     * Performs cleanup associated with termination of this worker
     * thread.  If you override this method, you must invoke
     * {@code super.onTermination} at the end of the overridden method.
     *
     * @param exception the exception causing this thread to abort due
     * to an unrecoverable error, or {@code null} if completed normally
     */
    protected void onTermination(Throwable exception) {
    }

    /**
     * This method is required to be public, but should never be
     * called explicitly. It performs the main run loop to execute
     * {@link ForkJoinTask}s.
     */
    public void run() {
        Throwable exception = null;
        try {
            onStart();
            pool.runWorker(workQueue);
        } catch (Throwable ex) {
            exception = ex;
        } finally {
            try {
                onTermination(exception);
            } catch (Throwable ex) {
                if (exception == null)
                    exception = ex;
            } finally {
                pool.deregisterWorker(this, exception);
            }
        }
    }
}
``` 

### 枚举入参

```java

/**
 * A skeletal implementation of {@link InternalLogger}.  This class implements
 * all methods that have a {@link InternalLogLevel} parameter by default to call
 * specific logger methods such as {@link #info(String)} or {@link #isInfoEnabled()}.
 */
public abstract class AbstractInternalLogger implements InternalLogger, Serializable {

    private static final long serialVersionUID = -6382972526573193470L;

    private static final String EXCEPTION_MESSAGE = "Unexpected exception:";

    private final String name;

    /**
     * Creates a new instance.
     */
    protected AbstractInternalLogger(String name) {
        if (name == null) {
            throw new NullPointerException("name");
        }
        this.name = name;
    }

    @Override
    public String name() {
        return name;
    }

    @Override
    public boolean isEnabled(InternalLogLevel level) {
        switch (level) {
        case TRACE:
            return isTraceEnabled();
        case DEBUG:
            return isDebugEnabled();
        case INFO:
            return isInfoEnabled();
        case WARN:
            return isWarnEnabled();
        case ERROR:
            return isErrorEnabled();
        default:
            throw new Error();
        }
    }

    @Override
    public void trace(Throwable t) {
        trace(EXCEPTION_MESSAGE, t);
    }

    @Override
    public void debug(Throwable t) {
        debug(EXCEPTION_MESSAGE, t);
    }

    @Override
    public void info(Throwable t) {
        info(EXCEPTION_MESSAGE, t);
    }

    @Override
    public void warn(Throwable t) {
        warn(EXCEPTION_MESSAGE, t);
    }

    @Override
    public void error(Throwable t) {
        error(EXCEPTION_MESSAGE, t);
    }

    @Override
    public void log(InternalLogLevel level, String msg, Throwable cause) {
        switch (level) {
        case TRACE:
            trace(msg, cause);
            break;
        case DEBUG:
            debug(msg, cause);
            break;
        case INFO:
            info(msg, cause);
            break;
        case WARN:
            warn(msg, cause);
            break;
        case ERROR:
            error(msg, cause);
            break;
        default:
            throw new Error();
        }
    }

    @Override
    public void log(InternalLogLevel level, Throwable cause) {
        switch (level) {
            case TRACE:
                trace(cause);
                break;
            case DEBUG:
                debug(cause);
                break;
            case INFO:
                info(cause);
                break;
            case WARN:
                warn(cause);
                break;
            case ERROR:
                error(cause);
                break;
            default:
                throw new Error();
        }
    }
```

### 构造函数里调用父类构造函数
```java

/**
 * <a href="http://commons.apache.org/logging/">Apache Commons Logging</a>
 * logger.
 */
class CommonsLogger extends AbstractInternalLogger {

    private static final long serialVersionUID = 8647838678388394885L;

    private final transient Log logger;

    CommonsLogger(Log logger, String name) {
        super(name);
        if (logger == null) {
            throw new NullPointerException("logger");
        }
        this.logger = logger;
    }

```

### 顶级抽象基类
```java

/**
 * A skeletal implementation of {@link InternalLogger}.  This class implements
 * all methods that have a {@link InternalLogLevel} parameter by default to call
 * specific logger methods such as {@link #info(String)} or {@link #isInfoEnabled()}.
 */
public abstract class AbstractInternalLogger implements InternalLogger, Serializable {

    private static final long serialVersionUID = -6382972526573193470L;

    private static final String EXCEPTION_MESSAGE = "Unexpected exception:";

    private final String name;

    /**
     * Creates a new instance.
     */
    protected AbstractInternalLogger(String name) {
        if (name == null) {
            throw new NullPointerException("name");
        }
        this.name = name;
    }


package io.netty.util.internal.logging;

/**
 * <em>Internal-use-only</em> logger used by Netty.  <strong>DO NOT</strong>
 * access this class outside of Netty.
 */
public interface InternalLogger {

    /**
     * Return the name of this {@link InternalLogger} instance.
     *
     * @return name of this logger instance
     */
    String name();

    /**
     * Is the logger instance enabled for the TRACE level?
     *
     * @return True if this Logger is enabled for the TRACE level,
     *         false otherwise.
     */
    boolean isTraceEnabled();

    /**
     * Log a message at the TRACE level.
     *
     * @param msg the message string to be logged
     */
    void trace(String msg);
```

### 字符数组操作

```java
public final class AppendableCharSequence implements CharSequence, Appendable {
    private char[] chars;
    private int pos;

    public AppendableCharSequence(int length) {
        if (length < 1) {
            throw new IllegalArgumentException("length: " + length + " (length: >= 1)");
        }
        chars = new char[length];
    }

    private AppendableCharSequence(char[] chars) {
        this.chars = chars;
        pos = chars.length;
    }

    @Override
    public int length() {
        return pos;
    }

    @Override
    public char charAt(int index) {
        if (index > pos) {
            throw new IndexOutOfBoundsException();
        }
        return chars[index];
    }

    @Override
    public AppendableCharSequence subSequence(int start, int end) {
        return new AppendableCharSequence(Arrays.copyOfRange(chars, start, end));
    }

    @Override
    public AppendableCharSequence append(char c) {
        if (pos == chars.length) {
            char[] old = chars;
            // double it
            int len = old.length << 1;
            if (len < 0) {
                throw new IllegalStateException();
            }
            chars = new char[len];
            System.arraycopy(old, 0, chars, 0, old.length);
        }
        chars[pos++] = c;
        return this;
    }
```

### 解包装的方法

```java
/**
 * Generic interface to wrap an {@link EventExecutor} and a {@link Callable}.
 *
 * This interface is used internally to ensure scheduled tasks are executed by
 * the correct {@link EventExecutor} after channel migration.
 *
 * @see io.netty.util.concurrent.ScheduledFutureTask
 * @see io.netty.util.concurrent.SingleThreadEventExecutor
 *
 * @param <V>   the result type of method {@link Callable#call()}.
 */
public interface CallableEventExecutorAdapter<V> extends Callable<V> {
    /**
     * Returns the wrapped {@link EventExecutor}.
     */
    EventExecutor executor();

    /**
     * Returns the wrapped {@link Callable}.
     */
    Callable<V> unwrap();
}

```

### static代码块里try{}catch(Throwable t){}代码块

```java

/**
 * Allows to free direct {@link ByteBuffer} by using {@link Cleaner}. This is encapsulated in an extra class to be able
 * to use {@link PlatformDependent0} on Android without problems.
 *
 * For more details see <a href="https://github.com/netty/netty/issues/2604">#2604</a>.
 */
final class Cleaner0 {
    private static final long CLEANER_FIELD_OFFSET;
    private static final InternalLogger logger = InternalLoggerFactory.getInstance(Cleaner0.class);

    static {
        ByteBuffer direct = ByteBuffer.allocateDirect(1);
        Field cleanerField;
        long fieldOffset = -1;
        if (PlatformDependent0.hasUnsafe()) {
            try {
                cleanerField = direct.getClass().getDeclaredField("cleaner");
                cleanerField.setAccessible(true);
                Cleaner cleaner = (Cleaner) cleanerField.get(direct);
                cleaner.clean();
                fieldOffset = PlatformDependent0.objectFieldOffset(cleanerField);
            } catch (Throwable t) {
                // We don't have ByteBuffer.cleaner().
                fieldOffset = -1;
            }
        }
        logger.debug("java.nio.ByteBuffer.cleaner(): {}", fieldOffset != -1? "available" : "unavailable");
        CLEANER_FIELD_OFFSET = fieldOffset;

        // free buffer if possible
        freeDirectBuffer(direct);
    }

    static void freeDirectBuffer(ByteBuffer buffer) {
        if (CLEANER_FIELD_OFFSET == -1 || !buffer.isDirect()) {
            return;
        }
        try {
            Cleaner cleaner = (Cleaner) PlatformDependent0.getObject(buffer, CLEANER_FIELD_OFFSET);
            if (cleaner != null) {
                cleaner.clean();
            }
        } catch (Throwable t) {
            // Nothing we can do here.
        }
    }

    private Cleaner0() { }
}
```

### 并发Set集合
```java

package io.netty.util.internal;

import java.io.Serializable;
import java.util.AbstractSet;
import java.util.Iterator;
import java.util.concurrent.ConcurrentMap;

public final class ConcurrentSet<E> extends AbstractSet<E> implements Serializable {

    private static final long serialVersionUID = -6761513279741915432L;

    private final ConcurrentMap<E, Boolean> map;

    /**
     * Creates a new instance which wraps the specified {@code map}.
     */
    public ConcurrentSet() {
        map = PlatformDependent.newConcurrentHashMap();
    }

    @Override
    public int size() {
        return map.size();
    }

    @Override
    public boolean contains(Object o) {
        return map.containsKey(o);
    }

    @Override
    public boolean add(E o) {
        return map.putIfAbsent(o, Boolean.TRUE) == null;
    }

    @Override
    public boolean remove(Object o) {
        return map.remove(o) != null;
    }

    @Override
    public void clear() {
        map.clear();
    }

    @Override
    public Iterator<E> iterator() {
        return map.keySet().iterator();
    }
}

```

### 空数组

```java

public final class EmptyArrays {

    public static final byte[] EMPTY_BYTES = new byte[0];
    public static final char[] EMPTY_CHARS = new char[0];
    public static final boolean[] EMPTY_BOOLEANS = new boolean[0];
    public static final double[] EMPTY_DOUBLES = new double[0];
    public static final float[] EMPTY_FLOATS = new float[0];
    public static final int[] EMPTY_INTS = new int[0];
    public static final short[] EMPTY_SHORTS = new short[0];
    public static final long[] EMPTY_LONGS = new long[0];
    public static final Object[] EMPTY_OBJECTS = new Object[0];
    public static final Class<?>[] EMPTY_CLASSES = new Class[0];
    public static final String[] EMPTY_STRINGS = new String[0];
    public static final StackTraceElement[] EMPTY_STACK_TRACE = new StackTraceElement[0];
    public static final ByteBuffer[] EMPTY_BYTE_BUFFERS = new ByteBuffer[0];
    public static final X509Certificate[] EMPTY_X509_CERTIFICATES = new X509Certificate[0];

    private EmptyArrays() { }
}

```

### 类中只定义成员变量
```java

public final class IntegerHolder {
    public int value;
}
```

### 初始化数组大小
```java
public class DnsNameResolver extends SimpleNameResolver<InetSocketAddress> {

    private static final InternalLogger logger = InternalLoggerFactory.getInstance(DnsNameResolver.class);

    static final InetSocketAddress ANY_LOCAL_ADDR = new InetSocketAddress(0);

    private static final InternetProtocolFamily[] DEFAULT_RESOLVE_ADDRESS_TYPES = new InternetProtocolFamily[2];

    static {
        // Note that we did not use SystemPropertyUtil.getBoolean() here to emulate the behavior of JDK.
        if ("true".equalsIgnoreCase(SystemPropertyUtil.get("java.net.preferIPv6Addresses"))) {
            DEFAULT_RESOLVE_ADDRESS_TYPES[0] = InternetProtocolFamily.IPv6;
            DEFAULT_RESOLVE_ADDRESS_TYPES[1] = InternetProtocolFamily.IPv4;
            logger.debug("-Djava.net.preferIPv6Addresses: true");
        } else {
            DEFAULT_RESOLVE_ADDRESS_TYPES[0] = InternetProtocolFamily.IPv4;
            DEFAULT_RESOLVE_ADDRESS_TYPES[1] = InternetProtocolFamily.IPv6;
            logger.debug("-Djava.net.preferIPv6Addresses: false");
        }
    }
```