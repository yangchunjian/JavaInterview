---
title: 森林中的兔子
date: 2022-10-08 22:44:53
permalink: /pages/778a94/
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

森林中有未知数量的兔子。提问其中若干只兔子 "还有多少只兔子与你（指被提问的兔子）颜色相同?" ，将答案收集到一个整数数组 answers 中，其中 answers[i] 是第 i 只兔子的回答。

给你数组 answers ，返回森林中兔子的最少数量。

 

示例 1：

    输入：answers = [1,1,2]
    输出：5
    解释：
    两只回答了 "1" 的兔子可能有相同的颜色，设为红色。 
    之后回答了 "2" 的兔子不会是红色，否则他们的回答会相互矛盾。
    设回答了 "2" 的兔子为蓝色。 
    此外，森林中还应有另外 2 只蓝色兔子的回答没有包含在数组中。 
    因此森林中兔子的最少数量是 5 只：3 只回答的和 2 只没有回答的。
示例 2：

    输入：answers = [10,10,10]
    输出：11
 

提示：

- 1 <= answers.length <= 1000
- 0 <= answers[i] < 1000


## 思路

            // 假设出现了某只兔子说看到了5只，如果之前从来没有出现，那么加上自己，总共6只，如果后面出现了5只兔子都说自己看到了5只同样的
            // 那么我们认为他们看到的是同样的颜色，也就是这五只都不统计，因为前面第一只兔子说看到5的时候统计了。
            // 如果出现第7只说自己看到了5只，那么假设是和前面的6只是同一个颜色，那么这个颜色的应该是有7只才对，矛盾了。所以不可能是同一个颜色
            // 只可能是另外一个颜色，所以再加上 5+1


## 解法
```java

class Solution {
    public int numRabbits(int[] answers) {
        Map<Integer,Integer> map = new HashMap<>();
        int num = 0;
        for (int answer : answers) {
            if(map.containsKey(answer)&&map.get(answer)>0){
                map.put(answer,map.get(answer)-1);
            }else {
                num+=answer+1;
                map.put(answer,answer);
            }
        }
        return num;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
