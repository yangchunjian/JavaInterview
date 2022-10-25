---
title: 回文素数
date: 2022-10-25 15:33:29
permalink: /pages/5e6123/
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

求出大于或等于 N 的最小回文素数。

回顾一下，如果一个数大于 1，且其因数只有 1 和它自身，那么这个数是素数。

例如，2，3，5，7，11 以及 13 是素数。

回顾一下，如果一个数从左往右读与从右往左读是一样的，那么这个数是回文数。

例如，12321 是回文数。

 

示例 1：

    输入：6
    输出：7
示例 2：

    输入：8
    输出：11
示例 3：

    输入：13
    输出：101
 

提示：

- 1 <= N <= 10^8
- 答案肯定存在，且小于 2 * 10^8。


## 思路

条件判断

## 解法
```java

class Solution {
    public int primePalindrome(int N) {
        if(N == 1 || N == 2){
            return 2;
        }
        //判断是否回文
        for(int i = N; i < Integer.MAX_VALUE; ){     
            if(isHuiwen(i+"") && isSushu(i)){
                return i;
            }
            //根据nothing、xxx的 数学规律1：除 11 外的偶数位回文数，都能被 11 整除
            //跳过一些数
            if(i > 11 && (i + "").length() % 2 == 0){
                i = (int)(Math.pow(10, (i + "").length()) + 1);
            }
            else{
                i++;
            }
        }        
        return -1;
    }
    
    public boolean isHuiwen(String s){
        int i = 0;
        int j = s.length() - 1;
        while(i < j){
            if(s.charAt(i) == s.charAt(j)){
                i++;
                j--;
            }
            else{
                return false;
            }
        }
        return true;
    }
    
    public boolean isSushu(int N){
        for(int i = 2; i <= (int)Math.sqrt(N); i++){
            if(N % i == 0){
                return false;    
            }
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
