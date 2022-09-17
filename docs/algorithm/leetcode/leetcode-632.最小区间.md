---
title: 最小区间
date: 2022-09-17 21:23:00
permalink: /pages/8a59a1/
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

你有 k 个 非递减排列 的整数列表。找到一个 最小 区间，使得 k 个列表中的每个列表至少有一个数包含在其中。

我们定义如果 b-a < d-c 或者在 b-a == d-c 时 a < c，则区间 [a,b] 比 [c,d] 小。

 

示例 1：

    输入：nums = [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
    输出：[20,24]
    解释： 
    列表 1：[4, 10, 15, 24, 26]，24 在区间 [20,24] 中。
    列表 2：[0, 9, 12, 20]，20 在区间 [20,24] 中。
    列表 3：[5, 18, 22, 30]，22 在区间 [20,24] 中。
示例 2：

    输入：nums = [[1,2,3],[1,2,3],[1,2,3]]
    输出：[1,1]
 

提示：

- nums.length == k
- 1 <= k <= 3500
- 1 <= nums[i].length <= 50
- -10<sup>5</sup> <= nums[i][j] <= 10<sup>5</sup>
- nums[i] 按非递减顺序排列

## 思路

优先级队列

    PriorityQueue<Pair> queue = new
    PriorityQueue<>(Comparator.comparingInt(p -> p.num));
    //定义一个类，用来记录遍历过程中，每个数字所在的行、列和数字对应的值

## 解法
```java

class Solution {
      public int[] smallestRange(List<List<Integer>> nums) {
        if(nums == null || nums.size() == 0)
            return null;
        int len = nums.size();
        PriorityQueue<Pair> queue = new PriorityQueue<>(Comparator.comparingInt(p -> p.num));
        int[] res = new int[2];
        res[1] = Integer.MAX_VALUE;
        //maxNum 记录每一次遍历中k个数组的最大值
        int maxNum = Integer.MIN_VALUE;
        //初始化优先队列，将k个数组的第一个数字入队
        for(int i = 0;i<len;i++){
            int num = nums.get(i).get(0);
            maxNum = Math.max(maxNum,num);
            queue.add(new Pair(i,0,num));
        }
        //这里的循环退出条件是队列为空，也可以写成双层循环遍历数组
        while(!queue.isEmpty()){
            //每次遍历，先从队列中取出当前最小值
            Pair pair = queue.poll();
            int num = pair.num;
            //如果（当前最小值，当前最大值）的区间范围更小，则修改res数组
            if(res[1] - res[0] > maxNum - num){
                res[0] = num;
                res[1] = maxNum;
            }
            int row = pair.row;
            //右移
            int col = pair.col + 1;
            //如果右移后超出数组长度，此时退出循环，即已经找到最小的区间了
            if(nums.get(row).size() == col){
                break;
            }
            //下一个数，是当前数右边的数
            int nextNum = nums.get(row).get(col);
            //下一个数继续入队列
            queue.add(new Pair(row,col,nextNum));
            //更新当前最大值
            maxNum = Math.max(maxNum,nextNum);
        }
        return res;
    }
    //定义一个类，用来记录遍历过程中，每个数字所在的行、列和数字对应的值
    class Pair{
        public Integer row;
        public Integer col;
        public Integer num;
        public Pair(Integer row,Integer col,Integer num){
            this.row = row;
            this.col = col;
            this.num = num;
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
