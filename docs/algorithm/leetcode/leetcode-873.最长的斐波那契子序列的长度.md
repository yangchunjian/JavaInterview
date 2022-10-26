---
title: 最长的斐波那契子序列的长度
date: 2022-10-26 10:38:54
permalink: /pages/5c4b29/
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



## 思路

就是每次从A中找前两个数，然后查看后续符合斐波那契的数在A中有没有。复杂度O(n^2 * log2n) 空间复杂度O(1)

## 解法
```java

class Solution {
    // 就是每次从A中找前两个数，然后查看后续符合斐波那契的数在A中有没有。复杂度O(n^2 * log2n) 空间复杂度O(1)


    public int lenLongestFibSubseq(int[] A) {
        //从i开始，下一个是j
        int max = 2;
        for(int i = 0; i < A.length; i++){
            for(int j = i + 1; j < A.length; j++){
                int tmpI = A[i];
                int tmpJ = A[j];
                int sum = tmpI + tmpJ;
                int cur = 2;
                //存在
                while(Arrays.binarySearch(A, sum) >= 0){
                    tmpI = tmpJ;
                    tmpJ = sum;
                    sum = tmpI + tmpJ;
                    cur++;
                }
                max = Math.max(max, cur);
            }
        }
        return max < 3 ? 0 : max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
