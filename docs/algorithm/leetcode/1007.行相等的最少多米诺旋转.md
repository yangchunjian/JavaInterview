---
title: 行相等的最少多米诺旋转
date: 2022-11-22 09:43:46
permalink: /pages/b4eb36/
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

在一排多米诺骨牌中，A[i] 和 B[i] 分别代表第 i 个多米诺骨牌的上半部分和下半部分。（一个多米诺是两个从 1 到 6 的数字同列平铺形成的 —— 该平铺的每一半上都有一个数字。）

我们可以旋转第 i 张多米诺，使得 A[i] 和 B[i] 的值交换。

返回能使 A 中所有值或者 B 中所有值都相同的最小旋转次数。

如果无法做到，返回 -1.

 

示例 1：

![](../../../media/pictures/leetcode/domino_1.png)


    输入：A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
    输出：2
    解释：
    图一表示：在我们旋转之前， A 和 B 给出的多米诺牌。
    如果我们旋转第二个和第四个多米诺骨牌，我们可以使上面一行中的每个值都等于 2，如图二所示。
示例 2：

    输入：A = [3,5,1,2,3], B = [3,6,3,3,4]
    输出：-1
    解释：
    在这种情况下，不可能旋转多米诺牌使一行的值相等。
 

提示：

- 1 <= A[i], B[i] <= 6
- 2 <= A.length == B.length <= 20000

## 思路

那个数肯定在两数组的首项中，否则-1

## 解法
```java

class Solution {
    // 那个数肯定在两数组的首项中，否则-1
    public int minDominoRotations(int[] tops, int[] bottoms) {

        int ans=Math.min(minFlip(tops[0],tops,bottoms),minFlip(bottoms[0],tops,bottoms));
        return ans>tops.length?-1:ans;
    }
    int minFlip(int a,int tops[],int bottoms[]){
        int count1=0,count2=0;
        for(int i=0;i<tops.length;i++){
            if(tops[i]!=a&&bottoms[i]!=a){return (int)1e5;}
            if(tops[i]==a){count1++;}
            if(bottoms[i]==a){count2++;}            
        }
        return tops.length-Math.max(count1,count2);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
