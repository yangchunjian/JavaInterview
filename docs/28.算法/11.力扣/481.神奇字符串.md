---
title: 神奇字符串
date: 2022-06-25 11:56:31
permalink: /pages/bb165f/
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

神奇字符串 s 仅由 '1' 和 '2' 组成，并需要遵守下面的规则：

神奇字符串 s 的神奇之处在于，串联字符串中 '1' 和 '2' 的连续出现次数可以生成该字符串。
s 的前几个元素是 s = "1221121221221121122……" 。如果将 s 中连续的若干 1 和 2 进行分组，可以得到 "1 22 11 2 1 22 1 22 11 2 11 22 ......" 。每组中 1 或者 2 的出现次数分别是 "1 2 2 1 1 2 1 2 2 1 2 2 ......" 。上面的出现次数正是 s 自身。

给你一个整数 n ，返回在神奇字符串 s 的前 n 个数字中 1 的数目。

 

示例 1：

    输入：n = 6
    输出：3
    解释：神奇字符串 s 的前 6 个元素是 “122112”，它包含三个 1，因此返回 3 。 
示例 2：

    输入：n = 1
    输出：1
 

提示：

- 1 <= n <= 10<sup>5</sup>


## 思路

ArrayDeque

## 解法
```java

class Solution {
    public int magicalString(int n) {

    
        if (n < 3) {
            return 1;
        }
        //为避免一次添加两个数字导致越界
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 2;
        dp[2] = 2;
        //记录下次应该添加几个数字
        Deque<Integer> deque = new ArrayDeque<>();
        deque.offer(2);
        int val;
        for (int i = 3; i < n; i++) {
            val = deque.poll();
            //添加一个数字时,一定与上个数字不同
            dp[i] = getMagicOne(dp[i - 1]);
            deque.offer(dp[i]);
            //添加两个数字时,第一个数字一定与上一个数字不同,第二个数字与第一个数字相同
            if (val == 2) {
                dp[i + 1] = dp[i++];
                deque.offer(dp[i]);
            }
        }
        return getResult(dp, dp.length - 1);
    }

    private int getMagicOne(int val) {
        return val == 1 ? 2 : 1;
    }

    private int getResult(int[] nums, int end) {
        int res = 0;
        for (int i = 0; i < end; i++) {
            res += (nums[i] & 1);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
