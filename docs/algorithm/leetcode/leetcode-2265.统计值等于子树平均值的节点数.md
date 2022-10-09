---
title: 统计值等于子树平均值的节点数
date: 2022-10-09 23:12:39
permalink: /pages/337cca/
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

给你一棵二叉树的根节点 root ，找出并返回满足要求的节点数，要求节点的值等于其 子树 中值的 平均值 。

注意：

- n 个元素的平均值可以由 n 个元素 求和 然后再除以 n ，并 向下舍入 到最近的整数。
- root 的 子树 由 root 和它的所有后代组成。

示例 1：

![](../../../media/pictures/leetcode/image-20220315203925-1.png)

    输入：root = [4,8,5,0,1,null,6]
    输出：5
    解释：
    对值为 4 的节点：子树的平均值 (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4 。
    对值为 5 的节点：子树的平均值 (5 + 6) / 2 = 11 / 2 = 5 。
    对值为 0 的节点：子树的平均值 0 / 1 = 0 。
    对值为 1 的节点：子树的平均值 1 / 1 = 1 。
    对值为 6 的节点：子树的平均值 6 / 1 = 6 。
示例 2：

![](../../../media/pictures/leetcode/image-20220326133920-1.png)

    输入：root = [1]
    输出：1
    解释：对值为 1 的节点：子树的平均值 1 / 1 = 1。
 

提示：

- 树中节点数目在范围 [1, 1000] 内
- 0 <= Node.val <= 1000


## 思路

dfs

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
    int res=0;
    int count=0;
    public int averageOfSubtree(TreeNode root) {
        dfs(root);
        return res;
    }
    public int dfs(TreeNode root){
        if (root==null) return 0;
        int currcount = count;
        count++;
        int val = dfs(root.left) + dfs(root.right)+root.val;
        if (root.val == (val)/(count-currcount)) {
            res++;
        }
        return val;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
