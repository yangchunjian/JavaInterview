

## 题目

给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例 1：

    输入：s = "abcd", t = "abcde"
    输出："e"
    解释：'e' 是那个被添加的字母。
示例 2：

    输入：s = "", t = "y"
    输出："y"
 

提示：

- 0 <= s.length <= 1000
- t.length == s.length + 1
- s 和 t 只包含小写字母



## 思路

思路：因为两个字符串中的字符 除了一个添加的 其他字符都是出现两次的 可以利用异或运算 一直异或 最后只会留下一个只出现奇次数的字符

## 解法
```java
class Solution {
//    思路：因为两个字符串中的字符 除了一个添加的 其他字符都是出现两次的 可以利用异或运算 一直异或 最后只会留下一个只出现奇次数的字符


    public char findTheDifference(String s, String t) {
        int res = 0;

        for (char ch : s.toCharArray()){
            res ^= ch;
        }
        for (char ch : t.toCharArray()){
            res ^= ch;
        }
        return (char) res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
