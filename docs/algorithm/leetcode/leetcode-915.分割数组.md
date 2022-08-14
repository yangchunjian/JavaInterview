---
title: 分割数组
date: 2022-08-14 23:14:03
permalink: /pages/4fc17e/
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

给定一个数组 nums ，将其划分为两个连续子数组 left 和 right， 使得：

- left 中的每个元素都小于或等于 right 中的每个元素。
- left 和 right 都是非空的。
- left 的长度要尽可能小。
- 在完成这样的分组后返回 left 的 长度 。

用例可以保证存在这样的划分方法。

 

示例 1：

    输入：nums = [5,0,3,8,6]
    输出：3
    解释：left = [5,0,3]，right = [8,6]
示例 2：

    输入：nums = [1,1,1,0,6,12]
    输出：4
    解释：left = [1,1,1,0]，right = [6,12]
 

提示：

- 2 <= nums.length <= 10<sup>5</sup>
- 0 <= nums[i] <= 10<sup>6</sup>
- 可以保证至少有一种方法能够按题目所描述的那样对 nums 进行划分。



## 思路

    维护两个变量 当前最大值和左数组最大值

## 解法
```java

class Solution {
    // 维护两个变量 当前最大值和左数组最大值


    public int partitionDisjoint(int[] A) {

        if (A == null || A.length == 0) {
            return 0;
        }

        int leftMax = A[0];
        int max = A[0];
        int index = 0;

        for (int i = 0; i < A.length; i++) {
            max = Math.max(max, A[i]);
            if(A[i] < leftMax) {
                leftMax = max;
                index = i;
            }
        }

        return index + 1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
