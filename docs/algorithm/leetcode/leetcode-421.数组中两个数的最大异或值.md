---
title: 数组中两个数的最大异或值
date: 2022-06-15 23:59:28
permalink: /pages/9f58b6/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 题目
给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

进阶：你可以在 O(n) 的时间解决这个问题吗？

 

示例 1：

    输入：nums = [3,10,5,25,2,8]
    输出：28
    解释：最大运算结果是 5 XOR 25 = 28.
示例 2：

    输入：nums = [0]
    输出：0
示例 3：

    输入：nums = [2,4]
    输出：6
示例 4：

    输入：nums = [8,10,2]
    输出：10
示例 5：

    输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
    输出：127
 

提示：

- 1 <= nums.length <= 2 * 10<sup>4</sup>
- 0 <= nums[i] <= 2<sup>31</sup> - 1



## 思路

    
    // 前缀树节点
    private static class Node {
        int val = 0;
        Node[] next = new Node[2];
    }
    

## 解法
```java

class Solution {

    // 前缀树节点
    private static class Node {
        int val = 0;
        Node[] next = new Node[2];
    }
    
    public int findMaximumXOR(int[] nums) {
        // 寻找最大的数字，确定最长需要几位表示二进制
        int max = Integer.MIN_VALUE;
        for (int num: nums) max = Math.max(max, num);
        int length = Integer.toBinaryString(max).length();

        // 插入前缀树
        Node head = new Node();
        for (int num : nums) {
            Node cur = head;
            for (int i = length; i >= 0; i--) {
                int bit = num >> i & 1;
                if (cur.next[bit] == null) {
                    cur.next[bit] = new Node();
                }
                cur = cur.next[bit];
            }
            cur.val = num;
        }

        max = Integer.MIN_VALUE;
        // 一个一个数字的测试，寻找当前数字的最大异或值
        for (int num : nums) {
            Node cur = head;
            for (int i = length; i >= 0; i--) {
                int bit = num >> i & 1;

                // 能往相反的方向走尽量往相反的方向走
                if (cur.next[1 - bit] != null) {
                    cur = cur.next[1 - bit];
                } else {
                    cur = cur.next[bit];
                }
            }

            // 记录最大值
            max = Math.max(max, num ^ cur.val);
        }

        return max;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
