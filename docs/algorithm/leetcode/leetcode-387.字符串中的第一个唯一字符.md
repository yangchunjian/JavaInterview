---
title: 字符串中的第一个唯一字符
date: 2022-07-16 20:46:42
permalink: /pages/a9d91e/
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


给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

 

示例 1：

    输入: s = "leetcode"
    输出: 0
示例 2:

    输入: s = "loveleetcode"
    输出: 2
示例 3:

    输入: s = "aabb"
    输出: -1
 

提示:

- 1 <= s.length <= 10<sup>5</sup>
- s 只包含小写字母


## 思路

    indexOf lastIndexOf

## 解法
```java

class Solution {
    public int firstUniqChar(String s) {

        for(int i=0; i<s.length(); i++){
            int first = s.indexOf(s.charAt(i));
            int last = s.lastIndexOf(s.charAt(i));
            if(first ==  last){
                return i;
            }
        }
        return -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
