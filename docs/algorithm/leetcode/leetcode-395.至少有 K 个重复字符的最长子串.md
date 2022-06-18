---
title: 至少有 K 个重复字符的最长子串
date: 2022-06-18 21:07:54
permalink: /pages/00fab4/
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

给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

 

示例 1：

    输入：s = "aaabb", k = 3
    输出：3
    解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
示例 2：

    输入：s = "ababbc", k = 2
    输出：5
    解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 

提示：

- 1 <= s.length <= 10<sup>4</sup>
- s 仅由小写英文字母组成
- 1 <= k <= 10<sup>5</sup>



## 思路

递归

## 解法
```java

class Solution {
    public int longestSubstring(String s, int k) {
        int [] arr = new int[26];
        int len = s.length();
        for(int i = 0; i < len; i++){
            arr[s.charAt(i) - 'a'] ++;
        }
        int ans = 0;
        for(int i = 0; i < len; i++){
            if(arr[s.charAt(i) - 'a'] < k){
                return Math.max(longestSubstring(s.substring(0, i), k), longestSubstring(s.substring(i + 1, len), k));
            }
        }
        return len;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
