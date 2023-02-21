---
title: 猜字谜
date: 2023-02-21 21:36:58
permalink: /pages/99ebbe/
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

外国友人仿照中国字谜设计了一个英文版猜字谜小游戏，请你来猜猜看吧。

字谜的迷面 puzzle 按字符串形式给出，如果一个单词 word 符合下面两个条件，那么它就可以算作谜底：

- 单词 word 中包含谜面 puzzle 的第一个字母。
- 单词 word 中的每一个字母都可以在谜面 puzzle 中找到。
- 例如，如果字谜的谜面是 "abcdefg"，那么可以作为谜底的单词有 "faced", "cabbage", 和 "baggage"；而 "beefed"（不含字母 "a"）以及 "based"（其中的 "s" 没有出现在谜面中）都不能作为谜底。

返回一个答案数组 answer，数组中的每个元素 answer[i] 是在给出的单词列表 words 中可以作为字谜迷面 puzzles[i] 所对应的谜底的单词数目。

 

示例：

    输入：
    words = ["aaaa","asas","able","ability","actt","actor","access"], 
    puzzles = ["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]
    输出：[1,1,3,2,4,0]
    解释：
    1 个单词可以作为 "aboveyz" 的谜底 : "aaaa" 
    1 个单词可以作为 "abrodyz" 的谜底 : "aaaa"
    3 个单词可以作为 "abslute" 的谜底 : "aaaa", "asas", "able"
    2 个单词可以作为 "absoryz" 的谜底 : "aaaa", "asas"
    4 个单词可以作为 "actresz" 的谜底 : "aaaa", "asas", "actt", "access"
    没有单词可以作为 "gaswxyz" 的谜底，因为列表中的单词都不含字母 'g'。
 

提示：

- 1 <= words.length <= 10^5
- 4 <= words[i].length <= 50
- 1 <= puzzles.length <= 10^4
- puzzles[i].length == 7
- words[i][j], puzzles[i][j] 都是小写英文字母。
- 每个 puzzles[i] 所包含的字符都不重复。


## 思路

TrieNode

## 解法
```java

class Solution {

    TrieNode root = new TrieNode();
    public List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {
        for (String word : words) {
            char[] w = word.toCharArray();
            Arrays.sort(w);
            StringBuilder str = new StringBuilder();
            TrieNode temp = root;
            for (int i = 0 ; i < w.length ; i++) {
                if (str.length() == 0 || str.charAt(str.length() - 1) != w[i]) {
                    str.append(w[i]);
                    temp = temp.add(w[i]);
                }
            }
            temp.count++;
        }
        List<Integer> ans = new ArrayList<>();
        for(String puzzle : puzzles) {
            char[] p = puzzle.toCharArray();
            Arrays.sort(p);
            ans.add(find(p,root,0,puzzle.charAt(0)));
        }
        return ans;
    }

    Integer find(char[] puzzle,TrieNode cur,int index,char pre) {
        if (cur == null)
            return 0;
        if (index == 7)
            return cur.count;
        int ans = find(puzzle,cur.dect[puzzle[index] - 'a'],index + 1,pre);
        if (pre != puzzle[index])
            ans += find(puzzle,cur,index + 1,pre); 
        return ans;
    }

    class TrieNode {
        TrieNode[] dect = new TrieNode[26];
        int count = 0;
        TrieNode () {   
        }
        TrieNode add(char ch) {
            if (this.dect[ch - 'a'] == null) {
                this.dect[ch - 'a'] = new TrieNode();
            }
            return this.dect[ch - 'a'];
        }

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
