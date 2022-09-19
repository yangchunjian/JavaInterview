---
title: 有效的正方形
date: 2022-09-19 19:12:00
permalink: /pages/57c9f6/
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

给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。

点的坐标 pi 表示为 [xi, yi] 。 输入没有任何顺序 。

一个 有效的正方形 有四条等边和四个等角(90度角)。

 

示例 1:

    输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
    输出: True
示例 2:

    输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
    输出：false
示例 3:

    输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
    输出：true
 

提示:

- p1.length == p2.length == p3.length == p4.length == 2
- -10<sup>4</sup> <= xi, yi <= 10<sup>4</sup>


## 思路

    任选三个点都是直角三角形

## 解法
```java

class Solution {
    // 任选三个点都是直角三角形


    public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {

            //任选三个点 都是 一个直角三角形
        return isRightTriangle(p1, p2, p3) && isRightTriangle(p1, p2, p4) && isRightTriangle(p1, p3, p4) && isRightTriangle(p2, p3, p4);
    }

    public boolean isRightTriangle(int[] p1, int[]p2, int[] p3){
        int d1 = (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
        int d2 = (p2[0] - p3[0]) * (p2[0] - p3[0]) + (p2[1] - p3[1]) * (p2[1] - p3[1]);
        int d3 = (p3[0] - p1[0]) * (p3[0] - p1[0]) + (p3[1] - p1[1]) * (p3[1] - p1[1]);
        if(d1 > d2 && d2 == d3 && d2 + d3 == d1 ||
            d2 > d1 && d1 == d3 && d1 + d3 == d2 ||
            d3 > d1 && d1 == d2 && d1 + d2 == d3){
            return true;
        }
        return false;
    }

}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
