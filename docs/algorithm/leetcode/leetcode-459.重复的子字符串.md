
## 题目

给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。

 

示例 1:

    输入: s = "abab"
    输出: true
    解释: 可由子串 "ab" 重复两次构成。
示例 2:

    输入: s = "aba"
    输出: false
示例 3:

    输入: s = "abcabcabcabc"
    输出: true
    解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 

提示：

- 1 <= s.length <= 10<sup>4</sup>
- s 由小写英文字母组成


## 思路

假设一个S由2个x组成，2个S就由4个x组成。插头去尾，破坏一个S的头和第2个S的尾。

这时两个S加在一起，中间就是由2x组成的，匹配S成功就是的了。

## 解法
```java

class Solution {
    public boolean repeatedSubstringPattern(String s) {
        return (s+s).substring(1,s.length()*2-1).indexOf(s)!=-1;


        //转化为数组方便操作
        // char[] str = s.toCharArray();
        // //枚举模式串长度，从1到length/2即可
        // for(int i=1;i<=str.length/2;i++){
        //     //剪枝，如果字符串长度不是模式串的整数倍，不用再计算。
        //     if(str.length%i!=0) continue;
        //     int slow = 0;
        //     int fast = slow +i;
        //     while(fast<str.length){
        //         if(str[fast]!=str[slow]){
        //             break;//失配退出循环
        //         }
        //         slow++;
        //         fast++;
        //     }
        //     //如果有一个一直匹配到最后，返回true
        //     if(fast==str.length) return true;
        // }
        //     //否则返回false
        //     return false;
        
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
