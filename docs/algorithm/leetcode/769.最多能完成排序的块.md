---
title: 最多能完成排序的块
date: 2022-10-07 17:15:23
permalink: /pages/70db9a/
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

给定一个长度为 n 的整数数组 arr ，它表示在 [0, n - 1] 范围内的整数的排列。

我们将 arr 分割成若干 块 (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。

返回数组能分成的最多块数量。

 

示例 1:

    输入: arr = [4,3,2,1,0]
    输出: 1
    解释:
    将数组分成2块或者更多块，都无法得到所需的结果。
    例如，分成 [4, 3], [2, 1, 0] 的结果是 [3, 4, 0, 1, 2]，这不是有序的数组。
示例 2:

    输入: arr = [1,0,2,3,4]
    输出: 4
    解释:
    我们可以把它分成两块，例如 [1, 0], [2, 3, 4]。
    然而，分成 [1, 0], [2], [3], [4] 可以得到最多的块数。
 

提示:

- n == arr.length
- 1 <= n <= 10
- 0 <= arr[i] < n
- arr 中每个元素都 不同


## 思路

        //当遍历到第i个位置时，如果可以切分为块，那前i个位置的最大值一定等于i。
        //否则，一定有比i小的数划分到后面的块，那块排序后，一定不满足升序。


## 解法
```java

class Solution {
    public int maxChunksToSorted(int[] arr) {
        //当遍历到第i个位置时，如果可以切分为块，那前i个位置的最大值一定等于i。
        //否则，一定有比i小的数划分到后面的块，那块排序后，一定不满足升序。
        int res = 0, max = 0;
        for (int i = 0; i < arr.length; i++){
            max = Math.max(max, arr[i]);//统计前i个位置的最大元素
            if (max == i) res++;
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
