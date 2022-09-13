---
title: TinyURL 的加密与解密
date: 2022-09-13 21:13:28
permalink: /pages/b3b06f/
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

TinyURL 是一种 URL 简化服务， 比如：当你输入一个 URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk 。

请你设计一个类来加密与解密 TinyURL 。

加密和解密算法如何设计和运作是没有限制的，你只需要保证一个 URL 可以被加密成一个 TinyURL ，并且这个 TinyURL 可以用解密方法恢复成原本的 URL 。

实现 Solution 类：

- Solution() 初始化 TinyURL 系统对象。
- String encode(String longUrl) 返回 longUrl 对应的 TinyURL 。
- String decode(String shortUrl) 返回 shortUrl 原本的 URL 。题目数据保证给定的 shortUrl 是由同一个系统对象加密的。

示例：

    输入：url = "https://leetcode.com/problems/design-tinyurl"
    输出："https://leetcode.com/problems/design-tinyurl"
    
    解释：
    Solution obj = new Solution();
    string tiny = obj.encode(url); // 返回加密后得到的 TinyURL 。
    string ans = obj.decode(tiny); // 返回解密后得到的原本的 URL 。
 

提示：

- 1 <= url.length <= 10<sup>4</sup>
- 题目数据保证 url 是一个有效的 URL



## 思路

Math.random()

## 解法
```java

public class Codec {

    Map<String, String> map = new HashMap<String, String>();
    static final String INDEX = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    static final String TINYURL_PREFIX = "http://tinyurl.com/";
	
    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
    	char[] chs = new char[6];
    	while(true){
    		for(int i = 0; i < 6; i++){
    			chs[i] = INDEX.charAt((int)(Math.random()*62));
    		}
    		String shortUrl = TINYURL_PREFIX + new String(chs);
    		if(!map.containsKey(shortUrl)){
    			map.put(shortUrl, longUrl);
    			return shortUrl;
    		}
    	}
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
		return map.get(shortUrl);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url)); 
```

## 总结

- 分析出几种情况，然后分别对各个情况实现 
