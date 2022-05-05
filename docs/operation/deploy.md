---
title: 部署
category: Linux
tag: 
  - 运维
  - 部署
  - Linux
author: JavaInterview.cn
permalink: /pages/f33116/
categories: 
  - operation
tags: 
  - Java
date: 2022-04-21 22:12:56
---



## 安装命令

### 常用的 RPM 软件包命令

    安装软件的命令格式	rpm -ivh filename.rpm
    升级软件的命令格式	rpm -Uvh filename.rpm
    卸载软件的命令格式	rpm -e filename.rpm
    查询软件描述信息的命令格式	rpm -qpi filename.rpm
    列出软件文件信息的命令格式	rpm -qpl filename.rpm
    查询文件属于哪个 RPM 的命令格式	rpm -qf filename

### 常见的 Yum 命令

    yum repolist all	列出所有仓库
    yum list all	列出仓库中所有软件包
    yum info	查看软件包信息
    yum install	安装软件包
    yum reinstall	重新安装软件包
    yum update	升级软件包
    yum remove	移除软件包
    yum clean all	清除所有仓库缓存
    yum check-update	检查可更新的软件包
    yum grouplist	查看系统中已经安装的软件包组
    yum groupinstall	安装指定的软件包组
    yum groupremove	移除指定的软件包组
    yum groupinfo	查询指定的软件包组信息



### 什么是包管理系统？
包管理系统由一组工具和文件格式组成，它们一起用于安装、更新和卸载 Linux 应用。两种最常见的包管理系统来自 Red Hat 和 Debian。 Red Hat、CentOS 和 Fedora 都使用 rpm 系统（.rpm 文件），而 Debian、Ubuntu、Mint 和 Ubuntu 都使用 dpkg（.deb 文件）。Gentoo Linux 使用名为 Portage 的系统，Arch Linux 只使用 tarball（.tar 文件）。这些系统之间的主要区别在于它们如何安装和维护应用。

你可能想知道 .rpm、.deb 或 .tar 文件中的内容。你可能会惊讶地发现，所有这些都只是普通的老式归档文件（如 .zip），其中包含应用的代码，如何安装它的说明，依赖项（它可能依赖的其他应用），以及配置文件的位置。读取和执行所有这些指令的软件称为包管理器。

### Debian、Ubuntu、Mint 等
Debian、Ubuntu、Mint 和其它基于 Debian 的发行版都使用 .deb 文件和 dpkg 包管理系统。有两种方法可以通过此系统安装应用。你可以使用 apt 程序从仓库进行安装，也可以使用 dpkg 程序从 .deb 文件安装应用。我们来看看如何做到这两点。

使用 apt 安装应用非常简单：

    $ sudo apt install app_name
通过 apt 卸载应用也非常简单：

    $ sudo apt remove app_name
要升级已安装的应用，首先需要更新应用仓库：

    $ sudo apt update
完成后，你可以使用以下命令更新任何程序：

    $ sudo apt upgrade
如果你只想更新一个应用，该怎么办？没问题。

    $ sudo apt update app_name
最后，假设你要安装的应用不存在于 Debian 仓库中，但有 .deb 下载。

    $ sudo dpkg -i app_name.deb
### Red Hat、CentOS 和 Fedora
默认情况下，Red Hat 使用多个包管理系统。这些系统在使用自己的命令时，互相仍然非常相似，而且与 Debian 中使用的也相似。例如，我们可以使用 yum 或 dnf 管理器来安装应用。

    $ sudo yum install app_name
    $ sudo dnf install app_name
.rpm 格式的应用也可以使用 rpm 命令安装。

    $ sudo rpm -i app_name.rpm
删除不需要的应用同样容易。

    $ sudo yum remove app_name
    $ sudo dnf remove app_name
更新应用同样容易。

    $ yum update
    $ sudo dnf upgrade --refresh
