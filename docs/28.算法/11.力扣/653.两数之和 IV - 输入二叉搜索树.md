---
title: 两数之和 IV - 输入二叉搜索树
date: 2022-09-18 22:29:33
permalink: /pages/90b285/
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

给定一个二叉搜索树 root 和一个目标结果 k，

如果二叉搜索树中存在两个元素且它们的和等于给定的目标结果，则返回 true。

 

示例 1：


    输入: root = [5,3,6,2,4,null,7], k = 9
    输出: true
示例 2：


    输入: root = [5,3,6,2,4,null,7], k = 28
    输出: false
 

提示:

- 二叉树的节点个数的范围是  [1, 104].
- -104 <= Node.val <= 104
- 题目数据保证，输入的 root 是一棵 有效 的二叉搜索树
- -105 <= k <= 105


## 思路

遍历二叉树+HashSet

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
    // 遍历二叉树+HashSet


    public boolean findTarget(TreeNode root, int k) {
        HashSet<Integer> hashset = new HashSet<Integer>();
        return preOrder(root,hashset,k);     
    }
    public boolean preOrder(TreeNode root,HashSet<Integer> hashset,int k){
        if(root == null)
            return false;
        if(hashset.contains(k - root.val)){
            return true;
        }
        hashset.add(root.val);        
        return preOrder(root.left,hashset,k) || preOrder(root.right,hashset,k);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
