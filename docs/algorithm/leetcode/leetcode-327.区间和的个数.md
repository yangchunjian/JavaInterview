---
title: 区间和的个数
date: 2022-07-14 23:35:09
permalink: /pages/c01c87/
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

给你一个整数数组 nums 以及两个整数 lower 和 upper 。求数组中，值位于范围 [lower, upper] （包含 lower 和 upper）之内的 区间和的个数 。

区间和 S(i, j) 表示在 nums 中，位置从 i 到 j 的元素之和，包含 i 和 j (i ≤ j)。

 

示例 1：

    输入：nums = [-2,5,-1], lower = -2, upper = 2
    输出：3
    解释：存在三个区间：[0,0]、[2,2] 和 [0,2] ，对应的区间和分别是：-2 、-1 、2 。
示例 2：

    输入：nums = [0], lower = 0, upper = 0
    输出：1
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1
- -10<sup>5</sup> <= lower <= upper <= 10<sup>5</sup>
- 题目数据保证答案是一个 32 位 的整数


## 思路

前缀和

## 解法
```java


class Solution {
        int count;  // 记录位于[lower, upper]之内区间和的个数
    long[] temp;  // 辅助数组，用于帮助合并两个有序数组
    int lower, upper;   
    public int countRangeSum(int[] nums, int lower, int upper) {
        int len = nums.length;
        count = 0;  // 对count进行初始化
        temp = new long[len+1]; // 对辅助数组进行初始化
        this.lower = lower;
        this.upper = upper;
        // 前缀和
        long[] preSum = new long[len+1];
        for (int i = 0; i < len; i++) {
            preSum[i+1] = preSum[i] + nums[i];
        }
        // 对前缀和排序，归并排序是对两个互不干扰的有序数组进行排序，利用互不干扰这个特性来计算区间和
        sort(preSum);
        return count;
    }
    void sort(long[] preSum) {
        int len = preSum.length;
        sort(preSum, 0, len-1);
    }
    void sort(long[] preSum, int low, int high) {
        // 如果low==high，说明只有一个元素，有序，直接返回
        if (low == high) {
            return;
        }
        // 计算中间值，防止溢出
        int mid = low + (high - low) / 2;
        // 对[low, mid]进行排序
        sort(preSum, low, mid);
        // 对[mid+1, high]进行排序
        sort(preSum, mid+1, high);
        // 对已经排好序的[low, mid]和[mid+1, high]进行合并
        merge(preSum, low, mid, high);
    }
    void merge(long[] preSum, int low, int mid, int high) {
        // 将preSum的值复制到temp中
        for (int i = low; i <=high; i++) {
            temp[i] = preSum[i];
        }

        // 两个有序数组的头指针
        int start = low, end = mid + 1;
        // s记录第一个大于等于lower的下标
        int s = mid + 1;
        // e记录第一个大于upper的下标
        int e = mid + 1;
        // 遍历[low, high]，比较大小对preSum赋值
        for (int i = low; i <= high; i++) {
            // 对于左数组做以下操作
            if (i <= mid) {
                // 寻找第一个大于等于lower的下标
                while (s <= high && temp[s] - temp[i] < lower) {
                    s++;
                }
                // 寻找第一个大于upper的下标
                while (e <= high && temp[e] - temp[i] <= upper) {
                    e++;
                }
                // 对于temp[i]，e-s就是满足指定区间和的区间的个数
                count += e - s;
            }
            // 下面是归并排序的正常逻辑
            if (start == mid + 1) {
                preSum[i] = temp[end++];
            } else if (end == high + 1) {
                preSum[i] = temp[start++];
            } else if (temp[start] < temp[end]) {
                preSum[i] = temp[start++];
            } else {
                preSum[i] = temp[end++];
            }
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
