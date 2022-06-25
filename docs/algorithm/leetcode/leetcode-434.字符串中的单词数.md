---
title: 字符串中的单词数
date: 2022-06-15 23:56:09
permalink: /pages/55241a/
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
---

## 题目
统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

    输入: "Hello, my name is John"
    输出: 5
    解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。



## 思路

    String.split
 
## 解法
```java

class Solution {

    public int countSegments(String s) {
        int ans=0;
        String[] ss=s.split(" ");
        for(String e:ss){
            if(e.length()!=0){
                ++ans;
            }
        }
        return ans;
    }
    
    }

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
