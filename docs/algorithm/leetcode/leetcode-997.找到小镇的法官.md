---
title: 找到小镇的法官
date: 2022-11-21 17:41:37
permalink: /pages/900438/
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

小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

如果小镇法官真的存在，那么：

- 小镇法官不会信任任何人。
- 每个人（除了小镇法官）都信任这位小镇法官。
- 只有一个人同时满足属性 1 和属性 2 。

给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

 

示例 1：

    输入：n = 2, trust = [[1,2]]
    输出：2
示例 2：

    输入：n = 3, trust = [[1,3],[2,3]]
    输出：3
示例 3：

    输入：n = 3, trust = [[1,3],[2,3],[3,1]]
    输出：-1
 
提示：

- 1 <= n <= 1000
- 0 <= trust.length <= 10<sup>4</sup>
- trust[i].length == 2
- trust 中的所有trust[i] = [ai, bi] 互不相同
- ai != bi
- 1 <= ai, bi <= n

## 思路

用一个二维数组记录每个结点的入度和出度，出度为0入度为N的就是法官

## 解法
```java

class Solution {
    // 用一个二维数组记录每个结点的入度和出度，出度为0入度为N的就是法官


    public int findJudge(int N, int[][] trust) {
        int[][] people = new int[N][2];
        for(int[] person : trust){
            int out = person[0];
            int in = person[1];
            people[out - 1][0] ++;
            people[in - 1][1] ++;
        }
        for(int i = 0; i < N; i ++){
            if(people[i][0] == 0 && people[i][1] == N - 1)
                return i + 1;
        }
        return -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
