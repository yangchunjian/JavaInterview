(window.webpackJsonp=window.webpackJsonp||[]).push([[925],{2075:function(t,e,a){"use strict";a.r(e);var s=a(12),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[t._v("#")]),t._v(" 解答")]),t._v(" "),a("p",[t._v("1、一般的队列只能保证作为一个有限长度的缓冲区，如果超出了缓冲长度，就无法保留当前的任务了，阻塞队列通过阻塞可以保留住当前想要继续入队的任务。")]),t._v(" "),a("p",[t._v("阻塞队列可以保证任务队列中没有任务时阻塞来获取任务的线程(即线程池中没有任务时，阻塞核心线程)，使得线程进入wait状态，释放cpu。")]),t._v(" "),a("p",[t._v("阻塞队列自带阻塞和唤醒功能，不需要额外处理，无任务执行时，线程池利用阻塞队列的take方法挂起，从而维持核心线程的存活，不至于一直占有cpu资源。")]),t._v(" "),a("p",[t._v("2、在创建新线程的时候，是要获取全局锁的，这个时候其他的线程就需要阻塞，影响了整体的性能。")])])}),[],!1,null,null,null);e.default=n.exports}}]);