---
title: 建立四叉树
date: 2022-07-12 21:56:40
permalink: /pages/e6e3bc/
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

给你一个 n * n 矩阵 grid ，矩阵由若干 0 和 1 组成。请你用四叉树表示该矩阵 grid 。

你需要返回能表示矩阵的 四叉树 的根结点。

注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。

四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：

- val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；
- isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。


    
        class Node {
            public boolean val;
            public boolean isLeaf;
            public Node topLeft;
            public Node topRight;
            public Node bottomLeft;
            public Node bottomRight;
    
        }
    
我们可以按以下步骤为二维区域构建四叉树：


        如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。
        如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。
        使用适当的子网格递归每个子节点。

![](../../../media/pictures/leetcode/new_top.png)

如果你想了解更多关于四叉树的内容，可以参考 wiki 。

四叉树格式：

输出为使用层序遍历后四叉树的序列化形式，其中 null 表示路径终止符，其下面不存在节点。

它与二叉树的序列化非常相似。唯一的区别是节点以列表形式表示 [isLeaf, val] 。

如果 isLeaf 或者 val 的值为 True ，则表示它在列表 [isLeaf, val] 中的值为 1 ；如果 isLeaf 或者 val 的值为 False ，则表示值为 0 。

 

示例 1：

![](../../../media/pictures/leetcode/grid1.png)

    输入：grid = [[0,1],[1,0]]
    输出：[[0,1],[1,0],[1,1],[1,1],[1,0]]
    解释：此示例的解释如下：
    请注意，在下面四叉树的图示中，0 表示 false，1 表示 True 。
    
![](../../../media/pictures/leetcode/e1tree.png)

示例 2：

![](../../../media/pictures/leetcode/e2mat.png)
    
    输入：grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]
    输出：[[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]
    解释：网格中的所有值都不相同。我们将网格划分为四个子网格。
    topLeft，bottomLeft 和 bottomRight 均具有相同的值。
    topRight 具有不同的值，因此我们将其再分为 4 个子网格，这样每个子网格都具有相同的值。
    解释如下图所示：
![](../../../media/pictures/leetcode/e2tree.png)

示例 3：

    输入：grid = [[1,1],[1,1]]
    输出：[[1,1]]
示例 4：

    输入：grid = [[0]]
    输出：[[1,0]]
示例 5：

    输入：grid = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]]
    输出：[[0,1],[1,1],[1,0],[1,0],[1,1]]
 

提示：

- n == grid.length == grid[i].length
- n == 2^x 其中 0 <= x <= 6


## 思路

向深层dfs

## 解法
```java


/*
// Definition for a QuadTree node.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;

    
    public Node() {
        this.val = false;
        this.isLeaf = false;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
    
    public Node(boolean val, boolean isLeaf) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = null;
        this.topRight = null;
        this.bottomLeft = null;
        this.bottomRight = null;
    }
    
    public Node(boolean val, boolean isLeaf, Node topLeft, Node topRight, Node bottomLeft, Node bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
    }
};
*/

class Solution {
    public Node construct(int[][] grid) {
        
    
        int n = grid.length;
        return construct(grid, 0, 0, n);
    }
    //n 指的是当前遍历的正方体的边长
    private Node construct(int[][] grid, int x, int y, int n){
        //base case:如果方格边长为1表示已经递归到最深层，一定是叶子
        if(n == 1) return new Node(grid[x][y] == 1 ? true : false, true);  
        //向深层dfs      
        Node topL = construct(grid, x, y, n / 2);
        Node topR = construct(grid, x, y + n / 2, n / 2);
        Node bottomL = construct(grid, x + n / 2, y, n / 2);
        Node bottomR = construct(grid, x + n / 2, y + n / 2, n / 2);
        //返回值
        if(topL.val == topR.val && bottomL.val == bottomR.val && topR.val == bottomL.val && topL.isLeaf && topR.isLeaf && bottomL.isLeaf && bottomR.isLeaf)return new Node(topL.val, true);
        else return new Node(false, false, topL, topR, bottomL, bottomR);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
