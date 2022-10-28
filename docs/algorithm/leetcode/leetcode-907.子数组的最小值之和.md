---
title: 子数组的最小值之和
date: 2022-10-28 09:48:04
permalink: /pages/a10d1d/
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

给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

由于答案可能很大，因此 返回答案模 10^9 + 7 。

 

示例 1：

    输入：arr = [3,1,2,4]
    输出：17
    解释：
    子数组为 [3]，[1]，[2]，[4]，[3,1]，[1,2]，[2,4]，[3,1,2]，[1,2,4]，[3,1,2,4]。 
    最小值为 3，1，2，4，1，1，2，1，1，1，和为 17。
示例 2：

    输入：arr = [11,81,94,43,3]
    输出：444
 

提示：

- 1 <= arr.length <= 3 * 10<sup>4</sup>
- 1 <= arr[i] <= 3 * 10<sup>4</sup>

## 思路

计算每个数在子数组中最小的次数

## 解法
```java

class Solution {
    // 计算每个数在子数组中最小的次数


    public int sumSubarrayMins(int[] arr) {
        long ans = 0;
        int n = arr.length;
        for (int i = 0; i < n; ++i) {
            int j = i - 1, k = i + 1;
            while (j >= 0 && arr[i] < arr[j]) --j;
            while (k < n && arr[i] <= arr[k]) ++k;
            ans += (long) arr[i] * (i - j) * (k - i);
            ans %= 1000000007;
        }
        return (int) ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
