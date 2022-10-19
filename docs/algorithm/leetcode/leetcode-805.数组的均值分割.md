---
title: 数组的均值分割
date: 2022-10-19 19:02:13
permalink: /pages/97a6c4/
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

给定你一个整数数组 nums

我们要将 nums 数组中的每个元素移动到 A 数组 或者 B 数组中，使得 A 数组和 B 数组不为空，并且 average(A) == average(B) 。

如果可以完成则返回true ， 否则返回 false  。

注意：对于数组 arr ,  average(arr) 是 arr 的所有元素除以 arr 长度的和。

 

示例 1:

    输入: nums = [1,2,3,4,5,6,7,8]
    输出: true
    解释: 我们可以将数组分割为 [1,4,5,8] 和 [2,3,6,7], 他们的平均值都是4.5。
示例 2:

    输入: nums = [3,1]
    输出: false
 

提示:

- 1 <= nums.length <= 30
- 0 <= nums[i] <= 10<sup>4</sup>



## 思路

//np问题，不能暴搜,需要加去重和提前退出的判断来缩短时间

## 解法
```java

class Solution {

    //np问题，不能暴搜,需要加去重和提前退出的判断来缩短时间

    public boolean splitArraySameAverage(int[] A) {
        int len = A.length;
        int sum = 0;//sum为总和
        for(int i = 0; i < len; i++){
            sum += A[i];
        }
        Arrays.sort(A);        
        //从小到大排序，从0开始处理较少数据
        for(int i = 1; i <= len/2; i++){
            int remainder = sum * i % len;
            //首先确认能否整除
            int target = sum * i / len;
            //这是目标和
            if(remainder == 0 && helper(A,0,i,target))
                return true;
        }
        return false;
    }
    
    public boolean helper(int[] A, int begin, int len, int target){
        if(len == 0) 
            return target == 0;
        if(target < len * A[begin])
            return false;
        for(int i = begin; i <= A.length - len; i++){
            //略去重复的情况，缩短运行时间
            if(i > begin && A[i] == A[i-1]) continue;
            if(helper(A, i+1, len-1, target- A[i]))
                return true;
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
