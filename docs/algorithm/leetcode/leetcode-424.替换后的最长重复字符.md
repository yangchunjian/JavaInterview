---
title: 替换后的最长重复字符
date: 2022-06-15 23:57:33
permalink: /pages/8a573f/
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
给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

在执行上述操作后，返回包含相同字母的最长子字符串的长度。

 

示例 1：

    输入：s = "ABAB", k = 2
    输出：4
    解释：用两个'A'替换为两个'B',反之亦然。
示例 2：

    输入：s = "AABABBA", k = 1
    输出：4
    解释：
    将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
    子串 "BBBB" 有最长重复字母, 答案为 4。
 

提示：

- 1 <= s.length <= 10<sup>5</sup>
- s 仅由大写英文字母组成
- 0 <= k <= s.length



## 思路

滑动窗口

## 解法
```java

class Solution {
    
    public int characterReplacement(String s, int k) {
        /*
        滑窗+字符统计:
        题意等价于:求一个最大长度的滑窗,该窗口内通过修改最多k个字符使得窗口内所有字符一样
        再进一步等价:达到要求修改的最少字符数 = 窗口长度 - 出现次数最多的字符个数 <= k
         */
        int len = s.length();
        int[] cntMap = new int[26];
        int res = 1;
        for (int l = 0, r = 0; r < len; r++) {
            ++cntMap[s.charAt(r) - 'A'];    // 新字母加入窗口
            while (!valid(cntMap, k)) { // 排除不符合条件的s[l]
                --cntMap[s.charAt(l) - 'A'];
                l++;
            }
            res = Math.max(res, r - l + 1); // 维护符合条件的最大窗口长度
        }
        return res;
    }

    // 判断是否能最多修改k个字符使得窗口内字母完全一样
    private boolean valid(int[] cntMap, int k) {
        int maxCnt = 0; // 出现频率最高的次数
        int total = 0;  // 字母总数
        for (int i = 0; i < 26; i++) {
            maxCnt = Math.max(maxCnt, cntMap[i]);
            total += cntMap[i];
        }
        return total - maxCnt <= k; // 需要修改的字母个数<=k表明符合要求
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
