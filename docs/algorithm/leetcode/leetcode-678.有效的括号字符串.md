---
title: 有效的括号字符串
date: 2022-09-20 23:19:39
permalink: /pages/f07b3e/
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

给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

- 任何左括号 ( 必须有相应的右括号 )。
- 任何右括号 ) 必须有相应的左括号 ( 。
- 左括号 ( 必须在对应的右括号之前 )。
- * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
- 一个空字符串也被视为有效字符串。

示例 1:

    输入: "()"
    输出: True
示例 2:

    输入: "(*)"
    输出: True
示例 3:

    输入: "(*))"
    输出: True
注意:

- 字符串大小将在 [1，100] 范围内。


## 思路

两个栈分别将"("和"*"的序号压入栈中，每次遇到右括号，首先检测左括号栈中是否为空，不为空则弹出元素，否则弹出star栈，

最后考虑left和star栈可能存在元素，判断此时栈中元素的序号大小，如果left栈中的序号大于star中的则表明 存在"*("此种情况，直接false



## 解法
```java

class Solution {
    public boolean checkValidString(String str) {
        char[] s= str.toCharArray();
        Stack<Integer> left = new Stack<>();
        Stack<Integer> star = new Stack<>();        
        for(int i=0;i<s.length;i++){
            if(s[i]=='(') left.add(i);
            else if(s[i]=='*') star.add(i);
            else {
                if(left.empty() && star.empty()) return false;
                if(!left.empty()) left.pop();
                else 
                    star.pop();
            }            

        }
 
         while(!left.empty() && !star.empty()){
            if(left.peek()>star.peek()) return false;
            left.pop();
            star.pop();
        }
        return left.empty();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
