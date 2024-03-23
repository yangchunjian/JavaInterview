---
title: 存在重复元素III
date: 2022-05-23 21:07:31
permalink: /pages/891568/
categories: 
  - algorithm
  - leetcode
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---

## 题目
给你一个整数数组 nums 和两个整数 k 和 t 。

请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

 

示例 1：

    输入：nums = [1,2,3,1], k = 3, t = 0
    输出：true
示例 2：

    输入：nums = [1,0,1,1], k = 1, t = 2
    输出：true
示例 3：

    输入：nums = [1,5,9,1,5,9], k = 2, t = 3
    输出：false
 

提示：

- 0 <= nums.length <= 2 * 10<sup>4</sup>
- -231 <= nums[i] <= 2<sup>31</sup> - 1
- 0 <= k <= 10<sup>4</sup>
- 0 <= t <= 2<sup>31</sup> - 1


## 思路

滑动窗口，查找表中是否有大于等于 nums[i] - t 且小于等于 nums[i] + t
的值，set.ceil()方法

## 解法
```java

class Solution {
    
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        // 滑动窗口结合查找表，此时滑动窗口即为查找表本身（控制查找表的大小即可控制窗口大小）
        TreeSet<Long> set = new TreeSet<>();
        for (int i = 0; i < nums.length; i++) {
            // 边添加边查找
            // 查找表中是否有大于等于 nums[i] - t 且小于等于 nums[i] + t 的值
            Long ceiling = set.ceiling((long) nums[i] - (long) t);
            if (ceiling != null && ceiling <= ((long) nums[i] + (long) t)) {
                return true;
            }
            // 添加后，控制查找表（窗口）大小，移除窗口最左边元素
            set.add((long) nums[i]);
            if (set.size() == k + 1) {
                set.remove((long) nums[i - k]);
            }
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
