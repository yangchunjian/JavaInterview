---
title: 不邻接植花
date: 2022-11-30 12:36:22
permalink: /pages/f8c1a5/
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

有 n 个花园，按从 1 到 n 标记。另有数组 paths ，其中 paths[i] = [xi, yi] 描述了花园 xi 到花园 yi 的双向路径。在每个花园中，你打算种下四种花之一。

另外，所有花园 最多 有 3 条路径可以进入或离开.

你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。

以数组形式返回 任一 可行的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1、2、3、4 表示。保证存在答案。

 

示例 1：
    
    输入：n = 3, paths = [[1,2],[2,3],[3,1]]
    输出：[1,2,3]
    解释：
    花园 1 和 2 花的种类不同。
    花园 2 和 3 花的种类不同。
    花园 3 和 1 花的种类不同。
    因此，[1,2,3] 是一个满足题意的答案。其他满足题意的答案有 [1,2,4]、[1,4,2] 和 [3,2,1]
示例 2：

    输入：n = 4, paths = [[1,2],[3,4]]
    输出：[1,2,1,2]
示例 3：

    输入：n = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
    输出：[1,2,3,4]
 

提示：

- 1 <= n <= 104
- 0 <= paths.length <= 2 * 10<sup>4</sup>
- paths[i].length == 2
- 1 <= xi, yi <= n
- xi != yi
- 每个花园 最多 有 3 条路径可以进入或离开


## 思路

本来以为是图着色?后来发现题中限制一个节点的度最多就为3，而颜色一共有4种，也就是一定可以染上色，这样我们先把图构造出来，然后遍历每个节点的邻节点，当前节点+邻节点最多四个，这样就用邻节点没有用过的一个颜色将当前节点染色即可。

## 解法
```java

class Solution {
    // 本来以为是图着色?后来发现题中限制一个节点的度最多就为3，而颜色一共有4种，也就是一定可以染上色，这样我们先把图构造出来，然后遍历每个节点的邻节点，当前节点+邻节点最多四个，这样就用邻节点没有用过的一个颜色将当前节点染色即可。


    public int[] gardenNoAdj(int N, int[][] paths) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        for (int i = 0; i < N; i++)
            graph.put(i, new HashSet<>());
        for (int[] path: paths) {
            graph.get(path[0] - 1).add(path[1] - 1);
            graph.get(path[1] - 1).add(path[0] - 1);
        }
        int[] res = new int[N];
        for (int i = 0; i < N; i++) {
            boolean[] used = new boolean[5];
            for (int adj: graph.get(i))
                used[res[adj]] = true;
            for (int j = 1; j <= 4; j++)
                if (!used[j])
                    res[i] = j;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
