---
title: 最小好进制
date: 2022-09-12 20:16:10
permalink: /pages/69c771/
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

以字符串的形式给出 n , 以字符串的形式返回 n 的最小 好进制  。

如果 n 的  k(k>=2) 进制数的所有数位全为1，则称 k(k>=2) 是 n 的一个 好进制 。

 

示例 1：

    输入：n = "13"
    输出："3"
    解释：13 的 3 进制是 111。
示例 2：

    输入：n = "4681"
    输出："8"
    解释：4681 的 8 进制是 11111。
示例 3：

    输入：n = "1000000000000000000"
    输出："999999999999999999"
    解释：1000000000000000000 的 999999999999999999 进制是 11。
 

提示：

- n 的取值范围是 [3, 10<sup>18</sup>]
- n 没有前导 0


## 思路

    /**
     * 其实是一个满K叉树的样子，n就是满足k叉树的节点和。
     * 位数其实就是k叉树的深度h=logk(n)
     * 相同节点个数，当k最小，k=2，即二叉树的时候，深度最深。本题就是求得[完全最小k叉树] 就理解为满足完全树的最小k叉树吧...
     * 于是乎，我们想如果能满足完全二叉树那么一定是深度最深的。深度有多深呢？log2(n).那这个就是最深的深度了max_h=log2(n)
     * 最小深度就是除了一个根节点，其他节点都是叶子节点。min_h=2
     * 从最大的深度开始找。
     * k怎么计算？通过两个公式夹逼。
     * n = k^0 + k^1 + k^2 + ... + k^(m-1) + k^m  // k叉树总节点数  k < n.sqrt(m)
     * (k+1)^m = ... > k^0 + k^1 + ... + k^(m-1) + k^m = n  // 二次项展开式 二次项分别为k和1.所以1的n次方都是1。  k+1 > n.sqrt(m)
     * 得  k < n.sqrt(m) < k+1
     * k=n开m次方  就是n的1/m次方
     * 然后从2位开始计算，如果sum=n就成功。
     *
     * sum = sum * k + 1; // 就是左移一位+1
     */

## 解法
```java

class Solution {
    /**
 * 其实是一个满K叉树的样子，n就是满足k叉树的节点和。
 * 位数其实就是k叉树的深度h=logk(n)
 * 相同节点个数，当k最小，k=2，即二叉树的时候，深度最深。本题就是求得[完全最小k叉树] 就理解为满足完全树的最小k叉树吧...
 * 于是乎，我们想如果能满足完全二叉树那么一定是深度最深的。深度有多深呢？log2(n).那这个就是最深的深度了max_h=log2(n)
 * 最小深度就是除了一个根节点，其他节点都是叶子节点。min_h=2
 * 从最大的深度开始找。
 * k怎么计算？通过两个公式夹逼。
 * n = k^0 + k^1 + k^2 + ... + k^(m-1) + k^m  // k叉树总节点数  k < n.sqrt(m)
 * (k+1)^m = ... > k^0 + k^1 + ... + k^(m-1) + k^m = n  // 二次项展开式 二次项分别为k和1.所以1的n次方都是1。  k+1 > n.sqrt(m)
 * 得  k < n.sqrt(m) < k+1
 * k=n开m次方  就是n的1/m次方
 * 然后从2位开始计算，如果sum=n就成功。
 *
 * sum = sum * k + 1; // 就是左移一位+1
 */
    public String smallestGoodBase(String n) {

        long num = Long.parseLong(n);
        long maxh = (long)(Math.log(num) / Math.log(2)+1);
        // 从大bit位开始
        for (long h = maxh; h >= 2; h--) {
            long k = (long) Math.pow(num, 1.0 / (h-1));
            long sum = 0;
            for (int i = 0; i < h; i++) {
                // 左移一位+1   就是原值*k+1
                sum = sum * k + 1;
                if (sum == num) {
                    return String.valueOf(k);
                }
            }
        }
        return Long.toString(num - 1);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
