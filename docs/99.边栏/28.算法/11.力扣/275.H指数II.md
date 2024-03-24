---
title: H指数II
date: 2022-05-25 14:53:03
permalink: /pages/d43f89/
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
titleTag: Java
---

## 题目
给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。

h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。

提示：如果 h 有多种可能的值，h 指数 是其中最大的那个。

请你设计并实现对数时间复杂度的算法解决此问题。

 

示例 1：

    输入：citations = [0,1,3,5,6]
    输出：3 
    解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
         由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3 。
示例 2：

    输入：citations = [1,2,100]
    输出：2
 

提示：

- n == citations.length
- 1 <= n <= 10<sup>5</sup>
- 0 <= citations[i] <= 1000
- citations 按 升序排列




## 思路

给出一个带注释的代码：我们需要找一个mid，从mid开始到最后的文章数记为paperCnt，

这些paper的最低引用数量要大于等于paperCnt（hIndex定义），那么我们只看最低的引用数量是否大于paperCnt就行了，也就是只看citations[mid]是不是大于等于paperCnt就行了。


## 解法
```java

class Solution {
    
    public int hIndex(int[] citations) {
        int len = citations.length;
        int start = 0;
        int end = len - 1;
        int res = 0;

        while (start <= end) {
            int mid = (start + end) >> 1;
            int paperCnt = len - mid;
            // len - mid 代表从mid到len到论文数量，若想len - mid作为hIndex
            // 则要求从mid到len中最低引用的那篇论文的citations就大于等于len - mid（也就是citations[mid]>=paperCnt）。
            // 若满足这个条件，我们尝试能不能让hIndex更大些，也就是mid往左一些，那么我们就调整end = mid - 1
            // 若条件不满足，我们让mid向右面移动，这样paperCnt就少了，同时citations[mid]也大了，我们再看看从mid开始到len能不能作为hIndex
            if (paperCnt <= citations[mid]) {
                res = paperCnt;
                end = mid - 1;
            } else
                start = mid + 1;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
