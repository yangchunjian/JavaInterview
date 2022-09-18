---
title: 只有两个键的键盘
date: 2022-09-18 22:27:06
permalink: /pages/bc5f68/
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

最初记事本上只有一个字符 'A' 。你每次可以对这个记事本进行两种操作：

- Copy All（复制全部）：复制这个记事本中的所有字符（不允许仅复制部分字符）。
- Paste（粘贴）：粘贴 上一次 复制的字符。

给你一个数字 n ，你需要使用最少的操作次数，在记事本上输出 恰好 n 个 'A' 。返回能够打印出 n 个 'A' 的最少操作次数。

 

示例 1：

    输入：3
    输出：3
    解释：
    最初, 只有一个字符 'A'。
    第 1 步, 使用 Copy All 操作。
    第 2 步, 使用 Paste 操作来获得 'AA'。
    第 3 步, 使用 Paste 操作来获得 'AAA'。
示例 2：

    输入：n = 1
    输出：0
 

提示：

- 1 <= n <= 1000


## 思路

n>1时 其实就是将n分解为m个数字的乘积 且m个数字的和最小 即把一个数分解为n个质数的和 从小到大的去试探

## 解法
```java

class Solution {
    // n>1时 其实就是将n分解为m个数字的乘积 且m个数字的和最小 即把一个数分解为n个质数的和 从小到大的去试探


    public int minSteps(int n) {
        int res = 0;
        for (int i = 2; i <= n; i++) {
            while (n % i == 0) {
                res += i;
                n /= i;
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
