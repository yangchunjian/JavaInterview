
## 题目

给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

 

示例 1:

    输入: nums = [2,2,3,4]
    输出: 3
    解释:有效的组合是: 
    2,3,4 (使用第一个 2)
    2,3,4 (使用第二个 2)
    2,2,3
示例 2:

    输入: nums = [4,2,3,4]
    输出: 4
 

提示:

- 1 <= nums.length <= 1000
- 0 <= nums[i] <= 1000


## 思路

O(n2)方法，改进方式是将第二层和第三层循环合成一个，从后往前遍历可以提前结束循环

## 解法
```java

class Solution {
    // O(n2)方法，改进方式是将第二层和第三层循环合成一个，从后往前遍历可以提前结束循环


    public int triangleNumber(int[] nums) {

        Arrays.sort(nums);
        int result = 0;
        for (int i = nums.length - 1; i >= 2; i--) {
            int k = 0;
            int j = i - 1;
            while (k < j) {
                //满足该条件，说明从num[k]到num[j]的数都满足要求，结果直接加上j - k
                if (nums[k] + nums[j] > nums[i]) {
                    result += j - k;
                    j--;
                } else {
                    //否则k自增，重新判断
                    k++;
                }
            }
        }
        return result;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
