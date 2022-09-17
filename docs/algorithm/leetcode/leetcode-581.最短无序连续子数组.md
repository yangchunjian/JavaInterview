---
title: 最短无序连续子数组
date: 2022-09-15 23:50:02
permalink: /pages/8bf662/
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

给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

请你找出符合题意的 最短 子数组，并输出它的长度。

 

示例 1：

    输入：nums = [2,6,4,8,10,9,15]
    输出：5
    解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
示例 2：

    输入：nums = [1,2,3,4]
    输出：0
示例 3：

    输入：nums = [1]
    输出：0
 

提示：

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>


## 思路

// 从左往右遍历，遍历到i，max记录的是从0到i最大的数，如果第i个位置比max小，证明第i位置元素处在一个不正确的位置(因为它前面有个比它大的数)，记录下标high。
// 从右往左遍历，遍历到i，min记录的是从末尾元素到i元素最小的数，如果第i位置元素比min大了，证明第i位置元素也处在一个不正确的位置(因为它后面有比它小的数)，记录下标low。
// 计算两个不正确的位置low和high之间的距离。


## 解法
```java

class Solution {
// 从左往右遍历，遍历到i，max记录的是从0到i最大的数，如果第i个位置比max小，证明第i位置元素处在一个不正确的位置(因为它前面有个比它大的数)，记录下标high。
// 从右往左遍历，遍历到i，min记录的是从末尾元素到i元素最小的数，如果第i位置元素比min大了，证明第i位置元素也处在一个不正确的位置(因为它后面有比它小的数)，记录下标low。
// 计算两个不正确的位置low和high之间的距离。
    public int findUnsortedSubarray(int[] nums) {

        if (nums.length<=1) return 0;
        int max = nums[0];
        int high = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] >= max) {
                max = nums[i];
            } else {
                high = i;
            }
        }
        int min = nums[nums.length-1];
        int low = nums.length-1;
        for (int i = nums.length-2; i >= 0; i--) {
            if (nums[i] <= min) {
                min = nums[i];
            } else {
                low = i;
            }
        }
        return high>=low?high-low+1:0;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
