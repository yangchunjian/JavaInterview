---
title: 翻转等价二叉树
categories: 
  - algorithm
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-05 23:18:14
permalink: /pages/cfd1a1/
---


## 题目
我们可以为二叉树 T 定义一个 翻转操作 ，如下所示：选择任意节点，然后交换它的左子树和右子树。

只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X 翻转 等价 于二叉树 Y。

这些树由根节点 root1 和 root2 给出。如果两个二叉树是否是翻转 等价 的函数，则返回 true ，否则返回 false 。

 

示例 1：
![](../../../media/pictures/leetcode/tree_ex.png)


    输入：root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
    输出：true
    解释：我们翻转值为 1，3 以及 5 的三个节点。
示例 2:

    输入: root1 = [], root2 = []
    输出: true
示例 3:

    输入: root1 = [], root2 = [1]
    输出: false
 

提示：
::: warning
每棵树节点数在 [0, 100] 范围内\
每棵树中的每个值都是唯一的、在 [0, 99] 范围内的整数
:::




## 思路

递归

## 解法
```java
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
    public boolean flipEquiv(TreeNode root1, TreeNode root2) {
        TreeNode head1 = root1;
        TreeNode head2 = root2;
        if(head1 ==null){
            return head2==null;
        }
        if(head2==null){
            return head1==null;
        }

        if(head1.val!=head2.val){
            return false;
        }
      
        return flipEquiv(head1.left,head2.left) && flipEquiv(head1.right,head2.right) || flipEquiv(head1.left,head2.right) && flipEquiv(head1.right,head2.left);

    }

}


```