---
title: 单词子集
date: 2022-10-29 19:38:21
permalink: /pages/e54634/
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

给你两个字符串数组 words1 和 words2。

现在，如果 b 中的每个字母都出现在 a 中，包括重复出现的字母，那么称字符串 b 是字符串 a 的 子集 。

- 例如，"wrr" 是 "warrior" 的子集，但不是 "world" 的子集。

如果对 words2 中的每一个单词 b，b 都是 a 的子集，那么我们称 words1 中的单词 a 是 通用单词 。

以数组形式返回 words1 中所有的通用单词。你可以按 任意顺序 返回答案。

 

示例 1：

    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
    输出：["facebook","google","leetcode"]
示例 2：

    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
    输出：["apple","google","leetcode"]
示例 3：

    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","oo"]
    输出：["facebook","google"]
示例 4：

    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lo","eo"]
    输出：["google","leetcode"]
示例 5：

    输入：words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["ec","oc","ceo"]
    输出：["facebook","leetcode"]
 

提示：

- 1 <= words1.length, words2.length <= 10<sup>4</sup>
- 1 <= words1[i].length, words2[i].length <= 10
- words1[i] 和 words2[i] 仅由小写英文字母组成
- words1 中的所有字符串 互不相同


## 思路

计算B中所有字母出现的最大频率

## 解法
```java

class Solution {
    // 计算B中所有字母出现的最大频率


    public List<String> wordSubsets(String[] A, String[] B) {
        int[] cntMap = new int[26];
        for (String bWord : B) {
            int[] map = new int[26];
            for (char ch : bWord.toCharArray())
                map[ch - 'a']++;
            for (int i = 0; i < 26; ++i)
                cntMap[i] = Math.max(cntMap[i], map[i]);
        }

        List<String> result = new ArrayList<>();
        for (String aWord : A) {
            int[] map = new int[26];
            for (char ch : aWord.toCharArray())
                map[ch - 'a']++;
            boolean isFound = true;
            for (int i = 0; i < 26; ++i)
                if(cntMap[i] > map[i]) {
                    isFound = false;
                    break;
                }
            if (isFound) result.add(aWord);
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
