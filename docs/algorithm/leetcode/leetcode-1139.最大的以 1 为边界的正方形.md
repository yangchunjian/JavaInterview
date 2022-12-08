

## 题目

给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 0。

 

示例 1：

    输入：grid = [[1,1,1],[1,0,1],[1,1,1]]
    输出：9
示例 2：

    输入：grid = [[1,1,0,0]]
    输出：1
 

提示：

- 1 <= grid.length <= 100
- 1 <= grid[0].length <= 100
- grid[i][j] 为 0 或 1


## 思路

int[][][] dp = new int[m+1][n+1][2];

## 解法
```java

class Solution {
    public int largest1BorderedSquare(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][][] dp = new int[m+1][n+1][2];
        // 0 up 1 left;
        int ans = 0;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (grid[i-1][j-1] == 0) continue; // 如果是0则不要继续了
                dp[i][j][0] = dp[i-1][j][0] + 1; // 求出up情况下连续的个数
                dp[i][j][1] = dp[i][j-1][1] + 1; // 求出left情况下连续的个数
                int min = Math.min(dp[i][j][0], dp[i][j][1]); // 拿出两者较小的长度，因为四条边都要相等。
                for (int k = 0; k < min; k++) {//拿出后并不一定就是min这个长度，有可能另外两条边比较短，没有min长，所以要一个一个判断。
                    // 判断另外的两条边是否都比当前长度大。
                    if (dp[i-k][j][1] >= k + 1 && dp[i][j-k][0] >= k + 1) ans = Math.max(ans, k + 1);
                }
            }
        }
        return ans * ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
