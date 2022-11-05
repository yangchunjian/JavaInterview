---
title: 给定数字能组成的最大时间
date: 2022-11-05 16:22:03
permalink: /pages/5a7a5b/
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

给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。

24 小时格式为 "HH:MM" ，其中 HH 在 00 到 23 之间，MM 在 00 到 59 之间。最小的 24 小时制时间是 00:00 ，而最大的是 23:59 。从 00:00 （午夜）开始算起，过得越久，时间越大。

以长度为 5 的字符串，按 "HH:MM" 格式返回答案。如果不能确定有效时间，则返回空字符串。

 

示例 1：

    输入：arr = [1,2,3,4]
    输出："23:41"
    解释：有效的 24 小时制时间是 "12:34"，"12:43"，"13:24"，"13:42"，"14:23"，"14:32"，"21:34"，"21:43"，"23:14" 和 "23:41" 。这些时间中，"23:41" 是最大时间。
示例 2：

    输入：arr = [5,5,5,5]
    输出：""
    解释：不存在有效的 24 小时制时间，因为 "55:55" 无效。
示例 3：

    输入：arr = [0,0,0,0]
    输出："00:00"
示例 4：

    输入：arr = [0,0,1,0]
    输出："10:00"
 

提示：

- arr.length == 4
- 0 <= arr[i] <= 9



## 思路

三个for循环

## 解法
```java

class Solution {
    public String largestTimeFromDigits(int[] A) {
        Arrays.sort(A);
        for(int i=3; i>=0; i--){
            if(A[i]>2) continue;
            for(int j=3; j>=0; j--) {
                if (j==i || A[i]==2 && A[j]>3) continue;
                for (int k=3; k>=0; k--) {
                    if (k==i || k==j || A[k]>5) continue;
                    return "" + A[i] + A[j] + ':' + A[k] + A[6-i-j-k];
                }
            }
        }
        return "";
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
