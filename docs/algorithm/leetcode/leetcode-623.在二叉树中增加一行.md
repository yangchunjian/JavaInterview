---
title: 在二叉树中增加一行
date: 2022-05-11 00:11:02
permalink: /pages/a05d38/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 题目
给定一个二叉树的根 root 和两个整数 val 和 depth ，在给定的深度 depth 处添加一个值为 val 的节点行。

注意，根节点 root 位于深度 1 。

加法规则如下:

给定整数 depth，对于深度为 depth - 1 的每个非空树节点 cur ，创建两个值为 val 的树节点作为 cur 的左子树根和右子树根。
cur 原来的左子树应该是新的左子树根的左子树。
cur 原来的右子树应该是新的右子树根的右子树。
如果 depth == 1 意味着 depth - 1 根本没有深度，那么创建一个树节点，值 val 作为整个原始树的新根，而原始树就是新根的左子树。
 

示例 1:

![](../../../media/pictures/leetcode/addrow-tree.jpeg)


    输入: root = [4,2,6,3,1,5], val = 1, depth = 2
    输出: [4,1,1,2,null,null,6,3,1,5]
示例 2:

![](../../../media/pictures/leetcode/add2-tree.jpeg)
    
    输入: root = [4,2,null,3,1], val = 1, depth = 3
    输出:  [4,2,null,1,1,3,null,null,1]
 

提示:

- 节点数在 [1, 10<sup>4</sup>] 范围内
- 树的深度在 [1, 10<sup>4</sup>]范围内
- -100 <= Node.val <= 100
- -10<sup>5</sup> <= val <= 10<sup>5</sup>
- 1 <= depth <= the depth of tree + 1


## 思路

根据题意创建节点，并根据层数追加

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
    public TreeNode addOneRow(TreeNode root, int v, int d) {
 
        if (root == null)
            return null;
            
        if (d == 1) {

            TreeNode newRoot = new TreeNode(v);
            newRoot.left = root;
            return newRoot;
        } 

        if (d == 2) {

            TreeNode l = new TreeNode(v), r = new TreeNode(v);
            l.left = root.left;
            r.right = root.right;
            root.left = l;
            root.right = r;

            return root;
        }

        root.left = addOneRow(root.left, v, d - 1);
        root.right = addOneRow(root.right, v, d - 1);

        return root;
    }
}
```