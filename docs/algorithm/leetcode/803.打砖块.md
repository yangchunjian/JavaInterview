---
title: 打砖块
date: 2022-10-18 17:55:12
permalink: /pages/d19161/
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

有一个 m x n 的二元网格 grid ，其中 1 表示砖块，0 表示空白。砖块 稳定（不会掉落）的前提是：

- 一块砖直接连接到网格的顶部，或者
- 至少有一块相邻（4 个方向之一）砖块 稳定 不会掉落时

给你一个数组 hits ，这是需要依次消除砖块的位置。每当消除 hits[i] = (rowi, coli) 位置上的砖块时，对应位置的砖块（若存在）会消失，然后其他的砖块可能因为这一消除操作而 掉落 。一旦砖块掉落，它会 立即 从网格 grid 中消失（即，它不会落在其他稳定的砖块上）。

返回一个数组 result ，其中 result[i] 表示第 i 次消除操作对应掉落的砖块数目。

注意，消除可能指向是没有砖块的空白位置，如果发生这种情况，则没有砖块掉落。

 

示例 1：

    输入：grid = [[1,0,0,0],[1,1,1,0]], hits = [[1,0]]
    输出：[2]
    解释：网格开始为：
    [[1,0,0,0]，
     [1,1,1,0]]
    消除 (1,0) 处加粗的砖块，得到网格：
    [[1,0,0,0]
     [0,1,1,0]]
    两个加粗的砖不再稳定，因为它们不再与顶部相连，也不再与另一个稳定的砖相邻，因此它们将掉落。得到网格：
    [[1,0,0,0],
     [0,0,0,0]]
    因此，结果为 [2] 。
示例 2：

    输入：grid = [[1,0,0,0],[1,1,0,0]], hits = [[1,1],[1,0]]
    输出：[0,0]
    解释：网格开始为：
    [[1,0,0,0],
     [1,1,0,0]]
    消除 (1,1) 处加粗的砖块，得到网格：
    [[1,0,0,0],
     [1,0,0,0]]
    剩下的砖都很稳定，所以不会掉落。网格保持不变：
    [[1,0,0,0], 
     [1,0,0,0]]
    接下来消除 (1,0) 处加粗的砖块，得到网格：
    [[1,0,0,0],
     [0,0,0,0]]
    剩下的砖块仍然是稳定的，所以不会有砖块掉落。
    因此，结果为 [0,0] 。
 

提示：

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 200
- grid[i][j] 为 0 或 1
- 1 <= hits.length <= 4 * 10<sup>4</sup>
- hits[i].length == 2
- 0 <= xi <= m - 1
- 0 <= yi <= n - 1
- 所有 (xi, yi) 互不相同

## 思路

// 逆向使用并查集

## 解法
```java

class Solution {
    // 逆向使用并查集
    private final int[][] DIRECTIONS = {{-1,0},{0,-1},{0,1},{1,0}};  // 上下左右四个方向增量

    public int[] hitBricks(int[][] grid, int[][] hits) {
        int rows = grid.length;
        int cols = grid[0].length;
        // 1、敲掉砖块
        for (int[] hit : hits) {
            // 有砖块则敲掉（1 --> 0） 没有砖块标记为-1 (0 --> -1)
            grid[hit[0]][hit[1]] -= 1;
        }

        /* 2、合并剩下的砖块连通量
           创建并查集 大小为grid中点的数量+1 （预留一个特殊的结点作为根结点表示屋顶）
           这里要采用按点合并的方式，把二维表中的每一个点都映射到1维
        */
        int size = rows * cols;
        UnionFind unionFind = new UnionFind(size + 1);
        // 先处理第一层（即合并屋顶层）
        for (int i = 0; i < cols; i++) {
            // 这里用最后一个点 即parent[size] 位置表示屋顶，将第一层和屋顶连接起来
            if (grid[0][i] == 1) {
                unionFind.union(getIndex(0, i, cols), size);
            }
        }
        // i从1开始，处理第二层及以后
        for (int i = 1; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                // 每一个点都会遍历到，所以连接(左、上)和连接(右、下)等价，
                if (grid[i][j] == 1){
                    int currIndex = getIndex(i,j,cols);
                    if (grid[i - 1][j] == 1){
                        unionFind.union(getIndex(i-1,j,cols),currIndex);
                    }
                    if (j > 0 && grid[i][j - 1] == 1){
                        unionFind.union(getIndex(i,j-1,cols),currIndex);
                    }
                }
            }
        }

        /*
            3、将砖块填回格子中，计算连通量的变化
            敲掉时从前往后敲，所以补的时候从后往前补
         */
        int[] res = new int[hits.length];
        for (int i = hits.length - 1; i >= 0; i--) {
            int x = hits[i][0];
            int y = hits[i][1];
            // 被标记为-1说明这个位置敲掉时就没有砖块，直接跳过
            if (grid[x][y] == -1){
                continue;
            }
            // 记录补回砖块之前连接到屋顶的砖块数量
            int oldSize = unionFind.getSize(size);
            // 第一层特殊处理,直接和屋顶合并
            int currIndex = getIndex(x,y,cols);
            if (x == 0){
                unionFind.union(currIndex,size);
            }
            // 遍历四个方向并合并
            for (int[] direction : DIRECTIONS) {
                int newX = x + direction[0];
                int newY = y + direction[1];
                // 没有越界，且该方向上有砖块
                if (newX > -1 && newX <rows && newY > -1 && newY < cols && grid[newX][newY] == 1){
                    unionFind.union(currIndex,getIndex(newX,newY,cols));
                }
            }
            // 合并四个方向连接到屋顶后的砖块数量
            int newSize = unionFind.getSize(size);
            // 新结点数 - 旧结点数 - 1即为掉落的砖块数量
            res[i] = Math.max(0,newSize - oldSize - 1);
            // 真正将砖块添加回去
            grid[x][y] = 1;
        }
        return res;
    }
    // 二维表的一维映射
    // 对于(x,y)点，一维的映射即为 x * cols + y
    private int getIndex(int x ,int y ,int cols){
        return x * cols + y;
    }

    // 并查集
    private class UnionFind{
        private int[] parent;
        private int[] size;

        public UnionFind(int n) {
            this.parent = new int[n];
            this.size = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        // 路径压缩时只改变了子结点的指向，并没有修改根结点下的子节点数量，所以不修改size
        private int find(int x){
            if (x != parent[x]){
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }

        // 合并时相当于将其中一个根结点全部作为另一个根的子节点加入，将最终的根结点位置size更新
        private void union(int x, int y){
            int rootX = find(x);
            int rootY = find(y);
            if (rootX == rootY){
                return;
            }
            // x作为y的子节点，y的子节点数量更新
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        }

        // 向外返回子节点数量
        public int getSize(int x){
            // 先找到该结点位置所在连通分量的代表元,再返回数量
            int rootX = find(x);
            return size[rootX];
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
