---
title: 最大单词长度乘积
date: 2022-06-19 12:19:05
permalink: /pages/3972eb/
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

给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

 

示例 1：

    输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
    输出：16 
    解释：这两个单词为 "abcw", "xtfn"。
示例 2：

    输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
    输出：4 
    解释：这两个单词为 "ab", "cd"。
示例 3：

    输入：words = ["a","aa","aaa","aaaa"]
    输出：0 
    解释：不存在这样的两个单词。
 

提示：

- 2 <= words.length <= 1000
- 1 <= words[i].length <= 1000
- words[i] 仅包含小写字母



## 思路

        全是小写字母, 可以用一个32为整数表示一个word中出现的字母, 
        hash[i]存放第i个单词出现过的字母, a对应32位整数的最后一位,
        b对应整数的倒数第二位, 依次类推. 时间复杂度O(N^2)
        判断两两单词按位与的结果, 如果结果为0且长度积大于最大积则更新

## 解法
```java

class Solution {
    public int maxProduct(String[] words) {
        /**
        全是小写字母, 可以用一个32为整数表示一个word中出现的字母, 
        hash[i]存放第i个单词出现过的字母, a对应32位整数的最后一位,
        b对应整数的倒数第二位, 依次类推. 时间复杂度O(N^2)
        判断两两单词按位与的结果, 如果结果为0且长度积大于最大积则更新
        **/
        int n = words.length;
        int[] hash = new int[n];
        int max = 0;
        for(int i = 0; i < n; ++i) {
            for(char c : words[i].toCharArray())
                hash[i] |= 1 << (c-'a');
        }
        
        for(int i = 0; i < n-1; ++i) {
            for(int j = i+1; j < n; ++j) {
                if((hash[i] & hash[j]) == 0)
                    max = Math.max(words[i].length() * words[j].length(), max);
            }
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
