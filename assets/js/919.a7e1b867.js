(window.webpackJsonp=window.webpackJsonp||[]).push([[919],{2060:function(e,a,r){"use strict";r.r(a);var t=r(12),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"解答"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[e._v("#")]),e._v(" 解答")]),e._v(" "),r("h2",{attrs:{id:"简要"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简要"}},[e._v("#")]),e._v(" 简要")]),e._v(" "),r("p",[e._v("工作中负责的有一个项目是使用iReport+JasperReport实现的一个打印系统。最近这个线上程序经常无响应，重启后恢复正常，但是时不时还是会出现类似的问题。")]),e._v(" "),r("p",[e._v("最后发现是JasperReport的一个问题。有个JasperReport的转换任务内存占用特别高，当新对象需要分配内存时就会内存不够了，于是GC线程就不断GC，占用CPU。\n导致系统CPU占用超高。 下面说下问题排查的一个思路步骤")]),e._v(" "),r("h2",{attrs:{id:"基本环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本环境"}},[e._v("#")]),e._v(" 基本环境")]),e._v(" "),r("ul",[r("li",[e._v("tomcat 7")]),e._v(" "),r("li",[e._v("JDK 7")]),e._v(" "),r("li",[e._v("Linux")])]),e._v(" "),r("p",[r("strong",[e._v("问题定位")])]),e._v(" "),r("p",[r("strong",[e._v("查看后台异常")])]),e._v(" "),r("p",[e._v("通过查看系统的后台日志，发现各个请求都正常，没有异常抛出。于是考虑系统状况")]),e._v(" "),r("p",[r("strong",[e._v("查看系统状况")])]),e._v(" "),r("p",[e._v("top 命令查看CPU、内存等使用情况")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("[root@DEV-L002323 ~]# top\ntop - 14:52:54 up 514 days,  7:00,  8 users,  load average: 2.85, 1.35, 1.62\nTasks: 147 total,   1 running, 146 sleeping,   0 stopped,   0 zombie\nCpu(s): 57.6%us,  6.3%sy,  0.0%ni,  9.2%id, 26.2%wa,  0.0%hi,  0.0%si,  0.7%st\nMem:   3922928k total,  3794232k used,   128696k free,   403112k buffers\nSwap:  4194296k total,    65388k used,  4128908k free,  1492204k cached\n\n  PID USER      PR  NI  VIRT  RES  SHR S %CPU %MEM    TIME+  COMMAND                                                                     \n 6764 root      20   0 2428m 1.1g  11m S 190.0 28.3  36:38.55 java                                                                       \n 1161 root      20   0     0    0    0 D  0.3  0.0  32:43.06 flush-253:0                                                                 \n 1512 root      20   0 14684 4188  488 S  0.3  0.1   0:16.12 sec_agent                                                                   \n    1 root      20   0 19356  652  436 S  0.0  0.0   0:16.64 init                                                                        \n    2 root      20   0     0    0    0 S  0.0  0.0   0:00.05 kthreadd                                                                    \n    3 root      RT   0     0    0    0 S  0.0  0.0   1:49.34 migration/0                                                                 \n    4 root      20   0     0    0    0 S  0.0  0.0  17:46.61 ksoftirqd/0                                                                 \n    5 root      RT   0     0    0    0 S  0.0  0.0   0:00.00 migration/0                                                                 \n    6 root      RT   0     0    0    0 S  0.0  0.0   2:02.78 watchdog/0                                                                  \n    7 root      RT   0     0    0    0 S  0.0  0.0   1:46.79 migration/1\n")])])]),r("p",[e._v("从top命令的结果发现。pid为6764的java进程CPU利用持续占用过高,达到了190%。内存占用率为28.3%。")]),e._v(" "),r("p",[r("strong",[e._v("定位问题线程")])]),e._v(" "),r("p",[e._v("使用"),r("code",[e._v("ps -mp pid -o THREAD,tid,time")]),e._v("命令查看该进程的线程情况，发现该进程的两个线程占用率很高")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("[root@DEV-L002323 ~]# ps -mp 6764 -o THREAD,tid,time\nUSER     %CPU PRI SCNT WCHAN  USER SYSTEM   TID     TIME\nroot     71.7   -    - -         -      -     - 00:36:52\nroot      0.0  19    - futex_    -      -  6764 00:00:00\nroot      0.0  19    - poll_s    -      -  6765 00:00:01\nroot     44.6  19    - futex_    -      -  6766 00:23:32\nroot     44.6  19    - futex_    -      -  6767 00:23:32\nroot      1.2  19    - futex_    -      -  6768 00:00:38\nroot      0.0  19    - futex_    -      -  6769 00:00:00\nroot      0.0  19    - futex_    -      -  6770 00:00:01\nroot      0.0  19    - futex_    -      -  6771 00:00:00\n")])])]),r("p",[e._v("从上面可以看出6766和6767两个线程占用CPU大约有半个小时，每个线程的CPU利用率约为45%。接下来需要查看对应线程的问题堆栈")]),e._v(" "),r("p",[e._v("下面就看看6766这个问题线程的堆栈")]),e._v(" "),r("p",[r("strong",[e._v("查看问题线程堆栈")])]),e._v(" "),r("p",[r("strong",[e._v("将线程id转换为16进制")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('[root@DEV-L002323 ~]#  printf "%x\\n" 6766\n1a6e\n')])])]),r("p",[r("strong",[e._v("jstack查看线程堆栈信息")])]),e._v(" "),r("p",[e._v("jstack命令打印线程堆栈信息，命令格式："),r("code",[e._v("jstack pid |grep tid")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('[root@DEV-L002323 ~]# jstack 6764 | grep 1a6e\n"GC task thread#0 (ParallelGC)" prio=10 tid=0x00007ffeb8016800 nid=0x1a6e runnable\n"GC task thread#0 (ParallelGC)" prio=10 tid=0x00007ffeb8016800 nid=0x1a6e runnable \n"GC task thread#1 (ParallelGC)" prio=10 tid=0x00007ffeb8016800 nid=0x1a6e runnable  \n"VM Periodic Task Thread" prio=10 tid=0x00007ffeb8016800 nid=0x3700 waiting on condition \n\nJNI global references: 496\n')])])]),r("p",[e._v("从上面可以看书，这些都是GC的线程。那么可以推断，很有可能就是内存不够导致GC不断执行。接下来我们就需要查看\ngc 内存的情况")]),e._v(" "),r("p",[r("strong",[e._v("jstat查看进程内存状况")])]),e._v(" "),r("p",[e._v("命令: "),r("code",[e._v("jstat -gcutil")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("[root@DEV-L002323 bin]# jstat -gcutil 6764 2000 10\n  S0     S1     E      O      P     YGC     YGCT    FGC    FGCT     GCT   \n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n  0.00   0.00  100.00 100.00  97.74   1863   33.937   310  453.788  487.726\n")])])]),r("p",[e._v("可以看出内存的年轻代和年老带的利用率都达到了惊人的100%。FGC的次数也特别多，并且在不断飙升。可以推断出\n程序肯定是在哪里的实现有问题，需要重点查看大对象或者异常多的对象信息。此时可以生成headdump文件拿到本地来分析")]),e._v(" "),r("p",[r("strong",[e._v("jstack 和 jmap 分析进程堆栈和内存状况")])]),e._v(" "),r("p",[e._v("使用jmap命令导出heapdump文件，然后拿到本地使用jvisualvm.exe分析。")]),e._v(" "),r("p",[e._v("命令: "),r("code",[e._v("jmap [option] vmid")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("jmap -dump:format=b,file=dump.bin 6764\n")])])]),r("p",[e._v("命令: "),r("code",[e._v("jstack [option] vmid")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("jstack -l 6764 >> jstack.out\n")])])]),r("p",[e._v("从heapdump文件中定位到程序中的工作现场，和内存状况，如下：")]),e._v(" "),r("p",[e._v("线程:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v('"Thread-21" daemon prio=5 tid=85 WAITING\n    at java.lang.Object.wait(Native Method)\n    at java.lang.Object.wait(Object.java:503)\n    at net.sf.jasperreports.engine.fill.AbstractThreadSubreportRunner.waitResult(AbstractThreadSubreportRunner.java:81)\n       Local Variable: net.sf.jasperreports.engine.fill.ThreadExecutorSubreportRunner#2\n    at net.sf.jasperreports.engine.fill.AbstractThreadSubreportRunner.start(AbstractThreadSubreportRunner.java:53)\n    at net.sf.jasperreports.engine.fill.JRFillSubreport.prepare(JRFillSubreport.java:758)\n    at net.sf.jasperreports.engine.fill.JRFillElementContainer.prepareElements(JRFillElementContainer.java:331)\n       Local Variable: net.sf.jasperreports.engine.fill.JRFillSubreport#3\n    at net.sf.jasperreports.engine.fill.JRFillBand.fill(JRFillBand.java:384)\n    at net.sf.jasperreports.engine.fill.JRFillBand.fill(JRFillBand.java:358)\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillBandNoOverflow(JRVerticalFiller.java:458)\n       Local Variable: net.sf.jasperreports.engine.fill.JRFillBand#3\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillPageHeader(JRVerticalFiller.java:421)\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillPageBreak(JRVerticalFiller.java:1954)\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillColumnBreak(JRVerticalFiller.java:1981)\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillDetail(JRVerticalFiller.java:754)\n       Local Variable: net.sf.jasperreports.engine.fill.JRFillBand[]#1\n       Local Variable: net.sf.jasperreports.engine.fill.JRFillBand#2\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillReportStart(JRVerticalFiller.java:288)\n    at net.sf.jasperreports.engine.fill.JRVerticalFiller.fillReport(JRVerticalFiller.java:151)\n    at net.sf.jasperreports.engine.fill.JRBaseFiller.fill(JRBaseFiller.java:939)\n    at net.sf.jasperreports.engine.fill.JRFiller.fill(JRFiller.java:152)\n       Local Variable: net.sf.jasperreports.engine.util.LocalJasperReportsContext#1\n       Local Variable: net.sf.jasperreports.engine.fill.JRVerticalFiller#1\n    at net.sf.jasperreports.engine.JasperFillManager.fill(JasperFillManager.java:464)\n    at net.sf.jasperreports.engine.JasperFillManager.fill(JasperFillManager.java:300)\n       Local Variable: java.io.File#135\n       Local Variable: net.sf.jasperreports.engine.JasperFillManager#1\n       Local Variable: net.sf.jasperreports.engine.JasperReport#1\n    at net.sf.jasperreports.engine.JasperFillManager.fillReport(JasperFillManager.java:757)\n    at com.pingan.icore.print.asyntask.jasper.AysnJasPdfConvertorThread.fill(AysnJasPdfConvertorThread.java:110)\n       Local Variable: java.lang.String#57815\n       Local Variable: java.lang.String#55498\n       Local Variable: java.util.HashMap#1682\n       Local Variable: java.lang.String#57807\n       Local Variable: java.lang.String#57809\n    at com.pingan.icore.print.asyntask.jasper.AysnJasPdfConvertorThread.run(AysnJasPdfConvertorThread.java:223)\n       Local Variable: java.io.File#139\n       Local Variable: java.io.File#138\n       Local Variable: java.io.File#137\n       Local Variable: java.io.File#136\n       Local Variable: com.pingan.icore.print.asyntask.jasper.AysnJasPdfConvertorThread#1\n    at java.lang.Thread.run(Thread.java:722)\n')])])]),r("p",[r("strong",[e._v("内存:")])]),e._v(" "),r("p",[e._v("发现这个net.sf.jasperreports.engine.fill.JRTemplatePrintText类的实例特别多，实例占了33.2%，大小占了58.1%")]),e._v(" "),r("p",[r("strong",[e._v("结论")])]),e._v(" "),r("p",[e._v("到这里可以判断出是JasperReport在转换时对对象的创建和使用不当造成的。然而解决该问题并没有什么特别好的方式，除非去改源码或者换一个报表工具\n根据上面的情况google了下别人是否遇到过类似的问题，然后定位到如下两个网址:")]),e._v(" "),r("ul",[r("li",[e._v("http://community.jaspersoft.com/jasperreports-library/issues/4151")]),e._v(" "),r("li",[e._v("http://community.jaspersoft.com/wiki/isprintwhendetailoverflowstrue-can-cause-report-render-indefinitely")])]),e._v(" "),r("p",[e._v("可以看出新版的jasperreports依然会有该问题。只能通过取消勾选 **‘Print When Detail Overflows’**的选项来避免该问题\n同时使jasperreport的virtualizer(Virtualizes data to the filesystem. When this object is finalized, it removes the swap files it makes. The virtualized objects have references to this object, so finalization does not occur until this object and the objects using it are only weakly referenced.)\n来优化jasperreport的内存使用，减轻症状。")])])}),[],!1,null,null,null);a.default=n.exports}}]);