---
title: 查找和替换模式
date: 2022-10-28 14:20:33
permalink: /pages/b23021/
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

你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。

如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。

（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）

返回 words 中与给定模式匹配的单词列表。

你可以按任何顺序返回答案。

 

示例：

    输入：words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
    输出：["mee","aqq"]
    解释：
    "mee" 与模式匹配，因为存在排列 {a -> m, b -> e, ...}。
    "ccc" 与模式不匹配，因为 {a -> c, b -> c, ...} 不是排列。
    因为 a 和 b 映射到同一个字母。
     

提示：

- 1 <= words.length <= 50
- 1 <= pattern.length = words[i].length <= 20

## 思路

每次搞两个长度为27的数组，做两个字母表的映射数组，遍历word里的字母并给数组对应位置赋值的时候，遇到已经赋过其他值的就说明这个word不匹配。

## 解法
```java

class Solution {
    // 每次搞两个长度为27的数组，做两个字母表的映射数组，遍历word里的字母并给数组对应位置赋值的时候，遇到已经赋过其他值的就说明这个word不匹配。
    public List<String> findAndReplacePattern(String[] words, String pattern) {
        List<String> res = new ArrayList<>();
        for (String word : words) {
            int[] p = new int[27];
            int[] p2 = new int[27];
            boolean match = true;
            for (int i=0;i<pattern.length();i++){
                int index = word.charAt(i) - 'a' + 1;
                int value = pattern.charAt(i) - 'a' + 1;
                if ((p[index] != 0 && p[index] != value)||(p2[value] != 0 && p2[value] != index)){
                    match = false;
                    break;
                }
                p[index] = value;
                p2[value] = index;
            }
            if (match) {
                res.add(word);
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
