---
title: 寻找用户推荐人
date: 2022-09-15 23:56:06
permalink: /pages/846d10/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 题目

给定表 customer ，里面保存了所有客户信息和他们的推荐人。

    +------+------+-----------+
    | id   | name | referee_id|
    +------+------+-----------+
    |    1 | Will |      NULL |
    |    2 | Jane |      NULL |
    |    3 | Alex |         2 |
    |    4 | Bill |      NULL |
    |    5 | Zack |         1 |
    |    6 | Mark |         2 |
    +------+------+-----------+
写一个查询语句，返回一个客户列表，列表中客户的推荐人的编号都 不是 2。

对于上面的示例数据，结果为：

    +------+
    | name |
    +------+
    | Will |
    | Jane |
    | Bill |
    | Zack |
    +------+



## 思路



## 解法
```java

# Write your MySQL query statement below

select name from customer 
where
ifnull(referee_id,0)!=2;

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
