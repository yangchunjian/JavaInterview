---
title: 01矩阵
date: 2022-09-04 23:38:11
permalink: /pages/d60c68/
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

给定一个由 0 和 1 组成的矩阵 mat ，

请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

 

示例 1：

![](../../../media/pictures/leetcode/1626667201-NCWmuP-image.png)


输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0,0],[0,1,0],[0,0,0]]
示例 2：

![](../../../media/pictures/leetcode/1626667205-xFxIeK-image.png)

输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
输出：[[0,0,0],[0,1,0],[1,2,1]]
 

提示：

- m == mat.length
- n == mat[i].length
- 1 <= m, n <= 10<sup>4</sup>
- 1 <= m * n <= 10<sup>4</sup>
- mat[i][j] is either 0 or 1.
- mat 中至少有一个 0 


## 思路

//存储所有 0 的位置，入队，然后遍历队列，如果四周存在 1 ，那么设置步数，然后添加进队列

## 解法
```java

class Solution {
    public int[][] updateMatrix(int[][] matrix) {
    //存储所有 0 的位置，入队，然后遍历队列，如果四周存在 1 ，那么设置步数，然后添加进队列
    
        /*
        BFS

        如果某个位置本身是 0，那么到 0 的距离为 0
        如果某个位置上下左右存在 一个以上的 0，那么距离为 1

        */
        Queue<int[]> queue = new LinkedList<>();
        int rlen = matrix.length;
        int llen = matrix[0].length;
        for(int i = 0; i < rlen; i++){
            for(int j = 0; j < llen; j++){
                if(matrix[i][j] == 0){
                    queue.add(new int[]{i, j});
                }
            }
        }
        int[][] pos = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        int[][] res = new int[rlen][llen];
        int step = 0;
        while(!queue.isEmpty()){
            step++;
            int size = queue.size();
            while(size -- > 0){
                int[] p = queue.poll();
                for(int i = 0; i < 4; i++){
                    int x = p[0] + pos[i][0];
                    int y = p[1] + pos[i][1];
                    if(x >= 0 && x < rlen && y >= 0 && y < llen && matrix[x][y] == 1){
                        matrix[x][y] = 0;
                        res[x][y] = step;
                        queue.add(new int[]{x, y});
                    }
                }
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
