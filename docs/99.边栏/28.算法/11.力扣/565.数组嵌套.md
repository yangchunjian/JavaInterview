---
title: 数组嵌套
date: 2022-09-14 23:29:48
permalink: /pages/e50a94/
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

索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。

假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。

 

示例 1:

    输入: A = [5,4,0,3,1,6,2]
    输出: 4
    解释: 
    A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
    
    其中一种最长的 S[K]:
    S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
 

提示：

- 1 <= nums.length <= 10<sup>5</sup>
- 0 <= nums[i] < nums.length
- A中不含有重复的元素。



## 思路

//
这道题从模拟题目中给的Case可以发现实际上是需要找到数组中存在的最大环的长度。比如Case中可构成的最大环是5->6->2->0->5，如果用暴力的解法找到每个以当前元素开头的环的最大长度是会超时的，所以要加上一定的剪枝，我们还可以发现，如果一个环的长度超过了数组的一半大小，那么这个长度就是答案直接返回即可

// 认真观察题目中的case可以发现，如果当前的元素已经在之前的环中出现过了，那么以该元素开头必定不会出现最大环。所以我们只需维护一个visited数组就可以将程序优化为O（N）的时间效率。


## 解法
```java

class Solution {
    public int arrayNesting(int[] nums) {
// 这道题从模拟题目中给的Case可以发现实际上是需要找到数组中存在的对大环的长度。比如Case中可构成的最大环是5->6->2->0->5，如果用暴力的解法找到每个以当前元素开头的环的最大长度是会超时的，所以要加上一定的剪枝，我们还可以发现，如果一个环的长度超过了数组的一半大小，那么这个长度就是答案直接返回即可

// 认真观察题目中的case可以发现，如果当前的元素已经在之前的环中出现过了，那么以该元素开头必定不会出现最大环。所以我们只需维护一个visited数组就可以将程序优化为O（N）的时间效率。


        int max = 1;
        boolean[] visited = new boolean[nums.length];
        for(int i = 0; i < nums.length; i++){
            if(max > nums.length/2)
                return max;
            if(visited[nums[i]])
                continue;
            visited[nums[i]] = true;
            int curMax = 1;
            int cur = nums[nums[i]];
            while(nums[i] != cur){
                visited[cur] = true;
                curMax++;
                cur = nums[cur];
            }
            max = curMax > max? curMax : max;
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
