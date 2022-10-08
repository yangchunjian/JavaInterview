---
title: 到达终点
date: 2022-10-08 22:22:33
permalink: /pages/42a062/
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

给定四个整数 sx , sy ，tx 和 ty，如果通过一系列的转换可以从起点 (sx, sy) 到达终点 (tx, ty)，则返回 true，否则返回 false。

从点 (x, y) 可以转换到 (x, x+y)  或者 (x+y, y)。

 

示例 1:

    输入: sx = 1, sy = 1, tx = 3, ty = 5
    输出: true
    解释:
    可以通过以下一系列转换从起点转换到终点：
    (1, 1) -> (1, 2)
    (1, 2) -> (3, 2)
    (3, 2) -> (3, 5)
示例 2:

    输入: sx = 1, sy = 1, tx = 2, ty = 2 
    输出: false
示例 3:

    输入: sx = 1, sy = 1, tx = 1, ty = 1 
    输出: true
 

提示:

- 1 <= sx, sy, tx, ty <= 10<sup>9</sup>

## 思路

    // 由于本题按照题目给的思路正向一步一步走下去会存在多种情况，我们可以逆向推导。反推起点，因为这样只存在两种种情况。

    // if : tx > ty then : tx = tx % ty
    // if : ty > tx then : ty = ty % tx


## 解法
```java

class Solution {
    // 由于本题按照题目给的思路正向一步一步走下去会存在多种情况，我们可以逆向推导。反推起点，因为这样只存在两种种情况。

    // if : tx > ty then : tx = tx % ty
    // if : ty > tx then : ty = ty % tx
    public boolean reachingPoints(int sx, int sy, int tx, int ty) {
        while (tx >= sx && ty >= sy) {
            if (tx == sx && ty == sy) {
                break;
            } // if (tx == sx && ty == sy)

            if (tx > ty) {
                tx -= Math.max(1, (tx - sx) / ty) * ty;
            } // if (tx > ty)
            else {
                ty -= Math.max(1, (ty - sy) / tx) * tx;
            } // else
        } // while (tx > sx && ty > sy)

        return tx == sx && ty == sy;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
