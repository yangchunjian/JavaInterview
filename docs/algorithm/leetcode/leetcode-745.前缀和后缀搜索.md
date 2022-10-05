---
title: 前缀和后缀搜索
date: 2022-10-05 22:36:49
permalink: /pages/2a7017/
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

设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

实现 WordFilter 类：

- WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
- f(string pref, string suff) 返回词典中具有前缀 prefix 和后缀 suff 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。


示例：

    输入
    ["WordFilter", "f"]
    [[["apple"]], ["a", "e"]]
    输出
    [null, 0]
    解释
    WordFilter wordFilter = new WordFilter(["apple"]);
    wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suff = "e" 。
 
提示：

- 1 <= words.length <= 10<sup>4</sup>
- 1 <= words[i].length <= 7
- 1 <= pref.length, suff.length <= 7
- words[i]、pref 和 suff 仅由小写英文字母组成
- 最多对函数 f 执行 10<sup>4</sup> 次调用

## 思路

哈希表+暴力 

还可字典树：

    class Trie{
        int idx;
        Trie children[];
        public Trie(){
            idx=-1;
            children=new Trie[27];
        }
    }


## 解法
```java

class WordFilter {
    Map<String,Integer> map;
    public WordFilter(String[] words) {
        map=new HashMap<>();
        for(int i=words.length-1;i>=0;i--){
            int n=words[i].length();
            List<String> pre=new ArrayList<>(),suf=new ArrayList<>();
            for(int j=1;j<=n;j++){
                pre.add(words[i].substring(0,j));
                suf.add(words[i].substring(n-j));
            }
            for(int j=0;j<n;j++){
                for(int p=0;p<n;p++){
                    String s=new StringBuilder(pre.get(j)).append(" ").append(suf.get(p)).toString();
                    if(!map.containsKey(s)){map.put(s,i);}
                }
            }
        }
    }
    
    public int f(String pref, String suff) {
        return map.getOrDefault(new StringBuilder(pref).append(" ").append(suff).toString(),-1);
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter obj = new WordFilter(words);
 * int param_1 = obj.f(pref,suff);
 */


class Trie{
    int idx;
    Trie children[];
    public Trie(){
        idx=-1;
        children=new Trie[27];
    }
}
class WordFilter {
    Trie trie;
    public WordFilter(String[] words) {
        trie=new Trie();
        for(int i=0;i<words.length;i++){
            for(int j=0;j<=words[i].length();j++){
                String s=new StringBuilder(words[i].substring(j)).append((char)(26+'a')).append(words[i]).toString();
                insert(trie,s,i);
            }
        }
    }
    
    public int f(String pref, String suff) {
        String s=new StringBuilder(suff).append((char)(26+'a')).append(pref).toString();
        Trie t=trie;
        for(int i=0;i<s.length();i++){
            int a=s.charAt(i)-'a';
            if(t.children[a]==null){return -1;}
            t=t.children[a];
        }
        return t.idx;
    }
    void insert(Trie t,String s,int p){
        for(int i=0;i<s.length();i++){
            int a=s.charAt(i)-'a';
            if(t.children[a]==null){t.children[a]=new Trie();}
            t.children[a].idx=p;
            t=t.children[a];
        }
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter obj = new WordFilter(words);
 * int param_1 = obj.f(pref,suff);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
