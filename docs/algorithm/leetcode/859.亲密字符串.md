---
title: 亲密字符串
date: 2022-10-25 09:41:24
permalink: /pages/be2a38/
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

给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 

示例 1：

    输入：s = "ab", goal = "ba"
    输出：true
    解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。
示例 2：

    输入：s = "ab", goal = "ab"
    输出：false
    解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
示例 3：

    输入：s = "aa", goal = "aa"
    输出：true
    解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。
 

提示：

- 1 <= s.length, goal.length <= 2 * 10<sup>4</sup>
- s 和 goal 由小写英文字母组成


## 思路

分情况讨论

## 解法
```java

class Solution {
    public boolean buddyStrings(String s, String goal) {
        //长度不相等直接返回false;
        if(s.length() != goal.length()) return false;
        //当两个字符串相等时，看字符串中是否含有重复元素
        if(s.equals(goal)){
            char[] ch = s.toCharArray();
            Arrays.sort(ch);
            for(int i=1; i<ch.length; i++){
                if(ch[i-1] == ch[i]){
                    return true;
                }
            }
            return false;
        }
        //两个字符串不相等时，看交换之后能否相等
        List<Character> ls1 = new ArrayList<>();
        List<Character> ls2 = new ArrayList<>();
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i) != goal.charAt(i)){
                ls1.add(s.charAt(i));
                ls2.add(goal.charAt(i));
            }
        }
        if(ls1.size() != 2) return false;
        if(ls1.get(0) == ls2.get(1) && ls1.get(1) == ls2.get(0))    return true;
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
