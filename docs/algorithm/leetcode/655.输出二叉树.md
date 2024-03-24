---
title: 输出二叉树
date: 2022-06-23 09:24:14
permalink: /pages/eebced/
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
titleTag: Java
---


## 题目

在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：

- 行数 m 应当等于给定二叉树的高度。
- 列数 n 应当总是奇数。
- 根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。
- 每个未使用的空间应包含一个空的字符串""。
- 使用相同的规则输出子树。
示例 1:
    
    输入:
         1
        /
       2
    输出:
    [["", "1", ""],
     ["2", "", ""]]
示例 2:

    输入:
         1
        / \
       2   3
        \
         4
    输出:
    [["", "", "", "1", "", "", ""],
     ["", "2", "", "", "", "3", ""],
     ["", "", "4", "", "", "", ""]]
示例 3:
    
    输入:
          1
         / \
        2   5
       / 
      3 
     / 
    4 
    输出:
    [["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
     ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
     ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
     ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
注意: 二叉树的高度在范围 [1, 10] 中。



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
    public List<List<String>> printTree(TreeNode root) {
        int m = depth(root);
        int n = (1 << m) - 1;
        List<List<String>> ans = new ArrayList<>();
        String[][] strs = new String[m][n];
        for (int i = 0; i < m; i++) {
            Arrays.fill(strs[i],"");
        }
        dfs(strs, 0, n, root, 0);
        for (int i = 0; i < m; i++) {
            ans.add(Arrays.asList(strs[i]));
        }
        return ans;
    }
    private void dfs(String[][] strs, int begin, int end, TreeNode root, int level) {
        if (root == null) {
            return;
        }
        int mid = begin + (end - begin) / 2;
        strs[level][mid] = String.valueOf(root.val);
        dfs(strs, begin, mid - 1, root.left, level + 1);
        dfs(strs, mid + 1, end, root.right, level + 1);
    }
    private int depth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return Math.max(depth(root.left), depth(root.right)) + 1;
    }}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
