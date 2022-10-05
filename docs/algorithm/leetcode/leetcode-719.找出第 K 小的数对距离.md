---
title: 找出第 K 小的数对距离
date: 2022-10-05 15:56:24
permalink: /pages/13741c/
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

数对 (a,b) 由整数 a 和 b 组成，其数对距离定义为 a 和 b 的绝对差值。

给你一个整数数组 nums 和一个整数 k ，数对由 nums[i] 和 nums[j] 组成且满足 0 <= i < j < nums.length 。返回 所有数对距离中 第 k 小的数对距离。

 

示例 1：

    输入：nums = [1,3,1], k = 1
    输出：0
    解释：数对和对应的距离如下：
    (1,3) -> 2
    (1,1) -> 0
    (3,1) -> 2
    距离第 1 小的数对是 (1,1) ，距离为 0 。
示例 2：

    输入：nums = [1,1,1], k = 2
    输出：0
示例 3：

    输入：nums = [1,6,1], k = 3
    输出：5
 

提示：

- n == nums.length
- 2 <= n <= 10<sup>4</sup>
- 0 <= nums[i] <= 10<sup>6</sup>
- 1 <= k <= n * (n - 1) / 2


## 思路

二分查找

## 解法
```java

class Solution {
    public int smallestDistancePair(int[] nums, int k) {

        Arrays.sort(nums);
        //最小的数对和最大的数对
        int l = 0, r = nums[nums.length-1] - nums[0];
        //二分查找答案
        while(l < r){
            int mid = (l + r) >> 1;
            if(getCnt(nums, mid) >= k){
                r = mid;
            }else{
                l = mid + 1;
            }
        }
        return l;
    }
    int getCnt(int[] nums, int val){
        //统计数对个数
        int ans = 0, left = 0;
        for(int i = 0; i < nums.length; i++){
            while(left < i && nums[i] - nums[left] > val)left++;
            ans += i - left;
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
