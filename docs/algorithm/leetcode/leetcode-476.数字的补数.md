---
title: 数字的补数
date: 2022-09-12 20:13:17
permalink: /pages/b4330f/
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

对整数的二进制表示取反（0 变 1 ，1 变 0）后，再转换为十进制表示，可以得到这个整数的补数。

例如，整数 5 的二进制表示是 "101" ，取反后得到 "010" ，再转回十进制表示得到补数 2 。

给你一个整数 num ，输出它的补数。

 

示例 1：

    输入：num = 5
    输出：2
    解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
示例 2：

    输入：num = 1
    输出：0
    解释：1 的二进制表示为 1（没有前导零位），其补数为 0。所以你需要输出 0 。
 

提示：

- 1 <= num < 2<sup>31</sup>



## 思路

while循环就是找一个2进制下全是1的，恰好不小于num的数。 这里主要还是异或的逻辑

## 解法
```java

class Solution {
    public int findComplement(int num) {
		int res = 1;
		while (res < num) {
			res = res << 1;
			res++;
		}
		return num ^ res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
