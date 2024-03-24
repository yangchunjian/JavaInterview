---
title: 增减字符串匹配
date: 2022-11-04 20:59:00
permalink: /pages/6370f7/
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

由范围 [0,n] 内所有整数组成的 n + 1 个整数的排列序列可以表示为长度为 n 的字符串 s ，其中:

- 如果 perm[i] < perm[i + 1] ，那么 s[i] == 'I' 
- 如果 perm[i] > perm[i + 1] ，那么 s[i] == 'D' 

给定一个字符串 s ，重构排列 perm 并返回它。如果有多个有效排列perm，则返回其中 任何一个 。

 

示例 1：

    输入：s = "IDID"
    输出：[0,4,1,3,2]
示例 2：

    输入：s = "III"
    输出：[0,1,2,3]
示例 3：

    输入：s = "DDI"
    输出：[3,2,0,1]
 

提示：

- 1 <= s.length <= 10<sup>5</sup>
- s 只包含字符 "I" 或 "D"


## 思路

双指针

## 解法
```java

class Solution {
    public int[] diStringMatch(String s) {
        int len = s.length();
        int countleft = 0, countright = len;
        int[] res = new int[len + 1];
        for(int i = 0; i < len; i++){
            if(s.charAt(i) == 'I'){
                res[i] = countleft;
                countleft++;
            }else if(s.charAt(i) == 'D'){
                res[i] = countright;
                countright--;
            }
        }
        res[len] = countleft;
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
