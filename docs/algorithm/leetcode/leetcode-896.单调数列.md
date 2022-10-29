---
title: 单调数列
date: 2022-10-29 14:08:54
permalink: /pages/2bfb53/
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

如果数组是单调递增或单调递减的，那么它是 单调 的。

如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。

当给定的数组 nums 是单调数组时返回 true，否则返回 false。

 

示例 1：

    输入：nums = [1,2,2,3]
    输出：true
示例 2：

    输入：nums = [6,5,4,4]
    输出：true
示例 3：

    输入：nums = [1,3,2]
    输出：false
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>5</sup> <= nums[i] <= 10<sup>5</sup>


## 思路


    /**
        单调 分为 递增或者递减
     */


## 解法
```java

class Solution {

    /**
        单调 分为 递增或者递减
     */

    public boolean isMonotonic(int[] nums) {
        if(nums.length == 1) return true;
        if( nums.length == 0) return false;
        if( nums[0] <= nums[nums.length - 1]){
            for(int i = 1 ; i < nums.length ; i++){
                if( nums[i] < nums[i-1] )
                    return false;
            }
        }else{
            for(int i = 1 ; i < nums.length ; i++){
                if( nums[i] > nums[i-1])
                    return false;
            }
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
