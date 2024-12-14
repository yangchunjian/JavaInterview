(window.webpackJsonp=window.webpackJsonp||[]).push([[1009],{2193:function(v,_,l){"use strict";l.r(_);var i=l(12),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"解答"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[v._v("#")]),v._v(" 解答")]),v._v(" "),l("h2",{attrs:{id:"一、介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[v._v("#")]),v._v(" 一、介绍")]),v._v(" "),l("hr"),v._v(" "),l("p",[v._v("遗留问题")]),v._v(" "),l("p",[v._v("1、配额确定：目前无配额，可能没有申请过工单，问下奎龙是否申请过")]),v._v(" "),l("p",[v._v("2、mysql主库迁移成两地三中心：只要有一些配额就可以了")]),v._v(" "),l("p",[v._v("3、基于az演练：当前服务稍作改动（消息通知目前单机房）即可做到AZ故障的隔离。Hubble核心服务AZ梳理")]),v._v(" "),l("p",[v._v("基于AZ的演练：主要对现有的服务进行演练")]),v._v(" "),l("p",[v._v("4、故障隔离分解：任务拆分与计划")]),v._v(" "),l("p",[v._v("5、演练结果展示：衡量故障演练的隔离效果指标梳理")]),v._v(" "),l("hr"),v._v(" "),l("p",[l("strong",[v._v("演练目标")])]),v._v(" "),l("p",[v._v("故障演练主要演练如下几个目标：")]),v._v(" "),l("p",[v._v("1、数据库：Mysql，Redis，ElasticSearch")]),v._v(" "),l("p",[v._v("2、中间件：RocketMQ，Kafka，Zookeeper，ActiveMQ")]),v._v(" "),l("p",[v._v("3、K8S：Pod，容器，补充：单Node，某个AZ的所有Node演练（这种场景可能无法满足，因为node不是我们独占的），某个AZ的所有Pod的监听端口的网络延迟（目前应该是支持的）")]),v._v(" "),l("p",[v._v("4、服务器：进程，资源负载（CPU，磁盘IO，网络，内存），补充：某个AZ的所有虚机关机（问题应该不大），某个AZ的所有虚机监听端口的网络延迟（应该会有问题，比如judge所在AZ网络延迟，可能会造成transfer内存增加或者丢数据）")]),v._v(" "),l("p",[l("strong",[v._v("演练步骤")])]),v._v(" "),l("p",[v._v("测试环境演练")]),v._v(" "),l("p",[v._v("1、测试环境准备：针对每个演练目标需要提供可测试的环境，如Mysql测试库，Redis测试库")]),v._v(" "),l("p",[v._v("2、测试环境演练：通过小鹿乱撞对测试环境进行所有目标的演练（注意：由于测试环境部署没有HA保障，所以主要进行延时演练，服务宕机演练）")]),v._v(" "),l("p",[v._v("3、基于测试环境演练暴露出的问题对项目进行加固")]),v._v(" "),l("p",[v._v("4、测试环境循环演练：基于2,3两步继续演练，直至测试环境演练无任何问题")]),v._v(" "),l("p",[l("strong",[v._v("线上环境演练")])]),v._v(" "),l("p",[v._v("5、线上环境演练：在测试环境演练通过后进行真实线上环境故障注入处理")]),v._v(" "),l("h2",{attrs:{id:"二、演练故障类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#二、演练故障类型"}},[v._v("#")]),v._v(" 二、演练故障类型")]),v._v(" "),l("p",[v._v("目标：Q3完成优先级高的目标对象的演练")]),v._v(" "),l("p",[v._v("Mysql（优先级：高）")]),v._v(" "),l("p",[v._v("MySQL主库单机故障(服务端)（Q3）")]),v._v(" "),l("ul",[l("li",[v._v("读写切换演练：是否能快速顺利的将读库切换为写库；可通过ping域名验证")]),v._v(" "),l("li",[v._v("瞬时故障演练：切换过程中是否有影响；切换过程10~60秒之间，这个间隙对程序是否产生严重的影响")]),v._v(" "),l("li",[v._v("性能演练：读库切换为写库后，仍然会承担读库的职能（所以读库自身也要保障稳定性，要重视），所以会导致切换为写库的机器压力变大，目前只能人工处理。")]),v._v(" "),l("li",[v._v("注意事项：\n"),l("ul",[l("li",[v._v("切换规则：读写切换规则优先选同机房从库, 再选同地域从库，最后选跨地域从库（尽量选择同机房或同地域切换，跨地域切换会增加时延）")]),v._v(" "),l("li",[v._v("选择某个slave作为Master后，Master同时还承担了读库的角色，需要联系DBA人工的把域名切走")]),v._v(" "),l("li",[v._v("核心数据库至少需要保障有两个读库，避免最终单点的情况")])])]),v._v(" "),l("li",[v._v("潜在影响：\n"),l("ul",[l("li",[v._v("切换间隙的读写失败")]),v._v(" "),l("li",[v._v("延迟增大：读库被切为主库后由于还承担读库功能，所以压力变大，导致延迟大")])])]),v._v(" "),l("li",[v._v("MySQL从库单机故障(服务端)（Q3）")]),v._v(" "),l("li",[v._v("切换规则：\n"),l("ul",[l("li",[v._v("如果有多个读实例，则解绑当前实例即可")]),v._v(" "),l("li",[v._v("如果读库是单实例，则会将读域名绑定到主库上（尽量避免这种情况发生，mc需要调整）")])])]),v._v(" "),l("li",[v._v("演练内容：\n"),l("ul",[l("li",[v._v("切换到了写库")]),v._v(" "),l("li",[v._v("读库是否被解绑")])])]),v._v(" "),l("li",[v._v("潜在影响：\n"),l("ul",[l("li",[v._v("切换间隙的读写失败")]),v._v(" "),l("li",[v._v("延迟增大\n"),l("ul",[l("li",[v._v("解绑读库：读库实例减少，导致整体读库压力增大")]),v._v(" "),l("li",[v._v("主库承担读库功能，导致延迟增大")])])])])]),v._v(" "),l("li",[v._v("MySQL机房故障(服务端)（Q3）")]),v._v(" "),l("li",[v._v("演练内容：\n"),l("ul",[l("li",[v._v("主库机房故障：切换到读库")]),v._v(" "),l("li",[v._v("从库机房故障：解绑实例，或绑定到主库")]),v._v(" "),l("li",[v._v("演练前提条件：非同机房部署，至少是同地域")])])]),v._v(" "),l("li",[v._v("潜在影响\n"),l("ul",[l("li",[v._v("切换间隙的读写失败")]),v._v(" "),l("li",[v._v("延迟增大：读库被切为主库后由于还承担读库功能，所以压力变大，导致延迟大")])])]),v._v(" "),l("li",[v._v("访问MySQL网络延迟(客户端)（Q3）（最优先解决）\n"),l("ul",[l("li",[v._v("超时演练：查询或插入Mysql多次超时对系统的影响")]),v._v(" "),l("li",[v._v("熔断演练：当出现多次超时时是否会进行熔断处理，避免雪崩效应")])])]),v._v(" "),l("li",[v._v("访问MySQL网络丢包(客户端)\n"),l("ul",[l("li",[v._v("演练内容：Mysql查询或写入，响应数据异常，即接口调用出错，对自身服务是否有影响")])])])]),v._v(" "),l("p",[l("strong",[v._v("Redis（优先级：高）")])]),v._v(" "),l("ul",[l("li",[v._v("Redis主库单机故障(服务端)（Q3）\n"),l("ul",[l("li",[v._v("HA_Slave是否能正常切换为Master")]),v._v(" "),l("li",[v._v("潜在影响：切换间隙的写失败")])])]),v._v(" "),l("li",[v._v("Redis从库单机故障(服务端)（Q3）\n"),l("ul",[l("li",[v._v("切换规则：读库若多实例会解绑，若单实例则不进行操作")]),v._v(" "),l("li",[v._v("措施：保障读库高可用，至少需要两个读实例，最好不要在同机房。参考：Redis高可用")]),v._v(" "),l("li",[v._v("潜在影响：暂无影响，若存在连接读库的情况，观察是否读存在延迟")])])]),v._v(" "),l("li",[v._v("Redis主库机房故障(服务端)（Q3）\n"),l("ul",[l("li",[v._v("切换规则：目前Master与HA_Slave同机房，会将读库切为主库")]),v._v(" "),l("li",[v._v("潜在影响：1、切换间隙的写失败；2、读库切为主库的时候压力明显增加导致读写延迟。")])])]),v._v(" "),l("li",[v._v("Redis从库机房故障(服务端)（Q3）\n"),l("ul",[l("li",[v._v("目前看hubble主要使用的redis库的读库是同机房的，如果读库机房故障，则读库完全不可用")]),v._v(" "),l("li",[v._v("解决：读库增加一个非同机房实例")]),v._v(" "),l("li",[v._v("潜在影响：由于未使用读库，因此暂无影响，若存在连接读库的情况则会导致读失败。")])])]),v._v(" "),l("li",[v._v("访问Redis网络延迟(客户端)（Q3）\n"),l("ul",[l("li",[v._v("超时演练：查询或插入Redis多次超时对系统的影响")]),v._v(" "),l("li",[v._v("熔断演练：当出现多次超时时是否会进行熔断处理，避免雪崩效应")])])]),v._v(" "),l("li",[v._v("访问Redis网络丢包(客户端)")])]),v._v(" "),l("p",[l("strong",[v._v("RocketMQ（优先级：高）")])]),v._v(" "),l("ul",[l("li",[v._v("RocketMQ单机故障(服务端)（Q3）")]),v._v(" "),l("li",[v._v("Master故障：假设M1，M2两台，M1故障\n"),l("ul",[l("li",[v._v("写数据会切到另一个M2，如果M1上数据没有消费完，会继续从M1-Slave读数据，直至读完")]),v._v(" "),l("li",[v._v("M1故障会暂时下线，M1-Slave在消费完成后也不提供服务，等待RocketMq手动处理故障")]),v._v(" "),l("li",[v._v("注意事项：我们的RocketMQ是异步复制模式，因此可能丢失部分未复制到slave的消息")])])]),v._v(" "),l("li",[v._v("Slave故障：\n"),l("ul",[l("li",[v._v("理论上对业务无影响，因为RocketMQ读取数据是从Master读数据的，只有压力很大可能才从写库读数据")]),v._v(" "),l("li",[v._v("Slave故障后也是人工去恢复")]),v._v(" "),l("li",[v._v("注意事项：slave宕机期间生产端生产消息后返回SLAVE_NOT_AVAILABLE，正常情况返回SEND_OK，业务需注意将SLAVA_NOT_AVAILABLE等同SEND_OK处理")])])]),v._v(" "),l("li",[v._v("机房故障\n"),l("ul",[l("li",[v._v("Master机房：RocketMQ部署方式是M1，M2不在同一个机房，因此机房故障理论上也是不影响的")]),v._v(" "),l("li",[v._v("小鹿乱撞暂未提供基于机房故障的演练")])])]),v._v(" "),l("li",[v._v("RocketMQ单机故障实验恢复(服务端)\n"),l("ul",[l("li",[v._v("即恢复被Kill的进程")]),v._v(" "),l("li",[v._v("注意：RocketMQ模拟单机故障后不会自动恢复，需要人工恢复处理")])])]),v._v(" "),l("li",[v._v("访问RMQ网络延迟(客户端)（Q3）\n"),l("ul",[l("li",[v._v("Pull：Pull端对进程本身无影响，只是拉取不到数据处于等待状态而已")]),v._v(" "),l("li",[v._v("Push：需要注意推送失败场景，主要释放是Alarm组件，消息通知\n"),l("ul",[l("li",[v._v("push需要有超时机制，超时后需要临时直接调用接口或其它MQ")]),v._v(" "),l("li",[v._v("多次超时需要有熔断机制，避免雪崩效应")])])])])]),v._v(" "),l("li",[v._v("访问RMQ网络丢包(客户端)\n"),l("ul",[l("li",[v._v("表象是客户端直接报错，报错后需要使用备案，如直接调用接口方式")]),v._v(" "),l("li",[v._v("多次失败需要提供熔断机制，避免雪崩效应")])])])]),v._v(" "),l("p",[l("strong",[v._v("Kafka（优先级：高）")])]),v._v(" "),l("ul",[l("li",[v._v("Kafka单机故障(服务端)\n"),l("ul",[l("li",[v._v("目前小鹿乱撞暂不支持")])])]),v._v(" "),l("li",[v._v("机房故障\n"),l("ul",[l("li",[v._v("目前小鹿乱撞暂不支持")])])]),v._v(" "),l("li",[v._v("访问Kafka网络延迟(客户端)（Q3）\n"),l("ul",[l("li",[v._v("Pull：Pull端对进程本身无影响，只是拉取不到数据处于等待状态而已")]),v._v(" "),l("li",[v._v("Push：需要注意推送失败场景，可能造成本地数据积压，如平台的transfer，hubble-mansger的transfer，调整队列长度\n"),l("ul",[l("li",[v._v("push需要有超时机制，超时后按需选择重试还是丢弃数据")]),v._v(" "),l("li",[v._v("多次超时需要有熔断机制，避免雪崩效应")])])])])]),v._v(" "),l("li",[v._v("访问Kafka网络丢包(客户端)")]),v._v(" "),l("li",[v._v("表象是客户端直接报错")])]),v._v(" "),l("p",[l("strong",[v._v("服务器（优先级：高）")])]),v._v(" "),l("ul",[l("li",[v._v("进程演练")]),v._v(" "),l("li",[v._v("杀死进程（Q3）：这种一般可以避免，方便演练（测试服务集群）\n"),l("ul",[l("li",[v._v("进程暂停（待定）：即挂起或阻塞，进程不再执行任何任务。主要模拟程序 Hang 时，系统的容错能力。")]),v._v(" "),l("li",[v._v("服务器启停")])])]),v._v(" "),l("li",[v._v("机器启停（Q3）")]),v._v(" "),l("li",[v._v("机器硬重启（Q3）\n"),l("ul",[l("li",[v._v("服务器负载演练")])])]),v._v(" "),l("li",[v._v("CPU满载实验（Q3）\n"),l("ul",[l("li",[v._v("原理：模拟CPU负载高的情况，模拟效果是模拟进程与其它进程总共占用到的CPU")]),v._v(" "),l("li",[v._v("目的：部分节点CPU高负载的情况下，服务的稳定性")])])]),v._v(" "),l("li",[v._v("磁盘读写IO负载实验（Q3）\n"),l("ul",[l("li",[v._v("原理：模拟读写IO高负载的情况")]),v._v(" "),l("li",[v._v("目的：部分节点IO负载高，对服务稳定性的影响")])])]),v._v(" "),l("li",[v._v("磁盘填充混沌实验（Q3）\n"),l("ul",[l("li",[v._v("原理：模拟磁盘填充，可以指定填充的目录和填充大小。")]),v._v(" "),l("li",[v._v("目的：部分节点磁盘满，数据无法写入，对服务稳定性的影响")])])]),v._v(" "),l("li",[v._v("内存占用实验（Q3）\n"),l("ul",[l("li",[v._v("原理：指定内存占用。注意，此场景触发内存占用满，可能导致无法恢复，需要人工去恢复故障，如重启！推荐指定内存百分比！")]),v._v(" "),l("li",[v._v("目的：内存占用满对服务稳定性的影响")])])]),v._v(" "),l("li",[v._v("负载演练解决方案\n"),l("ul",[l("li",[v._v("调度算法修改，目前一般是rr，即轮询。建议修改为wlc，即加权最小连接数调度")])])])]),v._v(" "),l("p",[l("strong",[v._v("K8S")])]),v._v(" "),l("p",[l("strong",[v._v("Pod")])]),v._v(" "),l("ul",[l("li",[v._v("杀死pod（Q3）\n"),l("ul",[l("li",[v._v("验证服务是否受影响")]),v._v(" "),l("li",[v._v("验证pod是否会重新启动")])])]),v._v(" "),l("li",[v._v("Pod网络延迟（Q3）\n"),l("ul",[l("li",[v._v("访问外部出现延迟：即当依赖的服务出问题，对本pod是否造成影响")]),v._v(" "),l("li",[v._v("外部访问此pod出现延迟：及当本pod出现问题，是否会级联影响调用此pod的服务")])])]),v._v(" "),l("li",[v._v("Pod网络丢包（Q3）\n"),l("ul",[l("li",[v._v("验证网络问题对服务的影响")])])]),v._v(" "),l("li",[v._v("容器\n"),l("ul",[l("li",[v._v("容器内CPU负载：容器CPU负载演练")]),v._v(" "),l("li",[v._v("Kill容器内指定进程")]),v._v(" "),l("li",[v._v("挂起容器内指定进程")])])])]),v._v(" "),l("hr"),v._v(" "),l("p",[v._v("ElasticSearch（优先级：中）")]),v._v(" "),l("ul",[l("li",[v._v("访问es网络延迟(客户端)")]),v._v(" "),l("li",[v._v("访问es网络丢包(客户端)")])]),v._v(" "),l("hr"),v._v(" "),l("p",[v._v("Zookeeper（优先级：低）")]),v._v(" "),l("ul",[l("li",[v._v("Zookeeper单节点故障(服务端)")]),v._v(" "),l("li",[v._v("Zookeeper单节点故障后恢复(服务端)")]),v._v(" "),l("li",[v._v("访问ZK网络延迟(客户端)")])])])}),[],!1,null,null,null);_.default=e.exports}}]);