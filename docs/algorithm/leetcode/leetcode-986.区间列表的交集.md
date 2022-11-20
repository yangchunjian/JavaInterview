---
title: 区间列表的交集
date: 2022-11-20 20:56:07
permalink: /pages/0470e0/
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

给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。每个区间列表都是成对 不相交 的，并且 已经排序 。

返回这 两个区间列表的交集 。

形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b 。

两个闭区间的 交集 是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3] 。

 

示例 1：


    输入：firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]
    输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
示例 2：

    输入：firstList = [[1,3],[5,9]], secondList = []
    输出：[]
示例 3：

    输入：firstList = [], secondList = [[4,8],[10,12]]
    输出：[]
示例 4：

    输入：firstList = [[1,7]], secondList = [[3,10]]
    输出：[[3,7]]
 

提示：

- 0 <= firstList.length, secondList.length <= 1000
- firstList.length + secondList.length >= 1
- 0 <= starti < endi <= 10<sup>9</sup>
- endi < starti+1
- 0 <= startj < endj <= 10<sup>9</sup>
- endj < startj+1


## 思路

双指针

## 解法
```java

class Solution {
    public int[][] intervalIntersection(int[][] firstList, int[][] secondList) {
        List<int[]> ans = new ArrayList<>();
        int i = 0, j = 0;
        while (i < firstList.length && j < secondList.length) {
            int[] first = firstList[i];
            int[] second = secondList[j];
            int i0 = first[0], i1 = first[1], j0 = second[0], j1 = second[1];
            if (i1 < j0) {
                i++;
            } else if (j1 < i0) {
                j++;
            } else {
                if (i0 <= j0 && i1 >= j0 && i1 <= j1) {
                    ans.add(new int[]{j0, i1});
                    i++;
                } else if (i0 >= j0 && i1 <= j1) {
                    ans.add(new int[]{i0, i1});
                    i++;
                } else if (j0 >= i0 && j1 <= i1) {
                    ans.add(new int[]{j0, j1});
                    j++;
                } else if (i1 >= j1 && i0 <= j1 && i0 >= j0) {
                    ans.add(new int[]{i0, j1});
                    j++;
                }
            }
        }
        int[][] ret = new int[ans.size()][2];
        for (i = 0; i < ans.size(); i++) {
            ret[i] = ans.get(i);
        }
        return ret;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
