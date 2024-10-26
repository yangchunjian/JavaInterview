(window.webpackJsonp=window.webpackJsonp||[]).push([[934],{2087:function(t,_,v){"use strict";v.r(_);var e=v(12),n=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"解答"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[t._v("#")]),t._v(" 解答")]),t._v(" "),v("p",[t._v("MySQL有两种死锁处理方式：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("等待，直到超时（innodb_lock_wait_timeout=50s设置锁等待的时间，前提已经检测到锁的产生）。")])]),t._v(" "),v("li",[v("p",[t._v("发起死锁检测，主动回滚一条事务，让其他事务继续执行，回滚代价最小的那一个事务（innodb_deadlock_detect=on）。")])])]),t._v(" "),v("p",[t._v("由于性能原因，一般都是使用"),v("strong",[t._v("死锁检测")]),t._v("来进行处理死锁。")]),t._v(" "),v("p",[t._v("死锁检测的原理是构建一个以"),v("strong",[t._v("事务为顶点、锁为边")]),t._v("的有向图，判断有向图是否存在环，存在即有死锁。")]),t._v(" "),v("p",[t._v("检测到死锁之后，"),v("strong",[t._v("选择插入、更新或者删除的行数最少的事务回滚")]),t._v("，")]),t._v(" "),v("p",[t._v("基于 "),v("code",[t._v("INFORMATION_SCHEMA.INNODB_TRX")]),t._v(" 表中的 "),v("code",[t._v("trx_weight")]),t._v(" 字段来判断。")])])}),[],!1,null,null,null);_.default=n.exports}}]);