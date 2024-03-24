---
title: 有效的山脉数组
date: 2022-11-04 20:56:23
permalink: /pages/3ab643/
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

给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：

- arr.length >= 3
- 在 0 < i < arr.length - 1 条件下，存在 i 使得：
    - arr[0] < arr[1] < ... arr[i-1] < arr[i]
    - arr[i] > arr[i+1] > ... > arr[arr.length - 1]



 

示例 1：

    输入：arr = [2,1]
    输出：false
示例 2：

    输入：arr = [3,5,5]
    输出：false
示例 3：

    输入：arr = [0,3,2,1]
    输出：true
     

提示：

- 1 <= arr.length <= 10<sup>4</sup>
- 0 <= arr[i] <= 10<sup>4</sup>

## 思路

双指针

## 解法
```java

class Solution {
    public boolean validMountainArray(int[] A) {
        if (A.length < 3) return false;
		int left = 0, right = A.length - 1;
		while (left < A.length - 2 && A[left] < A[left + 1]) left++;
		while (right > 1 && A[right] < A[right - 1]) right--;
		return left == right;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
