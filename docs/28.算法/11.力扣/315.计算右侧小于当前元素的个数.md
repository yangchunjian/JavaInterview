---
title: 计算右侧小于当前元素的个数
date: 2022-07-17 21:31:45
permalink: /pages/2530fb/
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

给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

 

示例 1：

    输入：nums = [5,2,6,1]
    输出：[2,1,1,0] 
    解释：
    5 的右侧有 2 个更小的元素 (2 和 1)
    2 的右侧仅有 1 个更小的元素 (1)
    6 的右侧有 1 个更小的元素 (1)
    1 的右侧有 0 个更小的元素
示例 2：

    输入：nums = [-1]
    输出：[0]
示例 3：

    输入：nums = [-1,-1]
    输出：[0,0]
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>4</sup> <= nums[i] <= 10<sup>4</sup>



## 思路

二分

## 解法
```java

class Solution {
    public List<Integer> countSmaller(int[] nums) {

    
        List<Integer>list=new ArrayList<>();
        List<Integer>res=new ArrayList<>();
        for(int i=nums.length-1;i>=0;i--){
            int index=search(list,nums[i]);
            res.add(index);
            list.add(index,nums[i]);
        }
        Collections.reverse(res);
        return res;
    }
    private int search(List<Integer>list,int target){
          int l=0,r=list.size();
         while(l<r){
              int mid=l+(r-l)/2;
              if(list.get(mid)>=target) r=mid;
             else l=mid+1;
         }
        return l;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
