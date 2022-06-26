---
title: 优美的排列
date: 2022-06-25 11:56:31
permalink: /pages/869146/
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

假设有从 1 到 n 的 n 个整数。用这些整数构造一个数组 perm（下标从 1 开始），只要满足下述条件 之一 ，该数组就是一个 优美的排列 ：

    perm[i] 能够被 i 整除
    i 能够被 perm[i] 整除
    给你一个整数 n ，返回可以构造的 优美排列 的 数量 。

 

示例 1：

    输入：n = 2
    输出：2
    解释：
    第 1 个优美的排列是 [1,2]：
        - perm[1] = 1 能被 i = 1 整除
        - perm[2] = 2 能被 i = 2 整除
    第 2 个优美的排列是 [2,1]:
        - perm[1] = 2 能被 i = 1 整除
        - i = 2 能被 perm[2] = 1 整除
示例 2：

    输入：n = 1
    输出：1
 

提示：

    1 <= n <= 15


## 思路

    //思路就是回溯法，与全排列等同
    //DFS搜索，每前进一步，必须满足两个条件之一，分情况往下走(全排列问题)


## 解法
```java

class Solution {
//思路就是回溯法，与全排列等同
//DFS搜索，每前进一步，必须满足两个条件之一，分情况往下走(全排列问题)

int count=0;

public int countArrangement(int N) {
    int[] visited=new int[N+1];
    countArrangement(1,N,visited);
    return count;
}
public void countArrangement(int step,int N,int[] visited)
{
    if(step==N+1)
    {
        count++;
        return;
    }
    for(int i=1;i<=N;i++)
    {
        //用过的不能再次使用，避免重复
        if(visited[i]==0)
        {
        visited[i]=1;
        //限制条件进行，剪枝
        if(i%step==0||step%i==0)
        {             
           countArrangement(step+1,N,visited); 
        }
        visited[i]=0;
        }
    }
    
}
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
