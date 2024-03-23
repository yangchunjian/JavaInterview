---
title: Java线程间通信方式
date: 2022-10-20 10:13:00
permalink: /pages/d477f6/
categories:
  - sourcecode
  - bottom
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 解答

合理地使用 Java 多线程可以更好地利用服务器资源。一般来讲，线程内部有自己私有的线程上下文，互不干扰。但是当我们需要多个线程之间相互协作的时候，就需要掌握 Java 线程的通信方式。下文将介绍 Java 线程之间的几种通信机制和原理。

## **1. 锁与同步**

在 Java 中，锁的概念都是基于对象的，所以又经常称它为对象锁。

一个锁同一时间只能被一个线程持有，其他线程如果需要得到这个锁，就得等这个线程释放这个锁。

在线程之间，有一个同步的概念。什么是同步呢？线程同步是线程之间按照一定的顺序执行。

为了达到线程同步（目的），我们可以使用锁（手段）来实现它。

先来看看一个无锁的程序：

    public class NoneLock {
        static class ThreadA implements Runnable {
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    System.out.println("Thread A " + i);
                }
            }
        }
        static class ThreadB implements Runnable {
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    System.out.println("Thread B " + i);
                }
            }
        }
    
        public static void main(String[] args) {
            new Thread(new ThreadA()).start();
            new Thread(new ThreadB()).start();
        }
    }


执行这个程序，会在控制台看到，线程 A 和线程 B 各自独立工作，输出自己的打印值。如下是某一次运行的结果。每一次运行结果都会不一样：

    ....
    Thread A 48
    Thread A 49
    Thread B 0
    Thread A 50
    Thread B 1
    Thread A 51
    Thread A 52
    ....


如果现在有一个需求，我想等 A 先执行完之后，再由 B 去执行，怎么办呢？最简单的方式就是使用一个“对象锁”：

    public class ObjectLock {
        private static Object lock = new Object(); //任何对象都可以作为锁
    
        static class ThreadA implements Runnable {
            @Override
            public void run() {
                synchronized (lock) { //上锁
                    for (int i = 0; i < 100; i++) {
                        System.out.println("Thread A " + i);
                    }
                }
            }
        }
        static class ThreadB implements Runnable {
            @Override
            public void run() {
                synchronized (lock) { //上锁
                    for (int i = 0; i < 100; i++) {
                        System.out.println("Thread B " + i);
                    }
                }
            }
        }
    
        public static void main(String[] args) throws InterruptedException {
            new Thread(new ThreadA()).start();
            Thread.sleep(10);
            new Thread(new ThreadB()).start();
        }
    }


这里声明了一个名字为 lock 的对象锁。在 ThreadA 和 ThreadB 内需要同步的代码块里，都是用 synchronized 关键字加上了同一个对象锁 lock。

上文说到了，根据线程和锁的关系，同一时间只有一个线程持有一个锁，那么线程 B 就会等线程 A 执行完成后释放 lock，线程 B 才能获得锁 lock。

这里在主线程里使用 sleep 方法睡眠了 10 毫秒，是为了防止线程 B 先得到锁。因为如果同时 start，线程 A 和线程 B 都是处于就绪状态，操作系统可能会先让 B 运行。这样就会先输出 B 的内容，然后 B 执行完成之后自动释放锁，线程 A 再执行。

## **2. 等待/通知机制**

上面一种基于“锁”的方式，线程需要不断地去尝试获得锁，如果失败了，再继续尝试（即自旋）。这可能会耗费服务器资源。而等待/通知机制是另一种方式。

Java 多线程的等待/通知机制是基于 Object 类的 wait() 方法和 notify()，notifyAll() 方法来实现的。

notify() 方法会随机叫醒一个正在等待的线程，而 notifyAll() 会叫醒所有正在等待的线程。

前面讲到，一个锁同一时刻只能被一个线程持有。而假如线程 A 现在持有了一个锁 lock 并开始执行，它可以使用 lock.wait() 让自己进入等待状态。这个时候，lock 这个锁是被释放了的。

这时，线程 B 获得了 lock 这个锁并开始执行，它可以在某一时刻，使用 lock.notify()，通知之前持有 lock 锁并进入等待状态的线程 A 可以继续往下执行了。

需要注意的是，这个时候线程 B 并没有释放锁 lock，除非线程 B 这个时候使用 lock.wait() 释放锁，或者线程 B 执行结束自行释放锁，线程 A 才能得到 lock 锁。

下面用代码来实现一下：

    public class WaitAndNotify {
        private static Object lock = new Object();
    
        static class ThreadA implements Runnable {
            @Override
            public void run() {
                synchronized (lock) {
                    for (int i = 0; i < 5; i++) {
                        try {
                            System.out.println("ThreadA: " + i);
                            lock.notify();
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    lock.notify();
                }
            }
        }
    
        static class ThreadB implements Runnable {
            @Override
            public void run() {
                synchronized (lock) {
                    for (int i = 0; i < 5; i++) {
                        try {
                            System.out.println("ThreadB: " + i);
                            lock.notify();
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    lock.notify();
                }
            }
        }
    
        public static void main(String[] args) throws InterruptedException {
            new Thread(new ThreadA()).start();
            Thread.sleep(1000);
            new Thread(new ThreadB()).start();
        }
    }

// 输出：

    ThreadA: 0
    ThreadB: 0
    ThreadA: 1
    ThreadB: 1
    ThreadA: 2
    ThreadB: 2
    ThreadA: 3
    ThreadB: 3
    ThreadA: 4
    ThreadB: 4


在这个 Demo 里，线程 A 和线程 B 首先打印出自己需要的东西，然后使用 notify() 方法叫醒另一个正在等待的线程，然后自己使用 wait() 方法陷入等待并释放 lock 锁。

需要注意的是等待/通知机制使用的是使用同一个对象锁，如果两个线程使用的是不同的对象锁，那它们之间是不能用等待/通知机制通信的。

## **3. 信号量**

JDK 提供了一个类似于“信号量”功能的类 Semaphore。但这里不是要介绍这个类，而是介绍一种基于 volatile 关键字的实现的信号量通信。

volatile 关键字能够保证内存的可见性：如果用 volatile 关键字声明了一个变量，在一个线程里面改变了这个变量的值，那其它线程是立马可见更改后的值的。

比如现在有一个需求，我想让线程 A 输出 0，然后线程 B 输出 1，再然后线程 A 输出 2…。以此类推。应该怎样实现呢？下面是具体代码：

    public class Signal {
        private static volatile int signal = 0; // 被volatile修饰地共享变量
    
        static class ThreadA implements Runnable {
            @Override
            public void run() {
                while (signal < 5) {
                    if (signal % 2 == 0) {
                        System.out.println("threadA: " + signal);
                        signal++;
                    }
                }
            }
        }
    
        static class ThreadB implements Runnable {
            @Override
            public void run() {
                while (signal < 5) {
                    if (signal % 2 == 1) {
                        System.out.println("threadB: " + signal);
                        signal = signal + 1;
                    }
                }
            }
        }
    
        public static void main(String[] args) throws InterruptedException {
            new Thread(new ThreadA()).start();
            Thread.sleep(1000);
            new Thread(new ThreadB()).start();
        }
    }

// 输出：

    threadA: 0
    threadB: 1
    threadA: 2
    threadB: 3
    threadA: 4


可以看到，使用了一个 volatile 变量 signal 来实现了“信号量”的模型。这里需要注意的是，volatile 变量需要进行原子操作。

需要注意的是，signal++ 并不是一个原子操作，所以在实际开发中，会根据需要使用 synchronized 给它“上锁”，或者是使用 AtomicInteger 等原子类。并且上面的程序也并不是线程安全的，因为执行 while 语句后，可能当前线程就暂停等待时间片了，等线程醒来，可能 signal 已经大于等于 5 了（多个线程同时执行了 signal++）。

这种实现方式并不一定高效，本例只是演示信号量

## **4. 管道**

管道是基于“管道流”的通信方式。JDK 提供了PipedWriter、 PipedReader、 PipedOutputStream、 PipedInputStream。其中，前面两个是基于字符的，后面两个是基于字节流的。

这里的示例代码使用的是基于字符的：

    public class Pipe {
        static class ReaderThread implements Runnable {
            private PipedReader reader;
    
            public ReaderThread(PipedReader reader) {
                this.reader = reader;
            }
    
            @Override
            public void run() {
                System.out.println("this is reader");
                int receive = 0;
                try {
                    while ((receive = reader.read()) != -1) {
                        //调用PipedReader的read方法从管道读出字符
                        System.out.print((char)receive);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    
        static class WriterThread implements Runnable {
    
            private PipedWriter writer;
    
            public WriterThread(PipedWriter writer) {
                this.writer = writer;
            }
    
            @Override
            public void run() {
                System.out.println("this is writer");
                int receive = 0;
                try {
                    writer.write("test"); //调用PipedWriter的write方法向管道写入字符
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    try {
                        writer.close(); //安全关闭管道
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    
        public static void main(String[] args) throws IOException, InterruptedException {
            PipedWriter writer = new PipedWriter();
            PipedReader reader = new PipedReader();
            writer.connect(reader); // 这里注意一定要连接，才能通信
    
            new Thread(new ReaderThread(reader)).start();
            Thread.sleep(1000);
            new Thread(new WriterThread(writer)).start();
        }
    }

// 输出：

    this is reader
    this is writer
    test


通过线程的构造函数，传入了 PipedWrite 和 PipedReader 对象。可以简单分析一下这个示例代码的执行流程：

1. 线程ReaderThread开始执行
2. 线程ReaderThread使用管道reader.read()进入“阻塞”
3. 线程WriterThread开始执行
4. 线程WriterThread用writer.write("test")往管道写入字符串
5. 线程WriterThread使用writer.close()结束管道写入，并执行完毕
6. 线程ReaderThread接受到管道输出的字符串并打印
7. 线程ReaderThread执行完毕

管道通信的应用场景：

使用管道多半与 I/O 流相关。当我们一个线程需要先另一个线程发送一个信息（比如字符串）或者文件等等时，就需要使用管道通信了。

## **5. 其它通信相关**

以上介绍了一些线程间通信的基本原理和方法。除此以外，还有一些与线程通信相关的知识点，这里一并介绍。

**5.1 join() 方法**

join() 方法是 Thread 类的一个实例方法。它的作用是让当前线程陷入“等待”状态，等 join 的这个线程执行完成后，再继续执行当前线程。

有时候，主线程创建并启动了子线程，如果子线程中需要进行大量的耗时运算，主线程往往将早于子线程结束之前结束。

如果主线程想等待子线程执行完毕后，获得子线程中的处理完的某个数据，就要用到 join() 方法了。

示例代码：

    public class Join {
        static class ThreadA implements Runnable {
            @Override
            public void run() {
                try {
                    System.out.println("我是子线程，我先睡一秒");
                    Thread.sleep(1000);
                    System.out.println("我是子线程，我睡完了一秒");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    
        public static void main(String[] args) throws InterruptedException {
            Thread thread = new Thread(new ThreadA());
            thread.start();
            thread.join();
            System.out.println("如果不加join方法，我会先被打印出来，加了就不一样了");
        }
    }


注意 join() 方法有两个重载方法，一个是 join(long)， 一个是 join(long, int)。

实际上，通过源码会发现，join() 方法及其重载方法底层都是利用了 wait(long) 这个方法。

对于 join(long, int)，通过查看源码(JDK 1.8)发现，底层并没有精确到纳秒，而是对第二个参数做了简单的判断和处理。

**5.2 sleep() 方法**

sleep() 方法是 Thread 类的一个静态方法。它的作用是让当前线程睡眠一段时间。它有这样两个方法：

    Thread.sleep(long)
    Thread.sleep(long, int)
同样，查看源码(JDK 1.8)发现，第二个方法貌似只对第二个参数做了简单的处理，没有精确到纳秒。实际上还是调用的第一个方法。

**sleep() 与 wait() 的区别**

这里需要强调一下：sleep 方法是不会释放当前的锁的，而 wait 方法会。

它们还有这些区别：

- wait 可以指定时间，也可以不指定；而 sleep 必须指定时间。
- wait 释放 cpu 资源，同时释放锁；sleep 释放 cpu 资源，但是不释放锁，所以易死锁。
- wait 必须放在同步块或同步方法中，而 sleep 可以在任意位置。

**5.3 ThreadLocal 类**

ThreadLocal，即线程本地变量，是一个以 ThreadLocal 对象为键、任意对象为值的 Map 存储结构。这个结构被附带在线程上，也就是说一个线程可以根据一个 ThreadLocal 对象查询到绑定在这个线程上的一个值。可以通过 set(T) 方法来设置一个值，在当前线程下再通过 get() 方法获取到原先设置的值。严格来说，ThreadLocal 类并不属于多线程间的通信，而是让每个线程有自己”独立“的变量，线程之间互不影响。它为每个线程都创建一个副本，每个线程可以访问自己内部的副本变量。

在下面代码清单所示的例子中，构建了一个常用的 Profiler 类，它具有 begin() 和 end() 两个方法，而 end() 方法返回从 begin() 方法调用开始到 end() 方法被调用时的时间差，单位是毫秒。

    public class Profiler {
        // 第一次 get()方法调用时会进行初始化（如果 set 方法没有调用），每个线程会调用一次
        private static final ThreadLocal<Long> TIME_THREADLOCAL = new ThreadLocal<Long>();
        
        protected Long initialValue() {
            return System.currentTimeMillis();
        }
        
        public static final void begin() {
            TIME_THREADLOCAL.set(System.currentTimeMillis());
        }
        
        public static final long end() {
            return System.currentTimeMillis() - TIME_THREADLOCAL.get();
        }
        
        public static void main(String[] args) throws Exception {
            Profiler.begin();
            TimeUnit.SECONDS.sleep(1);
            System.out.println("Cost: " + Profiler.end() + " mills");
        } 
    }


输出结果如下所示：

    Cost: 1001 mills 

Profiler 可以被复用在方法调用耗时统计的功能上，在方法的入口前执行 begin() 方法，在方法调用后执行 end() 方法，好处是两个方法的调用不用在一个方法或者类中，比如在 AOP（面向切面编程）中，可以在方法调用前的切入点执行 begin() 方法，而在方法调用后的切入点执行 end() 方法，这样依旧可以获得方法的执行耗时。

**ThreadLocal 的适用场景：**

当我们只想在本身的线程内使用的变量，可以用 ThreadLocal 来实现，并且这些变量是和线程的生命周期密切相关的，线程结束，变量也就销毁了。

如果开发者希望将类的某个静态变量（user ID 或者 transaction ID）与线程状态关联，则可以考虑使用 ThreadLocal。

最常见的 ThreadLocal 使用场景为用来解决数据库连接、Session 管理等。数据库连接和 Session 管理涉及多个复杂对象的初始化和关闭。如果在每个线程中声明一些私有变量来进行操作，那这个线程就变得不那么“轻量”了，需要频繁的创建和关闭连接。

**5.4 InheritableThreadLocal**

InheritableThreadLocal 类与 ThreadLocal 类稍有不同，Inheritable 是继承的意思。它不仅仅是当前线程可以存取副本值，而且它的子线程也可以存取这个副本值。

