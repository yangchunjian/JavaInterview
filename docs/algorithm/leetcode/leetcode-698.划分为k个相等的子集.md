---
title: 划分为k个相等的子集
date: 2022-09-08 23:54:00
permalink: /pages/340067/
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

给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

 

示例 1：

    输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
    输出： True
    说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
示例 2:

    输入: nums = [1,2,3,4], k = 3
    输出: false
 

提示：

- 1 <= k <= len(nums) <= 16
- 0 < nums[i] < 10000
- 每个元素的频率在 [1,4] 范围内



## 思路

回溯

## 解法
```java

class Solution {
    int[] bucket;
    public boolean canPartitionKSubsets(int[] nums, int k) {
        if (k == 1) return true; //如果k是1，直接返回true。
        int len = nums.length;
        int sum = 0;
        for (int num : nums) sum += num; // 算出nums的总和。
        if (sum % k != 0) return false; //子集分不出k份，直接false。
        sum /= k;// sum变为每个子集的和。
        Arrays.sort(nums);
        /*
            为什么要排序呢，其实不排序这道题也能做对，但是由于时间的关系就t了。
            排序就是为了优化时间，怎么优化呢？
            我们从nums中最大的数开始找，如果最大的数比子集和都要大，或者装下它后没到子集和的大小但是装不下nums中最小的值了，
            那么这个nums绝对是false，因为有一个这么大的数在nums里，你把它放在哪个子集里都不合适。
        */
        bucket = new int[k];//这个数组里放的是子集和，总共有k个。相当于k个桶，元素一个一个往里面放。
        Arrays.fill(bucket, sum);
        return dfs(k, nums, len - 1);
    }

    public boolean dfs(int k, int[] nums, int cur) {//cur为当前的位置，从最后开始往前走。
        if (cur < 0) return true;// cur走到-1时，说明所有的数全部都放进桶里了。这时一定是true
        for (int i = 0; i < k; i++) {
            //两种可能，这个数正好是桶当前的容量，或者将这个数放进桶后这个桶还能再放别的数。
            if (bucket[i] == nums[cur] || bucket[i] - nums[cur] >= nums[0]) {
                //将cur放进第一个桶里，如果不行，拿出来再放进第二个桶里。
                //区别就是如果cur放进第一个桶，那么下一个数如果符合也会放在第一个桶，可是最后发现是false，那么可能我应该把这两个数分开来放。
                bucket[i] -= nums[cur];
                if (dfs(k, nums, cur - 1)) return true;
                bucket[i] += nums[cur];
            }
        }
        return false;
    }
    //这里讨论一种问题，为什么只要判断cur<0就能说明true，而不需要判断一下bucket数组中的值是否全部都是0。
    /*
        有没有可能bucket数组中的数有剩余但是cur已经小于0了呢？答案是不可能。
        因为如果cur<0,那么说明nums中的所有数全部都放进去了，如果全部都放进去，bucket中的数尽管可能不全为0，但是数组中的和一定是0。
        因为bucket的和与nums的和是一样的，所以我用nums中的数在不重复的状态下去减bucket中的数，全部减去的情况下bucket中的和一定是0。
        可是真的可能有负数吗，第26行我们的if条件严格判断如果没有一个桶内剩余的空间能放下这个数的话是不会执行递归的，只会返回一个false,
        因此cur一旦有一个递归没下去cur就不可能为-1，只能换其他的情况再去试。
    */
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
