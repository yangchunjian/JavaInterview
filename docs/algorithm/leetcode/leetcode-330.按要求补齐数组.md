---
title: 按要求补齐数组
date: 2022-07-18 22:27:23
permalink: /pages/2853a8/
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

给定一个已排序的正整数数组 nums ，和一个正整数 n 。从 [1, n] 区间内选取任意个数字补充到 nums 中，使得 [1, n] 区间内的任何数字都可以用 nums 中某几个数字的和来表示。

请返回 满足上述要求的最少需要补充的数字个数 。

 

示例 1:

    输入: nums = [1,3], n = 6
    输出: 1 
    解释:
    根据 nums 里现有的组合 [1], [3], [1,3]，可以得出 1, 3, 4。
    现在如果我们将 2 添加到 nums 中， 组合变为: [1], [2], [3], [1,3], [2,3], [1,2,3]。
    其和可以表示数字 1, 2, 3, 4, 5, 6，能够覆盖 [1, 6] 区间里所有的数。
    所以我们最少需要添加一个数字。
示例 2:

    输入: nums = [1,5,10], n = 20
    输出: 2
    解释: 我们需要添加 [2,4]。
示例 3:

    输入: nums = [1,2,2], n = 5
    输出: 0
 

提示：

- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 10<sup>4</sup>
- nums 按 升序排列
- 1 <= n <= 2<sup>31</sup> - 1



## 思路

【贪心关键在于每次把没覆盖到的下一个数字补充进来】

此题难在厘清思路，实际上我们要做的是维护一个当前能用和表示的最大数字ach，然后根据数组的值来判断需不需要插值。要理解这题的解法，需要先弄明白一个非常关键的道理：

一个数组[a1,a2,a3...an]当前能用和表示的数字区间为[1,ach]，此时往数组内补充新数num，则此时能表示的区间为[1,ach]∪[num,ach + num]

要理解这一点并不复杂，首先由于num被添加进了数组，则能实现的最大的数显然变成了ach + num，而由于ach之前的数[1, ach]都可以通过和实现，那么要实现ach + num - k（k <= ach），只需要从ach + num的组合里把和为k的组合拿掉即可。那么同理，实现[num,ach + num]就相当于用ach + num依次减掉[1,ach]中的数字，显然可以办到。

本题的贪心思想即来源于此，为了使补充的新数物尽其用，能够直接扩大可表示的区间范围，把补充的num设为ach + 1即可。此时能表示的数字区间可以直接更新为[1, ach + ach + 1]，不会漏掉中间的数字。

所以本题的思路是这样的：

- 当前能表示的最大数字为ach，则下一个需要达到的目标数字是ach + 1，而当前（未使用）的数组元素为num = nums[idx]
- 判断num与目标值ach + 1的大小关系，如果num > ach + 1，则说明[ach + 1, num - 1]区间内的数字无法表示，必须补充插入新数。为了使插入的新数既能表示ach + 1，又能尽可能覆盖更多的数组（贪心的关键之处），插入的数字就是ach + 1，更新ach = ach + ach + 1
- 如果num < ach + 1，说明当前的目标值ach + 1必然可以实现（因为num >= 1），此时更新ach = ach + num

## 解法
```java

class Solution {
    public int minPatches(int[] nums, int n) {

        //此处用int会溢出
        long ach = 0; 
        int idx = 0, count = 0, len = nums.length;
        while (ach < n) {
            if (idx >= len || ach + 1 < nums[idx]) {
                count++;
                ach += ach + 1;
            } else {
                ach += nums[idx];
                idx++;
            }
        }
        return count;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
