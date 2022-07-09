---
title: 火柴拼正方形
date: 2022-06-25 11:56:31
permalink: /pages/8dd3b9/
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

你将得到一个整数数组 matchsticks ，其中 matchsticks[i] 是第 i 个火柴棒的长度。你要用 所有的火柴棍 拼成一个正方形。你 不能折断 任何一根火柴棒，但你可以把它们连在一起，而且每根火柴棒必须 使用一次 。

如果你能使这个正方形，则返回 true ，否则返回 false 。

 

示例 1:

![](../../../media/pictures/leetcode/matchsticks1-grid.jpeg)


    输入: matchsticks = [1,1,2,2,2]
    输出: true
    解释: 能拼成一个边长为2的正方形，每边两根火柴。
示例 2:

    输入: matchsticks = [3,3,3,3,4]
    输出: false
    解释: 不能用所有火柴拼成一个正方形。
 

提示:

- 1 <= matchsticks.length <= 15
- 1 <= matchsticks[i] <= 10<sup>8</sup>


## 思路

可以看成是固定个数的固定容量的水桶的接水问题。对于例子[1, 1, 2, 2, 2]，按从大到小排列变成[2, 2, 2, 1, 1]。 正方形的四条边抽象成四个水桶，每个水桶的容量为2，超过容量就会溢出。nums[0] = 2，用第一个桶装，刚刚好装满； nums[1] = 2，用第一个桶装，发现2 + 2 = 4 > 2，那么就用第二个桶装，第二个桶也装满；nums[2] = 2，用第一个和第二个 桶都装不下，用第三个桶装，那么第三个桶也装满；nums[3] = 1，只能用第四个桶装，但没装满；nums[4] = 1，也只能用第四个桶装， 第四个桶也装满了。四个桶都恰好装满表示能构成正方形。



## 解法
```java

class Solution {
    public boolean makesquare(int[] nums) {

    
    if (nums.length < 4) return false;
    int sum = 0;
    for (int num : nums) sum += num;
    if (sum % 4 != 0) return false;
    Arrays.sort(nums);
    return allocate(nums, nums.length - 1, new int[4], sum / 4);
}

private boolean allocate(int[] nums, int pos, int[] sums, int avg) {
    if (pos == -1)
        return sums[0] == avg && sums[1] == avg && sums[2] == avg;
    for (int i = 0; i < 4; ++i) {
        if (sums[i] + nums[pos] > avg) continue;
        sums[i] += nums[pos];
        if (allocate(nums, pos - 1, sums, avg))
            return true;
        sums[i] -= nums[pos];
    }
    return false;
}}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
