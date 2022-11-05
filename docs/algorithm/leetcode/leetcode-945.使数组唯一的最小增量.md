---
title: 使数组唯一的最小增量
date: 2022-11-05 15:46:24
permalink: /pages/b95e64/
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

给你一个整数数组 nums 。每次 move 操作将会选择任意一个满足 0 <= i < nums.length 的下标 i，并将 nums[i] 递增 1。

返回使 nums 中的每个值都变成唯一的所需要的最少操作次数。

 

示例 1：

    输入：nums = [1,2,2]
    输出：1
    解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
示例 2：

    输入：nums = [3,2,1,2,1,7]
    输出：6
    解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
    可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- 0 <= nums[i] <= 10<sup>5</sup>

## 思路

排序

## 解法
```java

class Solution {
    public int minIncrementForUnique(int[] A) {
        // 先排序
        Arrays.sort(A);
        int move = 0;
        // 遍历数组，若当前元素小于等于它的前一个元素，则将其变为前一个数+1
        for (int i = 1; i < A.length; i++) {
            if (A[i] <= A[i - 1]) {
                int pre = A[i];
                A[i] = A[i - 1] + 1;
                move += A[i] - pre;
            }
        }
        return move;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
