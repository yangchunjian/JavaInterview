---
title: 区间子数组个数
date: 2022-10-15 21:12:00
permalink: /pages/ea6d7a/
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

给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。

生成的测试用例保证结果符合 32-bit 整数范围。

 

示例 1：

    输入：nums = [2,1,4,3], left = 2, right = 3
    输出：3
    解释：满足条件的三个子数组：[2], [2, 1], [3]
示例 2：

    输入：nums = [2,9,2,5,6], left = 2, right = 8
    输出：7
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- 0 <= nums[i] <= 10<sup>9</sup>
- 0 <= left <= right <= 10<sup>9</sup>


## 思路

最大元素满足大于等于L小于等于R的子数组个数 = 最大元素小于等于R的子数组个数 - 最大元素小于L的子数组个数

## 解法
```java

class Solution {
    public int numSubarrayBoundedMax(int[] A, int L, int R) {

            // 最大元素满足大于等于L小于等于R的子数组个数 = 最大元素小于等于R的子数组个数 - 最大元素小于L的子数组个数
        return numSubarrayBoundedMax(A, R) - numSubarrayBoundedMax(A, L - 1);
    }

    private int numSubarrayBoundedMax(int[] A, int Max) {
        int res = 0;
        int numSubarry = 0;
        for (int num : A) {
            if (num <= Max) {
                numSubarry++;
                res += numSubarry;
            } else {
                numSubarry = 0;
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
