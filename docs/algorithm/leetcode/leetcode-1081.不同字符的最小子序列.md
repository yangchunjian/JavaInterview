
## 题目

返回 s 字典序最小的子序列，该子序列包含 s 的所有不同字符，且只包含一次。



 

示例 1：

    输入：s = "bcabc"
    输出："abc"
示例 2：

    输入：s = "cbacdcbc"
    输出："acdb"
 

提示：

- 1 <= s.length <= 1000
- s 由小写英文字母组成

## 思路

Stack

## 解法
```java

class Solution {
    public String smallestSubsequence(String s) {

        Stack<Character> stack = new Stack<Character>();
        // 遍历数组
        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            // 如果字符在队列里面了就不取
            if(stack.contains(c)){
                continue;
            }
            // 如果不包括就比较大小,重复的字符,如果大于当前,那就后面再取
            while(!stack.isEmpty() && s.indexOf(stack.peek(),i) != -1 && stack.peek() > c){
                stack.pop();
            }
            stack.push(c);
        }
        // 站内元素组成新的结果
        char[] res = new char[stack.size()];
        for(int i = stack.size()-1;i>=0;i--){
            res[i] = stack.pop();
        }
        return new String(res);
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
