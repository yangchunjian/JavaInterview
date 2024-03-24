---
title: 字符串的排列
date: 2022-07-24 20:34:09
permalink: /pages/b6bbb6/
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
给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

换句话说，s1 的排列之一是 s2 的 子串 。

 

示例 1：

    输入：s1 = "ab" s2 = "eidbaooo"
    输出：true
    解释：s2 包含 s1 的排列之一 ("ba").
示例 2：

    输入：s1= "ab" s2 = "eidboaoo"
    输出：false
 

提示：

- 1 <= s1.length, s2.length <= 10<sup>4</sup>
- s1 和 s2 仅包含小写字母


## 思路

    滑动窗口

## 解法
```java

class Solution {
    public boolean checkInclusion(String s1, String s2) {

        int sz = s2.length();
        Map<Character, Integer> need = new HashMap<>();
        Map<Character, Integer> window = new HashMap<>();
        for(char c : s1.toCharArray()){
            need.put(c, need.getOrDefault(c,0)+1);
        }

        int left = 0, right = 0;
        int valid = 0;
        while(right < sz){
            //进来的字符
            char c = s2.charAt(right);
            right++; //扩大窗口
            //改变窗口状态
            if(need.containsKey(c)){
                window.put(c, window.getOrDefault(c,0)+1);
                if(window.get(c).equals(need.get(c))) valid++;
            }

            //判断是否要收缩
            while(valid == need.size()){
                //子串包含s1的全部字符 且 长度相等 即 满足题意
                if(right - left == s1.length()) return true;
                //要移出的字符
                char d = s2.charAt(left);
                left++; //缩小窗口
                //改变窗口状态
                if(need.containsKey(d)){
                    if(window.get(d).equals(need.get(d))) valid--;
                    window.put(d, window.getOrDefault(d,0)-1);
                }
            }
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
