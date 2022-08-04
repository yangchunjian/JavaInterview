---
title: 非重叠矩形中的随机点
date: 2022-08-04 00:07:59
permalink: /pages/6ddc9f/
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

给定一个由非重叠的轴对齐矩形的数组 rects ，其中 rects[i] = [ai, bi, xi, yi] 表示 (ai, bi) 是第 i 个矩形的左下角点，(xi, yi) 是第 i 个矩形的右上角点。设计一个算法来随机挑选一个被某一矩形覆盖的整数点。矩形周长上的点也算做是被矩形覆盖。所有满足要求的点必须等概率被返回。

在给定的矩形覆盖的空间内的任何整数点都有可能被返回。

请注意 ，整数点是具有整数坐标的点。

实现 Solution 类:

- Solution(int[][] rects) 用给定的矩形数组 rects 初始化对象。
- int[] pick() 返回一个随机的整数点 [u, v] 在给定的矩形所覆盖的空间内。

示例 1：

![](../../../media/pictures/leetcode/lc-pickrandomrec.jpeg)


    输入: 
    ["Solution", "pick", "pick", "pick", "pick", "pick"]
    [[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]
    输出: 
    [null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]]
    
    解释：
    Solution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);
    solution.pick(); // 返回 [1, -2]
    solution.pick(); // 返回 [1, -1]
    solution.pick(); // 返回 [-1, -2]
    solution.pick(); // 返回 [-2, -2]
    solution.pick(); // 返回 [0, 0]
 

提示：

- 1 <= rects.length <= 100
- rects[i].length == 4
- -10<sup>9</sup> <= ai < xi <= 10<sup>9</sup>
- -10<sup>9</sup> <= bi < yi <= 10<sup>9</sup>
- xi - ai <= 2000
- yi - bi <= 2000
- 所有的矩形不重叠。
- pick 最多被调用 10<sup>4</sup> 次。


## 思路

数组

## 解法
```java

class Solution {

    int[] areas;
    int[][] rects;
    public Solution(int[][] rects) {

        //先根据每一个矩阵点的数量按加权概率选取矩阵
        //再等概率地选取矩阵中的各点
        this.rects = rects;
        areas = new int[rects.length];
        areas[0] =  (rects[0][2] - rects[0][0] + 1) * (rects[0][3] - rects[0][1] + 1);
        for(int i = 1;i < rects.length;i++){
            areas[i] = areas[i - 1] + (rects[i][2] - rects[i][0] + 1) * (rects[i][3] - rects[i][1] + 1);
            System.out.println(areas[i]);
        }
    }
    
    public int[] pick() {

        //随机选取[1,areas[areas.length - 1]]
        int num = (int)(Math.random() * areas[areas.length - 1] + 1);
        int i = 0;
        for(;i < areas.length;i++){
            if(num <= areas[i]) break;
        }
        int x = (int)(Math.random() * (rects[i][2] - rects[i][0] + 1)) + rects[i][0];
        int y = (int)(Math.random() * (rects[i][3] - rects[i][1] + 1)) + rects[i][1];
        return new int[]{x,y};
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(rects);
 * int[] param_1 = obj.pick();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
