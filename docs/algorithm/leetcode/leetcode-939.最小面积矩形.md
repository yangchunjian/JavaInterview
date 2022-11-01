---
title: 最小面积矩形
date: 2022-11-01 10:31:41
permalink: /pages/8a52e0/
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

给定在 xy 平面上的一组点，确定由这些点组成的矩形的最小面积，其中矩形的边平行于 x 轴和 y 轴。

如果没有任何矩形，就返回 0。

 

示例 1：

    输入：[[1,1],[1,3],[3,1],[3,3],[2,2]]
    输出：4
示例 2：

    输入：[[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
    输出：2
 

提示：

- 1 <= points.length <= 500
- 0 <= points[i][0] <= 40000
- 0 <= points[i][1] <= 40000
- 所有的点都是不同的。


## 思路

把二维的点变换到一维去，然后放入set进行，选两个点作为对角线然后检测另外两个点。这个方法比较巧妙

## 解法
```java

class Solution {
    // 把二维的点变换到一维去，然后放入set进行，选两个点作为对角线然后检测另外两个点。这个方法比较巧妙


    public int minAreaRect(int[][] points) {
        Set<Integer> set = new HashSet<>();
        int res = Integer.MAX_VALUE;
        final int MAX = 40000;
        for (int[] point : points) {
            for (int[] anotherPoint : points) {
                if (point[0] == anotherPoint[0] || point[1] == anotherPoint[1])
                    continue;
                if (set.contains(point[0] * MAX + anotherPoint[1]) && set.contains(anotherPoint[0] * MAX + point[1])) 
                    res = Math.min(res, Math.abs((point[0] - anotherPoint[0]) * (point[1] - anotherPoint[1])));
            }
            set.add(point[0] * MAX + point[1]);
        }
        return res == Integer.MAX_VALUE ? 0 : res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
