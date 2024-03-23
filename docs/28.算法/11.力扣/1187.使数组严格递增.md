---
title: 使数组严格递增
date: 2023-02-21 21:41:26
permalink: /pages/1cf75a/
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

给你两个整数数组 arr1 和 arr2，返回使 arr1 严格递增所需要的最小「操作」数（可能为 0）。

每一步「操作」中，你可以分别从 arr1 和 arr2 中各选出一个索引，分别为 i 和 j，0 <= i < arr1.length 和 0 <= j < arr2.length，然后进行赋值运算 arr1[i] = arr2[j]。

如果无法让 arr1 严格递增，请返回 -1。

 

示例 1：

    输入：arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]
    输出：1
    解释：用 2 来替换 5，之后 arr1 = [1, 2, 3, 6, 7]。
示例 2：

    输入：arr1 = [1,5,3,6,7], arr2 = [4,3,1]
    输出：2
    解释：用 3 来替换 5，然后用 4 来替换 3，得到 arr1 = [1, 3, 4, 6, 7]。
示例 3：

    输入：arr1 = [1,5,3,6,7], arr2 = [1,6,3,3]
    输出：-1
    解释：无法使 arr1 严格递增。
 

提示：

- 1 <= arr1.length, arr2.length <= 2000
- 0 <= arr1[i], arr2[i] <= 10^9
-  


## 思路

其实也是DP，用hashmap维护当前能实现的所有情况，即以i结尾需要在前面变换j次。

如arr1 = [1,5,3,6,7], arr2 = [1,3,2,4]。 要使第一个数严格有序，则只有一种情况：以1结尾，需要变换0次

要是前两个数严格有序，在上一步的基础上，有两种情况：以5结尾，需变换0次；以2结尾，需把当前的5变成2，需变换1次

要使前3个数严格有序，则只有一种情况，上一步的以5结尾，已经无法再找到一个数使他严格有序了，因此抛弃5结尾的情况，以2结尾的情况，当前的3就是符合严格有序的，因此为以3结尾，变换1次

要使前4个数严格有序，在上一步的基础上，则有两种情况，当前的6是符合的，则可以以6结尾，变换1次，也可以将6变成4，以4结尾，变换2次。

依此类推

## 解法
```java

class Solution {
    public int makeArrayIncreasing(int[] arr1, int[] arr2) {

        Arrays.sort(arr2);
        int m = arr1.length;
        int n = arr2.length;
        HashMap<Integer, Integer> map = new HashMap(); // (i,j) 表示当前长度变成i需要j步
        HashMap<Integer, Integer> next = new HashMap();
        map.put(arr1[0], 0);
        if(arr2[0] < arr1[0]) {
            map.put(arr2[0], 1);
        }
        for(int i = 1; i < m; i++) {
            for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
                if(entry.getKey() < arr1[i]) {
                    if(!next.containsKey(arr1[i]) || next.get(arr1[i]) > entry.getValue()) {
                        next.put(arr1[i], entry.getValue());
                    }
                } 
                int val = find(arr2, entry.getKey());
                if(val != -1 &&(!next.containsKey(val) || next.get(val) > entry.getValue() + 1)){
                    next.put(val, entry.getValue() + 1);
                }
            }
            map = next;
            next = new HashMap();
            if(map.isEmpty()) {
                return -1;
            }
        }
        int res = Integer.MAX_VALUE;
        for(Map.Entry<Integer, Integer> entry : map.entrySet()) {
            res = Math.min(res, entry.getValue());
        }
        return res;
    }
    private int find(int[] arr, int target) {
        if(arr[arr.length-1] <= target) {
            return -1;
        }
        int l = 0, r = arr.length -1;
        while(l < r) {
            int mid = l + (r-l) / 2;
            if(arr[mid] > target) {
                r = mid;
            } else if(arr[mid] <= target) {
                l = mid + 1;
            }
        }
        return arr[l];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
