---
title: Mac系统创建home目录提示Read-Only filesystem的解决方案
date: 2022-11-10 10:00:07
permalink: /pages/9df712/
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

## 解答

在mac平台下的java开发中，经常遇到日志目录无法创建。比如创建/home目录会报下面的错误：

    mkdir: /home: Read-only file system
    
**原因**
 
出现这个问题是SIP的问题，也就是Mac系统的“系统完整性保护”机制，该机制作为Mac的保护机制，会限制我们进行部分操作，所以我们需要把SIP进行关闭。

**解决方案：**

1. 查看SIP当前的状态

    csrutil status
如果是开启状态，进入第二步；如果是关闭状态，进入第三步。 

2. 关闭SIP保护

重启电脑，按紧 ​cmd+R​ 进入恢复模式，登陆自己的账户，然后点击屏幕上方的工具栏找到命令行工具，输入命令 ​

    csrutil disable​
再重启电脑，执行第一步查看SIP状态是否关闭。


3. 重新挂载

    ​sudo mount -uw /​
如果完成以上步骤还报这个错，请在你的命令前加 sudo 执行



