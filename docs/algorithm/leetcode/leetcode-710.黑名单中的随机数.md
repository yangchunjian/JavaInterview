---
title: 黑名单中的随机数
date: 2022-09-28 22:45:38
permalink: /pages/d22489/
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

给定一个整数 n 和一个 无重复 黑名单整数数组 blacklist 。设计一种算法，从 [0, n - 1] 范围内的任意整数中选取一个 未加入 黑名单 blacklist 的整数。任何在上述范围内且不在黑名单 blacklist 中的整数都应该有 同等的可能性 被返回。

优化你的算法，使它最小化调用语言 内置 随机函数的次数。

实现 Solution 类:

- Solution(int n, int[] blacklist) 初始化整数 n 和被加入黑名单 blacklist 的整数
- int pick() 返回一个范围为 [0, n - 1] 且不在黑名单 blacklist 中的随机整数

示例 1：

    输入
    ["Solution", "pick", "pick", "pick", "pick", "pick", "pick", "pick"]
    [[7, [2, 3, 5]], [], [], [], [], [], [], []]
    输出
    [null, 0, 4, 1, 6, 1, 0, 4]
    
    解释
    Solution solution = new Solution(7, [2, 3, 5]);
    solution.pick(); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，
                     // 0、1、4和6的返回概率必须相等(即概率为1/4)。
    solution.pick(); // 返回 4
    solution.pick(); // 返回 1
    solution.pick(); // 返回 6
    solution.pick(); // 返回 1
    solution.pick(); // 返回 0
    solution.pick(); // 返回 4
 

提示:

- 1 <= n <= 10<sup>9</sup>
- 0 <= blacklist.length <= min(10<sup>5</sup>, n - 1)
- 0 <= blacklist[i] < n
- blacklist 中所有值都 不同
-  pick 最多被调用 2 * 10<sup>4</sup> 次

## 思路

    int whiteEnd;
    Random random;
    HashMap<Integer, Integer> table;


## 解法
```java

class Solution {

    int whiteEnd;
    Random random;
    HashMap<Integer, Integer> table;

    public Solution(int n, int[] blacklist) {
        //init
        HashSet<Integer> blackset = new HashSet<>();
        table = new HashMap<>();
        random = new Random();

        //将[0, n - 1] 划分成两个区间 [0, whileEnd) [whileEnd, n - 1] 前者是认为是白名单区间，后者认为是黑名单区间
        whiteEnd = n - blacklist.length;
        //对给定的【黑名单数组】遍历可知， 找出【黑名单】散布在黑名单区间[whileEnd, n - 1]中的记录，收集到blackset, 
        for (int num : blacklist) {
            if (num >= whiteEnd) blackset.add(num);
        }
        //黑名单区间[whileEnd, n - 1]中存在的白名单
        List<Integer> whites = new ArrayList<>();
        //黑名单区间中如果不是黑名单，那么就是白名单了，收集白名单
        for (int i = whiteEnd; i < n; i++) {
            if (!blackset.contains(i)) whites.add(i);
        }
        //将白名单区间中的黑名单 和 黑名单区间中的白名单 构建映射
        int index = 0;
        for (int b : blacklist) {
            if (b < whiteEnd) {
                table.put(b, whites.get(index++));
            }
        }
    }
    
    public int pick() {
        int ran = random.nextInt(whiteEnd);
        if (table.containsKey(ran)) {
            return table.get(ran);
        }
        return ran;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(n, blacklist);
 * int param_1 = obj.pick();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
