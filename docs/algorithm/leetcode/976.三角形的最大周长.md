---
title: 三角形的最大周长
date: 2022-11-08 22:14:54
permalink: /pages/bd933d/
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

给定由一些正数（代表长度）组成的数组 nums ，返回 由其中三个长度组成的、面积不为零的三角形的最大周长 。如果不能形成任何面积不为零的三角形，返回 0。

 

示例 1：

    输入：nums = [2,1,2]
    输出：5
示例 2：

    输入：nums = [1,2,1]
    输出：0
 

提示：

- 3 <= nums.length <= 10<sup>4</sup>
- 1 <= nums[i] <= 106

## 思路

Arrays.sort

## 解法
```java

class Solution {
    public int largestPerimeter(int[] A) {

        Arrays.sort(A);
        for(int i = A.length - 1; i >= 2; i--) {
            int a = A[i];
            int b = A[i - 1];
            int c = A[i - 2];
            if(a < b + c){
                return a + b + c;
            }
        }
        return 0;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
