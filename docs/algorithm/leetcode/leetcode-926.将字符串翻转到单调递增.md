---
title: 将字符串翻转到单调递增
date: 2022-10-29 21:39:44
permalink: /pages/35ea65/
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

如果一个二进制字符串，是以一些 0（可能没有 0）后面跟着一些 1（也可能没有 1）的形式组成的，那么该字符串是 单调递增 的。

给你一个二进制字符串 s，你可以将任何 0 翻转为 1 或者将 1 翻转为 0 。

返回使 s 单调递增的最小翻转次数。

 

示例 1：

    输入：s = "00110"
    输出：1
    解释：翻转最后一位得到 00111.
示例 2：

    输入：s = "010110"
    输出：2
    解释：翻转得到 011111，或者是 000111。
示例 3：

    输入：s = "00011000"
    输出：2
    解释：翻转得到 00000000。
 

提示：

- 1 <= s.length <= 10<sup>5</sup>
- s[i] 为 '0' 或 '1'



## 思路

遍历一次字符串即可，当遍历到0 选择保留 那么之前的1设为0 选择不保留 反转次数+1 取两者较小值即可。

## 解法
```java

class Solution {
    // 遍历一次字符串即可，当遍历到0 选择保留 那么之前的1设为0 选择不保留 反转次数+1 取两者较小值即可。

    public int minFlipsMonoIncr(String s) {
        int count_1 = 0, rst = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '1') {
                count_1++;
            } else {//当遍历到0  可以保留  那么之前的1设为0    不保留  反转次数+1
                rst = Math.min(rst + 1, count_1);
            }
        }
        return rst;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
