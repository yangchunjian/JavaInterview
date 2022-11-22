---
title: 坏了的计算器
date: 2022-11-21 16:37:42
permalink: /pages/fc1946/
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

在显示着数字 startValue 的坏计算器上，我们可以执行以下两种操作：

- 双倍（Double）：将显示屏上的数字乘 2；
- 递减（Decrement）：将显示屏上的数字减 1 。

给定两个整数 startValue 和 target 。返回显示数字 target 所需的最小操作数。

 

示例 1：

    输入：startValue = 2, target = 3
    输出：2
    解释：先进行双倍运算，然后再进行递减运算 {2 -> 4 -> 3}.
示例 2：

    输入：startValue = 5, target = 8
    输出：2
    解释：先递减，再双倍 {5 -> 4 -> 8}.
示例 3：

    输入：startValue = 3, target = 10
    输出：3
    解释：先双倍，然后递减，再双倍 {3 -> 6 -> 5 -> 10}.
     

提示：

- 1 <= x, y <= 10<sup>9</sup>


## 思路

逆向思维，y可以加1或除以2，让y尽可能除2，最快地接近x

## 解法
```java

class Solution {
    // 逆向思维，y可以加1或除以2，让y尽可能除2，最快地接近x


    public int brokenCalc(int X, int Y) {

        int result = 0;
        while(X < Y)
        {
            if((Y % 2) == 0)
            {
                Y /= 2;
                result++;
            }
            else
            {
                Y = (Y + 1) / 2;
                result += 2;
            }
        }
        return result + X - Y;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
