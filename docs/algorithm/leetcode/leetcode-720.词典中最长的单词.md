---
title: 词典中最长的单词
date: 2022-10-05 15:59:12
permalink: /pages/6a0be8/
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

给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

 

示例 1：

    输入：words = ["w","wo","wor","worl", "world"]
    输出："world"
    解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
示例 2：

    输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
    输出："apple"
    解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply" 
 

提示：

- 1 <= words.length <= 1000
- 1 <= words[i].length <= 30
- 所有输入的字符串 words[i] 都只包含小写字母。


## 思路

        //对数组排序，再利用Set对字母存储，小的单词一定包含在后面大的单词里面。后面只需要取前缀相同的
        //对字母排序后，第一个单词一定是共有的，后面只需在此基础上添加


## 解法
```java

class Solution {
    public String longestWord(String[] words) {
        //对数组排序，再利用Set对字母存储，小的单词一定包含在后面大的单词里面。后面只需要取前缀相同的
        //对字母排序后，第一个单词一定是共有的，后面只需在此基础上添加
        Arrays.sort(words);

        Set<String> set = new HashSet<>();
        String res = "";
        for (String s : words) {
            //如果单词只有一个字母，那一定是共有的
            if (s.length() == 1 || set.contains(s.substring(0, s.length() - 1))) {
                res = s.length() > res.length() ? s : res;
                set.add(s);
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
