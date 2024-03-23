---
title: 三数之和的多种可能
date: 2022-10-29 20:06:11
permalink: /pages/ab33e5/
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

给定一个整数数组 arr ，以及一个整数 target 作为目标值，返回满足 i < j < k 且 arr[i] + arr[j] + arr[k] == target 的元组 i, j, k 的数量。

由于结果会非常大，请返回 109 + 7 的模。

 

示例 1：

    输入：arr = [1,1,2,2,3,3,4,4,5,5], target = 8
    输出：20
    解释：
    按值枚举(arr[i], arr[j], arr[k])：
    (1, 2, 5) 出现 8 次；
    (1, 3, 4) 出现 8 次；
    (2, 2, 4) 出现 2 次；
    (2, 3, 3) 出现 2 次。
示例 2：
    
    输入：arr = [1,1,2,2,2,2], target = 5
    输出：12
    解释：
    arr[i] = 1, arr[j] = arr[k] = 2 出现 12 次：
    我们从 [1,1] 中选择一个 1，有 2 种情况，
    从 [2,2,2,2] 中选出两个 2，有 6 种情况。
 

提示：

- 3 <= arr.length <= 3000
- 0 <= arr[i] <= 100
- 0 <= target <= 300

## 思路

思路跟“三数之和”差不多的三指针：

## 解法
```java

class Solution {
    // 思路跟“三数之和”差不多的三指针：


    int mod=(int)1e9+7;
    public int threeSumMulti(int[] arr, int target) {
        Arrays.sort(arr);
        long ans=0;
        for(int i=0;i<arr.length;i++){
            int d=target-arr[i];
            int l=i+1,r=arr.length-1;
            while(l<r){
                while(l<r&&arr[l]+arr[r]<d){l++;}
                while(l<r&&arr[l]+arr[r]>d){r--;}
                if(l>=r||arr[l]+arr[r]!=d){continue;}
                if(arr[l]==arr[r]){
                    ans+=(long)(r-l+1)*(r-l)/2;
                    break;
                }
                else{
                    int a=l,b=r;
                    while(a<r&&arr[a]==arr[l]){a++;}
                    while(b>l&&arr[b]==arr[r]){b--;}
                    ans+=(long)(a-l)*(r-b);
                    l=a;
                    r=b;
                }
            }
        }
        return (int)(ans%mod);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
