---
title: 考场就座
date: 2022-10-25 09:08:43
permalink: /pages/8baf78/
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

在考场里，一排有 N 个座位，分别编号为 0, 1, 2, ..., N-1 。

当学生进入考场后，他必须坐在能够使他与离他最近的人之间的距离达到最大化的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在 0 号座位上。)

返回 ExamRoom(int N) 类，它有两个公开的函数：其中，函数 ExamRoom.seat() 会返回一个 int （整型数据），代表学生坐的位置；函数 ExamRoom.leave(int p) 代表坐在座位 p 上的学生现在离开了考场。每次调用 ExamRoom.leave(p) 时都保证有学生坐在座位 p 上。

 

示例：
    
    输入：["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]
    输出：[null,0,9,4,2,null,5]
    解释：
    ExamRoom(10) -> null
    seat() -> 0，没有人在考场里，那么学生坐在 0 号座位上。
    seat() -> 9，学生最后坐在 9 号座位上。
    seat() -> 4，学生最后坐在 4 号座位上。
    seat() -> 2，学生最后坐在 2 号座位上。
    leave(4) -> null
    seat() -> 5，学生最后坐在 5 号座位上。
 

提示：

- 1 <= N <= 10^9
- 在所有的测试样例中 ExamRoom.seat() 和 ExamRoom.leave() 最多被调用 10^4 次。
- 保证在调用 ExamRoom.leave(p) 时有学生正坐在座位 p 上。



## 思路

TreeSet

## 解法
```java

class ExamRoom {
    private TreeSet<Integer> room;
    private int size;

    public ExamRoom(int n) {
        this.room = new TreeSet<>();
        this.size = n - 1;

    }
    
    public int seat() {
        int index = 0;
        if (room.size() > 0){
            int dist = room.first();// 第一个元素到0的距离就是其本身，默认其为最大距离
            Integer prev = null;
            for (Integer seat: room){// 遍历考场中的全部座位
                if (prev != null){
                    int d = (seat - prev) >> 1;// 获取当前位置和上一个位置的距离
                    if (d > dist){// 替换最大距离和对应的位置下标
                        dist = d;
                        index = (seat + prev) >> 1;
                    }
                }
                prev = seat;// 前一个位置后移到当前位置
            }
            if (size - room.last() > dist){
                index = size;// 最后一个位置的判断
            }
        }
        room.add(index);
        return index;
    }
    
    public void leave(int p) {
        room.remove(p);

    }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * ExamRoom obj = new ExamRoom(n);
 * int param_1 = obj.seat();
 * obj.leave(p);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
