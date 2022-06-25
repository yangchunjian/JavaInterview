---
title: 整数拆分4
date: 2022-06-23 19:52:55
permalink: /pages/4476f3/
editLink: true
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

给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

返回 你可以获得的最大乘积 。

 

示例 1:

    输入: n = 2
    输出: 1
    解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

    输入: n = 10
    输出: 36
    解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
 

提示:

    2 <= n <= 58



## 思路

dp数组

## 解法
```java

class Solution {
    public int integerBreak(int n) {
        if(n == 2) return 1;
        if(n == 3) return 2;
        int[] dp = new int[n+1];
        Arrays.fill(dp, 1);
        for(int i = 1;i<n+1;++i){
            for(int j = i;j<n+1;++j){
                dp[j] = Math.max(dp[j], dp[j-i]*i);
            }
        }
        return dp[n];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
