---
title: 二叉树的完全性检验
date: 2022-05-14 22:02:35
permalink: /pages/d28c4f/
categories: 
  - algorithm
  - leetcode
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---


## 题目
给定一个二叉树的 root ，确定它是否是一个 完全二叉树 。

在一个 完全二叉树 中，除了最后一个关卡外，所有关卡都是完全被填满的，并且最后一个关卡中的所有节点都是尽可能靠左的。它可以包含 1 到 2h 节点之间的最后一级 h 。

 

示例 1：

![](../../../media/pictures/leetcode/complete-binary-tree-1.png)


    输入：root = [1,2,3,4,5,6]
    输出：true
    解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
示例 2：

![](../../../media/pictures/leetcode/complete-binary-tree-2.png)

    输入：root = [1,2,3,4,5,null,7]
    输出：false
    解释：值为 7 的结点没有尽可能靠向左侧。
 

提示：

- 树的结点数在范围  [1, 100] 内。
- 1 <= Node.val <= 1000



## 思路

层序遍历，设置一个停止标志，遇到空节点，停止标志为真，如果停止标志为真，再遍历遇到非空节点，则非完全二叉树。
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

    public boolean isCompleteTree(TreeNode root) {
        if (root == null) return true;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        TreeNode temp;
        boolean flag = false;
        while (!queue.isEmpty()) {
            temp = queue.remove();
            if (temp == null){
                flag = true;
                continue;
            }
            if (flag) return false;
            queue.add(temp.left);
            queue.add(temp.right);
        }
        return true;
    }
}
```