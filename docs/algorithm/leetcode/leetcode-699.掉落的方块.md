---
title: 掉落的方块
date: 2022-09-28 22:18:44
permalink: /pages/6efdad/
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

在二维平面上的 x 轴上，放置着一些方块。

给你一个二维整数数组 positions ，其中 positions[i] = [lefti, sideLengthi] 表示：第 i 个方块边长为 sideLengthi ，其左侧边与 x 轴上坐标点 lefti 对齐。

每个方块都从一个比目前所有的落地方块更高的高度掉落而下。方块沿 y 轴负方向下落，直到着陆到 另一个正方形的顶边 或者是 x 轴上 。一个方块仅仅是擦过另一个方块的左侧边或右侧边不算着陆。一旦着陆，它就会固定在原地，无法移动。

在每个方块掉落后，你必须记录目前所有已经落稳的 方块堆叠的最高高度 。

返回一个整数数组 ans ，其中 ans[i] 表示在第 i 块方块掉落后堆叠的最高高度。

 

示例 1：

![](../../../media/pictures/leetcode/fallingsq1-plane.jpeg)

    输入：positions = [[1,2],[2,3],[6,1]]
    输出：[2,5,5]
    解释：
    第 1 个方块掉落后，最高的堆叠由方块 1 组成，堆叠的最高高度为 2 。
    第 2 个方块掉落后，最高的堆叠由方块 1 和 2 组成，堆叠的最高高度为 5 。
    第 3 个方块掉落后，最高的堆叠仍然由方块 1 和 2 组成，堆叠的最高高度为 5 。
    因此，返回 [2, 5, 5] 作为答案。
示例 2：

    输入：positions = [[100,100],[200,100]]
    输出：[100,100]
    解释：
    第 1 个方块掉落后，最高的堆叠由方块 1 组成，堆叠的最高高度为 100 。
    第 2 个方块掉落后，最高的堆叠可以由方块 1 组成也可以由方块 2 组成，堆叠的最高高度为 100 。
    因此，返回 [100, 100] 作为答案。
    注意，方块 2 擦过方块 1 的右侧边，但不会算作在方块 1 上着陆。
 

提示：

- 1 <= positions.length <= 1000
- 1 <= lefti <= 10<sup>8</sup>
- 1 <= sideLengthi <= 10<sup>6</sup>

## 思路

能够影响当前块高度的只能是已经放过的块。

所以用一个map记录已放过的块的高度，然后暴力地拿当前块和之前放过的块比较有没有重合部分，来获得当前块的最大高度

## 解法
```java

class Solution {
    // 能够影响当前块高度的只能是已经放过的块。所以用一个map记录已放过的块的高度，然后暴力地拿当前块和之前放过的块比较有没有重合部分，来获得当前块的最大高度
    public List<Integer> fallingSquares(int[][] positions) {
        List<Integer> ans = new ArrayList<>();
        Map<Integer,Integer> records = new HashMap<>();
        int n = positions.length;
        int length;
        int left;
        int right;
        int max = 0;
        for(int i = 0 ; i < n ; i++){
            length = 0;
            left = positions[i][0];
            right = positions[i][1]+left;
            for(int j =0 ; j < i ; j++){
                if(right <= positions[j][0] || positions[j][0]+positions[j][1] <= left){
                    continue;
                }
                length = Math.max(records.get(j),length);
            }
            length += positions[i][1];
            max = Math.max(max,length);
            ans.add(max);
            records.put(i,length);
        }
        return ans;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
