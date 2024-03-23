---
title: 一年中的第几天
date: 2022-12-08 20:30:15
permalink: /pages/98f197/
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

给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。返回该日期是当年的第几天。

 

示例 1：

    输入：date = "2019-01-09"
    输出：9
    解释：给定日期是2019年的第九天。
示例 2：

    输入：date = "2019-02-10"
    输出：41
 

提示：

- date.length == 10
- date[4] == date[7] == '-'，其他的 date[i] 都是数字
- date 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日


## 思路

switch case

## 解法
```java

class Solution {


    public int dayOfYear(String date) {
        String[] strs = date.split("-");
        int year = Integer.valueOf(strs[0]);
        int month = Integer.valueOf(strs[1]);
        int day = Integer.valueOf(strs[2]);
        switch (month) {
            case 12: day += 30;
            case 11: day += 31;
            case 10: day += 30;
            case 9: day += 31;
            case 8: day += 31;
            case 7: day += 30;
            case 6: day += 31;
            case 5: day += 30;
            case 4: day += 31;
            case 3: day += isLeapYear( year) ? 29 : 28;
            case 2: day += 31;
        }
        return day;
    }
    
    private boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
