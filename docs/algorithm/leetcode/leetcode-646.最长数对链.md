---
title: 最长数对链
date: 2022-09-18 21:01:41
permalink: /pages/850899/
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

给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。

现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链。

给定一个数对集合，找出能够形成的最长数对链的长度。你不需要用到所有的数对，你可以以任何顺序选择其中的一些数对来构造。

 

示例：

    输入：[[1,2], [2,3], [3,4]]
    输出：2
    解释：最长的数对链是 [1,2] -> [3,4]
 

提示：

- 给出数对的个数在 [1, 1000] 范围内。


## 思路

排序 + 贪心

## 解法
```java

class Solution {
    public int findLongestChain(int[][] pairs) {
        //排序 + 贪心
        Arrays.sort(pairs,(o1,o2) -> o1[1] - o2[1]);
        //dp 记录 最大连接处且pairs[i][1]最小下标处的数
        int max = 1 , dp = pairs[0][1];
        for(int i=1; i<pairs.length; i++){
            //查看当前是否可以连接在最大连接数后面
            if(pairs[i][0] > dp) {
                max++;
                dp = pairs[i][1];
            }
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
