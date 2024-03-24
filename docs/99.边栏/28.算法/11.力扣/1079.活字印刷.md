---
title: 活字印刷
date: 2022-11-29 18:31:11
permalink: /pages/30a2b2/
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

你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。

注意：本题中，每个活字字模只能使用一次。

 

示例 1：

    输入："AAB"
    输出：8
    解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
示例 2：

    输入："AAABBC"
    输出：188
示例 3：

    输入："V"
    输出：1
 

提示：

- 1 <= tiles.length <= 7
- tiles 由大写英文字母组成

## 思路

回溯

## 解法
```java

class Solution {
    
    Set<String> seen = new HashSet<>();
    public int numTilePossibilities(String tiles) {
        char[] str = tiles.toCharArray();
        int n = str.length;
        boolean[] used = new boolean[n];
        backtrack("",str,used);
        return seen.size();
    }
    void backtrack(String s,char[] str,boolean[] used){
        int n = str.length;
        if (s != null && !s.equals("")){
            seen.add(s);
        }
        if (s.length() == n){
            return;
        }
        for (int i = 0;i < n;i++){
            if (used[i]){
                continue;
            }
            used[i] = true;
            backtrack(s + str[i],str,used);
            used[i] = false;
        }

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
