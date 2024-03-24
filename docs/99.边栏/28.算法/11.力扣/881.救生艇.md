---
title: 救生艇
date: 2022-10-27 09:21:08
permalink: /pages/478d1b/
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

给定数组 people 。people[i]表示第 i 个人的体重 ，船的数量不限，每艘船可以承载的最大重量为 limit。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。

返回 承载所有人所需的最小船数 。

 

示例 1：

    输入：people = [1,2], limit = 3
    输出：1
    解释：1 艘船载 (1, 2)
示例 2：

    输入：people = [3,2,2,1], limit = 3
    输出：3
    解释：3 艘船分别载 (1, 2), (2) 和 (3)
示例 3：

    输入：people = [3,5,3,4], limit = 5
    输出：4
    解释：4 艘船分别载 (3), (3), (4), (5)
 

提示：

- 1 <= people.length <= 5 * 10<sup>4</sup>
- 1 <= people[i] <= limit <= 3 * 10<sup>4</sup>

## 思路

// 排序，然后看最重的能否跟最轻的一起走，如果可以，一起走，如果不行，单独走。 直觉上最重的不一定要跟最轻的一起走，应该跟一个“比较轻”的一起走，使得总和尽量大，但又不超过limit。

// 比如排序数组：{a1, a2, a3, a4}，假设a4 + a1 <= limit, a4 + a2 <= limit。

// 这时候a4最理想的应当是带走a2，而不是a1，尽量留最小的使得更容易跟a3一起走。但实际上，既然a1,a2都能跟a4一起走，而a4又大于a3，那么a3必定也能跟a1，a2一起走的。所以无须考虑这个层次，直接考虑最重的能否跟最轻的一起走即可。


## 解法
```java

class Solution {
// 排序，然后看最重的能否跟最轻的一起走，如果可以，一起走，如果不行，单独走。 直觉上最重的不一定要跟最轻的一起走，应该跟一个“比较轻”的一起走，使得总和尽量大，但又不超过limit。

// 比如排序数组：{a1, a2, a3, a4}，假设a4 + a1 <= limit, a4 + a2 <= limit。

// 这时候a4最理想的应当是带走a2，而不是a1，尽量留最小的使得更容易跟a3一起走。但实际上，既然a1,a2都能跟a4一起走，而a4又大于a3，那么a3必定也能跟a1，a2一起走的。所以无须考虑这个层次，直接考虑最重的能否跟最轻的一起走即可。
    public int numRescueBoats(int[] people, int limit) {
        int res = 0;
        int right = people.length - 1;
        int left = 0;
        Arrays.sort(people);
        while (left <= right) {
            if (left == right) {
                res++;      // 只剩下最后一个,直接一个走,结束
                break;
            }
            if (people[left] + people[right] > limit) {
                res++;
                right--;        // 先载最重的, 而且最小的也无法一起载,那么就最重的单独走
            }
            else {
                res++;
                right--;        // 最重的与最轻的一起走
                left++;
            }
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
