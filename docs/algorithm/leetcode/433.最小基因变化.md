---
title: 最小基因变化
date: 2022-07-24 15:43:45
permalink: /pages/1d5649/
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

基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。


    例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。

另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 bank 中）

给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。

 

示例 1：

    输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
    输出：1
示例 2：

    输入：start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
    输出：2
示例 3：

    输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
    输出：3
 

提示：

- start.length == 8
- end.length == 8
- 0 <= bank.length <= 10
- bank[i].length == 8
- start、end 和 bank[i] 仅由字符 ['A', 'C', 'G', 'T'] 组成



## 思路

    Deque

## 解法
```java

class Solution {
    
    public int minMutation(String start, String end, String[] bank) {
        // 将bank转换成hashset，这样查询就是o1时间复杂度
        Set<String> banker = Arrays.stream(bank).collect(Collectors.toSet());  
        // 如果end不是有效基因，直接返回-1  
        if(!banker.contains(end)){
            return -1;
        }
        // 创建个队列，以便于bfs遍历
        Deque<String> queue = new ArrayDeque<>();
        // 记录访问过的基因
        Set<String> visited = new HashSet<>();
        // 将start放入队列
        queue.offer(start);
        visited.add(start);
        int res = 0;

        while(!queue.isEmpty()){
            int size = queue.size();
            res++;
            for(int num = 0; num < size; num++){
                String string = queue.poll();
                for(int i = 0; i < string.length(); i++){
                    StringBuilder str = new StringBuilder(string);
                    String[] change = new String[4];
                    change[0] = str.replace(i, i + 1, "A").toString();
                    change[1] = str.replace(i, i + 1, "C").toString();
                    change[2] = str.replace(i, i + 1, "G").toString();
                    change[3] = str.replace(i, i + 1, "T").toString();
                    for(int j = 0; j < 4; j++){
                        if(change[j].equals(end)){
                            return res;
                        }
                        if(banker.contains(change[j]) && !visited.contains(change[j])){
                            queue.offer(change[j]);
                            visited.add(change[j]);
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
