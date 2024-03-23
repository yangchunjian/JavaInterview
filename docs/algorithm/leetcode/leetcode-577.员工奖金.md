---
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

表：Employee

    +-------------+---------+
    | Column Name | Type    |
    +-------------+---------+
    | empId       | int     |
    | name        | varchar |
    | supervisor  | int     |
    | salary      | int     |
    +-------------+---------+
    empId 是该表中具有唯一值的列。
    该表的每一行都表示员工的姓名和 id，以及他们的工资和经理的 id。


表：Bonus

    +-------------+------+
    | Column Name | Type |
    +-------------+------+
    | empId       | int  |
    | bonus       | int  |
    +-------------+------+
    empId 是该表具有唯一值的列。
    empId 是 Employee 表中 empId 的外键(reference 列)。
    该表的每一行都包含一个员工的 id 和他们各自的奖金。


编写解决方案，报告每个奖金 少于 1000 的员工的姓名和奖金数额。

以 任意顺序 返回结果表。

结果格式如下所示。



示例 1：

    输入：
    Employee table:
    +-------+--------+------------+--------+
    | empId | name   | supervisor | salary |
    +-------+--------+------------+--------+
    | 3     | Brad   | null       | 4000   |
    | 1     | John   | 3          | 1000   |
    | 2     | Dan    | 3          | 2000   |
    | 4     | Thomas | 3          | 4000   |
    +-------+--------+------------+--------+
    Bonus table:
    +-------+-------+
    | empId | bonus |
    +-------+-------+
    | 2     | 500   |
    | 4     | 2000  |
    +-------+-------+
    输出：
    +------+-------+
    | name | bonus |
    +------+-------+
    | Brad | null  |
    | John | null  |
    | Dan  | 500   |
    +------+-------+


## 思路

左链接

## 解法
```sql

# Write your MySQL query statement below

        select e.name,b.bonus from Employee e
        left join Bonus b on e.empId = b.empId
        where b.bonus <1000 or b.bonus is null;

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
