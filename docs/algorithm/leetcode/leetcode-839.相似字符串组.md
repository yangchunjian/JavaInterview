---
title: 相似字符串组
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

如果交换字符串 X 中的两个不同位置的字母，使得它和字符串 Y 相等，那么称 X 和 Y 两个字符串相似。如果这两个字符串本身是相等的，那它们也是相似的。

例如，"tars" 和 "rats" 是相似的 (交换 0 与 2 的位置)； "rats" 和 "arts" 也是相似的，但是 "star" 不与 "tars"，"rats"，或 "arts" 相似。

总之，它们通过相似性形成了两个关联组：{"tars", "rats", "arts"} 和 {"star"}。注意，"tars" 和 "arts" 是在同一组中，即使它们并不相似。形式上，对每个组而言，要确定一个单词在组中，只需要这个词和该组中至少一个单词相似。

给你一个字符串列表 strs。列表中的每个字符串都是 strs 中其它所有字符串的一个字母异位词。请问 strs 中有多少个相似字符串组？



示例 1：

    输入：strs = ["tars","rats","arts","star"]
    输出：2
示例 2：

    输入：strs = ["omv","ovm"]
    输出：1


提示：

* 1 <= strs.length <= 300
* 1 <= strs[i].length <= 300
* strs[i] 只包含小写字母。
* strs 中的所有单词都具有相同的长度，且是彼此的字母异位词。


## 思路

并集      

## 解法
```java

class Solution {
    public int numSimilarGroups(String[] strs) {
        int len = strs.length;
        int len1 = strs[0].length();
        UnionFind unionfind = new UnionFind(len);
        for(int i=0;i<len;i++){
            for(int j=i+1;j<len;j++){
                if(checkstr(strs[i],strs[j])){
                    unionfind.union(i,j);
                }
            }
        }
        return unionfind.getCount();
    }
    //判断两个字符串是否为异位词
    public boolean checkstr(String str1,String str2){
        int len = str1.length(),index=0;
        for(int i=0;i<len;i++){
            if(str1.charAt(i)!=str2.charAt(i)){
                index++;
                if(index>2) return false;
            }
        }
        return true;
    }

    class UnionFind{
        private int[] parent;
        private int count;

        public UnionFind(int n){
            this.count = n;
            parent = new int[n];
            for(int i=0;i<n;i++){
                parent[i] = i;
            }
        }

        public int find(int x){
            return x==parent[x]?x:find(parent[x]);
        }

        public void union(int x,int y){
            int rolex = find(x),roley = find(y);
            if(rolex==roley) return ;
            parent[rolex] = roley;
            count--;
        }

        public int getCount(){
            return count;
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
