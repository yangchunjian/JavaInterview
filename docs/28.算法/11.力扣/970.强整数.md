---
title: 强整数
date: 2022-11-08 21:10:53
permalink: /pages/d1dfd8/
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

给定三个整数 x 、 y 和 bound ，返回 值小于或等于 bound 的所有 强整数 组成的列表 。

如果某一整数可以表示为 x<sup>i</sup> + y<sup>j</sup> ，其中整数 i >= 0 且 j
\>= 0，那么我们认为该整数是一个 强整数 。

你可以按 任何顺序 返回答案。在你的回答中，每个值 最多 出现一次。

 

示例 1：

    输入：x = 2, y = 3, bound = 10
    输出：[2,3,4,5,7,9,10]
    解释： 
    2 = 2^0 + 3^0
    3 = 2^1 + 3^0
    4 = 2^0 + 3^1
    5 = 2^1 + 3^1
    7 = 2^2 + 3^1
    9 = 2^3 + 3^0
    10 = 2^0 + 3^2
示例 2：

    输入：x = 3, y = 5, bound = 15
    输出：[2,4,6,8,10,14]
 

提示：

- 1 <= x, y <= 100
- 0 <= bound <= 10<sup>6</sup>

## 思路

Set<Integer>

## 解法
```java

class Solution {
    public List<Integer> powerfulIntegers(int x, int y, int bound) {
        Set<Integer> set = new HashSet<>();
        
        for (int a = 1; a < bound; a *= x) {
            for (int b = 1; a + b <= bound; b *= y) {
                set.add(a + b);
                if (y == 1) break;
            }
            if (x == 1) break;
        }
        
        return new ArrayList<>(set);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
