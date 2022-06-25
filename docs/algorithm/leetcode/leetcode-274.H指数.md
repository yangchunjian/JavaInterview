---
title: H指数
date: 2022-05-25 14:35:24
permalink: /pages/9d7bb9/
categories: 
  - algorithm
  - leetcode
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---


## 题目
给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。计算并返回该研究者的 h 指数。

根据维基百科上 h 指数的定义：h 代表“高引用次数”，一名科研人员的 h指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。

如果 h 有多种可能的值，h 指数 是其中最大的那个。

 

示例 1：

    输入：citations = [3,0,6,1,5]
    输出：3 
    解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
         由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
示例 2：

    输入：citations = [1,3,1]
    输出：1
 

提示：

- n == citations.length
- 1 <= n <= 5000
- 0 <= citations[i] <= 1000


## 思路

    /* 
    * 思路：
    *
    * 1、首先看到h个元素大于等于某个值，N-h个元素小于等于某个值，这显然是一个有序序列的特征，所以自然而然的想到先将数组排序；
    * 
    * 2、将数组排序之后，对于给定的某个i，我们知道有citations.length - i篇论文的引用数 ≥ citations[i]，i篇
    *    论文的引用数 ≤ citations[i]；
    * 
    * 3、不妨设h = citations.length - i，即至多有h篇论文分别引用了至少citation[i]次，其余citations.length - h篇论文的引用数不多于citation[i]次。
    既然如此，只要citation[i] ≥ h，就满足题意。
    */


## 解法
```java

class Solution {
    /* 
    * 思路：
    *
    * 1、首先看到h个元素大于等于某个值，N-h个元素小于等于某个值，这显然是一个有序序列的特征，所以自然而然的想到先将数组排序；
    * 
    * 2、将数组排序之后，对于给定的某个i，我们知道有citations.length - i篇论文的引用数 ≥ citations[i]，i篇
    *    论文的引用数 ≤ citations[i]；
    * 
    * 3、不妨设h = citations.length - i，即至多有h篇论文分别引用了至少citation[i]次，其余citations.length - h篇论文的引用数不多于citation[i]次。
    既然如此，只要citation[i] ≥ h，就满足题意。
    */

    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        for (int i = 0; i < citations.length; i++) {
            int h = citations.length - i;
            if (h <= citations[i]) {
                return h;
            }
        }
        return 0;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
