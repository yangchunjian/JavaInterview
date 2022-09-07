---
title: 最小操作次数使数组元素相等
date: 2022-09-07 22:57:23
permalink: /pages/248c51/
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

给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

 

示例 1：

    输入：nums = [1,2,3]
    输出：3
    解释：
    只需要3次操作（注意每次操作会增加两个元素的值）：
    [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
示例 2：

    输入：nums = [1,1,1]
    输出：0
 

提示：

- n == nums.length
- 1 <= nums.length <= 10<sup>5</sup>
- -10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>
- 答案保证符合 32-bit 整数


## 思路

    // 把问题换一个问法更好理解：有 n 根钉子，每次只能敲一根钉子让高度 - 1，问敲多少下钉子使得所有钉子高度一样？

    // 答案自然就是把所有的钉子敲到跟最矮的那根一样了   


## 解法
```java

class Solution {
    public int minMoves(int[] nums) {
        int res = 0;
        int min = Integer.MAX_VALUE;
        for (int num : nums) {
            min = Math.min(min, num);
        }
        for (int num : nums) {
            res += num - min;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
