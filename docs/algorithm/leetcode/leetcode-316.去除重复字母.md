---
title: 去除重复字母
categories: 
  - algorithm
tags: 
  - 力扣
  - 去除重复字母
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-04-27 23:44:33
permalink: /pages/4988df/
tag: 
  text: java
titleTag: Java
---


## 题目
给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

 

示例 1：

    输入：s = "bcabc"
    输出："abc"
示例 2：
    
    输入：s = "cbacdcbc"
    输出："acdb"
 

提示：
::: warning
1 <= s.length <= 10<sup>4</sup>\
s 由小写英文字母组成
:::

## 思路
单调栈

## 解法

```java
class Solution {
    public String removeDuplicateLetters(String s) {
        char[] chars = s.toCharArray();
        int[] lastInx = new int[26];
        for (int i = 0; i < chars.length ; i++) {
            lastInx[chars[i] - 'a'] = i; //记录每个元素最后一次出现的位置
        }
        Deque<Character> stack = new ArrayDeque<>();
        boolean[] visited = new boolean[26]; //某一个字符是否在栈中出现
        for (int i = 0; i < chars.length; i++) {
            if (visited[chars[i] - 'a']) { //如果出现舍弃当前字符
                continue;
            }
            //当前字符在栈顶元素之前，且栈顶元素在后面还有
            while (!stack.isEmpty() && stack.peekLast() > chars[i] && lastInx[stack.peekLast() - 'a'] > i) {
                Character c = stack.removeLast();  //移除栈顶元素
                visited[c - 'a'] = false; //表示该字符没有在栈中出现
            }
            stack.addLast(chars[i]);
            visited[chars[i] - 'a'] = true;
        }
        StringBuilder sb = new StringBuilder();
        for(Character c : stack){
            sb.append(c);
        }
        return sb.toString();
    }
}
```