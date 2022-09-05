---
title: 对角线遍历
date: 2022-09-05 09:08:05
permalink: /pages/434e03/
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

给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

 

示例 1：


    输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
    输出：[1,2,4,7,5,3,6,8,9]
示例 2：

    输入：mat = [[1,2],[3,4]]
    输出：[1,2,3,4]
 

提示：

- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 10<sup>4</sup>
- 1 <= m * n <= 10<sup>4</sup>
- -10<sup>5</sup> <= mat[i][j] <= 10<sup>5</sup>



## 思路

定义两个临时遍历int r = 0, c = 0;，根据行+列的奇偶，确定遍历方向

## 解法
```java

class Solution {
    public int[] findDiagonalOrder(int[][] matrix) {

    if (matrix == null || matrix.length == 0) {
        return new int[]{};
    }
    int r = 0, c = 0;
    int row = matrix.length, col = matrix[0].length;
    int[] res = new int[row * col];
    for (int i = 0; i < res.length; i++) {
        res[i] = matrix[r][c];
        // r + c 即为遍历的层数，偶数向上遍历，奇数向下遍历
        if ((r + c) % 2 == 0) {
            if (c == col - 1) {
                // 往下移动一格准备向下遍历
                r++;
            } else if (r == 0) {
                // 往右移动一格准备向下遍历
                c++;
            } else {
                // 往上移动
                r--;
                c++;
            }
        } else {
            if (r == row - 1) {
                // 往右移动一格准备向上遍历
                c++;
            } else if (c == 0) {
                // 往下移动一格准备向上遍历
                r++;
            } else {
                // 往下移动
                r++;
                c--;
            }
        }
    }
    return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
