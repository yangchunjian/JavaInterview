---
title: 种花问题
date: 2022-09-15 22:45:23
permalink: /pages/8f308f/
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

假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，

能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

 

示例 1：

    输入：flowerbed = [1,0,0,0,1], n = 1
    输出：true
示例 2：

    输入：flowerbed = [1,0,0,0,1], n = 2
    输出：false
 

提示：

- 1 <= flowerbed.length <= 2 * 10<sup>4</sup>
- flowerbed[i] 为 0 或 1
- flowerbed 中不存在相邻的两朵花
- 0 <= n <= flowerbed.length



## 思路



## 解法
```java

class Solution {
    public boolean canPlaceFlowers(int[] flowerbed, int n) {

        int num = 0,count = 1;  //假设在数组左边添加0，以解决边界问题，令count初始为1
        for (int i=0;i<flowerbed.length;i++){
            if (flowerbed[i] == 0){
                count++;
            }else{
                count = 0;
            }
            if (count == 3){    //每连续三个0种一次花
                num++;
                count = 1;
            }
        }
        if (count == 2){    //如果最后count为2而不是1，表示最后一个位置可以种花
            num++;
        }
        return n <= num;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
