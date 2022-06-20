---
title: 最接近的因数
date: 2022-06-20 23:29:58
permalink: /pages/b3c819/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 题目
给你一个整数 num，请你找出同时满足下面全部要求的两个整数：

    两数乘积等于  num + 1 或 num + 2
    以绝对差进行度量，两数大小最接近

你可以按任意顺序返回这两个整数。

 

示例 1：

    输入：num = 8
    输出：[3,3]
    解释：对于 num + 1 = 9，最接近的两个因数是 3 & 3；对于 num + 2 = 10, 最接近的两个因数是 2 & 5，因此返回 3 & 3 。
示例 2：

    输入：num = 123
    输出：[5,25]
示例 3：

    输入：num = 999
    输出：[40,25]


## 思路

    Math.sqrt

## 解法
```java

class Solution {
    public int[] closestDivisors(int num) {

        int divisor = num == 1 ? num + 1 : num + 2;
        int i = (int) Math.sqrt(divisor);
        while (divisor % i > 1) {
            i--;
        }
        return new int[]{i, divisor / i};
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
