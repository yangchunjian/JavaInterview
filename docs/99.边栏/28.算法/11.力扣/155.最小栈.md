---
title: 最小栈
date: 2022-10-09 22:30:46
permalink: /pages/cadd2a/
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

设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

- MinStack() 初始化堆栈对象。
- void push(int val) 将元素val推入堆栈。
- void pop() 删除堆栈顶部的元素。
- int top() 获取堆栈顶部的元素。
- int getMin() 获取堆栈中的最小元素。


示例 1:

    输入：
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]
    
    输出：
    [null,null,null,null,-3,null,0,-2]
    
    解释：
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.
 

提示：

- -2<sup>31</sup> <= val <= 2<sup>31</sup> - 1
- pop、top 和 getMin 操作总是在 非空栈 上调用
- push, pop, top, and getMin最多被调用 3 * 10<sup>4</sup> 次


## 思路

定义节点Node

    private class Node{
        int val;
        int min;
        Node next;

## 解法
```java

class MinStack {
    Node head;
    public MinStack() {
    }
    
    public void push(int val) {
        if(head==null){
            head = new Node(val,val);
        }else{
            head = new Node(val,Math.min(val,head.min),head);
        }
    }
    
    public void pop() {
        head = head.next;
    }
    
    public int top() {
        return head.val;
    }
    
    public int getMin() {
        return head.min;
    }

    private class Node{
        int val;
        int min;
        Node next;
        private Node(int val,int min){
            this(val,min,null);
        }

        private Node(int val,int min,Node next){
            this.val = val;
            this.min = min;
            this.next = next;
        }
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
