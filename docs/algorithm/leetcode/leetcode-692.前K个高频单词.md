---
title: 前K个高频单词
date: 2022-09-25 23:25:49
permalink: /pages/5dbfb5/
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

给定一个单词列表 words 和一个整数 k ，返回前 k 个出现次数最多的单词。

返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率， 按字典顺序 排序。

 

示例 1：

    输入: words = ["i", "love", "leetcode", "i", "love", "coding"], k = 2
    输出: ["i", "love"]
    解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
        注意，按字母顺序 "i" 在 "love" 之前。
示例 2：

    输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
    输出: ["the", "is", "sunny", "day"]
    解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
        出现次数依次为 4, 3, 2 和 1 次。
 

注意：

- 1 <= words.length <= 500
- 1 <= words[i] <= 10
- words[i] 由小写英文字母组成。
- k 的取值范围是 [1, 不同 words[i] 的数量]
-  

进阶：尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。


## 思路

        // 建立哈希表统计单词频率
        // 小顶堆，相同频率下，字母顺序高的在前，方便入栈
        // 维持topK频率的单词
        // 利用栈特性


## 解法
```java

class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        Map<String, Integer> map = new HashMap<>(words.length);
        // 建立哈希表统计单词频率
        for (String word : words) {
            map.put(word, map.getOrDefault(word, 0) + 1);
        }
        // 小顶堆，相同频率下，字母顺序高的在前，方便入栈
        PriorityQueue<String> queue = new PriorityQueue<>((o1, o2) -> {
            Integer o1Count = map.get(o1);
            Integer o2Count = map.get(o2);
            if (o1Count.equals(o2Count)) {
                return o2.compareTo(o1);
            } else {
                return o1Count - o2Count;
            }
        });
        // 维持topK频率的单词
        for (String word : map.keySet()) {
            queue.offer(word);
            if (queue.size() > k) {
                queue.poll();
            }
        }
        // 利用栈特性
        LinkedList<String> stack = new LinkedList<>();
        while (!queue.isEmpty()) {
            stack.push(queue.poll());
        };
        return stack;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
