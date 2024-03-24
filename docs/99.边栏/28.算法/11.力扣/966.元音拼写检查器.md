---
title: 元音拼写检查器
date: 2022-11-07 22:31:47
permalink: /pages/826471/
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

在给定单词列表 wordlist 的情况下，我们希望实现一个拼写检查器，将查询单词转换为正确的单词。

对于给定的查询单词 query，拼写检查器将会处理两类拼写错误：

- 大小写：如果查询匹配单词列表中的某个单词（不区分大小写），则返回的正确单词与单词列表中的大小写相同。
    - 例如：wordlist = ["yellow"], query = "YellOw": correct = "yellow"
    - 例如：wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
    - 例如：wordlist = ["yellow"], query = "yellow": correct = "yellow"
- 元音错误：如果在将查询单词中的元音 ('a', 'e', 'i', 'o', 'u')  分别替换为任何元音后，能与单词列表中的单词匹配（不区分大小写），则返回的正确单词与单词列表中的匹配项大小写相同。
    - 例如：wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
    - 例如：wordlist = ["YellOw"], query = "yeellow": correct = "" （无匹配项）
    - 例如：wordlist = ["YellOw"], query = "yllw": correct = "" （无匹配项）

此外，拼写检查器还按照以下优先级规则操作：

- 当查询完全匹配单词列表中的某个单词（区分大小写）时，应返回相同的单词。
- 当查询匹配到大小写问题的单词时，您应该返回单词列表中的第一个这样的匹配项。
- 当查询匹配到元音错误的单词时，您应该返回单词列表中的第一个这样的匹配项。
- 如果该查询在单词列表中没有匹配项，则应返回空字符串。

给出一些查询 queries，返回一个单词列表 answer，其中 answer[i] 是由查询 query = queries[i] 得到的正确单词。

 

示例 1：

    输入：wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
    输出：["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
示例 2:

    输入：wordlist = ["yellow"], queries = ["YellOw"]
    输出：["yellow"]
 

提示：

- 1 <= wordlist.length, queries.length <= 5000
- 1 <= wordlist[i].length, queries[i].length <= 7
- wordlist[i] 和 queries[i] 只包含英文字母


## 思路



## 解法
```java

class Solution {
    private Set<String> wordSet = new HashSet<>();
    private Map<String, String> wordPatternMap = new HashMap<>();

    private boolean isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }

    /**
     * 掩盖元音，将单词中所有元音替换为通配符
     */
    private String maskVowel(String word) {
        char[] letters = word.toCharArray();
        for (int i = 0; i < letters.length; i++) {
            if (isVowel(letters[i])) {
                letters[i] = '*';
            }
        }
        return String.valueOf(letters);
    }

    /**
     * 查询对应的正确单词
     */
    private String search(String query) {
        // 精确匹配
        if (wordSet.contains(query)) return query;
        // 忽略大小写
        query = query.toLowerCase();
        if (wordPatternMap.containsKey(query)) {
            return wordPatternMap.get(query);
        }
        // 忽略元音差异
        query = maskVowel(query);
        return wordPatternMap.getOrDefault(query, "");
    }

    public String[] spellchecker(String[] wordlist, String[] queries) {
        for (String word : wordlist) {
            // 保存单词原型，以满足优先进行精确匹配
            wordSet.add(word);
            // 保存小写单词，以满足忽略大小写的次优匹配
            String wordLC = word.toLowerCase();
            wordPatternMap.putIfAbsent(wordLC, word);
            // 保存小写及元音被通配符替换的单词，以满足忽略元音差异匹配
            wordPatternMap.putIfAbsent(maskVowel(wordLC), word);
        }
        for (int i = 0; i < queries.length; i++) {
            queries[i] = search(queries[i]);
        }
        return queries;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
