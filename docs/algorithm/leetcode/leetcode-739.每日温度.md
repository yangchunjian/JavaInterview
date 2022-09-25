---
title: 每日温度
date: 2022-09-25 23:34:02
permalink: /pages/f2b202/
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

给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。

 

示例 1:

    输入: temperatures = [73,74,75,71,69,72,76,73]
    输出: [1,1,4,2,1,1,0,0]
示例 2:

    输入: temperatures = [30,40,50,60]
    输出: [1,1,1,0]
示例 3:

    输入: temperatures = [30,60,90]
    输出: [1,1,0]
 

提示：

- 1 <= temperatures.length <= 10<sup>5</sup>
- 30 <= temperatures[i] <= 100

## 思路

双重循环

## 解法
```java

class Solution {
    public int[] dailyTemperatures(int[] T) {
    int[] res = new int[T.length];
    for (int i = 0; i < T.length - 1; i++) {
        for (int j =  i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
