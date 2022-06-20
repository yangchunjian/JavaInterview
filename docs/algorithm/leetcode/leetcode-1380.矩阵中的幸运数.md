---
title: 矩阵中的幸运数
date: 2022-06-20 23:50:26
permalink: /pages/6a1659/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 题目

给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

幸运数 是指矩阵中满足同时下列两个条件的元素：

- 在同一行的所有元素中最小
- 在同一列的所有元素中最大

示例 1：

    输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
    输出：[15]
    解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
示例 2：

    输入：matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
    输出：[12]
    解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
示例 3：

    输入：matrix = [[7,8],[1,2]]
    输出：[7]
    解释：7是唯一的幸运数字，因为它是行中的最小值，列中的最大值。
 

提示：

- m == mat.length
- n == mat[i].length
- 1 <= n, m <= 50
- 1 <= matrix[i][j] <= 10^5
- 矩阵中的所有元素都是不同的


## 思路

先算出行最小值A1，记录角标，然后算角标的列，算这列最小值是否是A1，是的话就记录下来

## 解法
```java

class Solution {
    public List<Integer> luckyNumbers (int[][] matrix) {
        List<Integer> res = new ArrayList<>();
        //行数
        int col = matrix.length;
        //列数
        int row = matrix[0].length;
        
        for (int i = 0 ;i< col;i++){
            //记录当前行第一个值作为最小值 进行初始化
            int colMin = matrix[i][0];
            //用于记录当前行最小值的下标
            int idx = 0;
             //对当前行的每一个元素进行遍历找到最小值
            for (int j = 0 ;j< row;j++){
                //滚动变量进行记录
                colMin = Math.min(colMin,matrix[i][j]);
                //将当前行的最小值的坐标赋给idx
                if (colMin == matrix[i][j])idx = j;
            }
            //对于每一列的第一个元素作为最大值进行初始化
            int rowMax = matrix[0][idx];
            //遍历当前第i行所在最小元素的idx列逐一遍历
            for (int j = 0 ;j<col;j++){
                //滚动变量记录当前idx列中的最大值
                rowMax = Math.max(rowMax,matrix[j][idx]);
            }
            //如果这个值既是当前行的最小值 又是idx列的最大值 那么他就是幸运数 添加到结果中即可
            if (colMin == rowMax)res.add(colMin);
        }
        return res ;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
