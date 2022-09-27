---
title: 环形链表 II
date: 2022-09-27 20:41:47
permalink: /pages/12f6c7/
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

给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

 

示例 1：

![](../../../media/pictures/leetcode/circularlinkedlist.png)


    输入：head = [3,2,0,-4], pos = 1
    输出：返回索引为 1 的链表节点
    解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：

![](../../../media/pictures/leetcode/circularlinkedlist_test2.png)


    输入：head = [1,2], pos = 0
    输出：返回索引为 0 的链表节点
    解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：

![](../../../media/pictures/leetcode/circularlinkedlist_test3.png)


    输入：head = [1], pos = -1
    输出：返回 null
    解释：链表中没有环。
 

提示：

- 链表中节点的数目范围在范围 [0, 10<sup>4</sup>] 内
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>
- pos 的值为 -1 或者链表中的一个有效索引


## 思路

// 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口

## 解法
```java

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
   
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {// 有环
                ListNode index1 = fast;
                ListNode index2 = head;
                // 两个指针，从头结点和相遇结点，各走一步，直到相遇，相遇点即为环入口
                while (index1 != index2) {
                    index1 = index1.next;
                    index2 = index2.next;
                }
                return index1;
            }
        }
        return null;
    }

    
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
