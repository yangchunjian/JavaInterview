---
title: 查找
category: Java
tag: 
  - 查找
author: JavaInterview.cn
permalink: /pages/c284f1/
categories: 
  - algorithm
tags: 
  - Java
date: 2022-04-21 22:12:56
titleTag: Java
---


## 二分查找
1 以下搜索均为左闭右闭区间
2 因此为了确保搜索不漏掉，while循环中为left <= right

```java
public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            return mid;
        }
    }
    return -1;
}
```

### 查找target左边界

```java
public int searchLeft(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            right = mid - 1;
        }
    }
    if (left == nums.length) return -1;
    return nums[left] == target ? left : -1;
}
```

### 查找target右边界

```java
public int searchRight(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] == target) {
            left = mid + 1;
        }
    }
    if (right == -1) return -1;
    return nums[right] == target ? right : -1;
}
```


