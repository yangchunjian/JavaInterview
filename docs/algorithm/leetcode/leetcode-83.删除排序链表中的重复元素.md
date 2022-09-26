---
title: 删除排序链表中的重复元素
date: 2022-09-26 23:36:57
permalink: /pages/c77f20/
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

给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

 

示例 1：

![](../../../media/pictures/leetcode/list1.jpeg)

    输入：head = [1,1,2]
    输出：[1,2]
示例 2：

![](../../../media/pictures/leetcode/list2.jpeg)

    输入：head = [1,1,2,3,3]
    输出：[1,2,3]
 

提示：

- 链表中节点数目在范围 [0, 300] 内
- -100 <= Node.val <= 100
- 题目数据保证链表已经按升序 排列

## 思路

快慢指针

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
    public ListNode deleteDuplicates(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        while(fast!=null){
            if(fast.val != slow.val ){
                slow.next = fast;
                slow = slow.next;
            }else{
                fast = fast.next; 
            }
            
        }
        if(slow!=null){
            slow.next = null;
        }
        return head;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
