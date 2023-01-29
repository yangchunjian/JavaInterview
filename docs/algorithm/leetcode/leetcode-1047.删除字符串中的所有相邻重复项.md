---
title: 删除字符串中的所有相邻重复项
date: 2023-01-03 20:20:43
permalink: /pages/604d41/
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

给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

 

示例：

    输入："abbaca"
    输出："ca"
    解释：
    例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 

提示：

- 1 <= S.length <= 20000
- S 仅由小写英文字母组成。


## 思路

用数组代替集合能够快速提高效率，把 charsArray 当成栈就不会持续申请内存空间

## 解法
```java

class Solution {
    public String removeDuplicates(String S) {
//  用数组代替集合能够快速提高效率，把 charsArray 当成栈就不会持续申请内存空间
        int index = -1;
        char[] chars = S.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            if (index >= 0 && chars[index] == chars[i]) {
                index--;
            } else {
                index++;
                chars[index] = chars[i];
            }
        }
        return String.copyValueOf(chars, 0, index + 1);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
