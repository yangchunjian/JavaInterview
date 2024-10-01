(window.webpackJsonp=window.webpackJsonp||[]).push([[878],{2023:function(n,t,e){"use strict";e.r(t);var i=e(12),r=Object(i.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"解答"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[n._v("#")]),n._v(" 解答")]),n._v(" "),e("p",[n._v("Java 生产者和消费者 5种实现方式")]),n._v(" "),e("ul",[e("li",[n._v("1 使用 Objcet 的 wait() 和 notifyAll() 实现")]),n._v(" "),e("li",[n._v("2 使用 BlockingQueue 实现")]),n._v(" "),e("li",[n._v("3 使用 Lock 的 Condition 的 await/signal 实现")]),n._v(" "),e("li",[n._v("4 使用 Semaphore 实现")]),n._v(" "),e("li",[n._v("5 使用 Piped 实现")])]),n._v(" "),e("p",[n._v("1 使用 Objcet 的 wait() 和 notifyAll() 实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('package com.xu.thread;\n\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n/**\n * @author Administrator\n */\npublic class ProducerAndConsumer {\n\n    private static Integer MAX = 10;\n\n    private static AtomicInteger integer = new AtomicInteger(0);\n\n    public static void main(String[] args) {\n        List<String> list = new LinkedList<>();\n        new Thread(new Consumer(list)).start();\n        new Thread(new Producer(list)).start();\n    }\n\n    static class Consumer implements Runnable {\n    \n        private List<String> list;\n\n        Consumer(List<String> list) {\n            this.list = list;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                synchronized (list) {\n                    try {\n                        Thread.sleep(500);\n                        if (list.size() <= 0) {\n                            list.wait();\n                        } else {\n                            String value = list.get(0);\n                            list.remove(0);\n                            System.out.println("消费者 消费：" + value);\n                            list.notifyAll();\n                        }\n                    } catch (InterruptedException e) {\n                    }\n                }\n            }\n        }\n    }\n\n    static class Producer implements Runnable {\n    \n        private List<String> list;\n\n        Producer(List<String> list) {\n            this.list = list;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                synchronized (list) {\n                    try {\n                        Thread.sleep(200);\n                        if (list.size() >= MAX) {\n                            list.wait();\n                        } else {\n                            String value = "苹果" + integer.getAndIncrement();\n                            System.out.println("生产者 生产：" + value);\n                            list.add(value);\n                            list.notifyAll();\n                        }\n                    } catch (Exception e) {\n\n                    }\n                }\n            }\n        }\n    }\n\n}\n\n\n生产者 生产：苹果0\n生产者 生产：苹果1\n生产者 生产：苹果2\n生产者 生产：苹果3\n消费者 消费：苹果0\n消费者 消费：苹果1\n消费者 消费：苹果2\n消费者 消费：苹果3\n生产者 生产：苹果4\n生产者 生产：苹果5\n生产者 生产：苹果6\n生产者 生产：苹果7\n消费者 消费：苹果4\n消费者 消费：苹果5\n消费者 消费：苹果6\n消费者 消费：苹果7\n生产者 生产：苹果8\n生产者 生产：苹果9\n生产者 生产：苹果10\n生产者 生产：苹果11\n生产者 生产：苹果12\n生产者 生产：苹果13\n生产者 生产：苹果14\n生产者 生产：苹果15\n生产者 生产：苹果16\n生产者 生产：苹果17\n消费者 消费：苹果8\n消费者 消费：苹果9\n消费者 消费：苹果10\n消费者 消费：苹果11\n生产者 生产：苹果18\n生产者 生产：苹果19\n生产者 生产：苹果20\n生产者 生产：苹果21\n消费者 消费：苹果12\n消费者 消费：苹果13\n')])])]),e("p",[n._v("2 使用 BlockingQueue 实现")]),n._v(" "),e("p",[n._v("Queue 是 Java 中实现队列的接口，它总共只有6个方法。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("boolean add(E)\nE element()\nboolean offer(E)\nE peek()\nE poll()\nE remove()\n")])])]),e("p",[n._v("Queue 的 6 个主要方法的异同：")]),n._v(" "),e("p",[n._v("压入元素(添加)：add()、offer()")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("区别\t详细\n相同\t未超出容量，从队尾压入元素，返回压入的那个元素。\n区别\t在超出容量时，add()方法会对抛出异常，offer()返回false\n弹出元素(删除)：remove()、poll()\n\n区别\t详细\n相同\t容量大于0的时候，删除并返回队头被删除的那个元素。\n区别\t在容量为0的时候，remove()会抛出异常，poll()返回false\n获取队头元素(不删除)：element()、peek()\n\n区别\t详细\n相同\t容量大于0的时候，都返回队头元素。但是不删除。\n区别\t容量为0的时候，element()会抛出异常，peek()返回null。\nJava 队列主要分为阻塞和非阻塞，有界和无界、单向链表和双向链表。\n")])])]),e("p",[n._v("阻塞和非阻塞：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("区别\t详细\n阻塞\t出列还是入列，会阻塞。\n非阻塞\t不管出列还是入列，都不会进行阻塞。\n")])])]),e("p",[n._v("有界和无界")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("区别\t详细\n有界\t有界限，大小长度受限制\n无界\t无限大小，像 ArrayList 一样，在内部动态扩容。\n")])])]),e("p",[n._v("单向链表和双向链表")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("区别\t详细\n单向链表\t每个元素中除了元素本身之外，还存储一个指针，这个指针指向下一个元素。\n双向链表\t除了元素本身之外，还有两个指针，一个指针指向前一个元素的地址，另一个指针指向后一个元素的地址。\n")])])]),e("p",[n._v("实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('package com.xu.thread;\n\nimport java.util.concurrent.LinkedBlockingQueue;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n/**\n * @author Administrator\n */\npublic class ProducerAndConsumer {\n\n    private static Integer MAX = 10;\n\n    private static AtomicInteger integer = new AtomicInteger(0);\n    \n    private static LinkedBlockingQueue<String> queue = new LinkedBlockingQueue<>();\n\n    public static void main(String[] args) {\n        new Thread(new Consumer()).start();\n        new Thread(new Producer()).start();\n        new Thread(new Consumer()).start();\n        new Thread(new Producer()).start();\n    }\n\n    static class Consumer implements Runnable {\n\n        @Override\n        public void run() {\n            while (true) {\n                try {\n                    Thread.sleep(200);\n                } catch (InterruptedException e) {\n                    throw new RuntimeException(e);\n                }\n                if (queue.size() > 0) {\n                    String value = queue.poll();\n                    System.out.println("消费者 消费：" + value);\n                }\n            }\n        }\n    }\n\n    static class Producer implements Runnable {\n        @Override\n        public void run() {\n            while (true) {\n                try {\n                    Thread.sleep(300);\n                } catch (InterruptedException e) {\n                    throw new RuntimeException(e);\n                }\n                if (queue.size() < MAX) {\n                    String value = "苹果" + integer.getAndIncrement();\n                    queue.add(value);\n                    System.out.println("生产者 生产：" + value);\n                }\n            }\n        }\n    }\n\n}\n\n\n\n生产者 生产：苹果1\n生产者 生产：苹果0\n消费者 消费：苹果1\n消费者 消费：苹果0\n生产者 生产：苹果2\n生产者 生产：苹果3\n消费者 消费：苹果2\n消费者 消费：苹果3\n生产者 生产：苹果4\n生产者 生产：苹果5\n消费者 消费：苹果4\n消费者 消费：苹果5\n生产者 生产：苹果6\n生产者 生产：苹果7\n消费者 消费：苹果6\n消费者 消费：苹果7\n生产者 生产：苹果8\n生产者 生产：苹果9\n消费者 消费：苹果8\n消费者 消费：苹果9\n生产者 生产：苹果10\n生产者 生产：苹果11\n消费者 消费：苹果10\n消费者 消费：苹果11\n')])])]),e("p",[n._v("3 使用 Lock 的 Condition 的 await/signal 实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('package com.xu.thread;\n\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.concurrent.atomic.AtomicInteger;\nimport java.util.concurrent.locks.Condition;\nimport java.util.concurrent.locks.Lock;\nimport java.util.concurrent.locks.ReentrantLock;\n\n/**\n * @author Administrator\n */\npublic class ProducerAndConsumer {\n\n    private static Integer MAX = 10;\n\n    private static Lock lock = new ReentrantLock();\n\n    private static Condition condition = lock.newCondition();\n\n    private static AtomicInteger integer = new AtomicInteger(0);\n\n    public static void main(String[] args) {\n        List<String> list = new LinkedList<>();\n        new Thread(new Consumer(list)).start();\n        new Thread(new Producer(list)).start();\n        new Thread(new Producer(list)).start();\n    }\n\n    static class Consumer implements Runnable {\n    \n        private List<String> list;\n\n        public Consumer(List<String> list) {\n            this.list = list;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                lock.lock();\n                try {\n                    if (list.size() <= 0) {\n                        condition.await();\n                    } else {\n                        String value = list.get(0);\n                        list.remove(0);\n                        System.out.println("消费者 消费：" + value);\n                        condition.signalAll();\n                    }\n                    Thread.sleep(100);\n                } catch (Exception e) {\n\n                } finally {\n                    lock.unlock();\n                }\n            }\n        }\n    }\n\n    static class Producer implements Runnable {\n    \n        private List<String> list;\n\n        public Producer(List<String> list) {\n            this.list = list;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                lock.lock();\n                try {\n                    if (list.size() <= MAX) {\n                        String value = "苹果" + integer.getAndIncrement();\n                        list.add(value);\n                        System.out.println("生产者 生产：" + value);\n                        condition.signalAll();\n                    } else {\n                        condition.await();\n                    }\n                    Thread.sleep(300);\n                } catch (Exception e) {\n\n                } finally {\n                    lock.unlock();\n                }\n            }\n        }\n    }\n\n}\n')])])]),e("p",[n._v("结果")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("生产者 生产：苹果0\n生产者 生产：苹果1\n生产者 生产：苹果2\n生产者 生产：苹果3\n生产者 生产：苹果4\n生产者 生产：苹果5\n生产者 生产：苹果6\n生产者 生产：苹果7\n生产者 生产：苹果8\n生产者 生产：苹果9\n生产者 生产：苹果10\n消费者 消费：苹果0\n消费者 消费：苹果1\n消费者 消费：苹果2\n消费者 消费：苹果3\n")])])]),e("p",[n._v("4 使用 Semaphore 实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('package com.xu.thread;\n\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.concurrent.Semaphore;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n/**\n * @author Administrator\n */\npublic class ProducerAndConsumer {\n\n    private static AtomicInteger integer = new AtomicInteger(0);\n\n    /**\n     * 互斥锁\n     */\n    private static final Semaphore mutex1 = new Semaphore(1);\n\n    public static void main(String[] args) {\n        List<String> list = new LinkedList<>();\n        new Thread(new Consumer(mutex1, list)).start();\n        new Thread(new Producer(mutex1, list)).start();\n    }\n\n    static class Consumer implements Runnable {\n    \n        private Semaphore mutex;\n        private List<String> list;\n\n        Consumer(Semaphore mutex, List<String> list) {\n            this.list = list;\n            this.mutex = mutex;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                try {\n                    Thread.sleep(500);\n                    mutex.acquire();\n                    if (list.size() > 0) {\n                        String value = list.get(0);\n                        list.remove(0);\n                        System.out.println("消费者 消费：" + value + "\\t" + list.size());\n                    }\n                } catch (InterruptedException e) {\n\n                } finally {\n                    mutex.release();\n                }\n            }\n        }\n    }\n\n    static class Producer implements Runnable {\n    \n        private Semaphore mutex;\n        private List<String> list;\n\n        Producer(Semaphore mutex, List<String> list) {\n            this.list = list;\n            this.mutex = mutex;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                try {\n                    Thread.sleep(200);\n                    mutex.acquire();\n                    String value = "苹果" + integer.getAndIncrement();\n                    list.add(value);\n                    System.out.println("生产者 生产：" + value + "\\t" + list.size());\n                } catch (Exception e) {\n\n                } finally {\n                    mutex.release();\n                }\n            }\n        }\n    }\n\n}\n')])])]),e("p",[n._v("结果")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("生产者 生产：苹果0\t1\n生产者 生产：苹果1\t2\n消费者 消费：苹果0\t1\n生产者 生产：苹果2\t2\n生产者 生产：苹果3\t3\n消费者 消费：苹果1\t2\n生产者 生产：苹果4\t3\n生产者 生产：苹果5\t4\n生产者 生产：苹果6\t5\n消费者 消费：苹果2\t4\n生产者 生产：苹果7\t5\n生产者 生产：苹果8\t6\n消费者 消费：苹果3\t5\n生产者 生产：苹果9\t6\n生产者 生产：苹果10\t7\n生产者 生产：苹果11\t8\n")])])]),e("p",[n._v("5 使用 Piped 实现")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v('模式\t实现对象\n字节输入输出流\tPipedInputStream / PipedOutputStream\n字符输入输出流\tPipedReader / PipedWriter\n\n\npackage com.xu.thread;\n\nimport java.io.IOException;\nimport java.io.PipedInputStream;\nimport java.io.PipedOutputStream;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n/**\n * @author Administrator\n */\npublic class ProducerAndConsumer {\n\n    private static AtomicInteger integer = new AtomicInteger(0);\n\n    public static void main(String[] args) throws IOException {\n        PipedInputStream input = new PipedInputStream();\n        PipedOutputStream output = new PipedOutputStream();\n        Consumer consumer = new Consumer(input);\n        Producer producer = new Producer(output);\n        new Thread(consumer).start();\n        new Thread(producer).start();\n        producer.getPipedOutputStream().connect(consumer.getPipedInputStream());\n    }\n\n    static class Consumer implements Runnable {\n        private PipedInputStream input;\n\n        public Consumer(PipedInputStream input) {\n            this.input = input;\n        }\n\n        public PipedInputStream getPipedInputStream() {\n            return input;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                try {\n                    Thread.sleep(500);\n                    int len;\n                    byte[] buffer = new byte[1024];\n                    while ((len = input.read(buffer)) != -1) {\n                        String value = new String(buffer, 0, len);\n                        System.out.println("消费者 消费：" + value);\n                    }\n                } catch (Exception e) {\n\n                }\n            }\n        }\n    }\n\n    static class Producer implements Runnable {\n        private PipedOutputStream output;\n\n        public Producer(PipedOutputStream output) {\n            this.output = output;\n        }\n\n        public PipedOutputStream getPipedOutputStream() {\n            return output;\n        }\n\n        @Override\n        public void run() {\n            while (true) {\n                try {\n                    Thread.sleep(200);\n                    String value = "苹果" + integer.getAndIncrement();\n                    output.write(value.getBytes());\n                    output.flush();\n                    System.out.println("生产者 生产：" + value);\n                } catch (Exception e) {\n\n                }\n            }\n        }\n    }\n\n}\n')])])]),e("p",[n._v("结果")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("生产者 生产：苹果0\n生产者 生产：苹果1\n消费者 消费：苹果0苹果1\n生产者 生产：苹果2\n消费者 消费：苹果2\n生产者 生产：苹果3\n消费者 消费：苹果3\n生产者 生产：苹果4\n消费者 消费：苹果4\n消费者 消费：苹果5\n生产者 生产：苹果5\n消费者 消费：苹果6\n生产者 生产：苹果6\n生产者 生产：苹果7\n消费者 消费：苹果7\n生产者 生产：苹果8\n消费者 消费：苹果8\n生产者 生产：苹果9\n消费者 消费：苹果9\n生产者 生产：苹果10\n消费者 消费：苹果10\n生产者 生产：苹果11\n消费者 消费：苹果11\n生产者 生产：苹果12\n消费者 消费：苹果12\n生产者 生产：苹果13\n消费者 消费：苹果13\n生产者 生产：苹果14\n消费者 消费：苹果14\n生产者 生产：苹果15\n消费者 消费：苹果15\n生产者 生产：苹果16\n消费者 消费：苹果16\n生产者 生产：苹果17\n消费者 消费：苹果17\n生产者 生产：苹果18\n消费者 消费：苹果18\n生产者 生产：苹果19\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);