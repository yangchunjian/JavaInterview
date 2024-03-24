---
title: 和可被 K 整除的子数组
date: 2022-11-08 21:57:14
permalink: /pages/f76794/
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

给定一个整数数组 nums 和一个整数 k ，返回其中元素之和可被 k 整除的（连续、非空） 子数组 的数目。

子数组 是数组的 连续 部分。

 

示例 1：

    输入：nums = [4,5,0,-2,-3,1], k = 5
    输出：7
    解释：
    有 7 个子数组满足其元素之和可被 k = 5 整除：
    [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
示例 2:

    输入: nums = [5], k = 9
    输出: 0
 

提示:

- 1 <= nums.length <= 3 * 10<sup>4</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>
- 2 <= k <= 10<sup>4</sup>

## 思路

前缀和

## 解法
```java

class Solution {
    //前缀和
    public int subarraysDivByK(int[] A, int K) {
        int[] map = new int[K];
        ++map[0];
        int prefix = 0, res = 0;
        for (int a : A) {
            prefix = (a + prefix) % K;
            if (prefix < 0) prefix += K;
            res += map[prefix]++;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
