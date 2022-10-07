---
title: 宝石与石头
date: 2022-10-07 17:45:02
permalink: /pages/d3e613/
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

 给你一个字符串 jewels 代表石头中宝石的类型，另有一个字符串 stones 代表你拥有的石头。 

stones 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

字母区分大小写，因此 "a" 和 "A" 是不同类型的石头。

 

示例 1：

    输入：jewels = "aA", stones = "aAAbbbb"
    输出：3
示例 2：

    输入：jewels = "z", stones = "ZZ"
    输出：0
 

提示：

- 1 <= jewels.length, stones.length <= 50
- jewels 和 stones 仅由英文字母组成
- jewels 中的所有字符都是 唯一的


## 思路


        byte[] arr = new byte[58];
        arr[ch - 65] = 1;

## 解法
```java

class Solution {
    public int numJewelsInStones(String J, String S) {
        if (S == null || S.isEmpty()) return 0;
        if (J == null || J.isEmpty()) return 0;

        byte[] arr = new byte[58];
        int count = 0;
        for (char ch : J.toCharArray()) {
            arr[ch - 65] = 1;
        }
        for (char ch : S.toCharArray()) {
            if(arr[ch -65] == 1) {
                count++;
            };
        }
        return count;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
