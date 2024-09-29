(window.webpackJsonp=window.webpackJsonp||[]).push([[889],{2031:function(s,l,a){"use strict";a.r(l);var t=a(12),e=Object(t.a)({},(function(){var s=this,l=s.$createElement,a=s._self._c||l;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[s._v("#")]),s._v(" 解答")]),s._v(" "),a("blockquote",[a("p",[s._v("Can’t connect to local MySQL server through socket ‘/tmp/mysql.sock’")])]),s._v(" "),a("p",[s._v("一般情况下我装好 mysql 后就不会在动它了，因为一不留神就出各种错误信息，在不记得\n多少次 google 这个错误之后，我决定把它记下来")]),s._v(" "),a("p",[s._v("网上很多解决方法都是说 mysql 服务找不到 /tmp/mysql.sock 文件，那我们找到它\n不就行了，")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ find / -name mysql.sock\n/var/lib/mysql/mysql.sock\n$ ln -s /var/lib/mysql/mysql.sock   /tmp/mysql.sock\n")])])]),a("p",[s._v("先找到这个文件，然后建立软连接到 /tmp/mysql.sock ，然而到我试验的时候，完全找\n不到这个文件")]),s._v(" "),a("p",[s._v("在翻阅资料后，发现 /tmp/mysql.sock 是在 mysql 启动后生成的临时文件，也就是说\n不成功启动 mysql 就不会有这个文件，我的方向完全错误，折腾到筋疲力尽，最后我只得\n找到各种日志查看")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ mysqld status\n")])])]),a("p",[s._v("通过查看 mysql 运行状态状态发现这货")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[ERROR] unknown variable 'prompt=\\c \\U[\\d] \\D> '\n")])])]),a("p",[s._v("不管为啥不通过先干掉再说，重启 mysql 继续查看状态，又出现这货")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("[ERROR] InnoDB: Unable to lock ./ibdata1 error\n")])])]),a("p",[s._v("说明当前又进行 mysql 进程再启动")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ kill -9 `ps aux | grep mysql | awk '{print $2}'`\n")])])]),a("p",[s._v("通过这段命令强行 kill 掉所以 mysql 进程")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("$ mysql.service start\n")])])]),a("p",[s._v("成功")]),s._v(" "),a("p",[s._v("通过这次解决问题，报错 /tmp/mysql.sock 不一定是它的问题，关键还是看日志，对\n的错的全在日志里")])])}),[],!1,null,null,null);l.default=e.exports}}]);