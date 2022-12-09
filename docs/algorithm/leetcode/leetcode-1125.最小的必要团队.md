---
title: 最小的必要团队
date: 2022-12-04 20:09:19
permalink: /pages/74c7e2/
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

作为项目经理，你规划了一份需求的技能清单 req_skills，并打算从备选人员名单 people 中选出些人组成一个「必要团队」（ 编号为 i 的备选人员 people[i] 含有一份该备选人员掌握的技能列表）。

所谓「必要团队」，就是在这个团队中，对于所需求的技能列表 req_skills 中列出的每项技能，团队中至少有一名成员已经掌握。可以用每个人的编号来表示团队中的成员：

- 例如，团队 team = [0, 1, 3] 表示掌握技能分别为 people[0]，people[1]，和 people[3] 的备选人员。

请你返回 任一 规模最小的必要团队，团队成员用人员编号表示。你可以按 任意顺序 返回答案，题目数据保证答案存在。

 

示例 1：

    输入：req_skills = ["java","nodejs","reactjs"], people = [["java"],["nodejs"],["nodejs","reactjs"]]
    输出：[0,2]
示例 2：

    输入：req_skills = ["algorithms","math","java","reactjs","csharp","aws"], people = [["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]]
    输出：[1,2]
 

提示：

- 1 <= req_skills.length <= 16
- 1 <= req_skills[i].length <= 16
- req_skills[i] 由小写英文字母组成
- req_skills 中的所有字符串 互不相同
- 1 <= people.length <= 60
- 0 <= people[i].length <= 16
- 1 <= people[i][j].length <= 16
- people[i][j] 由小写英文字母组成
- people[i] 中的所有字符串 互不相同
- people[i] 中的每个技能是 req_skills 中的技能
- 题目数据保证「必要团队」一定存在


## 思路

/**
 * S是一个整数，表示一个二进制集合。S中第i位是1表示该集合包含标号是i的技能。
 * 令dp[S]表示要获得集合S表示的技能的最小花费.也就是最少需要选多少人。
 * 假设技能个数是n，那么要求的最小花费就是dp[(1 << n)-1]。
 * 对于状态转移方程:
 * 假设当前第i个人的技能集合是整数now.我们就拿当前的技能集合
 * now去更新每一个dp[now|j], 0 <= j < (1 << n)的值。
 * 使用team列表维护每一个集合S的最优团队列表，team[(1<<n)-1]即最终团队成员列表
 **/

## 解法
```java

class Solution {
    public int[] smallestSufficientTeam(String[] reqSkills, List<List<String>> peoSkills) {
        if (reqSkills == null || reqSkills.length == 0) {
            return new int[0];
        }
        int n = reqSkills.length;
        Map<String, Integer> map = new HashMap<>(n);
        // 技能、序号映射
        for (int i = 0; i < reqSkills.length; i++) {
            map.put(reqSkills[i], i);
        }
        int[] dp = new int[(1 << n)];
        Arrays.fill(dp, -1);
        // 技能集合i所需的最小团队编号列表
        List<List<Integer>> team = new ArrayList<>(1 << n);
        for (int i = 0; i < (1 << n); i++) {
            team.add(new LinkedList<>());
        }
        // 集合0表示的技能的最小花费是0
        dp[0] = 0;
        for (int i = 0; i < peoSkills.size(); i++) {
            int now = 0;
            for (String s : peoSkills.get(i)) {
                int x = map.get(s);
                now |= (1 << x);
            }
            for (int j = 0; j < (1 << n); j++) {
                // 更新已经计算过的集合
                if (dp[j] >= 0) {
                    // 将要更新的集合x
                    int x = now | j;
                    // 如果集合没有计算过或者可以优化
                    if (dp[x] == -1 || dp[x] > dp[j] + 1) {
                        dp[x] = dp[j] + 1;
                        team.get(x).clear();
                        team.get(x).addAll(team.get(j));
                        team.get(x).add(i);
                    }
                }
            }
        }
        // team[(1<<n)-1]即最终团队
        int[] ans = new int[team.get((1 << n) - 1).size()];
        int i = 0;
        for (int idx : team.get((1 << n) - 1)) {
            ans[i++] = idx;
        }
        return ans;
    }
}
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
