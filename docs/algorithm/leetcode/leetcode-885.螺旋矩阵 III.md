---
title: 螺旋矩阵 III
date: 2022-10-27 10:00:40
permalink: /pages/78fe76/
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

在 R 行 C 列的矩阵上，我们从 (r0, c0) 面朝东面开始

这里，网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。

现在，我们以顺时针按螺旋状行走，访问此网格中的每个位置。

每当我们移动到网格的边界之外时，我们会继续在网格之外行走（但稍后可能会返回到网格边界）。

最终，我们到过网格的所有 R * C 个空间。

按照访问顺序返回表示网格位置的坐标列表。

 

示例 1：

    输入：R = 1, C = 4, r0 = 0, c0 = 0
    输出：[[0,0],[0,1],[0,2],[0,3]]

![](../../../media/pictures/leetcode/example_1.png)

 

示例 2：

    输入：R = 5, C = 6, r0 = 1, c0 = 4
    输出：[[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]

![](../../../media/pictures/leetcode/example_2.png)

 

提示：

- 1 <= R <= 100
- 1 <= C <= 100
- 0 <= r0 < R
- 0 <= c0 < C


## 思路

dir是方向指针，分别是dx和dy的下标0123

## 解法
```java

class Solution {
    public int[][] spiralMatrixIII(int R, int C, int r0, int c0) {
       int[][] ans = new int[R*C][2];
        int i = r0;
        int j = c0;
        int pos = 0;
        int step = 1;
        //dir是方向指针，分别是dx和dy的下标0123
        int dir = 0;
        int[] dx = { 0, 1, 0, -1};
        int[] dy = { 1, 0, -1, 0};
        ans[pos++] = new int[]{i, j};

        while( pos < R*C ){
            for( int k=0; k<step; k++ ){
                i += dx[dir]; j += dy[dir];
                if( i>=0 && i<R && j>=0 && j<C ){
                    ans[pos][0] = i;
                    ans[pos][1] = j;
                    pos++; 
                }
            }
            dir = (dir+1)%4;
            if( dir==2 || dir ==0 )step++;//两次加一次步长
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
