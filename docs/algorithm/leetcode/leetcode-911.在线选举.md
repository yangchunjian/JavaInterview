---
title: 在线选举
date: 2022-10-29 14:41:19
permalink: /pages/00d254/
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

给你两个整数数组 persons 和 times 。在选举中，第 i 张票是在时刻为 times[i] 时投给候选人 persons[i] 的。

对于发生在时刻 t 的每个查询，需要找出在 t 时刻在选举中领先的候选人的编号。

在 t 时刻投出的选票也将被计入我们的查询之中。在平局的情况下，最近获得投票的候选人将会获胜。

实现 TopVotedCandidate 类：

- TopVotedCandidate(int[] persons, int[] times) 使用 persons 和 times 数组初始化对象。
- int q(int t) 根据前面描述的规则，返回在时刻 t 在选举中领先的候选人的编号。

 
示例：

    输入：
    ["TopVotedCandidate", "q", "q", "q", "q", "q", "q"]
    [[[0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]], [3], [12], [25], [15], [24], [8]]
    输出：
    [null, 0, 1, 1, 0, 0, 1]
    
    解释：
    TopVotedCandidate topVotedCandidate = new TopVotedCandidate([0, 1, 1, 0, 0, 1, 0], [0, 5, 10, 15, 20, 25, 30]);
    topVotedCandidate.q(3); // 返回 0 ，在时刻 3 ，票数分布为 [0] ，编号为 0 的候选人领先。
    topVotedCandidate.q(12); // 返回 1 ，在时刻 12 ，票数分布为 [0,1,1] ，编号为 1 的候选人领先。
    topVotedCandidate.q(25); // 返回 1 ，在时刻 25 ，票数分布为 [0,1,1,0,0,1] ，编号为 1 的候选人领先。（在平局的情况下，1 是最近获得投票的候选人）。
    topVotedCandidate.q(15); // 返回 0
    topVotedCandidate.q(24); // 返回 0
    topVotedCandidate.q(8); // 返回 1
 

提示：

- 1 <= persons.length <= 5000
- times.length == persons.length
- 0 <= persons[i] < persons.length
- 0 <= times[i] <= 10<sup>9</sup>
- times 是一个严格递增的有序数组
- times[0] <= t <= 10<sup>9</sup>
- 每个测试用例最多调用 10<sup>4</sup> 次 q


## 思路

// 首先，时间数组是严格递增的，每个候选人的得票数，随着时间的增加，同样是只增不减的。

// 那么，在获取某个时间得票最多的人，只要将 当前时间 获得 选票 的人的得票数，之前获得选票最多的人的得票数比较，就能知道，现在获取得票数最多的候选人是谁，然后我们更新当前时间选举领先的候选人编号即可。

// 由于 t 时刻很有可能没有任何选票，因此需要找到距离 t 时刻 之前最近时刻 的领先候选人，所以用一个有序集合维护某个时刻 t 领先的候选人编号，同时用一个hash表维护每个候选人的得票数。


    TreeMap.floorEntry
    
    
## 解法
```java

class TopVotedCandidate {
// 首先，时间数组是严格递增的，每个候选人的得票数，随着时间的增加，同样是只增不减的。

// 那么，在获取某个时间得票最多的人，只要将 当前时间 获得 选票 的人的得票数，之前获得选票最多的人的得票数比较，就能知道，现在获取得票数最多的候选人是谁，然后我们更新当前时间选举领先的候选人编号即可。

// 由于 t 时刻很有可能没有任何选票，因此需要找到距离 t 时刻 之前最近时刻 的领先候选人，所以用一个有序集合维护某个时刻 t 领先的候选人编号，同时用一个hash表维护每个候选人的得票数。


    // 人获得的票数
    Map<Integer,Integer> cntMap = new HashMap<>();
    // 当前时间领先的人
    TreeMap<Integer,Integer> tm = new TreeMap<>();
    public TopVotedCandidate(int[] persons, int[] times) {
        int maxPersonId = -1;
        for(int i = 0;i < persons.length;i++) {
            // 人的得票增加
            int cnt = cntMap.getOrDefault(persons[i],0) + 1;
            cntMap.put(persons[i],cnt);
            // 之前得票最多的人
            int maxCnt = cntMap.getOrDefault(maxPersonId,0);
            if(cnt >= maxCnt) {
                maxPersonId = persons[i];
            }
            // 维护当前时间得票最多的personId
            tm.put(times[i],maxPersonId);
        }
    }
    
    public int q(int t) {
        return tm.floorEntry(t).getValue();
    }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * TopVotedCandidate obj = new TopVotedCandidate(persons, times);
 * int param_1 = obj.q(t);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
