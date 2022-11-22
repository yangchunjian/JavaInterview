---
title: 最大连续1的个数 III
date: 2022-11-22 09:01:48
permalink: /pages/0a5e59/
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

给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。

 

示例 1：

    输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
    输出：6
    解释：[1,1,1,0,0,1,1,1,1,1,1]
    粗体数字从 0 翻转到 1，最长的子数组长度为 6。
示例 2：

    输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
    输出：10
    解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
    粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- nums[i] 不是 0 就是 1
- 0 <= k <= nums.length


## 思路

滑动窗口

## 解法
```java

class Solution {
    public int longestOnes(int[] nums, int k) {
        
        int left = 0, right = 0;
        int res = Integer.MIN_VALUE;
        while(right < nums.length){
            if(nums[right] == 0)k--;
            right++;

            while(k < 0){//左边界需要收缩
                if(nums[left] == 0)k++;
                left++;    
            }
            res = Math.max(res, right - left);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
