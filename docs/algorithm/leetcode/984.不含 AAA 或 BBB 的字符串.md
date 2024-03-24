---
title: 不含 AAA 或 BBB 的字符串
date: 2022-11-20 20:29:56
permalink: /pages/520f2c/
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

给定两个整数 a 和 b ，返回 任意 字符串 s ，要求满足：

s 的长度为 a + b，且正好包含 a 个 'a' 字母与 b 个 'b' 字母；
子串 'aaa' 没有出现在 s 中；
子串 'bbb' 没有出现在 s 中。
 

示例 1：

输入：a = 1, b = 2
输出："abb"
解释："abb", "bab" 和 "bba" 都是正确答案。
示例 2：

输入：a = 4, b = 1
输出："aabaa"
 

提示：

- 0 <= a, b <= 100
- 对于给定的 a 和 b，保证存在满足要求的 s 


## 思路

递归

## 解法
```java

class Solution {
    public String strWithout3a3b(int a, int b) {
        if (b == 0) {
            return string(a, "a");
        }
        if (a == 0) {
            return string(b, "b");
        }
        if (a == b) {
            return "ab" + strWithout3a3b(a-1, b-1);
        }
        return a > b ? "aab" + strWithout3a3b(a-2, b-1) : "bba" + strWithout3a3b(a-1, b-2);
    }

    public String string(int a, String str) {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < a; i++) {
            sb.append(str);
        }
        return sb.toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
