---
title: 和相同的二元子数组
date: 2022-10-30 13:11:04
permalink: /pages/a04e8b/
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

给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

子数组 是数组的一段连续部分。

 

示例 1：

    输入：nums = [1,0,1,0,1], goal = 2
    输出：4
    解释：
    有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
示例 2：

    输入：nums = [0,0,0,0,0], goal = 0
    输出：15
 

提示：

- 1 <= nums.length <= 3 * 10<sup>4</sup>
- nums[i] 不是 0 就是 1
- 0 <= goal <= nums.length


## 思路

求前缀和+hash 另外已刷到的关于前缀和的题目还有： Leetcode 523，560，974，525，1124，528，497，1248，930 以及 区域和检索系列的问题

## 解法
```java

class Solution {
    // 求前缀和+hash 另外已刷到的关于前缀和的题目还有： Leetcode 523，560，974，525，1124，528，497，1248，930 以及 区域和检索系列的问题


    public int numSubarraysWithSum(int[] nums, int S) {
    Map<Integer,Integer> map = new HashMap<>();
    map.put(0,1);
    int sum = 0;
    int res = 0;
    for(int i=0;i<nums.length;i++){
        sum += nums[i];
        if(map.containsKey(sum-S)){
            res += map.get(sum-S);
        }
        map.put(sum,map.getOrDefault(sum,0)+1);
    }
    return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
