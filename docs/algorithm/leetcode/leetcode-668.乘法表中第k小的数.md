
## 题目

几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第 k 小的数字吗？

乘法表是大小为 m x n 的一个整数矩阵，其中 mat[i][j] == i * j（下标从 1 开始）。

给你三个整数 m、n 和 k，请你在大小为 m x n 的乘法表中，找出并返回第 k 小的数字。

 

示例 1：


    输入：m = 3, n = 3, k = 5
    输出：3
    解释：第 5 小的数字是 3 。
示例 2：


    输入：m = 2, n = 3, k = 6
    输出：6
    解释：第 6 小的数字是 6 。
 

提示：

- 1 <= m, n <= 3 * 10<sup>4</sup>
- 1 <= k <= m * n


## 思路

二分查找

## 解法
```java

class Solution {
    public int findKthNumber(int m, int n, int k) {

        int l = 1, r = m * n;
        while (l < r) {
            int mid = l + r >> 1;
            if (check(mid, m, n, k)) r = mid;
            else l = mid + 1;
        }
        return l;
    }

    public boolean check(int x, int m, int n, int k) {
        int cnt = 0;
        for (int i = 1; i <= m; i++) {
            cnt += Math.min(x, i * n) / i;
        }
        return cnt >= k;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
