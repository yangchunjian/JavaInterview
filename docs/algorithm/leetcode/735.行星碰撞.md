---
title: 行星碰撞
date: 2022-10-05 19:52:08
permalink: /pages/b7d34e/
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

给定一个整数数组 asteroids，表示在同一行的行星。

对于数组中的每一个元素，其绝对值表示行星的大小，正负表示行星的移动方向（正表示向右移动，负表示向左移动）。每一颗行星以相同的速度移动。

找出碰撞后剩下的所有行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

 

示例 1：

    输入：asteroids = [5,10,-5]
    输出：[5,10]
    解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
示例 2：

    输入：asteroids = [8,-8]
    输出：[]
    解释：8 和 -8 碰撞后，两者都发生爆炸。
示例 3：

    输入：asteroids = [10,2,-5]
    输出：[10]
    解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
 

提示：

- 2 <= asteroids.length <= 10<sup>4</sup>
- -1000 <= asteroids[i] <= 1000
- asteroids[i] != 0

## 思路

    // 用数组模拟栈，有两个好处，效率高，以及返回时用Arrays.copyOfRange，可以让代码更简洁。

    // 可以归纳为两种情况：

    // 碰撞情形。只有当 栈不为空 && 栈顶为正 && 当前行星为负 三者皆满足时，才会发生碰撞。
    // 非碰撞情形。将当前考察行星入栈。
    // 发生碰撞时，比较栈顶和当前行星cur的大小（绝对值）。

    // 栈顶大，考察下一个。
    // cur大，弹出栈顶，继续考察cur。
    // 二者相等，弹出栈顶，考察下一个。


## 解法
```java

class Solution {
    // 用数组模拟栈，有两个好处，效率高，以及返回时用Arrays.copyOfRange，可以让代码更简洁。

    // 可以归纳为两种情况：

    // 碰撞情形。只有当 栈不为空 && 栈顶为正 && 当前行星为负 三者皆满足时，才会发生碰撞。
    // 非碰撞情形。将当前考察行星入栈。
    // 发生碰撞时，比较栈顶和当前行星cur的大小（绝对值）。

    // 栈顶大，考察下一个。
    // cur大，弹出栈顶，继续考察cur。
    // 二者相等，弹出栈顶，考察下一个。
    public int[] asteroidCollision(int[] asteroids) {

        int top = -1, n = asteroids.length;
        int[] stack = new int[n];
        for(int i = 0; i < n; i++){
            int cur = asteroids[i];
            if(top != -1 && stack[top] > 0 && cur < 0){ // 碰撞情形
                if(stack[top] + cur > 0) continue; // 栈顶胜，跳过
                else if(stack[top] + cur < 0) i--; // cur胜，继续考察cur
                top--; // cur胜或平，弹出栈顶
            }
            else stack[++top] = cur; // 其他情形，cur入栈
        }
        return Arrays.copyOfRange(stack, 0, top + 1);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
