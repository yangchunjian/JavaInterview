

## 题目

给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

 

示例 1：

    输入：s = "Let's take LeetCode contest"
    输出："s'teL ekat edoCteeL tsetnoc"
示例 2:

    输入： s = "God Ding"
    输出："doG gniD"
 

提示：

- 1 <= s.length <= 5 * 10<sup>4</sup>
- s 包含可打印的 ASCII 字符。
- s 不包含任何开头或结尾空格。
- s 里 至少 有一个词。
- s 中的所有单词都用一个空格隔开。



## 思路

new StringBuffer(strs[i]).reverse()

## 解法
```java

class Solution {
    public String reverseWords(String s) {

        String[] strs = s.split(" ");
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < strs.length; i++) {
            buffer.append(new StringBuffer(strs[i]).reverse().toString());
            buffer.append(" ");
        }
        return buffer.toString().trim();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
