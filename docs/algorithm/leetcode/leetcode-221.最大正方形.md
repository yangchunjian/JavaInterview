---
title: 最大正方形
date: 2022-05-24 17:08:26
permalink: /pages/e3aa98/
categories:
  - algorithm
  - leetcode
tags:
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 题目
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

 

示例 1：

![](../../../media/pictures/leetcode/max1grid.jpeg)

    输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
    输出：4
示例 2：

![](../../../media/pictures/leetcode/max2grid.jpeg)

    输入：matrix = [["0","1"],["1","0"]]
    输出：1
示例 3：

    输入：matrix = [["0"]]
    输出：0
 

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] 为 '0' 或 '1'


## 思路

二维数组，寻找递推公式：

        dp[i][j]表示以第i行第j列为右下角所能构成的最大正方形边长, 则递推式为: 
        dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);


## 解法
```java

class Solution {
    public int maximalSquare(char[][] matrix) {
        /**
        dp[i][j]表示以第i行第j列为右下角所能构成的最大正方形边长, 则递推式为: 
        dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
        **/
        int m = matrix.length;
        if(m < 1) return 0;
        int n = matrix[0].length;
        int max = 0;
        int[][] dp = new int[m+1][n+1];
        
        for(int i = 1; i <= m; ++i) {
            for(int j = 1; j <= n; ++j) {
                if(matrix[i-1][j-1] == '1') {
                    dp[i][j] = 1 + Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1]));
                    max = Math.max(max, dp[i][j]); 
                }
            }
        }
        
        return max*max;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
