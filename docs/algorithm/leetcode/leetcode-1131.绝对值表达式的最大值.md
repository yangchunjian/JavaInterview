
## 题目

给你两个长度相等的整数数组，返回下面表达式的最大值：

|arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

其中下标 i，j 满足 0 <= i, j < arr1.length。

 

示例 1：

    输入：arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
    输出：13
示例 2：

    输入：arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
    输出：20
 

提示：

- 2 <= arr1.length == arr2.length <= 40000
- -10^6 <= arr1[i], arr2[i] <= 10^6


## 思路

//  |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|

## 解法
```java

class Solution {
    public int maxAbsValExpr(int[] arr1, int[] arr2) {
    //  |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
        int result=0,n=arr1.length;
        int sign[]={1,-1};
        for(int first: sign){
            for(int second: sign){
                int max=Integer.MIN_VALUE,min=Integer.MAX_VALUE;
                for (int i = 0; i < n; i++) {
                    int tmp=arr1[i] + first*arr2[i] + second*i;
                    max=Math.max(max,tmp);
                    min=Math.min(min,tmp);
                }
                result =Math.max(result,max-min);
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
