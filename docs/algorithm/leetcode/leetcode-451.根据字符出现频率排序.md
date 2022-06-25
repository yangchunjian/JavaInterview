---
title: 根据字符出现频率排序
date: 2022-06-15 23:46:12
permalink: /pages/bebb87/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---

## 题目
给定一个字符串 s ，根据字符出现的 频率 对其进行 降序排序 。一个字符出现的 频率 是它出现在字符串中的次数。

返回 已排序的字符串 。如果有多个答案，返回其中任何一个。

 

示例 1:

    输入: s = "tree"
    输出: "eert"
    解释: 'e'出现两次，'r'和't'都只出现一次。
    因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
示例 2:

    输入: s = "cccaaa"
    输出: "cccaaa"
    解释: 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
    注意"cacaca"是不正确的，因为相同的字母必须放在一起。
示例 3:

    输入: s = "Aabb"
    输出: "bbAa"
    解释: 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
    注意'A'和'a'被认为是两种不同的字符。
 

提示:

- 1 <= s.length <= 5 * 10<sup>5</sup>
- s 由大小写英文字母和数字组成


## 思路

    Collections.sort(list,(o1,o2)->(o2.getValue()-o1.getValue()));

## 解法
```java

class Solution {
    public String frequencySort(String s) {

        Map<Character,Integer> map = new LinkedHashMap<>();


        for(char c : s.toCharArray()){
            map.put(c,map.getOrDefault(c,0)+1);
        }

        List<Map.Entry<Character,Integer>> list = new ArrayList<>(map.size());

        for(Map.Entry<Character,Integer> entry : map.entrySet()){
            list.add(entry);

        }
        Collections.sort(list,(o1,o2)->(o2.getValue()-o1.getValue()));

        StringBuilder sb = new StringBuilder();
        for(Map.Entry<Character,Integer> me : list){
            String temp = doChar(me.getKey(),me.getValue());
            sb.append(temp);

        }

        return sb.toString();
    }

    String doChar(char c,int count){
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<count;i++){
            sb.append(c);
        }

        return sb.toString();
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
