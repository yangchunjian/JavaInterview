---
title: 适龄的朋友
date: 2022-10-21 12:17:59
permalink: /pages/aa6529/
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

在社交媒体网站上有 n 个用户。给你一个整数数组 ages ，其中 ages[i] 是第 i 个用户的年龄。

如果下述任意一个条件为真，那么用户 x 将不会向用户 y（x != y）发送好友请求：

- ages[y] <= 0.5 * ages[x] + 7
- ages[y] > ages[x]
- ages[y] > 100 && ages[x] < 100

否则，x 将会向 y 发送一条好友请求。

注意，如果 x 向 y 发送一条好友请求，y 不必也向 x 发送一条好友请求。另外，用户不会向自己发送好友请求。

返回在该社交媒体网站上产生的好友请求总数。

 

示例 1：

    输入：ages = [16,16]
    输出：2
    解释：2 人互发好友请求。
示例 2：

    输入：ages = [16,17,18]
    输出：2
    解释：产生的好友请求为 17 -> 16 ，18 -> 17 。
示例 3：

    输入：ages = [20,30,100,110,120]
    输出：3
    解释：产生的好友请求为 110 -> 100 ，120 -> 110 ，120 -> 100 。
 

提示：

- n == ages.length
- 1 <= n <= 2 * 10<sup>4</sup>
- 1 <= ages[i] <= 120


## 思路

check函数

## 解法
```java

class Solution {
    public int numFriendRequests(int[] ages) {

        int ans = 0, n = ages.length;
        int[] bucket = new int[121];
        for(int i = 0; i < n; i++) {
            bucket[ages[i]]++;
        }
 
        for(int i = 0; i < bucket.length; i++) {
 
            if(bucket[i] == 0) continue;
    
            for(int j = 0; j < bucket.length; j++) {
              
                if(bucket[j] == 0) continue;

                if(check(i, j)) {
                    ans += (i == j) ? bucket[i] * (bucket[j] - 1) : bucket[i] * bucket[j];     
                }
            }
        }

        return ans;
    }

    private boolean check(int x, int y) {
        return !(y <= 0.5 * x + 7 || y > x || (y > 100 && x < 100));
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
