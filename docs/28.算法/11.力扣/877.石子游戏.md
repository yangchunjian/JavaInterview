---
title: 石子游戏
date: 2022-10-26 11:39:50
permalink: /pages/4a9cbe/
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

Alice 和 Bob 用几堆石子在做游戏。一共有偶数堆石子，排成一行；每堆都有 正 整数颗石子，数目为 piles[i] 。

游戏以谁手中的石子最多来决出胜负。石子的 总数 是 奇数 ，所以没有平局。

Alice 和 Bob 轮流进行，Alice 先开始 。 每回合，玩家从行的 开始 或 结束 处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中 石子最多 的玩家 获胜 。

假设 Alice 和 Bob 都发挥出最佳水平，当 Alice 赢得比赛时返回 true ，当 Bob 赢得比赛时返回 false 。

 

示例 1：

    输入：piles = [5,3,4,5]
    输出：true
    解释：
    Alice 先开始，只能拿前 5 颗或后 5 颗石子 。
    假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
    如果 Bob 拿走前 3 颗，那么剩下的是 [4,5]，Alice 拿走后 5 颗赢得 10 分。
    如果 Bob 拿走后 5 颗，那么剩下的是 [3,4]，Alice 拿走后 4 颗赢得 9 分。
    这表明，取前 5 颗石子对 Alice 来说是一个胜利的举动，所以返回 true 。
示例 2：

    输入：piles = [3,7,2,3]
    输出：true
 

提示：

- 2 <= piles.length <= 500
- piles.length 是 偶数
- 1 <= piles[i] <= 500
- sum(piles[i]) 是 奇数


## 思路

        //dp其实就是存储了递归过程中的数值
        //dps[i][j]代表从i到j所能获得的最大的绝对分数
        //（比如为1就说明亚历克斯从i到j可以赢李1分）
        //如何计算dps[i][j]呢:max(piles[i]-dp[i+1][j],piles[j]-dp[i][j-1]);
        //这里减去dps数组是因为李也要找到最大的
        //最后dps=[5 2 4 1]
        //        [0 3 1 4]
        //        [0 0 4 1]
        //        [0 0 0 5]

## 解法
```java

class Solution {
    
    public boolean stoneGame(int[] piles) {
        //dp其实就是存储了递归过程中的数值
        //dps[i][j]代表从i到j所能获得的最大的绝对分数
        //（比如为1就说明亚历克斯从i到j可以赢李1分）
        //如何计算dps[i][j]呢:max(piles[i]-dp[i+1][j],piles[j]-dp[i][j-1]);
        //这里减去dps数组是因为李也要找到最大的
        //最后dps=[5 2 4 1]
        //        [0 3 1 4]
        //        [0 0 4 1]
        //        [0 0 0 5]
        int n=piles.length;
        int [][]dps=new int[n][n];
        //dps[i][i]存储当前i的石子数
        for(int i=0;i<n;i++)
            dps[i][i]=piles[i];
        //d=1,其实代表，先算两个子的时候
        for(int d=1;d<n;d++)
        {
            //有多少组要比较
            for(int j=0;j<n-d;j++)
            {
                //比较j到d+j
                dps[j][d+j]=Math.max(piles[j]-dps[j+1][d+j],piles[d+j]-dps[j][d+j-1]);
            }
        }
        return dps[0][n-1]>0;
}}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
