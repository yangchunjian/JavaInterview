

## 题目

泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

示例 1：

    输入：n = 4
    输出：4
    解释：
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4
示例 2：

    输入：n = 25
    输出：1389537
 

提示：

- 0 <= n <= 37
- 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。

## 思路

直接用递归的话会超时，给定的通项公式可以进一步推导 T(n+3) = T(n+2) + T(n+1) +T(n+0)， T(n+4) = T(n+3) + T(n+2) + T(n+1)， 两者相减 T(n+4) - T(n+3) = T(n+3) - T(n)， 所以T(n) = 2T(n-1) - T(n+4)



## 解法
```java

class Solution {
    public int tribonacci(int n) {
        switch (n) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 4;
            default:
                return  2 * tribonacci(n - 1) - tribonacci(n - 4);
        }
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
