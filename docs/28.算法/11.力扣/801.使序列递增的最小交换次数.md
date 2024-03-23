---
title: 使序列递增的最小交换次数
date: 2022-10-16 21:18:19
permalink: /pages/d44d79/
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

我们有两个长度相等且不为空的整型数组 nums1 和 nums2 。在一次操作中，我们可以交换 nums1[i] 和 nums2[i]的元素。

- 例如，如果 nums1 = [1,2,3,8] ， nums2 =[5,6,7,4] ，你可以交换 i = 3 处的元素，得到 nums1 =[1,2,3,4] 和 nums2 =[5,6,7,8] 。

返回 使 nums1 和 nums2 严格递增 所需操作的最小次数 。

数组 arr 严格递增 且  arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1] 。

注意：

用例保证可以实现操作。
 

示例 1:

    输入: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
    输出: 1
    解释: 
    交换 A[3] 和 B[3] 后，两个数组如下:
    A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]
    两个数组均为严格递增的。
示例 2:

    输入: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
    输出: 1
 

提示:

- 2 <= nums1.length <= 10<sup>5</sup>
- nums2.length == nums1.length
- 0 <= nums1[i], nums2[i] <= 2 * 10<sup>5</sup>

## 思路

    /*
    假设数组长度为n，dp[n][0]和dp[n][1]分别表示第n个元素不交换和交换的最小交换总次数, 每个元素都只有交换和不交换两种情形，显然有递推关系如下：
    dp[n][0] = Math.min(dp[n-1][0], dp[n-1][1])  //注意处理不满足递增的情形，下面同理
    dp[n][1] = Math.min(dp[n-1][0], dp[n-1][1]) + 1
     */


## 解法
```java

class Solution {
    /*
    假设数组长度为n，dp[n][0]和dp[n][1]分别表示第n个元素不交换和交换的最小交换总次数, 每个元素都只有交换和不交换两种情形，显然有递推关系如下：
    dp[n][0] = Math.min(dp[n-1][0], dp[n-1][1])  //注意处理不满足递增的情形，下面同理
    dp[n][1] = Math.min(dp[n-1][0], dp[n-1][1]) + 1
     */
    public int minSwap(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int dp0 = 0;
        int dp1 = 1;
        boolean flag1;
        boolean flag2;
        int temp;
        for (int i = 1; i < n; i++) {
            flag1 = nums1[i - 1] < nums1[i] && nums2[i - 1] < nums2[i];
            flag2 = nums1[i - 1] < nums2[i] && nums2[i - 1] < nums1[i];
            temp = dp0;
            dp0 = Math.min(flag1 ? dp0 : n, flag2 ? dp1 : n); // 不交换
            dp1 = Math.min(flag2 ? temp : n, flag1 ? dp1 : n) + 1; // 交换
        }
        return Math.min(dp0, dp1);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
