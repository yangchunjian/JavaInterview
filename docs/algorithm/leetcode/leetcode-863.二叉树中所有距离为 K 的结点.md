---
title: 二（N2）叉树中所有距离为 K 的结点
categories: 
  - algorithm
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: http://JavaInterview.cn
date: 2022-04-28 23:16:50
permalink: /pages/e64aa9/
---


## 题目
给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 k 。

返回到目标结点 target 距离为 k 的所有结点的值的列表。 答案可以以 任何顺序 返回。

 

示例 1：
![](../../../media/pictures/leetcode/sketch0.png)

    输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
    输出：[7,4,1]
    解释：所求结点为与目标结点（值为 5）距离为 2 的结点，值分别为 7，4，以及 1
示例 2:

    输入: root = [1], target = 1, k = 3
    输出: []
 

提示:
::: warning
节点数在 [1, 500] 范围内\
0 <= Node.val <= 500\
Node.val 中所有值 不同\
目标结点 target 是树上的结点。\
0 <= k <= 1000
:::


## 思路

    map记录每个节点的父节点
    set记录访问过的节点
    TreeNode记录目标节点


## 解法
```java

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    // 用map记录每个节点的父节点
    private Map<TreeNode,TreeNode> parents = new HashMap<>();
    private Set<TreeNode> used = new HashSet<>();
    private TreeNode targetNode;

    // 找到目标节点后以目标节点为开始位置向三个方向蔓延
    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        find(root,null,target);
        List<Integer> ret = new LinkedList<>();
        dfs(targetNode,ret,k);
        return ret;
    }




    public void find(TreeNode root,TreeNode parent,TreeNode target){
        if(null == root){
            return;
        }
        if(root.val == target.val){
            targetNode = root;
        }

        parents.put(root,parent);
        find(root.left,root,target);
        find(root.right,root,target);
    }

    private void dfs(TreeNode root,List<Integer> collector,int distance){
        if(root!=null && !used.contains(root)){
            // 标记为已访问
            used.add(root);
            if(distance<=0){
                collector.add(root.val);
                return;
            }
            dfs(root.left,collector,distance-1);
            dfs(root.right,collector,distance-1);
            dfs(parents.get(root),collector,distance-1);
        }

    }


}
```