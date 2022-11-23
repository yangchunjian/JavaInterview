
## 题目

给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

返回一对观光景点能取得的最高分。

 

示例 1：

    输入：values = [8,1,5,2,6]
    输出：11
    解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11
示例 2：

    输入：values = [1,2]
    输出：2
 

提示：

- 2 <= values.length <= 5 * 10<sup>4</sup>
- 1 <= values[i] <= 1000


## 思路

dp来做，稍微给这个公式变形成A[i]+i+A[j]-j，这样就可以看成是左A[i]+i和右A[j]-j两部分和的最大值。随着遍历数组，我们对两部分和取最大值，并且若当前的值—下标对之和比之前更大，我们就更新left部分的值即可。


## 解法
```java

class Solution {
    public int maxScoreSightseeingPair(int[] A) {
        
        int left = A[0], res = Integer.MIN_VALUE;
        for (int j = 1; j < A.length; j++) {
            
            res = Math.max(res, left + A[j] - j);
            left = Math.max(left, A[j] + j);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
