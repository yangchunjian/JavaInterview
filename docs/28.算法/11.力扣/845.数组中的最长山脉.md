---
title: 数组中的最长山脉
date: 2022-10-23 22:05:54
permalink: /pages/f1a73b/
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

把符合下列属性的数组 arr 称为 山脉数组 ：

- arr.length >= 3
- 存在下标 i（0 < i < arr.length - 1），满足
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

给出一个整数数组 arr，返回最长山脉子数组的长度。如果不存在山脉子数组，返回 0 。

 

示例 1：

    输入：arr = [2,1,4,7,3,2,5]
    输出：5
    解释：最长的山脉子数组是 [1,4,7,3,2]，长度为 5。
示例 2：

    输入：arr = [2,2,2]
    输出：0
    解释：不存在山脉子数组。
 

提示：

- 1 <= arr.length <= 10<sup>4</sup>
- 0 <= arr[i] <= 10<sup>4</sup>


进阶：

- 你可以仅用一趟扫描解决此问题吗？
- 你可以用 O(1) 空间解决此问题吗？


## 思路

双指针

## 解法
```java

class Solution {
    public int longestMountain(int[] A) {
        if (A == null || A.length <= 2) {
            return 0;
        }
        int res = 0;
        for (int i = 1; i < A.length - 1; i++) {
            if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
                int l = i - 1;
                int r = i + 1;
                while (l > 0 && A[l - 1] < A[l]) {
                    l--;
                }
                while (r < A.length - 1 && A[r + 1] < A[r]) {
                    r++;
                }
                res = Math.max(res, (r - l + 1));
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
