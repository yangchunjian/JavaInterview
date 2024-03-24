---
title: 有序队列
date: 2022-10-29 14:13:09
permalink: /pages/b421cb/
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

给定一个字符串 s 和一个整数 k 。你可以从 s 的前 k 个字母中选择一个，并把它加到字符串的末尾。

返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

 

示例 1：

    输入：s = "cba", k = 1
    输出："acb"
    解释：
    在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。
    在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb”。
示例 2：

    输入：s = "baaca", k = 3
    输出："aaabc"
    解释：
    在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。
    在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。
 

提示：

- 1 <= k <= S.length <= 1000
- s 只由小写字母组成。


## 思路

k > 1时我们可以打乱得到任意我们想要是字符序列

## 解法
```java

class Solution {
    public String orderlyQueue(String s, int k) {
        //k > 1时我们可以打乱得到任意我们想要是字符序列
        if(k == 1){
            String ss = s;
            int len = s.length();
            for(int i=0; i<len-1; i++){
                s = s.substring(1) + s.charAt(0);
                if(s.compareTo(ss) < 0) ss = s;
            }
            return ss;
        } else {
            char[] chs = s.toCharArray();
            Arrays.sort(chs);
            return new String(chs);
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
