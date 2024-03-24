---
title: 分隔链表
date: 2022-09-26 23:38:23
permalink: /pages/d01481/
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

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

 

示例 1：


    输入：head = [1,4,3,2,5,2], x = 3
    输出：[1,2,2,4,3,5]
示例 2：

    输入：head = [2,1], x = 2
    输出：[1,2]
 

提示：

- 链表中节点的数目在范围 [0, 200] 内
- -100 <= Node.val <= 100
- -200 <= x <= 200


## 思路

虚拟节点

## 解法
```java

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode dummyHead1 = new ListNode(0);
        ListNode dummyHead2 = new ListNode(0);
        ListNode node1 = dummyHead1;
        ListNode node2 = dummyHead2;
        while (head != null) {
            if (head.val < x) {
                node1.next = head;
                head = head.next;
                node1 = node1.next;
                node1.next = null;
            } else {
                node2.next = head;
                head = head.next;
                node2 = node2.next;
                node2.next = null;
            }
        }
        node1.next = dummyHead2.next;
        return dummyHead1.next;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
