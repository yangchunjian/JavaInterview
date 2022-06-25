---
title: 左叶子之和
categories: 
  - algorithm
tags: 
  - 力扣
  - 左叶子之和
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-04-25 23:55:09
permalink: /pages/4e3946/
tag: 
  text: java
titleTag: Java
---


## 题目
给定二叉树的根节点 root ，返回所有左叶子之和。

示例 1：
![](../../../media/pictures/leetcode/leftsum-tree.jpeg)

      输入: root = [3,9,20,null,null,15,7] 
      输出: 24 

解释: 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24


示例 2:

      输入: root = [1]
      输出: 0

提示：
::: warning
节点数在 [1, 1000] 范围内\
-1000 <= Node.val <= 1000
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
    public int sumOfLeftLeaves(TreeNode root) {
        if(root == null) return 0;
        int res = 0;
        //判断节点是否是左叶子节点，如果是则将它的和累计起来
        if(root.left != null && root.left.left == null && root.left.right == null){
            res += root.left.val;
        }
        return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + res;
 
    }
}



```