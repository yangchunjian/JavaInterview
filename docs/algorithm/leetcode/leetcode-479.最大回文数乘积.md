---
title: 最大回文数乘积
date: 2022-09-07 23:16:12
permalink: /pages/997801/
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

给定一个整数 n ，返回 可表示为两个 n 位整数乘积的 最大回文整数 。

因为答案可能非常大，所以返回它对 1337 取余 。

 

示例 1:

    输入：n = 2
    输出：987
    解释：99 x 91 = 9009, 9009 % 1337 = 987
示例 2:

    输入： n = 1
    输出： 9
 

提示:

- 1 <= n <= 8



## 思路

    //提供一个简单的思路，首先通过最大上界max(n位数)得到一个最大乘积结果max × max(2n位数)，
    
    然后取前n位数作为初始值half。通过half去构造回文数，检查能否由处于上界和下界之间的两个数得到，如果不可以，则half--，重新构造回文数，再次判断


## 解法
```java

class Solution {
    public int largestPalindrome(int n) {
//提供一个简单的思路，首先通过最大上界max(n位数)得到一个最大乘积结果max × max(2n位数)，然后取前n位数作为初始值half。通过half去构造回文数，检查能否由处于上界和下界之间的两个数得到，如果不可以，则half--，重新构造回文数，再次判断


        if(n == 1){
            return 9;
        }
        long max = (long)Math.pow(10,n)-1;
        long min = (long)Math.pow(10,n-1);
        long half = max*max/(min*10);
        long val;
        long temp;
        while(true){
            val = getVal(half);
            for(long i = max ; i >= Math.sqrt(val) ; i--){
                if(val % i == 0){
                    temp = val / i;
                    if(temp >= min && temp <= max){
                        return (int)(val % 1337);
                    }
                }
            }
            half--;
        }
    }

    public long getVal(long half){
        StringBuilder sb = new StringBuilder();
        return Long.parseLong(half+sb.append(half).reverse().toString());
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
