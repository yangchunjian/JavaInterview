---
title: 无重叠区间
date: 2022-06-15 23:54:45
permalink: /pages/4e3358/
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
给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

 

示例 1:

    输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
    输出: 1
    解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:

    输入: intervals = [ [1,2], [1,2], [1,2] ]
    输出: 2
    解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:

    输入: intervals = [ [1,2], [2,3] ]
    输出: 0
    解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
 

提示:

- 1 <= intervals.length <= 10<sup>5</sup>
- intervals[i].length == 2
- -5 * 10<sup>4</sup> <= starti < endi <= 5 * 10<sup>4</sup>



## 思路

    
        Arrays.sort(intervals,new Comparator<int [] >(){
            public int compare(int [] a1,int [] a2) {
                return a1[1] - a2[1];   //升序排列
            }
        });

## 解法
```java

class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) {
            return 0;
        }
        Arrays.sort(intervals,new Comparator<int [] >(){
            public int compare(int [] a1,int [] a2) {
                return a1[1] - a2[1];   //升序排列
            }
        });
        int count = 1;	//最多能组成的不重叠区间个数
        int end = intervals[0][1];
        for (int i = 0; i < intervals.length; i++) {
            if (intervals[i][0] < end) {
                continue;
            }
            end = intervals[i][1];
            count++;
        }
        return intervals.length - count;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
