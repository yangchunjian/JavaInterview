---
title: 翻转图像
date: 2022-10-22 20:13:59
permalink: /pages/cd1abe/
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

给定一个 n x n 的二进制矩阵 image ，先 水平 翻转图像，然后 反转 图像并返回 结果 。

水平翻转图片就是将图片的每一行都进行翻转，即逆序。

- 例如，水平翻转 [1,1,0] 的结果是 [0,1,1]。

反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。

- 例如，反转 [0,1,1] 的结果是 [1,0,0]。

示例 1：

    输入：image = [[1,1,0],[1,0,1],[0,0,0]]
    输出：[[1,0,0],[0,1,0],[1,1,1]]
    解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
         然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
示例 2：

    输入：image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
    输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
    解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
         然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

提示：

- n == image.length
- n == image[i].length
- 1 <= n <= 20
- images[i][j] == 0 或 1.


## 思路

Arrays.toString

## 解法
```java

class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
        int[][] result = new int[A.length][];
        for (int i = 0; i < A.length; i++) {
            String str = new StringBuilder(Arrays.toString(A[i])).reverse().toString();
            str = str.replace("[", "");
            str = str.replace("]", "");
            str = str.replace("0", "2");
            str = str.replace("1", "0");
            str = str.replace("2", "1");
            str = str.replace(" ", "");
            String[] strs = str.split(",");
            result[i] = getNumbs(strs);
        }
        return result;
    }

    private int[] getNumbs(String[] strs) {
        int[] numbs = new int[strs.length];
        for (int i = 0; i < strs.length; i++) {
            numbs[i] = Integer.parseInt(strs[i]);
        }
        return numbs;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
