---
title: 最少移动次数使数组元素相等 II
date: 2022-07-31 11:27:11
permalink: /pages/e75d6b/
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

给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。

在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。

 

示例 1：

    输入：nums = [1,2,3]
    输出：2
    解释：
    只需要两步操作（每步操作指南使一个元素加 1 或减 1）：
    [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
示例 2：

    输入：nums = [1,10,2,9]
    输出：16
 

提示：

- n == nums.length
- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>


## 思路


    顺着中位数的思路来想 假如数组长度为奇数2n+1 则中位数两边各有n个数 设左边所有数和中位数的差值和为x 右边所有数和中位数的差值和为y 则所有需要移动的次数为x+y 如果不选择中位数 例如选择中位数-1 这样总的移动次数就变成了 >= ((x-n) + (y+n) + 1) 最好的情况下比中位数大1 如果数组长度是偶数 有两个中位数 选择两个中位数的任何一个或者两个中位数的平均数 都是可以的
    
## 解法
```java

class Solution {
    public int minMoves2(int[] nums) {
        Arrays.sort(nums);
        int i = 0,j = nums.length - 1, res = 0;
        while (i < j) {
            res += nums[j--] - nums[i++];
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
