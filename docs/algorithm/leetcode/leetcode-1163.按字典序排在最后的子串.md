---
title: 按字典序排在最后的子串
date: 2023-02-21 21:31:09
permalink: /pages/19914f/
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

给你一个字符串 s ，找出它的所有子串并按字典序排列，返回排在最后的那个子串。

 

示例 1：

    输入：s = "abab"
    输出："bab"
    解释：我们可以找出 7 个子串 ["a", "ab", "aba", "abab", "b", "ba", "bab"]。按字典序排在最后的子串是 "bab"。
示例 2：

    输入：s = "leetcode"
    输出："tcode"
 

提示：

- 1 <= s.length <= 4 * 10<sup>5</sup>
- s 仅含有小写英文字符。

## 思路

双指针

## 解法
```java

class Solution {

    public String lastSubstring(String s) {
 
 
        int n = s.length();
        int k = 0;
        int i = 0, j = 1;
        while (k < n && i < n && j < n) {
            int x = compareChar(s, i+k, j+k);
            if (x == 0) {
                k++;
                continue;
            } else if (x < 0) {
                j = j + k + 1;
            } else {
                i = i + k + 1;
            }
            if (i == j) {
                i++;
            }
            k = 0;
        }
        return s.substring(Math.min(i, j));
    }

    //将ascii码大的字符排在前面
    private int compareChar(String s, int i, int j) {
        int n = s.length();
        if (i >= n) {
            return 1;
        }
        if (j >= n) {
            return -1;
        }
        if (s.charAt(i) == s.charAt(j)) {
            return 0;
        }
        return s.charAt(i) > s.charAt(j) ? -1 : 1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
