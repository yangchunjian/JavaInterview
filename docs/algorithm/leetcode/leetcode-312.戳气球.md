---
title: 戳气球
date: 2022-07-17 17:24:31
permalink: /pages/896d62/
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

有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。

现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。

求所能获得硬币的最大数量。

 

示例 1：

    输入：nums = [3,1,5,8]
    输出：167
    解释：
    nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
    coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167
示例 2：

    输入：nums = [1,5]
    输出：10
 

提示：

- n == nums.length
- 1 <= n <= 300
- 0 <= nums[i] <= 100



## 思路

区间dp，System.arraycopy

## 解法
```java

class Solution {
    public int maxCoins(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        // 构建新数组 1 x x x 1
        int[] val = new int[nums.length + 2];
        System.arraycopy(nums, 0, val, 1, nums.length);
        val[0] = 1;
        val[val.length - 1] = 1;

        // 子问题：dp[i][j] 戳破 （i,j）内气球可以得到的最大金币数（左开右开）
        // 转移方程：dp[i][j] = max(dp[i][k] + val[i] * val[k] * val[j] + dp[k][j])
        //         i < k < j，它是（i,j）内最后一个戳爆的气球
        // 计算顺序：区间 dp

        int[][] dp = new int[val.length][val.length];

        for (int interval = 2; interval < val.length; interval++) {
            for (int i = 0; i + interval < val.length; i++) {

                int j = i + interval;
                
                int max = 0;
                for (int k = i + 1; k < j; k++) {
                    max = Math.max(max, dp[i][k] + val[i] * val[k] * val[j] + dp[k][j]);
                }

                dp[i][j] = max;
            }
        }
        
        return dp[0][val.length - 1];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
