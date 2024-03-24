---
title: 最小绝对差
date: 2023-02-14 20:49:17
permalink: /pages/9d1f74/
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

给你个整数数组 arr，其中每个元素都 不相同。

请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。

每对元素对 [a,b] 如下：

- a , b 均为数组 arr 中的元素
- a < b
- b - a 等于 arr 中任意两个元素的最小绝对差


示例 1：

    输入：arr = [4,2,1,3]
    输出：[[1,2],[2,3],[3,4]]
示例 2：

    输入：arr = [1,3,6,10,15]
    输出：[[1,3]]
示例 3：

    输入：arr = [3,8,-10,23,19,-4,-14,27]
    输出：[[-14,-10],[19,23],[23,27]]
 

提示：

- 2 <= arr.length <= 10^5
- -10^6 <= arr[i] <= 10^6


## 思路

java 哈希表

## 解法
```java

class Solution {
    // java 哈希表


    public List<List<Integer>> minimumAbsDifference(int[] arr) {
        Arrays.sort(arr);
        Map<Integer, List<List<Integer>>> table = new HashMap<>();
        int min = Integer.MAX_VALUE, tmp;
        List<Integer> tmpList;
        for (int i = 0, j = 1;i < arr.length - 1;i++, j++) {
            tmp = Math.abs(arr[i] - arr[j]);
            if (tmp <= min) {
                min = tmp;
                tmpList = new ArrayList<>(2);
                tmpList.add(arr[i]);
                tmpList.add(arr[j]);
                if (table.containsKey(min)) {
                    table.get(min).add(tmpList);
                } else {
                    List<List<Integer>> result = new ArrayList<>();
                    result.add(tmpList);
                    table.put(min, result);
                }
            }
        }
        return table.get(min);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
