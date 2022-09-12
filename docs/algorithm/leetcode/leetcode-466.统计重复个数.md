---
title: 统计重复个数
date: 2022-09-12 19:57:03
permalink: /pages/8bf252/
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

定义 str = [s, n] 表示 str 由 n 个字符串 s 连接构成。

- 例如，str == ["abc", 3] =="abcabcabc" 。
- 如果可以从 s2 中删除某些字符使其变为 s1，则称字符串 s1 可以从字符串 s2 获得。

- 例如，根据定义，s1 = "abc" 可以从 s2 = "abdbec" 获得，仅需要删除加粗且用斜体标识的字符。
- 现在给你两个字符串 s1 和 s2 和两个整数 n1 和 n2 。由此构造得到两个字符串，其中 str1 = [s1, n1]、str2 = [s2, n2] 。

请你找出一个最大整数 m ，以满足 str = [str2, m] 可以从 str1 获得。

 

示例 1：

    输入：s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
    输出：2
示例 2：

    输入：s1 = "acb", n1 = 1, s2 = "acb", n2 = 1
    输出：1
 

提示：

- 1 <= s1.length, s2.length <= 100
- s1 和 s2 由小写英文字母组成
- 1 <= n1, n2 <= 10<sup>6</sup>



## 思路

暴力解法

## 解法
```java

class Solution {
    public int getMaxRepetitions(String s1, int n1, String s2, int n2) {
        char[] ss1 = s1.toCharArray();
        char[] ss2 = s2.toCharArray();

        /**
        * index2为ss2的索引， num1当前使用了ss1的个数， num2当前匹配的ss2的个数
        */
        int index2 = 0 , num1 = 0, num2 = 0;
        while(num1 < n1){
            for(int i = 0 ; i < ss1.length ; i ++){
                if(ss1[i] == ss2[index2]){
                    if(index2 == ss2.length - 1) {
                        index2 = 0;
                        num2 ++;
                    }else{
                        index2 ++;
                    }
                        
                }
            }
            num1++;
        }
        return num2 / n2;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
