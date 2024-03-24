---
title: 查找共用字符
date: 2022-11-22 08:44:15
permalink: /pages/ce8688/
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

给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。
 

示例 1：

    输入：words = ["bella","label","roller"]
    输出：["e","l","l"]
示例 2：

    输入：words = ["cool","lock","cook"]
    输出：["c","o"]
 

提示：

- 1 <= words.length <= 100
- 1 <= words[i].length <= 100
- words[i] 由小写英文字母组成


## 思路

可以用hashmap来表示**字符-数量**之间的关系，但是考虑到效率的问题，我们可以使用数组来对代码进行优化。用数组res的下标i表示是哪个字符，用res[i]表示该字符出现的次数

## 解法
```java

class Solution {
    public List<String> commonChars(String[] A) {
        List<String> list = new ArrayList<>();
        int[] res = new int[26];
        for (char c : A[0].toCharArray()) {
            res[c - 'a']++;
        }
        for (int i = 1; i < A.length; i++) {
            int[] temp = new int[26];
            for (char c : A[i].toCharArray()) {
                temp[c - 'a']++;
            }
            for (int j = 0; j < 26; j++) {
                res[j] = Math.min(res[j], temp[j]);
            }
        }
        for (int i = 0; i < res.length; i++) {
            if (res[i] > 0) {
                for (int j = 0; j < res[i]; j++) {
                    list.add(((char) ('a' + i) + ""));
                }
            }
        }
        return list;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
