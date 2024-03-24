---
title: 买卖股票的最佳时机含手续费
date: 2022-10-03 19:33:59
permalink: /pages/9e8f36/
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

给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。

你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

返回获得利润的最大值。

注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

 

示例 1：

    输入：prices = [1, 3, 2, 8, 4, 9], fee = 2
    输出：8
    解释：能够达到的最大利润:  
    在此处买入 prices[0] = 1
    在此处卖出 prices[3] = 8
    在此处买入 prices[4] = 4
    在此处卖出 prices[5] = 9
    总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8
示例 2：

    输入：prices = [1,3,7,5,10,3], fee = 3
    输出：6
 

提示：

- 1 <= prices.length <= 5 * 10<sup>4</sup>
- 1 <= prices[i] < 5 * 10<sup>4</sup>
- 0 <= fee < 5 * 10<sup>4</sup>

## 思路

// 本身带交易费的买入，后面高于这个部分的，都是利润；

## 解法
```java

class Solution {
    public int maxProfit(int[] prices, int fee) {
        if (prices.length == 1) return 0; // 长度为1，没有交易空间；
 
        int base = prices[0] + fee; // 本身带交易费的买入，后面高于这个部分的，都是利润；
        int profit = 0;

        for (int i = 1; i < prices.length; ++i) {
            if (prices[i] > base) { // 高于的，都是利润；
                profit += prices[i] - base;
                base = prices[i]; // 一直往上走；
            }
            else if (prices[i] + fee < base) { // 一旦遇到下降，说明利润达到顶点了，转为下滑；
                // 不断试探，最低点（买入点）在哪里；但是只要遇到高点，if语句就会加入利润
                base = prices[i] + fee;
            }
        }

        return profit;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
