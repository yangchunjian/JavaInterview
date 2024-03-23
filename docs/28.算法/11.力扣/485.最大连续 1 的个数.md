---
title: 最大连续 1 的个数
date: 2022-06-15 23:47:38
permalink: /pages/02fee7/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---

## 题目
给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

 

示例 1：

    输入：nums = [1,1,0,1,1,1]
    输出：3
    解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
示例 2:

    输入：nums = [1,0,1,1,0,1]
    输出：2
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- nums[i] 不是 0 就是 1.



## 思路


StringBuilder

## 解法
```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        StringBuilder sb  = new StringBuilder();

        for(int i : nums){
            if(i==0){
                if(!sb.toString().endsWith("-")){
                    sb.append("-");
                }
            }else{
                sb.append(i);
            }

        }

        String[] ret = sb.toString().split("-");
        int max = 0;

        for(String r : ret){
            max = Math.max(max,r.length());

        }

        return max;

    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
