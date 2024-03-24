---
title: 连续整数求和
date: 2022-10-22 19:23:06
permalink: /pages/a28b4c/
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

给定一个正整数 n，返回 连续正整数满足所有数字之和为 n 的组数 。 

 

示例 1:

    输入: n = 5
    输出: 2
    解释: 5 = 2 + 3，共有两组连续整数([5],[2,3])求和后为 5。
示例 2:

    输入: n = 9
    输出: 3
    解释: 9 = 4 + 5 = 2 + 3 + 4
示例 3:

    输入: n = 15
    输出: 4
    解释: 15 = 8 + 7 = 4 + 5 + 6 = 1 + 2 + 3 + 4 + 5
 

提示:

- 1 <= n <= 10<sup>9​​​​​​​</sup>

## 思路

据连续整数可能的长度,来计算序列的个数

## 解法
```java

class Solution {
    public int consecutiveNumbersSum(int n) {
        // 根据连续整数可能的长度,来计算序列的个数
        int ans = 0;
        for(int i=1;i<=n;i++){
            if(n%i==0)++ans;    // 如果能整除,说明有i个x,可以得到n-sigma(0...i-1)
            n -= i;     //削平后面的山头,n-1计算序列长为2;n-1-2计算序列长为3;n-1-2-3计算序列长为4;
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
