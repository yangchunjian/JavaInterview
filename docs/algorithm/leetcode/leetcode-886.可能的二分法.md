---
title: 可能的二分法
date: 2022-10-27 10:14:53
permalink: /pages/2da586/
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

给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。

给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和  bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。

 

示例 1：

    输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
    输出：true
    解释：group1 [1,4], group2 [2,3]
示例 2：

    输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
    输出：false
示例 3：

    输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
    输出：false
 

提示：

- 1 <= n <= 2000
- 0 <= dislikes.length <= 10<sup>4</sup>
- dislikes[i].length == 2
- 1 <= dislikes[i][j] <= n
- ai < bi
- dislikes 中每一组都 不同


## 思路

dfs

## 解法
```java

class Solution {
    public boolean possibleBipartition(int N, int[][] dislikes) {

            int[][] graph = new int[N][N];
        for (int[] d : dislikes) {
            graph[d[0] - 1][d[1] - 1] = 1;
            graph[d[1] - 1][d[0] - 1] = 1;
        }
        int[] group = new int[N];
        for (int i = 0; i < N; i++) {
            if (group[i] == 0 && !dfs(graph, group, i, 1)) {
                return false;
            }
        }
        return true;
    }
    private boolean dfs(int[][] graph, int[] group, int index, int g) {
        group[index] = g;
        for (int i = 0; i < graph.length; i++) {
            if (graph[index][i] == 1) {
                if (group[i] == g) {
                    return false;
                }
                if (group[i] == 0 && !dfs(graph, group, i, -g)) {
                    return false;
                }
            }
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
