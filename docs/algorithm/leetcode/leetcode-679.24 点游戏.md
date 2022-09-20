---
title: 24 点游戏
date: 2022-09-20 23:28:02
permalink: /pages/706024/
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

给定一个长度为4的整数数组 cards 。你有 4 张卡片，每张卡片上都包含一个范围在 [1,9] 的数字。您应该使用运算符 ['+', '-', '*', '/'] 和括号 '(' 和 ')' 将这些卡片上的数字排列成数学表达式，以获得值24。

你须遵守以下规则:

- 除法运算符 '/' 表示实数除法，而不是整数除法。
- 例如， 4 /(1 - 2 / 3)= 4 /(1 / 3)= 12 。
- 每个运算都在两个数字之间。特别是，不能使用 “-” 作为一元运算符。
- 例如，如果 cards =[1,1,1,1] ，则表达式 “-1 -1 -1 -1” 是 不允许 的。
- 你不能把数字串在一起 
- 例如，如果 cards =[1,2,1,2] ，则表达式 “12 + 12” 无效。

如果可以得到这样的表达式，其计算结果为 24 ，则返回 true ，否则返回 false 。

 

示例 1:

    输入: cards = [4, 1, 8, 7]
    输出: true
    解释: (8-4) * (7-1) = 24
示例 2:

    输入: cards = [1, 2, 1, 2]
    输出: false
 

提示:

- cards.length == 4
- 1 <= cards[i] <= 9



## 思路

dfs

## 解法
```java

class Solution {
   
    boolean ok = false;
    public boolean dfs(ArrayList<Double> list){
        int n = list.size();
        if(n == 1){
            if(Math.abs(list.get(0)-24)<=1e-9){
                return true;
            }else{
                return false;
            }
        }
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                if(ok) break;
                double num1 = list.get(i);
                double num2 = list.get(j);
                ArrayList<Double> remain = new ArrayList<>();
                int index = 0;
                for(int k=0; k<n; k++){
                    if(k != i && k != j){
                        remain.add(list.get(k));
                    }
                }
                // 加
                remain.add(num1 + num2);
                ok |= dfs(remain);
                remain.remove(remain.size()-1);
                // 减
                remain.add(num1 - num2);
                ok |= dfs(remain);
                remain.remove(remain.size()-1);
                remain.add(num2 - num1);
                ok |= dfs(remain);
                remain.remove(remain.size()-1);
                // 乘
                remain.add(num2 * num1);
                ok |= dfs(remain);
                remain.remove(remain.size()-1);
                // 除
                if(num2 != 0.0){
                    remain.add(num1/num2);
                    ok |= dfs(remain);
                    remain.remove(remain.size()-1);
                }
                if(num1 != 0.0){
                    remain.add(num2/num1);
                    ok |= dfs(remain);
                    remain.remove(remain.size()-1);
                }
            }
        }
        return ok;
    }
    public boolean judgePoint24(int[] cards) {
        ArrayList<Double> remain = new ArrayList<>();
        for(int i=0; i<4; i++){
            remain.add(cards[i]*1.0);
        }
        dfs(remain);
        return ok;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
