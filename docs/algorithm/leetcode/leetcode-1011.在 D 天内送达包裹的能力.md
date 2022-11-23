---
title: 在 D 天内送达包裹的能力
date: 2022-11-23 18:23:02
permalink: /pages/bdca55/
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

传送带上的包裹必须在 days 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量（weights）的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 days 天内将传送带上的所有包裹送达的船的最低运载能力。

 

示例 1：

    输入：weights = [1,2,3,4,5,6,7,8,9,10], days = 5
    输出：15
    解释：
    船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
    第 1 天：1, 2, 3, 4, 5
    第 2 天：6, 7
    第 3 天：8
    第 4 天：9
    第 5 天：10
    
    请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
示例 2：

    输入：weights = [3,2,2,4,1,4], days = 3
    输出：6
    解释：
    船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
    第 1 天：3, 2
    第 2 天：2, 4
    第 3 天：1, 4
示例 3：

    输入：weights = [1,2,3,1,1], days = 4
    输出：3
    解释：
    第 1 天：1
    第 2 天：2
    第 3 天：3
    第 4 天：1, 1
 

提示：

- 1 <= days <= weights.length <= 5 * 10<sup>4</sup>
- 1 <= weights[i] <= 500


## 思路

二分查找：确定左边界

## 解法
```java

class Solution {

    /**
     * 二分查找：确定左边界
     */
    public int shipWithinDays(int[] weights, int days) {
        int left=getMax(weights),right=getSum(weights)+1;
        while(left<right){
            int mid=left+(right-left)/2;
            if (isValid(weights,mid,days)){
                right=mid;
            }else {
                left=mid+1;
            }
        }
        return left;
    }

    private boolean isValid(int[] weights, int power, int days) {
        int cost=0;  // 消耗天数
        int capacity=0;  // 此时船已经装载的货物重量
        int i=0;
        while (i<weights.length){
            if (cost>=days){  // 还未将所有货物转送，就已经用时days
                return false;
            }

            if(capacity+weights[i]>=power){
                if (capacity+weights[i]>power)
                    i--;
                capacity=0;
                cost++;

            }else{
                capacity+=weights[i];
            }
            i++;
        }
        if (capacity!=0){ // 最后一次转运有可能并未达到最低运载能力
            return !(cost+1>days);
        }
        return true;
    }

    private int getMax(int[] weights) {
        int max=weights[0];
        for (int i=1;i<weights.length;i++){
            if (max<weights[i]){
                max=weights[i];
            }
        }
        return max;
    }
    
    private int getSum(int[] weights) {
        int sum=weights[0];
        for (int i=1;i<weights.length;i++){
            sum+=weights[i];
        }
        return sum;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
