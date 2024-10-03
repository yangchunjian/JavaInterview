---
title: 排序
category: Java
tag: 
  - 排序
author: JavaInterview.cn
permalink: /pages/d89a12/
categories: 
  - algorithm
tags: 
  - Java
date: 2022-04-21 22:12:56
titleTag: Java
---


## 快速排序
### 思想
快速排序将一个数组分成两个数组，再对两个数组独立排序，是个递归算法。
首先随机选出一个切分元素temp（一般为这个数组的第一个元素），将小于temp的数放在temp的左边，将大于temp的数放在temp的右边。
快排和堆排序很像，他们都是将一个数组分成两个子数组，都属于递归算法。但是不同之处在于：快排空间复杂度为o（1），而堆排为o（n），
快排是原地排序，只需要一个很小的辅助栈，时间复杂度为NlogN。

### 代码实现
```java
public class Quick {
    
    public static void sort(int[] a,int lo,int hi) {
        if(hi<=lo) return;
        //切分
        int j = partition(a,lo,hi);
        sort(a,lo,j-1);
        sort(a,j+1,hi);
        
    }
    //a[j]就是那个切分元素，从数组的左端开始向右扫描直到找到一个大于等于它的元素
    //再从数组的右端开始向左扫描直到找到一个小于等于它的元素，将这两个元素交换位置。
    public static int partition(int[] a,int lo,int hi) {
        //左右扫描数组
        int j = lo;
        int i = hi+1;;
        int v = a[lo];
        while(true) {
            while(v>=a[++j]){
                if(j==hi) break;
                //j++;
            }
            while(v<=a[--i]) {
                if(i==lo) break;
                //i--;
            }
            if(j>=i) {
                break;
            }
            int t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        a[lo] = a[j];
        a[j] = v;
        return j;
    }

    public static void main(String[] args) {
        int[] a = {49,78,23,34,67,45,73,90,120,12,20,9,5};
        int lo = 0;
        int hi = a.length-1;
        sort(a,lo,hi);
        for(int i=0;i<a.length;i++) {
            System.out.print(a[i]+" ");
        }

    }

}
```

```java
public class PuickSort {


    //arr 需要排序的数组

    //low 开始时最左边的索引 = 0

    //high 开始时最右边的索引 = arr.length - 1
    public static void quickSort(int[] arr, int low, int high) {
        int i, j, temp, z,y;
        if (low > high) {
            return;
        }
        i = low;//左边哨兵的索引
        j = high;//右边哨兵的索引
        //temp就是基准位
        temp = arr[low];//以最左边为 基准位

        while (i < j) {
            //先看右边，依次往左递减
            //先从右往左找一个小于 基准位的数
            //当右边的哨兵位置所在的数 > 基准位的数 时
            //继续从右往左找（同时 j 索引 - 1）
            //找到后会跳出 while循环
            while (temp <= arr[j] && i < j) {
                j--;
            }

            //再看左边，依次往右递增
            //步骤和上面类似
            while (temp >= arr[i] && i < j) {
                i++;
            }

            //如果满足条件则交换
            if (i < j) {

                //z、y 都是临时参数，用于存放 左右哨兵 所在位置的数据
                z = arr[i];
                y = arr[j];

                //左右哨兵 交换数据（互相持有对方的数据）
                arr[i] = y;
                arr[j] = z;

            }

        }

        //这时 跳出了 “while (i < j) {}”循环
        //说明 i = j 左右在同一位置
        //最后将基准为与i和j相等位置的数字交换
        arr[low] = arr[i];//或 arr[ low] =arr[j];
        arr[i] = temp;//或 arr[ j] =temp;


        //i = j
        //这时 左半数组<(i或j所在索引的数) < 右半数组
        //也就是说(i或j所在索引的数) 已经确定排序位置，所以就不用再排序了，
        //只要用相同的方法 分别处理 左右数组就可以了

        //递归调用左半数组
        quickSort(arr, low, j - 1);
        //递归调用右半数组
        quickSort(arr, j + 1, high);
    }


    public static void main(String[] args) {
        int[] arr = {10, 7, 2, 4, 7, 62, 3, 4, 2, 1, 8, 9, 19};
        quickSort(arr, 0, arr.length - 1);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}

```

## 冒泡排序

### 思想
从序列的第一个元素开始，对相邻的两个元素进行比较，如果它们的顺序错误就交换它们的位置，即将较大的元素往后移动，直到遍历到序列的最后一个元素。
对剩下的元素重复上述步骤，直到整个序列都已经有序。
### 代码实现

```java
public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            // 每轮遍历将最大的数移到末尾
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println(Arrays.toString(arr));  // [11, 12, 22, 25, 34, 64, 90]
    }
}

```

## 堆排序

### 思想
堆排序（Heap Sort）是一种基于堆数据结构的排序算法，其核心思想是将待排序的序列构建成一个最大堆（或最小堆），然后将堆顶元素与最后一个元素交换，再将剩余元素重新调整为最大堆（或最小堆），重复以上步骤直到所有元素都有序。

### 代码实现
```java
public static void heapSort(int[] arr) {
    int n = arr.length;
 
    // 构建最大堆
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
 
    // 排序
    for (int i = n - 1; i > 0; i--) {
        // 将堆顶元素与最后一个元素交换
        int tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
 
        // 调整剩余元素为最大堆
        heapify(arr, i, 0);
    }
}
 
public static void heapify(int[] arr, int n, int i) {
    // 将以 i 为根节点的子树调整为最大堆
    int largest = i;  // 初始化最大元素为根节点
    int left = 2 * i + 1;  // 左子节点的索引
    int right = 2 * i + 2;  // 右子节点的索引
 
    // 找出左右子节点中的最大值
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
 
    // 如果最大值不是根节点，则交换根节点和最大值，并递归调整子树
    if (largest != i) {
        int tmp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = tmp;
        heapify(arr, n, largest);
    }
}
```