---
title: 带因子的二叉树
date: 2022-10-21 11:57:01
permalink: /pages/0fbfb9/
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

给出一个含有不重复整数元素的数组 arr ，每个整数 arr[i] 均大于 1。

用这些整数来构建二叉树，每个整数可以使用任意次数。其中：每个非叶结点的值应等于它的两个子结点的值的乘积。

满足条件的二叉树一共有多少个？答案可能很大，返回 对 109 + 7 取余 的结果。

 

示例 1:

    输入: arr = [2, 4]
    输出: 3
    解释: 可以得到这些二叉树: [2], [4], [4, 2, 2]
示例 2:

    输入: arr = [2, 4, 5, 10]
    输出: 7
    解释: 可以得到这些二叉树: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
 

提示：

- 1 <= arr.length <= 1000
- 2 <= arr[i] <= 10<sup>9</sup>
- arr 中的所有值 互不相同

## 思路

因为都大于1，乘积肯定更大，排序后针对每个数求两个因子的情况，双指针，配合数组记录，最后叠加

## 解法
```java

class Solution {
    // 因为都大于1，乘积肯定更大，排序后针对每个数求两个因子的情况，双指针，配合数组记录，最后叠加


    public int numFactoredBinaryTrees(int[] arr) {
        Arrays.sort(arr);
        int n = arr.length;
        long[] info = new long[n];
        for (int i = 0; i < n; i++) info[i] = 1;
        for (int i = 1; i < n; i++)
        {
            long cur = arr[i];
            int L = 0;
            int R = i - 1;
            while (L <= R)
            {
                long mutiply = (long)arr[L] * arr[R];
                if (mutiply > cur) R--;
                else if (mutiply < cur) L++;
                else info[i] = (info[i] + (L == R ? 1 : 2) * info[L++] * info[R--]) % 1000000007;
            }
        }
        int sum = 0;
        for (int i = 0; i < n; i++) sum = (sum + (int)info[i]) % 1000000007;
        return sum;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
