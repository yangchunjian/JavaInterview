---
title: 分发糖果
date: 2022-05-22 22:43:34
permalink: /pages/8b97e7/
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
n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

- 每个孩子至少分配到 1 个糖果。
- 相邻两个孩子评分更高的孩子会获得更多的糖果。

请你给每个孩子分发糖果，计算并返回需要准备的 **最少糖果数目** 。

 

示例 1：

    输入：ratings = [1,0,2]
    输出：5
    解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
示例 2：

    输入：ratings = [1,2,2]
    输出：4
    解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
         第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 

提示：

- n == ratings.length
- 1 <= n <= 2 * 10<sup>4</sup>
- 0 <= ratings[i] <= 2 * 10<sup>4</sup>



## 思路

    建立临时数组，存糖果值
    
    //先正序遍历，如果后一位比前一位高分，就给比前一位多1的糖果，否则给1
    
    //在倒叙遍历，如果前一位比后一位高分并且得到的糖果小于或等于后一位，就给前一位孩子比后一位孩子多一个糖果

## 解法
```java


class Solution {
    public int candy(int[] ratings) {

        if(ratings == null || ratings.length == 0){
            return 0;
        }
        int[] nums = new int[ratings.length];//记录每一位孩子得到的糖果数
        nums[0] = 1;
        //先正序遍历，如果后一位比前一位高分，就给比前一位多1的糖果，否则给1
        for(int i = 1; i < ratings.length; i++){
            if(ratings[i] > ratings[i-1]){
                nums[i] = nums[i-1] + 1;        
            }else {
                nums[i] = 1;
            }
        }
        //在倒叙遍历，如果前一位比后一位高分并且得到的糖果小于或等于后一位，就给前一位孩子比后一位孩子多一个糖果
        for(int i = ratings.length -2 ; i >= 0; i--){
            if(ratings[i] > ratings[i+1] && nums[i] <= nums[i+1]){
                nums[i] = nums[i+1] +1;
            }
        }
        int count = 0;
        for(int i : nums){
            count +=i;
        }
        return count;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
