---
title: 快照数组
date: 2022-12-08 20:20:13
permalink: /pages/f05abd/
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

实现支持下列接口的「快照数组」- SnapshotArray：

- SnapshotArray(int length) - 初始化一个与指定长度相等的 类数组 的数据结构。初始时，每个元素都等于 0。
- void set(index, val) - 会将指定索引 index 处的元素设置为 val。
- int snap() - 获取该数组的快照，并返回快照的编号 snap_id（快照号是调用 snap() 的总次数减去 1）。
- int get(index, snap_id) - 根据指定的 snap_id 选择快照，并返回该快照指定索引 index 的值。

示例：

    输入：["SnapshotArray","set","snap","set","get"]
         [[3],[0,5],[],[0,6],[0,0]]
    输出：[null,null,0,null,5]
    解释：
    SnapshotArray snapshotArr = new SnapshotArray(3); // 初始化一个长度为 3 的快照数组
    snapshotArr.set(0,5);  // 令 array[0] = 5
    snapshotArr.snap();  // 获取快照，返回 snap_id = 0
    snapshotArr.set(0,6);
    snapshotArr.get(0,0);  // 获取 snap_id = 0 的快照中 array[0] 的值，返回 5
 

提示：

- 1 <= length <= 50000
- 题目最多进行50000 次set，snap，和 get的调用 。
- 0 <= index < length
- 0 <= snap_id < 我们调用 snap() 的总次数
- 0 <= val <= 10^9


## 思路

这道题用 TreeMap 是最简单的。

题意不太好理解：

意思是最初全为 0 的数组，每一次快照都会纪录这个快照时刻的数组元素情况，然后在这个基础上进行修改和增加，因此，使用 TreeMap 的 Key 来标记是第几次快照对应了什么值是最方便的，对于快照值大于最新加入元素的元素值，我们使用 floorEntry 取之。

## 解法
```java

class SnapshotArray {
    TreeMap<Integer, Integer>[] arr;
    int sid = 0;

    public SnapshotArray(int length) {
        arr = new TreeMap[length];

        for (int i = 0; i < length; i++) {
            arr[i] = new TreeMap<>();
            arr[i].put(0, 0);
        }
    }
    
    public void set(int index, int val) {
        arr[index].put(sid, val);

    }
    
    public int snap() {
        return sid++;

    }
    
    public int get(int index, int snap_id) {
        return arr[index].floorEntry(snap_id).getValue();

    }
}

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * SnapshotArray obj = new SnapshotArray(length);
 * obj.set(index,val);
 * int param_2 = obj.snap();
 * int param_3 = obj.get(index,snap_id);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
