---
title: 设计推特
date: 2022-07-20 21:29:56
permalink: /pages/a3f40d/
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

设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近 10 条推文。

实现 Twitter 类：

- Twitter() 初始化简易版推特对象
- void postTweet(int userId, int tweetId) 根据给定的 tweetId 和 userId 创建一条新推文。每次调用此函数都会使用一个不同的 tweetId 。
- List<Integer> getNewsFeed(int userId) 检索当前用户新闻推送中最近  10 条推文的 ID 。新闻推送中的每一项都必须是由用户关注的人或者是用户自己发布的推文。推文必须 按照时间顺序由最近到最远排序 。
- void follow(int followerId, int followeeId) ID 为 followerId 的用户开始关注 ID 为 followeeId 的用户。
- void unfollow(int followerId, int followeeId) ID 为 followerId 的用户不再关注 ID 为 followeeId 的用户。

示例：

    输入
    ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
    [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
    输出
    [null, null, [5], null, null, [6, 5], null, [5]]
    
    解释
    Twitter twitter = new Twitter();
    twitter.postTweet(1, 5); // 用户 1 发送了一条新推文 (用户 id = 1, 推文 id = 5)
    twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含一个 id 为 5 的推文
    twitter.follow(1, 2);    // 用户 1 关注了用户 2
    twitter.postTweet(2, 6); // 用户 2 发送了一个新推文 (推文 id = 6)
    twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含两个推文，id 分别为 -> [6, 5] 。推文 id 6 应当在推文 id 5 之前，因为它是在 5 之后发送的
    twitter.unfollow(1, 2);  // 用户 1 取消关注了用户 2
    twitter.getNewsFeed(1);  // 用户 1 获取推文应当返回一个列表，其中包含一个 id 为 5 的推文。因为用户 1 已经不再关注用户 2
 

提示：

- 1 <= userId, followerId, followeeId <= 500
- 0 <= tweetId <= 10<sup>4</sup>
- 所有推特的 ID 都互不相同
- postTweet、getNewsFeed、follow 和 unfollow 方法最多调用 3 *
  10<sup>4</sup> 次



## 思路

    private Map<Integer, Set<Integer>> userFollowerMap;
    private Map<Integer, List<Integer>> userTwitterMap;
    private List<Integer> twitterList;


## 解法
```java

class Twitter {    
    private Map<Integer, Set<Integer>> userFollowerMap;
    private Map<Integer, List<Integer>> userTwitterMap;
    private List<Integer> twitterList;
    public Twitter() {
        userFollowerMap = new HashMap<>();
        userTwitterMap = new HashMap<>();
        twitterList = new ArrayList<>();
    }
    public void postTweet(int userId, int tweetId) {
        if (userTwitterMap.get(userId) == null) {
            List<Integer> list = new ArrayList<>();
            userTwitterMap.put(userId, list);
        }
        userTwitterMap.get(userId).add(tweetId);
        twitterList.add(tweetId);
    }
    public List<Integer> getNewsFeed(int userId) {
        Set<Integer> list = new HashSet<>();
        if (userFollowerMap.get(userId) != null) {
            for (Integer user : userFollowerMap.get(userId)) {
                if (userTwitterMap.get(user) != null) {
                    List<Integer> l = userTwitterMap.get(user);
                    if (l.size() <= 10) {
                        list.addAll(l);
                    } else {
                        for (int i = l.size() - 1; i >= l.size() - 10; i--) {
                            list.add(l.get(i));
                        }
                    }
                }
            }
        }
        if (userTwitterMap.get(userId) != null) {
            List<Integer> l1 = userTwitterMap.get(userId);
            if (l1.size() <= 10) {
                list.addAll(l1);
            } else {
                for (int i = l1.size() - 1; i >= l1.size() - 10; i--) {
                    list.add(l1.get(i));
                }
            }
        }
        List<Integer> res = new ArrayList<>();
        for (int i = twitterList.size() - 1; i >= 0; i--) {
            if (list.contains(twitterList.get(i))) {
                res.add(twitterList.get(i));
            }
            if (res.size() == 10 || res.size() == list.size()) break;
        }
        return res;
    }
    public void follow(int followerId, int followeeId) {
        if (userFollowerMap.get(followerId) == null) {
            Set<Integer> set = new HashSet<>();
            userFollowerMap.put(followerId, set);
        }
        userFollowerMap.get(followerId).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (userFollowerMap.get(followerId) != null)
        userFollowerMap.get(followerId).remove(followeeId);
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * Twitter obj = new Twitter();
 * obj.postTweet(userId,tweetId);
 * List<Integer> param_2 = obj.getNewsFeed(userId);
 * obj.follow(followerId,followeeId);
 * obj.unfollow(followerId,followeeId);
 */
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
