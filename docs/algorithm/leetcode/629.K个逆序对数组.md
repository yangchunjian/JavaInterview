---
title: K个逆序对数组
date: 2022-09-17 20:18:18
permalink: /pages/2c8235/
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

给出两个整数 n 和 k，找出所有包含从 1 到 n 的数字，且恰好拥有 k 个逆序对的不同的数组的个数。

逆序对的定义如下：对于数组的第i个和第 j个元素，如果满i < j且 a[i] > a[j]，则其为一个逆序对；否则不是。

由于答案可能很大，只需要返回 答案 mod 109 + 7 的值。

示例 1:

    输入: n = 3, k = 0
    输出: 1
    解释: 
    只有数组 [1,2,3] 包含了从1到3的整数并且正好拥有 0 个逆序对。
示例 2:

    输入: n = 3, k = 1
    输出: 2
    解释: 
    数组 [1,3,2] 和 [2,1,3] 都有 1 个逆序对。
说明:

-  n 的范围是 [1, 1000] 并且 k 的范围是 [0, 1000]。


## 思路

    int[][] dp = new int[n+1][k+1];
    dp[i][j] 表示1到i恰好拥有j个逆序对的方案数， 转移的时候根据最后一个数的不同位置划分为i个子集进行转移

## 解法
```java

class Solution {

    private final int MOD = (int) 1e9 + 7;

    public int kInversePairs(int n, int k) {
        // dp[i][j] 表示1到i恰好拥有j个逆序对的方案数， 转移的时候根据最后一个数的不同位置划分为i个子集进行转移
        // 但是要注意直接暴力枚举位置的话复杂度o(n^3)会超时，所以得优化一下
        long[][] dp = new long[n + 1][k + 1];
        dp[0][0] = 1;

        for (int i = 1; i <= n; i++) {
            long sum = 0;
            for (int j = 0; j <= k; j++) {
                sum += dp[i - 1][j];
                if (j + 1 > i) sum -= dp[i - 1][j - i];
                dp[i][j] = (dp[i][j] + sum) % MOD;
            }
        }
        return (int) (dp[n][k] % MOD);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
