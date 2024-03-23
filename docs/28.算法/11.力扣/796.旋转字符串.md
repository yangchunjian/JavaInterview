---
title: 旋转字符串
date: 2022-10-15 21:21:48
permalink: /pages/3d6327/
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

给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。

s 的 旋转操作 就是将 s 最左边的字符移动到最右边。 

例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
 

示例 1:

    输入: s = "abcde", goal = "cdeab"
    输出: true
示例 2:

    输入: s = "abcde", goal = "abced"
    输出: false
 

提示:

- 1 <= s.length, goal.length <= 100
- s 和 goal 由小写英文字母组成


## 思路

只需比较一下两个字符串的长度，然后判断A + A中是否存在B就ok，因为A + A中已经包含了所有可能的移动情况

## 解法
```java

class Solution {
    // 思路：只需比较一下两个字符串的长度，然后判断A + A中是否存在B就ok，因为A + A中已经包含了所有可能的移动情况


    public boolean rotateString(String A, String B) {
        return A.length() == B.length() && (A + A).contains(B);

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
