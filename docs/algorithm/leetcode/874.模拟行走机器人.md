---
title: 模拟行走机器人
date: 2022-10-26 11:02:29
permalink: /pages/89160e/
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

机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 commands ：

- -2 ：向左转 90 度
- -1 ：向右转 90 度
- 1 <= x <= 9 ：向前移动 x 个单位长度

在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。

机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。

返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）

 
注意：

- 北表示 +Y 方向。
- 东表示 +X 方向。
- 南表示 -Y 方向。
- 西表示 -X 方向。

示例 1：

    输入：commands = [4,-1,3], obstacles = []
    输出：25
    解释：
    机器人开始位于 (0, 0)：
    1. 向北移动 4 个单位，到达 (0, 4)
    2. 右转
    3. 向东移动 3 个单位，到达 (3, 4)
    距离原点最远的是 (3, 4) ，距离为 32 + 42 = 25
示例 2：

    输入：commands = [4,-1,4,-2,4], obstacles = [[2,4]]
    输出：65
    解释：机器人开始位于 (0, 0)：
    1. 向北移动 4 个单位，到达 (0, 4)
    2. 右转
    3. 向东移动 1 个单位，然后被位于 (2, 4) 的障碍物阻挡，机器人停在 (1, 4)
    4. 左转
    5. 向北走 4 个单位，到达 (1, 8)
    距离原点最远的是 (1, 8) ，距离为 12 + 82 = 65
 

提示：

- 1 <= commands.length <= 10<sup>4</sup>
- commands[i] is one of the values in the list [-2,-1,1,2,3,4,5,6,7,8,9].
- 0 <= obstacles.length <= 10<sup>4</sup>
- -3 * 10<sup>4</sup> <= xi, yi <= 3 * 10<sup>4</sup>
- 答案保证小于 2<sup>31</sup>

## 思路

使用 集合 Set 存储障碍物的坐标，用来检查下一步是否受阻

## 解法
```java

class Solution {
    public int robotSim(int[] commands, int[][] obstacles) {
        // 使用 集合 Set 存储障碍物的坐标，用来检查下一步是否受阻
        HashSet<String> set = new HashSet<>();
        for (int[] obstacle : obstacles) {
            set.add(obstacle[0] + "," + obstacle[1]);
        }
        // 定义四个方向
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};
        // curDir 当前方向  ；  (x,y) 起始坐标
        int curDir = 0, x = 0, y = 0;
        int tx, ty;
        int ans = 0;
        for (int command : commands) {
            if (command > 0) {
                for (int i = 0; i < command; i++) {
                    tx = x + dx[curDir];
                    ty = y + dy[curDir];
                    // 下一步有障碍物，结束当前命令，跳至下一命令
                    if (set.contains(tx + "," + ty)) break;
                    x = tx;
                    y = ty;
                    // 记录行走过程中最大欧式距离的平方
                    ans = Math.max(ans, x * x + y * y);
                }
            } else {// 机器人得到转弯的指令，就更新方向
                curDir = command == -1 ? (curDir + 1) % 4 : (curDir + 3) % 4;
            }
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
