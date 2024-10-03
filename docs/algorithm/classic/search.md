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

## 递归二分查找
```java
//注意：使用二分查找的前提是 该数组是有序的.
public class BinarySearch {

    public static void main(String[] args) {
        //int arr[] = { 1, 8, 10, 89,1000,1000, 1234 };
        int arr[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13,14,15,16,17,18,19,20 };
        

        //
//        int resIndex = binarySearch(arr, 0, arr.length - 1, 1000);
//        System.out.println("resIndex=" + resIndex);
        
        List<Integer> resIndexList = binarySearch2(arr, 0, arr.length - 1, 1);
        System.out.println("resIndexList=" + resIndexList);
    }

    // 二分查找算法
    /**
     * 
     * @param arr
     *            数组
     * @param left
     *            左边的索引
     * @param right
     *            右边的索引
     * @param findVal
     *            要查找的值
     * @return 如果找到就返回下标，如果没有找到，就返回 -1
     */
    public static int binarySearch(int[] arr, int left, int right, int findVal) {
        

        // 当 left > right 时，说明递归整个数组，但是没有找到
        if (left > right) {
            return -1;
        }
        int mid = (left + right) / 2;
        int midVal = arr[mid];

        if (findVal > midVal) { // 向 右递归
            return binarySearch(arr, mid + 1, right, findVal);
        } else if (findVal < midVal) { // 向左递归
            return binarySearch(arr, left, mid - 1, findVal);
        } else {
            
            return mid;
        }

    }
    
    /*
     *{1,8, 10, 89, 1000, 1000，1234} 当一个有序数组中，
     * 有多个相同的数值时，如何将所有的数值都查找到，比如这里的 1000
     * 
     * 思路分析
     * 1. 在找到mid 索引值，不要马上返回
     * 2. 向mid 索引值的左边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
     * 3. 向mid 索引值的右边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
     * 4. 将Arraylist返回
     */

    public static List<Integer> binarySearch2(int[] arr, int left, int right, int findVal) {

        System.out.println("hello~");
        // 当 left > right 时，说明递归整个数组，但是没有找到
        if (left > right) {
            return new ArrayList<Integer>();
        }
        int mid = (left + right) / 2;
        int midVal = arr[mid];

        if (findVal > midVal) { // 向 右递归
            return binarySearch2(arr, mid + 1, right, findVal);
        } else if (findVal < midVal) { // 向左递归
            return binarySearch2(arr, left, mid - 1, findVal);
        } else {
//             * 思路分析
//             * 1. 在找到mid 索引值，不要马上返回
//             * 2. 向mid 索引值的左边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
//             * 3. 向mid 索引值的右边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
//             * 4. 将Arraylist返回
            
            List<Integer> resIndexlist = new ArrayList<Integer>();
            //向mid 索引值的左边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
            int temp = mid - 1;
            while(true) {
                if (temp < 0 || arr[temp] != findVal) {//退出
                    break;
                }
                //否则，就temp 放入到 resIndexlist
                resIndexlist.add(temp);
                temp -= 1; //temp左移
            }
            resIndexlist.add(mid);  //
            
            //向mid 索引值的右边扫描，将所有满足 1000， 的元素的下标，加入到集合ArrayList
            temp = mid + 1;
            while(true) {
                if (temp > arr.length - 1 || arr[temp] != findVal) {//退出
                    break;
                }
                //否则，就temp 放入到 resIndexlist
                resIndexlist.add(temp);
                temp += 1; //temp右移
            }
            
            return resIndexlist;
        }

    }
}


```

## 非递归二分查找
```java

public class BinarySearchNoRecur {

    public static void main(String[] args) {
        //测试
        int[] arr = {1,3, 8, 10, 11, 67, 100};
        int index = binarySearch(arr, 100);
        System.out.println("index=" + index);//
    }
    
    //二分查找的非递归实现
    /**
     * 
     * @param arr 待查找的数组, arr是升序排序
     * @param target 需要查找的数
     * @return 返回对应下标，-1表示没有找到
     */
    public static int binarySearch(int[] arr, int target) {
        
        int left = 0;
        int right = arr.length - 1;
        while(left <= right) { //说明继续查找
            int mid = (left + right) / 2;
            if(arr[mid] == target) {
                return mid;
            } else if ( arr[mid] > target) {
                right = mid - 1;//需要向左边查找
            } else {
                left = mid + 1; //需要向右边查找
            }
        }
        return -1;
    }

}

```