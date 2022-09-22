---
title: 两两交换链表中的节点
date: 2022-09-22 23:51:24
permalink: /pages/5fd235/
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

给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

 

示例 1：


    输入：head = [1,2,3,4]
    输出：[2,1,4,3]
示例 2：

    输入：head = []
    输出：[]
示例 3：

    输入：head = [1]
    输出：[1]
 

提示：

- 链表中节点的数目在范围 [0, 100] 内
- 0 <= Node.val <= 100


## 思路

获得next节点

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
    public ListNode swapPairs(ListNode head) {
        if(head == null || head.next == null){
            return head;
        }

        ListNode next = head.next;
        head.next = swapPairs(next.next);
        next.next = head;
        return next;

    }


}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
