---
title: 摆动排序 II
date: 2022-06-16 00:14:47
permalink: /pages/0fbe6b/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---


## 题目

给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。

 

示例 1：

    输入：nums = [1,5,1,1,6,4]
    输出：[1,6,1,5,1,4]
    解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
示例 2：

    输入：nums = [1,3,2,2,3,1]
    输出：[2,3,1,3,1,2]
 

提示：

- 1 <= nums.length <= 5 * 10<sup>4</sup>
- 0 <= nums[i] <= 5000
- 题目数据保证，对于给定的输入 nums ，总能产生满足题目要求的结果



## 思路

整体排序，穿插排序

## 解法
```java

class Solution {
    //穿插排序
    public void wiggleSort(int[] nums) {
        int n = nums.length;
        Arrays.sort(nums);
        int[] odd = Arrays.copyOfRange(nums, 0, (n + 1) / 2);
        int[] even = Arrays.copyOfRange(nums, (n + 1) / 2, n);
        for (int k = 0, i = odd.length - 1, j = even.length - 1; k < n; k++) {
            if ((k & 1) == 0) {
                nums[k] = odd[i--];
            } else {
                nums[k] = even[j--];
            }
        }
    }}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
