---
title: 课程表II
date: 2022-05-23 17:02:36
permalink: /pages/599896/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
---




## 题目
现在你总共有 numCourses 门课需要选，记为 0 到 numCourses - 1。给你一个数组 prerequisites ，其中 prerequisites[i] = [ai, bi] ，表示在选修课程 ai 前 必须 先选修 bi 。

例如，想要学习课程 0 ，你需要先完成课程 1 ，我们用一个匹配来表示：[0,1] 。

返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 任意一种 就可以了。如果不可能完成所有课程，返回 一个空数组 。

 

示例 1：

    输入：numCourses = 2, prerequisites = [[1,0]]
    输出：[0,1]
    解释：总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。
示例 2：

    输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    输出：[0,2,1,3]
    解释：总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
    因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
示例 3：

    输入：numCourses = 1, prerequisites = []
    输出：[0]
 

提示：
- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= numCourses * (numCourses - 1)
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- ai != bi
- 所有[ai, bi] 互不相同


## 思路

    首先我们应该明确这么一点，在队列中的元素都是 0
    入度的课程，即没有需要前修的课程就可以直接学习
    那么我们遍历到该课程，假设学习完，那么它指向的课程入度都需要
    -1，当它指向的某个课程入度为 0 的时候，同时也需要将该课程添加到队列中

## 解法
```java

class Solution {
    public int[] findOrder(int numCourses, int[][] prerequisites) {
            
        /*      
        我们先记录每个节点的入度，以及使用 map 记录每个节点所能到达的其他节点
        
        当某个节点的入度为 0，表示没有节点指向它，即该课程不需要先修其他课程，那么我们就可以从 该课程 出发

        然后我们将入度为 0 的节点存储进队列中，将它和它所能到达的节点 next 的通路断开，即 next 的入度 -1，
        当减为 0 的时候，表示入度为 0，那么添加进队列中
        */

        //存储某个节点能够到达的其他节点集合（这里最开始我是使用 map 的，后面发现节点是 [0, n -1] ，那么节点值可以直接作为下标
        List<Integer>[] lists = new ArrayList[numCourses];
        //记录某个节点的入度
        int[] points = new int[numCourses];
        for(int[] p : prerequisites){
            /*
            [3, 5] 表示学习 3 之前需要先学习 5
            那么对于 3 来说， 5 指向 3，即 3 的入度 + 1
            而 5 能到达的节点集合需要增加 3 这个节点
            */
            points[p[0]]++;
            if(lists[p[1]] == null){
                lists[p[1]] = new ArrayList<>();
            }
            lists[p[1]].add(p[0]);
        }

        Queue<Integer> queue = new LinkedList<>();
        //找到入度为 0 的节点

        for(int i = 0; i < numCourses; i++){
            //入度为 0，添加到队列中
            if(points[i] == 0){
                queue.add(i);
            }
        }

        //记录遍历的课程顺序
        int[] res = new int[numCourses];
        int idx = 0;

        while(!queue.isEmpty()){
            int size = queue.size();
            /*
            首先我们应该明确这么一点，在队列中的元素都是 0 入度的课程，即没有需要前修的课程就可以直接学习
            那么我们遍历到该课程，假设学习完，那么它指向的课程入度都需要 -1，当它指向的某个课程入度为 0 的时候，同时也需要将该课程添加到队列中
            */
            while(size-- > 0){
                int p = queue.poll();
                res[idx++] = p;
                List<Integer> list = lists[p];
                if(list == null){
                    continue;
                }
                for(int val : list){
                    points[val]--;
                    if(points[val] == 0){
                        queue.add(val);
                    }
                }
            }
        }
        //idx == numCourses 意味着全部课程都访问过了，即最终都能够满足 0 入度的条件，即全部能够学习完成
        return idx == numCourses ? res : new int[0];
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
