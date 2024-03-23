---
title: 复数乘法
date: 2022-09-13 21:17:56
permalink: /pages/611455/
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

复数 可以用字符串表示，遵循 "实部+虚部i" 的形式，并满足下述条件：

- 实部 是一个整数，取值范围是 [-100, 100]
- 虚部 也是一个整数，取值范围是 [-100, 100]
- i2 == -1
- 给你两个字符串表示的复数 num1 和 num2 ，请你遵循复数表示形式，返回表示它们乘积的字符串。

 

示例 1：

    输入：num1 = "1+1i", num2 = "1+1i"
    输出："0+2i"
    解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
示例 2：

    输入：num1 = "1+-1i", num2 = "1+-1i"
    输出："0+-2i"
    解释：(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。 
 

提示：

- num1 和 num2 都是有效的复数表示。



## 思路

字符串截取

## 解法
```java

class Solution {
    public String complexNumberMultiply(String num1, String num2) {
        int a1 = Integer.parseInt(num1.substring(0,num1.indexOf('+')));
        int a2 = Integer.parseInt(num1.substring(num1.indexOf('+')+1,num1.length()-1));
        int b1 = Integer.parseInt(num2.substring(0,num2.indexOf('+')));
        int b2 = Integer.parseInt(num2.substring(num2.indexOf('+')+1,num2.length()-1));

        int aa = a1 * b1 - a2 * b2;
        int bb = a2 * b1 + a1 * b2;

        return aa +"+"+bb+"i";
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
