---
title: 俄罗斯套娃信封问题
date: 2022-07-28 22:04:05
permalink: /pages/22f35c/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 题目

给你一个二维整数数组 envelopes ，其中 envelopes[i] = [wi, hi] ，表示第 i 个信封的宽度和高度。

当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算 最多能有多少个 信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

注意：不允许旋转信封。

 
示例 1：

    输入：envelopes = [[5,4],[6,4],[6,7],[2,3]]
    输出：3
    解释：最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。
示例 2：

    输入：envelopes = [[1,1],[1,1],[1,1]]
    输出：1
 

提示：

- 1 <= envelopes.length <= 10<sup>5</sup>
- envelopes[i].length == 2
- 1 <= wi, hi <= 10<sup>5</sup>


## 思路

        /**
        O(NlogN)的做法, 按照长度升序, 同长则宽度降序排列, 然后使用O(logN)
        的最长递增子序列解法(链接在评论中)来做即可. 排序后等于把在二维(长、宽)
        上的最长递增子序列问题转换成一维(宽)上的最长递增子序列的查找, 因为对于
        长度来说已经满足递增, 只需要在宽度上也递增即为递增序列, 同长时按宽度降
        序排列的原因是避免同长时宽度小的也被列入递增序列中, 例如[3,3], [3,4]
        如果宽度也按升序来排列, [3,3]和[3,4]会形成递增序列, 而实际上不行.
        **/

## 解法
```java

class Solution {
    public int maxEnvelopes(int[][] envelopes) {
                
        /**
        O(NlogN)的做法, 按照长度升序, 同长则宽度降序排列, 然后使用O(logN)
        的最长递增子序列解法(链接在评论中)来做即可. 排序后等于把在二维(长、宽)
        上的最长递增子序列问题转换成一维(宽)上的最长递增子序列的查找, 因为对于
        长度来说已经满足递增, 只需要在宽度上也递增即为递增序列, 同长时按宽度降
        序排列的原因是避免同长时宽度小的也被列入递增序列中, 例如[3,3], [3,4]
        如果宽度也按升序来排列, [3,3]和[3,4]会形成递增序列, 而实际上不行.
        **/
        int maxL = 0;
        int[] dp = new int[envelopes.length];
        Arrays.sort(envelopes, (a, b) -> (a[0] == b[0] ? b[1]-a[1] : a[0]-b[0]));
        
        for(int[] env : envelopes) {
            int lo = 0, hi = maxL;
            while(lo < hi) {
                int mid = lo+(hi-lo)/2;
                if(dp[mid] < env[1])
                    lo = mid+1;
                else
                    hi = mid;
            }
            dp[lo] = env[1];
            if(lo == maxL)
                maxL++;
        }
        return maxL;
    }
}

```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
