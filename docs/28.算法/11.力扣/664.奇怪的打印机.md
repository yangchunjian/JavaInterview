---
title: 奇怪的打印机
date: 2022-09-18 23:11:34
permalink: /pages/00da1d/
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

有台奇怪的打印机有以下两个特殊要求：

- 打印机每次只能打印由 同一个字符 组成的序列。
- 每次可以在从起始到结束的任意位置打印新字符，并且会覆盖掉原来已有的字符。

给你一个字符串 s ，你的任务是计算这个打印机打印它需要的最少打印次数。

 
示例 1：

    输入：s = "aaabbb"
    输出：2
    解释：首先打印 "aaa" 然后打印 "bbb"。
示例 2：

    输入：s = "aba"
    输出：2
    解释：首先打印 "aaa" 然后在第二个位置打印 "b" 覆盖掉原来的字符 'a'。
 

提示：

- 1 <= s.length <= 100
- s 由小写英文字母组成


## 思路

int[][] dp = new int[n][n];

## 解法
```java

class Solution {
    public int strangePrinter(String s) {
        
        char[] cs = s.toCharArray();
        int n = cs.length;

        int[][] dp = new int[n][n];

        for (int i = 0; i < n; ++ i) dp[i][i] = 1;
        
        for (int i = n - 2; i >= 0; -- i) {
            for (int j = i + 1; j < n; ++ j) {
                dp[i][j] = dp[i + 1][j] + (cs[i] == cs[j] ? 0 : 1);
                for (int k = i + 1; k < j; ++ k) {
                    if (cs[i] == cs[k]) {
                        dp[i][j] = Math.min(dp[i][j], dp[i + 1][k] + dp[k + 1][j]);
                    }
                }
            }
        }

        return dp[0][n - 1];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
