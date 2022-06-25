---
title: 完全平方数
date: 2022-05-25 22:47:56
permalink: /pages/df2ee3/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---


## 题目
给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。

 

示例 1：

    输入：n = 12
    输出：3 
    解释：12 = 4 + 4 + 4
示例 2：

    输入：n = 13
    输出：2
    解释：13 = 4 + 9
 
提示：

- 1 <= n <= 10<sup>4</sup>


## 思路

物品，背包问题


## 解法
```java

class Solution {
    
    // 先遍历物品, 再遍历背包
    public int numSquares(int n) {
        int max = Integer.MAX_VALUE;
        int[] dp = new int[n + 1];
        //初始化
        for (int j = 0; j <= n; j++) {
            dp[j] = max;
        }
        //当和为0时，组合的个数为0
        dp[0] = 0;
        // 遍历物品
        for (int i = 1; i * i <= n; i++) {
            // 遍历背包
            for (int j = i * i; j <= n; j++) {
                if (dp[j - i * i] != max) {
                    dp[j] = Math.min(dp[j], dp[j - i * i] + 1);
                }
            }
        }
        return dp[n];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
