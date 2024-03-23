---
title: 合并两个有序链表
date: 2022-09-22 22:39:01
permalink: /pages/b458b0/
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

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


    输入：l1 = [1,2,4], l2 = [1,3,4]
    输出：[1,1,2,3,4,4]
示例 2：

    输入：l1 = [], l2 = []
    输出：[]
示例 3：

    输入：l1 = [], l2 = [0]
    输出：[0]
 

提示：

- 两个链表的节点数目范围是 [0, 50]
- -100 <= Node.val <= 100
- l1 和 l2 均按 非递减顺序 排列



## 思路

        ListNode p = new ListNode(-1);

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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode p = new ListNode(-1);
        ListNode pre = p;
        while(list1!=null && list2!=null){
            if(list1.val<=list2.val){
                pre.next = list1;
                list1 = list1.next;
            }else{
                pre.next = list2;
                list2 = list2.next;
            }
            pre = pre.next;

        }
        if(list1!=null){
            pre.next = list1;
        }
        if(list2!=null){
            pre.next = list2;
        }


        return p.next;


    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
