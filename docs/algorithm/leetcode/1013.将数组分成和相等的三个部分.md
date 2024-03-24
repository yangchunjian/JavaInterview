---
title: 将数组分成和相等的三个部分
date: 2022-11-23 18:32:32
permalink: /pages/1c6106/
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

给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1]) 就可以将数组三等分。

 

示例 1：

    输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
    输出：true
    解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
示例 2：

    输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
    输出：false
示例 3：

    输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
    输出：true
    解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

提示：

- 3 <= arr.length <= 5 * 10<sup>4</sup>
- -10<sup>4</sup> <= arr[i] <= 10<sup>4</sup>

## 思路

重置

## 解法
```java

class Solution {
    public boolean canThreePartsEqualSum(int[] A) {

        int sum = 0;
        for (int num: A) {
            sum += num;
        }
        // 数组A的和如果不能被3整除返回false
        if (sum % 3 != 0) {
            return false;
        }
        // 遍历数组累加，每累加到目标值cnt加1，表示又找到1段,
        // 找到2段后就返回true（i只能到数组A的倒数第二个元素，保证了有第3段）
        sum /= 3;
        int curSum = 0, cnt = 0;
        for (int i = 0; i < A.length - 1; i++) {
            curSum += A[i];
            if (curSum == sum) {
                cnt++;
                if (cnt == 2) {
                    return true;
                }
                curSum = 0;
            }
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
