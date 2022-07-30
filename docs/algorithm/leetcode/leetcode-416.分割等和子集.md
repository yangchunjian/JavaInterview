---
title: 分割等和子集
date: 2022-07-30 14:51:10
permalink: /pages/ea404f/
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

给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

 

示例 1：

    输入：nums = [1,5,11,5]
    输出：true
    解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：

    输入：nums = [1,2,3,5]
    输出：false
    解释：数组不能分割成两个元素和相等的子集。
 

提示：

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100



## 思路

    // 与494. 目标和 类似，属于01背包问题，可以把问题抽象为“给定一个数组和一个容量为x的背包，求有多少种方式让背包装满（有多少种子集能让子集之和等于背包容量）?"
    // 递推公式：dp[i] = dp[i] + dp[i-num] ，对于当前的第i个物品，有拿和不拿两种情况，dp[i]表示不拿的情况，dp[i-num]表示拿的情况，因此要将两者相加。
     
## 解法
```java

class Solution {
// 与494. 目标和 类似，属于01背包问题，可以把问题抽象为“给定一个数组和一个容量为x的背包，求有多少种方式让背包装满（有多少种子集能让子集之和等于背包容量）?"
// 递推公式：dp[i] = dp[i] + dp[i-num] ，对于当前的第i个物品，有拿和不拿两种情况，dp[i]表示不拿的情况，dp[i-num]表示拿的情况，因此要将两者相加。


        public boolean canPartition(int[] nums) {
        int len = nums.length;
        int sum = 0;
        for (int n : nums) {
            sum += n;
        }
        if(sum % 2 != 0) return false;//整数相加不可能得小数
        int W = sum / 2;//相当于背包总承重
        int [] dp = new int[W+1];
        dp[0] = 1;
        for (int num : nums) {
            for (int i = W; i >= num; i--) {
                dp[i] += dp[i-num];
            }
        }
        return dp[W] != 0;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
