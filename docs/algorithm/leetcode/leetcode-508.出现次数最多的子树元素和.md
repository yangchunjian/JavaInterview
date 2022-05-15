---
title: 出现次数最多的子树元素和
date: 2022-05-15 19:23:32
permalink: /pages/8e9477/
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
给你一个二叉树的根结点 root ，请返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

一个结点的 「子树元素和」 定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

 

示例 1：



    输入: root = [5,2,-3]
    输出: [2,-3,4]
示例 2：



    输入: root = [5,2,-5]
    输出: [2]
 

提示:

- 节点数在 [1, 10<sup>4</sup>] 范围内
- -105 <= Node.val <= 10<sup>5</sup>


## 思路

    该题的意思是求出二叉树所有子树（包括包含根节点的树）的元素和，然后求出出现元素和次数最多的那些。
    因为需要求子树，所以肯定是递归最为方便。
    定义一个map，在遍历时记录子树的元素和，同时求出出现的最大次数，然后对应map求出Key.


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
    private int max = 0;
    public int[] findFrequentTreeSum(TreeNode root) {
        if(root == null){
            return new int[0];
        }
        Map<Integer,Integer> map = new HashMap<>();
        helper(root,map);
        //然后求出map中value最大值对应的Key
        List<Integer> res = new LinkedList<>();
        for(Integer i : map.keySet()){
            if(map.get(i) == max){
                res.add(i);
            }

        }
        int[] resArr = new int[res.size()];
        for(int i=0;i<res.size();i++){
            resArr[i] = res.get(i);
        }

        return resArr;

    }

    private int helper(TreeNode root,Map<Integer,Integer> map){
        if(root==null){
            return 0;
        }
        //求出当前节点为根的元素和
        int left = helper(root.left,map);
        int right = helper(root.right,map);

        int val = left+right+root.val;
        map.put(val,map.getOrDefault(val,0)+1);
        max = Math.max(max,map.get(val));
        return val;


    }

}
```