

## 题目
n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

你需要按照以下要求，给这些孩子分发糖果：

每个孩子至少分配到 1 个糖果。
相邻两个孩子评分更高的孩子会获得更多的糖果。
请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

 

示例 1：

    输入：ratings = [1,0,2]
    输出：5
    解释：你可以分别给第一个、第二个、第三个孩子分发 2、1、2 颗糖果。
示例 2：

输入：ratings = [1,2,2]
输出：4
解释：你可以分别给第一个、第二个、第三个孩子分发 1、2、1 颗糖果。
     第三个孩子只得到 1 颗糖果，这满足题面中的两个条件。
 

提示：

- n == ratings.length
- 1 <= n <= 2 * 10<sup>4</sup>
- 0 <= ratings[i] <= 2 * 10<sup>4</sup>



## 思路

方法一：模拟
根据题干描述的贪心算法，对于每一行，我们首先确定最多可以放置多少单词，这样可以得到该行的空格个数，从而确定该行单词之间的空格个数。

根据题目中填充空格的细节，我们分以下三种情况讨论：

- 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格；
- 当前行不是最后一行，且只有一个单词：该单词左对齐，在行末填充空格；
- 当前行不是最后一行，且不只一个单词：设当前行单词数为numWords，空格数为numSpaces，我们需要将空格均匀分配在单词之间，则单词之间应至少有avgSpaces=numSpaces/(numWords-1)向下取整个空格，对于多出来的extraSpaces=numSpaces
  mod (numWords−1)个空格，应填在前 extraSpaces 个单词之间。因此，前
  extraSpaces 个单词之间填充 avgSpaces+1 个空格，其余单词之间填充 avgSpaces
  个空格。



## 解法
```java

class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> ans = new ArrayList<String>();
        int right = 0, n = words.length;
        while (true) {
            int left = right; // 当前行的第一个单词在 words 的位置
            int sumLen = 0; // 统计这一行单词长度之和
            // 循环确定当前行可以放多少单词，注意单词之间应至少有一个空格
            while (right < n && sumLen + words[right].length() + right - left <= maxWidth) {
                sumLen += words[right++].length();
            }

            // 当前行是最后一行：单词左对齐，且单词之间应只有一个空格，在行末填充剩余空格
            if (right == n) {
                StringBuffer sb = join(words, left, n, " ");
                sb.append(blank(maxWidth - sb.length()));
                ans.add(sb.toString());
                return ans;
            }

            int numWords = right - left;
            int numSpaces = maxWidth - sumLen;

            // 当前行只有一个单词：该单词左对齐，在行末填充剩余空格
            if (numWords == 1) {
                StringBuffer sb = new StringBuffer(words[left]);
                sb.append(blank(numSpaces));
                ans.add(sb.toString());
                continue;
            }

            // 当前行不只一个单词
            int avgSpaces = numSpaces / (numWords - 1);
            int extraSpaces = numSpaces % (numWords - 1);
            StringBuffer sb = new StringBuffer();
            sb.append(join(words, left, left + extraSpaces + 1, blank(avgSpaces + 1))); // 拼接额外加一个空格的单词
            sb.append(blank(avgSpaces));
            sb.append(join(words, left + extraSpaces + 1, right, blank(avgSpaces))); // 拼接其余单词
            ans.add(sb.toString());
        }
    }

    // blank 返回长度为 n 的由空格组成的字符串
    public String blank(int n) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < n; ++i) {
            sb.append(' ');
        }
        return sb.toString();
    }

    // join 返回用 sep 拼接 [left, right) 范围内的 words 组成的字符串
    public StringBuffer join(String[] words, int left, int right, String sep) {
        StringBuffer sb = new StringBuffer(words[left]);
        for (int i = left + 1; i < right; ++i) {
            sb.append(sep);
            sb.append(words[i]);
        }
        return sb;
    }
}


```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
