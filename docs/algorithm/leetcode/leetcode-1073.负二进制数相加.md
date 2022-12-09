---
title: 负二进制数相加
date: 2022-11-27 19:36:38
permalink: /pages/cae9d6/
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

给出基数为 -2 的两个数 arr1 和 arr2，返回两数相加的结果。

数字以 数组形式 给出：数组由若干 0 和 1 组成，按最高有效位到最低有效位的顺序排列。例如，arr = [1,1,0,1] 表示数字 (-2)^3 + (-2)^2 + (-2)^0 = -3。数组形式 中的数字 arr 也同样不含前导零：即 arr == [0] 或 arr[0] == 1。

返回相同表示形式的 arr1 和 arr2 相加的结果。两数的表示形式为：不含前导零、由若干 0 和 1 组成的数组。

 

示例 1：

    输入：arr1 = [1,1,1,1,1], arr2 = [1,0,1]
    输出：[1,0,0,0,0]
    解释：arr1 表示 11，arr2 表示 5，输出表示 16 。
示例 2：

    输入：arr1 = [0], arr2 = [0]
    输出：[0]
示例 3：

    输入：arr1 = [0], arr2 = [1]
    输出：[1]
 

提示：

- 1 <= arr1.length, arr2.length <= 1000
- arr1[i] 和 arr2[i] 都是 0 或 1
- arr1 和 arr2 都没有前导0



## 思路

Stack

## 解法
```java

class Solution {
    public int[] addNegabinary(int[] arr1, int[] arr2) {
        int n1 = arr1.length;
        int n2 = arr2.length;
        int[] arr = new int[Math.max(n1,n2)];
        for(int i = 0 ; i < arr.length ; i++){
            if(i < n1 && i < n2){
                arr[arr.length-1-i] = arr1[n1-1-i]+arr2[n2-1-i];
            }else if(i < n1){
                arr[arr.length-1-i] = arr1[n1-1-i];
            }else if(i < n2){
                arr[arr.length-1-i] = arr2[n2-1-i];
            }
        }
        Stack<Integer> stack = new Stack<>();
        for(int i = arr.length-1 ; i >= 0 ; i--){
            if(arr[i] < 2){
                stack.push(arr[i]);
            }else{
                arr[i] -= 2;
                stack.push(arr[i]);
                if(i == 0){
                    stack.push(1);
                    stack.push(1);
                }else{
                    if(arr[i-1] > 0){
                        arr[i-1]--;
                    }else{
                        arr[i-1]++;
                        arr[i-2]++;
                    }
                }
            }
        }
        while(stack.size() > 1 && stack.peek() == 0){
            stack.pop();
        }
        int[] ans = new int[stack.size()];
        for(int i = 0 ; i < ans.length ; i++){
            ans[i] = stack.pop();
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
