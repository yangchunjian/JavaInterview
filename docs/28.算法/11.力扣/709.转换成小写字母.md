---
title: 转换成小写字母
date: 2022-09-28 22:41:03
permalink: /pages/7a64ba/
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

给你一个字符串 s ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

 

示例 1：

    输入：s = "Hello"
    输出："hello"
示例 2：

    输入：s = "here"
    输出："here"
示例 3：

    输入：s = "LOVELY"
    输出："lovely"
 

提示：

- 1 <= s.length <= 100
- s 由 ASCII 字符集中的可打印字符组成



## 思路

sb.append((char)(c + 32));

## 解法
```java

class Solution {
    public String toLowerCase(String str) {
        if (str == null && "".equals(str)) {
            return null;
        }
        
        StringBuilder sb = new StringBuilder();
        for (char c : str.toCharArray()) {
            if (c >= 'A' && c <= 'Z') {
                sb.append((char)(c + 32));
            } else {
                sb.append(c);
            }
        }
        
        return sb.toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
