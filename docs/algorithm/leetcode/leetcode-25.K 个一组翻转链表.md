---
title: K 个一组翻转链表
date: 2022-09-26 23:27:17
permalink: /pages/f9e524/
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

给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

 

示例 1：


    输入：head = [1,2,3,4,5], k = 2
    输出：[2,1,4,3,5]
示例 2：



    输入：head = [1,2,3,4,5], k = 3
    输出：[3,2,1,4,5]
 

提示：
- 链表中的节点数目为 n
- 1 <= k <= n <= 5000
- 0 <= Node.val <= 1000

进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？



## 思路



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
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0);
        ListNode prev = dummy;
        ListNode curr = head;
        ListNode next;

        dummy.next = head;

        int length = 0;
        while(head!=null){
            length++;
            head = head.next;
        }
        head = dummy.next;

        for(int i=0;i<length/k;i++){
            for(int j=0;j<k-1;j++){
                next = curr.next;
                curr.next = next.next;
                next.next = prev.next;
                prev.next = next;
            }
            prev = curr;
            curr = prev.next;



        }

        return dummy.next;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
