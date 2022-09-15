---
title: 两个字符串的删除操作
date: 2022-09-15 23:52:39
permalink: /pages/77673c/
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

给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

每步 可以删除任意一个字符串中的一个字符。

 

示例 1：

    输入: word1 = "sea", word2 = "eat"
    输出: 2
    解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"
示例  2:

    输入：word1 = "leetcode", word2 = "etco"
    输出：4
 

提示：

- 1 <= word1.length, word2.length <= 500
- word1 和 word2 只包含小写英文字母



## 思路

转化为求两个字符串最大公共子序列的问题

## 解法
```java

class Solution {
    // 转化为求两个字符串最大公共子序列的问题
    public int minDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();

        //dp[i][j]表示word1[0...i - 1]与word2[0...j-1]的最大公共子序列长度
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return m + n - 2 * dp[m][n];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
