---
title: 下一个更大元素 III
date: 2022-09-05 11:08:46
permalink: /pages/a6d1ae/
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

给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。

如果不存在这样的正整数，则返回 -1 。

注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

 

示例 1：

    输入：n = 12
    输出：21
示例 2：

    输入：n = 21
    输出：-1
 

提示：

- 1 <= n <= 2<sup>31</sup> - 1



## 思路

单调栈原则，跟下一个排列一样的方式



## 解法
```java

class Solution {
    public int nextGreaterElement(int n) {
         //将n切割为字符串
        char[] s = String.valueOf(n).toCharArray();
        int len = s.length;
        for (int i = len -1; i > 0; i--) {
            //序列升序时才存在下一个更大的元素
            if (s[i] > s[i - 1]) {
                //在i-len直接寻找比s[i-1]大的第一个元素,对i-len之间的数字进行正序排序
                Arrays.sort(s, i, len);
                for (int j = i; j < len; j++) {
                    //如果找到第一个大于i-1的元素，则进行交换
                    if (s[j] > s[i -1]) {
                        char temp = s[j];
                        s[j] = s[i - 1];
                        s[i - 1] = temp;
                        // 判断s是否为 32 位整数
                        long aLong = Long.parseLong(String.valueOf(s));
                        if (aLong > Integer.MAX_VALUE) return -1;
                        return (int)aLong;
                    }
                }
            }
        }
        return -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
