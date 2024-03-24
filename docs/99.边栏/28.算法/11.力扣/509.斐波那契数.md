---
title: 斐波那契数
date: 2022-09-13 19:07:39
permalink: /pages/4a951b/
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

斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

    F(0) = 0，F(1) = 1
    F(n) = F(n - 1) + F(n - 2)，其中 n > 1
    给定 n ，请计算 F(n) 。

 

示例 1：

    输入：n = 2
    输出：1
    解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：

    输入：n = 3
    输出：2
    解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：

    输入：n = 4
    输出：3
    解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 

提示：

- 0 <= n <= 30



## 思路

递归

## 解法
```java

class Solution {
    public int fib(int N) {

        if (N < 2) return N;
        return fib(N - 1) + fib(N - 2);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
