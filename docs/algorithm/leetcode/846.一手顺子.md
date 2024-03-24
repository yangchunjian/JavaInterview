---
title: 一手顺子
date: 2022-10-23 22:12:33
permalink: /pages/56a5bd/
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

Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 groupSize ，并且由 groupSize 张连续的牌组成。

给你一个整数数组 hand 其中 hand[i] 是写在第 i 张牌，和一个整数 groupSize 。如果她可能重新排列这些牌，返回 true ；否则，返回 false 。

 

示例 1：

    输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
    输出：true
    解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
示例 2：

    输入：hand = [1,2,3,4,5], groupSize = 4
    输出：false
    解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
 

提示：

- 1 <= hand.length <= 10<sup>4</sup>
- 0 <= hand[i] <= 10<sup>9</sup>
- 1 <= groupSize <= hand.length

## 思路

Arrays.sort

## 解法
```java
class Solution {
    public boolean isNStraightHand(int[] hand, int W) {
        //若不是整数倍，则返回false
        if(hand.length % W != 0)
            return false;
        Arrays.sort(hand);
        List<Integer> list = new ArrayList<>();
        for(int ele : hand){
            list.add(ele);
        }
        while(!list.isEmpty()){
            int min = list.get(0);//获取最小的元素
            list.remove(new Integer(min));//获取后移除(按元素移除，不是按下标移除)
    
            for(int i=1; i<W; i++){
                //判断其后续连续元素是否在，不在的话返回false
                if(!list.contains(min+i)){
                    return false;
                }
                //在的话就移除,按元素移除
                list.remove(new Integer(min+i));
            }
        }
        return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
