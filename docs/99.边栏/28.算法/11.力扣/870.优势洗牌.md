---
title: 优势洗牌
date: 2022-10-26 10:31:07
permalink: /pages/40bb3b/
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

给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。

 

示例 1：

    输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
    输出：[2,11,7,15]
示例 2：

    输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
    输出：[24,32,8,12]
 

提示：

- 1 <= nums1.length <= 10<sup>5</sup>
- nums2.length == nums1.length
- 0 <= nums1[i], nums2[i] <= 10<sup>9</sup>


## 思路

贪心

通过index数组将nums2从大到小排序，并记录nums2中每个数原来对应的下标。nums1从小到大排序，通过left和right两个指针确定nums1中[left，right]之间的数没有被使用过

对于nums2中最大的数max，如果nums1中有比max大的数直接选择，如果没有就选择nums1中最小的数。将结果存在nums2中并返回以节省空间

## 解法
```java

class Solution {
    public int[] advantageCount(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int[][] index = new int[n][2];
        for(int i = 0; i < n; i++) {
            index[i][0] = nums2[i];
            index[i][1] = i;
        }
        Arrays.sort(nums1);
        Arrays.sort(index, (a, b) -> b[0] - a[0]);
        int left = 0, right = n - 1;
        for(int i = 0; i < n; i++) {
            if(nums1[right] > index[i][0]) {
                nums2[index[i][1]] = nums1[right];
                right--;
            } else {
                nums2[index[i][1]] = nums1[left];
                left++;
            }
        }
        return nums2;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
