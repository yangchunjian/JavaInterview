---
title: 零钱兑换
date: 2022-06-16 00:18:40
permalink: /pages/0c0821/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---


## 题目

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 

示例 1：

    输入：coins = [1, 2, 5], amount = 11
    输出：3 
    解释：11 = 5 + 5 + 1
示例 2：

    输入：coins = [2], amount = 3
    输出：-1
示例 3：

    输入：coins = [1], amount = 0
    输出：0
 

提示：

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2<sup>31</sup> - 1
- 0 <= amount <= 10<sup>4</sup>



## 思路

动态规划，寻找状态转移方程

## 解法
```java

class Solution {
    //应该是动态规划问题

    public int coinChange(int[] coins, int amount) {
        //初始化amount+1长度的数组
        //temp表示凑成i钱，最少需要的硬币个数为temp[i]
        //寻找状态转移方程
        //当前coins[i]表示当前币值
        int coinsLength = coins.length;

        int[] temp = new int[amount+1];
        Arrays.fill(temp,Integer.MAX_VALUE);
        temp[0] = 0;

        for(int i=1;i<=amount;i++){
            //从前往回遍历，因为应该先知道数组角标最小的值
            for(int j=0;j<coinsLength;j++){
                //金币的最小面额
                int minCoins = coins[j];
                //计算剩余需要凑的面额
                int left = i - minCoins;
                if(left>=0 && temp[left]!=Integer.MAX_VALUE){

                    //当前遍历的凑成i钱，最少需要的硬币个数应该是：当前的硬币个数和 剩余需要凑的面额个数+1 之间的最小值
                    temp[i] =Math.min(temp[i],temp[left]+1);
                }
            }

            
        }

        return temp[amount]==Integer.MAX_VALUE?-1:temp[amount];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
