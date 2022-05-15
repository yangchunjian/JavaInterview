---
title: 二叉树最大宽度
date: 2022-05-15 21:40:32
permalink: /pages/d84bc2/
categories:
  - algorithm
  - leetcode
tags:
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---


## 题目
给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

示例 1:

    输入: 

               1
             /   \
            3     2
           / \     \  
          5   3     9 
    
    输出: 4
    解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
示例 2:
    
    输入: 
    
              1
             /  
            3    
           / \       
          5   3     
    
    输出: 2
    解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
示例 3:

    输入: 
    
              1
             / \
            3   2 
           /        
          5      
    
    输出: 2
    解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
示例 4:

    输入: 
    
              1
             / \
            3   2
           /     \  
          5       9 
         /         \
        6           7
    输出: 8
    解释: 最大值出现在树的第 4 层，宽度为 8 (6,null,null,null,null,null,null,7)。
注意: 答案在32位有符号整数的表示范围内。


## 思路

假设满二叉树表示成数组序列, 根节点所在的位置为1, 则任意位于i节点的左右子节点的index为2*i, 2*i+1用一个List保存每层的左端点,
 
易知二叉树有多少层List的元素就有多少个. 那么可以在dfs的过程中记录每个节点的index及其所在的层level, 

如果level > List.size()说明当前节点就是新的一层的最左节点, 将其加入List中, 否则判断当前节点的index减去List中对应层的最左节点的index的宽度是否大于最大宽度并更新

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

    private int maxX = 0;
    public int widthOfBinaryTree(TreeNode root) {
/**假设满二叉树表示成数组序列, 根节点所在的位置为1, 则任意位于i节点的左右子节点的index为2*i, 2*i+1用一个List保存每层的左端点, 易知二叉树有多少层List的元素就有多少个. 那么可以在dfs的过程中记录每个节点的index及其所在的层level, 如果level > List.size()说明当前节点就是新的一层的最左节点, 将其加入List中, 否则判断当前节点的index减去List中对应层的最左节点的index的宽度是否大于最大宽度并更新**/
        dfs(root,1,1,new ArrayList<>());
        return maxX;
    }

    private void dfs(TreeNode r,int level,int index,List<Integer> left){
        if(r == null){
            return;
        }

        if(level>left.size()){
            left.add(index);
        }

        maxX = Math.max(maxX,index-left.get(level-1)+1);

        dfs(r.left,level+1,index*2,left);
        dfs(r.right,level+1,index*2+1,left);


    }
}
```