---
title: 至少有5名直接下属的经理
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
date: 2023-07-16 18:36:45
permalink: /pages/71fc4b/
---

## 题目


表: Employee

    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | id          | int     |
    | name        | varchar |
    | department  | varchar |
    | managerId   | int     |
    +-------------+---------+
    id 是此表的主键（具有唯一值的列）。
    该表的每一行表示雇员的名字、他们的部门和他们的经理的id。
    如果managerId为空，则该员工没有经理。
    没有员工会成为自己的管理者。


编写一个解决方案，找出至少有五个直接下属的经理。

以 任意顺序 返回结果表。

查询结果格式如下所示。



示例 1:

输入:

Employee 表:

    +-----+-------+------------+-----------+
    | id  | name  | department | managerId |
    +-----+-------+------------+-----------+
    | 101 | John  | A          | Null      |
    | 102 | Dan   | A          | 101       |
    | 103 | James | A          | 101       |
    | 104 | Amy   | A          | 101       |
    | 105 | Anne  | A          | 101       |
    | 106 | Ron   | B          | 101       |
    +-----+-------+------------+-----------+
输出:

    +------+
    | name |
    +------+
    | John |
    +------+

## 思路

in子查询

## 解法
```sql

# Write your MySQL query statement below

        select name
        from Employee
        where id in (select managerId
        from Employee
        group by managerId
        having count(*)>=5);
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
