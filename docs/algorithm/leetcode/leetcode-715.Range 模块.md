---
title: Range 模块
date: 2022-08-07 19:54:32
permalink: /pages/c014d0/
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

Range模块是跟踪数字范围的模块。设计一个数据结构来跟踪表示为 半开区间 的范围并查询它们。

半开区间 [left, right) 表示所有 left <= x < right 的实数 x 。

实现 RangeModule 类:

- RangeModule() 初始化数据结构的对象。
- void addRange(int left, int right) 添加 半开区间 [left, right)，跟踪该区间中的每个实数。添加与当前跟踪的数字部分重叠的区间时，应当添加在区间 [left, right) 中尚未跟踪的任何数字到该区间中。
- boolean queryRange(int left, int right) 只有在当前正在跟踪区间 [left, right) 中的每一个实数时，才返回 true ，否则返回 false 。
- void removeRange(int left, int right) 停止跟踪 半开区间 [left, right) 中当前正在跟踪的每个实数。

示例 1：

    输入
    ["RangeModule", "addRange", "removeRange", "queryRange", "queryRange", "queryRange"]
    [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]]
    输出
    [null, null, null, true, false, true]
    
    解释
    RangeModule rangeModule = new RangeModule();
    rangeModule.addRange(10, 20);
    rangeModule.removeRange(14, 16);
    rangeModule.queryRange(10, 14); 返回 true （区间 [10, 14) 中的每个数都正在被跟踪）
    rangeModule.queryRange(13, 15); 返回 false（未跟踪区间 [13, 15) 中像 14, 14.03, 14.17 这样的数字）
    rangeModule.queryRange(16, 17); 返回 true （尽管执行了删除操作，区间 [16, 17) 中的数字 16 仍然会被跟踪）
 

提示：

- 1 <= left < right <= 10<sup>9</sup>
- 在单个测试用例中，对 addRange 、 queryRange 和 removeRange 的调用总数不超过
  10<sup>4</sup> 次



## 思路

TreeMap

## 解法
```java

class RangeModule {
    private final TreeMap<Integer, Integer> map = new TreeMap<>();

    public RangeModule() {

    }
    
    public void addRange(int left, int right) {
        Map.Entry<Integer, Integer> floor;
        // 键值对: left->right
        // 返回与小于或等于给定键的最大键关联的键值映射, 如果没有这样的键, 则返回null
        // 如果存在一个区间[l:r]使得l小于等于right
        while ((floor = this.map.floorEntry(right)) != null) {
            // 如果该区间的右区间小于left, 则不需要继续合并
            // ..l..r..left...right...
            if (floor.getValue() < left) {
                break;
            }
            // 如果该[l:r]区间的右区间大于等于left, 则需要将其与当前区间合并, 但首先要移除[l:r]区间
            // ..l...left.r...right   ..l..left...right..r  ..left..l...r...right
            this.map.remove(floor.getKey());
            left = Math.min(left, floor.getKey());
            right = Math.max(right, floor.getValue());
        }
        // 将新合并的区间放入map中
        this.map.put(left, right);
    }
    
    public boolean queryRange(int left, int right) {
        // 获取一个区间[l:r]使得其l<=left
        Map.Entry<Integer, Integer> floor = this.map.floorEntry(left);
        // 如果存在这个区间并且r>=right, 那么说明该区间存在, 返回true
        return floor != null && floor.getValue() >= right;
  
    }
    
    public void removeRange(int left, int right) {
        Map.Entry<Integer, Integer> lower;
        // 返回严格小于给定键的最大键关联的键值映射, 如果没有这样的键, 则返回null
        // 找到一个区间[l:r], 其l小于right
        while ((lower = this.map.lowerEntry(right)) != null) {
            if (lower.getValue() <= left) {
                // 如果该区间[l:r]的r小于等于left, 则不需要移除
                // ..l..r/left..right..  ..l..r..left..right..
                break;
            }
            if (lower.getKey() >= left) {
                // 如果[l:r]的l大于等于left, 则需要移除
                // ..left.l..r..right  ..left/l..r..right ...left..l..right..r (第三种情况则需要在移除后新增一个[right:r]区间)
                this.map.remove(lower.getKey());
            } else {
                // 如果[l:r]的l小于left, ..l..left..r..right ..l..left..right..r
                // 则需要将[left:r]区间消除, 具体做法则是更新[l:r]区间变为[l:left]
                this.map.put(lower.getKey(), left);
            }
            // 如果出现...right..r..的情况, 则需要将right前面的区间消除, 具体做法则是生成/更新一个区间为[right:r]
            if (lower.getValue() > right) {
                this.map.put(right, lower.getValue());
            }
        }
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * RangeModule obj = new RangeModule();
 * obj.addRange(left,right);
 * boolean param_2 = obj.queryRange(left,right);
 * obj.removeRange(left,right);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
