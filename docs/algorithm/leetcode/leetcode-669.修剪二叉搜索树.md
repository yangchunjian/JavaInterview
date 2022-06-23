---
title: 修剪二叉搜索树
date: 2022-06-23 09:29:34
permalink: /pages/f785c9/
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

给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。

所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

 

示例 1：


输入：root = [1,0,2], low = 1, high = 2
输出：[1,null,2]
示例 2：


输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
输出：[3,2,null,1]
 

提示：

- 树中节点数在范围 [1, 10<sup>4</sup>] 内
- 0 <= Node.val <= 10<sup>4</sup>
- 树中每个节点的值都是 唯一 的
- 题目数据保证输入是一棵有效的二叉搜索树
- 0 <= low <= high <= 10<sup>4</sup>



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
    public TreeNode trimBST(TreeNode root, int L, int R) {

        if (root == null)
            return root;

        //下面两个if相当于删除不满足要求的节点
        if (root.val < L)
            return trimBST(root.right, L, R);//返回修剪过的右子树。抱有一丝丝期望，希望右子树能够满足要求，因为右子树的值大于当前根节点的值
        if (root.val > R)
            return trimBST(root.left, L, R);//返回修剪过的左子树，抱有一丝丝期望，希望左子树能够满足要求，因为左子树的值小于当前根节点的值

        //处理正常的节点
        root.left = trimBST(root.left, L, R);
        root.right = trimBST(root.right, L, R);
        return root;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
