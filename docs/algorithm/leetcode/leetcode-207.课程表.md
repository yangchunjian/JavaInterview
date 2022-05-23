---
title: 课程表
date: 2022-05-23 15:07:55
permalink: /pages/db9a8c/
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

你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

 

示例 1：

    输入：numCourses = 2, prerequisites = [[1,0]]
    输出：true
    解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
示例 2：

    输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
    输出：false
    解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 

提示：

- 1 <= numCourses <= 10<sup>5</sup>
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- prerequisites[i] 中的所有课程对 互不相同



## 思路

    拓扑排序解决
    １．将入度为０的节点加入队列
    ２．出队列的时候将这个顶点的所有临界点的入度减１，并将出队列的元素加入结果集合，如果入度为０则继续入队列
    ３．最后检查结果集合中的元素是否和课程数相同

## 解法
```java


class Solution {
    /*
    拓扑排序解决
    １．将入度为０的节点加入队列
    ２．出队列的时候将这个顶点的所有临界点的入度减１，并将出队列的元素加入结果集合，如果入度为０则继续入队列
    ３．最后检查结果集合中的元素是否和课程数相同
     */
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        //存储各个课程的入度
        int[] input = new int[numCourses];
        //入度为０的顶点个数
        int count = 0;
        LinkedList<Integer> queue = new LinkedList<>();
        for(int[] pre:prerequisites){
            //统计入度
            input[pre[0]]++;
        }
        //寻找入度为０的元素，入队
        for(int i=0;i<numCourses;i++){
            if(input[i]==0){
                queue.addLast(i);
            }
        }

        while(!queue.isEmpty()){
            int node = queue.removeFirst();
            count++;
            //把与node相关的临界点的入度减１
            for(int[] pre:prerequisites){
                if(pre[1]==node){
                    input[pre[0]]--;
                    if(input[pre[0]]==0){
                        queue.addLast(pre[0]);
                    }
                }
            }
        }

        return count==numCourses;
    }
}


```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
