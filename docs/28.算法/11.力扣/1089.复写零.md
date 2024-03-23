---
title: 复写零
date: 2022-11-29 18:42:56
permalink: /pages/a2a19c/
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

给你一个长度固定的整数数组 arr ，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

注意：请不要在超过该数组长度的位置写入元素。请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。

 

示例 1：

    输入：arr = [1,0,2,3,0,4,5,0]
    输出：[1,0,0,2,3,0,0,4]
    解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
示例 2：

    输入：arr = [1,2,3]
    输出：[1,2,3]
    解释：调用函数后，输入的数组将被修改为：[1,2,3]
 

提示：

- 1 <= arr.length <= 10<sup>4</sup>
- 0 <= arr[i] <= 9

## 思路

暴力解法

## 解法
```java

class Solution {
    public void duplicateZeros(int[] arr) {
        int length = arr.length;
        for(int i = 0; i < length; i++) {
            if(arr[i] == 0) {
                for(int j = length - 1; j >= i + 1; j--) {
                    arr[j] = arr[j - 1];
                }
                i++;
            } 
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
