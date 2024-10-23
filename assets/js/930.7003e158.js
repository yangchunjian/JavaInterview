(window.webpackJsonp=window.webpackJsonp||[]).push([[930],{2089:function(a,t,v){"use strict";v.r(t);var r=v(12),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("p",[a._v("Java10再2018年的3月21号 发布,Java10版本带来了很多新特性，其中最备受广大开发者关注的莫过于局部变量类型判断。除此之外还带来了垃圾收集器改善、GC改进、性能提升、线程管控等一批新特性。")]),a._v(" "),v("h2",{attrs:{id:"局部变量类型推断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#局部变量类型推断"}},[a._v("#")]),a._v(" 局部变量类型推断")]),a._v(" "),v("p",[a._v("局部变量类推断是Java10中最值得开发人员值得的新特性。允许开发人员省略通常不必要得局部变量类型初始化声明。新得语法将减少Java代码得冗长度，同时保持对静态类型安全性得承诺。只要编译器可以推断此种类型，开发人员不再需要专门声明一个局部变量的类型，也就是可以随意定义变量而不必指定类型。但是为了可阅读性 还是应该考虑声明对应的参数类型。方便理解。")]),a._v(" "),v("h2",{attrs:{id:"整合jdk代码仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#整合jdk代码仓库"}},[a._v("#")]),a._v(" 整合JDK代码仓库")]),a._v(" "),v("p",[a._v("为了简化开发流程，Java10中会将多个代码库合并到一个代码库当中，在已发布的Java版本中，JDK的整套代码根据不同功能已被分别存储在多个Mercurial存储库。这八个Mercurial存储库分别是：root、corba、hotspot、jaxp、jaxws、jdk、langtools、nashorn。")]),a._v(" "),v("h2",{attrs:{id:"统一的垃圾回收结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#统一的垃圾回收结构"}},[a._v("#")]),a._v(" 统一的垃圾回收结构")]),a._v(" "),v("p",[a._v("在Java10之前，GC回收的组件散落在代码的各个部分。尽管这些管理对于使用GC计划的JDK开发者来说比较熟悉，但对于新的开发人员来说，对于在哪里查找到特定的GC代码或者实现一个新的垃圾收集器，还是感到繁琐。 为解决此问题，需要整合并清理GC接口，以便更容易实现新的GC，并更好的维护现有的GC。在Java10当中 引入一个干净的 GC 接口，改进不同 GC 源代码的隔离性，多个 GC 之间共享的实现细节代码应该存在于辅助类中。")]),a._v(" "),v("h2",{attrs:{id:"并行全垃圾回收器g1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并行全垃圾回收器g1"}},[a._v("#")]),a._v(" 并行全垃圾回收器G1")]),a._v(" "),v("p",[a._v("Java10为G1引入多线程并行GC，同时会使用与年轻代回收和混合回收相同的并行工作线程数量，从而减少了Full GC的发生，以带来更好的性能提升，更大的吞吐量。Java中将采用并行化mark-sweep-compact算法，并使用与年轻代回收和混合回收相同数量的线程。具体并行线程数量可以通过: -XX:ParallelGCThreads 参数来调节，但是这也会影响用于年轻代和混合手机的工作线程数量。")]),a._v(" "),v("h2",{attrs:{id:"应用程序类数据共享"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用程序类数据共享"}},[a._v("#")]),a._v(" 应用程序类数据共享")]),a._v(" "),v("p",[a._v("在Java5中就已经引入了 类数据共享机制简称CDS，允许将一组类预处理为共享归档文件，以便在运行时能够进行内存映射以减少Java程序的启动时间，当多个Java虚拟机共享相同的归档文件时，还可以减少动态内存的占用量，同时减少多个虚拟机在同一个物理虚拟机的资源占用。CDS的特性在原来的bootstrap类基础上，扩展了应用类的CDS支持，原理为:在启动时记录加载类的过程，写入到文本文件中，再次启动时直接读取此启动文本并加载，如果应用环境没有大的变化，启动速度就会得到提升。")]),a._v(" "),v("h2",{attrs:{id:"线程-局部管控"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程-局部管控"}},[a._v("#")]),a._v(" 线程-局部管控")]),a._v(" "),v("p",[a._v("在已有的Java版本中，JVM线程只能全部启用或者停止，没法对单独某个线程的操作。Java10中线程管控引入JVM安全点的概念，将允许在不运行全局JVM安全点的情况下实现线程回调，这种方式使得单独停止某个线程变得可能。显示的提高了现有的JVM性能开销。")]),a._v(" "),v("p",[a._v("增加的参数为：-XX:ThreadLocalHandshakes (默认为开启)")]),a._v(" "),v("h2",{attrs:{id:"移除native-header自动生成工具"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移除native-header自动生成工具"}},[a._v("#")]),a._v(" 移除Native-Header自动生成工具")]),a._v(" "),v("p",[a._v("用户每次调用javah工具时会被警告该工具在未来得版本中将执行删除操作。jdk10已经移除。")]),a._v(" "),v("h2",{attrs:{id:"额外的unicode语言标签扩展"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#额外的unicode语言标签扩展"}},[a._v("#")]),a._v(" 额外的Unicode语言标签扩展")]),a._v(" "),v("p",[a._v("自java7支持BCP 47语言标记之后，JDK中便增加了与日历和数字相关的unicode区域扩展，在java9中新增支持ca和nu两种语言标签扩展，而在 Java 10 中将继续增加 Unicode 语言标签扩展，具体为：增强 java.util.Locale 类及其相关的 API，以更方便的获得所需要的语言地域环境信息。")]),a._v(" "),v("h2",{attrs:{id:"备用存储上的堆分配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#备用存储上的堆分配"}},[a._v("#")]),a._v(" 备用存储上的堆分配")]),a._v(" "),v("p",[a._v("Java10将使得JVM能够适用于不同类型的存储机制的堆，在可选内存设备上进行堆内存分配。要在这样的备用设备上进行堆分配，可以使用堆分配参数 -XX：AllocateHeapAt = "),v("path",[a._v(" ，这个参数将指向文件系统的文件并使用内存映射来达到在备用存储设备上进行堆分配的预期结果")])]),a._v(" "),v("h2",{attrs:{id:"基于java的实验性jit编译器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基于java的实验性jit编译器"}},[a._v("#")]),a._v(" 基于Java的实验性JIT编译器")]),a._v(" "),v("p",[a._v("Java10中开启了基于Java的JIT编译器Graal，并将其作用Linux平台上的是JIT编译器开始进行测试和调试工作，Java10当中默认情况下HotSpot仍使用的是C2编译器，要启用Graal作为JIT编译器，-XX：+ UnlockExperimentalVMOptions -XX：+ UseJVMCICompiler 使用该参数")]),a._v(" "),v("h2",{attrs:{id:"根证书认证"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#根证书认证"}},[a._v("#")]),a._v(" 根证书认证")]),a._v(" "),v("p",[a._v("自Java9在keytool中加入参数-cacerts，可以查看当前JDK管理根证书。从Java10开始，将会在JDK中提供一套默认的CA根证书。")])])}),[],!1,null,null,null);t.default=e.exports}}]);