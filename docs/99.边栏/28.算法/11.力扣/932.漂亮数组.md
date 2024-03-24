---
title: 漂亮数组
date: 2022-10-31 19:31:27
permalink: /pages/f16502/
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

对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：

对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。

那么数组 A 是漂亮数组。

 

给定 N，返回任意漂亮数组 A（保证存在一个）。

 

示例 1：

    输入：4
    输出：[2,1,4,3]
示例 2：

    输入：5
    输出：[3,1,2,5,4]
     

提示：

- 1 <= N <= 1000

## 思路

    /* A 是漂亮数组，则 a * A + b 也是漂亮数组 
     * A 为奇数漂亮数组，B 为偶数漂亮数组，A + B 为漂亮数组
     * 数组两两配对，左数组 * 2 - 1 一定是奇数组，右数组 * 2 一定为偶数组，合并一定为漂亮数组
     * 假设 [1] 是最小漂亮数组，按照上面规律递推得到的一定是漂亮数组。 
     * |1|1|1|1|1|1|1|1|
     * |1 2|1 2|1 2|1 2|
     * |1 3 2 4|1 3 2 4|
     * |1 5 3 7 2 6 4 8|
     */


## 解法
```java

class Solution {
    /* A 是漂亮数组，则 a * A + b 也是漂亮数组 
     * A 为奇数漂亮数组，B 为偶数漂亮数组，A + B 为漂亮数组
     * 数组两两配对，左数组 * 2 - 1 一定是奇数组，右数组 * 2 一定为偶数组，合并一定为漂亮数组
     * 假设 [1] 是最小漂亮数组，按照上面规律递推得到的一定是漂亮数组。 
     * |1|1|1|1|1|1|1|1|
     * |1 2|1 2|1 2|1 2|
     * |1 3 2 4|1 3 2 4|
     * |1 5 3 7 2 6 4 8|
     */
    public int[] beautifulArray(int N) {

        int[] a = new int[N];
        Arrays.fill(a, 1);
        part(a, 0, N - 1);
        return a;
    }
    public void part(int[] a, int lo, int hi) {
        if (hi <= lo) return;
        int mid = lo + (hi - lo) / 2;
        part(a, lo, mid);
        part(a, mid + 1, hi);
        for (int i = lo; i <= mid; i++) {
            a[i] = 2 * a[i] - 1;
        } 
        for (int i = mid + 1; i <= hi; i++) {
            a[i] = 2 * a[i];
        }
        return;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
