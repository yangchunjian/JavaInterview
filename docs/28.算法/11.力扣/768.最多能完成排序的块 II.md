---
title: 最多能完成排序的块 II
date: 2022-10-07 16:48:30
permalink: /pages/2fa419/
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

这个问题和“最多能完成排序的块”相似，但给定数组中的元素可以重复，输入数组最大长度为2000，其中的元素最大为10**8。

arr是一个可能包含重复元素的整数数组，我们将这个数组分割成几个“块”，并将这些块分别进行排序。之后再连接起来，使得连接的结果和按升序排序后的原数组相同。

我们最多能将数组分成多少块？

示例 1:

    输入: arr = [5,4,3,2,1]
    输出: 1
    解释:
    将数组分成2块或者更多块，都无法得到所需的结果。
    例如，分成 [5, 4], [3, 2, 1] 的结果是 [4, 5, 1, 2, 3]，这不是有序的数组。 
示例 2:

    输入: arr = [2,1,3,4,4]
    输出: 4
    解释:
    我们可以把它分成两块，例如 [2, 1], [3, 4, 4]。
    然而，分成 [2, 1], [3], [4], [4] 可以得到最多的块数。 
注意:

- arr的长度在[1, 2000]之间。
- arr[i]的大小在[0, 10**8]之间。


## 思路

题目意思：一个数组可以分成好几个小数组，每个小数组内部都是递增排列的，

最后这几个小数组可以按顺序组成的大数组刚好是这个数组的递增序列； 

举例：[2,2,3,3,5,4,3]->[2],[2],[3],[3],[3,4,5],可以分成5组 其实可以推断出，前面块里面的最大值，肯定小于后面的块的所有的值

## 解法
```java

class Solution {
    public int maxChunksToSorted(int[] arr) {
        Stack<Integer> stack = new Stack<>();
        for (int num : arr) {
            if (stack.isEmpty() || num >= stack.peek()) {
                //一直递增说明这些都可以丰城一个个的块
                stack.push(num);
            } else {
                //需要和前面的块做对比，会需要和前面的某些块融合
                int max = stack.pop();
                //融合判断的条件，num在前面的块中的位置，即num与前面那些比自己大的块需要融合
                while (!stack.isEmpty() && stack.peek() > num) {
                    stack.pop();
                }
                //前面所有快的最大值
                stack.push(max);
            }
        }
        return stack.size();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
