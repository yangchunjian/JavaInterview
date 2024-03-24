---
title: O(1) 时间插入、删除和获取随机元素 - 允许重复
date: 2022-06-17 09:20:12
permalink: /pages/2955cb/
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
titleTag: Java
---


## 题目

RandomizedCollection 是一种包含数字集合(可能是重复的)的数据结构。它应该支持插入和删除特定元素，以及删除随机元素。

实现 RandomizedCollection 类:

- RandomizedCollection()初始化空的 RandomizedCollection 对象。
- bool insert(int val) 将一个 val 项插入到集合中，即使该项已经存在。如果该项不存在，则返回 true ，否则返回 false 。
- bool remove(int val) 如果存在，从集合中移除一个 val 项。如果该项存在，则返回 true ，否则返回 false 。注意，如果 val 在集合中出现多次，我们只删除其中一个。
- int getRandom() 从当前的多个元素集合中返回一个随机元素。每个元素被返回的概率与集合中包含的相同值的数量 线性相关 。
- 您必须实现类的函数，使每个函数的 平均 时间复杂度为 O(1) 。

注意：生成测试用例时，只有在 RandomizedCollection 中 至少有一项 时，才会调用 getRandom 。

 

示例 1:

    输入
    ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
    [[], [1], [1], [2], [], [1], []]
    输出
    [null, true, false, true, 2, true, 1]
    
    解释
    RandomizedCollection collection = new RandomizedCollection();// 初始化一个空的集合。
    collection.insert(1);// 向集合中插入 1 。返回 true 表示集合不包含 1 。
    collection.insert(1);// 向集合中插入另一个 1 。返回 false 表示集合包含 1 。集合现在包含 [1,1] 。
    collection.insert(2);// 向集合中插入 2 ，返回 true 。集合现在包含 [1,1,2] 。
    collection.getRandom();// getRandom 应当有 2/3 的概率返回 1 ，1/3 的概率返回 2 。
    collection.remove(1);// 从集合中删除 1 ，返回 true 。集合现在包含 [1,2] 。
    collection.getRandom();// getRandom 应有相同概率返回 1 和 2 。
     

提示:

- -2<sup>31</sup> <= val <= 2<sup>31</sup> - 1
- insert, remove 和 getRandom 最多 总共 被调用 2 * 10<sup>5</sup> 次
- 当调用 getRandom 时，数据结构中 至少有一个 元素



## 思路

    /**
     * O(1)获取、插入、删除。
     * 1.获取是只要一个合法的下标，对有序列表的获取即为 O(1)
     * 2.插入操作由于 List 是尾插法，也是 O(1)
     * 3.删除操作只有删除 list 的最后一个元素的时候是 O(1)
     * 除此之位，因为插入和删除操作涉及到是否重复的返回，相当于要在 O(1) 时间做遍历的检查，因此需要额外的哈希类型数据结构，采用 Map 存储 <元素,出现位置>
     */

## 解法
```java

/**
 * O(1)获取、插入、删除。
 * 1.获取是只要一个合法的下标，对有序列表的获取即为 O(1)
 * 2.插入操作由于 List 是尾插法，也是 O(1)
 * 3.删除操作只有删除 list 的最后一个元素的时候是 O(1)
 * 除此之位，因为插入和删除操作涉及到是否重复的返回，相当于要在 O(1) 时间做遍历的检查，因此需要额外的哈希类型数据结构，采用 Map 存储 <元素,出现位置>
 */
class RandomizedCollection {
    private List<Integer> nums;//存储 val 元素
    private Map<Integer, Set<Integer>> map;//存储每个 val 的下标集合
    public RandomizedCollection() {
        nums = new ArrayList();
        map = new HashMap();
    }
    
    public boolean insert(int val) {
        nums.add(val);//元素列表直接添加到末尾，O(1)
        Set<Integer> set = map.getOrDefault(val, new HashSet<Integer>());
        set.add(nums.size() - 1);//set里加入下标，O(1)
        map.put(val, set);
        return set.size() == 1;//返回是否重复，即set里存了多少个 val 对应的下标，O(1)
    }

    public boolean remove(int val) {
        if(!map.containsKey(val))return false;
        //获取一个 val 值对应的下标，hash操作，为O(1)
        Iterator<Integer> it = map.get(val).iterator();
        int i = it.next();
        //获取列表尾部元素，并换到 val 的位置
        int lastNum = nums.get(nums.size() - 1);
        nums.set(i, lastNum);
        //删除 val 的位置，尾部元素的位置
        map.get(val).remove(i);
        map.get(lastNum).remove(nums.size() - 1);
        //更新尾部元素的下标集合
        if(i < nums.size() - 1)map.get(lastNum).add(i);
        if(map.get(val).size() == 0)map.remove(val);//如果val只出现一次，直接删除他的下标集合
        nums.remove(nums.size() - 1);
        return true;
    }
    
    public int getRandom() {
        return nums.get((int)(Math.random() * nums.size()));
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
