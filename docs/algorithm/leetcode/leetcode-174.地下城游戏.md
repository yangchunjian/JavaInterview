---
title: 地下城游戏
date: 2022-05-23 14:23:02
permalink: /pages/ba92d2/
categories:
  - algorithm
  - leetcode
tags:
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---



## 题目

一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。

骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。

有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。

为了尽快到达公主，骑士决定每次只向右或向下移动一步。

 

编写一个函数来计算确保骑士能够拯救到公主所需的最低初始健康点数。

例如，考虑到如下布局的地下城，如果骑士遵循最佳路径 右 -> 右 -> 下 -> 下，则骑士的初始健康点数至少为 7。


    -2 (K)	-3	3
    -5	-10	1
    10	30	-5 (P)
 

说明:

- 骑士的健康点数没有上限。

- 任何房间都可能对骑士的健康点数造成威胁，也可能增加骑士的健康点数，包括骑士进入的左上角房间以及公主被监禁的右下角房间。


## 思路

动态规划，二维数组，两个for循环，从后往前变量，寻找状态转移方程


## 解法
```java

class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        int row=dungeon.length;
        int col=dungeon[0].length;
        //这个数组表示在i,j位置骑士需要的最小生命值
        int[][] dp=new int[row][col];
        for(int i=row-1;i>=0;i--){
        	for(int j=col-1;j>=0;j--){
        		if(i==row-1&&j==col-1){ //终点的情况
        			dp[i][j]=Math.max(1, 1-dungeon[i][j]);
        		}else if(i==row-1){ //最后一行的情况
        			dp[i][j]=Math.max(1, dp[i][j+1]-dungeon[i][j]);
        		}else if(j==col-1){ //最后一列的情况
        			dp[i][j]=Math.max(1, dp[i+1][j]-dungeon[i][j]);
        		}else{	
        			dp[i][j]=Math.max(1, Math.min(dp[i+1][j],dp[i][j+1])-dungeon[i][j]);
        		}
        	}
        }
        return dp[0][0];
    }
}


```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
