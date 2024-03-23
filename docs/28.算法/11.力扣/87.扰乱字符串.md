---
title: 扰乱字符串
date: 2022-05-21 13:47:55
permalink: /pages/fd7c8f/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
titleTag: Java
---


## 题目
使用下面描述的算法可以扰乱字符串 s 得到字符串 t ：

    如果字符串的长度为 1 ，算法停止
    如果字符串的长度 > 1 ，执行下述步骤：
    在一个随机下标处将字符串分割成两个非空的子字符串。即，如果已知字符串 s ，则可以将其分成两个子字符串 x 和 y ，且满足 s = x + y 。
    随机 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」。即，在执行这一步骤之后，s 可能是 s = x + y 或者 s = y + x 。
    在 x 和 y 这两个子字符串上继续从步骤 1 开始递归执行此算法。
给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。如果是，返回 true ；否则，返回 false 。

 

示例 1：

    输入：s1 = "great", s2 = "rgeat"
    输出：true
    解释：s1 上可能发生的一种情形是：
    "great" --> "gr/eat" // 在一个随机下标处分割得到两个子字符串
    "gr/eat" --> "gr/eat" // 随机决定：「保持这两个子字符串的顺序不变」
    "gr/eat" --> "g/r / e/at" // 在子字符串上递归执行此算法。两个子字符串分别在随机下标处进行一轮分割
    "g/r / e/at" --> "r/g / e/at" // 随机决定：第一组「交换两个子字符串」，第二组「保持这两个子字符串的顺序不变」
    "r/g / e/at" --> "r/g / e/ a/t" // 继续递归执行此算法，将 "at" 分割得到 "a/t"
    "r/g / e/ a/t" --> "r/g / e/ a/t" // 随机决定：「保持这两个子字符串的顺序不变」
    算法终止，结果字符串和 s2 相同，都是 "rgeat"
    这是一种能够扰乱 s1 得到 s2 的情形，可以认为 s2 是 s1 的扰乱字符串，返回 true
示例 2：

    输入：s1 = "abcde", s2 = "caebd"
    输出：false

示例 3：

    输入：s1 = "a", s2 = "a"
    输出：true
 

提示：

- s1.length == s2.length
- 1 <= s1.length <= 30
- s1 和 s2 由小写英文字母组成




## 思路

- 两个字符串出现的字符次数是否相等 
- 两个字符串长度是否相等 
- 子串匹配


## 解法
```java

class Solution {
    Map<String, Integer> map;
    public boolean helper(String s1, String s2) {
        //abc
        //bca
        int n1 = s1.length(), n2 = s2.length();
        if(n1 != n2)return false;
        if(n1 <= 1)return s1.equals(s2);
        String key = s1+"+"+s2;
        if(map.containsKey(key))return map.get(key) == 1?true : false;
        int[] alphabet1 = new int[26], alphabet2 = new int[26];
        for(char c:s1.toCharArray()){
            alphabet1[c - 'a']++;
        }
        for(char c:s2.toCharArray())
            alphabet2[c - 'a']++;
        for(int i=0;i<26;i++)
            if(alphabet1[i] != alphabet2[i])return false;
        
        for(int i=1;i<n1;i++){
            if(helper(s1.substring(0, i), s2.substring(0, i)) && helper(s1.substring(i, n1), s2.substring(i, n2))){
                map.put(key, 1);
                return true;
            }
            if(helper(s1.substring(0, i), s2.substring(n2-i, n2)) && helper(s1.substring(i, n1), s2.substring(0, n2-i))){
                map.put(key,1);
                return true;
            }
        }
        map.put(key, 0);
        return false;
    }
    public boolean isScramble(String s1, String s2){
        map = new HashMap<>();
        return helper(s1, s2);
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
