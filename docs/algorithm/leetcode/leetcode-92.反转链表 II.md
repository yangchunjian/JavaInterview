---
title: 反转链表 II
date: 2022-09-26 23:42:56
permalink: /pages/3debe5/
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

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


    输入：head = [1,2,3,4,5], left = 2, right = 4
    输出：[1,4,3,2,5]
示例 2：

    输入：head = [5], left = 1, right = 1
    输出：[5]
 

提示：

- 链表中节点数目为 n
- 1 <= n <= 500
- -500 <= Node.val <= 500
- 1 <= left <= right <= n

进阶： 你可以使用一趟扫描完成反转吗？

## 思路

ListNode dummy = new ListNode(-1);

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
    ListNode temp = null;
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode pre = dummy;

        for(int i=1;i<left;i++){
            pre = pre.next;
        }

        head = pre.next;

        for(int i=left;i<right;i++){
            ListNode next = head.next;
            head.next = next.next;
            next.next = pre.next;
            pre.next = next;

        }

        return dummy.next;
    }


}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
