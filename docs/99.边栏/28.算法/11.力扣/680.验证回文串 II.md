---
title: 验证回文串 II
date: 2022-09-21 21:57:10
permalink: /pages/72de73/
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

给你一个字符串 s，最多 可以从中删除一个字符。

请你判断 s 是否能成为回文字符串：如果能，返回 true ；否则，返回 false 。

 

示例 1：

    输入：s = "aba"
    输出：true
示例 2：

    输入：s = "abca"
    输出：true
    解释：你可以删除字符 'c' 。
示例 3：

    输入：s = "abc"
    输出：false
 

提示：

- 1 <= s.length <= 10<sup>5</sup>
- s 由小写英文字母组成

## 思路

判断回文串显然是用双指针的，i从前往后遍历，j从后往前遍历。难点就是怎么去判断删除一个元素后的字符串是不是回文串，我提供一个思路：

以"abdda"这个串为例，此时i指向'b'，j指向'd'，发现不对了。

但是有一次删除的机会，我们自己写几个case其实就能发现，此时子串范围为(i+1, j)或(i, j-1)的俩子串只要有任意一个是回文串，则结果就是回文串，否则就不是。

## 解法
```java

class Solution {
    public boolean validPalindrome(String s) {
        int i = 0, j = s.length() - 1;
        while(i < j){
            if(s.charAt(i) != s.charAt(j)){
                return isValid(s, i + 1, j) || isValid(s, i, j - 1);
            }
            i++;
            j--;
        }
        return true;
    }
    
    public boolean isValid(String s, int i, int j){
        while(i < j){
            if(s.charAt(i) != s.charAt(j)){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
