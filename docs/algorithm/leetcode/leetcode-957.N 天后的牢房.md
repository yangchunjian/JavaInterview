---
title: N 天后的牢房
date: 2022-11-07 21:54:03
permalink: /pages/82e9fd/
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

监狱中 8 间牢房排成一排，每间牢房可能被占用或空置。

每天，无论牢房是被占用或空置，都会根据以下规则进行变更：

- 如果一间牢房的两个相邻的房间都被占用或都是空的，那么该牢房就会被占用。
- 否则，它就会被空置。

注意：由于监狱中的牢房排成一行，所以行中的第一个和最后一个牢房不存在两个相邻的房间。

给你一个整数数组 cells ，用于表示牢房的初始状态：如果第 i 间牢房被占用，则 cell[i]==1，否则 cell[i]==0 。另给你一个整数 n 。

请你返回 n 天后监狱的状况（即，按上文描述进行 n 次变更）。

 

示例 1：

    输入：cells = [0,1,0,1,1,0,0,1], n = 7
    输出：[0,0,1,1,0,0,0,0]
    解释：下表总结了监狱每天的状况：
    Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
    Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
    Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
    Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
    Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
    Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
    Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
    Day 7: [0, 0, 1, 1, 0, 0, 0, 0]
示例 2：

    输入：cells = [1,0,0,1,0,0,1,0], n = 1000000000
    输出：[0,0,1,1,1,1,1,0]
 

提示：

- cells.length == 8
- cells[i] 为 0 或 1
- 1 <= n <= 10<sup>9</sup>

## 思路

把一个周期的状态记录下来，超过周期的都重复了没必要记录

## 解法
```java

class Solution {
    // 思路：把一个周期的状态记录下来，超过周期的都重复了没必要记录


    public int[] prisonAfterNDays(int[] cells, int N) {
        Map<Integer, int[]> map = new HashMap<>();
        Set<String> set = new HashSet<>();
        int[] temp = next(cells);
        for (int i = 1; i <= N; i++) {
            String key = Arrays.toString(temp);
            if (set.contains(key)) break;
            set.add(key);
            map.put(i, temp);
            temp = next(temp);
        }
        int period = set.size();
        int day = N % period;
        return map.get(day == 0 ? period : day);
    }

    private int[] next(int[] cur) {
        int[] res = new int[8];
        for (int i = 1; i < 7; i++) {
            res[i] = (cur[i - 1] ^ cur[i + 1]) == 0 ? 1 : 0;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
