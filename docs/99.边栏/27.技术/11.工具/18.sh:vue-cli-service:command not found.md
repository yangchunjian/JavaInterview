---
title: sh:vue-cli-service:command not found
date: 2022-11-22 12:05:52
permalink: /pages/f90085/
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

mac环境运行Vue项目报错信息

    mac@gjr 25_scr_tese % npm run serve
    
    > vue_test@0.1.0 serve
    > vue-cli-service serve
    
    sh: vue-cli-service: command not found
    
**解决方法**

- 1.cd到项目目录
- 2.执行命令sudo rm -rf node_modules package-lock.json && npm install
- 3.输入密码，安装完成就可以正常运行了

