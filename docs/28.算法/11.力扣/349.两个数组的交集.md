---
title: 两个数组的交集
date: 2022-06-16 00:20:35
permalink: /pages/7ee540/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---


## 题目

给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

 

示例 1：

    输入：nums1 = [1,2,2,1], nums2 = [2,2]
    输出：[2]
示例 2：

    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[9,4]
    解释：[4,9] 也是可通过的
 

提示：

- 1 <= nums1.length, nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 1000



## 思路

两个set实现

## 解法
```java

class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        if (nums1 == null || nums2 == null) {
            return null;
        }
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();
        for (int item : nums1) {
            set1.add(item);
        }

        for (int item : nums2) {
            if (set1.contains(item)) {
                set2.add(item);
            }
        }

        int[] result = new int[set2.size()];
        int start = 0;
        for (int item : set2) {
            result[start] = item;
            start++;
        }
        return result;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
