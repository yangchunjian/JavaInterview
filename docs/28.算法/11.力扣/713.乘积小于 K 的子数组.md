---
title: 乘积小于 K 的子数组
date: 2022-09-29 22:13:56
permalink: /pages/1268e8/
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

给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 

示例 1：

    输入：nums = [10,5,2,6], k = 100
    输出：8
    解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
    需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
示例 2：

    输入：nums = [1,2,3], k = 0
    输出：0
 

提示: 

- 1 <= nums.length <= 3 * 10<sup>4</sup>
- 1 <= nums[i] <= 1000
- 0 <= k <= 10<sup>6</sup>


## 思路

//     维护一个窗口[l,r],并记录该窗口内数组的乘积mut的值

// 如果该窗口内的数组的乘积为mut小于k,先记录以nums[r]结尾的子数组个数(r-l+1 为了节约资源可以在窗口扩大之后再求这个值),窗口向右扩大r++，并且mut乘nums[r];

// 如果窗口内的数组乘积mut大于k，窗口向左缩小,先除去nums[l]的值,然后再让l++;


## 解法
```java

class Solution {
//     维护一个窗口[l,r],并记录该窗口内数组的乘积mut的值

// 如果该窗口内的数组的乘积为mut小于k,先记录以nums[r]结尾的子数组个数(r-l+1 为了节约资源可以在窗口扩大之后再求这个值),窗口向右扩大r++，并且mut乘nums[r];

// 如果窗口内的数组乘积mut大于k，窗口向左缩小,先除去nums[l]的值,然后再让l++;


    public int numSubarrayProductLessThanK(int[] nums, int k) {
        int l = 0,r = 0,mut = nums[0],ans = 0;
        while( r < nums.length && l<nums.length){
            if(mut < k){
                if(++r < nums.length) mut *= nums[r];
                ans+=(r-l);
            }else mut /= nums[l++];
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
