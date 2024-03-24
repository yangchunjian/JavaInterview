---
title: 划分字母区间
date: 2022-10-06 20:16:26
permalink: /pages/f961ca/
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

字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

 

示例：

    输入：S = "ababcbacadefegdehijhklij"
    输出：[9,7,8]
    解释：
    划分结果为 "ababcbaca", "defegde", "hijhklij"。
    每个字母最多出现在一个片段中。
    像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 

提示：

- S的长度在[1, 500]之间。
- S只包含小写字母 'a' 到 'z' 。

## 思路

遍历字符串 

找到和起点相同的最后一个字母 

查看此区间里的字母最后的index是否超出区间 

超出则更新区间 

直至找到最大的index 则index - i + 1就是所求区间长度 使用cache来存储每个字母的最后出现位置

## 解法
```java

class Solution {
    // 遍历字符串 找到和起点相同的最后一个字母 查看此区间里的字母最后的index是否超出区间 超出则更新区间 直至找到最大的index 则index - i + 1就是所求区间长度 使用cache来存储每个字母的最后出现位置


    public List<Integer> partitionLabels(String S) {
        if (S == null || S.length() == 0) {
            return null;
        }

        List<Integer> res = new ArrayList<>();
        int index, i, len = S.length();
        int[] cache = new int[26];
        for (i = 0; i < len; i++) {
            cache[S.charAt(i) - 'a'] = i;
        }
        i = 0;
        while (i < len) {
            index = cache[S.charAt(i) - 'a'];
            for (int j = i + 1; j < index && j < len; j++) {
                if (cache[S.charAt(j) - 'a'] > index) {
                    index = cache[S.charAt(j) - 'a'];
                }
            }
            res.add(index - i + 1);
            i = index + 1;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
