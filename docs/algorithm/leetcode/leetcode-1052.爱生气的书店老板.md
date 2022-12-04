

## 题目

有一个书店老板，他的书店开了 n 分钟。每分钟都有一些顾客进入这家商店。给定一个长度为 n 的整数数组 customers ，其中 customers[i] 是在第 i 分钟开始时进入商店的顾客数量，所有这些顾客在第 i 分钟结束后离开。

在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。

当书店老板生气时，那一分钟的顾客就会不满意，若老板不生气则顾客是满意的。

书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 minutes 分钟不生气，但却只能使用一次。

请你返回 这一天营业下来，最多有多少客户能够感到满意 。
 

示例 1：

    输入：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
    输出：16
    解释：书店老板在最后 3 分钟保持冷静。
    感到满意的最大客户数量 = 1 + 1 + 1 + 1 + 7 + 5 = 16.
示例 2：

    输入：customers = [1], grumpy = [0], minutes = 1
    输出：1
 

提示：

- n == customers.length == grumpy.length
- 1 <= minutes <= n <= 2 * 10<sup>4</sup>
- 0 <= customers[i] <= 1000
- grumpy[i] == 0 or 1


## 思路

    /*
    首先 找到不改变的时候客人就满意的数量和 同时更新数组
    这样问题就转变为 求数组指定长度最大和的问题
    时间复杂度 O(n) 空间复杂度为O（1）
    */

## 解法
```java

class Solution {
    /*
    首先 找到不改变的时候客人就满意的数量和 同时更新数组
    这样问题就转变为 求数组指定长度最大和的问题
    时间复杂度 O(n) 空间复杂度为O（1）
    */
    public int maxSatisfied(int[] customers, int[] grumpy, int x) {
        int sum = 0, len = customers.length;
        for (int i = 0; i < len; i++) {
            if (grumpy[i] == 0){
                sum += customers[i];
                customers[i] = 0;
            } 
        }
        int num = customers[0];
        int maxval = customers[0];
        for (int i = 1; i < len; i++){
            if (i < x) num = num + customers[i];
            else num = num + customers[i] - customers[i - x];
            maxval = Math.max(maxval, num);
        }
        
        return (sum + maxval);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
