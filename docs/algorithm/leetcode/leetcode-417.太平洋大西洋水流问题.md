---
title: 太平洋大西洋水流问题.
date: 2022-06-25 11:56:31
permalink: /pages/06c3df/
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

有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。

 

示例 1：



    输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
    输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
示例 2：

    输入: heights = [[2,1],[1,2]]
    输出: [[0,0],[0,1],[1,0],[1,1]]
 

提示：

- m == heights.length
- n == heights[r].length
- 1 <= m, n <= 200
- 0 <= heights[r][c] <= 10<sup>5</sup>

## 思路

dfs

## 解法
```java

class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] matrix) {

        List<List<Integer>> ret = new ArrayList<>();
        int m = matrix.length;
        if(m < 1) return ret;
        int n = matrix[0].length;
        boolean[][] Pacific = new boolean[m][n];
        boolean[][] Atlantic = new boolean[m][n];
        for(int i = 0; i < m; ++i) {
            dfs(matrix, i, 0, Pacific, matrix[i][0]);
            dfs(matrix, i, n-1, Atlantic, matrix[i][n-1]);
        }
        for(int i = 0; i < n; ++i) {
            dfs(matrix, 0, i, Pacific, matrix[0][i]);
            dfs(matrix, m-1, i, Atlantic, matrix[m-1][i]); 
        }
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j)
                if(Pacific[i][j] && Atlantic[i][j])
                    ret.add(Arrays.asList(i, j));
        }
        return ret;
    }
    
    private void dfs(int[][] m, int x, int y, boolean[][] visited, int pre) {
        if(x < 0 || y < 0 || x >= m.length || y >= m[0].length || visited[x][y] || m[x][y] < pre) 
            return;
        visited[x][y] = true;
        dfs(m, x+1, y, visited, m[x][y]);
        dfs(m, x-1, y, visited, m[x][y]);
        dfs(m, x, y+1, visited, m[x][y]);
        dfs(m, x, y-1, visited, m[x][y]);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
