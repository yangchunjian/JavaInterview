---
title: 最小时间差
date: 2022-09-05 11:26:14
permalink: /pages/3da6e1/
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

给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，

找出列表中任意两个时间的最小时间差并以分钟数表示。

 

示例 1：

    输入：timePoints = ["23:59","00:00"]
    输出：1
示例 2：

    输入：timePoints = ["00:00","23:59","00:00"]
    输出：0
 

提示：

- 2 <= timePoints.length <= 2 * 10<sup>4</sup>
- timePoints[i] 格式为 "HH:MM"



## 思路

转换成分钟数然后比较即可


## 解法
```java

class Solution {
    public int findMinDifference(List<String> timePoints) {
        int[] arr = new int[timePoints.size()];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = Integer.parseInt(timePoints.get(i).substring(0, 2)) * 60 + Integer.parseInt(timePoints.get(i).substring(3));
        }
        Arrays.sort(arr);
        int min = Integer.MAX_VALUE;
        for (int i = 1; i < arr.length; i++) {
            min = Math.min(min, arr[i] - arr[i - 1]);
        }
        return Math.min(min, arr[0] + 1440 - arr[arr.length - 1]);

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
