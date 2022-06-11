

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

### 