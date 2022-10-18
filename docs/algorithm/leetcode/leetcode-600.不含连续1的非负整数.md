---
title: 不含连续1的非负整数
date: 2022-10-18 17:21:28
permalink: /pages/ff9baa/
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

给定一个正整数 n ，返回范围在 [0, n] 都非负整数中，其二进制表示不包含 连续的 1 的个数。

 

示例 1:

    输入: n = 5
    输出: 5
    解释: 
    下面是带有相应二进制表示的非负整数<= 5：
    0 : 0
    1 : 1
    2 : 10
    3 : 11
    4 : 100
    5 : 101
    其中，只有整数3违反规则（有两个连续的1），其他5个满足规则。
示例 2:

    输入: n = 1
    输出: 2
示例 3:

    输入: n = 2
    输出: 3
 

提示:

- 1 <= n <= 10<sup>9</sup>

## 思路

    int[] help = new int [32];
    
    String s =Integer.toBinaryString(num);


## 解法
```java

class Solution {
    public int findIntegers(int num) {
        int[] help = new int [32];
        help[0] = 1;
        help[1] = 2;
        help[2] = 3;
        //长度为 i 的二进制数中符合条件数字的个数
        for (int i = 3;i<help.length;i++){
            //  第i位为1那么i-1必为0 对应的有help[i-2]个  第i位为0 有help[i-1]个数
            help[i] = help[i-1]+help[i-2];
        }

        String s =Integer.toBinaryString(num);
        //有10000000或者1xxxx10000存在  （即 最右边为1的位置 只取了0的情况，缺失了1的情况）所以 cnt为1
        int cnt = 1;
        int prebit = 0;
        for (int i = 0;i<s.length();i++){
            if (s.charAt(i)=='1') {
                // 使第 s.length - i 位为 0 num中高位所有为 1 的数为1  
                // s.length -i 为 1 的情况 交由后面计算否则会产生超界
                cnt += help[s.length()-1-i];
                //如果有 11 存在  之后不可能使num高位所有为 1 的数为1 break
                if (prebit==1){
                    cnt--;
                    break;
                }
                prebit =1;
            }else {
                prebit =0;
            }
        }
      return cnt;    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
