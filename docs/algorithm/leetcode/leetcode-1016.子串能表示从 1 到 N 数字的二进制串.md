    
## 题目

给定一个二进制字符串 s 和一个正整数 n，如果对于 [1, n] 范围内的每个整数，其二进制表示都是 s 的 子字符串 ，就返回 true，否则返回 false 。

子字符串 是字符串中连续的字符序列。

 

示例 1：

    输入：s = "0110", n = 3
    输出：true
示例 2：

    输入：s = "0110", n = 4
    输出：false
 

提示：

- 1 <= s.length <= 1000
- s[i] 不是 '0' 就是 '1'
- 1 <= n <= 10<sup>9</sup>

## 思路

一部分是冗余的，只匹配N 到 (N>>1)+1，就可以，剩下的都已经包含在这里面了。

## 解法
```java

class Solution {
    // 一部分是冗余的，只匹配N 到 (N>>1)+1，就可以，剩下的都已经包含在这里面了。


    public boolean queryString(String S, int N) {
        int m = (N>>1)+1;
        for(int i=m;i<=N;i++){
        	String b = Integer.toBinaryString(i);
        	if(!S.contains(b)){
        		return false;
        	}
        }
    	return true;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
