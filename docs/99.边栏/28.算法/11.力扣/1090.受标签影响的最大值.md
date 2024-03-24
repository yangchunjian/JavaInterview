---
title: 受标签影响的最大值
date: 2022-11-29 18:47:34
permalink: /pages/54c15d/
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

我们有一个 n 项的集合。给出两个整数数组 values 和 labels ，第 i 个元素的值和标签分别是 values[i] 和 labels[i]。还会给出两个整数 numWanted 和 useLimit 。

从 n 个元素中选择一个子集 s :

- 子集 s 的大小 小于或等于 numWanted 。
- s 中 最多 有相同标签的 useLimit 项。

一个子集的 分数 是该子集的值之和。

返回子集 s 的最大 分数 。

 

示例 1：

    输入：values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
    输出：9
    解释：选出的子集是第一项，第三项和第五项。
示例 2：

    输入：values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2
    输出：12
    解释：选出的子集是第一项，第二项和第三项。
示例 3：

    输入：values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1
    输出：16
    解释：选出的子集是第一项和第四项。
 

提示：

- n == values.length == labels.length
- 1 <= n <= 2 * 104
- 0 <= values[i], labels[i] <= 2 * 10<sup>4</sup>
- 1 <= numWanted, useLimit <= n



## 思路

先按照标签分组

## 解法
```java

class Solution {
    public int largestValsFromLabels(int[] values, int[] labels, int numWanted, int useLimit) {
        // 先按照标签分组
        HashMap<Integer, List<Integer>> map = new HashMap<>();
        for (int i = 0; i < values.length; i++) {
            map.computeIfAbsent(labels[i], k -> new ArrayList<>()).add(values[i]);
        }
        // 每个标签里边拿最大几个（不超过useLimit个）
        List<Integer> all = new ArrayList<>();
        for (List<Integer> now : map.values()) {
            now.sort((o1, o2) -> o2 - o1);
            for (int i = 0; i < now.size() && i < useLimit; i++) {
                all.add(now.get(i));
            }
        }
        // 最后拿numWanted个最大的
        all.sort((o1, o2) -> o2 - o1);
        int ans = 0;
        for (int i = 0; i < all.size() && i < numWanted; i++) ans += all.get(i);
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
