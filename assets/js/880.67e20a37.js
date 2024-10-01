(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{2025:function(_,v,t){"use strict";t.r(v);var i=t(12),l=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[_._v("#")]),_._v(" 解答")]),_._v(" "),t("p",[t("strong",[_._v("线程死锁的四个必要条件")])]),_._v(" "),t("p",[_._v("如果在一个系统中以下四个条件同时成立，那么就能引起死锁：")]),_._v(" "),t("ul",[t("li",[_._v("互斥性：线程对资源的占有是排他性的，一个资源只能被一个线程占有，直到释放。")]),_._v(" "),t("li",[_._v("请求和保持条件：一个线程对请求被占有资源发生阻塞时，对已经获得的资源不释放。")]),_._v(" "),t("li",[_._v("不剥夺：一个线程在释放资源之前，其他的线程无法剥夺占用。")]),_._v(" "),t("li",[_._v("循环等待：发生死锁时，线程进入死循环，永久阻塞。")])]),_._v(" "),t("p",[t("strong",[_._v("解决方法：")])]),_._v(" "),t("ul",[t("li",[_._v("互斥性，可用ThreadLocal")]),_._v(" "),t("li",[_._v("请求和保持条件,踢掉一个（结束一个）")]),_._v(" "),t("li",[_._v("不剥夺，tryLock，加个超时时间，抢不到释放资源")])]),_._v(" "),t("p",[_._v("分布式锁，可以用")]),_._v(" "),t("ul",[t("li",[_._v("DB（Mysql），")]),_._v(" "),t("li",[_._v("redis的ex nx，")]),_._v(" "),t("li",[_._v("zookeeper，")]),_._v(" "),t("li",[_._v("etcd实现分布式锁")])]),_._v(" "),t("p",[_._v("DB分布式锁")]),_._v(" "),t("ul",[t("li",[_._v("1、根据业务字段生成transaction_id，并线程安全的创建锁资源")]),_._v(" "),t("li",[_._v("2、根据transaction_id申请锁")]),_._v(" "),t("li",[_._v("3、释放锁")])]),_._v(" "),t("p",[_._v("进程内的线程可以基于obj来实现同步。obj在这里可以理解为一个锁对象。")]),_._v(" "),t("p",[_._v("如果线程要进入synchronized代码块里，必须先持有obj对象上的锁。")]),_._v(" "),t("p",[_._v("这种锁是JAVA里面的内置锁，创建的过程是线程安全的。那么借助DB，如何保证创建锁的过程是线程安全的呢？")]),_._v(" "),t("p",[_._v("可以利用DB中的UNIQUE KEY特性，一旦出现了重复的key，由于UNIQUE\nKEY的唯一性，会抛出异常的。")]),_._v(" "),t("p",[_._v("在JAVA里面，是SQLIntegrityConstraintViolationException异常。")])])}),[],!1,null,null,null);v.default=l.exports}}]);