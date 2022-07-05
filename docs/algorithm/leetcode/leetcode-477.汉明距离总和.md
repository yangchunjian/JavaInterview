---
title: 汉明距离总和
date: 2022-06-25 11:56:31
permalink: /pages/7dac52/
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

两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。

给你一个整数数组 nums，请你计算并返回 nums 中任意两个数之间 汉明距离的总和 。

 

示例 1：

    输入：nums = [4,14,2]
    输出：6
    解释：在二进制表示中，4 表示为 0100 ，14 表示为 1110 ，2表示为 0010 。（这样表示是为了体现后四位之间关系）
    所以答案为：
    HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6
示例 2：

    输入：nums = [4,14,4]
    输出：4
 

提示：

- 1 <= nums.length <= 10<sup>4</sup>
- 0 <= nums[i] <= 10<sup>9</sup>
- 给定输入的对应答案符合 32-bit 整数范围

## 思路

这道题如果用暴力遍历，时间复杂度就是O(N^2)，肯定会超时，所以肯定不是这么做。

先处理最简单的场景，对于[4, 14, 2]，元素个数为3，4表示为0100，14表示为1110，2表示为0010，先考虑第1位数不同的总次数，个位一共出现0个1，那么该位不同的总次数就是(3 - 0) * 0 = 0，对于第2位， 出现2个1，那么次数就是(3 - 1) * 1 = 2。

所以可以知道，要求某一位不同的总次数，该位出现1的次数为n，元素总数为m，答案就是(m - n) * n，接下来要做的就是统计每一位上出现1的次数，这个就直接位运算解决了。

## 解法
```java

class Solution {
    public int totalHammingDistance(int[] nums) {

        int res = 0;
        int m = nums.length;
        for (int i = 0; i <= 30; i++) {
            int n = 0;
            for (int num : nums) {
                n += (num >>> i) & 1;
            }
            res += (m - n) * n;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
