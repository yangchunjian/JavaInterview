---
title: 最大频率栈
date: 2022-10-09 22:34:39
permalink: /pages/033700/
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

设计一个类似堆栈的数据结构，将元素推入堆栈，并从堆栈中弹出出现频率最高的元素。

实现 FreqStack 类:

- FreqStack() 构造一个空的堆栈。
- void push(int val) 将一个整数 val 压入栈顶。
- int pop() 删除并返回堆栈中出现频率最高的元素。

如果出现频率最高的元素不只一个，则移除并返回最接近栈顶的元素。
 

示例 1：

    输入：
    ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
    [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
    输出：[null,null,null,null,null,null,null,5,7,5,4]
    解释：
    FreqStack = new FreqStack();
    freqStack.push (5);//堆栈为 [5]
    freqStack.push (7);//堆栈是 [5,7]
    freqStack.push (5);//堆栈是 [5,7,5]
    freqStack.push (7);//堆栈是 [5,7,5,7]
    freqStack.push (4);//堆栈是 [5,7,5,7,4]
    freqStack.push (5);//堆栈是 [5,7,5,7,4,5]
    freqStack.pop ();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
    freqStack.pop ();//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
    freqStack.pop ();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
    freqStack.pop ();//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
 

提示：

- 0 <= val <= 10<sup>9</sup>
- push 和 pop 的操作数不大于 2 * 10<sup>4</sup>。
- 输入保证在调用 pop 之前堆栈中至少有一个元素。


## 思路


    // 优先队列，用index判断谁离栈顶近
    private int index;
    private Map<Integer,Integer> map;
    private PriorityQueue<int[]> queue;

## 解法
```java

class FreqStack {

    // 优先队列，用index判断谁离栈顶近

    private int index;
    private Map<Integer,Integer> map;
    private PriorityQueue<int[]> queue;

    public FreqStack() {
            queue=new PriorityQueue<>(new Comparator<int[]>() {
                @Override
                public int compare(int[] o1, int[] o2) {
                    if(o1[1]==o2[1])
                    {
                        return o2[2]-o1[2];
                    }
                    return o2[1]-o1[1];
                }
            });
            map=new HashMap<>();
            index=0;
    }
    
    public void push(int x) {

            int cnt=map.getOrDefault(x,0)+1;
            map.put(x,cnt);
            queue.add(new int[]{x,cnt,index++});
    }
    
    public int pop() {
            int[] poll = queue.poll();
            map.put(poll[0],poll[1]-1);
            return poll[0];
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = new FreqStack();
 * obj.push(val);
 * int param_2 = obj.pop();
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
