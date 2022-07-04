---
title: 移掉 K 位数字
date: 2022-07-01 21:19:07
permalink: /pages/aa63d3/
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

给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。

 
示例 1 ：

    输入：num = "1432219", k = 3
    输出："1219"
    解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。
示例 2 ：

    输入：num = "10200", k = 1
    输出："200"
    解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
示例 3 ：

    输入：num = "10", k = 2
    输出："0"
    解释：从原数字移除所有的数字，剩余为空就是 0 。
 

提示：

- 1 <= k <= num.length <= 10<sup>5</sup>
- num 仅由若干位数字（0 - 9）组成
- 除了 0 本身之外，num 不含任何前导零


## 思路

        char[] stack = new char[num.length()];

## 解法
```java

class Solution {
    
    public String removeKdigits(String num, int k) {
     
        int idx = 0;
        char[] stack = new char[num.length()];
        for (int i = 0; i < num.length(); i++) {
            for (; idx > 0 && stack[idx - 1] > num.charAt(i) && k > 0; idx--, k--) {
            }
            stack[idx++] = num.charAt(i);
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < idx - k; i++) {
            if (sb.length() != 0 || stack[i] != '0') {
                sb.append(stack[i]);
            }
        }
        return sb.length() == 0 ? "0" : sb.toString();
    }

    
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
