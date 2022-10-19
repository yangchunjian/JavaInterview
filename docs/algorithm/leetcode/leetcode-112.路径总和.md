---
title: 路径总和
date: 2022-10-19 21:49:56
permalink: /pages/6ef57e/
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

给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点。

 

示例 1：


输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
示例 2：


输入：root = [1,2,3], targetSum = 5
输出：false
解释：树中存在两条根节点到叶子节点的路径：
(1 --> 2): 和为 3
(1 --> 3): 和为 4
不存在 sum = 5 的根节点到叶子节点的路径。
示例 3：

输入：root = [], targetSum = 0
输出：false
解释：由于树是空的，所以不存在根节点到叶子节点的路径。
 

提示：

- 树中节点的数目在范围 [0, 5000] 内
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000


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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(null==root){
            return false;
        }
        int result = targetSum - root.val;
        if(result==0 && null==root.left && null==root.right){
            return true;
        }else{
            return hasPathSum(root.left,result) || hasPathSum(root.right,result);
        }





        // if(root==null && targetSum==0){
        //     return false;
        // }
        // if(root==null){
        //     return false;
        // }

        // Queue<TreeNode> s = new LinkedList<>();
        // s.add(root);
        // while(!s.isEmpty()){
        //     int size = s.size();
        //     for(int i=0;i<size;i++){
        //         TreeNode node = s.poll();
            
        //         if(node.left==null && node.right==null){
        //             if(targetSum == node.val){
        //                 return true;
        //             }
                   
        //         }
                
        //         if(node.left!=null){
        //             node.left.val += node.val;
        //             s.add(node.left);
                    
        //         }
        //         if(node.right!=null){
        //             node.right.val += node.val;
        //             s.add(node.right);
        //             // sum += node.right.val;
        //         }
        //     }



        // }

        // return false;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
