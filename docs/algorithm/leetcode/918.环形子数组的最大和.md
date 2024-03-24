---
title: 环形子数组的最大和
date: 2022-08-14 23:27:43
permalink: /pages/f04f40/
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

给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。

环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ，
 
nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。

子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，

不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。

 

示例 1：

    输入：nums = [1,-2,3,-2]
    输出：3
    解释：从子数组 [3] 得到最大和 3
示例 2：

    输入：nums = [5,-3,5]
    输出：10
    解释：从子数组 [5,5] 得到最大和 5 + 5 = 10
示例 3：

    输入：nums = [3,-2,2,-3]
    输出：3
    解释：从子数组 [3] 和 [3,-2,2] 都可以得到最大和 3
 

提示：

- n == nums.length
- 1 <= n <= 3 * 10<sup>4</sup>
- -3 * 10<sup>4</sup> <= nums[i] <= 3 * 10<sup>4​​​​​​​</sup>


## 思路


    分两种情况，一种为没有跨越边界的情况，一种为跨越边界的情况
    没有跨越边界的情况直接求子数组的最大和即可；
    跨越边界的情况可以对数组求和再减去无环的子数组的最小和，即可得到跨越边界情况下的子数组最大和；
    求以上两种情况的大值即为结果，另外需要考虑全部为负数的情况

## 解法
```java

class Solution {
    public int maxSubarraySumCircular(int[] A) {

        if (A == null || A.length < 1) {
            return 0;
        }
        int curMax, max, curMin, min, sum;
        curMax  = max = curMin = min = sum = A[0];
        for (int i = 1; i < A.length; i++) {
            sum += A[i];
            curMax = curMax > 0 ? curMax + A[i] : A[i]; 
            max = curMax > max ? curMax : max;
            curMin = curMin < 0 ? curMin + A[i] : A[i];
            min = curMin < min ? curMin : min;
        }
        if (max < 0)
            return max;
        return Math.max(sum - min, max);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
