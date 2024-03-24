---
title: 寻找最近的回文数
date: 2022-09-14 23:16:08
permalink: /pages/271800/
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

给定一个表示整数的字符串 n ，返回与它最近的回文整数（不包括自身）。如果不止一个，返回较小的那个。

“最近的”定义为两个整数差的绝对值最小。

 

示例 1:

    输入: n = "123"
    输出: "121"
示例 2:

    输入: n = "1"
    输出: "0"
    解释: 0 和 2是最近的回文，但我们返回最小的，也就是 0。
 

提示:

- 1 <= n.length <= 18
- n 只由数字组成
- n 不含前导 0
- n 代表在 [1, 10<sup>18</sup> - 1] 范围内的整数


## 思路

如果n 的前半部分是整数N，那么它的解一定是 以下三者之一：

    N-1 和 N-1的回文组成的数字。
    N 和 N的回文组成的数字
    N+1 和 N+1 的回文组成的数字
    利用这个结论生成3个解，取最小就行。
 
例 1230XXX的解 是 1230321, 1229221, 1231321 中的一个。 过程中处理下奇偶数长度，N是9999 N是10000等等特殊值， 自由发挥就好了。

## 解法
```java

class Solution {
    public String nearestPalindromic(String n) {
        int len = n.length();
        if (len == 1)  // 一位数的最近回文串就是它减1
            return (Integer.parseInt(n) - 1) + "";
        long org = Long.parseLong(n), thousand = (long) Math.pow(10, len - 1);
        if (org == thousand  || org == thousand + 1)  // org是10,100,1000,10000,..., 或 11,101,1001,10001,...
            return String.valueOf(thousand - 1);  // 返回9,99,999,9999,...
        thousand = thousand * 10L - 1L;
        if (org == thousand)  // org是99,999,9999,...
            return String.valueOf(thousand + 2L);  // 返回101,1001,10001,...
        // 特判结束，下面是普通数字。处理左半段后逆转填到右半段上
        int left = Integer.parseInt(n.substring(0, (len + 1) / 2));
        long ans = Long.MAX_VALUE, diff = Long.MAX_VALUE;
        for (int a : new int[] {1, 0, -1}) {  // 处理左半段：不变或加减1
            String lf = (left + a) + "";
            String full = new StringBuilder(len % 2 == 0 ? lf : lf.substring(0, lf.length() - 1))
                .reverse().insert(0, lf).toString();
            if (n.equals(full))
                continue;
            long _full = Long.parseLong(full);
            if (Math.abs(_full - org) <= diff) {
                diff = Math.abs(_full - org);
                ans = Math.min(ans, _full);
            }
        }
        return ans + "";
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
