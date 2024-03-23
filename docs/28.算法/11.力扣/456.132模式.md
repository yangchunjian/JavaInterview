---
title: 132模式
date: 2022-06-23 19:52:55
permalink: /pages/89e1e4/
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

给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。

如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

 

示例 1：

    输入：nums = [1,2,3,4]
    输出：false
    解释：序列中不存在 132 模式的子序列。
示例 2：

    输入：nums = [3,1,4,2]
    输出：true
    解释：序列中有 1 个 132 模式的子序列： [1, 4, 2] 。
示例 3：

    输入：nums = [-1,3,2,0]
    输出：true
    解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。
 

提示：

- n == nums.length
- 1 <= n <= 2 * 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>

## 思路

stack栈

## 解法
```java

class Solution {
    public boolean find132pattern(int[] nums) {
        int n = nums.length;
        int last = Integer.MIN_VALUE; // 132中的2
        Stack<Integer> sta = new Stack<>();// 用来存储132中的3
        if(nums.length < 3)
            return false;
        for(int i=n-1; i>=0; i--){

            if(nums[i] < last) // 若出现132中的1则返回正确值
                return true;

            // 若当前值大于或等于2则更新2（2为栈中小于当前值的最大元素）
            while(!sta.isEmpty() && sta.peek() < nums[i]){
                last = sta.pop();
            }

            // 将当前值压入栈中
            sta.push(nums[i]);
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
