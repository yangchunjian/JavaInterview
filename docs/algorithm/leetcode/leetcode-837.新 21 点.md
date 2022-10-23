---
title: 新 21 点
date: 2022-10-23 19:29:39
permalink: /pages/074b94/
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

爱丽丝参与一个大致基于纸牌游戏 “21点” 规则的游戏，描述如下：

爱丽丝以 0 分开始，并在她的得分少于 k 分时抽取数字。 抽取时，她从 [1, maxPts] 的范围中随机获得一个整数作为分数进行累计，其中 maxPts 是一个整数。 每次抽取都是独立的，其结果具有相同的概率。

当爱丽丝获得 k 分 或更多分 时，她就停止抽取数字。

爱丽丝的分数不超过 n 的概率是多少？

与实际答案误差不超过 10<sup>-5</sup> 的答案将被视为正确答案。

 
示例 1：

    输入：n = 10, k = 1, maxPts = 10
    输出：1.00000
    解释：爱丽丝得到一张牌，然后停止。
示例 2：

    输入：n = 6, k = 1, maxPts = 10
    输出：0.60000
    解释：爱丽丝得到一张牌，然后停止。 在 10 种可能性中的 6 种情况下，她的得分不超过 6 分。
示例 3：

    输入：n = 21, k = 17, maxPts = 10
    输出：0.73278
 

提示：

- 0 <= k <= n <= 10<sup>4</sup>
- 1 <= maxPts <= 10<sup>4</sup>


## 思路

手推会发现状态转移方程是可以继续优化的（其中pre就是前maxp项的和）

## 解法
```java

class Solution {
    public double new21Game(int n, int k, int maxPts) {
        double[] dp = new double[k+1];
        dp[k] = 1.0;double pre = Math.min(n-k+1,maxPts);
        for (int i = k-1; i > -1; i--) {
            dp[i] = pre/(double)maxPts;//手推会发现状态转移方程是可以继续优化的（其中pre就是前maxp项的和）
            pre-=i+maxPts>=k?(i+maxPts>n?0:1):dp[i+maxPts];
            pre+=dp[i];
        }
        return dp[0];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
