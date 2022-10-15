---
title: 阶乘函数后 K 个零
date: 2022-10-15 20:39:53
permalink: /pages/4f78b3/
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

 f(x) 是 x! 末尾是 0 的数量。回想一下 x! = 1 * 2 * 3 * ... * x，且 0! = 1 。

- 例如， f(3) = 0 ，因为 3! = 6 的末尾没有 0 ；而 f(11) = 2 ，因为 11!= 39916800 末端有 2 个 0 。

给定 k，找出返回能满足 f(x) = k 的非负整数 x 的数量。

 

示例 1：

    输入：k = 0
    输出：5
    解释：0!, 1!, 2!, 3!, 和 4! 均符合 k = 0 的条件。
示例 2：

    输入：k = 5
    输出：0
    解释：没有匹配到这样的 x!，符合 k = 5 的条件。
示例 3:

    输入: k = 3
    输出: 5
 

提示:

- 0 <= k <= 10<sup>9</sup>


## 思路
用二分查找来解这个题，但感觉题解有点搞复杂了，因为答案只可能是5或0，

所以只要找到满足f(x)=k的x就是5，没找到就是0。
    
## 解法
```java

class Solution {

    //f(x)=x!末尾0的数量=因子5的总数（2足够多）
    //令f(x)=k的x的个数只能是5或0（x每增大5，因数5就会增多，但可能不只增多1个）
    //k = x/5 + x/5^2 + x/5^3 + ......
    //x/5 <= k
    //x <= 5k
    //在[0, 5*k]内二分求解x，如果能找到，就是5，否则就是0.
        public int preimageSizeFZF(int k) {
        long left = 0L;
        long right = 5L * k;
        while (left <= right) {
            long mid = left + (right - left) / 2;
            if (getFX(mid) > k) {
                right = mid - 1;
            } else if (getFX(mid) < k){
                left = mid + 1;
            } else {
                return 5;
            }
        }
        return 0;
    }
    
    public long getFX(long n) {
        long ans = 0;
        while (n != 0) {
            n /= 5;
            ans += n;
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
