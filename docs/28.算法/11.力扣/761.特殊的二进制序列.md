---
title: 特殊的二进制序列
date: 2022-09-02 13:30:09
permalink: /pages/92b01f/
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

特殊的二进制序列是具有以下两个性质的二进制序列：

- 0 的数量与 1 的数量相等。
- 二进制序列的每一个前缀码中 1 的数量要大于等于 0 的数量。

给定一个特殊的二进制序列 S，以字符串形式表示。

定义一个操作 为首先选择 S 的两个连续且非空的特殊的子串，然后将它们交换。

（两个子串为连续的当且仅当第一个子串的最后一个字符恰好为第二个子串的第一个字符的前一个字符。)

在任意次数的操作之后，交换后的字符串按照字典序排列的最大的结果是什么？

示例 1:

    输入: S = "11011000"
    输出: "11100100"
    解释:
    将子串 "10" （在S[1]出现） 和 "1100" （在S[3]出现）进行交换。
    这是在进行若干次操作后按字典序排列最大的结果。
说明:

- S 的长度不超过 50。
- S 保证为一个满足上述定义的特殊 的二进制序列。


## 思路

1、原字符串一定可以分为不可再分的特殊字符串若干段；

2、每一个不可再分的特殊字符串。处理完美后，一定是一个"1"+中间的字符串处理+"0"。

这里的处理，表示的是变成字典序最大的字符串，处理过程是递归进行的，终止于字符串长度为0；

3、把这些处理过的字符串按照字典序从大到小排列，就是所求的字符串，，



## 解法
```java

class Solution {
    public String makeLargestSpecial(String s) {
        int count=0,pre=0,n=s.length();
        if(n==0){return "";}
        List<String> list=new ArrayList<>();        
        for(int i=0;i<n;i++){
            char c=s.charAt(i);
            if(c=='1'){count++;}
            else{
                count--;
                if(count==0){
                    list.add("1"+makeLargestSpecial(s.substring(pre+1,i))+"0");
                    pre=i+1;
                }
            }
        }
        Collections.sort(list);
        String ans="";
        for(int i=list.size()-1;i>=0;i--){ans+=list.get(i);}
        return ans;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
