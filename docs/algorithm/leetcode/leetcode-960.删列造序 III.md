

## 题目

给定由 n 个小写字母字符串组成的数组 strs ，其中每个字符串长度相等。

选取一个删除索引序列，对于 strs 中的每个字符串，删除对应每个索引处的字符。

比如，有 strs = ["abcdef","uvwxyz"] ，删除索引序列 {0, 2, 3} ，删除后为 ["bef", "vyz"] 。

假设，我们选择了一组删除索引 answer ，那么在执行删除操作之后，最终得到的数组的行中的 每个元素 都是按字典序排列的（即 (strs[0][0] <= strs[0][1] <= ... <= strs[0][strs[0].length - 1]) 和 (strs[1][0] <= strs[1][1] <= ... <= strs[1][strs[1].length - 1]) ，依此类推）。

请返回 answer.length 的最小可能值 。

 

示例 1：

    输入：strs = ["babca","bbazb"]
    输出：3
    解释：
    删除 0、1 和 4 这三列后，最终得到的数组是 A = ["bc", "az"]。
    这两行是分别按字典序排列的（即，A[0][0] <= A[0][1] 且 A[1][0] <= A[1][1]）。
    注意，A[0] > A[1] —— 数组 A 不一定是按字典序排列的。
示例 2：

    输入：strs = ["edcba"]
    输出：4
    解释：如果删除的列少于 4 列，则剩下的行都不会按字典序排列。
示例 3：

    输入：strs = ["ghi","def","abc"]
    输出：0
    解释：所有行都已按字典序排列。
 

提示：

- n == strs.length
- 1 <= n <= 100
- 1 <= strs[i].length <= 100
- strs[i] 由小写英文字母组成

## 思路

最长上升子序列问题！



## 解法
```java

class Solution {
    public int minDeletionSize(String[] A) {
        int len = A[0].length();
        int[] dp = new int[len];
        Arrays.fill(dp, 1);  
        //完全按照最长上升子序列问题来做                  
        for(int i = 0; i < len; i ++){
            for(int j = 0; j < i; j ++) {
                //只不过更新状态时需要遍历所有的字符串，比较第i列和第j列
                boolean flag = false;
                for(String a : A) {
                    if(a.charAt(j) <= a.charAt(i)) {
                        flag = true;
                    }
                    else {
                        flag = false;
                        break;
                    }
                }
                if(flag) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }                   
            }
        }
        //找出符合条件的最长上升子序列：即需要保留的列数
        int keep_len = 0;
        for(int d : dp) {
            keep_len = Math.max(d, keep_len);
        }
        //返回需要删除的列数
        return len - keep_len;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
