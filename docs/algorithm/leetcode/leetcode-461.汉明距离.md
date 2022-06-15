---
title: 汉明距离
date: 2022-06-15 23:44:31
permalink: /pages/6f1412/
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
两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

 

示例 1：

    输入：x = 1, y = 4
    输出：2
    解释：
    1   (0 0 0 1)
    4   (0 1 0 0)
           ↑   ↑
    上面的箭头指出了对应二进制位不同的位置。
示例 2：

    输入：x = 3, y = 1
    输出：1
 

提示：

- 0 <= x, y <= 2<sup>31</sup> - 1


## 思路

^ & 使用

## 解法
```java

class Solution {
    public int hammingDistance(int x, int y) {
    int d = 0;
    int z = x ^ y;
    while (z != 0) {
        z = z & (z - 1);
        d++;
    }
    return d;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
