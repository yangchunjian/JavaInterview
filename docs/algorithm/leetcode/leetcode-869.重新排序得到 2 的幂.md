---
title: 重新排序得到 2 的幂
date: 2022-10-26 10:29:10
permalink: /pages/b4febf/
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

给定正整数 n ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

如果我们可以通过上述方式得到 2 的幂，返回 true；否则，返回 false。

 

示例 1：

    输入：n = 1
    输出：true
示例 2：

    输入：n = 10
    输出：false
 

提示：

- 1 <= n <= 10<sup>9</sup>


## 思路

Arrays.sort

## 解法
```java

class Solution {
    public boolean reorderedPowerOf2(int n) {
        Set<String> set = new HashSet<>();
        for (int i = 1; i > 0; i <<= 1) {
            set.add(numToStr(i));
        }
        return set.contains(numToStr(n));
    }

    private String numToStr(int i) {
        char[] c = String.valueOf(i).toCharArray();
        Arrays.sort(c);
        return new String(c); 
       
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
