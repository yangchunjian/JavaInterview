---
title: 单调递增的数字
date: 2022-10-05 21:36:41
permalink: /pages/201fbd/
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

当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

 

示例 1:

    输入: n = 10
    输出: 9
示例 2:

    输入: n = 1234
    输出: 1234
示例 3:

    输入: n = 332
    输出: 299
 

提示:

- 0 <= n <= 10<sup>9</sup>


## 思路

    /**
     * 思路：
     *  从右向左扫描数字，若发现当前数字比其左边一位（较高位）小，
     *  则把其左边一位数字减1，并将该位及其右边的所有位改成9
     */


## 解法
```java

class Solution {
    /**
     * 思路：
     *  从右向左扫描数字，若发现当前数字比其左边一位（较高位）小，
     *  则把其左边一位数字减1，并将该位及其右边的所有位改成9
     */
    public int monotoneIncreasingDigits(int n) {

        String s = String.valueOf(n);
        int length = s.length();
        char[] chars = s.toCharArray();
        int flag = length;
        for (int i = length - 1; i >= 1; i--) {
            if (chars[i] < chars[i - 1]) {
                flag = i;
                chars[i - 1]--;
            }
        }

        for (int i = flag; i < length; i++) {
            chars[i] = '9';
        }
        return Integer.parseInt(new String(chars));
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
