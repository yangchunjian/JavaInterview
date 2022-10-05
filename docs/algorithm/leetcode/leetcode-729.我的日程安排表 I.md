---
title: 我的日程安排表 I
date: 2022-10-05 16:49:42
permalink: /pages/ade24b/
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

实现一个 MyCalendar 类来存放你的日程安排。如果要添加的日程安排不会造成 重复预订 ，则可以存储这个新的日程安排。

当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 重复预订 。

日程可以用一对整数 start 和 end 表示，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end 。

实现 MyCalendar 类：

- MyCalendar() 初始化日历对象。
- boolean book(int start, int end) 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true 。否则，返回 false 并且不要将该日程安排添加到日历中。

示例：

    输入：
    ["MyCalendar", "book", "book", "book"]
    [[], [10, 20], [15, 25], [20, 30]]
    输出：
    [null, true, false, true]
    
    解释：
    MyCalendar myCalendar = new MyCalendar();
    myCalendar.book(10, 20); // return True
    myCalendar.book(15, 25); // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
    myCalendar.book(20, 30); // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。
 

提示：

- 0 <= start < end <= 10<sup>9</sup>
- 每个测试用例，调用 book 方法的次数最多不超过 1000 次。


## 思路

转变一下思维，可以把重叠这个概念扩展到广义的相等概念，即一旦重叠就代表两个元素相等，那么这就简单了，set专门用来去重存储。 

那么HashSet和TreeSet用哪个呢？ 首先HashSet去重是根据对象的哈希值，由于我们要存储的是int[]类型的，我们在写代码的时候是要根据start和end来创建它，那么它们的哈希值基本不同，也就是说就算两个int[]里面的值完全一样，但是哈希值不同，HashSet也会把它们存进去。 

由于我们把重叠看作是广义上的相等，那么就需要定义一个比较器要区分它们的是否广义相等，而TreeSet支持自定义比较器，而且根据比较器返回的值进行排序，非常符合我们的需求。

## 解法
```java

class MyCalendar {
    TreeSet<int[]> calendars;

    public MyCalendar() {
        calendars = new TreeSet<>((a, b) -> {
            if(a[1] <= b[0])
                return -1;
            else if(a[0] >= b[1])
                return 1;
            else
                return 0;
        });
    }
    
    public boolean book(int start, int end) {
        int[] e = new int[]{start, end};
        return calendars.add(e);
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * boolean param_1 = obj.book(start,end);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
