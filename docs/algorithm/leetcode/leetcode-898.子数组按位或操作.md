---
title: 子数组按位或操作
date: 2022-10-25 13:09:17
permalink: /pages/c2a4ad/
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

我们有一个非负整数数组 arr 。

对于每个（连续的）子数组 sub = [arr[i], arr[i + 1], ..., arr[j]] （ i <= j），我们对 sub 中的每个元素进行按位或操作，获得结果 arr[i] | arr[i + 1] | ... | arr[j] 。

返回可能结果的数量。 多次出现的结果在最终答案中仅计算一次。

 

示例 1：

    输入：arr = [0]
    输出：1
    解释：
    只有一个可能的结果 0 。
示例 2：

    输入：arr = [1,1,2]
    输出：3
    解释：
    可能的子数组为 [1]，[1]，[2]，[1, 1]，[1, 2]，[1, 1, 2]。
    产生的结果为 1，1，2，1，3，3 。
    有三个唯一值，所以答案是 3 。
示例 3：

    输入：arr = [1,2,4]
    输出：6
    解释：
    可能的结果是 1，2，3，4，6，以及 7 。
 

提示：

- 1 <= nums.length <= 5 * 10<sup>4</sup>
- 0 <= nums[i] <= <sup>109​​​​​​</sup>​


## 思路

set集合存储

## 解法
```java

class Solution {
    public int subarrayBitwiseORs(int[] arr) {
        int max = 0;
        for(int i = 0; i < arr.length; i++){
            max |= arr[i];
        }
        HashSet<Integer> set = new HashSet<>();
        set.add(max);
        for(int i = 0; i < arr.length; i++){
            int temp = 0;
            for(int j = i; j < arr.length; j++){
                temp |= arr[j];
                if(temp == max) break;
                set.add(temp);
            }
        }
        return set.size();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
