

## 题目

爱丽丝和鲍勃继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。

爱丽丝和鲍勃轮流进行，爱丽丝先开始。最初，M = 1。

在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。

游戏一直持续到所有石子都被拿走。

假设爱丽丝和鲍勃都发挥出最佳水平，返回爱丽丝可以得到的最大数量的石头。

 

示例 1：

    输入：piles = [2,7,9,4,4]
    输出：10
    解释：如果一开始Alice取了一堆，Bob取了两堆，然后Alice再取两堆。爱丽丝可以得到2 + 4 + 4 = 10堆。如果Alice一开始拿走了两堆，那么Bob可以拿走剩下的三堆。在这种情况下，Alice得到2 + 7 = 9堆。返回10，因为它更大。
示例 2:

    输入：piles = [1,2,3,4,5,100]
    输出：104
 

提示：

- 1 <= piles.length <= 100
- 1 <= piles[i] <= 10<sup>4</sup>

## 思路

int[][] dp = new int[m][m+1];  //dp[i][j] 表示从i到m-1的石头堆里，当M = j时可以取到的最大数量

## 解法
```java

class Solution {
    public int stoneGameII(int[] piles) {
        int m = piles.length, sum = 0;

        int[][] dp = new int[m][m+1];  //dp[i][j] 表示从i到m-1的石头堆里，当M = j时可以取到的最大数量

        // 从后向前推
        for(int i = m-1; i >= 0; i--){ // 遍历石头
            sum += piles[i]; //从i开始取，取完的总数量

            for(int j = 1; j <= m; j++){  // 遍历M
                if(i + j*2 >= m){
                    // 此时可以全部取完
                    dp[i][j] = sum;
                }else{
                    // 不能全部取完，那就尽量取最多，即保证下一位取得最少
                    int nextMin = Integer.MAX_VALUE;
                    for(int x = 1; x <= 2*j; x++){
                        // 当前的M = j，则当前玩家可以取的数量在[1,2*j]之间，即x
                        // 计算下一位的取值，下一位玩家从i+x处开始取石头,取到的最大值前面已经算过了，即dp[i+x][Math.max(x,j)];
                        int V = dp[i+x][Math.max(x,j)];
                        nextMin = nextMin > V? V:nextMin;
                    }
                    dp[i][j] = sum-nextMin;
                }
            }
        }
        return dp[0][1];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
