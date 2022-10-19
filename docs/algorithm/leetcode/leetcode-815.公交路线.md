---
title: 公交路线
date: 2022-10-19 21:20:58
permalink: /pages/97c657/
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

给你一个数组 routes ，表示一系列公交线路，其中每个 routes[i] 表示一条公交线路，第 i 辆公交车将会在上面循环行驶。

- 例如，路线 routes[0] = [1, 5, 7] 表示第 0 辆公交车会一直按序列 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... 这样的车站路线行驶。

现在从 source 车站出发（初始时不在公交车上），要前往 target 车站。 期间仅可乘坐公交车。

求出 最少乘坐的公交车数量 。如果不可能到达终点车站，返回 -1 。

 

示例 1：

    输入：routes = [[1,2,7],[3,6,7]], source = 1, target = 6
    输出：2
    解释：最优策略是先乘坐第一辆公交车到达车站 7 , 然后换乘第二辆公交车到车站 6 。 
示例 2：

    输入：routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
    输出：-1
 

提示：

- 1 <= routes.length <= 500.
- 1 <= routes[i].length <= 10<sup>5</sup>
- routes[i] 中的所有值 互不相同
- sum(routes[i].length) <= 10<sup>5</sup>
- 0 <= routes[i][j] < 10<sup>6</sup>
- 0 <= source, target < 10<sup>6</sup>


## 思路

    // java BFS, 难点就是图怎么建立，其他都是直接套模板；

## 解法
```java

class Solution {
    public int numBusesToDestination(int[][] routes, int source, int target) {
        if(source == target) return 0;
        Map<Integer, List<Integer>> map = new HashMap<>();
        Deque<Integer> que = new LinkedList<>();
        boolean[] mark = new boolean[505];
        int row = routes.length;
        // 思想就是保存站点所能经过的路线；可达同一站点的路线之间相连，且距离是1；
        for(int i=0; i<row; i++){    
            for(int j=0; j<routes[i].length;j++){
                if(!map.containsKey(routes[i][j])){
                    map.put(routes[i][j], new LinkedList<Integer>());
                }
                List<Integer> list = map.get(routes[i][j]);
                list.add(i);
            }
        }
        
        List<Integer> list = map.get(source);
        for(int k = 0; k<list.size(); k++){
            que.add(list.get(k));
            mark[list.get(k)] = true;
        }
        int res = 0;
        while(!que.isEmpty()){
            res++;
            int size = que.size();
            for(int i = 0; i<size; i++){
                int st = que.poll();            // 取出一个路线
                for(int j = 0; j<routes[st].length; j++){          // 当前路线上所有站
                    if(routes[st][j] == target) return res;        // 找到结果就返回
                    // 扩展：将当前路线上的站可达的其他路线加入到队列，勿重复加入一个路线到队列。   
                    List<Integer> temp = map.get(routes[st][j]);   
                    for(int k = 0; k<temp.size(); k++){
                        if(!mark[temp.get(k)]){
                            que.add(temp.get(k));
                            mark[temp.get(k)] = true;
                        }
                    }
                }
            }
        }
        return -1;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
