---
title: 旋转链表
date: 2022-09-26 23:29:18
permalink: /pages/bc66e0/
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

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：


    输入：head = [1,2,3,4,5], k = 2
    输出：[4,5,1,2,3]
示例 2：


    输入：head = [0,1,2], k = 4
    输出：[2,0,1]
 

提示：

- 链表中节点的数目在范围 [0, 500] 内
- -100 <= Node.val <= 100
- 0 <= k <= 2 * 10<sup>9</sup>


## 思路

不满足上述条件，必将进行旋转，所以先将收尾相连

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
    public ListNode rotateRight(ListNode head, int k) {
        if(head==null || head.next==null || k==0){
            return head;
        }
        // 计算出总节点数
        int length = 1;
        ListNode slow = head;
        while(slow.next!=null){
            slow = slow.next;
            length++;
        }
        k %= length;
        // 当k为0时，不需要旋转
        if(k==0){
            return head;
        }
        // 不满足上述条件，必将进行旋转，所以先将收尾相连
        slow.next = head;
        // 现在只需要找到倒数第k+1个节点
        for(int i=0;i<length - k;i++){
            slow = slow.next;
        }

    
        ListNode newHead = slow.next ;
        slow.next = null;
        return newHead;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
