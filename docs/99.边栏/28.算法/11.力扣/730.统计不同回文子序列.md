---
title: 统计不同回文子序列
date: 2022-10-05 16:57:20
permalink: /pages/5df687/
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

给定一个字符串 s，返回 s 中不同的非空「回文子序列」个数 。

通过从 s 中删除 0 个或多个字符来获得子序列。

如果一个字符序列与它反转后的字符序列一致，那么它是「回文字符序列」。

如果有某个 i , 满足 ai != bi ，则两个序列 a1, a2, ... 和 b1, b2, ... 不同。

注意：

- 结果可能很大，你需要对 10<sup>9</sup> + 7 取模 。

示例 1：

    输入：s = 'bccb'
    输出：6
    解释：6 个不同的非空回文子字符序列分别为：'b', 'c', 'bb', 'cc', 'bcb', 'bccb'。
    注意：'bcb' 虽然出现两次但仅计数一次。
示例 2：

    输入：s = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
    输出：104860361
    解释：共有 3104860382 个不同的非空回文子序列，104860361 对 109 + 7 取模后的值。
 

提示：

- 1 <= s.length <= 1000
- s[i] 仅包含 'a', 'b', 'c' 或 'd' 

## 思路

dp数组

## 解法
```java

class Solution {
    public int countPalindromicSubsequences(String s) {

        int mod = 1_000_000_000 + 7;
        int n = s.length();
        long[][] dp = new long[n][n];

        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (i == j) {
                    dp[i][j] = 1;
                    continue;
                }
                if (s.charAt(i) != s.charAt(j)) {
                    dp[i][j] = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1];
                } else {
                    char c = s.charAt(i);
                    int left = i + 1;
                    int right = j - 1;
                    while (left < j && s.charAt(left) != c) {
                        left++;
                    }
                    while (right > i && s.charAt(right) != c) {
                        right--;
                    }
                    if (left == j) {
                        //i - j 之间没有c  2 是c 和cc   乘2是cc和 i + 1 到 j-1又可以形成新的回文子序列
                        dp[i][j] = 2 * dp[i + 1][j - 1] + 2;
                    } else if (left == right) {
                        //出现了一个c
                        dp[i][j] = 2 * dp[i + 1][j - 1] + 1;//c已经出现过
                    } else {
                        //出现多个c
                        dp[i][j] = dp[i + 1][j - 1] * 2 - dp[left + 1][right - 1];
                    }
                }
                dp[i][j] = (dp[i][j] + mod) % mod;
            }
        }
        // //Because (a - b) % M = (a % M - b % M) + M when a % M - b % M < 0
        return (int)dp[0][n - 1];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
