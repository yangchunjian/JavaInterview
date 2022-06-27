
## 总结3

### 上下文及监听
不是对数据的增删改查，就是对Java对象的增删改查
```java


@SuppressWarnings("rawtypes")
public interface BeanContext extends BeanContextChild, Collection, DesignMode, Visibility {

    /**
     * Instantiate the javaBean named as a
     * child of this <code>BeanContext</code>.
     * The implementation of the JavaBean is
     * derived from the value of the beanName parameter,
     * and is defined by the
     * <code>java.beans.Beans.instantiate()</code> method.
     *
     * @return a javaBean named as a child of this
     * <code>BeanContext</code>
     * @param beanName The name of the JavaBean to instantiate
     * as a child of this <code>BeanContext</code>
     * @throws IOException if an IO problem occurs
     * @throws ClassNotFoundException if the class identified
     * by the beanName parameter is not found
     */
    Object instantiateChild(String beanName) throws IOException, ClassNotFoundException;

    /**
     * Analagous to <code>java.lang.ClassLoader.getResourceAsStream()</code>,
     * this method allows a <code>BeanContext</code> implementation
     * to interpose behavior between the child <code>Component</code>
     * and underlying <code>ClassLoader</code>.
     *
     * @param name the resource name
     * @param bcc the specified child
     * @return an <code>InputStream</code> for reading the resource,
     * or <code>null</code> if the resource could not
     * be found.
     * @throws IllegalArgumentException if
     * the resource is not valid
     */
    InputStream getResourceAsStream(String name, BeanContextChild bcc) throws IllegalArgumentException;

    /**
     * Analagous to <code>java.lang.ClassLoader.getResource()</code>, this
     * method allows a <code>BeanContext</code> implementation to interpose
     * behavior between the child <code>Component</code>
     * and underlying <code>ClassLoader</code>.
     *
     * @param name the resource name
     * @param bcc the specified child
     * @return a <code>URL</code> for the named
     * resource for the specified child
     * @throws IllegalArgumentException
     * if the resource is not valid
     */
    URL getResource(String name, BeanContextChild bcc) throws IllegalArgumentException;

     /**
      * Adds the specified <code>BeanContextMembershipListener</code>
      * to receive <code>BeanContextMembershipEvents</code> from
      * this <code>BeanContext</code> whenever it adds
      * or removes a child <code>Component</code>(s).
      *
      * @param bcml the BeanContextMembershipListener to be added
      */
    void addBeanContextMembershipListener(BeanContextMembershipListener bcml);

     /**
      * Removes the specified <code>BeanContextMembershipListener</code>
      * so that it no longer receives <code>BeanContextMembershipEvent</code>s
      * when the child <code>Component</code>(s) are added or removed.
      *
      * @param bcml the <code>BeanContextMembershipListener</code>
      * to be removed
      */
    void removeBeanContextMembershipListener(BeanContextMembershipListener bcml);

    /**
     * This global lock is used by both <code>BeanContext</code>
     * and <code>BeanContextServices</code> implementors
     * to serialize changes in a <code>BeanContext</code>
     * hierarchy and any service requests etc.
     */
    public static final Object globalHierarchyLock = new Object();
}
```

### HashTable中key和value为对象的情况
加锁

```java
class BeansAppletContext implements AppletContext {
    Applet target;
    Hashtable<URL,Object> imageCache = new Hashtable<>();

    BeansAppletContext(Applet target) {
        this.target = target;
    }

    public AudioClip getAudioClip(URL url) {
        // We don't currently support audio clips in the Beans.instantiate
        // applet context, unless by some luck there exists a URL content
        // class that can generate an AudioClip from the audio URL.
        try {
            return (AudioClip) url.getContent();
        } catch (Exception ex) {
            return null;
        }
    }

    public synchronized Image getImage(URL url) {
        Object o = imageCache.get(url);
        if (o != null) {
            return (Image)o;
        }
        try {
            o = url.getContent();
            if (o == null) {
                return null;
            }
            if (o instanceof Image) {
                imageCache.put(url, o);
                return (Image) o;
            }
            // Otherwise it must be an ImageProducer.
            Image img = target.createImage((java.awt.image.ImageProducer)o);
            imageCache.put(url, img);
            return img;

        } catch (Exception ex) {
            return null;
        }
    }

```
