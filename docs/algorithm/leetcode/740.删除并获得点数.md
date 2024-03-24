---
title: 删除并获得点数
date: 2022-09-25 23:36:35
permalink: /pages/b8a37f/
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

给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

 

示例 1：

    输入：nums = [3,4,2]
    输出：6
    解释：
    删除 4 获得 4 个点数，因此 3 也被删除。
    之后，删除 2 获得 2 个点数。总共获得 6 个点数。
示例 2：

    输入：nums = [2,2,3,3,3,4]
    输出：9
    解释：
    删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
    之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
    总共获得 9 个点数。
 

提示：

- 1 <= nums.length <= 2 * 10<sup>4</sup>
- 1 <= nums[i] <= 10<sup>4</sup>


## 思路

将数组变换，转换为每个值的所有点数。就成了打家劫舍问题

## 解法
```java

class Solution {
    // 将数组变换，转换为每个值的所有点数。就成了打家劫舍问题


    public int deleteAndEarn(int[] nums) {
        int[] trans = new int[10001];
        for (int i = 0; i < nums.length; i ++) {
            trans[nums[i]] += nums[i];
        }
        
        int[] dp = new int[10001];
        
        dp[0] = 0;
        dp[1] = trans[1];
        for (int i = 2; i < trans.length; i ++) {
            dp[i] = Math.max(dp[i-1], dp[i-2] + trans[i]);
        }
        
        return dp[dp.length - 1];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
