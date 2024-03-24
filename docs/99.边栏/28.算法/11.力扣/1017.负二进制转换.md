---
title: 负二进制转换
date: 2022-11-23 21:00:49
permalink: /pages/a0d715/
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

给你一个整数 n ，以二进制字符串的形式返回该整数的 负二进制（base -2）表示。

注意，除非字符串就是 "0"，否则返回的字符串中不能含有前导零。

 

示例 1：

    输入：n = 2
    输出："110"
    解释：(-2)2 + (-2)1 = 2
示例 2：

    输入：n = 3
    输出："111"
    解释：(-2)2 + (-2)1 + (-2)0 = 3
示例 3：

    输入：n = 4
    输出："100"
    解释：(-2)2 = 4
 

提示：

- 0 <= n <= 10<sup>9</sup>

## 思路

需要分正数位和复数位（也就是从右往左的偶数下标和奇数下标），假如是正数位，那么mod2的余数就是这一位的值，假如是负数位，那么mod2为0的时候正常，假如mod2之后是1，注意此时这一位可以是1，那么整个数就少了1，需要在原数字上再加1，才能补回来

## 解法
```java

class Solution {
    // 需要分正数位和复数位（也就是从右往左的偶数下标和奇数下标），假如是正数位，那么mod2的余数就是这一位的值，假如是负数位，那么mod2为0的时候正常，假如mod2之后是1，注意此时这一位可以是1，那么整个数就少了1，需要在原数字上再加1，才能补回来
    public String baseNeg2(int n) {

        if(n==0){return "0";}
        StringBuilder ans=new StringBuilder();
        for(int i=0;n>0;i^=1){
            ans.append(n&1);
            if(i==0){
                n = n>>1;
            }else{
                n = (n>>1)+(n&1);
            }
        }
        return ans.reverse().toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
