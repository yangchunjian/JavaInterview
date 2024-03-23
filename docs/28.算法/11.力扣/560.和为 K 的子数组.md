---
title: 和为 K 的子数组
date: 2022-09-05 11:16:00
permalink: /pages/8e1558/
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

给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的连续子数组的个数 。

 

示例 1：

    输入：nums = [1,1,1], k = 2
    输出：2
示例 2：

    输入：nums = [1,2,3], k = 3
    输出：2
 

提示：

- 1 <= nums.length <= 2 * 10<sup>4</sup>
- -1000 <= nums[i] <= 1000
- -10<sup>7</sup> <= k <= 10<sup>7</sup>



## 思路

扫描一遍数组, 使用map记录出现同样的和的次数, 对每个i计算累计和sum并判断map内是否有sum-k

## 解法
```java

class Solution {
    public int subarraySum(int[] nums, int k) {

        /**
        扫描一遍数组, 使用map记录出现同样的和的次数, 对每个i计算累计和sum并判断map内是否有sum-k
        **/
        Map<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int sum = 0, ret = 0;

        for(int i = 0; i < nums.length; ++i) {
            sum += nums[i];
            if(map.containsKey(sum-k))
                ret += map.get(sum-k);
            map.put(sum, map.getOrDefault(sum, 0)+1);
        }
        
        return ret;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
