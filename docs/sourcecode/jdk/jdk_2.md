---
title: JDK代码写法总结2
categories: 
  - sourcecode
  - jdk
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 总结1

### 静态加载C的类库
 
```java
public final
class DatagramPacket {

    /**
     * Perform class initialization
     */
    static {
        java.security.AccessController.doPrivileged(
            new java.security.PrivilegedAction<Void>() {
                public Void run() {
                    System.loadLibrary("net");
                    return null;
                }
            });
        init();
    }

    
    
    /**
     * Perform class load-time initializations.
     */
    private native static void init();
```

### 顶级接口
```java
public
class InetAddress implements java.io.Serializable {
    /**
     * Specify the address family: Internet Protocol, Version 4
     * @since 1.4
     */
    static final int IPv4 = 1;

    /**
     * Specify the address family: Internet Protocol, Version 6
     * @since 1.4
     */
    static final int IPv6 = 2;

    /* Specify address family preference */
    static transient boolean preferIPv6Address = false;

    static class InetAddressHolder {

```

### 容器类
```java
class InetAddressContainer {
    InetAddress addr;
}

```

### 难的是类中定义哪些属性

```java
public
class Socket implements java.io.Closeable {
    /**
     * Various states of this socket.
     */
    private boolean created = false;
    private boolean bound = false;
    private boolean connected = false;
    private boolean closed = false;
    private Object closeLock = new Object();
    private boolean shutIn = false;
    private boolean shutOut = false;


    public Socket(Proxy proxy) {
        // Create a copy of Proxy as a security measure
        if (proxy == null) {
            throw new IllegalArgumentException("Invalid Proxy");
        }
        Proxy p = proxy == Proxy.NO_PROXY ? Proxy.NO_PROXY
                                          : sun.net.ApplicationProxy.create(proxy);
        Proxy.Type type = p.type();
        if (type == Proxy.Type.SOCKS || type == Proxy.Type.HTTP) {
            SecurityManager security = System.getSecurityManager();
            InetSocketAddress epoint = (InetSocketAddress) p.address();
            if (epoint.getAddress() != null) {
                checkAddress (epoint.getAddress(), "Socket");
            }
            if (security != null) {
                if (epoint.isUnresolved())
                    epoint = new InetSocketAddress(epoint.getHostName(), epoint.getPort());
                if (epoint.isUnresolved())
                    security.checkConnect(epoint.getHostName(), epoint.getPort());
                else
                    security.checkConnect(epoint.getAddress().getHostAddress(),
                                  epoint.getPort());
            }
            impl = type == Proxy.Type.SOCKS ? new SocksSocketImpl(p)
                                            : new HttpConnectSocketImpl(p);
            impl.setSocket(this);
        } else {
            if (p == Proxy.NO_PROXY) {
                if (factory == null) {
                    impl = new PlainSocketImpl();
                    impl.setSocket(this);
                } else
                    setImpl();
            } else
                throw new IllegalArgumentException("Invalid Proxy");
        }
    }

```

### JDK注解
```java

/**
 * A socket option associated with an SCTP channel.
 *
 * @param   <T>     The type of the socket option value.
 *
 * @since 1.7
 *
 * @see SctpStandardSocketOptions
 */
@jdk.Exported
public interface SctpSocketOption<T> extends SocketOption<T> { }

```

### URI区分哪些层

```java

public final class URI
    implements Comparable<URI>, Serializable
{

    // Note: Comments containing the word "ASSERT" indicate places where a
    // throw of an InternalError should be replaced by an appropriate assertion
    // statement once asserts are enabled in the build.

    static final long serialVersionUID = -6052424284110960213L;


    // -- Properties and components of this instance --

    // Components of all URIs: [<scheme>:]<scheme-specific-part>[#<fragment>]
    private transient String scheme;            // null ==> relative URI
    private transient String fragment;

    // Hierarchical URI components: [//<authority>]<path>[?<query>]
    private transient String authority;         // Registry or server

    // Server-based authority: [<userInfo>@]<host>[:<port>]
    private transient String userInfo;
    private transient String host;              // null ==> registry-based
    private transient int port = -1;            // -1 ==> undefined

    // Remaining components of hierarchical URIs
    private transient String path;              // null ==> opaque
    private transient String query;

    // The remaining fields may be computed on demand

    private volatile transient String schemeSpecificPart;
    private volatile transient int hash;        // Zero ==> undefined

    private volatile transient String decodedUserInfo = null;
    private volatile transient String decodedAuthority = null;
    private volatile transient String decodedPath = null;
    private volatile transient String decodedQuery = null;
    private volatile transient String decodedFragment = null;
    private volatile transient String decodedSchemeSpecificPart = null;

    /**
     * The string form of this URI.
     *
     * @serial
     */
    private volatile String string;             // The only serializable field



    // -- Constructors and factories --

    private URI() { }                           // Used internally
```

