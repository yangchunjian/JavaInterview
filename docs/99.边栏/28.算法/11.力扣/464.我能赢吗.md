---
title: 我能赢吗
date: 2022-07-24 22:26:06
permalink: /pages/356ccc/
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


在 "100 game" 这个游戏中，两名玩家轮流选择从 1 到 10 的任意整数，累计整数和，先使得累计整数和 达到或超过  100 的玩家，即为胜者。

如果我们将游戏规则改为 “玩家 不能 重复使用整数” 呢？

例如，两个玩家可以轮流从公共整数池中抽取从 1 到 15 的整数（不放回），直到累计整数和 >= 100。

给定两个整数 maxChoosableInteger （整数池中可选择的最大数）和 desiredTotal（累计和），若先出手的玩家是否能稳赢则返回 true ，否则返回 false 。假设两位玩家游戏时都表现 最佳 。

 

示例 1：

    输入：maxChoosableInteger = 10, desiredTotal = 11
    输出：false
    解释：
    无论第一个玩家选择哪个整数，他都会失败。
    第一个玩家可以选择从 1 到 10 的整数。
    如果第一个玩家选择 1，那么第二个玩家只能选择从 2 到 10 的整数。
    第二个玩家可以通过选择整数 10（那么累积和为 11 >= desiredTotal），从而取得胜利.
    同样地，第一个玩家选择任意其他整数，第二个玩家都会赢。
示例 2:

    输入：maxChoosableInteger = 10, desiredTotal = 0
    输出：true
示例 3:

    输入：maxChoosableInteger = 10, desiredTotal = 1
    输出：true
 

提示:

- 1 <= maxChoosableInteger <= 20
- 0 <= desiredTotal <= 300

## 思路

这种博弈的dp太妙了，关键在于理解 剩下的数也就是状态 对输赢的影响。对手和自己的策略都是最优的，所以考虑dp时不必区分自己和对方。

稳赢的意思是，存在先手A取一个数i，然后把剩下的问题变成B先手凑齐target-i是不是稳输（稳赢取反）。

同一个状态下，一开始先手的人输赢是确定的。并且存在很多重复计算。利用二进制位运算来标记使用过的数。开一个大小为全部状态数的Boolean数组即可。Boolean数组只存在一个，可以在不同递归中同步（类似回溯）。

## 解法
```java

class Solution {
    public boolean canIWin(int maxChoosableInteger, int desiredTotal) {

    
        if (desiredTotal <= maxChoosableInteger) return true;
        if (maxChoosableInteger * (1 + maxChoosableInteger) / 2 < desiredTotal) return false;
        Boolean [] dp = new Boolean [(1 << maxChoosableInteger) - 1];
        return dfs(maxChoosableInteger, desiredTotal, 0, dp);
    }

    private boolean dfs(int maxChoosableInteger, int desiredTotal, int state, Boolean [] dp) {
        if (dp[state] != null) {
            return dp[state];
        }
        for (int i = maxChoosableInteger; i > 0; --i) {
            // 被取过了
            if ((state & (1 << (i - 1))) != 0) continue;
            // 新状态
            int newState = (state | (1 << (i - 1)));
            if (i - desiredTotal >= 0 || !dfs(maxChoosableInteger, desiredTotal - i, newState, dp)) {
                dp[state] = true;
                return true;
            }
        }
        dp[state] = false;
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
