

## 题目

对于字符串 s 和 t，只有在 s = t + ... + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 X 能除尽 str2 。

 

示例 1：

    输入：str1 = "ABCABC", str2 = "ABC"
    输出："ABC"
示例 2：

    输入：str1 = "ABABAB", str2 = "ABAB"
    输出："AB"
示例 3：

    输入：str1 = "LEET", str2 = "CODE"
    输出：""
 

提示：

- 1 <= str1.length, str2.length <= 1000
- str1 和 str2 由大写英文字母组成

## 思路

假设str1是N个x，str2是M个x，那么str1+str2肯定是等于str2+str1的。

## 解法
```java

class Solution {
    public String gcdOfStrings(String str1, String str2) {
        // 假设str1是N个x，str2是M个x，那么str1+str2肯定是等于str2+str1的。
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        // 辗转相除法求gcd。
        return str1.substring(0, gcd(str1.length(), str2.length()));
    }

    private int gcd(int a, int b) {
        return b == 0? a: gcd(b, a % b);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
