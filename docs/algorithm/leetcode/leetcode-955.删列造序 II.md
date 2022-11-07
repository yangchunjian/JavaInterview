---
title: 删列造序 II
date: 2022-11-06 19:34:52
permalink: /pages/92ae43/
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

给定由 n 个字符串组成的数组 strs，其中每个字符串长度相等。

选取一个删除索引序列，对于 strs 中的每个字符串，删除对应每个索引处的字符。

比如，有 strs = ["abcdef", "uvwxyz"]，删除索引序列 {0, 2, 3}，删除后 strs 为["bef", "vyz"]。

假设，我们选择了一组删除索引 answer，那么在执行删除操作之后，最终得到的数组的元素是按 字典序（strs[0] <= strs[1] <= strs[2] ... <= strs[n - 1]）排列的，然后请你返回 answer.length 的最小可能值。

 

示例 1：

    输入：strs = ["ca","bb","ac"]
    输出：1
    解释： 
    删除第一列后，strs = ["a", "b", "c"]。
    现在 strs 中元素是按字典排列的 (即，strs[0] <= strs[1] <= strs[2])。
    我们至少需要进行 1 次删除，因为最初 strs 不是按字典序排列的，所以答案是 1。
示例 2：

    输入：strs = ["xc","yb","za"]
    输出：0
    解释：
    strs 的列已经是按字典序排列了，所以我们不需要删除任何东西。
    注意 strs 的行不需要按字典序排列。
    也就是说，strs[0][0] <= strs[0][1] <= ... 不一定成立。
示例 3：

    输入：strs = ["zyx","wvu","tsr"]
    输出：3
    解释：
    我们必须删掉每一列。
     

提示：

- n == strs.length
- 1 <= n <= 100
- 1 <= strs[i].length <= 100
- strs[i] 由小写英文字母组成


## 思路

标识位

## 解法
```java

class Solution {
    public int minDeletionSize(String[] strs) {
        int n = strs.length;
        int len = strs[0].length();
        boolean[] ok = new boolean[n];
        int ans = 0;
        for (int j = 0; j < len; j++) {
            boolean delete = false;
            for (int i = 0; i < n - 1; i++) {
                if (ok[i]) continue;
                if (strs[i].charAt(j) > strs[i + 1].charAt(j)) {
                    delete = true;
                    break;
                }
            }
            if (delete) ans++;
            else {
               for (int i = 0; i < n - 1; i++) {
                    if (strs[i].charAt(j) < strs[i + 1].charAt(j)) {
                        ok[i] = ok[i] || true;
                    }
                } 
            }
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
