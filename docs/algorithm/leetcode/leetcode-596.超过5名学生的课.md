---
title: 超过5名学生的课
date: 2022-09-19 23:18:18
permalink: /pages/6bc6d9/
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

表: Courses

    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | student     | varchar |
    | class       | varchar |
    +-------------+---------+
    (student, class)是该表的主键列。
    该表的每一行表示学生的名字和他们注册的班级。
 

编写一个SQL查询来报告 至少有5个学生 的所有班级。

以 任意顺序 返回结果表。

查询结果格式如下所示。

 

示例 1:

    输入: 
    Courses table:
    +---------+----------+
    | student | class    |
    +---------+----------+
    | A       | Math     |
    | B       | English  |
    | C       | Math     |
    | D       | Biology  |
    | E       | Math     |
    | F       | Computer |
    | G       | Math     |
    | H       | Math     |
    | I       | Math     |
    +---------+----------+
    输出: 
    +---------+ 
    | class   | 
    +---------+ 
    | Math    | 
    +---------+
    解释: 
    -数学课有6个学生，所以我们包括它。
    -英语课有1名学生，所以我们不包括它。
    -生物课有1名学生，所以我们不包括它。
    -计算机课有1个学生，所以我们不包括它。


## 思路

    group by class having count(distinct(student)) >= 5

## 解法
```java

# Write your MySQL query statement below

select class from courses group by class having count(distinct(student)) >= 5

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
