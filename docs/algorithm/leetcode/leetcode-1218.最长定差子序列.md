---
title: 最长定差子序列
date: 2023-02-14 21:23:25
permalink: /pages/14f515/
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

给你一个整数数组 arr 和一个整数 difference，请你找出并返回 arr 中最长等差子序列的长度，该子序列中相邻元素之间的差等于 difference 。

子序列 是指在不改变其余元素顺序的情况下，通过删除一些元素或不删除任何元素而从 arr 派生出来的序列。

 

示例 1：

    输入：arr = [1,2,3,4], difference = 1
    输出：4
    解释：最长的等差子序列是 [1,2,3,4]。
示例 2：

    输入：arr = [1,3,5,7], difference = 1
    输出：1
    解释：最长的等差子序列是任意单个元素。
示例 3：

    输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
    输出：4
    解释：最长的等差子序列是 [7,5,3,1]。
 

提示：

- 1 <= arr.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= arr[i], difference <= 10<sup>4</sup>


## 思路

HashMap<Integer,Integer> map

## 解法
```java

class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        int max = 1;
        HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
        for(int i=0;i<arr.length;i++){
            Integer val = map.get(arr[i] - difference);
            if(val != null){
                map.put(arr[i],val+1);
                max = max >= val+1 ? max : val+1;
            }
            else
                map.put(arr[i],1);
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
