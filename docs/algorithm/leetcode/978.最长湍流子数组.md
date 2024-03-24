---
title: 最长湍流子数组
date: 2022-11-08 22:37:17
permalink: /pages/d3837b/
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

给定一个整数数组 arr ，返回 arr 的 最大湍流子数组的长度 。

如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是 湍流子数组 。

更正式地来说，当 arr 的子数组 A[i], A[i+1], ..., A[j] 满足仅满足下列条件时，我们称其为湍流子数组：

- 若 i <= k < j ：
    - 当 k 为奇数时， A[k] > A[k+1]，且
    - 当 k 为偶数时，A[k] < A[k+1]；
- 或 若 i <= k < j ：
    - 当 k 为偶数时，A[k] > A[k+1] ，且
    - 当 k 为奇数时， A[k] < A[k+1]。

示例 1：

    输入：arr = [9,4,2,10,7,8,8,1,9]
    输出：5
    解释：arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
示例 2：

    输入：arr = [4,8,12,16]
    输出：2
示例 3：

    输入：arr = [100]
    输出：1
 

提示：

- 1 <= arr.length <= 4 * 10<sup>4</sup>
- 0 <= arr[i] <= 10<sup>9</sup>

## 思路

比较 i-1，i的大小，对比上一次的结果，如果相等则长度置1（以i为起点），如果与上次相同则长度置2（以i-1为起点），否则长度加1（起点不变）。

## 解法
```java

class Solution {

    // 比较 i-1，i的大小，对比上一次的结果，如果相等则长度置1（以i为起点），如果与上次相同则长度置2（以i-1为起点），否则长度加1（起点不变）。

    public int maxTurbulenceSize(int[] A) {
        if(A.length < 2) return A.length;
        int max = 1, curr = 1;
        int last = 0;
        for(int i = 1; i < A.length; ++i){
            int cmp = Integer.compare(A[i], A[i-1]);
            if(cmp == 0) curr = 1;
            else if(cmp == last) curr = 2;
            else curr++;
            last = cmp;
            max = Math.max(max, curr);
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
