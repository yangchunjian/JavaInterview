---
title: 下一个更大元素 II
date: 2022-07-31 10:54:44
permalink: /pages/a58d30/
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
给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），返回 nums 中每个元素的 下一个更大元素 。

数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。

 

示例 1:

    输入: nums = [1,2,1]
    输出: [2,-1,2]
    解释: 第一个 1 的下一个更大的数是 2；
    数字 2 找不到下一个更大的数； 
    第二个 1 的下一个最大的数需要循环搜索，结果也是 2。
示例 2:

    输入: nums = [1,2,3,4,3]
    输出: [2,3,4,-1,4]
 

提示:

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>



## 思路

    Stack栈

## 解法
```java

class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int [] res = new int[n];
        Arrays.fill(res, -1);
        Stack <Integer> stack = new Stack<>();
        for (int i = 0; i < n*2; i++){
            int num = nums[i % n];
            while(!stack.isEmpty() && num > nums[stack.peek()]){
                res[stack.pop()] = num;
            }
            if(i < n) stack.add(i);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
