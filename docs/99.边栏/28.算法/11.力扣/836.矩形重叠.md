---
title: 矩形重叠
date: 2022-10-23 19:10:31
permalink: /pages/016dc4/
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

矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。矩形的上下边平行于 x 轴，左右边平行于 y 轴。

如果相交的面积为 正 ，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形 rec1 和 rec2 。如果它们重叠，返回 true；否则，返回 false 。

 

示例 1：

    输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
    输出：true
示例 2：

    输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
    输出：false
示例 3：

    输入：rec1 = [0,0,1,1], rec2 = [2,2,3,3]
    输出：false
 

提示：

- rect1.length == 4
- rect2.length == 4
- -109 <= rec1[i], rec2[i] <= 10<sup>9</sup>
- rec1 和 rec2 表示一个面积不为零的有效矩形

## 思路

矩形如果不重叠，从x轴和y轴上看两个矩形就变成了两条线段，

这两条线段肯定是不相交的，也就是说左边的矩形的最右边小于右边矩形的最左边，

也就是rec1[2] < rec2[0] || rec2[2] < rec1[0]；y轴同理，

下面的矩形的最上边小于上面矩形的最下边，也就是rec1[3] < rec2[1] || rec2[3] < rec1[1]。

因为题目要求重叠算相离，所以加上=，最后取反就行啦~

## 解法
```java

class Solution {
    // 矩形如果不重叠，从x轴和y轴上看两个矩形就变成了两条线段，这两条线段肯定是不相交的，也就是说左边的矩形的最右边小于右边矩形的最左边，也就是rec1[2] < rec2[0] || rec2[2] < rec1[0]；y轴同理，下面的矩形的最上边小于上面矩形的最下边，也就是rec1[3] < rec2[1] || rec2[3] < rec1[1]。因为题目要求重叠算相离，所以加上=，最后取反就行啦~
    public boolean isRectangleOverlap(int[] rec1, int[] rec2) {
        return !(rec1[2] <= rec2[0] || rec2[2] <= rec1[0] || rec1[3] <= rec2[1] || rec2[3] <= rec1[1]);

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
