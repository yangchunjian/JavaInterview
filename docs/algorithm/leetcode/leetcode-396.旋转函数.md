---
title: 旋转函数
date: 2022-06-27 23:11:02
permalink: /pages/5a8915/
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

给定一个长度为 n 的整数数组 nums 。

假设 arrk 是数组 nums 顺时针旋转 k 个位置后的数组，我们定义 nums 的 旋转函数  F 为：

F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]

返回 F(0), F(1), ..., F(n-1)中的最大值 。

生成的测试用例让答案符合 32 位 整数。

 

示例 1:

    输入: nums = [4,3,2,6]
    输出: 26
    解释:
    F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
    F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
    F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
    F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26
    所以 F(0), F(1), F(2), F(3) 中的最大值是 F(3) = 26 。
示例 2:

    输入: nums = [100]
    输出: 0
 

提示:

- n == nums.length
- 1 <= n <= 10<sup>5</sup>
- -100 <= nums[i] <= 100


## 思路

// 其实是个数学问题，拿例1来说，nums数组的和为15，F(0) = 25,F(1) = 16 = 25+15-4*6， F(2) = 23 = 16+15-4*2，F(3)= 26 = 23+15 - 4*3，也就是拿前一个函数的和加上数组的和再减去上一个数组末尾的n倍。

## 解法
```java

class Solution {
    // 其实是个数学问题，拿例1来说，nums数组的和为15，F(0) = 25,F(1) = 16 = 25+15-4*6， F(2) = 23 = 16+15-4*2，F(3)= 26 = 23+15 - 4*3，也就是拿前一个函数的和加上数组的和再减去上一个数组末尾的n倍。 代码如下：
    public int maxRotateFunction(int[] nums) {
        int n = nums.length;
        int total =0; //记录数组和
        int max = 0; //记录当前最大值
        for(int i =0;i<n;i++){
            total +=nums[i];   //求数组和
            max += i*nums[i]; 
        }
        int temp = max;
        for(int j = n-1;j>0;j--){
            temp = temp + total -n*nums[j];
            max = Math.max(max,temp);
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
