---
title: 打开转盘锁
date: 2022-08-07 20:12:04
permalink: /pages/07654d/
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

你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。

每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。

锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。

列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。

字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。

 

示例 1:

    输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
    输出：6
    解释：
    可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
    注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
    因为当拨动到 "0102" 时这个锁就会被锁定。
示例 2:

    输入: deadends = ["8888"], target = "0009"
    输出：1
    解释：把最后一位反向旋转一次即可 "0000" -> "0009"。
示例 3:

    输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
    输出：-1
    解释：无法旋转到目标数字且不被锁定。
 

提示：

- 1 <= deadends.length <= 500
- deadends[i].length == 4
- target.length == 4
- target 不在 deadends 之中
- target 和 deadends[i] 仅由若干位数字组成



## 思路

类似于图的bsf，0000为起始点，9000,1000,0900,0100,0090,0010,0001,0009这八个节点与是起始点的可达点，注意过滤这一层已经遍历过得节点和死亡节点。

## 解法
```java

class Solution {
    public int openLock(String[] deadends, String target) {

        HashSet<String> dead = new HashSet<>(Arrays.asList(deadends));
        Set<String> visited = new HashSet<>();
        String start="0000";
        Queue<String> queue1 = new LinkedList<>();
        Queue<String> queue2 = new LinkedList<>();
        queue1.offer(start);
        int step=0;
        if(dead.contains(target)||dead.contains("0000")) return -1;
        while(!queue1.isEmpty()){
            String cur=queue1.poll();
            if(target.equals(cur)){
                return step;
            }
            List<String> nexts= getNexts(cur);
            for(String s:nexts){
                if(!dead.contains(s)&&!visited.contains(s)){
                    visited.add(s);
                    queue2.offer(s);
                }
            }
            if(queue1.isEmpty()){
                queue1=queue2;
                queue2=new LinkedList<String>();
                step++;
            }
            
        }
        return -1;
    }
    /**
    *获取邻接的所有节点
    */
    public List<String> getNexts(String cur){
        List<String> list = new ArrayList<>();
        
        for(int i=0;i<4;i++){
            StringBuilder curSb= new StringBuilder(cur);
            curSb.setCharAt(i,(char)cur.charAt(i)=='0'?'9':(char)(cur.charAt(i)-1));
            list.add(curSb.toString());
            curSb.setCharAt(i,(char)cur.charAt(i)=='9'?'0':(char)(cur.charAt(i)+1));
            list.add(curSb.toString());
               
        }
        return list;
        
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
