---
title: The selected directory is not a valid home for Go SDK
date: 2022-12-05 14:45:19
permalink: /pages/b298ce/
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

问题：

The selected directory is not a valid home for Go SDK

出现这个错误的原因是 idea 的 Go-plugin 插件，和 Go 的sdk版本不匹配；

解决：

（1）在 golang 安装路径（SDK的安装路径）下寻找：

    
    go1.17.3\src\runtime\internal\sys\zversion.go 文件

（2）增加一个自己的版本，在 zversion.go 文件中追加如下行(你的版本号)并保存；


    const TheVersion = `go1.17.3`

（3）重启Goland，进行SDK配置；

一般这种情况下，Goland已经帮你自动配置SDK了；



