---
title: 得分最高的最小轮调
date: 2022-10-16 20:16:20
permalink: /pages/8c426a/
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

给你一个数组 nums，我们可以将它按一个非负整数 k 进行轮调，这样可以使数组变为 [nums[k], nums[k + 1], ... nums[nums.length - 1], nums[0], nums[1], ..., nums[k-1]] 的形式。此后，任何值小于或等于其索引的项都可以记作一分。

- 例如，数组为 nums = [2,4,1,3,0]，我们按 k = 2 进行轮调后，它将变成 [1,3,0,2,4]。这将记为 3 分，因为 1 > 0 [不计分]、3 > 1 [不计分]、0 <= 2 [计 1 分]、2 <= 3 [计 1 分]，4 <= 4 [计 1 分]。

在所有可能的轮调中，返回我们所能得到的最高分数对应的轮调下标 k 。如果有多个答案，返回满足条件的最小的下标 k 。

 

示例 1：

    输入：nums = [2,3,1,4,0]
    输出：3
    解释：
    下面列出了每个 k 的得分：
    k = 0,  nums = [2,3,1,4,0],    score 2
    k = 1,  nums = [3,1,4,0,2],    score 3
    k = 2,  nums = [1,4,0,2,3],    score 3
    k = 3,  nums = [4,0,2,3,1],    score 4
    k = 4,  nums = [0,2,3,1,4],    score 3
    所以我们应当选择 k = 3，得分最高。
示例 2：

    输入：nums = [1,3,0,2,4]
    输出：0
    解释：
    nums 无论怎么变化总是有 3 分。
    所以我们将选择最小的 k，即 0。
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- 0 <= nums[i] < nums.length


## 思路

差分数组法

## 解法
```java

class Solution {

    int d[];

    public int bestRotation(int[] nums) {

        //也就是nums[i]<=i的数量，差分数组
        d=new int[nums.length*2];
        int ans=0;
        int max=d[0];
        for(int i=0;i<nums.length;i++){findBounds(nums,i);}
        for(int i=1;i<nums.length;i++){
            d[i]+=d[i-1];
            if(d[i]>max){ans=i;}
            max=Math.max(max,d[i]);
        }
        return ans;
    }
    public void findBounds(int nums[],int k){
        //寻找角标为k的数字的加1边界以及减1边界，寻找nums[i]<=i
        //本来就得分的位置，需要向右找加1减1点
        if(nums[k]<=k){d[k-nums[k]+1]--;}
        //nums[k]>k，否则加1点在左边，减1点就是跳到最右边的时候
        else{d[nums.length-nums[k]+k+1]--;}
        d[k+1]++;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
