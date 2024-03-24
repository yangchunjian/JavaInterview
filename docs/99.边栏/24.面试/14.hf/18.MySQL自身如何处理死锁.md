---
title: MySQL自身如何处理死锁
date: 2022-09-09 08:48:56
permalink: /pages/9d4a8e/
categories:
  - interview
  - hf
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---


## 解答

MySQL有两种死锁处理方式：

- 等待，直到超时（innodb_lock_wait_timeout=50s设置锁等待的时间，前提已经检测到锁的产生）。

- 发起死锁检测，主动回滚一条事务，让其他事务继续执行，回滚代价最小的那一个事务（innodb_deadlock_detect=on）。

由于性能原因，一般都是使用**死锁检测**来进行处理死锁。

死锁检测的原理是构建一个以**事务为顶点、锁为边**的有向图，判断有向图是否存在环，存在即有死锁。

检测到死锁之后，**选择插入、更新或者删除的行数最少的事务回滚**，

基于 `INFORMATION_SCHEMA.INNODB_TRX` 表中的 `trx_weight` 字段来判断。

