---
title: 分发饼干
date: 2022-09-12 00:28:38
permalink: /pages/9a5fa4/
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

假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。

你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

 
示例 1:

    输入: g = [1,2,3], s = [1,1]
    输出: 1
    解释: 
    你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
    虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
    所以你应该输出1。
示例 2:

    输入: g = [1,2], s = [1,2,3]
    输出: 2
    解释: 
    你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
    你拥有的饼干数量和尺寸都足以让所有孩子满足。
    所以你应该输出2.
 

提示：

- 1 <= g.length <= 3 * 10<sup>4</sup>
- 0 <= s.length <= 3 * 10<sup>4</sup>
- 1 <= g[i], s[j] <= 2<sup>31</sup> - 1



## 思路

贪心的思想是，用尽量小的饼干去满足小需求的孩子，所以需要进行排序先

## 解法
```java

class Solution {
    //贪心的思想是，用尽量小的饼干去满足小需求的孩子，所以需要进行排序先
    public int findContentChildren(int[] g, int[] s) {
        int child = 0;
        int cookie = 0;
        Arrays.sort(g);  //先将饼干 和 孩子所需大小都进行排序
        Arrays.sort(s);
        while (child < g.length && cookie < s.length ){ //当其中一个遍历就结束
            if (g[child] <= s[cookie]){ //当用当前饼干可以满足当前孩子的需求，可以满足的孩子数量+1
                child++;
            }
            cookie++; // 饼干只可以用一次，因为饼干如果小的话，就是无法满足被抛弃，满足的话就是被用了
        }
        return child; 
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
