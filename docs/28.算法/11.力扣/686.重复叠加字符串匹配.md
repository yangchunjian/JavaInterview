---
title: 重复叠加字符串匹配
date: 2022-09-21 23:07:08
permalink: /pages/a4c625/
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

给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

 

示例 1：

    输入：a = "abcd", b = "cdabcdab"
    输出：3
    解释：a 重复叠加三遍后为 "abcdabcdabcd", 此时 b 是其子串。
示例 2：

    输入：a = "a", b = "aa"
    输出：2
示例 3：

    输入：a = "a", b = "a"
    输出：1
示例 4：

    输入：a = "abc", b = "wxyz"
    输出：-1
 

提示：

- 1 <= a.length <= 10<sup>4</sup>
- 1 <= b.length <= 10<sup>4</sup>
- a 和 b 由小写英文字母组成


## 思路

    最多重复k+2次，k=len(b) / len(a)

## 解法
```java

class Solution {
    // 最多重复k+2次，k=len(b) / len(a)


    public int repeatedStringMatch(String a, String b) {
        boolean[]set = new boolean[26];
        for (char ch : a.toCharArray()) {
            set[ch - 'a'] = true;
        }
        for (char ch : b.toCharArray()) {
            if(!set[ch - 'a']) {
                return -1;
            }
        }
        int k = b.length() / a.length();
        StringBuilder str = new StringBuilder(a.repeat(k));
        for (int i = 0; i < 3; i++) {
            if (str.toString().contains(b)) {
                return k + i;
            }
            str.append(a);
        }
        return -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
