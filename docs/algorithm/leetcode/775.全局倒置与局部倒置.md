---
title: 全局倒置与局部倒置
date: 2022-10-08 21:13:14
permalink: /pages/4c6b3c/
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

给你一个长度为 n 的整数数组 nums ，表示由范围 [0, n - 1] 内所有整数组成的一个排列。

全局倒置 的数目等于满足下述条件不同下标对 (i, j) 的数目：

- 0 <= i < j < n
- nums[i] > nums[j]

局部倒置 的数目等于满足下述条件的下标 i 的数目：

- 0 <= i < n - 1
- nums[i] > nums[i + 1]

当数组 nums 中 全局倒置 的数量等于 局部倒置 的数量时，返回 true ；否则，返回 false 。

 

示例 1：

    输入：nums = [1,0,2]
    输出：true
    解释：有 1 个全局倒置，和 1 个局部倒置。
示例 2：

    输入：nums = [1,2,0]
    输出：false
    解释：有 2 个全局倒置，和 1 个局部倒置。
 
提示：

- n == nums.length
- 1 <= n <= 5000
- 0 <= nums[i] < n
- nums 中的所有整数 互不相同
- nums 是范围 [0, n - 1] 内所有数字组成的一个排列


## 思路

// 局部倒置一定属于全局倒置

总而言之，所谓的全局倒置就是前面的比后面的大（非连续）。

比如 1，2，0。这里1和0，2和0是两对全局倒置，而局部倒置是一定要连续的递减。

比如1，2，0.只有2，0是局部倒置。

其实这样我们可以直接想象得到：局部倒置本身就是全局倒置之一，所以哪怕不等一定是全局倒置大于局部倒置，我们只要判断是不是有不是连续的全局倒置就行了，这样只要看有没有不连续的递减就行
## 解法
```java

class Solution {
    // 局部倒置一定属于全局倒置
    public boolean isIdealPermutation(int[] A) {
        //只要判断是不是有非连续全局倒置就可以了。
        int max = A[0];
        for(int i = 2;i<A.length;i++){
            if(max>A[i]){
                return false;
            }
            max = Math.max(max,A[i-1]);
        }
        return true;    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
