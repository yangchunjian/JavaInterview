---
title: 破解保险箱
date: 2022-08-07 20:19:37
permalink: /pages/1ad7c2/
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

有一个需要密码才能打开的保险箱。密码是 n 位数, 密码的每一位是 k 位序列 0, 1, ..., k-1 中的一个 。

你可以随意输入密码，保险箱会自动记住最后 n 位输入，如果匹配，则能够打开保险箱。

举个例子，假设密码是 "345"，你可以输入 "012345" 来打开它，只是你输入了 6 个字符.

请返回一个能打开保险箱的最短字符串。

 

示例1:
    
    输入: n = 1, k = 2
    输出: "01"
    说明: "10"也可以打开保险箱。
 

示例2:

    输入: n = 2, k = 2
    输出: "00110"
    说明: "01100", "10011", "11001" 也能打开保险箱。
 

提示：

- n 的范围是 [1, 4]。
- k 的范围是 [1, 10]。
- k^n 最大可能为 4096。



## 思路

读不懂题的我来解释一下：

- n=1, k=2的时候，就是说密码是1位，可能是0，也可能是1，那么这个答案就应该包含0，也包含1，顺序不要紧，**只要按照这答案输入，遇到对的情况自然会打开。**
- n=2, k=2，那么密码就可能是01、10、00、11，密码就应该包含这四种情况，看一下答案，"00110" , "01100", "10011", "11001"，是不是这四种答案每个里边都包含这个子串？
- n=3, k=2，那么密码就应该包含000、001、010、011...还有几个我就不写了，可以看一下答案，答案肯定是包含这几个串的：0011101000，然后大家再看题解理解一下。


用dfs

## 解法
```java


class Solution {
    int node;

    public String crackSafe(int n, int k) {
        node = (int) Math.pow(k, n - 1);
        boolean[] side = new boolean[node * k];
        StringBuilder ans = new StringBuilder();
        dfs(side, n, k, 0, ans);
        String temp = "";
        for (int i = 0; i < n - 1; i++)
            temp += '0';
        ans.append(temp);
        return ans.toString();
    }

    public void dfs(boolean[] side, int n, int k, int i, StringBuilder ans) {
        int cur = i % node;
        for (int j = 0; j < k; j++) {
            int t = cur * k + j;
            if (!side[t]) {
                side[t] = true;
                dfs(side, n, k, t, ans);
                ans.append((char)(j + '0'));
            }
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
