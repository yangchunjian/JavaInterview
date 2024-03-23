---
title: 括号的分数
date: 2022-10-25 09:20:16
permalink: /pages/4bb2b0/
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

给定一个平衡括号字符串 S，按下述规则计算该字符串的分数：

- () 得 1 分。
- AB 得 A + B 分，其中 A 和 B 是平衡括号字符串。
- (A) 得 2 * A 分，其中 A 是平衡括号字符串。

示例 1：

    输入： "()"
    输出： 1
示例 2：

    输入： "(())"
    输出： 2
示例 3：

    输入： "()()"
    输出： 2
示例 4：

    输入： "(()(()))"
    输出： 6
 

提示：

- S 是平衡括号字符串，且只含有 ( 和 ) 。
- 2 <= S.length <= 50

## 思路

栈思想，但没有用到栈。给定一个标记n，若‘(’则n左移，若‘)’则n右移，若遇到()则sum+=n

## 解法
```java

class Solution {
    // 栈思想，但没有用到栈。给定一个标记n，若‘(’则n左移，若‘)’则n右移，若遇到()则sum+=n


    public int scoreOfParentheses(String S) {

        int length=S.length();
        int sum=0;
        int n=0;
        for(int i=0;i<length;i++)
        {
            if(S.charAt(i)=='(')
            {
                if(n==0)
                {
                    n=1;
                }
                else
                {
                    n=n<<1;
                }
            }
            else if(S.charAt(i)==')')
            {
                 if(S.charAt(i-1)=='(')
                {
                     sum+=n;
                }
                n=n>>1;
                
            }
        }
        return sum;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
