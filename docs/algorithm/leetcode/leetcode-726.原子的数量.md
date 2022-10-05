---
title: 原子的数量
date: 2022-10-05 16:30:46
permalink: /pages/f0450b/
categories:
  - algorithm
  - leetcode
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 题目

给你一个字符串化学式 formula ，返回 每种原子的数量 。

原子总是以一个大写字母开始，接着跟随 0 个或任意个小写字母，表示原子的名字。

如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。

- 例如，"H2O" 和 "H2O2" 是可行的，但 "H1O2" 这个表达是不可行的。

两个化学式连在一起可以构成新的化学式。

- 例如 "H2O2He3Mg4" 也是化学式。

由括号括起的化学式并佐以数字（可选择性添加）也是化学式。

- 例如 "(H2O2)" 和 "(H2O2)3" 是化学式。

返回所有原子的数量，格式为：第一个（按字典序）原子的名字，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 1），以此类推。

 

示例 1：

    输入：formula = "H2O"
    输出："H2O"
    解释：原子的数量是 {'H': 2, 'O': 1}。
示例 2：

    输入：formula = "Mg(OH)2"
    输出："H2MgO2"
    解释：原子的数量是 {'H': 2, 'Mg': 1, 'O': 2}。
示例 3：

    输入：formula = "K4(ON(SO3)2)2"
    输出："K4N2O14S4"
    解释：原子的数量是 {'K': 4, 'N': 2, 'O': 14, 'S': 4}。
 

提示：

- 1 <= formula.length <= 1000
- formula 由英文字母、数字、'(' 和 ')' 组成
- formula 总是有效的化学式


## 思路

        定义2个栈：
            栈1：存原子
            栈2：存原子对应的数量
        遍历整个化学式：
            遇到大写字母：为原子首字母，一直遍历到小写字母结束为止，得到一个完整的原子
            遇到数字：一直遍历到数字结束为止，为当前原子对应的数量，如果后面没有数字，则默认为1
            遇到左括号'('：对栈2压入一个0，表示括号的开始
            遇到右括号')'：栈2进行出栈，一直到之前的左括号（也就是0的地方），出栈的每个数量乘上）后的数
        最后定义一个TreeMap：
            遍历2个栈，获取每个原子出现的次数
            最后拼接字符串


## 解法
```java

class Solution {
    public String countOfAtoms(String formula) {

        /*
        定义2个栈：
            栈1：存原子
            栈2：存原子对应的数量
        遍历整个化学式：
            遇到大写字母：为原子首字母，一直遍历到小写字母结束为止，得到一个完整的原子
            遇到数字：一直遍历到数字结束为止，为当前原子对应的数量，如果后面没有数字，则默认为1
            遇到左括号'('：对栈2压入一个0，表示括号的开始
            遇到右括号')'：栈2进行出栈，一直到之前的左括号（也就是0的地方），出栈的每个数量乘上）后的数
        最后定义一个TreeMap：
            遍历2个栈，获取每个原子出现的次数
            最后拼接字符串
         */
        Stack<String> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();
        int n = formula.length();
        for(int i = 0; i < n; i++) {
            char ch = formula.charAt(i);
            if(Character.isUpperCase(ch)) {
                StringBuilder sb = new StringBuilder().append(ch);
                while(i + 1 < n && Character.isLowerCase(formula.charAt(i+1))) {
                    sb.append(formula.charAt(i+1));
                    i++;
                }
                stack1.push(sb.toString());
                int cnt = 0;
                while(i + 1 < n && Character.isDigit(formula.charAt(i+1))) {
                    cnt = cnt * 10 + formula.charAt(i+1) - '0';
                    i++;
                }
                if(cnt==0) cnt = 1;
                stack2.push(cnt);
            } else if(ch == '(') {
                stack2.push(0);
            } else if(ch == ')') {
                int cnt = 0;
                while(i + 1 < n && Character.isDigit(formula.charAt(i+1))) {
                    cnt = cnt * 10 + formula.charAt(i+1) - '0';
                    i++;
                }
                if(cnt==0) cnt = 1;
                Stack<Integer> tmp = new Stack<>();
                while(stack2.peek() != 0) {
                    Integer pop = stack2.pop();
                    tmp.push(pop * cnt);
                }
                stack2.pop();
                while(!tmp.empty()) {
                    stack2.push(tmp.pop());
                }
            }
        }
        TreeMap<String, Integer> map = new TreeMap<>();
        while(!stack1.empty()) {
            String s = stack1.pop();
            map.put(s, map.getOrDefault(s, 0) + stack2.pop());
        }
        StringBuilder sb = new StringBuilder();
        for(String s : map.keySet()) {
            int cnt = map.get(s);
            sb.append(s);
            if(cnt > 1) sb.append(cnt);
        }
        return sb.toString();
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
