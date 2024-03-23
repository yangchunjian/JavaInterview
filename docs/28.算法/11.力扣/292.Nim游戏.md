---
title: Nim游戏
date: 2022-06-02 23:52:34
permalink: /pages/210df6/
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

你和你的朋友，两个人一起玩 Nim 游戏：

- 桌子上有一堆石头。
- 你们轮流进行自己的回合， 你作为先手 。
- 每一回合，轮到的人拿掉 1 - 3 块石头。
- 拿掉最后一块石头的人就是获胜者。

假设你们每一步都是最优解。请编写一个函数，来判断你是否可以在给定石头数量为 n 的情况下赢得游戏。如果可以赢，返回 true；否则，返回 false 。

 

示例 1：

    输入：n = 4
    输出：false 
    解释：以下是可能的结果:
    1. 移除1颗石头。你的朋友移走了3块石头，包括最后一块。你的朋友赢了。
    2. 移除2个石子。你的朋友移走2块石头，包括最后一块。你的朋友赢了。
    3.你移走3颗石子。你的朋友移走了最后一块石头。你的朋友赢了。
    在所有结果中，你的朋友是赢家。
示例 2：

    输入：n = 1
    输出：true
示例 3：

    输入：n = 2
    输出：true
 

提示：

- 1 <= n <= 2<sup>31</sup> - 1



## 思路

面对4的整数倍的人永远无法翻身，你拿N根对手就会拿4-N根，保证每回合共减4根，你永远对面4倍数，直到4.
相反，如果最开始不是4倍数，你可以拿掉刚好剩下4倍数根，让他永远对面4倍数。



## 解法
```java

class Solution {
    public boolean canWinNim(int n) {
        if(n%4==0) return false;
        else return true;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
