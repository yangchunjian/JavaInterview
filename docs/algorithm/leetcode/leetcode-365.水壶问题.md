---
title: 水壶问题
date: 2022-06-16 00:12:24
permalink: /pages/e41601/
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

有两个水壶，容量分别为 jug1Capacity 和 jug2Capacity 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 targetCapacity 升。

如果可以得到 targetCapacity 升水，最后请用以上水壶中的一或两个来盛放取得的 targetCapacity 升水。

你可以：

- 装满任意一个水壶
- 清空任意一个水壶
- 从一个水壶向另外一个水壶倒水，直到装满或者倒空

示例 1: 

    输入: jug1Capacity = 3, jug2Capacity = 5, targetCapacity = 4
    输出: true
    解释：来自著名的 "Die Hard"
示例 2:

    输入: jug1Capacity = 2, jug2Capacity = 6, targetCapacity = 5
    输出: false
示例 3:

    输入: jug1Capacity = 1, jug2Capacity = 2, targetCapacity = 3
    输出: true
 

提示:

- 1 <= jug1Capacity, jug2Capacity, targetCapacity <= 10<sup>6</sup>



## 思路

// BFS 广度优先搜索 //将水壶x，y的相关操作分解为6个状态，分别为 // 1.给x装满水 // 2.给y装满水 // 3.清空x的水 // 4.清空y的水 // 5.x向y倒水，直到x空或者y满 // 6.y向x倒水，直到y空或者x满 // 通过不断的搜索，如果x，y中的水满足 // x == z || y == z || x + y == z 返回true，否则继续搜索直到所有情况都搜索完毕


## 解法
```java

class Solution {


// BFS 广度优先搜索 //将水壶x，y的相关操作分解为6个状态，分别为 // 1.给x装满水 // 2.给y装满水 // 3.清空x的水 // 4.清空y的水 // 5.x向y倒水，直到x空或者y满 // 6.y向x倒水，直到y空或者x满 // 通过不断的搜索，如果x，y中的水满足 // x == z || y == z || x + y == z 返回true，否则继续搜索直到所有情况都搜索完毕
    public boolean canMeasureWater(int x, int y, int z) {

   
        if (z > x + y) return false;
        if (x == z || y == z || x + y == z) return true;

        // 保存搜索过的情况，防止无止境的搜索下去
        Set<List<Integer>> set = new HashSet<>();

        // 保存每次操作后，x，y中剩余的水的容量
        LinkedList<List<Integer>> res = new LinkedList<>();

        // 初始时，x y中均没有水
        List<Integer> list = Arrays.asList(0, 0);
        set.add(list);
        res.add(list);

        while (!res.isEmpty()) {
            List<Integer> poll = res.poll();
            int remain_x = poll.get(0);
            int remain_y = poll.get(1);
            if (remain_x == z || remain_y == z || remain_x + remain_y == z) {
                return true;
            }

            // 给x加满水
            List<Integer> p1 = Arrays.asList(x, remain_y);
            if (!set.contains(p1)) {
                set.add(p1);
                res.add(p1);
            }

            // 给y加满水
            List<Integer> p2 = Arrays.asList(remain_x, y);
            if (!set.contains(p2)) {
                set.add(p2);
                res.add(p2);
            }


            // 清空x的水
            List<Integer> p3 = Arrays.asList(0, remain_y);
            if (!set.contains(p3)) {
                set.add(p3);
                res.add(p3);
            }

            // 清空y的水
            List<Integer> p4 = Arrays.asList(remain_x, 0);
            if (!set.contains(p4)) {
                set.add(p4);
                res.add(p4);
            }

            // x向y倒水
            int tmp_x = (remain_x + remain_y) <= y ? 0 : remain_x + remain_y - y;
            int tmp_y = (remain_x + remain_y) < y ? remain_x + remain_y : y;
            List<Integer> p5 = Arrays.asList(tmp_x, tmp_y);
            if (!set.contains(p5)) {
                set.add(p5);
                res.add(p5);
            }


            // y向x倒水
            tmp_y = (remain_x + remain_y) <= x ? 0 : remain_x + remain_y - x;
            tmp_x = (remain_x + remain_y) < x ? remain_x + remain_y : x;
            List<Integer> p6 = Arrays.asList(tmp_x, tmp_y);
            if (!set.contains(p6)) {
                set.add(p6);
                res.add(p6);
            }

        }

        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
