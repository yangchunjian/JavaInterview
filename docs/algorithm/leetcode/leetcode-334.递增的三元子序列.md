---
title: 递增的三元子序列
date: 2022-06-16 00:13:39
permalink: /pages/df3d4a/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 题目

给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

 

示例 1：

    输入：nums = [1,2,3,4,5]
    输出：true
    解释：任何 i < j < k 的三元组都满足题意
示例 2：

    输入：nums = [5,4,3,2,1]
    输出：false
    解释：不存在满足题意的三元组
示例 3：

    输入：nums = [2,1,5,0,4,6]
    输出：true
    解释：三元组 (3, 4, 5) 满足题意，因为 nums[3] == 0 < nums[4] == 4 < nums[5] == 6
 

提示：

- 1 <= nums.length <= 5 * 10<sup>5</sup>
- -2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1




## 思路

设定两个变量a，b=Integer.MAX_VALUE

## 解法
```java

class Solution {
    public boolean increasingTriplet(int[] nums) {
        // 能实现时间复杂度为 O(n) ，空间复杂度为 O(1) 的解决方案吗
        // 暴力解法 O N~3
        // null check
        if(nums == null || nums.length < 3) {
            return false;
        }

        int a = Integer.MAX_VALUE;
        int b = Integer.MAX_VALUE;

        for(int n : nums){
            // 先把最小的给a
            if(n <= a){
                a = n;
            }else if(n <= b){
                // 再把第二小的给b
                b = n;
                System.out.print(a);
                System.out.print(b);
            }else {
                // 存在第三个大于b
                return true;
            }
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
