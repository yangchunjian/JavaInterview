
## 题目

给你一个字符串 s，请你对 s 的子串进行检测。

每次检测，待检子串都可以表示为 queries[i] = [left, right, k]。我们可以 重新排列 子串 s[left], ..., s[right]，并从中选择 最多 k 项替换成任何小写英文字母。 

如果在上述检测过程中，子串可以变成回文形式的字符串，那么检测结果为 true，否则结果为 false。

返回答案数组 answer[]，其中 answer[i] 是第 i 个待检子串 queries[i] 的检测结果。

注意：在替换时，子串中的每个字母都必须作为 独立的 项进行计数，也就是说，如果 s[left..right] = "aaa" 且 k = 2，我们只能替换其中的两个字母。（另外，任何检测都不会修改原始字符串 s，可以认为每次检测都是独立的）

 

示例：

    输入：s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
    输出：[true,false,false,true,true]
    解释：
    queries[0] : 子串 = "d"，回文。
    queries[1] : 子串 = "bc"，不是回文。
    queries[2] : 子串 = "abcd"，只替换 1 个字符是变不成回文串的。
    queries[3] : 子串 = "abcd"，可以变成回文的 "abba"。 也可以变成 "baab"，先重新排序变成 "bacd"，然后把 "cd" 替换为 "ab"。
    queries[4] : 子串 = "abcda"，可以变成回文的 "abcba"。
 

提示：

- 1 <= s.length, queries.length <= 10^5
- 0 <= queries[i][0] <= queries[i][1] < s.length
- 0 <= queries[i][2] <= s.length
- s 中只有小写英文字母

## 思路

前缀和+状态压缩

## 解法
```java

class Solution {
    public List<Boolean> canMakePaliQueries(String s, int[][] queries) {

        int status[] = new int[s.length() + 1];
        for(int i = 0; i < s.length(); i++) 
          status[i + 1] = (status[i] ^ (1 << (s.charAt(i) - 'a')));
        List <Boolean> res = new ArrayList < > ();
        for(int query[]: queries) {
            int count = 0, n = (status[query[1] + 1] ^ status[query[0]]);
            while(n != 0) {
                n = (n & (n - 1));
                count++;
            }
            res.add(count / 2 <= query[2]);
        }
        return res;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
