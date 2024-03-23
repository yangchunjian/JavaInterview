---
title: 数组中的 k-diff 数对
date: 2022-09-13 20:53:22
permalink: /pages/4d028b/
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

给你一个整数数组 nums 和一个整数 k，请你在数组中找出 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。

k-diff 数对定义为一个整数对 (nums[i], nums[j]) ，并满足下述全部条件：

- 0 <= i, j < nums.length
- i != j
- nums[i] - nums[j] == k
- 注意，|val| 表示 val 的绝对值。

 

示例 1：

    输入：nums = [3, 1, 4, 1, 5], k = 2
    输出：2
    解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
    尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。
示例 2：

    输入：nums = [1, 2, 3, 4, 5], k = 1
    输出：4
    解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5) 。
示例 3：

    输入：nums = [1, 3, 1, 5, 4], k = 0
    输出：1
    解释：数组中只有一个 0-diff 数对，(1, 1) 。
 

提示：

- 1 <= nums.length <= 10<sup>4</sup>
- -10<sup>7</sup> <= nums[i] <= 10<sup>7</sup>
- 0 <= k <= 10<sup>7</sup>

## 思路

思路相当于求两数和那个题

## 解法
```java

class Solution {
    public int findPairs(int[] nums, int k) {
        Map<Integer,Integer> map=new HashMap<>();
        int count=0;
        if(k<0)return count;
        for(int i=0;i<nums.length;i++){
               map.putIfAbsent(nums[i],0);
               map.put(nums[i],map.get(nums[i])+1);
        }
        for(int i:map.keySet()){
            if(k==0){
                if(map.get(i)>1)
                count++;
            }
            else if(map.containsKey(i+k)){
                count++;
            }
        }
        return count;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
