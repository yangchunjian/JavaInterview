---
title: 车队
date: 2022-10-23 23:33:02
permalink: /pages/114d55/
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

在一条单行道上，有 n 辆车开往同一目的地。目的地是几英里以外的 target 。

给定两个整数数组 position 和 speed ，长度都是 n ，其中 position[i] 是第 i 辆车的位置， speed[i] 是第 i 辆车的速度(单位是英里/小时)。

一辆车永远不会超过前面的另一辆车，但它可以追上去，并与前车 以相同的速度 紧接着行驶。此时，我们会忽略这两辆车之间的距离，也就是说，它们被假定处于相同的位置。

车队 是一些由行驶在相同位置、具有相同速度的车组成的非空集合。注意，一辆车也可以是一个车队。

即便一辆车在目的地才赶上了一个车队，它们仍然会被视作是同一个车队。

返回到达目的地的 车队数量 。

 

示例 1：

    输入：target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
    输出：3
    解释：
    从 10 和 8 开始的车会组成一个车队，它们在 12 处相遇。
    从 0 处开始的车无法追上其它车，所以它自己就是一个车队。
    从 5 和 3 开始的车会组成一个车队，它们在 6 处相遇。
    请注意，在到达目的地之前没有其它车会遇到这些车队，所以答案是 3。
示例 2:

    输入: target = 10, position = [3], speed = [3]
    输出: 1
    解释: 只有一辆车，因此只有一个车队。
示例 3:

    输入: target = 100, position = [0,2,4], speed = [4,2,1]
    输出: 1
    解释:
    以0(速度4)和2(速度2)出发的车辆组成车队，在4点相遇。舰队以2的速度前进。
    然后，车队(速度2)和以4(速度1)出发的汽车组成一个车队，在6点相遇。舰队以1的速度前进，直到到达目标。
 

提示：

- n == position.length == speed.length
- 1 <= n <= 10<sup>5</sup>
- 0 < target <= 10<sup>6</sup>
- 0 <= position[i] < target
- position 中每个值都 不同
- 0 < speed[i] <= 10<sup>6</sup>


## 思路

hash+排序+单调栈

## 解法
```java

class Solution {
    // hash+排序+单调栈


    public int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        double[] time = new double[n];
        Map<Integer,Double> map = new HashMap<>();
        for(int i = 0; i < n; i++){
            time[i] = (target - position[i])/(double)speed[i];
            map.put(position[i], time[i]);
        }
        Arrays.sort(position);
        Deque<Double> stack = new ArrayDeque<>();
        for(int i = 0; i < n; i++){
            while(!stack.isEmpty() && map.get(position[i]) >= stack.peek()){
                stack.pop();
            }
            stack.push(map.get(position[i]));
        }
        return stack.size();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
