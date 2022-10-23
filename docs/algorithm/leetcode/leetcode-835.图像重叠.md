---
title: 图像重叠
date: 2022-10-23 18:55:58
permalink: /pages/d199d7/
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

给你两个图像 img1 和 img2 ，两个图像的大小都是 n x n ，用大小相同的二进制正方形矩阵表示。二进制矩阵仅由若干 0 和若干 1 组成。

转换 其中一个图像，将所有的 1 向左，右，上，或下滑动任何数量的单位；然后把它放在另一个图像的上面。该转换的 重叠 是指两个图像 都 具有 1 的位置的数目。

请注意，转换 不包括 向任何方向旋转。越过矩阵边界的 1 都将被清除。

最大可能的重叠数量是多少？

 

示例 1：


    输入：img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
    输出：3
    解释：将 img1 向右移动 1 个单位，再向下移动 1 个单位。
    
    两个图像都具有 1 的位置的数目是 3（用红色标识）。

示例 2：

    输入：img1 = [[1]], img2 = [[1]]
    输出：1
示例 3：

    输入：img1 = [[0]], img2 = [[0]]
    输出：0
 

提示：

- n == img1.length == img1[i].length
- n == img2.length == img2[i].length
- 1 <= n <= 30
- img1[i][j] 为 0 或 1
- img2[i][j] 为 0 或 1


## 思路

暴力

## 解法
```java

class Solution {
    public int largestOverlap(int[][] A, int[][] B) {
        int ans=0;
        for(int m=1-A.length;m<A.length;m++){
            for(int n=1-A.length;n<A.length;n++){
                ans=Math.max(ans,thisOverlap(A,B,m,n));
            }
        }
        return ans;
    }
    public int thisOverlap(int[][] A,int[][] B,int m,int n){
        //A沿x挪移m单位沿y挪移n单位后的重合个数
        int overLap=0;
        for(int i=Math.max(m,0);i<Math.min(A.length,A.length+m);i++){
            for(int j=Math.max(n,0);j<Math.min(A.length,A.length+n);j++){
                if(A[i][j]==1&&B[i-m][j-n]==1){
                    overLap++;
                }
            }
        }
        return overLap;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
