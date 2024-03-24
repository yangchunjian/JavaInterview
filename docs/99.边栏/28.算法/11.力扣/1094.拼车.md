---
title: 拼车
date: 2022-11-29 19:25:35
permalink: /pages/60a7ba/
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

车上最初有 capacity 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

给定整数 capacity 和一个数组 trips ,  trip[i] = [numPassengersi, fromi, toi] 表示第 i 次旅行有 numPassengersi 乘客，接他们和放他们的位置分别是 fromi 和 toi 。这些位置是从汽车的初始位置向东的公里数。

当且仅当你可以在所有给定的行程中接送所有乘客时，返回 true，否则请返回 false。

 

示例 1：

输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false
示例 2：

输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true
 

提示：

- 1 <= trips.length <= 1000
- trips[i].length == 3
- 1 <= numPassengersi <= 100
- 0 <= fromi < toi <= 1000
- 1 <= capacity <= 10<sup>5</sup>

## 思路

差分数组

## 解法
```java

class Solution {
    public boolean carPooling(int[][] trips, int capacity) {
        //差分数组
        int[]arr=new int[1001];
        for(int i=0;i<trips.length;i++){
            int[]v=trips[i];
            arr[v[1]]+=v[0];
            arr[v[2]]-=v[0];
        }
        int pre=0;
        for(int i=0;i<arr.length;i++){
            pre+=arr[i];
            if(pre>capacity) return false;
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
