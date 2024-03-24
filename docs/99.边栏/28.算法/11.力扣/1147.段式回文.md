---
title: 段式回文
date: 2022-12-08 20:22:24
permalink: /pages/78dddd/
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

你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:

subtexti 是 非空 字符串
所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
subtexti == subtextk - i + 1 表示所有 i 的有效值( 即 1 <= i <= k )
返回k可能最大值。

 

示例 1：

    输入：text = "ghiabcdefhelloadamhelloabcdefghi"
    输出：7
    解释：我们可以把字符串拆分成 "(ghi)(abcdef)(hello)(adam)(hello)(abcdef)(ghi)"。
示例 2：

    输入：text = "merchant"
    输出：1
    解释：我们可以把字符串拆分成 "(merchant)"。
示例 3：

    输入：text = "antaprezatepzapreanta"
    输出：11
    解释：我们可以把字符串拆分成 "(a)(nt)(a)(pre)(za)(tpe)(za)(pre)(a)(nt)(a)"。
 

提示：

- 1 <= text.length <= 1000
- text 仅由小写英文字符组成


## 思路

递归

## 解法
```java

class Solution {
    public int longestDecomposition(String text) {
        int n=text.length();
        if(n==0) return 0;
        for(int len=1;len<=n/2;len++){
            if(text.substring(0,len).equals(text.substring(n-len,n))){
                return 2+longestDecomposition(text.substring(len,n-len));
            }
        }
        return 1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
