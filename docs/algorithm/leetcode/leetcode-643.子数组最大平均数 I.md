---
title: 子数组最大平均数 I
date: 2022-09-18 20:57:21
permalink: /pages/4cfc16/
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

给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

 

示例 1：

    输入：nums = [1,12,-5,-6,50,3], k = 4
    输出：12.75
    解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
示例 2：

    输入：nums = [5], k = 1
    输出：5.00000
 

提示：

- n == nums.length
- 1 <= k <= n <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>


## 思路

先算出前k个，然后再while后移比较

## 解法
```java

class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int sum = 0;
        for (int i = 0; i < k; ++i) {
            sum += nums[i];
        }
        int i = k;
        // 保存原来的结果，不用重新计算和
        int temp = sum;
        while (i < nums.length) {
            // 向前移动一位，加上前面一位，减去后面一位
            temp = temp + nums[i] - nums[i - k];
            sum = Math.max(sum, temp);
            ++i;
        }
        return (double) sum / k;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
