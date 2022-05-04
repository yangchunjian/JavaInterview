---
title: 序列化和反序列化二叉搜索树
categories: 
  - algorithm
tags: 
  - Java
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
date: 2022-05-04 23:01:42
permalink: /pages/53d90d/
---


## 题目
序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化 **二叉搜索树** 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

**编码的字符串应尽可能紧凑**。

 

示例 1：

    输入：root = [2,1,3]
    输出：[2,1,3]
    
示例 2：

    输入：root = []
    输出：[]
     

提示：
::: warning
树中节点数范围是 [0, 10<sup>4</sup>]\
0 <= Node.val <= 10<sup>4</sup>\
题目数据 保证 输入的树是一棵二叉搜索树。
:::



## 思路

中序遍历

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
public class Codec {

    private int i;
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        doSerialize(root,sb);
        return sb.toString();
    }


    private void doSerialize(TreeNode root,StringBuilder sb){
        if(root!=null){
            sb.append(root.val+"_");
            doSerialize(root.left,sb);
            doSerialize(root.right,sb);
        }else{
            sb.append("#_");
        }
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] s = data.split("_");
        if(s==null || s.length==0){
            return null;
        }
        i = 0;
        return doDeserialize(s);
    }

    private TreeNode doDeserialize(String[] s){
        if(s[i].equals("#")){
            i++;
            return null;
        }
        TreeNode root = new TreeNode(Integer.parseInt(s[i++]));
        root.left = doDeserialize(s);
        root.right = doDeserialize(s);
        return root;

    }


}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// String tree = ser.serialize(root);
// TreeNode ans = deser.deserialize(tree);
// return ans;

```