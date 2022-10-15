---
title: 匹配子序列的单词数
date: 2022-10-15 20:07:29
permalink: /pages/981b2a/
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

给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。

字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。

- 例如， “ace” 是 “abcde” 的子序列。


示例 1:

    输入: s = "abcde", words = ["a","bb","acd","ace"]
    输出: 3
    解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
Example 2:

    输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
    输出: 2
 

提示:

- 1 <= s.length <= 5 * 10<sup>4</sup>
- 1 <= words.length <= 5000
- 1 <= words[i].length <= 50
- words[i]和 s 都只由小写字母组成。


## 思路

Java Map+Deque 

思路即是将相同首字母的字符串放在一个队列中，

每次从s原字符串读入字符，并在words字符串中寻找是否有以该字符为首的字符串，

若有则将第二位字符作为该word字符串首字母添加到哈希表中继续迭代，

直到找到word的最后一个字符，说明匹配成功



Map结合队列

    Map<Character,Deque<String>> m = new HashMap<>();

## 解法
```java

class Solution {
    public int numMatchingSubseq(String s, String[] words) {
        // 哈希表加队列 即 key为26个字母 value则为word中那些string构成的队列
        Map<Character,Deque<String>> m = new HashMap<>();
        for(char c='a'; c<='z';c++){
            m.put(c,new LinkedList<>());
        }
        // 将相同首字母的字符串放在一个队列中
        for(String w : words){
            m.get(w.charAt(0)).add(w);
        }
        int cnt =0;
        for(char ch : s.toCharArray()){
            // 弹出对应首字母的队列 其中都是以这个字符为首字母的字符串
            Deque<String> q= m.get(ch);
            int sz = q.size();
            for(int i=0; i<sz;i++){
                String str = q.poll();
                if(str.length()==1) cnt++;
                else{
                    m.get(str.charAt(1)).offer(str.substring(1));
                }
            }
        }
        return cnt;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
