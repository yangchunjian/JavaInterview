---
title: 二叉树中的最长交错路径
date: 2022-06-20 00:08:08
permalink: /pages/3f61cd/
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
给你一棵以 root 为根的二叉树，二叉树中的交错路径定义如下：

- 选择二叉树中 任意 节点和一个方向（左或者右）。
- 如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。
- 改变前进方向：左变右或者右变左。
- 重复第二步和第三步，直到你在树中无法继续移动。

交错路径的长度定义为：访问过的节点数目 - 1（单个节点的路径长度为 0 ）。

请你返回给定树中最长 交错路径 的长度。

 

示例 1：

![](../../../media/pictures/leetcode/sample_1_1702.png)

输入：root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
输出：3
解释：蓝色节点为树中最长交错路径（右 -> 左 -> 右）。
示例 2：

![](../../../media/pictures/leetcode/sample_2_1702.png)

    输入：root = [1,1,1,null,1,null,null,1,1,null,1]
    输出：4
    解释：蓝色节点为树中最长交错路径（左 -> 右 -> 左 -> 右）。
示例 3：

    输入：root = [1]
    输出：0
 

提示：

- 每棵树最多有 50000 个节点。
- 每个节点的值在 [1, 100] 之间。


## 思路

dfs遍历

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
       int max = 0;
    public int longestZigZag(TreeNode root) {
        dfs(root,true);
        return max;
    }
    private int dfs(TreeNode root, boolean isLeft){
        if(root==null)  return 0;
        int r =  dfs(root.right,false);
        int l = dfs(root.left,true);
        int big = l>r? l:r;
        if(big>max) max = big;
        if(isLeft){
            return r+1;
        } else {
            return l+1;
        }

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
