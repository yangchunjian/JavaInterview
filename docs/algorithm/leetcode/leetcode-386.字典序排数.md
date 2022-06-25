---
title: 字典序排数
date: 2022-06-21 23:31:21
permalink: /pages/d4c623/
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

给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。

你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。

 

示例 1：

    输入：n = 13
    输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
示例 2：

    输入：n = 2
    输出：[1,2]
 

提示：

1 <= n <= 5 * 10<sup>4</sup>


## 思路

    // 10叉树先序遍历

## 解法
```java

class Solution {
    // 10叉树先序遍历


    List<Integer> res=new ArrayList<>();

    public List<Integer> lexicalOrder(int n) {
        for(int i=1;i<=9;i++){
            dfs(i,n);   
        }
        return res;
    }

    public void dfs(int cur,int n){
        if(cur>n) return;
        res.add(cur);
        for(int i=0;i<=9;i++){
            dfs(cur*10+i,n);   
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
