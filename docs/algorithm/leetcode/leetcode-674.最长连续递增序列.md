---
title: 最长连续递增序列
date: 2022-09-19 22:31:09
permalink: /pages/6dc9c2/
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

给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。

 

示例 1：

    输入：nums = [1,3,5,4,7]
    输出：3
    解释：最长连续递增序列是 [1,3,5], 长度为3。
    尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。 
示例 2：

    输入：nums = [2,2,2,2,2]
    输出：1
    解释：最长连续递增序列是 [2], 长度为1。
 

提示：

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>


## 思路

动态规划的思想，反正就是当前i状态参考前面的状态，就是动态规划

## 解法
```java

class Solution {
    public int findLengthOfLCIS(int[] nums) {
        if(nums.length<1){
            return 0;
        }
        int d = 0;
        int max = 1;
        for(int i =1;i<nums.length;i++){
            if(nums[i] > nums[i-1]){
                max = Math.max(i - d + 1,max);
            }else{
                d = i;
            }
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
