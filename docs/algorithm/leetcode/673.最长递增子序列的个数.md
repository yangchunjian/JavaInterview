---
title: 最长递增子序列的个数
date: 2022-09-19 22:25:46
permalink: /pages/c7d08a/
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

给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

注意 这个数列必须是 严格 递增的。

 

示例 1:

    输入: [1,3,5,4,7]
    输出: 2
    解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

    输入: [2,2,2,2,2]
    输出: 5
    解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 

提示: 

- 1 <= nums.length <= 2000
- -10<sup>6</sup> <= nums[i] <= 10<sup>6</sup>


## 思路

动态规划，int[] dp = new int[n],int[] count = new int[n]，

其中dp[i]表示以nums[i]为结尾的最长递增子序列长度。（一定包括nums[i]）count[i]则对应以nums[i]为结尾的最长递增子序列的个数。

## 解法
```java

class Solution {
    public int findNumberOfLIS(int[] nums) {
        int[] dp = new int[nums.length];
        int[] count = new int[nums.length];
        int max = 0, result = 0;
        for (int i = 0; i < nums.length; i++) {
            dp[i] = 1;
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    if (dp[j] + 1 > dp[i]) {
                        count[i] = count[j];
                        dp[i] = dp[j] + 1;
                    } else if (dp[j] + 1 == dp[i]) {
                        count[i] += count[j];
                    }
                }
            }
            count[i] = Math.max(count[i], 1);
            if (dp[i] > max) {
                result = count[i];
                max = dp[i];
            } else if (dp[i] == max) {
                result += count[i];
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
