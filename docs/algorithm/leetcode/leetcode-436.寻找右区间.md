---
title: 寻找右区间
date: 2022-06-16 23:37:18
permalink: /pages/9c992d/
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

给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。

区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。

返回一个由每个区间 i 的 右侧区间 在 intervals 中对应下标组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。

 
示例 1：

    输入：intervals = [[1,2]]
    输出：[-1]
    解释：集合中只有一个区间，所以输出-1。
示例 2：

    输入：intervals = [[3,4],[2,3],[1,2]]
    输出：[-1,0,1]
    解释：对于 [3,4] ，没有满足条件的“右侧”区间。
    对于 [2,3] ，区间[3,4]具有最小的“右”起点;
    对于 [1,2] ，区间[2,3]具有最小的“右”起点。
示例 3：

    输入：intervals = [[1,4],[2,3],[3,4]]
    输出：[-1,2,-1]
    解释：对于区间 [1,4] 和 [3,4] ，没有满足条件的“右侧”区间。
    对于 [2,3] ，区间 [3,4] 有最小的“右”起点。
 

提示：

- 1 <= intervals.length <= 2 * 10<sup>4</sup>
- intervals[i].length == 2
- -10<sup>6</sup> <= starti <= endi <= 10<sup>6</sup>
- 每个间隔的起点都 不相同



## 思路

题目要让我们找到每个区间数组：[start,end] 的最小右侧区间。

其中满足

start <= end

本区间的end <= 下一个区间的start


TreeMap.ceilingKey


## 解法
```java

class Solution {
    public int[] findRightInterval(int[][] intervals) {

        int n = intervals.length;
        TreeMap<Integer, Integer> tm = new TreeMap<>();
        for (int i = 0; i < n; i++) tm.put(intervals[i][0], i);
        int[] ans = new int[n];
        for (int i = 0; i < n; i++) {
            int end = intervals[i][1];
            Integer start = tm.ceilingKey(end);
            ans[i] = start == null ? -1 : tm.get(start);
        }
        return ans;
        
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
