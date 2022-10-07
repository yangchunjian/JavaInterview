---
title: 在LR字符串中交换相邻字符
date: 2022-10-07 22:36:46
permalink: /pages/cc543b/
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

在一个由 'L' , 'R' 和 'X' 三个字符组成的字符串（例如"RXXLRXRXL"）中进行移动操作。

一次移动操作指用一个"LX"替换一个"XL"，或者用一个"XR"替换一个"RX"。现给定起始字符串start和结束字符串end，请编写代码，当且仅当存在一系列移动操作使得start可以转换成end时， 返回True。

 

示例 :

    输入: start = "RXXLRXRXL", end = "XRLXXRRLX"
    输出: True
    解释:
    我们可以通过以下几步将start转换成end:
    RXXLRXRXL ->
    XRXLRXRXL ->
    XRLXRXRXL ->
    XRLXXRRXL ->
    XRLXXRRLX
 

提示：

- 1 <= len(start) = len(end) <= 10000。
- start和end中的字符串仅限于'L', 'R'和'X'。


## 思路

    // 双指针


## 解法
```java

class Solution {
    // 双指针
    public boolean canTransform(String start, String end) {
        int i = 0 , j = 0 , len = start.length();
        while(i<=len && j<=len){ //小于等于是为了处理 RXR XXR    有一方指针越界，另一方没有越界
 //定位第一个不是X的字符，判断其相对位置
            while(i<len && start.charAt(i) == 'X') i++; 
            while(j<len && end.charAt(j) == 'X') j++;
            if(i == len || j == len){
                return i==j;
            }
//相对位置：start 的 L一定要在end的L的右侧，才能向左交换 ....
            if(start.charAt(i) != end.charAt(j)) return false;
            if(start.charAt(i) == 'L' && i<j) return false;
            if(start.charAt(i) == 'R' && i>j) return false;
            i++;
            j++;
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
