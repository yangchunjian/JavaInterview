---
title: 钥匙和房间
date: 2022-10-23 20:12:42
permalink: /pages/2a2347/
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

有 n 个房间，房间按从 0 到 n - 1 编号。最初，除 0 号房间外的其余所有房间都被锁住。你的目标是进入所有的房间。然而，你不能在没有获得钥匙的时候进入锁住的房间。

当你进入一个房间，你可能会在里面找到一套不同的钥匙，每把钥匙上都有对应的房间号，即表示钥匙可以打开的房间。你可以拿上所有钥匙去解锁其他房间。

给你一个数组 rooms 其中 rooms[i] 是你进入 i 号房间可以获得的钥匙集合。如果能进入 所有 房间返回 true，否则返回 false。

 

示例 1：

    输入：rooms = [[1],[2],[3],[]]
    输出：true
    解释：
    我们从 0 号房间开始，拿到钥匙 1。
    之后我们去 1 号房间，拿到钥匙 2。
    然后我们去 2 号房间，拿到钥匙 3。
    最后我们去了 3 号房间。
    由于我们能够进入每个房间，我们返回 true。
示例 2：

    输入：rooms = [[1,3],[3,0,1],[2],[0]]
    输出：false
    解释：我们不能进入 2 号房间。
 

提示：

- n == rooms.length
- 2 <= n <= 1000
- 0 <= rooms[i].length <= 1000
- 1 <= sum(rooms[i].length) <= 3000
- 0 <= rooms[i][j] < n
- 所有 rooms[i] 的值 互不相同



## 思路

dfs

## 解法
```java

class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {

         if(rooms == null || rooms.size() == 0){
            return true;
        }
        //是否访问过这个房间的标记
        boolean[] flag = new boolean[rooms.size()];
        //从0开始访问房间
        visitRoom(flag,0,rooms);
        //遍历标记判断是否都已访问过
        for(int i = 0;i < flag.length;i++){
            if(!flag[i]){
                return false;
            }
        }
        return true;
    }

    public void visitRoom(boolean[] flag,int i,List<List<Integer>> rooms){
        //如果已访问过，直接返回
        if(flag[i]){
            return;
        }
        //拿到钥匙,并更新标记
        List<Integer> keys = rooms.get(i);
        flag[i] = true;
        //通过钥匙循环遍历房间
        for(int k : keys){
           visitRoom(flag,k,rooms); 
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
