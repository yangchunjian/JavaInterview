---
title: 统计好数字的数目
date: 2022-09-02 14:45:39
permalink: /pages/a00713/
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

我们称一个数字字符串是 好数字 当它满足（下标从 0 开始）偶数 下标处的数字为 偶数 且 奇数 下标处的数字为 质数 （2，3，5 或 7）。

比方说，"2582" 是好数字，因为偶数下标处的数字（2 和 8）是偶数且奇数下标处的数字（5 和 2）为质数。

但 "3245" 不是 好数字，因为 3 在偶数下标处但不是偶数。

给你一个整数 n ，请你返回长度为 n 且为好数字的数字字符串 总数 。

由于答案可能会很大，请你将它对 109 + 7 取余后返回 。

一个 数字字符串 是每一位都由 0 到 9 组成的字符串，且可能包含前导 0 。

 

示例 1：

    输入：n = 1
    输出：5
    解释：长度为 1 的好数字包括 "0"，"2"，"4"，"6"，"8" 。
示例 2：

    输入：n = 4
    输出：400
示例 3：

    输入：n = 50
    输出：564908303
 

提示：

- 1 <= n <= 10<sup>15</sup>


## 思路

快速幂+存储

## 解法
```java

class Solution {
    Map<Long,Integer> map=new HashMap<>();
    public int countGoodNumbers(long n) {
        if(n==1){return 5;}
        if(n==2){return 20;}
        int mod=1000000007;
        //二分后，偶数放前面，奇数放后边
        if(map.containsKey(n)){return map.get(n);}
        int a=(int)((long)countGoodNumbers(n/2+n/2%2)*(long)countGoodNumbers(n-(n/2+n/2%2))%mod);
        map.put(n,a);
        return a;
    }
    
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
