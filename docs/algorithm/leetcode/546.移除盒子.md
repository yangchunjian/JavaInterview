---
title: 移除盒子
date: 2022-09-05 11:51:12
permalink: /pages/6db5eb/
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

给出一些不同颜色的盒子 boxes ，盒子的颜色由不同的正数表示。

你将经过若干轮操作去去掉盒子，直到所有的盒子都去掉为止。每一轮你可以移除具有相同颜色的连续 k 个盒子（k >= 1），

这样一轮之后你将得到 k * k 个积分。

返回 你能获得的最大积分和 。

 

示例 1：

    输入：boxes = [1,3,2,2,2,3,4,3,1]
    输出：23
    解释：
    [1, 3, 2, 2, 2, 3, 4, 3, 1] 
    ----> [1, 3, 3, 4, 3, 1] (3*3=9 分) 
    ----> [1, 3, 3, 3, 1] (1*1=1 分) 
    ----> [1, 1] (3*3=9 分) 
    ----> [] (2*2=4 分)
示例 2：

    输入：boxes = [1,1,1]
    输出：9
示例 3：

    输入：boxes = [1]
    输出：1
 

提示：

- 1 <= boxes.length <= 100
- 1 <= boxes[i] <= 100



## 思路



## 解法
```java

class Solution {
    
    public int removeBoxes(int[] boxes) {
        return helper(boxes, 0, boxes.length - 1, 0, new int[100][100][100]);
	}

	private static int helper(int[] boxes, int i, int j, int k, int[][][] dp) {
		if (i > j)
			return 0;
		if (dp[i][j][k] > 0)
			return dp[i][j][k];
		int res = (k + 1) * (k + 1) + helper(boxes, i + 1, j, 0, dp);
		for (int m = i + 1; m <= j; m++) {
			if (boxes[i] == boxes[m])
				res = Math.max(res, helper(boxes, i + 1, m - 1, 0, dp) + helper(boxes, m, j, k + 1, dp));
		}
		return dp[i][j][k] = res;
	}
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
