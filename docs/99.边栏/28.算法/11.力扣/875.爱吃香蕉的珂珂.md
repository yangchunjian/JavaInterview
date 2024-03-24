---
title: 爱吃香蕉的珂珂
date: 2022-10-26 11:20:14
permalink: /pages/84be03/
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

珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

 

示例 1：

    输入：piles = [3,6,7,11], h = 8
    输出：4
示例 2：

    输入：piles = [30,11,23,4,20], h = 5
    输出：30
示例 3：

    输入：piles = [30,11,23,4,20], h = 6
    输出：23
 

提示：

- 1 <= piles.length <= 10<sup>4</sup>
- piles.length <= h <= 10<sup>9</sup>
- 1 <= piles[i] <= 10<sup>9</sup>


## 思路

二分

## 解法
```java

class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        //left 最小吃香蕉速度 这里肯定是1
        int left = 1;
        //right 最大吃香蕉速度, 这里看到 提示:H<=10^9 我们取+1 即表示搜索区间左闭右开
        int right = 1000000000 + 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (f(piles, mid) <= h) {
                right = mid;
            } else if (f(piles, mid) > h) {
                left = mid + 1;
            }
        }
        return left;
    }

    int f(int[] piles, int x) {//x:吃香蕉速度 f(x):吃香蕉时间  随着x增加单调递减
        //计算出吃完所有香蕉需要花费时间
        int hour = 0;
        for (int i = 0; i < piles.length; i++) {
            //遍历每一堆香蕉,如果是速度的整数倍,就能在该阶段吃完
            hour += piles[i] / x;
            if (piles[i] % x > 0) {
                hour++;
            }
        }
        return hour;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
