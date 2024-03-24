---
title: 比较含退格的字符串
date: 2022-10-23 21:31:34
permalink: /pages/4ea085/
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

给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

    输入：s = "ab#c", t = "ad#c"
    输出：true
    解释：s 和 t 都会变成 "ac"。
示例 2：

    输入：s = "ab##", t = "c#d#"
    输出：true
    解释：s 和 t 都会变成 ""。
示例 3：

    输入：s = "a#c", t = "b"
    输出：false
    解释：s 会变成 "c"，但 t 仍然是 "b"。
 

提示：

    1 <= s.length, t.length <= 200
    s 和 t 只含有小写字母以及字符 '#'
 

进阶：

- 你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？


## 思路

    StringBuilder tsb = new StringBuilder(); // 模拟栈
    tsb.deleteCharAt(tsb.length() - 1); // 模拟弹栈
## 解法
```java

class Solution {
    public boolean backspaceCompare(String s, String t) {
        StringBuilder ssb = new StringBuilder(); // 模拟栈
        StringBuilder tsb = new StringBuilder(); // 模拟栈
        // 分别处理两个 String
        for (char c : s.toCharArray()) {
            if (c != '#') {
                ssb.append(c); // 模拟入栈
            } else if (ssb.length() > 0){ // 栈非空才能弹栈
                ssb.deleteCharAt(ssb.length() - 1); // 模拟弹栈
            }
        }
        for (char c : t.toCharArray()) {
            if (c != '#') {
                tsb.append(c); // 模拟入栈
            } else if (tsb.length() > 0){ // 栈非空才能弹栈
                tsb.deleteCharAt(tsb.length() - 1); // 模拟弹栈
            }
        }
        return ssb.toString().equals(tsb.toString());
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
