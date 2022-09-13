
## 题目

我们定义，在以下情况时，单词的大写用法是正确的：

- 全部字母都是大写，比如 "USA" 。
- 单词中所有字母都不是大写，比如 "leetcode" 。
- 如果单词不只含有一个字母，只有首字母大写， 比如 "Google" 。
- 给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false 。

 

示例 1：

    输入：word = "USA"
    输出：true
示例 2：

    输入：word = "FlaG"
    输出：false
 

提示：

- 1 <= word.length <= 100
- word 由小写和大写英文字母组成


## 思路

统计大写字母和小写字母的个数，然后分类讨论

## 解法
```java

class Solution {
    // 统计大写字母和小写字母的个数，然后分类讨论


    public boolean detectCapitalUse(String word) {

        char[] cs = word.toCharArray();
        int upper = 0;//大写字母个数
        int lower = 0;//小写字母个数
        for(int i=0;i<cs.length;i++) {
            if(cs[i]>='a') {
                lower++;
            }else {
                upper++;
            }
        }
        if(upper==cs.length) { //全大写
            return true;
        }
        if(lower==cs.length) {//全小写
            return true;
        }
        if(upper==1 && cs[0]<'a') {//首字母大写
            return true;
        }
        return false;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
