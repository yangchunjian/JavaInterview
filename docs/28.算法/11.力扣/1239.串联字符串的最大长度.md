---
title: 串联字符串的最大长度
date: 2023-02-12 21:44:20
permalink: /pages/f90b0d/
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

给定一个字符串数组 arr，字符串 s 是将 arr 的含有 不同字母 的 子序列 字符串 连接 所得的字符串。

请返回所有可行解 s 中最长长度。

子序列 是一种可以从另一个数组派生而来的数组，通过删除某些元素或不删除元素而不改变其余元素的顺序。

 

示例 1：

    输入：arr = ["un","iq","ue"]
    输出：4
    解释：所有可能的串联组合是：
    - ""
    - "un"
    - "iq"
    - "ue"
    - "uniq" ("un" + "iq")
    - "ique" ("iq" + "ue")
    最大长度为 4。
示例 2：

    输入：arr = ["cha","r","act","ers"]
    输出：6
    解释：可能的解答有 "chaers" 和 "acters"。
示例 3：

    输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
    输出：26
 

提示：

- 1 <= arr.length <= 16
- 1 <= arr[i].length <= 26
- arr[i] 中只含有小写英文字母


## 思路

dfs

## 解法
```java

class Solution {
    
    private int ans;

    public int maxLength(List<String> arr) {
        dfs(arr, 0, new StringBuilder());
        return ans;
    }

    private void dfs(List<String> arr, int start, StringBuilder builder) {
        if (!match(builder)) {
            return;
        }
        ans = Math.max(ans, builder.length());
        int size = arr.size();
        for (int i = start; i < size; i++) {
            String s = arr.get(i);
            builder.append(s);
            dfs(arr, i + 1, builder);
            builder.delete(builder.length() - s.length(), builder.length());
        }
    }

    private boolean match(StringBuilder builder) {
        String s = builder.toString();
        int[] counter = new int[26];
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            counter[c - 97]++;
            if (counter[c - 97] > 1) {
                return false;
            }
        }
        return true;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
