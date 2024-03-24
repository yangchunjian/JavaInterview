---
title: 股票价格跨度
date: 2022-10-25 13:44:22
permalink: /pages/693391/
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

设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度 。

当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

- 例如，如果未来 7 天股票的价格是 [100,80,60,70,60,75,85]，那么股票跨度将是 [1,1,1,2,1,4,6] 。

实现 StockSpanner 类：

- StockSpanner() 初始化类对象。
- int next(int price) 给出今天的股价 price ，返回该股票当日价格的 跨度 。

示例：

    输入：
    ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
    [[], [100], [80], [60], [70], [60], [75], [85]]
    输出：
    [null, 1, 1, 1, 2, 1, 4, 6]
    
    解释：
    StockSpanner stockSpanner = new StockSpanner();
    stockSpanner.next(100); // 返回 1
    stockSpanner.next(80);  // 返回 1
    stockSpanner.next(60);  // 返回 1
    stockSpanner.next(70);  // 返回 2
    stockSpanner.next(60);  // 返回 1
    stockSpanner.next(75);  // 返回 4 ，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
    stockSpanner.next(85);  // 返回 6
 
提示：

- 1 <= price <= 10<sup>5</sup>
- 最多调用 next 方法 10<sup>4</sup> 次


## 思路

ArrayList

## 解法
```java

class StockSpanner {
    // 存储每个股票的值和跨度
    ArrayList<int[]> data;

    public StockSpanner() {
        data = new ArrayList<>();
    }
    
    public int next(int price) {
        int i = data.size() - 1, res = 1;
        int[] item;
        // 根据每个值的坐标跨度快速统计
        while (i >= 0) {
            item = data.get(i);
            if (item[0] <= price) {
                i -= item[1];
                res += item[1];
            } else break;
        }
        data.add(new int[]{price, res});
        return res;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
