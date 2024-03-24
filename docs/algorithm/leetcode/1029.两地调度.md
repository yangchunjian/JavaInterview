---
title: 两地调度
date: 2022-11-28 21:58:55
permalink: /pages/bb87c7/
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

公司计划面试 2n 人。给你一个数组 costs ，其中 costs[i] = [aCosti, bCosti] 。第 i 人飞往 a 市的费用为 aCosti ，飞往 b 市的费用为 bCosti 。

返回将每个人都飞到 a 、b 中某座城市的最低费用，要求每个城市都有 n 人抵达。

 

示例 1：

    输入：costs = [[10,20],[30,200],[400,50],[30,20]]
    输出：110
    解释：
    第一个人去 a 市，费用为 10。
    第二个人去 a 市，费用为 30。
    第三个人去 b 市，费用为 50。
    第四个人去 b 市，费用为 20。
    
    最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。
示例 2：

    输入：costs = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
    输出：1859
示例 3：

    输入：costs = [[515,563],[451,713],[537,709],[343,819],[855,779],[457,60],[650,359],[631,42]]
    输出：3086
 

提示：

- 2 * n == costs.length
- 2 <= costs.length <= 100
- costs.length 为偶数
- 1 <= aCosti, bCosti <= 1000

## 思路

java 首先假设全部去A市，再从其中找出去b市更便宜的n个

## 解法
```java

class Solution {
    // java 首先假设全部去A市，再从其中找出去b市更便宜的n个


    public int twoCitySchedCost(int[][] costs) {
        //首先假设全部去A市，再从其中找出去b市比较便宜的n个
        int ret = 0;
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>();
        for (int[] i : costs){
            ret += i[0];
            pq.add(i[1] - i[0]);
        }

        for (int i = 0; i < costs.length / 2 ; i++) {
            ret += pq.poll();
        }
        return ret;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
