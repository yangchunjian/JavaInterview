---
title: 按权重随机选择
date: 2022-09-05 10:26:12
permalink: /pages/6ca79c/
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

给你一个 下标从 0 开始 的正整数数组 w ，其中 w[i] 代表第 i 个下标的权重。

请你实现一个函数 pickIndex ，它可以 随机地 从范围 [0, w.length - 1] 内（含 0 和 w.length - 1）选出并返回一个下标。选取下标 i 的 概率 为 w[i] / sum(w) 。

例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。
 

示例 1：

    输入：
    ["Solution","pickIndex"]
    [[[1]],[]]
    输出：
    [null,0]
    解释：
    Solution solution = new Solution([1]);
    solution.pickIndex(); // 返回 0，因为数组中只有一个元素，所以唯一的选择是返回下标 0。
示例 2：

    输入：
    ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
    [[[1,3]],[],[],[],[],[]]
    输出：
    [null,1,1,1,1,0]
    解释：
    Solution solution = new Solution([1, 3]);
    solution.pickIndex(); // 返回 1，返回下标 1，返回该下标概率为 3/4 。
    solution.pickIndex(); // 返回 1
    solution.pickIndex(); // 返回 1
    solution.pickIndex(); // 返回 1
    solution.pickIndex(); // 返回 0，返回下标 0，返回该下标概率为 1/4 。
    
    由于这是一个随机问题，允许多个答案，因此下列输出都可以被认为是正确的:
    [null,1,1,1,1,0]
    [null,1,1,1,1,1]
    [null,1,1,1,0,0]
    [null,1,1,1,0,1]
    [null,1,0,1,0,0]
    ......
    诸若此类。
 

提示：

- 1 <= w.length <= 10<sup>4</sup>
- 1 <= w[i] <= 10<sup>5</sup>
- pickIndex 将被调用不超过 10<sup>4</sup> 次



## 思路

    思路：前缀和数组 + 二分查找
    举例：
        给定数组是【3,1,2】——>
      前缀和数组【0,3,4,6】——>
      在【0,6）范围生成一个随机数r ——>
          如果r=0、1、2则返回index0
          如果r=3则返回index1
          如果r=4、5则返回index2
    前缀和数组：
        preSum[0]=0;
        preSum[i]=preSum[i-1]+nums[i-1];
    取随机值：
        int r = r.nextInt(preSum[length-1])
    二分查找：
        left = preSum的0
        right = preSum的length-1
        while(left <=right )
            mid = left + (right -left)/2
            如果preSum[mid] == r,则返回mid。
            如果preSum[mid] > r,则想办法把mid左移，即end = mid - 1;
            如果preSum[mid] < r,则先把此时mid记下来作为备选，然后想办法把mid右移，即start = mid + 1;
        循环的退出条件1：找到了preSum中的恰巧正好等于r的index，这个index == w的index，所以最后返回这个index即可。
        或
        循环的退出条件2：找到了preSum中的、比r小的index们、中的最大的index，这个index == w的index，所以最后返回这个index即可。


## 解法
```java

class Solution {

    private int[] preSum;
    private int sum;
    public Solution(int[] w) {
        preSum = new int[w.length+1];
        preSum[0] = 0;
        for (int i = 1; i <= preSum.length-1; i++) {
            preSum[i] = preSum[i - 1] + w[i-1];
        }
        sum = preSum[preSum.length-1];
    }
    
    public int pickIndex() {

        int r = new Random().nextInt(sum);
        return binSearchPreSumReturnWIndex(r);
    }


    private int binSearchPreSumReturnWIndex(int r) {
        int start = 0;
        int end = preSum.length - 1;      
        int memo = 0;
        while (start <= end) {
            int mid = start + ((end - start) >> 1);
            if (preSum[mid] == r) {
                return mid;
            }
            if (preSum[mid] < r) {
                memo = mid;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return memo;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(w);
 * int param_1 = obj.pickIndex();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
