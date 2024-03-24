---
title: 将数组拆分成斐波那契序列
date: 2022-10-23 20:51:41
permalink: /pages/f71dd5/
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

给定一个数字字符串 num，比如 "123456579"，我们可以将它分成「斐波那契式」的序列 [123, 456, 579]。

形式上，斐波那契式 序列是一个非负整数列表 f，且满足：

- 0 <= f[i] < 2<sup>31</sup> ，（也就是说，每个整数都符合 32 位
  有符号整数类型）
- f.length >= 3
- 对于所有的0 <= i < f.length - 2，都有 f[i] + f[i + 1] = f[i + 2]

另外，请注意，将字符串拆分成小块时，每个块的数字一定不要以零开头，除非这个块是数字 0 本身。

返回从 num 拆分出来的任意一组斐波那契式的序列块，如果不能拆分则返回 []。

 

示例 1：

    输入：num = "1101111"
    输出：[11,0,11,11]
    解释：输出[110,1,111]也可以。
示例 2：

    输入: num = "112358130"
    输出: []
    解释: 无法拆分。
示例 3：

    输入："0123"
    输出：[]
    解释：每个块的数字不能以零开头，因此 "01"，"2"，"3" 不是有效答案。
 

提示：

- 1 <= num.length <= 200
- num 中只含有数字


## 思路

dfs

## 解法
```java

class Solution {
    public List<Integer> splitIntoFibonacci(String S) {
        LinkedList<Integer> res=new LinkedList<>();
        dfs(S,0,res);
        return res;
    }

    public boolean dfs(String S,int index,List<Integer> lis){
        if (index == S.length()) {
            return lis.size()>2;
        }
        for (int i=index+1;i<=S.length();i++) {
            String temp=S.substring(index,i);
            //长度大于10,或者Long解析出来大于INT_MAX了就直接break
            if (S.charAt(index) == '0' && i>index+1 || temp.length()>10 || Long.valueOf(temp)>Integer.MAX_VALUE) {
                break;
            }
            int str=Integer.valueOf(temp);
            int one=lis.size()>=2 ? lis.get(lis.size()-1):-1;
            int two=lis.size()>=2 ? lis.get(lis.size()-2):-1;
            lis.add(str);
            if ((one==-1 || two==-1 || one+two==str) && dfs(S,i,lis)) {
                return true;
            }
            lis.remove(lis.size()-1);
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
