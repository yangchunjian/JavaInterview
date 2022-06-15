---
title: 累加数
date: 2022-06-16 00:17:21
permalink: /pages/720c0b/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 题目

累加数 是一个字符串，组成它的数字可以形成累加序列。

一个有效的 累加序列 必须 至少 包含 3 个数。除了最开始的两个数以外，序列中的每个后续数字必须是它之前两个数字之和。

给你一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是 累加数 。如果是，返回 true ；否则，返回 false 。

说明：累加序列里的数，除数字 0 之外，不会 以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

 

示例 1：

    输入："112358"
    输出：true 
    解释：累加序列为: 1, 1, 2, 3, 5, 8 。1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
示例 2：

    输入："199100199"
    输出：true 
    解释：累加序列为: 1, 99, 100, 199。1 + 99 = 100, 99 + 100 = 199
 

提示：

- 1 <= num.length <= 35
- num 仅由数字（0 - 9）组成



## 思路

区分开头为0，回溯

## 解法
```java

class Solution {
        public boolean isAdditiveNumber(String num) {
        for (int i = 1; i < num.length(); i++) {
            long k = 0;
            for (int j = 0; j < i; j++) { // k, l 分别代表两加数，j为分裂的位置
                k = k * 10 + (num.charAt(j) - '0'); // 计算第一个数的值
                long l = 0;
                if (j > 0 && num.charAt(0) == '0') break; // 如果第一个数开头是0并且此时长度大于1，则直接结束循环
                if (i - j - 1 > 0 && num.charAt(j + 1) == '0') continue; // 如果第二个数开头是0且长度大于1，则跳过此次分裂
                for (int m = j + 1; m <= i; m++) l = l * 10 + (num.charAt(m) - '0'); // 计算第二个数的值
                if (backtrack(num, k, l, i + 1)) return true; // 如果组成累加数，返回true
            }
        }
        return false;
    }

    public boolean backtrack(String num, long i, long j, int idx) {
        long n = 0;
        for (int k = idx; k < num.length(); k++) {
            n = n * 10 + (num.charAt(k) - '0'); // 计算两数可能的和
            if (i + j == n) {
                if (k == num.length() - 1 || backtrack(num, j, n, k + 1)) return true;
            }
            if (num.charAt(idx) == '0' || n > i + j) break; // 如果第一个位置上为0或此时和大于两数之和，则退出循环，不用再继续累加和
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
