---
title: 质数排列
date: 2023-02-13 21:44:18
permalink: /pages/04b76f/
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

请你帮忙给从 1 到 n 的数设计排列方案，使得所有的「质数」都应该被放在「质数索引」（索引从 1 开始）上；你需要返回可能的方案总数。

让我们一起来回顾一下「质数」：质数一定是大于 1 的，并且不能用两个小于它的正整数的乘积来表示。

由于答案可能会很大，所以请你返回答案 模 mod 10^9 + 7 之后的结果即可。

 

示例 1：

    输入：n = 5
    输出：12
    解释：举个例子，[1,2,5,4,3] 是一个有效的排列，但 [5,2,3,4,1] 不是，因为在第二种情况里质数 5 被错误地放在索引为 1 的位置上。
示例 2：

    输入：n = 100
    输出：682289015
 

提示：

- 1 <= n <= 100

## 思路

筛选法求质数，剩下排列相乘就行

## 解法
```java

class Solution {
    // 筛选法求质数，剩下排列相乘就行


    public int numPrimeArrangements(int n) {

        boolean[] flag = new boolean[n+1];
        int mod = (int)1e9+7;
        for (int i = 2; i < n+1; i++) {
            if(flag[i])continue;
            for (int j = 2; i*j < n+1; j++) {
                flag[i*j] = true;
            }
        }
        int u = 0;
        for (int i = 2; i < n+1; i++) {
            if(!flag[i])u++;
        }
        long res = 1;
        for (int i = 1; i <= u; i++) {
            res = (res*i)%mod;
        }
        for (int i = 1; i <= n-u; i++) {
            res = (res*i)%mod;
        }
        return (int) res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
