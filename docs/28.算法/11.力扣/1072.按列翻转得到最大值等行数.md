---
title: 按列翻转得到最大值等行数
date: 2022-11-27 19:27:10
permalink: /pages/073b39/
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

给定 m x n 矩阵 matrix 。

你可以从中选出任意数量的列并翻转其上的 每个 单元格。（即翻转后，单元格的值从 0 变成 1，或者从 1 变为 0 。）

返回 经过一些翻转后，行与行之间所有值都相等的最大行数 。

 

示例 1：

    输入：matrix = [[0,1],[1,1]]
    输出：1
    解释：不进行翻转，有 1 行所有值都相等。
示例 2：

    输入：matrix = [[0,1],[1,0]]
    输出：2
    解释：翻转第一列的值之后，这两行都由相等的值组成。
示例 3：

    输入：matrix = [[0,0,0],[0,0,1],[1,1,0]]
    输出：2
    解释：翻转前两列的值之后，后两行由相等的值组成。
 

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] == 0 或 1

## 思路

Map<String, Integer>

## 解法
```java

class Solution {
    public int maxEqualRowsAfterFlips(int[][] matrix) {
        Map<String, Integer> groupBy = new HashMap<>();
        int cnt = 0;
        for (int[] info : matrix) {
            String a = "";
            String b = "";
            for (int i : info) {
                a += i;
                b += (1 ^ i);
            }
            groupBy.put(a, groupBy.getOrDefault(a, 0) + 1);
            cnt = Math.max(groupBy.get(a) + groupBy.getOrDefault(b, 0), cnt);
        }
        return cnt;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
