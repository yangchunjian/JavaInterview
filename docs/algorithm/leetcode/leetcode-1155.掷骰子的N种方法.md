
## 题目

这里有 n 个一样的骰子，每个骰子上都有 k 个面，分别标号为 1 到 k 。

给定三个整数 n ,  k 和 target ，返回可能的方式(从总共 kn 种方式中)滚动骰子的数量，使正面朝上的数字之和等于 target 。

答案可能很大，你需要对 10<sup>9</sup> + 7 取模 。

 

示例 1：

    输入：n = 1, k = 6, target = 3
    输出：1
    解释：你扔一个有6张脸的骰子。
    得到3的和只有一种方法。
示例 2：

    输入：n = 2, k = 6, target = 7
    输出：6
    解释：你扔两个骰子，每个骰子有6个面。
    得到7的和有6种方法1+6 2+5 3+4 4+3 5+2 6+1。
示例 3：

    输入：n = 30, k = 30, target = 500
    输出：222616187
    解释：返回的结果必须是对 10^9 + 7 取模。
 

提示：

- 1 <= n, k <= 30
- 1 <= target <= 1000


## 思路

        //d 个骰子投出 [d, df] 的情况
        int[][] dp = new int[d + 1][maxPoint + 1];


## 解法
```java

class Solution {
    public int numRollsToTarget(int d, int f, int target) {
        /*
        dp

        一个骰子最多投出 [1, f] 点
        两个骰子最多投出 [2, 2f] 点

        d 个骰子最多投出 [d, df] 点

        我们从 1 个骰子开始遍历，到 d 个骰子
        */

        int mod = (int)(Math.pow(10, 9) + 7);

        int maxPoint = d * f;
        if(target > maxPoint){
            return 0;
        }
        //d 个骰子投出 [d, df] 的情况
        int[][] dp = new int[d + 1][maxPoint + 1];

        //初始化一个骰子的情况
        for(int i = 1; i <= f; i++){
            dp[1][i] = 1;
        }

        for(int i = 2; i <= d; i++){
            //i 个骰子能投出的点数
            for(int j = i; j <= i * f; j++){
                /*
                当前骰子能投出的点数
                k <= Math.min(j - 1, f) 理由如下：
                比如 f = 6，那么一个骰子能投出 [1, 6] 点，但是 j = 2，即最多 i 个骰子只能投出 2 点
                那么第一个骰子投出 1 点，第二个骰子同时只能投出 1 点，而不能投出 [2, 6] 点，因此 j - 1 和 f 取最小
                */
                for(int k = 1; k <= Math.min(j - 1, f); k++){
                    dp[i][j] += dp[i - 1][j - k];
                    dp[i][j] %= mod;
                }
            }
        }
        return dp[d][target];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
