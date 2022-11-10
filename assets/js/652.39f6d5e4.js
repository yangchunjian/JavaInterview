(window.webpackJsonp=window.webpackJsonp||[]).push([[652],{1715:function(v,_,p){"use strict";p.r(_);var t=p(10),e=Object(t.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h2",{attrs:{id:"解答"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[v._v("#")]),v._v(" 解答")]),v._v(" "),p("p",[p("code",[v._v("一、池化技术 - 简单点来说，就是提前保存大量的资源，以备不时之需。")])]),v._v(" "),p("p",[v._v("对于线程，内存，oracle的连接对象等等，这些都是资源，程序中当你创建一个线程或者在堆上申请一块内存时，都涉及到很多系统调用，")]),v._v(" "),p("p",[v._v("也是非常消耗CPU的，如果你的程序需要很多类似的工作线程或者需要频繁的申请释放小块内存，如果没有在这方面进行优化，那很有可能这部分代码将会成为影响你整个程序性能的瓶颈。")]),v._v(" "),p("p",[v._v("池化技术主要有线程池，内存池，连接池，对象池等等，")]),v._v(" "),p("p",[p("code",[v._v("反正这些池化技术都是为了优化内存，提高CPU的性能，都是提前创建好若干的需要的东西，不销毁，而不是在使用的时候再创建---销毁---再创建循环，这样消耗内存和降低了CPU的性能。")])]),v._v(" "),p("p",[v._v("对象池就是提前创建很多对象，将用过的对象保存起来，等下一次需要这种对象的时候，再拿出来重复使用")]),v._v(" "),p("p",[p("strong",[v._v("（1）线程池")])]),v._v(" "),p("p",[v._v("线程池的原理很简单，类似于操作系统中的缓冲区的概念，它的流程如下：")]),v._v(" "),p("p",[v._v("先启动若干数量的线程，并让这些线程都处于睡眠状态，当客户端有一个新请求时，就会唤醒线程池中的某一个睡眠线程，让它来处理客户端的这个请求，当处理完这个请求后，线程又处于睡眠状态。")]),v._v(" "),p("p",[v._v("可能你也许会问：为什么要搞得这么麻烦，如果每当客户端有新的请求时，我就创建一个新的线程不就完了？这也许是个不错的方法，因为它能使得你编写代码相对容易一些，但你却忽略了一个重要的问题??性能！")]),v._v(" "),p("p",[v._v("一个省级数据大集中的银行网络中心，高峰期每秒的客户端请求并发数超过100，如果为每个客户端请求创建一个新线程的话，那耗费的CPU时间和内存将是惊人的，如果采用一个拥有200个线程的线程池，那将会节约大量的的系统资源，使得更多的CPU时间和内存用来处理实际的商业应用，而不是频繁的线程创建与销毁。")]),v._v(" "),p("p",[p("strong",[v._v("（2）内存池")])]),v._v(" "),p("p",[v._v("如何更好的管理在应用程序中内存的使用，同时提高内存使用的效率，这是值得每一个开发人员深思的问题。内存池(Memory pool)提供了一种比较可行的解决方案。首先是创建内存池。这个过程的主要任务是预先分配足够大的内存，形成一个初步的“内存池”。分配内存，也就是用户请求内存时，会返回内存池中一块空闲的内存，并将其标志置为已使用，当然具体细节和方法有很多。释放内存时，不是真正地调用free或是delete的过程，而是把内存放回内存池的过程。在把内存放入内存池的同时，要把标志位置为空闲。最后在应用程序结束时，要把内存池销毁。这里主要做的工作就是把内存池中的每一块内存释放。")]),v._v(" "),p("p",[v._v("使用内存池的好处：")]),v._v(" "),p("p",[v._v("1、减少了内存碎片的产生。这个可以从创建内存池的过程中看出。我们在创建内存池时，分配的都是一块块比较整的内存块，这样可以减少内存碎片的产生。")]),v._v(" "),p("p",[v._v("2、提高了内存的使用效率。这个可以从分配内存和释放内存的过程中看出。每次的分配与释放并不是去调用系统提供的函数或是操作符去操作实际的内存，而是在复用内存池中的内存。")]),v._v(" "),p("p",[v._v("缺点：")]),v._v(" "),p("p",[v._v("就是很有可能会造成内存的浪费，原因也很明显，开始分配了一大块内存，不是全部都用得到的。")]),v._v(" "),p("p",[p("strong",[v._v("（3）数据库连接池")])]),v._v(" "),p("p",[v._v("连接池比较典型的有oracle的连接池。")]),v._v(" "),p("p",[v._v("数据库连接是一种关键的有限的昂贵的资源，这一点在多用户的网页应用程序中体现得尤为突出。")]),v._v(" "),p("p",[v._v("一个数据库连接对象均对应一个物理数据库连接，每次操作都打开一个物理连接，使用完都关闭连接，这样造成系统的 性能低下。")]),v._v(" "),p("p",[v._v("数据库连接池的解决方案是在应用程序启动时建立足够的数据库连接，并讲这些连接组成一个连接池(简单说：在一个“池”里放了好多半成品的数据库联接对象)，由应用程序动态地对池中的连接进行申请、使用和释放。对于多于连接池中连接数的并发请求，应该在请求队列中排队等待。并且应用程序可以根据池中连接的使用率，动态增加或减少池中的连接数。")]),v._v(" "),p("p",[v._v("连接池技术尽可能多地重用了消耗内存地资源，大大节省了内存，提高了服务器地服务效率，能够支持更多的客户服务。")]),v._v(" "),p("p",[v._v("通过使用连接池，将大大提高程序运行效率，同时，我们可以通过其自身的管理机制来监视数据库连接的数量、使用情况等。")]),v._v(" "),p("ol",[p("li",[p("p",[v._v("最小连接数是连接池一直保持的数据库连接，所以如果应用程序对数据库连接的使用量不大，将会有大量的数据库连接资源被浪费；")])]),v._v(" "),p("li",[p("p",[v._v("最大连接数是连接池能申请的最大连接数，如果数据库连接请求超过此数，后面的数据库连接请求将被加入到等待队列中，这会影响之后的数据库操作。")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);