---
title: 超级次方
date: 2022-06-16 00:06:55
permalink: /pages/858af1/
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
titleTag: Java
---



## 题目
你的任务是计算 a<sup>b</sup> 对 1337 取模，a 是一个正整数，b 是一个非常大的正整数且会以数组形式给出。

 

示例 1：

    输入：a = 2, b = [3]
    输出：8
示例 2：

    输入：a = 2, b = [1,0]
    输出：1024
示例 3：

    输入：a = 1, b = [4,3,3,8,5,2]
    输出：1
示例 4：

    输入：a = 2147483647, b = [2,0,0]
    输出：1198
 

提示：

- 1 <= a <= 2<sup>31</sup> - 1
- 1 <= b.length <= 2000
- 0 <= b[i] <= 9
- b 不含前导 0


## 思路

    a%=1337，数组b每个元素%1337

## 解法
```java

class Solution {
    public int superPow(int a, int[] b) {    
        a%=1337;
        if(a == 1) return 1;
        int res = 1;
        int tenr = a;
        for(int i =b.length-1;i>=0;i--){
            res = (res * pow(tenr,b[i]))%1337;
//         10的运用，省去了处理数据的操作
            tenr = pow(tenr,10); 
        }
        return res;
    }
    public int pow(int num,int b){
        if(b == 0){
            return 1;
        }
        int res = num;
        for(int i=1;i<b;i++){
            res = (res*num)%1337;
        }
        return (int)res;
    }
}


```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
