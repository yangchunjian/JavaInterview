---
title: 反转字符串中的元音字母
date: 2022-09-12 00:04:38
permalink: /pages/481bd4/
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

给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

 

示例 1：

    输入：s = "hello"
    输出："holle"
示例 2：

    输入：s = "leetcode"
    输出："leotcede"
 

提示：

- 1 <= s.length <= 3 * 10<sup>5</sup>
- s 由 可打印的 ASCII 字符组成


## 思路

两边收缩替换

## 解法
```java

class Solution {
    public String reverseVowels(String s) {

        char temp;
        char[] str = s.toCharArray();
        String letter = "aeuioAEIUO";
        int i = 0,j = s.length()-1;
        while(i < j){
            if(letter.indexOf(str[i])!= -1  && letter.indexOf(str[j])!= -1){
                temp = str[i];
                str[i] = str[j];
                str[j] = temp;
                i++;j--;
            }else if(letter.indexOf(str[i])!= -1){
                j--;
            }else if(letter.indexOf(str[j])!= -1){
                i++;
            }else{
                i++;
                j--;
            }
        }
        return new String(str);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
