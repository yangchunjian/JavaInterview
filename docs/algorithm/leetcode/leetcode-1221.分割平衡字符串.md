---
title: 分割平衡字符串
date: 2023-02-14 21:40:43
permalink: /pages/c221d7/
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

平衡字符串 中，'L' 和 'R' 字符的数量是相同的。

给你一个平衡字符串 s，请你将它分割成尽可能多的子字符串，并满足：

- 每个子字符串都是平衡字符串。

返回可以通过分割得到的平衡字符串的 最大数量 。

 

示例 1：

    输入：s = "RLRRLLRLRL"
    输出：4
    解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
示例 2：

    输入：s = "RLRRRLLRLL"
    输出：2
    解释：s 可以分割为 "RL"、"RRRLLRLL"，每个子字符串中都包含相同数量的 'L' 和 'R' 。
    注意，s 无法分割为 "RL"、"RR"、"RL"、"LR"、"LL" 因为第 2 个和第 5 个子字符串不是平衡字符串。
示例 3：

    输入：s = "LLLLRRRR"
    输出：1
    解释：s 只能保持原样 "LLLLRRRR" 。
 

提示：

- 2 <= s.length <= 1000
- s[i] = 'L' 或 'R'
- s 是一个 平衡 字符串

## 思路

for

## 解法
```java

class Solution {
    public int balancedStringSplit(String s) {
        int num = 0;
        int n = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i)=='R')
                n++;
            if (s.charAt(i) == 'L')
                n--;
            if (n == 0)
                num++;
        }
        return num;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
