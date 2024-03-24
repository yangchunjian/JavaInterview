---
title: 环绕字符串中唯一的子字符串
date: 2022-09-07 22:59:30
permalink: /pages/895537/
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

把字符串 s 看作 "abcdefghijklmnopqrstuvwxyz" 的无限环绕字符串，所以 s 看起来是这样的：

- "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...." 。
- 现在给定另一个字符串 p 。返回 s 中 不同 的 p 的 非空子串 的数量 。 

 

示例 1：

    输入：p = "a"
    输出：1
    解释：字符串 s 中只有 p 的一个 "a" 子字符。
示例 2：

    输入：p = "cac"
    输出：2
    解释：字符串 s 中只有 p 的两个子串 ("a", "c") 。
示例 3：

    输入：p = "zab"
    输出：6
    解释：在字符串 s 中有 p 的六个子串 ("z", "a", "b", "za", "ab", "zab") 。
 

提示：

- 1 <= p.length <= 10<sup>5</sup>
- p 由小写英文字母组成



## 思路


        /**
        统计以每个字符作为结尾的最长连续序列(可以覆盖掉重复的短序列的情况), 他们的和即为所求
        例如:abcdbcd, 对于以d结尾的有abcd, bcd, cd和d, 而bcd产生的序列都会被abcd所覆盖
        总和即以a、b、c和d结尾的所有连续最长序列1 + 2 + 3 + 4 = 10
        **/

## 解法
```java

class Solution {
    public int findSubstringInWraproundString(String p) {

        /**
        统计以每个字符作为结尾的最长连续序列(可以覆盖掉重复的短序列的情况), 他们的和即为所求
        例如:abcdbcd, 对于以d结尾的有abcd, bcd, cd和d, 而bcd产生的序列都会被abcd所覆盖
        总和即以a、b、c和d结尾的所有连续最长序列1 + 2 + 3 + 4 = 10
        **/
        int n = p.length();
        if(n < 1) return 0;
        int ret = 0;
        int[] count = new int[26];
        char[] str = p.toCharArray();
        int curMaxLen = 1;
        for(int i = 0; i < n; ++i) {
            if(i > 0 && (str[i]-str[i-1] == 1 || str[i-1]-str[i] == 25))
                curMaxLen++;
            else
                curMaxLen = 1;
            count[str[i]-'a'] = Math.max(count[str[i]-'a'], curMaxLen);
        }
        for(int temp : count)
            ret += temp;
        return ret;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
