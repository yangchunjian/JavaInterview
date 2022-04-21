---
title: 排序
category: Java
tag: 
  - 排序
author: JavaInterview.cn
date: 2022-4-10
permalink: /pages/d89a12/
categories: 
  - algorithm
tags: 
  - 
---


# 快速排序
## 思想
1、思想
快速排序将一个数组分成两个数组，再对两个数组独立排序，是个递归算法。
首先随机选出一个切分元素temp（一般为这个数组的第一个元素），将小于temp的数放在temp的左边，将大于temp的数放在temp的右边。
快排和堆排序很像，他们都是将一个数组分成两个子数组，都属于递归算法。但是不同之处在于：快排空间复杂度为o（1），而堆排为o（n），
快排是原地排序，只需要一个很小的辅助栈，时间复杂度为NlogN。

2、代码实现（java）
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

# 冒泡排序



# 堆排序

