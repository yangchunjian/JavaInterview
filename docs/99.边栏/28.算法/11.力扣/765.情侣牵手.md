---
title: 情侣牵手
date: 2022-10-08 21:06:04
permalink: /pages/13e956/
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


n 对情侣坐在连续排列的 2n 个座位上，想要牵到对方的手。

人和座位由一个整数数组 row 表示，其中 row[i] 是坐在第 i 个座位上的人的 ID。情侣们按顺序编号，第一对是 (0, 1)，第二对是 (2, 3)，以此类推，最后一对是 (2n-2, 2n-1)。

返回 最少交换座位的次数，以便每对情侣可以并肩坐在一起。 每次交换可选择任意两人，让他们站起来交换座位。

 

示例 1:

    输入: row = [0,2,1,3]
    输出: 1
    解释: 只需要交换row[1]和row[2]的位置即可。
示例 2:

    输入: row = [3,2,0,1]
    输出: 0
    解释: 无需交换座位，所有的情侣都已经可以手牵手了。
 

提示:

- 2n == row.length
- 2 <= n <= 30
- n 是偶数
- 0 <= row[i] < 2n
- row 中所有元素均无重复

## 思路

            //确定cp_1对应的（男/女）朋友的值
            int cp2 = cp1%2==0?cp1+1:cp1-1;
            //判断cp1右边的人是不是他的情侣


## 解法
```java

class Solution {
    public int minSwapsCouples(int[] row) {
        int res = 0;
        for(int i=0;i<row.length;i+=2){
            int cp1 = row[i];
            //确定cp_1对应的（男/女）朋友的值
            int cp2 = cp1%2==0?cp1+1:cp1-1;
            //判断cp1右边的人是不是他的情侣
            if(row[i+1]==cp2){
                continue;
            }
            //否则从下下个人开始往后寻找cp1的情侣，找到后和row[i+1]交换
            for(int j=i+2;j<row.length;j++){
                if(row[j]==cp2){
                    row[j] = row[i+1];
                    row[i+1] = cp2;
                    res++;
                    break;
                }
            } 
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
