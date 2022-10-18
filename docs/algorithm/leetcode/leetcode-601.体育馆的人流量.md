---
title: 体育馆的人流量
date: 2022-10-18 17:33:51
permalink: /pages/dc78b8/
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

    表：Stadium
    +---------------+---------+
    | Column Name   | Type    |
    +---------------+---------+
    | id            | int     |
    | visit_date    | date    |
    | people        | int     |
    +---------------+---------+
    visit_date 是表的主键
    每日人流量信息被记录在这三列信息中：序号 (id)、日期 (visit_date)、 人流量 (people)
    每天只有一行记录，日期随着 id 的增加而增加
 

编写一个 SQL 查询以找出每行的人数大于或等于 100 且 id 连续的三行或更多行记录。

返回按 visit_date 升序排列 的结果表。

查询结果格式如下所示。

 

示例 1:

    输入：
    Stadium 表:
    +------+------------+-----------+
    | id   | visit_date | people    |
    +------+------------+-----------+
    | 1    | 2017-01-01 | 10        |
    | 2    | 2017-01-02 | 109       |
    | 3    | 2017-01-03 | 150       |
    | 4    | 2017-01-04 | 99        |
    | 5    | 2017-01-05 | 145       |
    | 6    | 2017-01-06 | 1455      |
    | 7    | 2017-01-07 | 199       |
    | 8    | 2017-01-09 | 188       |
    +------+------------+-----------+
    输出：
    +------+------------+-----------+
    | id   | visit_date | people    |
    +------+------------+-----------+
    | 5    | 2017-01-05 | 145       |
    | 6    | 2017-01-06 | 1455      |
    | 7    | 2017-01-07 | 199       |
    | 8    | 2017-01-09 | 188       |
    +------+------------+-----------+
    解释：
    id 为 5、6、7、8 的四行 id 连续，并且每行都有 >= 100 的人数记录。
    请注意，即使第 7 行和第 8 行的 visit_date 不是连续的，输出也应当包含第 8 行，因为我们只需要考虑 id 连续的记录。
    不输出 id 为 2 和 3 的行，因为至少需要三条 id 连续的记录。


## 思路

利用多表联合查询，分为三种情况顺序


## 解法
```java

# Write your MySQL query statement below

select distinct a.* from stadium a,stadium b,stadium c
where a.people>=100 and b.people>=100 and c.people>=100
and (
     (a.id = b.id-1 and b.id = c.id -1) or
     (a.id = b.id-1 and a.id = c.id +1) or
     (a.id = b.id+1 and b.id = c.id +1)
) order by a.id
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
