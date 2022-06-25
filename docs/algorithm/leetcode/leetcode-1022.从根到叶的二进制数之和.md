---
title: 从根到叶的二进制数之和
date: 2022-06-22 23:30:24
permalink: /pages/a2fe2e/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---

## 题目

给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

返回这些数字之和。题目数据保证答案是一个 32 位 整数。

 

示例 1：

![](../../../media/pictures/leetcode/sum-of-root-to-leaf-binary-numbers.png)

    输入：root = [1,0,1,0,1,0,1]
    输出：22
    解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
示例 2：

    输入：root = [0]
    输出：0
 

提示：

- 树中的节点数在 [1, 1000] 范围内
- Node.val 仅为 0 或 1 



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
    public int sumRootToLeaf(TreeNode root) {

            // 一个递归dfs算了
        return dfs(root, 0);
    }

    private int dfs(TreeNode cur, int value) {
        return (cur.left == null && cur.right == null) ? (value + cur.val) : cur.left != null && cur.right != null ? dfs(cur.left, (value + cur.val) << 1) + dfs(cur.right, (value + cur.val) << 1) : (cur.left == null ? dfs(cur.right, (value + cur.val) << 1) : dfs(cur.left, (value + cur.val) << 1));
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
