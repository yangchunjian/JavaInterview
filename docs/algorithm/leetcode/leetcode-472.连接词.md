---
title: 连接词
date: 2022-08-01 21:32:07
permalink: /pages/12b4a1/
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

给你一个 不含重复 单词的字符串数组 words ，请你找出并返回 words 中的所有 连接词 。

连接词 定义为：一个完全由给定数组中的至少两个较短单词组成的字符串。

 

示例 1：

    输入：words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
    输出：["catsdogcats","dogcatsdog","ratcatdogcat"]
    解释："catsdogcats" 由 "cats", "dog" 和 "cats" 组成; 
         "dogcatsdog" 由 "dog", "cats" 和 "dog" 组成; 
         "ratcatdogcat" 由 "rat", "cat", "dog" 和 "cat" 组成。
示例 2：

    输入：words = ["cat","dog","catdog"]
    输出：["catdog"]
 

提示：

- 1 <= words.length <= 10<sup>4</sup>
- 0 <= words[i].length <= 30
- words[i] 仅由小写字母组成
- 0 <= sum(words[i].length) <= 10<sup>5</sup>


## 思路

    dfs

## 解法
```java

class Solution {
    private boolean dfs(String s,Set<String> set,int depth,int index){
        if(index == s.length())
            return depth > 1;
        for(int i = index + 1; i <= s.length(); i++){
            if(set.contains(s.substring(index,i))){
                //只要有一种能够组合出来，就返回true
                if(dfs(s,set,depth + 1,i)){
                    return true;
                }
            }
        }
        return false;
    }
    public List<String> findAllConcatenatedWordsInADict(String[] words) {
        Set<String> set = new HashSet<>();
        List<String> res = new ArrayList<>();
        for(String s : words)
            set.add(s);
        for(String s : words){
            if(dfs(s,set,0,0))
                res.add(s);
        }
        return res;
    }

}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
