---
title: 超级洗衣机
date: 2022-09-05 09:23:18
permalink: /pages/6ea0ff/
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

假设有 n 台超级洗衣机放在同一排上。开始的时候，每台洗衣机内可能有一定量的衣服，也可能是空的。

在每一步操作中，你可以选择任意 m (1 <= m <= n) 台洗衣机，与此同时将每台洗衣机的一件衣服送到相邻的一台洗衣机。

给定一个整数数组 machines 代表从左至右每台洗衣机中的衣物数量，请给出能让所有洗衣机中剩下的衣物的数量相等的 最少的操作步数 。

如果不能使每台洗衣机中衣物的数量相等，则返回 -1 。

 

示例 1：

    输入：machines = [1,0,5]
    输出：3
    解释：
    第一步:    1     0 <-- 5    =>    1     1     4
    第二步:    1 <-- 1 <-- 4    =>    2     1     3    
    第三步:    2     1 <-- 3    =>    2     2     2   
示例 2：

    输入：machines = [0,3,0]
    输出：2
    解释：
    第一步:    0 <-- 3     0    =>    1     2     0    
    第二步:    1     2 --> 0    =>    1     1     1     
示例 3：

    输入：machines = [0,2,0]
    输出：-1
    解释：
    不可能让所有三个洗衣机同时剩下相同数量的衣物。
 

提示：

- n == machines.length
- 1 <= n <= 10<sup>4</sup>
- 0 <= machines[i] <= 10<sup>5</sup>


## 思路

有四个洗衣机，装的衣服数为[0, 0, 11, 5]，最终的状态会变为[4, 4, 4, 4]，

那么我们将二者做差，得到*[-4, -4, 7, 1]，这里负数表示当前洗衣机还需要的衣服数，

正数表示当前洗衣机多余的衣服数。我们要做的是*要将这个差值数组每一项都变为0，

对于第一个洗衣机来说，需要四件衣服可以从第二个洗衣机获得，那么就可以 把-4移给二号洗衣机，

那么差值数组变为[0, -8, 7, 1]，此时二号洗衣机需要八件衣服，那么至少需要移动8次。

然后二号洗衣机把这八件衣服从三号洗衣机处获得，那么差值数组变为[0, 0, -1, 1]，此时三号洗衣机还缺1件，

就从四号洗衣机处获得，此时差值数组成功变为了[0, 0, 0, 0]，成功。

那么移动的最大次数就是差值 数组中出现的绝对值最大的数字，8次


    将每个洗衣机中的衣服数量相等可以转化为：差值数组中每一项都变为0，差值数组为 diff[i] = machines[i] - target
    
    在把差值数组每一项变为0的操作中，只需要求出其中所需移动衣服最多的洗衣机，就是最少的移动次数。
      
    当diff[i] < 0 时，可以从左右两边的洗衣机获取衣服，取左右中的最大值； 
    当diff[i] > 0 时，需要把洗衣机的衣服向左右转移，此时移动次数等于diff[i]
      
    我们从左向右依次把差值数组中的每一项变为0：考虑到与该洗衣机非相邻的洗衣机可能需要经过该洗衣机来转移衣服，因此 
    用balance记录当前洗衣机上所要经过的流量。
    balance += diff[i];
    balance < 0 说明需要从右边获取衣服，balance > 0 说明需要向右边转移衣服。 
    那么该洗衣机上的最大操作数为： max(diff[i], Math.abs(balance))
  
## 解法
```java

class Solution {
    public int findMinMoves(int[] machines) {
        int sum = 0;
        for(int num : machines)
            sum += num;
        if(sum % machines.length != 0)
            return -1;

        int target = sum / machines.length;
        int res = 0, balance = 0;
        for(int i = 0 ; i < machines.length; i ++){
            balance += machines[i] - target;
            res = Math.max(res, Math.max(machines[i] - target, Math.abs(balance)));
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
