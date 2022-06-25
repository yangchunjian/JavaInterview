---
title: 二叉树寻路
date: 2022-05-13 23:33:11
permalink: /pages/e7b3a8/
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

在一棵无限的二叉树上，每个节点都有两个子节点，树中的节点 逐行 依次按 “之” 字形进行标记。

如下图所示，在奇数行（即，第一行、第三行、第五行……）中，按从左到右的顺序进行标记；

而偶数行（即，第二行、第四行、第六行……）中，按从右到左的顺序进行标记。



给你树上某一个节点的标号 label，请你返回从根节点到该标号为 label 节点的路径，该路径是由途经的节点标号所组成的。

 

示例 1：

![](../../../media/pictures/leetcode/tree(2).png)

    输入：label = 14
    输出：[1,3,4,14]
示例 2：

    输入：label = 26
    输出：[1,2,6,10,26]
 

提示：

- 1 <= label <= 10^6


## 思路

找规律，从底向上，然后再反转

## 解法
```java


class Solution {
    //如果二叉树都是从左到右排列的话，子节点/2=父节点，
    //转换成之字形无非就是找出子节点/2的对称节点

    public List<Integer> pathInZigZagTree(int label) {
    List<Integer> ans=new ArrayList<>();
    int i=1,n=0;
    while(i<=label){
      i*=2;
      n++;
    }
    while(n>=1){
        ans.add(label);
        label/=2;
         i/=2;
        label=i-1+i/2-label;
        n--;
    }
    Collections.reverse(ans);
    return ans;
    }
}
```