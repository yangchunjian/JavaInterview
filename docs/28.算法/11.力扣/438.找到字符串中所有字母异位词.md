---
title: 找到字符串中所有字母异位词
date: 2022-06-15 23:52:53
permalink: /pages/a73666/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---

## 题目
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

 

示例 1:

    输入: s = "cbaebabacd", p = "abc"
    输出: [0,6]
    解释:
    起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
    起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 示例 2:

    输入: s = "abab", p = "ab"
    输出: [0,1,2]
    解释:
    起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
    起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
    起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 

提示:

- 1 <= s.length, p.length <= 3 * 10<sup>4</sup>
- s 和 p 仅包含小写字母


## 思路

    滑动窗口

## 解法
```java
class Solution {
    
    //滑动窗口
    public List<Integer> findAnagrams(String s, String p) {
        int m = s.length();
        int n = p.length();
        List<Integer> res = new ArrayList<>();
        if(m<n)return res;
        int[] sc = new int[26];
        int[] pc = new int[26];
        for(int i = 0;i<n;i++){
            sc[s.charAt(i)-'a']++;
            pc[p.charAt(i)-'a']++;
        }
        if(Arrays.equals(sc,pc)){
            res.add(0);
        }
        for(int i = n;i<m;i++){
           sc[s.charAt(i-n)-'a']--;
           sc[s.charAt(i)-'a']++;
           if(Arrays.equals(sc,pc)){
            res.add(i-n+1);
           }
        }
        return res;
    }
    
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
