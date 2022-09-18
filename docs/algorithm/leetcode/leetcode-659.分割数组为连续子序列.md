---
title: 分割数组为连续子序列
date: 2022-09-18 22:42:13
permalink: /pages/c6a00c/
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

给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度至少为 3 的子序列，其中每个子序列都由连续整数组成。

如果可以完成上述分割，则返回 true ；否则，返回 false 。

 

示例 1：

    输入: [1,2,3,3,4,5]
    输出: True
    解释:
    你可以分割出这样两个连续子序列 : 
    1, 2, 3
    3, 4, 5
示例 2：

    输入: [1,2,3,3,4,4,5,5]
    输出: True
    解释:
    你可以分割出这样两个连续子序列 : 
    1, 2, 3, 4, 5
    3, 4, 5
示例 3：

    输入: [1,2,3,4,4,5]
    输出: False
 

提示：

- 1 <= nums.length <= 10000


## 思路

单map+贪心 JAVA

## 解法
```java

class Solution {
    // 单map+贪心 JAVA


    public boolean isPossible(int[] nums) {

        Map<Integer, Integer> map = new HashMap<>();
        for (int i : nums) {
            map.put(i, map.getOrDefault(i, 0)+1);
        }
        for (int i : nums) {
            //子数组的元素个数
            int subNum = 0;
            int p = 1;
            //下个元素
            int next = i;
            while (map.getOrDefault(next, 0) >= p) {
                p = map.get(next);
                map.put(next, p-1);
                ++subNum;
                ++next;
            }
            if (subNum > 0 && subNum < 3) {
                return false;
            }
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
