---
title: jdk_3
date: 2022-06-25 11:05:42
permalink: /pages/47a1d3/
categories:
  - sourcecode
  - jdk
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

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

### 反射包中大部分调的是Native方法
```java
public final
class Array {

    /**
     * Constructor.  Class Array is not instantiable.
     */
    private Array() {}

    /**
     * Creates a new array with the specified component type and
     * length.
     * Invoking this method is equivalent to creating an array
     * as follows:
     * <blockquote>
     * <pre>
     * int[] x = {length};
     * Array.newInstance(componentType, x);
     * </pre>
     * </blockquote>
     *
     * <p>The number of dimensions of the new array must not
     * exceed 255.
     *
     * @param componentType the {@code Class} object representing the
     * component type of the new array
     * @param length the length of the new array
     * @return the new array
     * @exception NullPointerException if the specified
     * {@code componentType} parameter is null
     * @exception IllegalArgumentException if componentType is {@link
     * Void#TYPE} or if the number of dimensions of the requested array
     * instance exceed 255.
     * @exception NegativeArraySizeException if the specified {@code length}
     * is negative
     */
    public static Object newInstance(Class<?> componentType, int length)
        throws NegativeArraySizeException {
        return newArray(componentType, length);
    }

    /**
     * Creates a new array
     * with the specified component type and dimensions.
     * If {@code componentType}
     * represents a non-array class or interface, the new array
     * has {@code dimensions.length} dimensions and
     * {@code componentType} as its component type. If
     * {@code componentType} represents an array class, the
     * number of dimensions of the new array is equal to the sum
     * of {@code dimensions.length} and the number of
     * dimensions of {@code componentType}. In this case, the
     * component type of the new array is the component type of
     * {@code componentType}.
     *
     * <p>The number of dimensions of the new array must not
     * exceed 255.
     *
     * @param componentType the {@code Class} object representing the component
     * type of the new array
     * @param dimensions an array of {@code int} representing the dimensions of
     * the new array
     * @return the new array
     * @exception NullPointerException if the specified
     * {@code componentType} argument is null
     * @exception IllegalArgumentException if the specified {@code dimensions}
     * argument is a zero-dimensional array, if componentType is {@link
     * Void#TYPE}, or if the number of dimensions of the requested array
     * instance exceed 255.
     * @exception NegativeArraySizeException if any of the components in
     * the specified {@code dimensions} argument is negative.
     */
    public static Object newInstance(Class<?> componentType, int... dimensions)
        throws IllegalArgumentException, NegativeArraySizeException {
        return multiNewArray(componentType, dimensions);
    }
```

### 构造器类

```java
public final class Constructor<T> extends Executable {
    private Class<T>            clazz;
    private int                 slot;
    private Class<?>[]          parameterTypes;
    private Class<?>[]          exceptionTypes;
    private int                 modifiers;
    // Generics and annotations support
    private transient String    signature;
    // generic info repository; lazily initialized
    private transient ConstructorRepository genericInfo;
    private byte[]              annotations;
    private byte[]              parameterAnnotations;

    // Generics infrastructure
    // Accessor for factory
    private GenericsFactory getFactory() {
        // create scope and factory
        return CoreReflectionFactory.make(this, ConstructorScope.make(this));
    }
```


### 类的成员变量类Field
```java

public final class Field extends AccessibleObject implements Member {

    private Class<?>            clazz;
    private int                 slot;
    // This is guaranteed to be interned by the VM in the 1.4
    // reflection implementation
    private String              name;
    private Class<?>            type;
    private int                 modifiers;
    // Generics and annotations support
    private transient String    signature;
    // generic info repository; lazily initialized
    private transient FieldRepository genericInfo;
    private byte[]              annotations;
    // Cached field accessor created without override
    private FieldAccessor fieldAccessor;
    // Cached field accessor created with override
    private FieldAccessor overrideFieldAccessor;
    // For sharing of FieldAccessors. This branching structure is
    // currently only two levels deep (i.e., one root Field and
    // potentially many Field objects pointing to it.)
    //
    // If this branching structure would ever contain cycles, deadlocks can
    // occur in annotation code.
    private Field               root;

    // Generics infrastructure

    private String getGenericSignature() {return signature;}

    // Accessor for factory
    private GenericsFactory getFactory() {
        Class<?> c = getDeclaringClass();
        // create scope and factory
        return CoreReflectionFactory.make(c, ClassScope.make(c));
    }


```

### 类中的方法类

```java
public final class Method extends Executable {
    private Class<?>            clazz;
    private int                 slot;
    // This is guaranteed to be interned by the VM in the 1.4
    // reflection implementation
    private String              name;
    private Class<?>            returnType;
    private Class<?>[]          parameterTypes;
    private Class<?>[]          exceptionTypes;
    private int                 modifiers;
    // Generics and annotations support
    private transient String              signature;
    // generic info repository; lazily initialized
    private transient MethodRepository genericInfo;
    private byte[]              annotations;
    private byte[]              parameterAnnotations;
    private byte[]              annotationDefault;
    private volatile MethodAccessor methodAccessor;
    // For sharing of MethodAccessors. This branching structure is
    // currently only two levels deep (i.e., one root Method and
    // potentially many Method objects pointing to it.)
    //
    // If this branching structure would ever contain cycles, deadlocks can
    // occur in annotation code.
    private Method              root;

    // Generics infrastructure
    private String getGenericSignature() {return signature;}
```