---
title: 从英文中重建数字
date: 2022-05-12 21:37:33
permalink: /pages/c0e564/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---



## 题目
给你一个字符串 s ，其中包含字母顺序打乱的用英文单词表示的若干数字（0-9）。按 升序 返回原始的数字。

 

示例 1：

    输入：s = "owoztneoer"
    输出："012"
示例 2：

    输入：s = "fviefuro"
    输出："45"
 

提示：

- 1 <= s.length <= 10<sup>5</sup>
- s[i] 为 ["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"] 这些字符之一
- s 保证是一个符合题目要求的字符串



## 思路

思路与算法

首先我们可以统计每个字母分别在哪些数字中出现：

    字母	数字
    e	0 1 3 5 7 8 9
    f	4 5
    g	8
    h	3 8
    i	5 6 8 9
    n	1 7 9
    o	0 1 2 4
    r	0 3 4
    s	6 7
    t	2 3 8
    u	4
    v	5 7
    w	2
    x	6
    z	0
可以发现，z, w, u, x, g 都只在一个数字中，即 0,2,4,6,8 中出现。因此我们可以使用一个哈希表统计每个字母出现的次数，那么 z, w, u, x, g 出现的次数，即分别为 0,2,4,6,8 出现的次数。

随后我们可以注意那些只在两个数字中出现的字符：

h 只在 3,8 中出现。由于我们已经知道了 8 出现的次数，因此可以计算出 3 出现的次数。

f 只在 4,5 中出现。由于我们已经知道了 4 出现的次数，因此可以计算出 5 出现的次数。

s 只在 6,7 中出现。由于我们已经知道了 6 出现的次数，因此可以计算出 7 出现的次数。

此时，我们还剩下 1 和 9 的出现次数没有求出：

o 只在0,1,2,4 中出现，由于我们已经知道了0,2,4 出现的次数，因此可以计算出 1
出现的次数。 最后的 9 就可以通过 n, i, e中的任一字符计算得到了。这里推荐使用 i
进行计算，因为 n 在 9 中出现了 2 次，e 在 3 中出现了 2 次，容易在计算中遗漏。

当我们统计完每个数字出现的次数后，我们按照升序将它们进行拼接即可。

## 解法
```java
class Solution {
    public String originalDigits(String s) {
        Map<Character, Integer> c = new HashMap<Character, Integer>();
        for (int i = 0; i < s.length(); ++i) {
            char ch = s.charAt(i);
            c.put(ch, c.getOrDefault(ch, 0) + 1);
        }

        int[] cnt = new int[10];
        cnt[0] = c.getOrDefault('z', 0);
        cnt[2] = c.getOrDefault('w', 0);
        cnt[4] = c.getOrDefault('u', 0);
        cnt[6] = c.getOrDefault('x', 0);
        cnt[8] = c.getOrDefault('g', 0);

        cnt[3] = c.getOrDefault('h', 0) - cnt[8];
        cnt[5] = c.getOrDefault('f', 0) - cnt[4];
        cnt[7] = c.getOrDefault('s', 0) - cnt[6];

        cnt[1] = c.getOrDefault('o', 0) - cnt[0] - cnt[2] - cnt[4];

        cnt[9] = c.getOrDefault('i', 0) - cnt[5] - cnt[6] - cnt[8];

        StringBuffer ans = new StringBuffer();
        for (int i = 0; i < 10; ++i) {
            for (int j = 0; j < cnt[i]; ++j) {
                ans.append((char) (i + '0'));
            }
        }
        return ans.toString();
    }
}


```