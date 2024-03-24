---
title: 下一个更大元素 I
date: 2022-09-12 22:44:03
permalink: /pages/cc65f2/
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

nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。

给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。

对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。

返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。

 

示例 1：

    输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
    输出：[-1,3,-1]
    解释：nums1 中每个值的下一个更大元素如下所述：
    - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
    - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
    - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
示例 2：

    输入：nums1 = [2,4], nums2 = [1,2,3,4].
    输出：[3,-1]
    解释：nums1 中每个值的下一个更大元素如下所述：
    - 2 ，用加粗斜体标识，nums2 = [1,2,3,4]。下一个更大元素是 3 。
    - 4 ，用加粗斜体标识，nums2 = [1,2,3,4]。不存在下一个更大元素，所以答案是 -1 。
 

提示：

- 1 <= nums1.length <= nums2.length <= 1000
- 0 <= nums1[i], nums2[i] <= 104
- nums1和nums2中所有整数 互不相同
- nums1 中的所有整数同样出现在 nums2 中

进阶：你可以设计一个时间复杂度为 O(nums1.length + nums2.length) 的解决方案吗？


## 思路

通过Stack、HashMap解决

    先遍历大数组nums2，首先将第一个元素入栈；
    继续遍历，当当前元素小于栈顶元素时，继续将它入栈；当当前元素大于栈顶元素时，栈顶元素出栈，此时应将该出栈的元素与当前元素形成key-value键值对，存入HashMap中；
    当遍历完nums2后，得到nums2中元素所对应的下一个更大元素的hash表；
    遍历nums1的元素在hashMap中去查找‘下一个更大元素’，当找不到时则为-1。

## 解法
```java

class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Stack<Integer> stack = new Stack<Integer>();
        HashMap<Integer, Integer> hasMap = new HashMap<Integer, Integer>();
        
        int[] result = new int[nums1.length];
        
        for(int num : nums2) {
            while(!stack.isEmpty() && stack.peek()<num){
                hasMap.put(stack.pop(), num);
            }
            stack.push(num);
        }
        
        for(int i = 0; i < nums1.length; i++) result[i] = hasMap.getOrDefault(nums1[i], -1);
            
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
