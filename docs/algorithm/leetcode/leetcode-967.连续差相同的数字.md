---
title: 连续差相同的数字
date: 2022-11-07 22:39:25
permalink: /pages/d2fdc7/
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

返回所有长度为 n 且满足其每两个连续位上的数字之间的差的绝对值为 k 的 非负整数 。

请注意，除了 数字 0 本身之外，答案中的每个数字都 不能 有前导零。例如，01 有一个前导零，所以是无效的；但 0 是有效的。

你可以按 任何顺序 返回答案。

 

示例 1：

    输入：n = 3, k = 7
    输出：[181,292,707,818,929]
    解释：注意，070 不是一个有效的数字，因为它有前导零。
示例 2：

    输入：n = 2, k = 1
    输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
示例 3：

    输入：n = 2, k = 0
    输出：[11,22,33,44,55,66,77,88,99]
示例 4：

    输入：n = 2, k = 2
    输出：[13,20,24,31,35,42,46,53,57,64,68,75,79,86,97]
 

提示：

- 2 <= n <= 9
- 0 <= k <= 9


## 思路

递归 回溯



## 解法
```java

class Solution {
    List<Integer> res;

    public int[] numsSameConsecDiff(int n, int k) {
        res = new ArrayList<>();
        dfs(n,k,new StringBuilder());
        return res.stream().mapToInt(Integer::intValue).toArray();
    }
    private void dfs(int n,int k,StringBuilder str){
        if(str.length()==n){
            res.add(Integer.parseInt(str.toString()));
            return ;
        }
        for(int i=0;i<=9;i++){
            if(str.length()==0&&i==0)   continue;
            if(str.length()==0||Math.abs(str.charAt(str.length()-1)-'0'-i)==k){
                str.append(i);
                dfs(n,k,str);
                str.deleteCharAt(str.length()-1);
            }
        }

    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
