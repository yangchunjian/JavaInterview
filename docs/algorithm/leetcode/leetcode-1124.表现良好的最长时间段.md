

## 题目

给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。

所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

请你返回「表现良好时间段」的最大长度。

 

示例 1：

    输入：hours = [9,9,6,0,6,6,9]
    输出：3
    解释：最长的表现良好时间段是 [9,9,6]。
示例 2：

    输入：hours = [6,6,6]
    输出：0
 

提示：

- 1 <= hours.length <= 10<sup>4</sup>
- 0 <= hours[i] <= 16

## 思路

        //子数组arr[i]~arr[j]的和转为pre[i]-pre[j]
        //问题转为求满足pre[j]>pre[i]的情况下求最长j-i，即同962

## 解法
```java

class Solution {
    public int longestWPI(int[] hours) {

        int n = hours.length;
        for(int i=0; i<n; i++){
            if(hours[i]>8) hours[i] = 1;
            else hours[i] = -1;
        }
        int[] pre = new int[n+1];
        for(int i=1; i<=n; i++){
            pre[i] = pre[i-1] + hours[i-1];
        }
        //子数组arr[i]~arr[j]的和转为pre[i]-pre[j]
        // 问题转为求满足pre[j]>pre[i]的情况下求最长j-i，即同962
        int max = 0;//利用好max进行剪枝
        for(int i=0; i<pre.length-max; i++){
            for(int j=pre.length-1; j>i+max; j--){
                if(pre[j]>pre[i]){
                    max = j-i;
                    break;
                }
            }
        }
        return max;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
