---
title: 七进制数
date: 2022-09-12 22:59:32
permalink: /pages/0c5521/
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

给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

 

示例 1:

    输入: num = 100
    输出: "202"
示例 2:

    输入: num = -7
    输出: "-10"
 

提示：

- -10<sup>7</sup> <= num <= 10<sup>7</sup>


## 思路

Integer.toString(num, 7);

## 解法
```java

class Solution {
    public String convertToBase7(int num) {
        return Integer.toString(num, 7); 


        // StringBuilder sb = new StringBuilder();
        // if (num == 0) return "0";
        // boolean flag = num < 0;
        // num = Math.abs(num);
        // while (num != 0) {
        //     sb.append(num % 7);
        //     num /= 7;
        // }
        // if (flag)
        //     sb.append("-");
        // return sb.reverse().toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
