---
title: 1 比特与 2 比特字符
date: 2022-10-03 20:10:12
permalink: /pages/34d31c/
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

有两种特殊字符：

- 第一种字符可以用一比特 0 表示
- 第二种字符可以用两比特（10 或 11）表示

给你一个以 0 结尾的二进制数组 bits ，如果最后一个字符必须是一个一比特字符，则返回 true 。

 

示例 1:

    输入: bits = [1, 0, 0]
    输出: true
    解释: 唯一的解码方式是将其解析为一个两比特字符和一个一比特字符。
    所以最后一个字符是一比特字符。
示例 2:

    输入：bits = [1,1,1,0]
    输出：false
    解释：唯一的解码方式是将其解析为两比特字符和两比特字符。
    所以最后一个字符不是一比特字符。
 

提示:

- 1 <= bits.length <= 1000
- bits[i] 为 0 或 1


## 思路

while

## 解法
```java

class Solution {
    public boolean isOneBitCharacter(int[] bits) {
       int start = 0 ;
        while(start<bits.length-1){
            if(bits[start] == 0){
                start++;
            }else{
                start+=2;
            }
        }
        return start == bits.length-1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
