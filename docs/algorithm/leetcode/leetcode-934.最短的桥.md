---
title: 最短的桥
date: 2022-11-01 10:18:34
permalink: /pages/82db05/
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

给你一个大小为 n x n 的二元矩阵 grid ，其中 1 表示陆地，0 表示水域。

岛 是由四面相连的 1 形成的一个最大组，即不会与非组内的任何其他 1 相连。grid 中 恰好存在两座岛 。

你可以将任意数量的 0 变为 1 ，以使两座岛连接起来，变成 一座岛 。

返回必须翻转的 0 的最小数目。

 

示例 1：

    输入：grid = [[0,1],[1,0]]
    输出：1
示例 2：

    输入：grid = [[0,1,0],[0,0,0],[0,0,1]]
    输出：2
示例 3：

    输入：grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
    输出：1
 

提示：

- n == grid.length == grid[i].length
- 2 <= n <= 100
- grid[i][j] 为 0 或 1
- grid 中恰有两个岛


## 思路

一次bfs、一次dfs。先找出第一个岛的所有节点，为进行区分，可改变其坐标对应值,再找出第二个岛，将第二个岛的所有坐标加入一个队列中，从队列中弹出元素，取其上下左右进行判断，如果为1或者数组越界，则continue，为2时说明两岛已经连通，返回step，为0时，将坐标加入到队列中。遍历完队列中一次的所有元素时，说明一次扩散已完毕。重复遍历，直至两岛连通，返回step。

## 解法
```java

class Solution {
    // 一次bfs、一次dfs。先找出第一个岛的所有节点，为进行区分，可改变其坐标对应值,再找出第二个岛，将第二个岛的所有坐标加入一个队列中，从队列中弹出元素，取其上下左右进行判断，如果为1或者数组越界，则continue，为2时说明两岛已经连通，返回step，为0时，将坐标加入到队列中。遍历完队列中一次的所有元素时，说明一次扩散已完毕。重复遍历，直至两岛连通，返回step。


    public int shortestBridge(int[][] A) {
        int[][] dir = new int[][]{{0,1},{0,-1},{1,0},{-1,0}};
		Queue<int[]> queue =  new LinkedList<>();
		int row = A.length;
		int column = A[0].length;
		boolean flag = false;
		int step = 0;
		for (int i = 0;i<row;i++){
		 	for (int j = 0;j<column;j++){
		 		if (!flag && A[i][j] == 1){
		 			dfs(A,i,j);
		 			flag = true;
		 		}
		 		if (flag && A[i][j] == 1){
		 			queue.offer(new int[]{i,j});
		 		}
		 	}
		}
		while(!queue.isEmpty()){
			int size = queue.size();
			for (int m = 0;m < size; m++){
				int[] temp = queue.poll();
				for (int[] d:dir){
					int x = temp[0] + d[0];
					int y = temp[1] + d[1];
					if (x<0 || x>=A.length || y< 0 || y >= A[0].length || A[x][y] == 1)
						continue;
					if (A[x][y] == 2)
						return step;
					if (A[x][y] == 0){
						A[x][y] = 1;
						queue.offer(new int[]{x,y});
					}

				}				
			}
            step++;
		}
		return 1;
	}
	public void dfs(int[][] A,int row ,int col){
		if (row< 0 || col<0 ||row>=A.length || col>=A[0].length || A[row][col]==0 || A[row][col]==2){
			return;
		}
		A[row][col] = 2;
		dfs(A,row,col+1);
		dfs(A,row+1,col);
		dfs(A,row,col-1);
		dfs(A,row-1,col);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
