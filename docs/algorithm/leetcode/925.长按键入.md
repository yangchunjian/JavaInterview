---
title: 长按键入
date: 2022-10-29 21:16:11
permalink: /pages/b2ecdb/
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

你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

 

示例 1：

    输入：name = "alex", typed = "aaleex"
    输出：true
    解释：'alex' 中的 'a' 和 'e' 被长按。
示例 2：

    输入：name = "saeed", typed = "ssaaedd"
    输出：false
    解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
 

提示：

- 1 <= name.length, typed.length <= 1000
- name 和 typed 的字符都是小写字母

## 思路

通过计数当前字符连续出现的个数n，在c2中匹配则n减1，当n>0说明c2中该字符个数不够，返回false即可。

## 解法
```java

class Solution {
    // 通过计数当前字符连续出现的个数n，在c2中匹配则n减1，当n>0说明c2中该字符个数不够，返回false即可。


    public boolean isLongPressedName(String name, String typed) {

        if(typed == null){
            return false;
        }
        char[] c1 = name.toCharArray();
        char[] c2 = typed.toCharArray();
        if(c2.length < c1.length){
            return false;
        }
        int index1 = 0;
        int index2 = 0;
        while(index1 < c1.length && index2 < c2.length){
            int n = 0;
            char cur = c1[index1];
            while(index1 < c1.length && c1[index1] == cur){
                index1++;
                n++;
            }
            while(index2 < c2.length && c2[index2] == cur){
                index2++;
                n--;
            }
            if(n > 0){
                return false;
            }
        }
        if(index1 != c1.length || index2 != c2.length){
            return false;
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
