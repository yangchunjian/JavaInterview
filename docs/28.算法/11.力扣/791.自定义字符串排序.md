---
title: 自定义字符串排序
date: 2022-10-15 19:38:31
permalink: /pages/1d4986/
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

给定两个字符串 order 和 s 。order 的所有单词都是 唯一 的，并且以前按照一些自定义的顺序排序。

对 s 的字符进行置换，使其与排序的 order 相匹配。更具体地说，如果在 order 中的字符 x 出现字符 y 之前，那么在排列后的字符串中， x 也应该出现在 y 之前。

返回 满足这个性质的 s 的任意排列 。

 

示例 1:

    输入: order = "cba", s = "abcd"
    输出: "cbad"
    解释: 
    “a”、“b”、“c”是按顺序出现的，所以“a”、“b”、“c”的顺序应该是“c”、“b”、“a”。
    因为“d”不是按顺序出现的，所以它可以在返回的字符串中的任何位置。“dcba”、“cdba”、“cbda”也是有效的输出。
示例 2:

    输入: order = "cbafg", s = "abcd"
    输出: "cbad"
 

提示:

- 1 <= order.length <= 26
- 1 <= s.length <= 200
- order 和 s 由小写英文字母组成
- order 中的所有字符都 不同


## 思路

    int[] rec = new int[26];

## 解法
```java

class Solution {
    public String customSortString(String S, String T) {
        StringBuilder sb = new StringBuilder();
        // 记录T中每个字符出现的次数
        int[] rec = new int[26];
        for(char c: T.toCharArray()){
            rec[c-'a']++;
        }
        // 遍历S，如果S中的字符也在T中，则将该字符全部加入
        for(char c: S.toCharArray()){
            if(rec[c-'a']!=0){
                for(int i=0;i<rec[c-'a'];i++){
                    sb.append(c);
                }
                rec[c-'a'] = 0;
            }
        }
        // 连接T剩下的在S中不存在的字符
        for(int i=0;i<rec.length;i++){
            if(rec[i]!=0){
                for(int j=0;j<rec[i];j++){
                    sb.append((char)(i+'a'));
                }
            }
        }
        return sb.toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
