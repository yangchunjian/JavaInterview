---
title: 两个字符串的最小ASCII删除和
date: 2022-09-29 22:02:31
permalink: /pages/4aeb84/
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

给定两个字符串s1 和 s2，返回 使两个字符串相等所需删除字符的 ASCII 值的最小和 。

 

示例 1:

    输入: s1 = "sea", s2 = "eat"
    输出: 231
    解释: 在 "sea" 中删除 "s" 并将 "s" 的值(115)加入总和。
    在 "eat" 中删除 "t" 并将 116 加入总和。
    结束时，两个字符串相等，115 + 116 = 231 就是符合条件的最小和。
示例 2:

    输入: s1 = "delete", s2 = "leet"
    输出: 403
    解释: 在 "delete" 中删除 "dee" 字符串变成 "let"，
    将 100[d]+101[e]+101[e] 加入总和。在 "leet" 中删除 "e" 将 101[e] 加入总和。
    结束时，两个字符串都等于 "let"，结果即为 100+101+101+101 = 403 。
    如果改为将两个字符串转换为 "lee" 或 "eet"，我们会得到 433 或 417 的结果，比答案更大。
 

提示:

- 0 <= s1.length, s2.length <= 1000
- s1 和 s2 由小写英文字母组成


## 思路

dp[i][j]表示当前LCS的最大和，总字符和-LCS最大和就是需要变化的最小和

## 解法
```java

class Solution {
    //dp[i][j]表示当前LCS的最大和，总字符和-LCS最大和就是需要变化的最小和


    public int minimumDeleteSum(String s1, String s2) {
        int n1 = s1.length();
        int sum = 0;
        int n2 = s2.length();
        for(int i = 0; i < n1; i++)
            sum += s1.charAt(i);
        for(int i = 0; i < n2; i++)
            sum += s2.charAt(i);

        int[][] dp = new int[n1 + 1][n2 + 1];
        for(int i = 1; i <= n1; i++){
            char c1 = s1.charAt(i - 1);
            for(int j = 1; j <= n2; j++){
                char c2 = s2.charAt(j - 1);
                if(c1 == c2){
                    dp[i][j] = dp[i - 1][j - 1] + c1;//lcs里原先这里是+1，现在换成了加上当前元素的值进和里
                }
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        return sum - 2 * dp[n1][n2];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
