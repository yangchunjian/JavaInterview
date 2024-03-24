---
title: 矩阵中的幻方
date: 2022-10-23 19:44:54
permalink: /pages/889ed8/
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

3 x 3 的幻方是一个填充有 从 1 到 9  的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

给定一个由整数组成的row x col 的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。

 

示例 1：



    输入: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]
    输出: 1
    解释: 
    下面的子矩阵是一个 3 x 3 的幻方：
    
    而这一个不是：
    
    总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
示例 2:

    输出: grid = [[8]]
    输入: 0
 

提示:

- row == grid.length
- col == grid[i].length
- 1 <= row, col <= 10
- 0 <= grid[i][j] <= 15


## 思路

3x3 幻方中心必为 5，且各数之和必为 15

## 解法
```java

class Solution {
    public int numMagicSquaresInside(int[][] grid) {

            // 3x3 幻方中心必为 5，且各数之和必为 15
        int m = grid.length, n = grid[0].length;
        int res = 0;
        for (int i = 1; i < m - 1; i++) {
            for (int j = 1; j < n - 1; j++) {
                if (grid[i][j] == 5) {
                    res += check(grid, i, j);
                }
            }
        }
        return res;
    }

    int check(int[][] grid, int x, int y) {
        int[] cnt = new int[11];
        for (int i = x - 1; i <= x + 1; i++) {
            for (int j = y - 1; j <= y + 1; j++) {
                if (grid[i][j] < 1 || grid[i][j] > 9) return 0;
                cnt[grid[i][j]]++;
                if (cnt[grid[i][j]] > 1) return 0;
            }
        }
        // 行,列
        for (int i = -1; i <= 1; i++) {
            if (grid[x + i][y - 1] + grid[x + i][y] + grid[x + i][y + 1] != 15) return 0;
            if (grid[x - 1][y + i] + grid[x][y + i] + grid[x + 1][y + i] != 15) return 0;
        }
        // 对角
        if (grid[x - 1][y - 1] + grid[x][y] + grid[x + 1][y + 1] != 15 || grid[x - 1][y + 1] + grid[x][y] + grid[x + 1][y - 1] != 15) return 0;
        return 1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
