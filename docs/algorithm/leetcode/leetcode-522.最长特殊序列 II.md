---
title: 最长特殊序列 II
date: 2022-09-02 16:09:29
permalink: /pages/fa3278/
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

给定字符串列表 strs ，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 -1 。

特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

 s 的 子序列可以通过删去字符串 s 中的某些字符实现。

例如，"abc" 是 "aebdc" 的子序列，因为您可以删除"aebdc"中的下划线字符来得到 "abc" 。

"aebdc"的子序列还包括"aebdc"、 "aeb" 和 "" (空字符串)。
 

示例 1：

    输入: strs = ["aba","cdc","eae"]
    输出: 3
示例 2:

    输入: strs = ["aaa","aaa","aa"]
    输出: -1
 

提示:

- 2 <= strs.length <= 50
- 1 <= strs[i].length <= 10
- strs[i] 只包含小写英文字母




## 思路


    在 strs 中寻找 s，这个 s 不是其他字符串的子序列
    判断 a 是否为 b 的子序列 --> b 是否可以通过删除字符得到 a

## 解法
```java

class Solution {
    public int findLUSlength(String[] strs) {


        int N = strs.length;
        int ans = -1;
        boolean flag = true;
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (i != j && isSubStr(strs[i], strs[j])) {
                    flag = false;
                    break;
                }
            }
            if (flag) ans = Math.max(ans, strs[i].length());
            flag = true;
        }
        return ans;
    }

    private boolean isSubStr(String str1, String str2) {
        int index1 = 0;
        int index2 = 0;
        while (index1 < str1.length() && index2 < str2.length()) {
            if (str1.charAt(index1) == str2.charAt(index2)) index1++;
            index2++;
        }
        return index1 == str1.length();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
