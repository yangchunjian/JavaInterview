---
title: 最长重复子数组
date: 2022-10-05 15:46:28
permalink: /pages/8417ca/
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

给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

 

示例 1：

    输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
    输出：3
    解释：长度最长的公共子数组是 [3,2,1] 。
示例 2：

    输入：nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
    输出：5
 

提示：

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 100



## 思路

意子数组和子序列的区别 如果是子序列的话 递推公式就是 ：
 
dp[i][j] = max(dp[i-1][j-1]+(A[i-1] == B[j-1]?1:0),dp[i-1][j],dp[i][j-1])

dp[i][j]代表以A[i-1]与B[j-1]结尾的公共字串的长度,公共字串必须以A[i-1]，B[j-1]结束，即当A[i-1] == B[j-1]时，dp[i][j] = dp[i-1][j-1] + 1; 当A[i-1] != B[j-1]时，以A[i-1]和B[j-1]结尾的公共字串长度为0,dp[i][j] = 0。

输出最大的公共字串的长度即为最长重复字串。

## 解法
```java

class Solution {
    // 注意子数组和子序列的区别 如果是子序列的话 递推公式就是 ： dp[i][j] = max(dp[i-1][j-1]+(A[i-1] == B[j-1]?1:0),dp[i-1][j],dp[i][j-1])
    public int findLength(int[] A, int[] B) {
        if (A.length == 0 || B.length == 0) {
            return 0;
        }
        int[][] dp = new int[A.length+1][B.length+1];
        int result = 0;
        for (int i = 1; i <= A.length; i++) {
            for (int j = 1; j <= B.length; j++) {
                if (A[i-1] == B[j-1]) {
                    dp[i][j] = dp[i-1][j-1]+1;
                    result = Math.max(result, dp[i][j]);
                }
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
