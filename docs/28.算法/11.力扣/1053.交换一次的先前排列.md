---
title: 交换一次的先前排列
date: 2022-12-04 19:18:50
permalink: /pages/530c37/
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

给你一个正整数的数组 A（其中的元素不一定完全不同），请你返回可在 一次交换（交换两数字 A[i] 和 A[j] 的位置）后得到的、按字典序排列小于 A 的最大可能排列。

如果无法这么操作，就请返回原数组。

 

示例 1：

    输入：arr = [3,2,1]
    输出：[3,1,2]
    解释：交换 2 和 1
示例 2：

    输入：arr = [1,1,5]
    输出：[1,1,5]
    解释：已经是最小排列
示例 3：

    输入：arr = [1,9,4,6,7]
    输出：[1,7,4,6,9]
    解释：交换 9 和 7
示例 4：

    输入：arr = [3,1,1,3]
    输出：[1,3,1,3]
    解释：交换 1 和 3
 

提示：

- 1 <= arr.length <= 10<sup>4</sup>
- 1 <= arr[i] <= 10<sup>4</sup>

## 思路

从后往前找到第一个逆序的元素，然后找这个元素后面比他小的最大值进行交换。0ms,100%。

## 解法
```java

class Solution {
    // 从后往前找到第一个逆序的元素，然后找这个元素后面比他小的最大值进行交换。0ms,100%。


    public int[] prevPermOpt1(int[] arr) {
        int min = arr[arr.length - 1];
        int i = arr.length - 2;
        for(; i >= 0; i--) {
            if(arr[i] > min) {
                break;
            }
            min = Math.min(min, arr[i]);
        }
        int idx = -1, max = 0;
        for(int j = i + 1; i >= 0 && j < arr.length; j++) {
            if(arr[j] < arr[i] && arr[j] > max) {
                max = arr[j];
                idx = j;
            }
        }
        if(idx != -1) {
            arr[idx] = arr[i];
            arr[i] = max; 
        }
       
        return arr;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
