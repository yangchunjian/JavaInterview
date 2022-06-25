---
title: 数据流的中位数
date: 2022-06-16 00:27:46
permalink: /pages/cee433/
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
---


## 题目

中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

- void addNum(int num) - 从数据流中添加一个整数到数据结构中。
- double findMedian() - 返回目前所有元素的中位数。
示例：
    
    addNum(1)
    addNum(2)
    findMedian() -> 1.5
    addNum(3) 
    findMedian() -> 2
进阶:

- 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
- 如果数据流中 99% 的整数都在 0 到 100 范围内，你将如何优化你的算法？


## 思路

// 在数据流中，数据会不断涌入结构中，那么也就面临着需要多次动态调整以获得中位数。 因此实现的数据结构需要既需要快速找到中位数，也需要做到快速调整。

// 首先能想到就是二叉搜索树，在平衡状态下，树顶必定是中间数，然后再根据长度的奇偶性决定是否取两个数。

// 此方法效率高，但是手动编写较费时费力。

// 根据只需获得中间数的想法，可以将数据分为左右两边，一边以最大堆的形式实现，可以快速获得左侧最大数， 另一边则以最小堆的形式实现。其中需要注意的一点就是左右侧数据的长度差不能超过1。 这种实现方式的效率与AVL平衡二叉搜索树的效率相近，但编写更快


## 解法
```java

class MedianFinder {
// 在数据流中，数据会不断涌入结构中，那么也就面临着需要多次动态调整以获得中位数。 因此实现的数据结构需要既需要快速找到中位数，也需要做到快速调整。

// 首先能想到就是二叉搜索树，在平衡状态下，树顶必定是中间数，然后再根据长度的奇偶性决定是否取两个数。

// 此方法效率高，但是手动编写较费时费力。

// 根据只需获得中间数的想法，可以将数据分为左右两边，一边以最大堆的形式实现，可以快速获得左侧最大数， 另一边则以最小堆的形式实现。其中需要注意的一点就是左右侧数据的长度差不能超过1。 这种实现方式的效率与AVL平衡二叉搜索树的效率相近，但编写更快

    PriorityQueue<Integer> min;
    PriorityQueue<Integer> max;

    public MedianFinder() {
        min = new PriorityQueue<>();
        max = new PriorityQueue<>((a,b)->{return b-a;});
    }
    
    public void addNum(int num) {
        max.add(num);
        min.add(max.remove());
        if(min.size()>max.size()){
            max.add(min.remove());
        }

    }
    
    public double findMedian() {
        if(max.size() == min.size()){
            return (max.peek()+min.peek())/2.0;
        }else{
            return max.peek();
        }
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
