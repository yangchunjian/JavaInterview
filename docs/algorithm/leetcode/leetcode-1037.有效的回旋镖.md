
## 题目

给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，如果这些点构成一个 回旋镖 则返回 true 。

回旋镖 定义为一组三个点，这些点 各不相同 且 不在一条直线上 。

 

示例 1：

    输入：points = [[1,1],[2,3],[3,2]]
    输出：true
示例 2：

    输入：points = [[1,1],[2,2],[3,3]]
    输出：false
 

提示：

- points.length == 3
- points[i].length == 2
- 0 <= xi, yi <= 100


## 思路

思路：通过三个点写出两条直线方程，通过判断方程的斜率来判断三个点是否在同一条直线上（此时斜率相等） 步骤：

1、求出k1 = (y1-y2)/(x1-x2)；k2 = (y1-y3)/(x1-x3);

2、通过k1 == k2判断斜率是否相等（true则三个点在一条直线上）

3、判断k1 == k2即判断 (y1-y2)/(x1-x2) == (y1-y3)/(x1-x3)，两边同时乘以(x1-x2)*(x1-x3)得： (y1 - y2)*(x1 - x3) == (y1 - y3)*(x1 - x2)，将除法转变为了乘法

4、特殊情况：x1 = x2 = x3，此时两条直线斜率均不存在（垂直于x轴），但三个点一定在同一条直线x=x1上，直接输出false



## 解法
```java

class Solution {
    public boolean isBoomerang(int[][] points) {

        int x1 = points[0][0],x2 = points[1][0],x3 = points[2][0];
        int y1 = points[0][1],y2 = points[1][1],y3 = points[2][1];
        if(x1 == x2 && x1 == x3)return false;
        return (y1 - y2)*(x1 - x3) != (y1 - y3)*(x1 - x2);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
