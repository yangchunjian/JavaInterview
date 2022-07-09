---
title: 接雨水 II
date: 2022-06-25 11:56:31
permalink: /pages/6e4908/
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

给你一个 m x n 的矩阵，其中的值均为非负整数，代表二维高度图每个单元的高度，请计算图中形状最多能接多少体积的雨水。

 

示例 1:

![](../../../media/pictures/leetcode/trap1-3d.jpeg)

    输入: heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
    输出: 4
    解释: 下雨后，雨水将会被上图蓝色的方块中。总的接雨水量为1+2+1=4。
示例 2:

![](../../../media/pictures/leetcode/trap2-3d.jpeg)

    输入: heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
    输出: 10
 

提示:

- m == heightMap.length
- n == heightMap[i].length
- 1 <= m, n <= 200
- 0 <= heightMap[i][j] <= 2 * 10<sup>4</sup>



## 思路

PriorityQueue

## 解法
```java

class Solution {
    public int trapRainWater(int[][] heightMap) {

        int m=heightMap.length;
        int n=heightMap[0].length;
        //备忘录
        boolean [][]visited=new boolean[m][n];
        //根据高度构建最小堆
        PriorityQueue<int[]> pq=new PriorityQueue<>((a1,a2)->{
            return a1[2]-a2[2];
        });
        //先把最外围加入最小堆
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i==0||i==m-1||j==0||j==n-1){
                    pq.offer(new int[]{i,j,heightMap[i][j]});
                    visited[i][j]=true;
                }
            }
        }
        int result=0;
        //出队，往四周方向寻找更小的进行灌水
        while (!pq.isEmpty()){
            int[] poll = pq.poll();
            int x = poll[0];
            int y = poll[1];
            int height = poll[2];
            //左
            if (x-1>=0&&!visited[x-1][y]){
                if (heightMap[x-1][y]<height){
                    //可以灌水
                    result+=height-heightMap[x-1][y];
                    //灌水后的格子成为外围之一
                    pq.offer(new int[]{x-1,y,height});
                }
                else {
                    //没灌水也成为外围
                    pq.offer(new int[]{x - 1, y, heightMap[x - 1][y]});
                }
                visited[x-1][y]=true;
            }
            //右
            if (x+1<m&&!visited[x+1][y]){
                if (heightMap[x+1][y]<height){
                    //可以灌水
                    result+=height-heightMap[x+1][y];
                    //灌水后的格子成为外围之一
                    pq.offer(new int[]{x+1,y,height});
                }else {
                    //没灌水也成为外围
                    pq.offer(new int[]{x + 1, y, heightMap[x + 1][y]});
                }
                visited[x+1][y]=true;
            }
            //下
            if (y-1>=0&&!visited[x][y-1]){
                if (heightMap[x][y-1]<height){
                    //可以灌水
                    result+=height-heightMap[x][y-1];
                    //灌水后的格子成为外围之一
                    pq.offer(new int[]{x,y-1,height});
                }else {
                    //没灌水也成为外围
                    pq.offer(new int[]{x, y - 1, heightMap[x][y - 1]});
                }
                visited[x][y-1]=true;
            }
            //上
            if (y+1<n&&!visited[x][y+1]){
                if (heightMap[x][y+1]<height){
                    //可以灌水
                    result+=height-heightMap[x][y+1];
                    //灌水后的格子成为外围之一
                    pq.offer(new int[]{x,y+1,height});
                }else {
                    //没灌水也成为外围
                    pq.offer(new int[]{x, y + 1, heightMap[x][y + 1]});
                }
                visited[x][y+1]=true;
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
