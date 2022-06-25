---
title: 单词接龙
date: 2022-05-22 21:07:56
permalink: /pages/3a80c4/
categories: 
  - algorithm
  - leetcode
tags: 
  - null
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
tag: 
  text: java
---


## 题目
字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：

- 每一对相邻的单词只差一个字母。
- 对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意，
  beginWord 不需要在 wordList 中。
- sk == endWord

给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。

 
示例 1：

    输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
    输出：5
    解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
示例 2：

    输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
    输出：0
    解释：endWord "cog" 不在字典中，所以无法进行转换。
 

提示：

- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- wordList[i].length == beginWord.length
- beginWord、endWord 和 wordList[i] 由小写英文字母组成
- beginWord != endWord
- wordList 中的所有字符串 互不相同



## 思路

BFS的思想，返回层数+1

## 解法
```java

class Solution {
    //BFS的思想
   public int ladderLength(String beginWord, String endWord, List<String> wordList) {
		Queue<String> queue = new LinkedList<String>();//少不了队列
		queue.add(beginWord);
		boolean[] marked = new boolean[wordList.size()+1];//少不了标记
		int layer = 1;//注意返回的是层数+1.所以这里直接放1了
		while(!queue.isEmpty()) {//固定的层数记录形式
			layer++;
			int size = queue.size();
			while (size-->0) {
				String cur = queue.poll();
				for (int i = 0; i < wordList.size(); i++) {
					if(marked[i])continue;
					String dic = wordList.get(i);
					if(canChange(dic, cur)) {
						if(dic.equals(endWord))return layer;
						queue.add(dic);
						marked[i] = true;
					}
				}
			}
		}
		
		return 0;
	}
    //是否可以转换的辅助函数
	public boolean canChange(String s,String t) {
		int len = s.length();
		int diff = 0;
		for (int i = 0; i < s.length(); i++) {
			if(s.charAt(i) != t.charAt(i))diff++;
		}
		return diff==1;
	}
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
