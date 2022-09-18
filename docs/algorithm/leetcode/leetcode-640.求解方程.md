---
title: 求解方程
date: 2022-09-18 20:52:39
permalink: /pages/918617/
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

求解一个给定的方程，将x以字符串 "x=#value" 的形式返回。该方程仅包含 '+' ， '-' 操作，变量 x 和其对应系数。

如果方程没有解或存在的解不为整数，请返回 "No solution" 。如果方程有无限解，则返回 “Infinite solutions” 。

题目保证，如果方程中只有一个解，则 'x' 的值是一个整数。

 

示例 1：

    输入: equation = "x+5-3+x=6+x-2"
    输出: "x=2"
示例 2:

    输入: equation = "x=x"
    输出: "Infinite solutions"
示例 3:

    输入: equation = "2x=x"
    输出: "x=0"
 

提示:

- 3 <= equation.length <= 1000
- equation 只有一个 '='. 
- 方程由绝对值在 [0, 100]  范围内且无任何前导零的整数和变量 'x' 组成。


## 思路

其实这类解析字符串的题都可以用状态机来实现

## 解法
```java

class Solution {
    // 其实这类解析字符串的题都可以用状态机来实现，Java实现代码如下。
    // 简易状态机
    public String solveEquation(String equation) {
        char[] cs = equation.toCharArray();
        // 记录所有x的和
        int xCount = 0;
        // 记录所有数字的和
        int total = 0;
        // 是否等号左边
        boolean isLeft = true;
        for (int i = 0; i < cs.length; i++) {
            char c = cs[i];
            // 默认加法
            boolean add = true;
            int val = 0;
            switch (c) {
                case '=':
                    isLeft = false;
                    // 由于需要将等号左边数字的和移动到等号右边，所以需要取反
                    total = -total;
                    break;
                case 'x':
                    val = 1;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if (i - 1 >= 0 && cs[i - 1] == '-') add = false;
                    while (i < cs.length && cs[i] >= '0' && cs[i] <= '9') {
                        val = val * 10 + cs[i] - '0';
                        i++;
                    }
                    // 根据符号，进行取反操作
                    if (!add) val = -val;
                    if (isLeft) {
                        if (cs[i] == 'x') {
                            xCount += val;
                        } else {
                            total += val;
                        }
                    } else {
                        if (i < cs.length && cs[i] == 'x') {
                            // 在等号右边时，将x移到等号左边，所以要进行取返操作
                            xCount += -val;
                        } else {
                            total += val;
                        }
                    }
                    if (i < cs.length && cs[i] == '=') {
                        isLeft = false;
                        // 由于需要将左边的和移动到右边，所以需要取反
                        total = -total;
                    }
                    break;

            }
        }
        if (xCount != 0) {
            return "x" + "=" + (total / xCount);
        } else if (total == 0) {
            return "Infinite solutions";
        } else {
            return "No solution";
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
