---
title: 删除一次得到子数组最大和
date: 2022-05-16 23:42:13
permalink: /pages/fdf2dd/
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

给你一个整数数组，返回它的某个 非空 子数组（连续元素）在执行一次可选的删除操作后，所能得到的最大元素总和。换句话说，你可以从原数组中选出一个子数组，并可以决定要不要从中删除一个元素（只能删一次哦），（删除后）子数组中至少应当有一个元素，然后该子数组（剩下）的元素总和是所有子数组之中最大的。

注意，删除一个元素后，子数组 不能为空。

 

示例 1：

    输入：arr = [1,-2,0,3]
    输出：4
    解释：我们可以选出 [1, -2, 0, 3]，然后删掉 -2，这样得到 [1, 0, 3]，和最大。
示例 2：

    输入：arr = [1,-2,-2,3]
    输出：3
    解释：我们直接选出 [3]，这就是最大和。
示例 3：

    输入：arr = [-1,-1,-1,-1]
    输出：-1
    解释：最后得到的子数组不能为空，所以我们不能选择 [-1] 并从中删去 -1 来得到 0。
         我们应该直接选择 [-1]，或者选择 [-1, -1] 再从中删去一个 -1。
     

提示：

- 1 <= arr.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= arr[i] <= 10<sup>4</sup>


## 思路

二维数组，寻找状态转移方程，求最大解

## 解法
```java

class Solution {
    public int maximumSum(int[] arr) {
        int n = arr.length;
        int[][] dp = new int[n][2];// dp[i][0] // 没有删除数  dp[i][1] : 删除了一个数

        int res = arr[0];
        dp[0][0] = arr[0];
        dp[0][1] = arr[0];
        for (int i = 1; i < dp.length; i++) {
            dp[i][0] = Math.max(dp[i - 1][0] + arr[i], arr[i]);//就是求 最大的连续子数组的和
            dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1] + arr[i]);//删了前面的或者当前这一个
            res = Math.max(Math.max(dp[i][0], dp[i][1]), res);
        }
        return res;
    }
}
```