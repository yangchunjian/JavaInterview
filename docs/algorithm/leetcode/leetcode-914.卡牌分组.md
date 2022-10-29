---
title: 卡牌分组
date: 2022-10-29 15:52:45
permalink: /pages/71b5d3/
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

给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

- 每组都有 X 张牌。
- 组内所有的牌上都写着相同的整数。

仅当你可选的 X >= 2 时返回 true。

 

示例 1：

    输入：deck = [1,2,3,4,4,3,2,1]
    输出：true
    解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
示例 2：

    输入：deck = [1,1,1,2,2,2,3,3]
    输出：false
    解释：没有满足要求的分组。

提示：

- 1 <= deck.length <= 10<sup>4</sup>
- 0 <= deck[i] < 10<sup>4</sup>

## 思路

计数

## 解法
```java

class Solution {
    public boolean hasGroupsSizeX(int[] deck) {
        // 计数
        int[] counter = new int[10000];
        for (int num: deck) {
            counter[num]++;
        }
        // 求gcd
        int x = 0;
        for(int cnt: counter) {
            if (cnt > 0) {
                x = gcd(x, cnt); 
                if (x == 1) { 
                    return false;
                }
            }
        }
        return x >= 2;
    }
    
    // 辗转相除法
    private int gcd (int a, int b) {
        return b == 0? a: gcd(b, a % b);
    }
    
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
