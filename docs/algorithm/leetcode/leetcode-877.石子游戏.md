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

    /**
    dp[i][j]表示从第i到j堆石头，Alex（先手）能领先Lee（后手）的最大分值。
        1.Alex拿走第j堆，则相当于变成：Alex初始分数为piles[j-1]，第i到j-1堆，且Lee先手。
            dp[i][j] = piles[j-1] + (-dp[i][j-1])
        2.Alex拿走第i堆，则相当于变成：Alex初始分数为piles[i-1]，第i+1到j堆，且Lee先手。
            dp[i][j] = piles[i-1] + (-dp[i+1][j])
        二者取大。
     */
     
## 解法
```java

class Solution {
    /**
dp[i][j]表示从第i到j堆石头，Alex（先手）能领先Lee（后手）的最大分值。
    1.Alex拿走第j堆，则相当于变成：Alex初始分数为piles[j-1]，第i到j-1堆，且Lee先手。
        dp[i][j] = piles[j-1] + (-dp[i][j-1])
    2.Alex拿走第i堆，则相当于变成：Alex初始分数为piles[i-1]，第i+1到j堆，且Lee先手。
        dp[i][j] = piles[i-1] + (-dp[i+1][j])
    二者取大。
 */
    public boolean stoneGame(int[] piles) {
        int[][] dp = new int[piles.length+1][piles.length+1];
        for (int i=1; i<=piles.length; ++i){    // 只有一堆石头时，先手能领先的最大分值就是这堆石头的数量。
            dp[i][i] = piles[i-1];
        }
        for (int len=1; len<=piles.length; ++len){  // 先遍历区间长度
            for (int i=1; i+len<=piles.length; ++i){
                int j = i+len;
                dp[i][j] = Math.max(piles[j-1]-dp[i][j-1], piles[i-1]-dp[i+1][j]);
            }  
        }
        return dp[1][piles.length]>=0;    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
