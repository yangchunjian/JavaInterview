---
title: 至少是其他数字两倍的最大数
date: 2022-10-05 22:47:02
permalink: /pages/987430/
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

给你一个整数数组 nums ，其中总是存在 唯一的 一个最大整数 。

请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

 

示例 1：

    输入：nums = [3,6,1,0]
    输出：1
    解释：6 是最大的整数，对于数组中的其他整数，6 至少是数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。
示例 2：

    输入：nums = [1,2,3,4]
    输出：-1
    解释：4 没有超过 3 的两倍大，所以返回 -1 。
示例 3：

    输入：nums = [1]
    输出：0
    解释：因为不存在其他数字，所以认为现有数字 1 至少是其他数字的两倍。
 

提示：

- 1 <= nums.length <= 50
- 0 <= nums[i] <= 100
- nums 中的最大元素是唯一的


## 思路

为什么我们要将最大值与所有元素进行比较呢？如果我们找到第二大的元素，将它的两倍的值与最大值进行比较，不就能证明最大值是否大于所有元素两倍的值吗？

## 解法
```java

class Solution {
    // 为什么我们要将最大值与所有元素进行比较呢？如果我们找到第二大的元素，将它的两倍的值与最大值进行比较，不就能证明最大值是否大于所有元素两倍的值吗？
    public int dominantIndex(int[] nums) {

        int max = 0, idx = 0, less = 1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                less = max;
                max = nums[i];
                idx = i;
            } else if (nums[i] > less) {
                less = nums[i];
            }
        }
        return max >= (less * 2) ? idx : -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
