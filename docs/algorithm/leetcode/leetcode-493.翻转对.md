---
title: 翻转对
date: 2022-09-12 22:30:51
permalink: /pages/9910c7/
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

给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

你需要返回给定数组中的重要翻转对的数量。

示例 1:

    输入: [1,3,2,3,1]
    输出: 2
示例 2:

    输入: [2,4,3,5,1]
    输出: 3
注意:

- 给定数组的长度不会超过50000。
- 输入数组中的所有数字都在32位整数的表示范围内。


## 思路

二分

## 解法
```java

class Solution {
    public int reversePairs(int[] nums) {

        List<Long> list = new ArrayList<>();
        int ans = 0;
        for (int i = nums.length - 1; i >= 0; i--) {
            ans += binSearch(list, (long) nums[i]);
            list.add(binSearch(list, (long) nums[i] * 2), (long) nums[i] * 2);
        }
        return ans;
    }

    private int binSearch(List<Long> list, long target) {
        int l = 0, r = list.size() - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (list.get(mid) >= target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return l;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
