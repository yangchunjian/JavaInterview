---
title: 设计跳表
date: 2022-09-01 18:03:14
permalink: /pages/0b2d40/
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

不使用任何库函数，设计一个 跳表 。

跳表 是在 O(log(n)) 时间内完成增加、删除、搜索操作的数据结构。跳表相比于树堆与红黑树，其功能与性能相当，并且跳表的代码长度相较下更短，其设计思想与链表相似。

例如，一个跳表包含 [30, 40, 50, 60, 70, 90] ，然后增加 80、45 到跳表中，以下图的方式操作：


Artyom Kalinin [CC BY-SA 3.0], via Wikimedia Commons

跳表中有很多层，每一层是一个短的链表。在第一层的作用下，增加、删除和搜索操作的时间复杂度不超过 O(n)。跳表的每一个操作的平均时间复杂度是 O(log(n))，空间复杂度是 O(n)。

了解更多 : https://en.wikipedia.org/wiki/Skip_list

在本题中，你的设计应该要包含这些函数：

- bool search(int target) : 返回target是否存在于跳表中。
- void add(int num): 插入一个元素到跳表。
- bool erase(int num): 在跳表中删除一个值，如果 num 不存在，直接返回false. 如果存在多个 num ，删除其中任意一个即可。
- 注意，跳表中可能存在多个相同的值，你的代码需要处理这种情况。

 

示例 1:

![](../../../media/pictures/leetcode/1506_skiplist_1.gif)

    - 输入
    ["Skiplist", "add", "add", "add", "search", "add", "search", "erase", "erase", "search"]
    [[], [1], [2], [3], [0], [4], [1], [0], [1], [1]]
    输出
    [null, null, null, null, false, null, true, false, true, false]
    
    - 解释
    Skiplist skiplist = new Skiplist();
    skiplist.add(1);
    skiplist.add(2);
    skiplist.add(3);
    skiplist.search(0);   // 返回 false
    skiplist.add(4);
    skiplist.search(1);   // 返回 true
    skiplist.erase(0);    // 返回 false，0 不在跳表中
    skiplist.erase(1);    // 返回 true
    skiplist.search(1);   // 返回 false，1 已被擦除
 

提示:

- 0 <= num, target <= 2 * 10<sup>4</sup>
- 调用search, add, erase操作次数不大于 5 * 10<sup>4</sup>


## 思路

    关键在于理解这种数据结构的思想
    及随机层次的使用，避免变成线性链表
    理解起来还是要花一些时间的，理解了写起来就容易多了

## 解法
```java

class Skiplist {
   static final int MAX_LEVEL = 32;
    static final double P_FACTOR = 0.25;
    Node head;
    int level;
    Random random = new Random();

    public Skiplist() {
        head = new Node(-1, MAX_LEVEL);
    }

    public boolean search(int target) {
        Node curr = head;
        for (int i = level - 1; i >= 0; i--) {
            while (curr.forward[i] != null && curr.forward[i].val < target) {
                curr = curr.forward[i];
            }
        }
        curr = curr.forward[0];
        return curr != null && curr.val == target;
    }

    public void add(int num) {
        Node[] upload = new Node[MAX_LEVEL];
        Arrays.fill(upload, head);
        Node curr = head;
        for (int i = level - 1; i >= 0; i--) {
            while (curr.forward[i] != null && curr.forward[i].val < num) {
                curr = curr.forward[i];
            }
            upload[i] = curr;
        }
        int lv = randomLevel();
        level = Math.max(level, lv);
        Node newNode = new Node(num, lv);
        for (int i = 0; i < lv; i++) {
            newNode.forward[i] = upload[i].forward[i];
            upload[i].forward[i] = newNode;
        }
    }

    public boolean erase(int num) {
        Node[] upload = new Node[MAX_LEVEL];
        Node curr = head;
        for (int i = level - 1; i >= 0; i--) {
            while (curr.forward[i] != null && curr.forward[i].val < num) {
                curr = curr.forward[i];
            }
            upload[i] = curr;
        }
        curr = curr.forward[0];
        if (curr == null || curr.val != num) {
            return false;
        }
        for (int i = 0; i < level; i++) {
            if (upload[i].forward[i] != curr) {
                break;
            }
            upload[i].forward[i] = curr.forward[i];
        }
        while (level > 1 && head.forward[level - 1] == null) {
            level--;
        }
        return true;
    }

    int randomLevel() {
        int lv = 1;
        while (random.nextDouble() < P_FACTOR && lv < MAX_LEVEL) {
            lv++;
        }
        return lv;
    }

    static class Node {
        int val;
        Node[] forward;

        public Node(int val, int maxLevel) {
            this.val = val;
            forward = new Node[maxLevel];
        }
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = new Skiplist();
 * boolean param_1 = obj.search(target);
 * obj.add(num);
 * boolean param_3 = obj.erase(num);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
