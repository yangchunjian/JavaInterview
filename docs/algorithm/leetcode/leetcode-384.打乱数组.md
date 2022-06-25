---
title: 打乱数组
date: 2022-06-21 23:21:58
permalink: /pages/af3975/
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
---

## 题目

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

实现 Solution class:

- Solution(int[] nums) 使用整数数组 nums 初始化对象
- int[] reset() 重设数组到它的初始状态并返回
- int[] shuffle() 返回数组随机打乱后的结果

示例 1：

    输入
    ["Solution", "shuffle", "reset", "shuffle"]
    [[[1, 2, 3]], [], [], []]
    输出
    [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
    
    解释
    Solution solution = new Solution([1, 2, 3]);
    solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
    solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
    solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
 

提示：

- 1 <= nums.length <= 50
- -10<sup>6</sup> <= nums[i] <= 10<sup>6</sup>
- nums 中的所有元素都是 唯一的
- 最多可以调用 10<sup>4</sup> 次 reset 和 shuffle



## 思路

数组交换，关键方法：

    public int[] shuffle() {

        for(int i=array.length;i>1;i--){
            swap(i-1,rand.nextInt(i));
        }
        return array;
    }

## 解法
```java

class Solution {

    int[] array;
    int[] original;
    private Random rand = new Random();

    private void swap(int i, int j){
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public Solution(int[] nums) {
        array = nums;
        original = array.clone();
    }
    
    public int[] reset() {
        array = original;
        original = original.clone();
        return array;
    }
    
    public int[] shuffle() {

        for(int i=array.length;i>1;i--){
            swap(i-1,rand.nextInt(i));
        }
        return array;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
