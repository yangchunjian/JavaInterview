---
title: 二倍数对数组
date: 2022-11-06 19:16:34
permalink: /pages/4415a2/
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

给定一个长度为偶数的整数数组 arr，只有对 arr 进行重组后可以满足 “对于每个 0 <= i < len(arr) / 2，都有 arr[2 * i + 1] = 2 * arr[2 * i]” 时，返回 true；否则，返回 false。

 

示例 1：

    输入：arr = [3,1,3,6]
    输出：false
示例 2：

    输入：arr = [2,1,2,6]
    输出：false
示例 3：

    输入：arr = [4,-2,2,-4]
    输出：true
    解释：可以用 [-2,-4] 和 [2,4] 这两组组成 [-2,-4,2,4] 或是 [2,4,-2,-4]
 

提示：

- 0 <= arr.length <= 3 * 10<sup>4</sup>
- arr.length 是偶数
- -10<sup>5</sup> <= arr[i] <= 10<sup>5</sup>

## 思路

HashMap

## 解法
```java

class Solution {
    public boolean canReorderDoubled(int[] arr) {
        
        Arrays.sort(arr);
        //if (arr[0] == arr[arr.length - 1] && arr[0] == 0) return true;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i : arr) {
            if (i < 0) {
                if (map.containsKey(2 * i) && map.get(2 * i) != 0) {
                    map.put(2 * i, map.get(2 * i) - 1);
                } else {
                    map.put(i, map.getOrDefault(i, 0) + 1);
                }
            } else {
                if (map.containsKey(i) && map.get(i) != 0) {
                    map.put(i, map.get(i) - 1);
                } else {
                    map.put(2 * i, map.getOrDefault(2 * i, 0) + 1);
                }
            }
        }
        for (int i : map.values()) {
            if (i != 0) {
                return false;
            }
        }
        return true;
        // -8  -4  -4  -2  1  1  2  2  4  8

    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
