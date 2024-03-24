---
title: 仅仅反转字母
date: 2022-10-29 19:45:42
permalink: /pages/91a429/
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

给你一个字符串 s ，根据下述规则反转字符串：

- 所有非英文字母保留在原有位置。
- 所有英文字母（小写或大写）位置反转。

返回反转后的 s 。

 

示例 1：

    输入：s = "ab-cd"
    输出："dc-ba"
示例 2：

    输入：s = "a-bC-dEf-ghIj"
    输出："j-Ih-gfE-dCba"
示例 3：

    输入：s = "Test1ng-Leet=code-Q!"
    输出："Qedo1ct-eeLg=ntse-T!"
 

提示

- 1 <= s.length <= 100
- s 仅由 ASCII 值在范围 [33, 122] 的字符组成
- s 不含 '\"' 或 '\\'


## 思路


    // 头尾双指针

    // ♻️ 循环结束条件 （头 >= 尾）
    // 头元素不是字母 （头指针++）
    // 尾元素不是字母 （尾指针--）
    // 头尾元素都是字母 （头++ 尾--）

## 解法
```java

class Solution {
    // 头尾双指针

    // ♻️ 循环结束条件 （头 >= 尾）
    // 头元素不是字母 （头指针++）
    // 尾元素不是字母 （尾指针--）
    // 头尾元素都是字母 （头++ 尾--）
    public String reverseOnlyLetters(String s) {
        char[] chars = s.toCharArray();
        int sIndex = 0, eIndex = chars.length - 1;
        while (sIndex < eIndex) {
            if (!Character.isLetter(chars[sIndex])) {
                sIndex++;
            }
            if (!Character.isLetter(chars[eIndex])) {
                eIndex--;
            }
            if (Character.isLetter(chars[sIndex]) &&
                    Character.isLetter(chars[eIndex])) {
                char temp = chars[sIndex];
                chars[sIndex] = chars[eIndex];
                chars[eIndex] = temp;
                sIndex++;
                eIndex--;
            }
        }
        return new String(chars);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
