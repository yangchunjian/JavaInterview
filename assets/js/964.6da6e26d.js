(window.webpackJsonp=window.webpackJsonp||[]).push([[964],{2129:function(_,n,v){"use strict";v.r(n);var e=v(12),s=Object(e.a)({},(function(){var _=this,n=_.$createElement,v=_._self._c||n;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"解答"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[_._v("#")]),_._v(" 解答")]),_._v(" "),v("h3",{attrs:{id:"一、当前主流的mysql的大版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、当前主流的mysql的大版本"}},[_._v("#")]),_._v(" 一、当前主流的mysql的大版本")]),_._v(" "),v("p",[_._v("当前主流的mysql版本有 5.6、5.7、5.8")]),_._v(" "),v("h3",{attrs:{id:"二、区别比对"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、区别比对"}},[_._v("#")]),_._v(" 二、区别比对")]),_._v(" "),v("p",[v("strong",[_._v("（1）5.6对比5.5")])]),_._v(" "),v("p",[_._v("1、可以修改未压缩表的InnoDB页大小设置为8KB或4KB，默认是16KB。")]),_._v(" "),v("p",[_._v("2、InnoDB的redo log文件可存储的最大值从4g升到512g。")]),_._v(" "),v("p",[_._v("3、可以创建全文索引。")]),_._v(" "),v("p",[_._v("4、可以设置innodb压缩级别 ， 级别等级为 0-9。")]),_._v(" "),v("p",[_._v("5、默认用独立的表空间ibd。")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("> `create table external (x int unsigned not null primary key)data directory = ‘/volumes/external1/data’;`\n")])])]),v("p",[_._v("6、新增参数innodb_page_size可以设置page大小。")]),_._v(" "),v("p",[_._v("7、整合了memcached API，可以使用API来直接访问innodb表，并非SQL（减少SQL解析、查询优化代价）。")]),_._v(" "),v("p",[_._v("8、Innodb将flush刷盘操作从主线程移动到其他线程。")]),_._v(" "),v("p",[_._v("9、Undo Log可以保存在独立的表空间。")]),_._v(" "),v("p",[_._v("10、最大分区数量增加到8192。")]),_._v(" "),v("p",[_._v("11、支持显示分区选择，如：SELECT * FROM t PARTITION (p0, p1) WHERE c < 5。")]),_._v(" "),v("p",[_._v("12、Mysql集群，在这个版本作为独立的产品发布，存储引擎不是默认的innodb，而是NDB。")]),_._v(" "),v("p",[_._v("13、复制和日志记录，可以从远程服务器读取binlog，延迟复制。")]),_._v(" "),v("p",[_._v("14、优化器增强，从5.6开始，可以用EXPLAIN来查看DELETE，INSERT，REPLACE，UPDATE等DML操作的执行计划。 在这之前，它只支持SELECT操作。优化了子查询和主机缓存。")]),_._v(" "),v("p",[_._v("15、统计信息持久化，mysqld重启后不丢失。")]),_._v(" "),v("p",[v("strong",[_._v("（2）5.7对比5.6")])]),_._v(" "),v("p",[_._v("1、用户表 mysql.user 的 plugin字段不允许为空， 默认值是 mysql_native_password，而不是 mysql_old_password，不再支持旧密码格式。")]),_._v(" "),v("p",[_._v("2、增加密码过期机制，过期后需要修改密码，否则可能会被禁用，或者进入沙箱模式。")]),_._v(" "),v("p",[_._v("3、提供了更为简单SSL安全访问配置，并且默认连接就采用SSL的加密方式。")]),_._v(" "),v("p",[_._v("4、MySQL数据库从5.7.8版本开始，也提供了对JSON的支持。")]),_._v(" "),v("p",[_._v("5、可以混合存储结构化数据和非结构化数据，同时拥有关系型数据库和非关系型数据库的优点。\n能够提供完整的事务支持。")]),_._v(" "),v("p",[_._v("6、generated column是MySQL 5.7引入的新特性，所谓generated column，就是数据库中这一列由其他列计算而得。")]),_._v(" "),v("p",[_._v("7、在MySQL 5.7 之前，如果用户输入了错误的SQL语句，按下 ctrl+c ，虽然能够”结束”SQL语句的运行，但是，也会退出当前会话，MySQL 5.7对这一违反直觉的地方进行了改进，不再退出会话。")]),_._v(" "),v("p",[_._v("8、MySQL 5.7可以explain一个正在运行的SQL，这对于DBA分析运行时间较长的语句将会非常有用。")]),_._v(" "),v("p",[_._v("9、sys schema是MySQL 5.7.7中引入的一个系统库，包含了一系列视图、函数和存储过程， 该项目专注于MySQL的易用性。例如：如何查看数据库中的冗余索引；如何获取未使用的索引；如何查看使用全表扫描的SQL语句。")]),_._v(" "),v("p",[_._v("10、在线设置 复制的过滤规则不再需要重启MySQL，只需要停止SQLthread，修改完成以后，启动SQLthread。")]),_._v(" "),v("p",[_._v("11、innodb_buffer_pool_size参数是动态的，允许您在不重启服务器的情况下调整缓冲池的大小。")]),_._v(" "),v("p",[_._v("12、Online DDL MySQL 5.7支持重命名索引和修改varchar的大小，这两项操作在之前的版本中，都需要重建索引或表。")]),_._v(" "),v("p",[_._v("13、在线开启GTID，在之前的版本中，由于不支持在线开启GTID，用户如果希望将低版本的数据库升级到支持GTID的数据库版本，需要先关闭数据库，再以GTID模式启动，所以导致升级起来特别麻烦。")]),_._v(" "),v("p",[_._v("14、支持多线程来刷新缓冲池中的**脏页面，**内存数据页跟磁盘上数据页内容不一致，将内存页称为脏页。")]),_._v(" "),v("p",[_._v("15、InnoDB支持使用spatial索引来索引空间数据类型。")]),_._v(" "),v("p",[_._v("16、默认行格式由compact改为DYNAMIC。")]),_._v(" "),v("p",[_._v("17、允许在某个时间点，有多个触发事件。之前：对于触发器事件(INSERT、UPDATE、DELETE)和操作时间(BEFORE、AFTER)的组合，一个表最多只能有一个触发器，即在某个触发时间点只能有一个触发事件。")]),_._v(" "),v("p",[_._v("18、可将多个服务器的内容备份到一个服务器。")]),_._v(" "),v("p",[v("strong",[_._v("（2）5.8对比5.7")])]),_._v(" "),v("p",[_._v("1、新的系统字典表，整合了存储有关数据库对象信息的事务数据字典，所有的元数据都用InnoDB引擎进行存储。")]),_._v(" "),v("p",[_._v("2、安全和用户管理，新增caching_sha2_password认证插件，并且是默认的身份认证插件。性能和安全方面加强权限支持role，新增密码历史记录功能，限制重复使用以前的密码。")]),_._v(" "),v("p",[_._v("3、innodb 增强")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("a、新增INFORMATION_SCHEMA.INNODB_CACHED_INDEXES，查看每个索引缓存在InnoDB缓冲池中的索引页数。\nb、InnoDB临时表都将在共享临时表空间ibtmp1中创建。\nc、对于SELECT … FOR SHARE和SELECT … FOR UPDATE语句，InnoDB支持NOWAIT和SKIP LOCKED innodb_undo_tablespaces的最小值为2，并且不再允许将innodb_undo_tablespaces设置为0。最小值2确保回滚段始终在撤消表空间中创建，而不是在系统表空间中创建\n支持 ALTER TABLESPACE … RENAME TO 语法。\nd、新增INFORMATION_SCHEMA.INNODB_TABLESPACES_BRIEF视图。\ne、新增了动态配置项 innodb_deadlock_detect，用来禁用死锁检查，因为在高并发系统中，当大量线程等待同一个锁时，死锁检查会大大拖慢数据库。\nf、支持使用innodb_directories选项在服务器脱机时将表空间文件移动或恢复到新位置。\ng、新增innodb_dedicated_server，让InnoDB根据服务器上检测到的内存量自动配置innodb_buffer_pool_size，innodb_log_file_size，innodb_flush_method。当innodb_dedicated_server启用时，InnoDB根据服务器上检测到的内存量自动配置以下选项：innodb_dedicated_server：自动配置缓冲池大小；innodb_log_file_size：自动配置的日志文件大小；innodb_flush_method：O_DIRECT_NO_FSYNC。\nh、MySQL 8.0更好支持文档型数据库和JSON。\ni、不可见索引，开始支持invisible index，在优化SQL的过程中可以设置索引为不可见，优化器不会利用不可见索引。\nj、支持降序索引，可以对索引定义 DESC，之前，索引可以被反序扫描，但影响性能，而降序索引就可以高效的完成支持RANK(), LAG()、NTILE()等函数。\nk、正则表达式增强，提供了REGEXP_LIKE()，EGEXP_INSTR(), REGEXP_REPLACE(), REGEXP_SUBSTR()等函数。\nl、新增备份锁，允许在线备份期间的DML，同时防止可能导致快照不一致的操作。 备份锁由LOCK INSTANCE FOR BACKUP和UNLOCK INSTANCE语法支持\nm、默认字符集由latin1变为utf8mb4。\n")])])]),v("p",[_._v("4、配置文件增强")]),_._v(" "),v("p",[_._v("MySQL 8.0版本支持在线修改全局参数持久化，通过加上PERSIST关键字，可以将调整持久化到新的配置文件中，再次重启db还可以应用到最新的参数。对于加上 PERSIST 关键字修改参数命令，MySQL系统会生成一个包含json格式数据的 mysqld-auto.cnf 文件，比如执行：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("set PERSIST binlog_expire_logs_seconds = 604800 ; #内存和json文件都修改，重启还生效\nset GLOBAL binlog_expire_logs_seconds = 604800 ; #只修改内存，重启丢失\n")])])]),v("p",[_._v("系统会在数据目录下生成一个包含如下内容的 mysqld-auto.cnf 的文件：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v('{ “mysql_server”: {" binlog_expire_logs_seconds ": “604800” } }\n')])])]),v("p",[_._v("当 my.cnf 和 mysqld-auto.cnf 同时存在时，后者具有高优先级。")]),_._v(" "),v("p",[_._v("5、InnoDB性能提升")]),_._v(" "),v("p",[_._v("废除buffer pool mutex, 将原来一个mutex拆分成多个，提高并发拆分LOCK_thd_list 和 LOCK_thd_remove 这两个mutex，大约可提高线程链接效率5%。")]),_._v(" "),v("p",[_._v("6、行缓存")]),_._v(" "),v("p",[_._v("MySQL8.0的优化器可以估算将要读取的行数，因此可以提供给存储引擎一个合适大小的row buffer来存储需要的数据。大批量的连续数据扫描的性能将受益于更大的record buffer。")]),_._v(" "),v("p",[_._v("7、改进扫描性能")]),_._v(" "),v("p",[_._v("改进InnoDB范围查询的性能，可提升全表查询和范围查询 5-20%的性能。")]),_._v(" "),v("p",[_._v("8、优化器增强，支持隐藏索引。")])])}),[],!1,null,null,null);n.default=s.exports}}]);