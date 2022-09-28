---
title: 数组的度
date: 2022-09-28 22:13:16
permalink: /pages/e24daa/
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

给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

示例 1：

    输入：nums = [1,2,2,3,1]
    输出：2
    解释：
    输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
    连续子数组里面拥有相同度的有如下所示：
    [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
    最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
示例 2：

    输入：nums = [1,2,2,3,1,4,2]
    输出：6
    解释：
    数组的度是 3 ，因为元素 2 重复出现 3 次。
    所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。
 

提示：

- nums.length 在 1 到 50,000 范围内。
- nums[i] 是一个在 0 到 49,999 范围内的整数。



## 思路

Map<Integer, int[]> map = new HashMap<Integer, int[]>(); // 值为长度为3的数组

## 解法
```java

class Solution {
    public int findShortestSubArray(int[] nums) {

        Map<Integer, int[]> map = new HashMap<Integer, int[]>(); // 值为长度为3的数组
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            if (map.containsKey(nums[i])) { // 重复出现的情况
                map.get(nums[i])[0]++;   // 第一个数代表出现次数
                map.get(nums[i])[2] = i; // 第三个数代表最后一次出现位置
            } else { // 第一次出现的情况
                map.put(nums[i], new int[]{1, i, i}); // 第二个数代表第一次出现位置
            }
        }
        int maxNum = 0, minLen = 0;
        // 通过map中的entrySet方法获得所有键值对,它们的类型为Map.Entry内部类
        for (Map.Entry<Integer, int[]> entry : map.entrySet()) {
            int[] arr = entry.getValue();
            if (maxNum < arr[0]) { // 寻找数组的度 和 最短连续子数组长度
                maxNum = arr[0];
                minLen = arr[2] - arr[1] + 1;
            } else if (maxNum == arr[0]) { // 若两个元素的度相同,比较谁的长度更短
                if (minLen > arr[2] - arr[1] + 1) {
                    minLen = arr[2] - arr[1] + 1;
                }
            }
        }
        return minLen;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
