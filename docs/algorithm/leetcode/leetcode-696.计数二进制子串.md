---
title: 计数二进制子串
date: 2022-09-28 10:57:31
permalink: /pages/3d6ba7/
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

给定一个字符串 s，统计并返回具有相同数量 0 和 1 的非空（连续）子字符串的数量，并且这些子字符串中的所有 0 和所有 1 都是成组连续的。

重复出现（不同位置）的子串也要统计它们出现的次数。

 
示例 1：

    输入：s = "00110011"
    输出：6
    解释：6 个子串满足具有相同数量的连续 1 和 0 ："0011"、"01"、"1100"、"10"、"0011" 和 "01" 。
    注意，一些重复出现的子串（不同位置）要统计它们出现的次数。
    另外，"00110011" 不是有效的子串，因为所有的 0（还有 1 ）没有组合在一起。
示例 2：

    输入：s = "10101"
    输出：4
    解释：有 4 个子串："10"、"01"、"10"、"01" ，具有相同数量的连续 1 和 0 。
 

提示：

- 1 <= s.length <= 105
- s[i] 为 '0' 或 '1'


## 思路

Java Solution 满足要求的字符串其中间必然有一个"10"或"01"的种子，找到这个种子，然后字符串像两侧扩张。

## 解法
```java

class Solution {
    // Java Solution 满足要求的字符串其中间必然有一个"10"或"01"的种子，找到这个种子，然后字符串像两侧扩张。


    public int countBinarySubstrings(String s) {

        char[] ss = s.toCharArray();
        int result = 0;
        for (int i = 0; i < ss.length-1; ++i) {
            if ( ss[i] != ss[i+1] ) {
                int cnt = 1;
                int lo = i - 1;
                int hi = i + 2;
                while (lo >= 0 && hi < ss.length) {
                    if (ss[lo] == ss[lo+1] && ss[hi] == ss[hi-1]) {
                        cnt++;
                        lo--;
                        hi++;
                    } else {
                        break;
                    }
                }
                result += cnt;
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
