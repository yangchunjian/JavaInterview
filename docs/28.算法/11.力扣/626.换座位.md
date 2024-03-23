---
title: 换座位
date: 2022-09-17 20:01:39
permalink: /pages/57f754/
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

表: Seat

    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | id          | int     |
    | name        | varchar |
    +-------------+---------+
    Id是该表的主键列。
    该表的每一行都表示学生的姓名和ID。
    Id是一个连续的增量。
 

编写SQL查询来交换每两个连续的学生的座位号。如果学生的数量是奇数，则最后一个学生的id不交换。

按 id 升序 返回结果表。

查询结果格式如下所示。

 

示例 1:

    输入: 
    Seat 表:
    +----+---------+
    | id | student |
    +----+---------+
    | 1  | Abbot   |
    | 2  | Doris   |
    | 3  | Emerson |
    | 4  | Green   |
    | 5  | Jeames  |
    +----+---------+
    输出: 
    +----+---------+
    | id | student |
    +----+---------+
    | 1  | Doris   |
    | 2  | Abbot   |
    | 3  | Green   |
    | 4  | Emerson |
    | 5  | Jeames  |
    +----+---------+
    解释:
    请注意，如果学生人数为奇数，则不需要更换最后一名学生的座位。


## 思路

CASE    WHEN    THEN 

## 解法
```java

# Write your MySQL query statement below

SELECT (CASE 
            WHEN MOD(id,2) = 1 AND id = (SELECT COUNT(*) FROM seat) THEN id
            WHEN MOD(id,2) = 1 THEN id+1
            ElSE id-1
        END) AS id, student
FROM seat
ORDER BY id;
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
