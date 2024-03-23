---
title: 最大宽度坡
date: 2022-11-07 22:07:55
permalink: /pages/9a5ea3/
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

给定一个整数数组 A，坡是元组 (i, j)，其中  i < j 且 A[i] <= A[j]。这样的坡的宽度为 j - i。

找出 A 中的坡的最大宽度，如果不存在，返回 0 。

 

示例 1：

    输入：[6,0,8,2,1,5]
    输出：4
    解释：
    最大宽度的坡为 (i, j) = (1, 5): A[1] = 0 且 A[5] = 5.
示例 2：

    输入：[9,8,1,0,1,9,4,0,4,1]
    输出：7
    解释：
    最大宽度的坡为 (i, j) = (2, 9): A[2] = 1 且 A[9] = 1.
     

提示：

- 2 <= A.length <= 50000
- 0 <= A[i] <= 50000

## 思路

用滑动模块 从最大长度开始依次长度-1尝试

## 解法
```java

class Solution {
    // 用滑动模块 从最大长度开始依次长度-1尝试
    public int maxWidthRamp(int[] A) {
        int i = A.length - 1;
        while (i > 0) {
            int left = 0;
            int right = i;

            while (right < A.length) {
                if (A[left] <= A[right]) {
                    return right - left;
                } else {
                    left++;
                    right++;
                }
            }

            i--;
        }

        return 0;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
