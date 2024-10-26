(window.webpackJsonp=window.webpackJsonp||[]).push([[932],{2085:function(e,n,r){"use strict";r.r(n);var t=r(12),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"解答"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[e._v("#")]),e._v(" 解答")]),e._v(" "),r("p",[e._v("合理地使用 Java 多线程可以更好地利用服务器资源。一般来讲，线程内部有自己私有的线程上下文，互不干扰。但是当我们需要多个线程之间相互协作的时候，就需要掌握 Java 线程的通信方式。下文将介绍 Java 线程之间的几种通信机制和原理。")]),e._v(" "),r("h2",{attrs:{id:"_1-锁与同步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-锁与同步"}},[e._v("#")]),e._v(" "),r("strong",[e._v("1. 锁与同步")])]),e._v(" "),r("p",[e._v("在 Java 中，锁的概念都是基于对象的，所以又经常称它为对象锁。")]),e._v(" "),r("p",[e._v("一个锁同一时间只能被一个线程持有，其他线程如果需要得到这个锁，就得等这个线程释放这个锁。")]),e._v(" "),r("p",[e._v("在线程之间，有一个同步的概念。什么是同步呢？线程同步是线程之间按照一定的顺序执行。")]),e._v(" "),r("p",[e._v("为了达到线程同步（目的），我们可以使用锁（手段）来实现它。")]),e._v(" "),r("p",[e._v("先来看看一个无锁的程序：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class NoneLock {\n    static class ThreadA implements Runnable {\n        @Override\n        public void run() {\n            for (int i = 0; i < 100; i++) {\n                System.out.println("Thread A " + i);\n            }\n        }\n    }\n    static class ThreadB implements Runnable {\n        @Override\n        public void run() {\n            for (int i = 0; i < 100; i++) {\n                System.out.println("Thread B " + i);\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        new Thread(new ThreadA()).start();\n        new Thread(new ThreadB()).start();\n    }\n}\n')])])]),r("p",[e._v("执行这个程序，会在控制台看到，线程 A 和线程 B 各自独立工作，输出自己的打印值。如下是某一次运行的结果。每一次运行结果都会不一样：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("....\nThread A 48\nThread A 49\nThread B 0\nThread A 50\nThread B 1\nThread A 51\nThread A 52\n....\n")])])]),r("p",[e._v("如果现在有一个需求，我想等 A 先执行完之后，再由 B 去执行，怎么办呢？最简单的方式就是使用一个“对象锁”：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class ObjectLock {\n    private static Object lock = new Object(); //任何对象都可以作为锁\n\n    static class ThreadA implements Runnable {\n        @Override\n        public void run() {\n            synchronized (lock) { //上锁\n                for (int i = 0; i < 100; i++) {\n                    System.out.println("Thread A " + i);\n                }\n            }\n        }\n    }\n    static class ThreadB implements Runnable {\n        @Override\n        public void run() {\n            synchronized (lock) { //上锁\n                for (int i = 0; i < 100; i++) {\n                    System.out.println("Thread B " + i);\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        new Thread(new ThreadA()).start();\n        Thread.sleep(10);\n        new Thread(new ThreadB()).start();\n    }\n}\n')])])]),r("p",[e._v("这里声明了一个名字为 lock 的对象锁。在 ThreadA 和 ThreadB 内需要同步的代码块里，都是用 synchronized 关键字加上了同一个对象锁 lock。")]),e._v(" "),r("p",[e._v("上文说到了，根据线程和锁的关系，同一时间只有一个线程持有一个锁，那么线程 B 就会等线程 A 执行完成后释放 lock，线程 B 才能获得锁 lock。")]),e._v(" "),r("p",[e._v("这里在主线程里使用 sleep 方法睡眠了 10 毫秒，是为了防止线程 B 先得到锁。因为如果同时 start，线程 A 和线程 B 都是处于就绪状态，操作系统可能会先让 B 运行。这样就会先输出 B 的内容，然后 B 执行完成之后自动释放锁，线程 A 再执行。")]),e._v(" "),r("h2",{attrs:{id:"_2-等待-通知机制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-等待-通知机制"}},[e._v("#")]),e._v(" "),r("strong",[e._v("2. 等待/通知机制")])]),e._v(" "),r("p",[e._v("上面一种基于“锁”的方式，线程需要不断地去尝试获得锁，如果失败了，再继续尝试（即自旋）。这可能会耗费服务器资源。而等待/通知机制是另一种方式。")]),e._v(" "),r("p",[e._v("Java 多线程的等待/通知机制是基于 Object 类的 wait() 方法和 notify()，notifyAll() 方法来实现的。")]),e._v(" "),r("p",[e._v("notify() 方法会随机叫醒一个正在等待的线程，而 notifyAll() 会叫醒所有正在等待的线程。")]),e._v(" "),r("p",[e._v("前面讲到，一个锁同一时刻只能被一个线程持有。而假如线程 A 现在持有了一个锁 lock 并开始执行，它可以使用 lock.wait() 让自己进入等待状态。这个时候，lock 这个锁是被释放了的。")]),e._v(" "),r("p",[e._v("这时，线程 B 获得了 lock 这个锁并开始执行，它可以在某一时刻，使用 lock.notify()，通知之前持有 lock 锁并进入等待状态的线程 A 可以继续往下执行了。")]),e._v(" "),r("p",[e._v("需要注意的是，这个时候线程 B 并没有释放锁 lock，除非线程 B 这个时候使用 lock.wait() 释放锁，或者线程 B 执行结束自行释放锁，线程 A 才能得到 lock 锁。")]),e._v(" "),r("p",[e._v("下面用代码来实现一下：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class WaitAndNotify {\n    private static Object lock = new Object();\n\n    static class ThreadA implements Runnable {\n        @Override\n        public void run() {\n            synchronized (lock) {\n                for (int i = 0; i < 5; i++) {\n                    try {\n                        System.out.println("ThreadA: " + i);\n                        lock.notify();\n                        lock.wait();\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                }\n                lock.notify();\n            }\n        }\n    }\n\n    static class ThreadB implements Runnable {\n        @Override\n        public void run() {\n            synchronized (lock) {\n                for (int i = 0; i < 5; i++) {\n                    try {\n                        System.out.println("ThreadB: " + i);\n                        lock.notify();\n                        lock.wait();\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                }\n                lock.notify();\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        new Thread(new ThreadA()).start();\n        Thread.sleep(1000);\n        new Thread(new ThreadB()).start();\n    }\n}\n')])])]),r("p",[e._v("// 输出：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("ThreadA: 0\nThreadB: 0\nThreadA: 1\nThreadB: 1\nThreadA: 2\nThreadB: 2\nThreadA: 3\nThreadB: 3\nThreadA: 4\nThreadB: 4\n")])])]),r("p",[e._v("在这个 Demo 里，线程 A 和线程 B 首先打印出自己需要的东西，然后使用 notify() 方法叫醒另一个正在等待的线程，然后自己使用 wait() 方法陷入等待并释放 lock 锁。")]),e._v(" "),r("p",[e._v("需要注意的是等待/通知机制使用的是使用同一个对象锁，如果两个线程使用的是不同的对象锁，那它们之间是不能用等待/通知机制通信的。")]),e._v(" "),r("h2",{attrs:{id:"_3-信号量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-信号量"}},[e._v("#")]),e._v(" "),r("strong",[e._v("3. 信号量")])]),e._v(" "),r("p",[e._v("JDK 提供了一个类似于“信号量”功能的类 Semaphore。但这里不是要介绍这个类，而是介绍一种基于 volatile 关键字的实现的信号量通信。")]),e._v(" "),r("p",[e._v("volatile 关键字能够保证内存的可见性：如果用 volatile 关键字声明了一个变量，在一个线程里面改变了这个变量的值，那其它线程是立马可见更改后的值的。")]),e._v(" "),r("p",[e._v("比如现在有一个需求，我想让线程 A 输出 0，然后线程 B 输出 1，再然后线程 A 输出 2…。以此类推。应该怎样实现呢？下面是具体代码：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class Signal {\n    private static volatile int signal = 0; // 被volatile修饰地共享变量\n\n    static class ThreadA implements Runnable {\n        @Override\n        public void run() {\n            while (signal < 5) {\n                if (signal % 2 == 0) {\n                    System.out.println("threadA: " + signal);\n                    signal++;\n                }\n            }\n        }\n    }\n\n    static class ThreadB implements Runnable {\n        @Override\n        public void run() {\n            while (signal < 5) {\n                if (signal % 2 == 1) {\n                    System.out.println("threadB: " + signal);\n                    signal = signal + 1;\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        new Thread(new ThreadA()).start();\n        Thread.sleep(1000);\n        new Thread(new ThreadB()).start();\n    }\n}\n')])])]),r("p",[e._v("// 输出：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("threadA: 0\nthreadB: 1\nthreadA: 2\nthreadB: 3\nthreadA: 4\n")])])]),r("p",[e._v("可以看到，使用了一个 volatile 变量 signal 来实现了“信号量”的模型。这里需要注意的是，volatile 变量需要进行原子操作。")]),e._v(" "),r("p",[e._v("需要注意的是，signal++ 并不是一个原子操作，所以在实际开发中，会根据需要使用 synchronized 给它“上锁”，或者是使用 AtomicInteger 等原子类。并且上面的程序也并不是线程安全的，因为执行 while 语句后，可能当前线程就暂停等待时间片了，等线程醒来，可能 signal 已经大于等于 5 了（多个线程同时执行了 signal++）。")]),e._v(" "),r("p",[e._v("这种实现方式并不一定高效，本例只是演示信号量")]),e._v(" "),r("h2",{attrs:{id:"_4-管道"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-管道"}},[e._v("#")]),e._v(" "),r("strong",[e._v("4. 管道")])]),e._v(" "),r("p",[e._v("管道是基于“管道流”的通信方式。JDK 提供了PipedWriter、 PipedReader、 PipedOutputStream、 PipedInputStream。其中，前面两个是基于字符的，后面两个是基于字节流的。")]),e._v(" "),r("p",[e._v("这里的示例代码使用的是基于字符的：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class Pipe {\n    static class ReaderThread implements Runnable {\n        private PipedReader reader;\n\n        public ReaderThread(PipedReader reader) {\n            this.reader = reader;\n        }\n\n        @Override\n        public void run() {\n            System.out.println("this is reader");\n            int receive = 0;\n            try {\n                while ((receive = reader.read()) != -1) {\n                    //调用PipedReader的read方法从管道读出字符\n                    System.out.print((char)receive);\n                }\n            } catch (IOException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n    static class WriterThread implements Runnable {\n\n        private PipedWriter writer;\n\n        public WriterThread(PipedWriter writer) {\n            this.writer = writer;\n        }\n\n        @Override\n        public void run() {\n            System.out.println("this is writer");\n            int receive = 0;\n            try {\n                writer.write("test"); //调用PipedWriter的write方法向管道写入字符\n            } catch (IOException e) {\n                e.printStackTrace();\n            } finally {\n                try {\n                    writer.close(); //安全关闭管道\n                } catch (IOException e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) throws IOException, InterruptedException {\n        PipedWriter writer = new PipedWriter();\n        PipedReader reader = new PipedReader();\n        writer.connect(reader); // 这里注意一定要连接，才能通信\n\n        new Thread(new ReaderThread(reader)).start();\n        Thread.sleep(1000);\n        new Thread(new WriterThread(writer)).start();\n    }\n}\n')])])]),r("p",[e._v("// 输出：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("this is reader\nthis is writer\ntest\n")])])]),r("p",[e._v("通过线程的构造函数，传入了 PipedWrite 和 PipedReader 对象。可以简单分析一下这个示例代码的执行流程：")]),e._v(" "),r("ol",[r("li",[e._v("线程ReaderThread开始执行")]),e._v(" "),r("li",[e._v("线程ReaderThread使用管道reader.read()进入“阻塞”")]),e._v(" "),r("li",[e._v("线程WriterThread开始执行")]),e._v(" "),r("li",[e._v('线程WriterThread用writer.write("test")往管道写入字符串')]),e._v(" "),r("li",[e._v("线程WriterThread使用writer.close()结束管道写入，并执行完毕")]),e._v(" "),r("li",[e._v("线程ReaderThread接受到管道输出的字符串并打印")]),e._v(" "),r("li",[e._v("线程ReaderThread执行完毕")])]),e._v(" "),r("p",[e._v("管道通信的应用场景：")]),e._v(" "),r("p",[e._v("使用管道多半与 I/O 流相关。当我们一个线程需要先另一个线程发送一个信息（比如字符串）或者文件等等时，就需要使用管道通信了。")]),e._v(" "),r("h2",{attrs:{id:"_5-其它通信相关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-其它通信相关"}},[e._v("#")]),e._v(" "),r("strong",[e._v("5. 其它通信相关")])]),e._v(" "),r("p",[e._v("以上介绍了一些线程间通信的基本原理和方法。除此以外，还有一些与线程通信相关的知识点，这里一并介绍。")]),e._v(" "),r("p",[r("strong",[e._v("5.1 join() 方法")])]),e._v(" "),r("p",[e._v("join() 方法是 Thread 类的一个实例方法。它的作用是让当前线程陷入“等待”状态，等 join 的这个线程执行完成后，再继续执行当前线程。")]),e._v(" "),r("p",[e._v("有时候，主线程创建并启动了子线程，如果子线程中需要进行大量的耗时运算，主线程往往将早于子线程结束之前结束。")]),e._v(" "),r("p",[e._v("如果主线程想等待子线程执行完毕后，获得子线程中的处理完的某个数据，就要用到 join() 方法了。")]),e._v(" "),r("p",[e._v("示例代码：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class Join {\n    static class ThreadA implements Runnable {\n        @Override\n        public void run() {\n            try {\n                System.out.println("我是子线程，我先睡一秒");\n                Thread.sleep(1000);\n                System.out.println("我是子线程，我睡完了一秒");\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        Thread thread = new Thread(new ThreadA());\n        thread.start();\n        thread.join();\n        System.out.println("如果不加join方法，我会先被打印出来，加了就不一样了");\n    }\n}\n')])])]),r("p",[e._v("注意 join() 方法有两个重载方法，一个是 join(long)， 一个是 join(long, int)。")]),e._v(" "),r("p",[e._v("实际上，通过源码会发现，join() 方法及其重载方法底层都是利用了 wait(long) 这个方法。")]),e._v(" "),r("p",[e._v("对于 join(long, int)，通过查看源码(JDK 1.8)发现，底层并没有精确到纳秒，而是对第二个参数做了简单的判断和处理。")]),e._v(" "),r("p",[r("strong",[e._v("5.2 sleep() 方法")])]),e._v(" "),r("p",[e._v("sleep() 方法是 Thread 类的一个静态方法。它的作用是让当前线程睡眠一段时间。它有这样两个方法：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Thread.sleep(long)\nThread.sleep(long, int)\n")])])]),r("p",[e._v("同样，查看源码(JDK 1.8)发现，第二个方法貌似只对第二个参数做了简单的处理，没有精确到纳秒。实际上还是调用的第一个方法。")]),e._v(" "),r("p",[r("strong",[e._v("sleep() 与 wait() 的区别")])]),e._v(" "),r("p",[e._v("这里需要强调一下：sleep 方法是不会释放当前的锁的，而 wait 方法会。")]),e._v(" "),r("p",[e._v("它们还有这些区别：")]),e._v(" "),r("ul",[r("li",[e._v("wait 可以指定时间，也可以不指定；而 sleep 必须指定时间。")]),e._v(" "),r("li",[e._v("wait 释放 cpu 资源，同时释放锁；sleep 释放 cpu 资源，但是不释放锁，所以易死锁。")]),e._v(" "),r("li",[e._v("wait 必须放在同步块或同步方法中，而 sleep 可以在任意位置。")])]),e._v(" "),r("p",[r("strong",[e._v("5.3 ThreadLocal 类")])]),e._v(" "),r("p",[e._v("ThreadLocal，即线程本地变量，是一个以 ThreadLocal 对象为键、任意对象为值的 Map 存储结构。这个结构被附带在线程上，也就是说一个线程可以根据一个 ThreadLocal 对象查询到绑定在这个线程上的一个值。可以通过 set(T) 方法来设置一个值，在当前线程下再通过 get() 方法获取到原先设置的值。严格来说，ThreadLocal 类并不属于多线程间的通信，而是让每个线程有自己”独立“的变量，线程之间互不影响。它为每个线程都创建一个副本，每个线程可以访问自己内部的副本变量。")]),e._v(" "),r("p",[e._v("在下面代码清单所示的例子中，构建了一个常用的 Profiler 类，它具有 begin() 和 end() 两个方法，而 end() 方法返回从 begin() 方法调用开始到 end() 方法被调用时的时间差，单位是毫秒。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('public class Profiler {\n    // 第一次 get()方法调用时会进行初始化（如果 set 方法没有调用），每个线程会调用一次\n    private static final ThreadLocal<Long> TIME_THREADLOCAL = new ThreadLocal<Long>();\n    \n    protected Long initialValue() {\n        return System.currentTimeMillis();\n    }\n    \n    public static final void begin() {\n        TIME_THREADLOCAL.set(System.currentTimeMillis());\n    }\n    \n    public static final long end() {\n        return System.currentTimeMillis() - TIME_THREADLOCAL.get();\n    }\n    \n    public static void main(String[] args) throws Exception {\n        Profiler.begin();\n        TimeUnit.SECONDS.sleep(1);\n        System.out.println("Cost: " + Profiler.end() + " mills");\n    } \n}\n')])])]),r("p",[e._v("输出结果如下所示：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cost: 1001 mills \n")])])]),r("p",[e._v("Profiler 可以被复用在方法调用耗时统计的功能上，在方法的入口前执行 begin() 方法，在方法调用后执行 end() 方法，好处是两个方法的调用不用在一个方法或者类中，比如在 AOP（面向切面编程）中，可以在方法调用前的切入点执行 begin() 方法，而在方法调用后的切入点执行 end() 方法，这样依旧可以获得方法的执行耗时。")]),e._v(" "),r("p",[r("strong",[e._v("ThreadLocal 的适用场景：")])]),e._v(" "),r("p",[e._v("当我们只想在本身的线程内使用的变量，可以用 ThreadLocal 来实现，并且这些变量是和线程的生命周期密切相关的，线程结束，变量也就销毁了。")]),e._v(" "),r("p",[e._v("如果开发者希望将类的某个静态变量（user ID 或者 transaction ID）与线程状态关联，则可以考虑使用 ThreadLocal。")]),e._v(" "),r("p",[e._v("最常见的 ThreadLocal 使用场景为用来解决数据库连接、Session 管理等。数据库连接和 Session 管理涉及多个复杂对象的初始化和关闭。如果在每个线程中声明一些私有变量来进行操作，那这个线程就变得不那么“轻量”了，需要频繁的创建和关闭连接。")]),e._v(" "),r("p",[r("strong",[e._v("5.4 InheritableThreadLocal")])]),e._v(" "),r("p",[e._v("InheritableThreadLocal 类与 ThreadLocal 类稍有不同，Inheritable 是继承的意思。它不仅仅是当前线程可以存取副本值，而且它的子线程也可以存取这个副本值。")])])}),[],!1,null,null,null);n.default=a.exports}}]);