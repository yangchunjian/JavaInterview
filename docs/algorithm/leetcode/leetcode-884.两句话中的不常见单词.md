---
title: 两句话中的不常见单词
date: 2022-10-27 09:33:01
permalink: /pages/6b49cb/
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

句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。

 

示例 1：

    输入：s1 = "this apple is sweet", s2 = "this apple is sour"
    输出：["sweet","sour"]
示例 2：

    输入：s1 = "apple apple", s2 = "banana"
    输出：["banana"]
 

提示：

- 1 <= s1.length, s2.length <= 200
- s1 和 s2 由小写英文字母和空格组成
- s1 和 s2 都不含前导或尾随空格
- s1 和 s2 中的所有单词间均由单个空格分隔


## 思路

用Set判断是否重复

## 解法
```java

class Solution {
    // 用Set判断是否重复


    public String[] uncommonFromSentences(String s1, String s2) {
        List<String> list = new ArrayList<>();
        Set<String> set = new HashSet<>();
        String[] ss1 = s1.split(" ");
        String[] ss2 = s2.split(" ");
        for(String ss : ss1){
            if(!set.add(ss)){
                list.remove(ss);
            }else{
                list.add(ss);
            }

        }
        for(String ss : ss2){
            if(!set.add(ss)){
                list.remove(ss);
            }else{
                list.add(ss);
            }

        }
        return list.toArray(new String[list.size()]);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
