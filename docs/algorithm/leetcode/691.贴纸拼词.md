---
title: 贴纸拼词
date: 2022-09-25 23:19:38
permalink: /pages/0fa1e2/
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

我们有 n 种不同的贴纸。每个贴纸上都有一个小写的英文单词。

您想要拼写出给定的字符串 target ，方法是从收集的贴纸中切割单个字母并重新排列它们。如果你愿意，你可以多次使用每个贴纸，每个贴纸的数量是无限的。

返回你需要拼出 target 的最小贴纸数量。如果任务不可能，则返回 -1 。

注意：在所有的测试用例中，所有的单词都是从 1000 个最常见的美国英语单词中随机选择的，并且 target 被选择为两个随机单词的连接。

 

示例 1：

    输入： stickers = ["with","example","science"], target = "thehat"
    输出：3
    解释：
    我们可以使用 2 个 "with" 贴纸，和 1 个 "example" 贴纸。
    把贴纸上的字母剪下来并重新排列后，就可以形成目标 “thehat“ 了。
    此外，这是形成目标字符串所需的最小贴纸数量。
示例 2:

    输入：stickers = ["notice","possible"], target = "basicbasic"
    输出：-1
    解释：我们不能通过剪切给定贴纸的字母来形成目标“basicbasic”。
 

提示:

- n == stickers.length
- 1 <= n <= 50
- 1 <= stickers[i].length <= 10
- 1 <= target.length <= 15
- stickers[i] 和 target 由小写英文单词组成


## 思路

无脑枚举+记忆化剪枝

## 解法
```java

class Solution {

    // 无脑枚举+记忆化剪枝
public int minStickers(String[] stickers, String target) {
        int l = target.length();
        long full = (1<<l)-1;
        Map<Long,Integer> memory = new HashMap<>();
        memory.put(full,0);
        return count(stickers,target,0,memory);
    }

    public long contribute(String target, long state, String sticker){
        int[] val = new int[26];
        for(int i = 0 ; i < sticker.length() ; i++){
            val[sticker.charAt(i)-'a']++;
        }
        int n = target.length();
        for(int i = 0 ; i < n ; i++){
            if(((state>>i)&1) == 0){
                if(val[target.charAt(n-i-1)-'a'] > 0){
                    state += (1<<i);
                    val[target.charAt(n-i-1)-'a']--;
                }
            }
        }
        return state;
    }

    public int count(String[] stickers, String target, long state, Map<Long,Integer> memory){
        if(memory.containsKey(state)){
            return memory.get(state);
        }
        long temp;
        int val = Integer.MAX_VALUE;
        int n = stickers.length;
        int amount;
        for(int i = 0 ; i < n ; i++){
            temp = contribute(target,state,stickers[i]);
            if(temp != state){
                amount = count(stickers,target,temp,memory);
                if(amount != -1){
                    val = Math.min(val,1+amount);
                }
            }
        }
        if(val == Integer.MAX_VALUE){
            memory.put(state,-1);
            return -1;
        }
        memory.put(state,val);
        return val;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
