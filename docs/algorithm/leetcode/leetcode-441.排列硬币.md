---
title: 排列硬币
date: 2022-06-17 22:31:25
permalink: /pages/da241c/
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

你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。

给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。

 

示例 1：


    输入：n = 5
    输出：2
    解释：因为第三行不完整，所以返回 2 。
示例 2：


    输入：n = 8
    输出：3
    解释：因为第四行不完整，所以返回 3 。
 

提示：

1 <= n <= 2<sup>31</sup> - 1


## 思路

递归思想，每次加上比上一次大1的数，如果最终结果大于n，返回当前行的上一行i-1;

## 解法
```java

class Solution {
    // java, 递归思想，每次加上比上一次大1的数，如果最终结果大于n，返回当前行的上一行i-1;

    long sum = 0;  //为防止越界，这里定义为long型数据。
    public int getNum(int n, int i){
        sum += i;
        if(sum > n) return i-1;  //当前sum大于n时，说明当前行节点数不够i，应该返回上一行的节点数i-1
        else if(n == sum) return i;
        return getNum(n, i+1);
    }

    public int arrangeCoins(int n) {
        return getNum(n, 0);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
