---
title: 合作过至少三次的演员和导演
date: 2023-01-03 20:31:45
permalink: /pages/285b16/
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

ActorDirector 表：

    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | actor_id    | int     |
    | director_id | int     |
    | timestamp   | int     |
    +-------------+---------+
    timestamp 是这张表的主键.
 

写一条SQL查询语句获取合作过至少三次的演员和导演的 id 对 (actor_id, director_id)

示例：
    
    ActorDirector 表：
    +-------------+-------------+-------------+
    | actor_id    | director_id | timestamp   |
    +-------------+-------------+-------------+
    | 1           | 1           | 0           |
    | 1           | 1           | 1           |
    | 1           | 1           | 2           |
    | 1           | 2           | 3           |
    | 1           | 2           | 4           |
    | 2           | 1           | 5           |
    | 2           | 1           | 6           |
    +-------------+-------------+-------------+
    
    Result 表：
    +-------------+-------------+
    | actor_id    | director_id |
    +-------------+-------------+
    | 1           | 1           |
    +-------------+-------------+
    唯一的 id 对是 (1, 1)，他们恰好合作了 3 次。

## 思路

group by

## 解法
```java

# Write your MySQL query statement below

select actor_id,director_id
from ActorDirector
group by actor_id, director_id
having count(*)>=3
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
