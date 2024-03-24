---
title: 第K个语法符号
date: 2022-10-08 21:43:45
permalink: /pages/7b2eec/
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

我们构建了一个包含 n 行( 索引从 1  开始 )的表。首先在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。

- 例如，对于 n = 3 ，第 1 行是 0 ，第 2 行是 01 ，第3行是 0110 。

给定行数 n 和序数 k，返回第 n 行中第 k 个字符。（ k 从索引 1 开始）


示例 1:

    输入: n = 1, k = 1
    输出: 0
    解释: 第一行：0
示例 2:

    输入: n = 2, k = 1
    输出: 0
    解释: 
    第一行: 0 
    第二行: 01
示例 3:

    输入: n = 2, k = 2
    输出: 1
    解释:
    第一行: 0
    第二行: 01
 

提示:

- 1 <= n <= 30
- 1 <= k <= 2<sup>n</sup> - 1


## 思路

找规律，父节点

## 解法
```java

class Solution {
    public int kthGrammar(int N, int K) {
        if(N==1 && K==1)
            return 0;
        int a=kthGrammar(N-1,(K+1)/2);  //求父结点的值；(K+1)/2为父结点的序号
        int b=-(a-1);   //若a=0则b=1,若a=1则b=0
        if(K%2==1)
            return a;   //K为奇数则其值与父结点相同
        else
            return b;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
