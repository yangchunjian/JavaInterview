---
title: 单词拆分II
date: 2022-05-22 23:24:58
permalink: /pages/54f51c/
categories: 
  - algorithm
  - leetcode
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---


## 题目
给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序 返回所有这些可能的句子。

注意：词典中的同一个单词可能在分段中被重复使用多次。

 

示例 1：

    输入:s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
    输出:["cats and dog","cat sand dog"]
示例 2：

    输入:s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
    输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
    解释: 注意你可以重复使用字典中的单词。
示例 3：

    输入:s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
    输出:[]
 

提示：

- 1 <= s.length <= 20
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 10
- s 和 wordDict[i] 仅有小写英文字母组成
- wordDict 中所有字符串都 不同


## 思路

回溯，建立两个list，一个存结果，一个存临时结果，临时结果转成String，用String.join(" ", list)

## 解法
```java

class Solution {
    private List<String> res = new ArrayList<>();
    private List<String> list = new ArrayList<>();
    public List<String> wordBreak(String s, List<String> wordDict) {
        backTracking(s, wordDict, 0);
        return res;
    }

    private void backTracking(String s, List<String> wordDict, int start) {
        if (start == s.length()) {
            res.add(String.join(" ", list));
            return;
        }
        for (int i = start; i < s.length(); i++) {
            if (wordDict.contains(s.substring(start, i + 1))) {
                list.add(s.substring(start, i + 1));
                backTracking(s, wordDict, i + 1);
                list.remove(list.size() - 1);
            }
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
