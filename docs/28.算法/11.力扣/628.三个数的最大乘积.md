---
title: 三个数的最大乘积
date: 2022-09-17 20:06:41
permalink: /pages/d6c279/
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

给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

 

示例 1：

    输入：nums = [1,2,3]
    输出：6
示例 2：

    输入：nums = [1,2,3,4]
    输出：24
示例 3：

    输入：nums = [-1,-2,-3]
    输出：-6
 

提示：

- 3 <= nums.length <= 10<sup>4</sup>
- -1000 <= nums[i] <= 1000


## 思路

Arrays.sort

## 解法
```java

class Solution {
    public int maximumProduct(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);

        return Math.max(nums[0]*nums[1]*nums[n - 1], nums[n - 1]*nums[n - 2]*nums[n - 3]);
  
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
