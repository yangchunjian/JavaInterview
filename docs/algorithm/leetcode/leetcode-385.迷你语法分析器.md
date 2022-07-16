---
title: 迷你语法分析器
date: 2022-07-16 20:41:19
permalink: /pages/a2e0ff/
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

给定一个字符串 s 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 NestedInteger 。

列表中的每个元素只可能是整数或整数嵌套列表

 

示例 1：

    输入：s = "324",
    输出：324
    解释：你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
示例 2：

    输入：s = "[123,[456,[789]]]",
    输出：[123,[456,[789]]]
    解释：返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
    1. 一个 integer 包含值 123
    2. 一个包含两个元素的嵌套列表：
        i.  一个 integer 包含值 456
        ii. 一个包含一个元素的嵌套列表
             a. 一个 integer 包含值 789
 

提示：

- 1 <= s.length <= 5 * 10<sup>4</sup>
- s 由数字、方括号 "[]"、负号 '-' 、逗号 ','组成
- 用例保证 s 是可解析的 NestedInteger
- 输入中的所有值的范围是 [-10<sup>6</sup>, 10<sup>6</sup>]


## 思路

    while Character.isDigit

## 解法
```java

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *     // Constructor initializes an empty nested list.
 *     public NestedInteger();
 *
 *     // Constructor initializes a single integer.
 *     public NestedInteger(int value);
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public void setInteger(int value);
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public void add(NestedInteger ni);
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return empty list if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */
class Solution {
        int start=0;
    public NestedInteger deserialize(String s) {
        //此函数表示的是从start开始解析
        if(s.charAt(start)=='['){
            //表明之后的一段是个NestedInteger列表：
            start++;//跳到真正的元素的第一个字符
            NestedInteger nestedInteger=new NestedInteger();//主函数的总nested
            while(s.charAt(start)!=']'){
                //终止条件是，在本层遇到一个“]”，表示的是本层的嵌套解析结束
                nestedInteger.add(deserialize(s));//从此时的start开始解析
                if(s.charAt(start)==','){start++;}//遇到逗号说明后边还有同组的nested
            }
            start++;//由于此时start指向的位置是“]”，需要右移
            return nestedInteger;
        }
        else{
            //本层是单个数字
            int positive=1;
            if(s.charAt(start)=='-'){
                positive=-1;
                start++;
            }
            int num=0;
            while(start<s.length()){
                char c=s.charAt(start);
                if(Character.isDigit(c)){
                    num=10*num+c-'0';
                    start++;
                }
                //注意数字解析结束后，肯定会遇到“,”或者“]”，因此承接了if的那个分支，因而不用start++来跳过
                else{break;}//既然是纯数字，那么就遇到非数字的字符就可以溜了
            }
            return new NestedInteger(positive*num);
        }      
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
