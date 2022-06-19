---
title: 两棵二叉搜索树中的所有元素
date: 2022-06-19 23:59:37
permalink: /pages/8bf789/
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

给你 root1 和 root2 这两棵二叉搜索树。请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

 

示例 1：

![](../../../media/pictures/leetcode/q2-e1.png)

    输入：root1 = [2,1,4], root2 = [1,0,3]
    输出：[0,1,1,2,3,4]
示例 2：

![](../../../media/pictures/leetcode/q2-e5-.png)

    输入：root1 = [1,null,8], root2 = [8,1]
    输出：[1,1,8,8]
 

提示：

- 每棵树的节点数在 [0, 5000] 范围内
- -10<sup>5</sup> <= Node.val <= 10<sup>5</sup>



## 思路

Collections.sort(ans);

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
    List<Integer> ans=new ArrayList<>();
    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        addNum(root1);
        addNum(root2);
        Collections.sort(ans);
        return ans;
    }
    public void addNum(TreeNode t){
        if(t==null){return;}
        ans.add(t.val);
        addNum(t.left);
        addNum(t.right);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
