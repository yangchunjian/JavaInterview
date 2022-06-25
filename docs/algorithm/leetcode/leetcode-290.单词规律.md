---
title: 单词规律
date: 2022-06-02 23:45:13
permalink: /pages/d394c0/
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

给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

 

示例1:

    输入: pattern = "abba", str = "dog cat cat dog"
    输出: true
示例 2:

    输入:pattern = "abba", str = "dog cat cat fish"
    输出: false
示例 3:

    输入: pattern = "aaaa", str = "dog cat cat dog"
    输出: false
 

提示:

- 1 <= pattern.length <= 300
- pattern 只包含小写英文字母
- 1 <= s.length <= 3000
- s 只包含小写英文字母和 ' '
- s 不包含 任何前导或尾随对空格
- s 中每个单词都被 单个空格 分隔

## 思路

java+hashMap 这道题说的是对应关系，那首先想到的集合就是Map，将key（a）-value（dog）存在一起，每当遇到一个字母就去查看对应的单词。 失败有两种情况： 1.key存在，经过查找字母对应的单词和这个单词不匹配； 2.key不存在，但是这个单词已经被存了；


## 解法
```java

class Solution {
    public static boolean wordPattern(String pattern, String str) {
        if(pattern == null || str==null) return false;
        String[] string = str.split(" ");
        if(pattern.length() != string.length) return false;
        HashMap<Character,String> map = new HashMap<>();

        for(int i=0; i<pattern.length(); i++){
            char tmp = pattern.charAt(i);
            //key已经在
            if(map.containsKey(tmp)){
                //不对应就失败
                if(!map.get(tmp).equals(string[i])) return false;
            }
            //key不存在
            else{
                //两个value的值一样 a-dog b-dog->false
                if (map.containsValue(string[i])) return false;
                else
                //添加k-v值
                map.put(tmp,string[i]);
            }
        }
        return true;
    }}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
