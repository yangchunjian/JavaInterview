---
title: 有序链表转换二叉搜索树
date: 2022-09-26 23:45:21
permalink: /pages/83014d/
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

给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。

 

示例 1:

![](../../../media/pictures/leetcode/linked.jpeg)

    输入: head = [-10,-3,0,5,9]
    输出: [0,-3,9,-10,null,5]
    解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
示例 2:

    输入: head = []
    输出: []
 

提示:

- head 中的节点数在[0, 2 * 10<sup>4</sup>] 范围内
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>



## 思路

快慢指针找到链表的中点，中点作为根结点，两边作为左右子树

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
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        // 快慢指针找到链表的中点，中点作为根结点，两边作为左右子树
        if(head == null) return null;
        if(head.next == null) return new TreeNode(head.val);
        // 快慢指针找中间结点
        ListNode fast = head, slow = head, pre = null;
        while(fast != null && fast.next != null){
            fast =  fast.next.next;
            pre = slow;
            slow = slow.next;
        }
        // 分割出左链表，用于构造本结点的左子树
        pre.next = null;
        // 分割出右链表，用于构造本结点的右子树
        ListNode rightList = slow.next;
        // 用中间结点构造根结点
        TreeNode root = new TreeNode(slow.val);
        // 构造左子树
        root.left = sortedListToBST(head);
        // 构造右子树
        root.right = sortedListToBST(rightList);
        // 返回本结点所在子树
        return root;
    }



}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
