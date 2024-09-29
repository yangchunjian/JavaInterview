(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1042:function(e,n,t){e.exports=t.p+"assets/img/hf1.142700c7.png"},1043:function(e,n,t){e.exports=t.p+"assets/img/hf2.c44e9aec.png"},1044:function(e,n,t){e.exports=t.p+"assets/img/hf3.d463d5d9.png"},1045:function(e,n,t){e.exports=t.p+"assets/img/hf4.66579f2c.png"},1046:function(e,n,t){e.exports=t.p+"assets/img/hf5.f6abd113.png"},1047:function(e,n,t){e.exports=t.p+"assets/img/hf6.30e934e7.png"},1048:function(e,n,t){e.exports=t.p+"assets/img/hf7.2cf0df94.png"},1049:function(e,n,t){e.exports=t.p+"assets/img/hf8.771c0d9b.png"},1050:function(e,n,t){e.exports=t.p+"assets/img/hf9.17dea8a0.png"},1051:function(e,n,t){e.exports=t.p+"assets/img/hf10.8a991961.png"},1052:function(e,n,t){e.exports=t.p+"assets/img/hf11.8f060048.png"},1053:function(e,n,t){e.exports=t.p+"assets/img/hf12.2309bfcb.png"},2004:function(e,n,t){"use strict";t.r(n);var a=t(12),o=Object(a.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[e._v("#")]),e._v(" 解答")]),e._v(" "),a("h3",{attrs:{id:"_0-文章概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-文章概述"}},[e._v("#")]),e._v(" 0 文章概述")]),e._v(" "),a("p",[e._v("流量洪峰是互联网生产环境经常遇到的情况，例如某个时间点进行商品抢购活动，或者某个时间点集中触发定时任务，这些场景都有可能引发流量洪峰，所以如何应对流量洪峰我们必须面对的问题。")]),e._v(" "),a("p",[e._v("纵向维度我们可以从代理层、WEB层、服务层、缓存层、数据层进行思考，横向维度我们可以从高频检测、缓存前置、节点冗余、服务降级等方向进行思考。本文我们从服务层动态线程池这个角度思考应对流量洪峰。")]),e._v(" "),a("p",[e._v("动态线程池是指我们可以根据流量的不同调节线程池某些参数，例如可以在业务低峰期调低线程数，在业务高峰期调高线程数增加处理线程从而应对流量洪峰。本文我们结合Apollo和线程池实现一个动态线程池。")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1042),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_1-线程池基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程池基础"}},[e._v("#")]),e._v(" 1 线程池基础")]),e._v(" "),a("h4",{attrs:{id:"_1-1-七个参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-七个参数"}},[e._v("#")]),e._v(" 1.1 七个参数")]),e._v(" "),a("p",[e._v("我们首先回顾一下Java线程池七大参数，这对后续设置线程池参数有帮助。我们查看ThreadPoolExecutor构造函数如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class ThreadPoolExecutor extends AbstractExecutorService {\n    public ThreadPoolExecutor(int corePoolSize,\n                              int maximumPoolSize,\n                              long keepAliveTime,\n                              TimeUnit unit,\n                              BlockingQueue<Runnable> workQueue,\n                              ThreadFactory threadFactory,\n                              RejectedExecutionHandler handler) {\n        if (corePoolSize < 0 ||\n                maximumPoolSize <= 0 ||\n                maximumPoolSize < corePoolSize ||\n                keepAliveTime < 0)\n            throw new IllegalArgumentException();\n        if (workQueue == null || threadFactory == null || handler == null)\n            throw new NullPointerException();\n        this.acc = System.getSecurityManager() == null ?\n                   null :\n                   AccessController.getContext();\n        this.corePoolSize = corePoolSize;\n        this.maximumPoolSize = maximumPoolSize;\n        this.workQueue = workQueue;\n        this.keepAliveTime = unit.toNanos(keepAliveTime);\n        this.threadFactory = threadFactory;\n        this.handler = handler;\n    }\n}\n")])])]),a("p",[e._v("(1) corePoolSize\n线程池核心线程数，类比业务大厅开设的固定窗口。例如业务大厅开设2个固定窗口，那么这两个窗口不会关闭，全天都会进行业务办理")]),e._v(" "),a("p",[e._v("(2) workQueue\n存储已提交但尚未执行的任务，类比业务大厅等候区。例如业务大厅一开门进来很多顾客，2个固定窗口进行业务办理，其他顾客到等候区等待")]),e._v(" "),a("p",[e._v("(3) maximumPoolSize\n线程池可以容纳同时执行最大线程数，类比业务大厅最大窗口数。例如业务大厅最大窗口数是5个，业务员看到2个固定窗口和等候区都满了，可以临时增加3个窗口")]),e._v(" "),a("p",[e._v("(4) keepAliveTime\n非核心线程数存活时间。当业务不忙时刚才新增的3个窗口需要关闭，空闲时间超过keepAliveTime空闲会被关闭")]),e._v(" "),a("p",[e._v("(5) unit\nkeepAliveTime存活时间单位")]),e._v(" "),a("p",[e._v("(6) threadFactory\n线程工厂可以用来指定线程名")]),e._v(" "),a("p",[e._v("(7) handler\n线程池线程数已达到maximumPoolSize且队列已满时执行拒绝策略。例如业务大厅5个窗口全部处于忙碌状态且等候区已满，业务员根据实际情况选择拒绝策略")]),e._v(" "),a("h4",{attrs:{id:"_1-2-四种拒绝策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-四种拒绝策略"}},[e._v("#")]),e._v(" 1.2 四种拒绝策略")]),e._v(" "),a("p",[e._v("(1) AbortPolicy\n默认策略直接抛出RejectExecutionException阻止系统正常运行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('/**\n * AbortPolicy\n *\n * @author 微信公众号「JAVA前线」\n *\n */\npublic class AbortPolicyTest {\n    public static void main(String[] args) {\n        int coreSize = 1;\n        int maxSize = 2;\n        int queueSize = 1;\n        AbortPolicy abortPolicy = new ThreadPoolExecutor.AbortPolicy();\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreSize, maxSize, 1, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>(queueSize), Executors.defaultThreadFactory(), abortPolicy);\n        for (int i = 0; i < 100; i++) {\n            executor.execute(new Runnable() {\n                @Override\n                public void run() {\n                    System.out.println(Thread.currentThread().getName() + " -> run");\n                }\n            });\n        }\n    }\n}\n')])])]),a("p",[e._v("程序执行结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('pool-1-thread-1 -> run\npool-1-thread-2 -> run\npool-1-thread-1 -> run\nException in thread "main" java.util.concurrent.RejectedExecutionException: Task com.xy.juc.threadpool.reject.AbortPolicyTest$1@70dea4e rejected from java.util.concurrent.ThreadPoolExecutor@5c647e05[Running, pool size = 2, active threads = 0, queued tasks = 0, completed tasks = 2]\n    at java.util.concurrent.ThreadPoolExecutor$AbortPolicy.rejectedExecution(ThreadPoolExecutor.java:2063)\n    at java.util.concurrent.ThreadPoolExecutor.reject(ThreadPoolExecutor.java:830)\n    at java.util.concurrent.ThreadPoolExecutor.execute(ThreadPoolExecutor.java:1379)\n    at com.xy.juc.threadpool.reject.AbortPolicyTest.main(AbortPolicyTest.java:21)\n')])])]),a("p",[e._v("(2) CallerRunsPolicy\n任务回退给调用者自己运行")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('/**\n * CallerRunsPolicy\n *\n * @author 微信公众号「JAVA前线」\n *\n */\npublic class CallerRunsPolicyTest {\n    public static void main(String[] args) {\n        int coreSize = 1;\n        int maxSize = 2;\n        int queueSize = 1;\n        CallerRunsPolicy callerRunsPolicy = new ThreadPoolExecutor.CallerRunsPolicy();\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreSize, maxSize, 1, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>(queueSize), Executors.defaultThreadFactory(), callerRunsPolicy);\n        for (int i = 0; i < 10; i++) {\n            executor.execute(new Runnable() {\n                @Override\n                public void run() {\n                    System.out.println(Thread.currentThread().getName() + " -> run");\n                }\n            });\n        }\n    }\n}\n')])])]),a("p",[e._v("程序执行结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("main -> run\npool-1-thread-1 -> run\npool-1-thread-2 -> run\npool-1-thread-1 -> run\nmain -> run\nmain -> run\npool-1-thread-2 -> run\npool-1-thread-1 -> run\nmain -> run\npool-1-thread-2 -> run\n")])])]),a("p",[e._v("(3) DiscardOldestPolicy\n抛弃队列中等待最久的任务不会抛出异常")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('/**\n * DiscardOldestPolicy\n *\n * @author 微信公众号「JAVA前线」\n *\n */\npublic class DiscardOldestPolicyTest {\n    public static void main(String[] args) {\n        int coreSize = 1;\n        int maxSize = 2;\n        int queueSize = 1;\n        DiscardOldestPolicy discardOldestPolicy = new ThreadPoolExecutor.DiscardOldestPolicy();\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreSize, maxSize, 1, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>(queueSize), Executors.defaultThreadFactory(), discardOldestPolicy);\n        for (int i = 0; i < 10; i++) {\n            executor.execute(new Runnable() {\n                @Override\n                public void run() {\n                    System.out.println(Thread.currentThread().getName() + " -> run");\n                }\n            });\n        }\n    }\n}\n')])])]),a("p",[e._v("程序执行结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pool-1-thread-1 -> run\npool-1-thread-2 -> run\npool-1-thread-1 -> run\n")])])]),a("p",[e._v("(4) DiscardPolicy\n直接丢弃任务不会抛出异常")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('/**\n * DiscardPolicy\n *\n * @author 微信公众号「JAVA前线」\n *\n */\npublic class DiscardPolicyTest {\n    public static void main(String[] args) {\n        int coreSize = 1;\n        int maxSize = 2;\n        int queueSize = 1;\n        DiscardPolicy discardPolicy = new ThreadPoolExecutor.DiscardPolicy();\n        ThreadPoolExecutor executor = new ThreadPoolExecutor(coreSize, maxSize, 1, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>(queueSize), Executors.defaultThreadFactory(), discardPolicy);\n        for (int i = 0; i < 10; i++) {\n            executor.execute(new Runnable() {\n                @Override\n                public void run() {\n                    System.out.println(Thread.currentThread().getName() + " -> run");\n                }\n            });\n        }\n    }\n}\n')])])]),a("p",[e._v("程序执行结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("pool-1-thread-1 -> run\npool-1-thread-2 -> run\npool-1-thread-1 -> run\n")])])]),a("h4",{attrs:{id:"_1-3-修改参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-修改参数"}},[e._v("#")]),e._v(" 1.3 修改参数")]),e._v(" "),a("p",[e._v("如果初始化线程池完成后，我们是否可以修改线程池某些参数呢？答案是可以。我们选择线程池提供的四个修改方法进行源码分析。")]),e._v(" "),a("p",[e._v("(1) setCorePoolSize")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class ThreadPoolExecutor extends AbstractExecutorService {\n    public void setCorePoolSize(int corePoolSize) {\n        if (corePoolSize < 0)\n            throw new IllegalArgumentException();\n        // 新核心线程数减去原核心线程数\n        int delta = corePoolSize - this.corePoolSize;\n        // 新核心线程数赋值\n        this.corePoolSize = corePoolSize;\n        // 如果当前线程数大于新核心线程数\n        if (workerCountOf(ctl.get()) > corePoolSize)\n            // 中断空闲线程\n            interruptIdleWorkers();\n        // 如果需要新增线程则通过addWorker增加工作线程\n        else if (delta > 0) {\n            int k = Math.min(delta, workQueue.size());\n            while (k-- > 0 && addWorker(null, true)) {\n                if (workQueue.isEmpty())\n                    break;\n            }\n        }\n    }\n}\n")])])]),a("p",[e._v("(2) setMaximumPoolSize")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class ThreadPoolExecutor extends AbstractExecutorService {\n    public void setMaximumPoolSize(int maximumPoolSize) {\n        if (maximumPoolSize <= 0 || maximumPoolSize < corePoolSize)\n            throw new IllegalArgumentException();\n        this.maximumPoolSize = maximumPoolSize;\n        // 如果当前线程数量大于新最大线程数量\n        if (workerCountOf(ctl.get()) > maximumPoolSize)\n            // 中断空闲线程\n            interruptIdleWorkers();\n    }\n}\n")])])]),a("p",[e._v("(3) setKeepAliveTime")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class ThreadPoolExecutor extends AbstractExecutorService {\n    public void setKeepAliveTime(long time, TimeUnit unit) {\n        if (time < 0)\n            throw new IllegalArgumentException();\n        if (time == 0 && allowsCoreThreadTimeOut())\n            throw new IllegalArgumentException("Core threads must have nonzero keep alive times");\n        long keepAliveTime = unit.toNanos(time);\n        // 新超时时间减去原超时时间\n        long delta = keepAliveTime - this.keepAliveTime;\n        this.keepAliveTime = keepAliveTime;\n        // 如果新超时时间小于原超时时间\n        if (delta < 0)\n            // 中断空闲线程\n            interruptIdleWorkers();\n    }\n}\n')])])]),a("p",[e._v("(4) setRejectedExecutionHandler")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("public class ThreadPoolExecutor extends AbstractExecutorService {\n    public void setRejectedExecutionHandler(RejectedExecutionHandler handler) {\n        if (handler == null)\n            throw new NullPointerException();\n        // 设置拒绝策略\n        this.handler = handler;\n    }\n}\n")])])]),a("p",[e._v("现在我们知道线程池系统上述调整参数的方法，但仅仅分析到此是不够的，因为如果没有动态调整参数的方法，那么每次修改必须重新发布才可以生效，那么有没有方法不用发布就可以动态调整线程池参数呢？")]),e._v(" "),a("h3",{attrs:{id:"_2-apollo配置中心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-apollo配置中心"}},[e._v("#")]),e._v(" 2 Apollo配置中心")]),e._v(" "),a("h4",{attrs:{id:"_2-1-核心原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-核心原理"}},[e._v("#")]),e._v(" 2.1 核心原理")]),e._v(" "),a("p",[e._v("Apollo是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。Apollo开源地址如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://github.com/ctripcorp/apollo\n")])])]),a("p",[e._v("我们在使用配置中心时第一步用户在配置中心修改配置项，第二步配置中心通知Apollo客户端有配置更新，第三步Apollo客户端从配置中心拉取最新配置，更新本地配置并通知到应用，官网基础模型图如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1043),alt:""}})]),e._v(" "),a("p",[e._v("配置中心配置项发生变化客户端如何感知呢？分为推和拉两种方式。推依赖客户端和服务端保持了一个长连接，发生数据变化时服务端推送信息给客户端，这就是长轮询机制。拉依赖客户端定时从配置中心服务端拉取应用最新配置，这是一个fallback机制。官网客户端设计图如下：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1044),alt:""}})]),e._v(" "),a("p",[e._v("本文重点分析配置更新推送方式，我们首先看官网服务端设计图：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1045),alt:""}})]),e._v(" "),a("p",[e._v("ConfigService模块提供配置的读取推送等功能，服务对象是Apollo客户端。AdminService模块提供配置的修改发布等功能，服务对象是Portal模块即管理界面。需要说明Apollo并没有引用消息中间件，图中发送异步消息是指ConfigService定时扫描异步消息数据表：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1046),alt:""}})]),e._v(" "),a("p",[e._v("消息数据保存在MySQL消息表：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("CREATE TABLE `releasemessage` (\n  `Id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增主键',\n  `Message` varchar(1024) NOT NULL DEFAULT '' COMMENT '发布的消息内容',\n  `DataChange_LastTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',\n  PRIMARY KEY (`Id`),\n  KEY `DataChange_LastTime` (`DataChange_LastTime`),\n  KEY `IX_Message` (`Message`(191))\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='发布消息'\n")])])]),a("p",[e._v("Apollo核心原理本文暂且谈到这里，后续我会写文章通过源码分析Apollo长轮询机制请继续关注。")]),e._v(" "),a("h4",{attrs:{id:"_2-2-实例分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-实例分析"}},[e._v("#")]),e._v(" 2.2 实例分析")]),e._v(" "),a("p",[e._v("2.2.1 服务端安装\n服务端关键步骤是导入数据库和修改端口号，具体步骤请参看官方网站：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("https://ctripcorp.github.io/apollo/#/zh/deployment/quick-start\n")])])]),a("p",[e._v("启动成功后访问地址：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("http://localhost:8070\n")])])]),a("p",[a("img",{attrs:{src:t(1047),alt:""}})]),e._v(" "),a("p",[e._v("输入用户名apollo、密码admin登录：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1048),alt:""}})]),e._v(" "),a("p",[e._v("点击进入我创建myApp项目，我们看到在DEV环境、default集群、application命名空间包含一个timeout配置项，100是这个配置项的值，下面我们在应用程序读取这个配置项：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1049),alt:""}})]),e._v(" "),a("p",[e._v("2.2.2 应用程序\n(1) 引入依赖")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("<dependencies>\n    <dependency>\n    <groupId>com.ctrip.framework.apollo</groupId>\n    <artifactId>apollo-client</artifactId>\n    <version>1.7.0</version>\n    </dependency>\n</dependencies>\t\n")])])]),a("p",[e._v("(2) 简单实例")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class GetApolloConfigTest extends BaseTest {\n\n    /**\n     * -Dapp.id=myApp -Denv=DEV -Dapollo.cluster=default -Ddev_meta=http://localhost:8080\n     *\n     * myApp+DEV+default+application\n     */\n    @Test\n    public void testGet() throws InterruptedException {\n        Config appConfig = ConfigService.getAppConfig();\n        while (true) {\n            String value = appConfig.getProperty("timeout", "200");\n            System.out.println("timeout=" + value);\n            TimeUnit.SECONDS.sleep(1);\n        }\n    }\n}\n')])])]),a("p",[e._v("因为上述程序是通过while(true)不断获取配置项的值，所以程序输出结果如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("timeout=100\ntimeout=100\ntimeout=100\ntimeout=100\ntimeout=100\ntimeout=100\n")])])]),a("p",[e._v("我们现在把配置项的值改为200程序输出结果如下:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("timeout=100\ntimeout=100\ntimeout=100\ntimeout=100\ntimeout=200\ntimeout=200\ntimeout=200\n")])])]),a("p",[e._v("(3) 监听实例\n生产环境我们一般不用while(true)监听变化，而是通过注册监听器方式感知变化信息：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('public class GetApolloConfigTest extends BaseTest {\n\n    /**\n     * 监听命名空间变化\n     *\n     * -Dapp.id=myApp -Denv=DEV -Dapollo.cluster=default -Ddev_meta=http://localhost:8080\n     *\n     * myApp+DEV+default+application\n     */\n    @Test\n    public void testListen() throws InterruptedException {\n        Config config = ConfigService.getConfig("application");\n        config.addChangeListener(new ConfigChangeListener() {\n            @Override\n            public void onChange(ConfigChangeEvent changeEvent) {\n                System.out.println("发生变化命名空间=" + changeEvent.getNamespace());\n                for (String key : changeEvent.changedKeys()) {\n                    ConfigChange change = changeEvent.getChange(key);\n                    System.out.println(String.format("发生变化key=%s,oldValue=%s,newValue=%s,changeType=%s", change.getPropertyName(), change.getOldValue(), change.getNewValue(), change.getChangeType()));\n                }\n            }\n        });\n        Thread.sleep(1000000L);\n    }\n}\n')])])]),a("p",[e._v("我们现在把timeout值从200改为300，程序输出结果：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("发生变化命名空间=application\n发生变化key=timeout,oldValue=200,newValue=300,changeType=MODIFIED\n")])])]),a("h3",{attrs:{id:"_3-动态线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-动态线程池"}},[e._v("#")]),e._v(" 3 动态线程池")]),e._v(" "),a("p",[e._v("现在我们把线程池和Apollo结合起来构建动态线程池，具备了上述知识编写起来并不复杂。首先我们用默认值构建一个线程池，然后线程池会监听Apollo关于相关配置项，如果相关配置有变化则刷新相关参数。第一步在Apollo配置中心设置三个线程池参数（本文没有设置拒绝策略其原理一致）：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1050),alt:""}})]),e._v(" "),a("p",[e._v("第二步编写核心代码：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('/**\n * 动态线程池工厂\n *\n * @author 微信公众号「JAVA前线」\n *\n */\n@Slf4j\n@Component\npublic class DynamicThreadPoolFactory {\n    private static final String NAME_SPACE = "threadpool-config";\n\n    /** 线程执行器 **/\n    private volatile ThreadPoolExecutor executor;\n\n    /** 核心线程数 **/\n    private Integer CORE_SIZE = 10;\n\n    /** 最大值线程数 **/\n    private Integer MAX_SIZE = 20;\n\n    /** 等待队列长度 **/\n    private Integer QUEUE_SIZE = 2000;\n\n    /** 线程存活时间 **/\n    private Long KEEP_ALIVE_TIME = 1000L;\n\n    /** 线程名 **/\n    private String threadName;\n\n    public DynamicThreadPoolFactory() {\n        Config config = ConfigService.getConfig(NAME_SPACE);\n        init(config);\n        listen(config);\n    }\n\n    /**\n     * 初始化\n     */\n    private void init(Config config) {\n        if (executor == null) {\n            synchronized (DynamicThreadPoolFactory.class) {\n                if (executor == null) {\n                    String coreSize = config.getProperty(KeysEnum.CORE_SIZE.getNodeKey(), CORE_SIZE.toString());\n                    String maxSize = config.getProperty(KeysEnum.MAX_SIZE.getNodeKey(), MAX_SIZE.toString());\n                    String keepAliveTIme = config.getProperty(KeysEnum.KEEP_ALIVE_TIME.getNodeKey(), KEEP_ALIVE_TIME.toString());\n                    BlockingQueue<Runnable> queueToUse = new LinkedBlockingQueue<Runnable>(QUEUE_SIZE);\n                    executor = new ThreadPoolExecutor(Integer.valueOf(coreSize), Integer.valueOf(maxSize), Long.valueOf(keepAliveTIme), TimeUnit.MILLISECONDS, queueToUse, new NamedThreadFactory(threadName, true), new AbortPolicyDoReport(threadName));\n                }\n            }\n        }\n    }\n\n    /**\n     * 监听器\n     */\n    private void listen(Config config) {\n        config.addChangeListener(new ConfigChangeListener() {\n            @Override\n            public void onChange(ConfigChangeEvent changeEvent) {\n                log.info("命名空间发生变化={}", changeEvent.getNamespace());\n                for (String key : changeEvent.changedKeys()) {\n                    ConfigChange change = changeEvent.getChange(key);\n                    String newValue = change.getNewValue();\n                    refreshThreadPool(key, newValue);\n                    log.info("发生变化key={},oldValue={},newValue={},changeType={}", change.getPropertyName(), change.getOldValue(), change.getNewValue(), change.getChangeType());\n                }\n            }\n        });\n    }\n\n    /**\n     * 刷新线程池\n     */\n    private void refreshThreadPool(String key, String newValue) {\n        if (executor == null) {\n            return;\n        }\n        if (KeysEnum.CORE_SIZE.getNodeKey().equals(key)) {\n            executor.setCorePoolSize(Integer.valueOf(newValue));\n            log.info("修改核心线程数key={},value={}", key, newValue);\n        }\n        if (KeysEnum.MAX_SIZE.getNodeKey().equals(key)) {\n            executor.setMaximumPoolSize(Integer.valueOf(newValue));\n            log.info("修改最大线程数key={},value={}", key, newValue);\n        }\n        if (KeysEnum.KEEP_ALIVE_TIME.getNodeKey().equals(key)) {\n            executor.setKeepAliveTime(Integer.valueOf(newValue), TimeUnit.MILLISECONDS);\n            log.info("修改活跃时间key={},value={}", key, newValue);\n        }\n    }\n\n    public ThreadPoolExecutor getExecutor(String threadName) {\n        return executor;\n    }\n\n    enum KeysEnum {\n\n        CORE_SIZE("coreSize", "核心线程数"),\n\n        MAX_SIZE("maxSize", "最大线程数"),\n\n        KEEP_ALIVE_TIME("keepAliveTime", "线程活跃时间")\n\n        ;\n\n        private String nodeKey;\n        private String desc;\n\n        KeysEnum(String nodeKey, String desc) {\n            this.nodeKey = nodeKey;\n            this.desc = desc;\n        }\n\n        public String getNodeKey() {\n            return nodeKey;\n        }\n\n        public void setNodeKey(String nodeKey) {\n            this.nodeKey = nodeKey;\n        }\n\n        public String getDesc() {\n            return desc;\n        }\n\n        public void setDesc(String desc) {\n            this.desc = desc;\n        }\n    }\n}\n\n/**\n * 动态线程池执行器\n *\n * @author 微信公众号「JAVA前线」\n *\n */\n@Component\npublic class DynamicThreadExecutor {\n\n    @Resource\n    private DynamicThreadPoolFactory threadPoolFactory;\n\n    public void execute(String bizName, Runnable job) {\n        threadPoolFactory.getExecutor(bizName).execute(job);\n    }\n\n    public Future<?> sumbit(String bizName, Runnable job) {\n        return threadPoolFactory.getExecutor(bizName).submit(job);\n    }\n}\n')])])]),a("p",[e._v("第三步运行测试用例并结合VisualVM观察线程数：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('/**\n * 动态线程池测试\n *\n * @author 微信公众号「JAVA前线」\n *\n */\npublic class DynamicThreadExecutorTest extends BaseTest {\n\n    @Resource\n    private DynamicThreadExecutor dynamicThreadExecutor;\n\n    /**\n     * -Dapp.id=myApp -Denv=DEV -Dapollo.cluster=default -Ddev_meta=http://localhost:8080\n     *\n     * myApp+DEV+default+thread-pool\n     */\n    @Test\n    public void testExecute() throws InterruptedException {\n        while (true) {\n            dynamicThreadExecutor.execute("bizName", new Runnable() {\n                @Override\n                public void run() {\n                    System.out.println("bizInfo");\n                }\n            });\n            TimeUnit.SECONDS.sleep(1);\n        }\n    }\n}\n')])])]),a("p",[a("img",{attrs:{src:t(1051),alt:""}})]),e._v(" "),a("p",[e._v("我们在配置中心修改配置项把核心线程数设置为50，最大线程数设置为100：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1052),alt:""}})]),e._v(" "),a("p",[e._v("通过VisualVM可以观察到线程数显著上升：")]),e._v(" "),a("p",[a("img",{attrs:{src:t(1053),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_4-文章总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-文章总结"}},[e._v("#")]),e._v(" 4 文章总结")]),e._v(" "),a("p",[e._v("本文我们首先介绍了线程池基础知识，包括七大参数和四个拒绝策略，随后我们介绍了Apollo配置中心的原理和应用，最后我们将线程池和配置中心相结合，实现了动态调整线程数的效果，希望本文对大家有所帮助。")])])}),[],!1,null,null,null);n.default=o.exports}}]);