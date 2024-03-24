---
title: 模糊坐标
date: 2022-10-20 14:11:56
permalink: /pages/312244/
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

我们有一些二维坐标，如 "(1, 3)" 或 "(2, 0.5)"，然后我们移除所有逗号，小数点和空格，得到一个字符串S。返回所有可能的原始字符串到一个列表中。

原始的坐标表示法不会存在多余的零，所以不会出现类似于"00", "0.0", "0.00", "1.0", "001", "00.01"或一些其他更小的数来表示坐标。此外，一个小数点前至少存在一个数，所以也不会出现“.1”形式的数字。

最后返回的列表可以是任意顺序的。而且注意返回的两个数字中间（逗号之后）都有一个空格。

 

示例 1:

    输入: "(123)"
    输出: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]

示例 2:

    输入: "(00011)"
    输出:  ["(0.001, 1)", "(0, 0.011)"]
    解释: 
    0.0, 00, 0001 或 00.01 是不被允许的。

示例 3:

    输入: "(0123)"
    输出: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
    
示例 4:

    输入: "(100)"
    输出: [(10, 0)]
    解释: 
    1.0 是不被允许的。
 

提示:

- 4 <= S.length <= 12.
- S[0] = "(", S[S.length - 1] = ")", 且字符串 S 中的其他元素都是数字。


## 思路

暴力组合

## 解法
```java

class Solution {
    // 暴力组合
    public List<String> ambiguousCoordinates(String S) {
        List<String> ans=new ArrayList<>();
        S=S.substring(1,S.length()-1);
        for(int p=1;p<S.length();p++){
            List<String> l1=formCoordinates(S.substring(0,p));
            List<String> l2=formCoordinates(S.substring(p));
            for(int i=0;i<l1.size();i++){for(int j=0;j<l2.size();j++){ans.add("("+l1.get(i)+", "+l2.get(j)+")");}}
        }
        return ans;
    }
    public List<String> formCoordinates(String s){
        List<String> list=new ArrayList<>();
        //先考虑没有小数点的
        if(s.length()==1||s.charAt(0)!='0'){list.add(s);}//没有前导0的整数
        //再考虑有小数点的
        for(int i=1;i<s.length();i++){
            String s1=s.substring(0,i);//整数部分
            String s2=s.substring(i);//小数部分
            //整数没有前置0，小数部分没有后置0，才可以
            if((s1.length()==1||s1.charAt(0)!='0')&&s2.charAt(s2.length()-1)!='0'){list.add(s1+'.'+s2);}
        }
        return list; 
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
