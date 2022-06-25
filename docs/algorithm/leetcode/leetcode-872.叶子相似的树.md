---
title: 叶子相似的树
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-08 21:50:59
permalink: /pages/75fa9c/
categories: 
  - algorithm
  - leetcode
tag: 
  text: java
---


## 题目
请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

![](../../../media/pictures/leetcode/tree.png)


举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

 

示例 1：

![](../../../media/pictures/leetcode/leaf-similar-1.jpeg)


    输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
    输出：true
示例 2：
![](../../../media/pictures/leetcode/leaf-similar-2.jpeg)


    输入：root1 = [1,2,3], root2 = [1,3,2]
    输出：false
 

提示：
::: warning 
给定的两棵树结点数在 [1, 200] 范围内\
给定的两棵树上的值在 [0, 200] 范围内 
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
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
       String str1 = myfun(root1, "");
       String str2 = myfun(root2, "");
       return str1.equals(str2);
    }

    public String myfun(TreeNode root, String str) {
        if (root == null) {
            return str;
        }
        if (root.right == null && root.left == null) {
            str = str + root.val+",";
            return str;
        }
        return myfun(root.left, str) + myfun(root.right, str)+str;
    }

}

```