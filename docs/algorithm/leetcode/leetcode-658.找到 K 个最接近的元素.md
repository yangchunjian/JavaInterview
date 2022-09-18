---
title: 找到 K 个最接近的元素
date: 2022-09-18 22:36:33
permalink: /pages/75c5bd/
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

给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

- |a - x| < |b - x| 或者
- |a - x| == |b - x| 且 a < b


示例 1：

    输入：arr = [1,2,3,4,5], k = 4, x = 3
    输出：[1,2,3,4]
示例 2：

    输入：arr = [1,2,3,4,5], k = 4, x = -1
    输出：[1,2,3,4]
 

提示：

- 1 <= k <= arr.length
- 1 <= arr.length <= 10<sup>4</sup>
- arr 按 升序 排列
- -10<sup>4</sup> <= arr[i], x <= 10<sup>4</sup>

## 思路

滑动窗口

## 解法
```java

class Solution {
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        //滑动窗口
        int left = 0;
        for(int i = 0; i < arr.length; i++){
           int gap = Math.abs(arr[i]-x);      
           while (i-left >= k && gap < Math.abs(arr[left]-x)){
                     left++;
           }          
        }
        List<Integer> list = new ArrayList<>();
        for (int i = left; i < left + k; i++){
            list.add(arr[i]);
        }
        return list;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
