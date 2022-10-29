---
title: DI 序列的有效排列
date: 2022-10-29 14:30:47
permalink: /pages/32362c/
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

给定一个长度为 n 的字符串 s ，其中 s[i] 是:

- “D” 意味着减少，或者
- “I” 意味着增加

有效排列 是对有 n + 1 个在 [0, n]  范围内的整数的一个排列 perm ，使得对所有的 i：

- 如果 s[i] == 'D'，那么 perm[i] > perm[i+1]，以及；
- 如果 s[i] == 'I'，那么 perm[i] < perm[i+1]。

返回 有效排列  perm的数量 。因为答案可能很大，所以请返回你的答案对 109 + 7 取余。

 

示例 1：

    输入：s = "DID"
    输出：5
    解释：
    (0, 1, 2, 3) 的五个有效排列是：
    (1, 0, 3, 2)
    (2, 0, 3, 1)
    (2, 1, 3, 0)
    (3, 0, 2, 1)
    (3, 1, 2, 0)
示例 2:

    输入: s = "D"
    输出: 1
 

提示:

- n == s.length
- 1 <= n <= 200
- s[i] 不是 'I' 就是 'D'

## 思路



## 解法
```java

class Solution {
    public int numPermsDISequence(String S) {
        int n=S.length();
        int[][] dp=new int[n+1][n+1];
        dp[0][0]=1;
        for(int i=1;i<=n;i++){
            for(int j=0;j<=i;j++){
                if(S.charAt(i-1)=='D'){
                    for(int k=j;k<i;k++){
                        dp[i][j]=(dp[i][j]+dp[i-1][k])%1000000007;
                    }
                }
                else{
                    for(int k=0;k<j;k++){
                        dp[i][j]=(dp[i][j]+dp[i-1][k])%1000000007;
                    }
                }
            }
        }
        int res=0;
        for(int i=0;i<=n;i++){
            res=(res+dp[n][i])%1000000007;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
