---
title: 4的幂
date: 2022-09-12 00:04:14
permalink: /pages/d2ff81/
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

给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 4 的幂次方需满足：存在整数 x 使得 n == 4x

 

示例 1：

    输入：n = 16
    输出：true
示例 2：

    输入：n = 5
    输出：false
示例 3：

    输入：n = 1
    输出：true
 

提示：

- -2<sup>31</sup> <= n <= 2<sup>31</sup> - 1



## 思路

递归

## 解法
```java

class Solution {
    public boolean isPowerOfFour(int n) {

        if(n<1)
           return false;
        if(n==1)
           return true;   
        if(n%4!=0)
           return false;
        else
           return isPowerOfFour(n/4);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
