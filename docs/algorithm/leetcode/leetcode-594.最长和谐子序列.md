---
title: 最长和谐子序列
date: 2022-09-19 19:16:44
permalink: /pages/47cf68/
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

和谐数组是指一个数组里元素的最大值和最小值之间的差别 正好是 1 。

现在，给你一个整数数组 nums ，请你在所有可能的子序列中找到最长的和谐子序列的长度。

数组的子序列是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。

 

示例 1：

    输入：nums = [1,3,2,2,5,2,3,7]
    输出：5
    解释：最长的和谐子序列是 [3,2,2,2,3]
示例 2：

    输入：nums = [1,2,3,4]
    输出：2
示例 3：

    输入：nums = [1,1,1,1]
    输出：0
 

提示：

- 1 <= nums.length <= 2 * 10<sup>4</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>



## 思路

排序后，用两个指针，类似于窗口


## 解法
```java

class Solution {
    public int findLHS(int[] nums) {

        Arrays.sort(nums);
        int begin = 0,res = 0;
        for(int end = 0;end < nums.length;end++){
            while(nums[end] - nums[begin] > 1)
                 begin++;
            if(nums[end] - nums[begin] == 1)
              res = Math.max(res,end - begin + 1);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
