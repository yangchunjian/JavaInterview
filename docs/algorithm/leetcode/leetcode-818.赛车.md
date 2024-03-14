---
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

你的赛车可以从位置 0 开始，并且速度为 +1 ，在一条无限长的数轴上行驶。赛车也可以向负方向行驶。赛车可以按照由加速指令 'A' 和倒车指令 'R' 组成的指令序列自动行驶。
* 当收到指令 'A' 时，赛车这样行驶：
  * position += speed
  * speed *= 2
* 当收到指令 'R' 时，赛车这样行驶：
  * 如果速度为正数，那么speed = -1
  * 否则 speed = 1

当前所处位置不变。
例如，在执行指令 "AAR" 后，赛车位置变化为 0 --> 1 --> 3 --> 3 ，速度变化为 1 --> 2 --> 4 --> -1 。

给你一个目标位置 target ，返回能到达目标位置的最短指令序列的长度。



示例 1：

    输入：target = 3
    输出：2
    解释：
    最短指令序列是 "AA" 。
    位置变化 0 --> 1 --> 3 。
示例 2：

    输入：target = 6
    输出：5
    解释：
    最短指令序列是 "AAARA" 。
    位置变化 0 --> 1 --> 3 --> 7 --> 7 --> 6 。


提示：

* 1 <= target <= 10<sup>4</sup>

## 思路

Queue

## 解法
```java


class Solution {
    public int racecar(int target) {
        if(target == 0){
            return 0;
        }
        Set<String> memory = new HashSet<>();
        memory.add("0@1");
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0,1,0});    //position,speed,count
        int[] curr;
        while(!queue.isEmpty()){
            curr = queue.poll();
            int[] plan1 = new int[]{curr[0]+curr[1],curr[1]*2,curr[2]+1};
            if(plan1[0] == target){
                return plan1[2];
            }
            if(memory.add(plan1[0]+"@"+plan1[1]) && plan1[0] > 0){
                queue.add(plan1);
            }
            int[] plan2 = new int[]{curr[0],curr[1],curr[2]+1};
            if(plan2[1] > 0){
                plan2[1] = -1;
            }else{
                plan2[1] = 1;
            }
            if(memory.add(plan2[0]+"@"+plan2[1]) && plan2[0] > 0){
                queue.add(plan2);
            }
        }
        return -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
