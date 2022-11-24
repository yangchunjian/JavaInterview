---
title: 可被 5 整除的二进制前缀
date: 2022-11-23 21:04:31
permalink: /pages/6bb9bf/
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

给定一个二进制数组 nums ( 索引从0开始 )。

我们将xi 定义为其二进制表示形式为子数组 nums[0..i] (从最高有效位到最低有效位)。

- 例如，如果 nums =[1,0,1] ，那么 x0 = 1, x1 = 2, 和 x2 = 5。

返回布尔值列表 answer，只有当 xi 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。

 

示例 1：

    输入：nums = [0,1,1]
    输出：[true,false,false]
    解释：
    输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为 true 。
示例 2：

    输入：nums = [1,1,1]
    输出：[false,false,false]
 

提示：

- 1 <= nums.length <= 10<sup>5</sup> 
- nums[i] 仅为 0 或 1



## 思路

可被5整除的数字只跟该数字的最后一位数字（为0或5）有关系，于是不需要具体的算出二进制前缀对应的十进制整数是多少，只需每次保留最后一位数字（保留用该数字对10取余的十进制整数的结果）就好，而下一个二进制前缀对应的十进制整数 = 上一次的结果左移一位（乘以2）的结果 + 这次的A[i]（0或者1，正好对应十进制的0或者1）的结果。

## 解法
```java

class Solution {
    // 思路：可被5整除的数字只跟该数字的最后一位数字（为0或5）有关系，于是不需要具体的算出二进制前缀对应的十进制整数是多少，只需每次保留最后一位数字（保留用该数字对10取余的十进制整数的结果）就好，而下一个二进制前缀对应的十进制整数 = 上一次的结果左移一位（乘以2）的结果 + 这次的A[i]（0或者1，正好对应十进制的0或者1）的结果。


    public List<Boolean> prefixesDivBy5(int[] A) {
        List<Boolean> ans = new ArrayList<>();
        
        int num = 0;
        for (int i = 0;i < A.length;i++) {
            num <<= 1;
            num += A[i];
            num %= 10;
            ans.add(num % 5 == 0);
        }
        
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
