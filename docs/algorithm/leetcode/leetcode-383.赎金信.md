---
title: 赎金信
date: 2022-06-15 23:36:52
permalink: /pages/dab15c/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---

## 题目
给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

 

示例 1：

    输入：ransomNote = "a", magazine = "b"
    输出：false
示例 2：

    输入：ransomNote = "aa", magazine = "ab"
    输出：false
示例 3：

    输入：ransomNote = "aa", magazine = "aab"
    输出：true
 

提示：

- 1 <= ransomNote.length, magazine.length <= 10<sup>5</sup>
- ransomNote 和 magazine 由小写英文字母组成



## 思路

初始化int[] arr = new int[26];字符数组


## 解法
```java

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {

        //记录杂志字符串出现的次数
        int[] arr = new int[26];
        int temp;
        for (int i = 0; i < magazine.length(); i++) {
            temp = magazine.charAt(i) - 'a';
            arr[temp]++;
        }
        for (int i = 0; i < ransomNote.length(); i++) {
            temp = ransomNote.charAt(i) - 'a';
            //对于金信中的每一个字符都在数组中查找
            //找到相应位减一，否则找不到返回false
            if (arr[temp] > 0) {
                arr[temp]--;
            } else {
                return false;
            }
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
