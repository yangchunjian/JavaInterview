---
title: 连续的子数组和
date: 2022-09-05 09:39:49
permalink: /pages/5105f3/
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

给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

- 子数组大小 至少为 2 ，且
- 子数组元素总和为 k 的倍数。
- 如果存在，返回 true ；否则，返回 false 。

如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。

 

示例 1：

    输入：nums = [23,2,4,6,7], k = 6
    输出：true
    解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
示例 2：

    输入：nums = [23,2,6,4,7], k = 6
    输出：true
    解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
    42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
示例 3：

    输入：nums = [23,2,6,4,7], k = 13
    输出：false
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- 0 <= nums[i] <= 10<sup>9</sup>
- 0 <= sum(nums[i]) <= 2<sup>31</sup> - 1
- 1 <= k <= 2<sup>31</sup> - 1



## 思路

看到这个题目「连续子数组和」可以想到前缀和，

比较麻烦的是子数组要求长度是 2 以上，最容易想的方法就是两层 for 嵌套，但是这样会超时。

于是可以使用一些额外的辅助空间减少时间复杂度，使用 set 或者 map 记录之前出现过的所有余数，

如果出现相同余数的情况，直接返回 true。


## 解法
```java

class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        int n = nums.length;
        int[] prefix = new int[n+1];
        for (int i=1;i<n+1;i++) {
            prefix[i] = nums[i-1]+prefix[i-1];
        }

        HashSet<Integer> set = new HashSet();
        for (int i=2;i<=n;i++) {
            set.add(prefix[i-2]%k);
            if (set.contains(prefix[i]%k))
                return true;
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
