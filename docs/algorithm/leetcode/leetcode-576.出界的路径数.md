---
title: 出界的路径数
date: 2022-07-24 20:46:34
permalink: /pages/52a133/
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

给你一个大小为 m x n 的网格和一个球。球的起始坐标为 [startRow, startColumn] 。你可以将球移到在四个方向上相邻的单元格内（可以穿过网格边界到达网格之外）。你 最多 可以移动 maxMove 次球。

给你五个整数 m、n、maxMove、startRow 以及 startColumn
，找出并返回可以将球移出边界的路径数量。因为答案可能非常大，返回对 10<sup>9</sup>
\+ 7 取余 后的结果。

 

示例 1：

![](../../../media/pictures/leetcode/out_of_boundary_paths_1.png)

    输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
    输出：6
示例 2：

![](../../../media/pictures/leetcode/out_of_boundary_paths_2.png)

    输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
    输出：12
 

提示：

- 1 <= m, n <= 50
- 0 <= maxMove <= 50
- 0 <= startRow < m
- 0 <= startColumn < n



## 思路

        /**
        动态规划, dp[i][j][k]表示从(i, j)开始在k步内移除边界的路径数. 
        可知dp[i][j][k]只与(i, j)四周邻接点在k-1步内移除边界的路径数有关. 
        dp[i][j][k] = dp[i-1][j][k-1] + dp[i+1][j][k-1] + dp[i][j-1][k-1] + dp[i][j+1][k-1];
        空间优化: 可以看出重复利用一个二维数组储存路径数即可(k-1步更新之后就无需保存)
        **/
        
        /* 无空间优化版
        if(N <= 0) return 0;
        int mod = 1000000007;
        int[][][] dp = new int[m][n][N+1];
        
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        for(int k = 1; k <= N; ++k) {
            for(int x = 0; x < m; ++x) {
                for(int y = 0; y < n; ++y) {
                    for(int[] dir : dirs) {
                        int nx = x + dir[0];
                        int ny = y + dir[1];
                        // 边界处理, 无论在第几步只要位置处于边界都包含一步出界的情况
                        if(nx < 0 || nx >= m || ny < 0 || ny >= n) 
                            dp[x][y][k] += 1;
                        else
                            dp[x][y][k] = (dp[x][y][k] + dp[nx][ny][k-1]) % mod;
                    }
                }
            }
        }
        
        return dp[i][j][N];
        */

## 解法
```java

class Solution {
    public int findPaths(int m, int n, int N, int i, int j) {

        /**
        动态规划, dp[i][j][k]表示从(i, j)开始在k步内移除边界的路径数. 
        可知dp[i][j][k]只与(i, j)四周邻接点在k-1步内移除边界的路径数有关. 
        dp[i][j][k] = dp[i-1][j][k-1] + dp[i+1][j][k-1] + dp[i][j-1][k-1] + dp[i][j+1][k-1];
        空间优化: 可以看出重复利用一个二维数组储存路径数即可(k-1步更新之后就无需保存)
        **/
        
        /* 无空间优化版
        if(N <= 0) return 0;
        int mod = 1000000007;
        int[][][] dp = new int[m][n][N+1];
        
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        for(int k = 1; k <= N; ++k) {
            for(int x = 0; x < m; ++x) {
                for(int y = 0; y < n; ++y) {
                    for(int[] dir : dirs) {
                        int nx = x + dir[0];
                        int ny = y + dir[1];
                        // 边界处理, 无论在第几步只要位置处于边界都包含一步出界的情况
                        if(nx < 0 || nx >= m || ny < 0 || ny >= n) 
                            dp[x][y][k] += 1;
                        else
                            dp[x][y][k] = (dp[x][y][k] + dp[nx][ny][k-1]) % mod;
                    }
                }
            }
        }
        
        return dp[i][j][N];
        */
        
        // 带有空间优化
        if(N <= 0) return 0;
        int mod = 1000000007;
        int ret = 0;
        int[][] dp = new int[m][n]; // 保存第k步的结果
        int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        for(int k = 1; k <= N; ++k) {
            int[][] temp = new int[m][n]; // 保存第k-1步的结果
            for(int x = 0; x < m; ++x) {
                for(int y = 0; y < n; ++y) {
                    for(int[] dir : dirs) {
                        int nx = x + dir[0];
                        int ny = y + dir[1];
                        if(nx < 0 || nx >= m || ny < 0 || ny >= n)
                            temp[x][y] += 1;
                        else
                            temp[x][y] = (dp[nx][ny] + temp[x][y]) % mod;
                    }
                }
            }
            dp = temp;
        }
        
        return dp[i][j];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
