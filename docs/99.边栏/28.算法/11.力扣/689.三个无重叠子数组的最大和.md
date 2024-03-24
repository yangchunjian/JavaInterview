---
title: 三个无重叠子数组的最大和
date: 2022-09-25 23:04:26
permalink: /pages/183ca4/
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

给你一个整数数组 nums 和一个整数 k ，找出三个长度为 k 、互不重叠、且全部数字和（3 * k 项）最大的子数组，并返回这三个子数组。

以下标的数组形式返回结果，数组中的每一项分别指示每个子数组的起始位置（下标从 0 开始）。如果有多个结果，返回字典序最小的一个。

 

示例 1：

    输入：nums = [1,2,1,2,6,7,5,1], k = 2
    输出：[0,3,5]
    解释：子数组 [1, 2], [2, 6], [7, 5] 对应的起始下标为 [0, 3, 5]。
    也可以取 [2, 1], 但是结果 [1, 3, 5] 在字典序上更大。
示例 2：

    输入：nums = [1,2,1,2,1,2,1,2,1], k = 2
    输出：[0,2,4]
 

提示：

- 1 <= nums.length <= 2 * 10<sup>4</sup>
- 1 <= nums[i] < 2<sup>16</sup>
- 1 <= k <= floor(nums.length / 3)


## 思路

前缀和

## 解法
```java

class Solution {
    public int[] maxSumOfThreeSubarrays(int[] nums, int k) {
        int n = nums.length;
        int max1 = 0, max2 = 0, max3 = 0;
        int[] ans1 = new int[1];
        int[] ans2 = new int[2];
        int[] ans3 = new int[3];
        int[] sum = new int[n + 1];
        for(int i = 1; i <= n; ++i) sum[i] = sum[i - 1] + nums[i - 1];
        for(int i = 3 * k; i <= n; ++i) {
            int pos1 = i - 3*k, pos2 = i - 2*k, pos3 = i - k;
            if (sum[pos2] - sum[pos1] > max1) {
                max1 = sum[pos2] - sum[pos1];
                ans1 = new int[]{pos1};
            }
            if (max1 + sum[pos3] - sum[pos2] > max2) {
                max2 = max1 + sum[pos3] - sum[pos2];
                ans2 = new int[]{ans1[0], pos2};
            }
            if (max2 + sum[i] - sum[pos3] > max3) {
                max3 = max2 + sum[i] - sum[pos3];
                ans3 = new int[]{ans2[0], ans2[1], pos3};
            }
        }
        return ans3;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
