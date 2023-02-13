---
title: 统计「优美子数组」
date: 2023-02-12 21:53:51
permalink: /pages/7e6a73/
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

给你一个整数数组 nums 和一个整数 k。如果某个连续子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

请返回这个数组中 「优美子数组」 的数目。

 

示例 1：

    输入：nums = [1,1,2,1,1], k = 3
    输出：2
    解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
示例 2：

    输入：nums = [2,4,6], k = 1
    输出：0
    解释：数列中不包含任何奇数，所以不存在优美子数组。
示例 3：

    输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
    输出：16
 

提示：

- 1 <= nums.length <= 50000
- 1 <= nums[i] <= 10^5
- 1 <= k <= nums.length

## 思路

记录第oddCount个奇数的下标


滑动窗口

- 记录下每个奇数的下标，用arr数组暂存
- 枚举所有的相邻的k个奇数，从窗口的左右开始扩展，遇到新的奇数前停止。通过排列组合可以通过统计左右可扩展的位置数计算总的可能，而不用暴力枚举

## 解法
```java

class Solution {
    public int numberOfSubarrays(int[] nums, int k) {
        int len = nums.length;
        int res = 0;
        int oddCount = 0;
        int arr[] = new int[len + 2];
        //记录第oddCount个奇数的下标
        for (int i = 0; i < len; i++) {
            if ((nums[i] & 1) == 1) {
                arr[++oddCount] = i;//第++oddCount个奇数的下标是i
            }
        }
        arr[0] = -1;//左边界
        arr[oddCount + 1] = len;//右边界

        // arr[i]是窗口左边界
        // arr[i+k-1] 是窗口右边界
        // arr[i-1]是左边的上一个奇数，在此之后到arr[i]都可选
        // arr[i+k]是右边的下一个奇数，在此之前都arr[i+k-1]都可选
        //前面可选部分长度为arr[i]-arr[i-1]
        //后面可选部分长度为arr[i+k]-arr[i+k-1]
        //总的可能数等于前后可选的组合

        for (int i = 1; i + k < oddCount + 2; i++) {
            res += (arr[i] - arr[i - 1]) * (arr[i + k] - arr[i + k - 1]);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
