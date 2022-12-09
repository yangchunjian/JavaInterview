---
title: 子数组中占绝大多数的元素
date: 2022-12-08 20:40:21
permalink: /pages/bb80fb/
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

设计一个数据结构，有效地找到给定子数组的 多数元素 。

子数组的 多数元素 是在子数组中出现 threshold 次数或次数以上的元素。

实现 MajorityChecker 类:

- MajorityChecker(int[] arr) 会用给定的数组 arr 对 MajorityChecker 初始化。
- int query(int left, int right, int threshold) 返回子数组中的元素  arr[left...right] 至少出现 threshold 次数，如果不存在这样的元素则返回 -1。

示例 1：

    输入:
    ["MajorityChecker", "query", "query", "query"]
    [[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]
    输出：
    [null, 1, -1, 2]
    
    解释：
    MajorityChecker majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
    majorityChecker.query(0,5,4); // 返回 1
    majorityChecker.query(0,3,3); // 返回 -1
    majorityChecker.query(2,3,2); // 返回 2
 

提示：

- 1 <= arr.length <= 2 * 10<sup>4</sup>
- 1 <= arr[i] <= 2 * 10<sup>4</sup>
- 0 <= left <= right < arr.length
- threshold <= right - left + 1
- 2 * threshold > right - left + 1
- 调用 query 的次数最多为 10<sup>4</sup>

## 思路

    private int[] arrays;
    private int max = 0;


## 解法
```java

class MajorityChecker {

    private int[] arrays;
    private int max = 0;
    public MajorityChecker(int[] arr) {
        this.arrays = arr;
        for (int i : arr){
            //查找最大值，利用最大值初始化最小计数器
            this.max = Math.max(i, max);
        }
    }

    public int query(int left, int right, int threshold) {
        //永远无法满足的条件，直接返回-1
        if (threshold > (right-left+1)){
            return -1;
        }
        //初始化计数器，并遍历left到right之间元素的出现次数
        int[] flag = new int[max+1];
        for (;left <= right; left++){
            int ele = this.arrays[left];
            flag[ele]++;
            //当出现满足条件元素时，返回元素
            if (flag[ele] >= threshold){
                return ele;
            }
        }
        return -1;
    }
}

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * MajorityChecker obj = new MajorityChecker(arr);
 * int param_1 = obj.query(left,right,threshold);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
