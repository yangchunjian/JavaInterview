


## 题目

给出矩阵 matrix 和目标值 target，返回元素总和等于目标值的非空子矩阵的数量。

子矩阵 x1, y1, x2, y2 是满足 x1 <= x <= x2 且 y1 <= y <= y2 的所有单元 matrix[x][y] 的集合。

如果 (x1, y1, x2, y2) 和 (x1', y1', x2', y2') 两个子矩阵中部分坐标不同（如：x1 != x1'），那么这两个子矩阵也不同。

 

示例 1：



    输入：matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
    输出：4
    解释：四个只含 0 的 1x1 子矩阵。
示例 2：

    输入：matrix = [[1,-1],[-1,1]], target = 0
    输出：5
    解释：两个 1x2 子矩阵，加上两个 2x1 子矩阵，再加上一个 2x2 子矩阵。
示例 3：

    输入：matrix = [[904]], target = 0
    输出：0
 

提示：

- 1 <= matrix.length <= 100
- 1 <= matrix[0].length <= 100
- -1000 <= matrix[i] <= 1000
- -10^8 <= target <= 10^8


## 思路

前缀和

## 解法
```java

class Solution {
    public int numSubmatrixSumTarget(int[][] matrix, int target) {
        // 前缀和 减去正上方矩阵 正左方矩阵, 加上左上方矩阵, 就是某个范围内的矩阵
        int[][] prefix = new int[matrix.length + 1][matrix[0].length + 1];
        for (int row = 0; row < matrix.length; row++) {
            for (int column = 0; column < matrix[0].length; column++) {
                prefix[row + 1][column + 1] = prefix[row + 1][column] + prefix[row][column + 1] - prefix[row][column]
                        + matrix[row][column];
            }
        }

        // 暴力吧
        int result = 0;
        for (int startRow = 1; startRow <= matrix.length; startRow++) {
            for (int startColumn = 1 ; startColumn <= matrix[0].length; startColumn++) {
                for (int endRow = startRow; endRow <= matrix.length; endRow++) {
                    for (int endColumn = startColumn; endColumn <= matrix[0].length; endColumn++) {
                        if (prefix[endRow][endColumn] - prefix[startRow - 1][endColumn] - prefix[endRow][startColumn - 1] + prefix[startRow - 1][startColumn - 1] == target) {
                            result++;
                        }
                    }
                }
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
