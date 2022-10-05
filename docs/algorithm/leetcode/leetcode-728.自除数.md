---
title: 自除数
date: 2022-10-05 16:47:46
permalink: /pages/fce4c1/
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

自除数 是指可以被它包含的每一位数整除的数。

- 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

自除数 不允许包含 0 。

给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。

 

示例 1：

    输入：left = 1, right = 22
    输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
示例 2:

    输入：left = 47, right = 85
    输出：[48,55,66,77]
 

提示：

- 1 <= left <= right <= 10<sup>4</sup>

## 思路

判断自然数，然后放入结果集中

## 解法
```java

class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        int temp = 0;
        List<Integer> res = new ArrayList<>();
        for(int i = left; i <= right; i++){
            if(getValue(i)){
                res.add(i);
            }
        }
        return res;
    }
    public boolean getValue(int n){
        int res = n;
        while(n > 0){
            int temp = n % 10;
            if(temp == 0){
                return false;
            }
            if(temp != 0 && res % temp != 0){
                return false;
            }
            n = n / 10;
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
