---
title: 移除无效的括号
date: 2023-02-12 21:57:16
permalink: /pages/1a436e/
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

给你一个由 '('、')' 和小写字母组成的字符串 s。

你需要从字符串中删除最少数目的 '(' 或者 ')' （可以删除任意位置的括号)，使得剩下的「括号字符串」有效。

请返回任意一个合法字符串。

有效「括号字符串」应当符合以下 任意一条 要求：

- 空字符串或只包含小写字母的字符串
- 可以被写作 AB（A 连接 B）的字符串，其中 A 和 B 都是有效「括号字符串」
- 可以被写作 (A) 的字符串，其中 A 是一个有效的「括号字符串」

示例 1：

    输入：s = "lee(t(c)o)de)"
    输出："lee(t(c)o)de"
    解释："lee(t(co)de)" , "lee(t(c)ode)" 也是一个可行答案。
示例 2：

    输入：s = "a)b(c)d"
    输出："ab(c)d"
示例 3：

    输入：s = "))(("
    输出：""
    解释：空字符串也是有效的
 

提示：

- 1 <= s.length <= 10<sup>5</sup>
- s[i] 可能是 '('、')' 或英文小写字母


## 思路

JAVA-栈：

## 解法
```java

class Solution {
    // JAVA-栈：


    public String minRemoveToMakeValid(String s) {
        Stack<Integer> stack = new Stack<>();
        StringBuilder build = new StringBuilder();
        boolean[] inArr = new boolean[s.length()];

        for(int i = 0; i < s.length(); i++){
            if(s.charAt(i) == '('){
                stack.push(i);
                inArr[i] = true;
            }else if(s.charAt(i) == ')'){
                if(!stack.isEmpty()){
                    inArr[stack.pop()] = false;
                }else{
                    inArr[i] = true;
                }
            }
        }

        for(int i = 0; i < inArr.length; i++){
            if(!inArr[i]) build.append(s.charAt(i));
        }
        return build.toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
