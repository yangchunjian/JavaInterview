---
title: 回文对
date: 2022-07-23 23:29:04
permalink: /pages/9e577f/
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

给定一组 互不相同 的单词， 找出所有 不同 的索引对 (i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

 

示例 1：

    输入：words = ["abcd","dcba","lls","s","sssll"]
    输出：[[0,1],[1,0],[3,2],[2,4]] 
    解释：可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
示例 2：

    输入：words = ["bat","tab","cat"]
    输出：[[0,1],[1,0]] 
    解释：可拼接成的回文串为 ["battab","tabbat"]
示例 3：

    输入：words = ["a",""]
    输出：[[0,1],[1,0]]
 
提示：

- 1 <= words.length <= 5000
- 0 <= words[i].length <= 300
- words[i] 由小写英文字母组成



## 思路

建立节点Node

    static class Node {
        char c;
        Map<String, Integer> idx = new HashMap<>();
        Map<Character, Node> children = new HashMap<>();


## 解法
```java

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {

    public List<List<Integer>> palindromePairs(String[] words) {
        Node head = new Node('\0');
        for (int i = 0; i < words.length; i++) {
            head.put(words[i], 0, i);
        }
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < words.length; i++) {
            check(result, head, words[i], i);
        }
        return result;
    }

    private void check(List<List<Integer>> result, Node node, String word, int wordIndex) {
        if (!node.idx.isEmpty() && isPalindrome(word, 0, word.length() - 1)) {
            for (Integer index : node.idx.values()) {
                if (wordIndex != index) {
                    result.add(Arrays.asList(index, wordIndex));
                }
            }
        }
        for (int i = word.length() - 1; i >= 0; i--) {
            char c = word.charAt(i);
            Node child = node.children.get(c);
            if (child == null) {
                return;
            }
            if (!child.idx.isEmpty() && isPalindrome(word, 0, i - 1)) {
                for (Integer index : child.idx.values()) {
                    if (wordIndex != index) {
                        result.add(Arrays.asList(index, wordIndex));
                    }
                }
            }
            node = child;
        }
        Collection<Node> children = node.children.values();
        while (!children.isEmpty()) {
            List<Node> next = new ArrayList<>();
            for (Node child : children) {
                next.addAll(child.children.values());
                for (Map.Entry<String, Integer> entry : child.idx.entrySet()) {
                    if (isPalindrome(entry.getKey(), word.length(), entry.getKey().length() - 1)) {
                        result.add(Arrays.asList(entry.getValue(), wordIndex));
                    }
                }
            }
            children = next;
        }
    }

    private boolean isPalindrome(String str, int start, int end) {
        while (start < end) {
            if (str.charAt(start++) != str.charAt(end--)) {
                return false;
            }
        }
        return true;
    }

    static class Node {
        char c;
        Map<String, Integer> idx = new HashMap<>();
        Map<Character, Node> children = new HashMap<>();

        public Node(final char c) {
            this.c = c;
        }

        void put(String str, int i, int index) {
            if (i == str.length()) {
                idx.put(str, index);
                return;
            }
            char sc = str.charAt(i);
            Node child = children.computeIfAbsent(sc, t -> new Node(sc));
            child.put(str, i + 1, index);
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
