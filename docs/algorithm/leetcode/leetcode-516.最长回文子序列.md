---
title: 最长回文子序列
date: 2022-08-04 22:50:50
permalink: /pages/644339/
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

给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

 

示例 1：

    输入：s = "bbbab"
    输出：4
    解释：一个可能的最长回文子序列为 "bbbb" 。
示例 2：

    输入：s = "cbbd"
    输出：2
    解释：一个可能的最长回文子序列为 "bb" 。
 

提示：

- 1 <= s.length <= 1000
- s 仅由小写英文字母组成


## 思路

        /*
        1.状态定义:dp[i][j]为s[i,j]之间的最长回文子序列长度(j>=i)
        2.状态转移:要求dp[i][j]就考虑s[i]与s[j]
            2.1 若s[i]==s[j] 看中间回文长度可以直接拼接两边->dp[i][j]=dp[i+1][j-1]+2
            2.1 若s[i]!=s[j] 必定要舍弃其中一个字母,看舍弃哪个最后长度会更大->dp[i][j]=max(dp[i+1][j],dp[i][j-1])
        3.初始化:初始化dp[i][i]=1,其他为0
        4.遍历顺序:先i后j,i倒序j正序
        5.返回形式:返回dp[0][len-1]
         */

## 解法
```java

class Solution {
    public int longestPalindromeSubseq(String s) {
        /*
        1.状态定义:dp[i][j]为s[i,j]之间的最长回文子序列长度(j>=i)
        2.状态转移:要求dp[i][j]就考虑s[i]与s[j]
            2.1 若s[i]==s[j] 看中间回文长度可以直接拼接两边->dp[i][j]=dp[i+1][j-1]+2
            2.1 若s[i]!=s[j] 必定要舍弃其中一个字母,看舍弃哪个最后长度会更大->dp[i][j]=max(dp[i+1][j],dp[i][j-1])
        3.初始化:初始化dp[i][i]=1,其他为0
        4.遍历顺序:先i后j,i倒序j正序
        5.返回形式:返回dp[0][len-1]
         */
        int len = s.length();
        int[][] dp = new int[len][len];
        for (int i = 0; i < len; i++) {
            dp[i][i] = 1;
        }
        for (int i = len - 2; i >= 0; i--) {
            for (int j = i + 1; j <= len - 1; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][len - 1];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
