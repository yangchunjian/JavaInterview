---
title: 单字符重复子串的最大长度
date: 2022-12-08 20:35:36
permalink: /pages/004f7d/
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

如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。

给你一个字符串 text，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。

 

示例 1：

    输入：text = "ababa"
    输出：3
示例 2：

    输入：text = "aaabaaa"
    输出：6
示例 3：

    输入：text = "aaabbaaa"
    输出：4
示例 4：

    输入：text = "aaaaa"
    输出：5
示例 5：

    输入：text = "abcdef"
    输出：1
 

提示：

- 1 <= text.length <= 20000
- text 仅由小写英文字母组成。



## 思路

二分加滑窗



## 解法
```java

class Solution {
    
    String text;
    int[] total = new int[26];
    public int maxRepOpt1(String text) {
        for (char c : text.toCharArray()){
            total[c - 'a']++;
        }
        this.text = text;
        int left = 0;
        int right = text.length() + 1;

        while (left + 1 < right){
            int mid = (left + right) / 2;

            if (check(mid)){
                left = mid;
            }else {
                right = mid;
            }
        }

        return left;
    }

    private boolean check(int len) {
        int[] arr = new int[26];

        for (int i = 0; i < text.length(); i++) {
            int index = text.charAt(i) - 'a';
            arr[index]++;
            if (i >= len){
                arr[text.charAt(i - len) - 'a']--;
            }

            if (arr[index] == len || (arr[index] == len - 1 && total[index] >= len)){
                return true;
            }
        }

        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
