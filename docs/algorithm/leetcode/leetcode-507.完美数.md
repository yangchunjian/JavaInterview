---
title: 完美数
date: 2022-09-13 18:54:52
permalink: /pages/08cb99/
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

对于一个 正整数，如果它和除了它自身以外的所有 正因子 之和相等，我们称它为 「完美数」。

给定一个 整数 n， 如果是完美数，返回 true；否则返回 false。

 

示例 1：

    输入：num = 28
    输出：true
    解释：28 = 1 + 2 + 4 + 7 + 14
    1, 2, 4, 7, 和 14 是 28 的所有正因子。
示例 2：

    输入：num = 7
    输出：false
 

提示：

- 1 <= num <= 10<sup>8</sup>



## 思路

// 只需要在【1，sqrt（num）】的界中寻找即可。

## 解法
```java

class Solution {
    // 只需要在【1，sqrt（num）】的界中寻找即可。


    public boolean checkPerfectNumber(int num) {
        if(num < 4) return false;
        int cur = 0;
        for (int i = 1; i < Math.sqrt(num); i++) {
            if(num % i == 0) {
                cur += i;
                cur += num / i;
            }
        }
        if(Math.sqrt(num) * Math.sqrt(num) == num)
            cur += Math.sqrt(num);
        return num == cur - num;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
