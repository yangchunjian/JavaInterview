---
title: 最常见的单词
date: 2022-10-20 14:24:26
permalink: /pages/f7c6cf/
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

给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。

题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

 

示例：

    输入: 
    paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
    banned = ["hit"]
    输出: "ball"
    解释: 
    "hit" 出现了3次，但它是一个禁用的单词。
    "ball" 出现了2次 (同时没有其他单词出现2次)，所以它是段落里出现次数最多的，且不在禁用列表中的单词。 
    注意，所有这些单词在段落里不区分大小写，标点符号需要忽略（即使是紧挨着单词也忽略， 比如 "ball,"）， 
    "hit"不是最终的答案，虽然它出现次数更多，但它在禁用单词列表中。
 

提示：

- 1 <= 段落长度 <= 1000
- 0 <= 禁用单词个数 <= 100
- 1 <= 禁用单词长度 <= 10
- 答案是唯一的, 且都是小写字母 (即使在 paragraph 里是大写的，即使是一些特定的名词，答案都是小写的。)
- paragraph 只包含字母、空格和下列标点符号!?',;.
- 不存在没有连字符或者带有连字符的单词。
- 单词里只包含字母，不会出现省略号或者其他标点符号。


## 思路

Map

## 解法
```java

class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        paragraph=paragraph.toLowerCase();
        paragraph=paragraph.replace('!',' ').replace('?',' ').replace('\'',' ').replace(',',' ').replace(';',' ').replace('.',' ').trim();
        String[] s = paragraph.split(" ");
        Map<String,Integer> map1=new HashMap<>();
        Map<String,Integer> map2=new HashMap<>();
        //被禁用的单词放入map1
        for(String str:banned){
            map1.put(str,1);
        }
        //把没有禁用的单词放入map2
        for(String str : s){
            if(!map1.containsKey(str)&&!str.equals("")){
                map2.put(str,map2.getOrDefault(str,0)+1);
            }
        }
        //在map2找出出现最多的单词
        int max=-1;
        String res=null;
        for(String str:map2.keySet()){
            if(map2.get(str)>max){
                max=map2.get(str);
                res=str;
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
