---
title: 命令
category: Linux
tag: 
  - 运维
  - 命令
  - Linux
author: JavaInterview.cn
permalink: /pages/9b58cc/
categories: 
  - operation
tags: 
  - Java
date: 2022-04-21 22:12:56
titleTag: Java
---



## 基础命令
### ls：列出文件list
List列出当前路径下的文件与文件夹。

    ls 常用参数：
    -l：列出文件的详细信息
    -a：all，列出所有文件，包括隐藏文件
    注：参数可以叠加使用，如-la表示列出所有文件及其详细信息

### cd：切换目录change directory
    cd /home		# 切换/进入home目录
    cd ..			# 到上一目录（父目录）
    cd ../..		# 到父目录的父目录
    cd .			# 进入当前目录（其实啥都不做）


### cp：复制copy
    cp 常用参数：
    -i：interactive mode，若有同名文件，会询问是否覆盖（如果没这个参数，会不提示，直接覆盖）
    -r：recursive copy，复制文件夹时连同子文件（夹）一起复制，如果是对文件夹进行操作，一定要带这个参数

    cp -ir sourceDir/ home/targetDir/	# 把当前路径下的sourceDir文件夹复制到home目录下，取名为targetDir，且带参数-i和-r

### mv：移动move
即剪切操作。源文件会被删除。

    mv 参数：
    -i： interactive mode，同cp的-i参数，若覆盖会询问

    mv -i sourceFile /home/targetFile	# 把当前目录下的sourceFile剪切到/home目录下并命名为targetFile

### rm：移除，删除remove
    rm 参数：
    -i：interactive，同上，若覆盖，先询问
    -r：recursive mode，删除所有子文件（夹）

    rm Dir/	# 删除Dir文件夹（错误示例，会报错）
    rm -r Dir/	# 删除Dir文件夹（正确，对文件夹操作一定要带-r）

### mkdir：创建文件夹make directory
    mkdir newDir/	# 在当前路径创建一个空文件夹newDir/

### rmdir：移除，删除文件夹remove directory
    rmdir oldDir/	# 在当前路径删除oldDir文件夹及其子文件（夹）

### chown：更改所有者change owner
    chown 参数：
    -R： 同-r，recursive

    chown user -R myDir/	# 把文件夹myDir的所有者改成user

### chmod：更改文件的权限模式change mode
文件权限模式针对三类对象：当前用户user（这里也是文件的所有者），组group，其他用户other。
文件权限有读Read，写Write，执行Execute。

chmod参数：

    u: user，权限对象为当前用户（这里是所有者）
    g：group，权限对象为所有者和组
    o：other，权限对象为其他用户
    r：read = 4，读权限
    w：write = 2，写权限
    e：execute = 1，执行权限
    +：u/g/o与r/w/e组合使用，加入
    -：删除
    =：设置
    4：仅读
    5：仅读+执行
    6：仅读+写
    7：读+写+执行

    chmod 754 myDir/	# 当前用户（所有者）可读+写+执行，组group可读+执行，其他用户可读
    chmod g+w myDir/	# 为组group添加写write权限
    chmod -R 777 myDir/ # 给myDir/及其所有子目录添加所有权限
    ls -n # 可以查看当前目录下各子目录的文件权限

### find：查找


    find 常用参数：
    -name：根据文件名查找
    -mtime n：n为数字，表示找出在n天前的当天被更改过的文件（0表示今天）
    -mtime +n：查找在n天前（不包括n天当天）被改过的文件
    -mtime -n：查找在n天之内（包括n天当天）被改过的文件
    -size +/-：查找比XXsize大/小的文件

    find /home -name myFile		# 在/home目录下查找文件名为myFile的文件（注：myFile也可以搭配正则表达式使用）
    find /home -name *.txt		# 在/home目录下查找以txt为后缀的文件
    find /home -mtime 0			# 在/home目录下查找今天内被改过的文件
    find /home -mtime +1		# 在/home目录下查找昨天之前（不包括昨天）被改过的文件
    find /home -mtime -1		# 在/home目录下查找昨天至今（即昨天和今天）被改过的文件
    find /home -size +100M		# 在/home目录下查找大于100MB的文件，注意c表示byte

### |：管道

将前一个命令的输出结果像管道一样传递给后一个命令作为输入

    ls | find -name myFile	# 列出当前路径的文件（夹）并查找名字为“myFile”的，打印出来

### grep：按行查找并匹配
    grep参数：
    -r：recursive，查找所有子文件（夹）
    -n：number，显示行号
    -w：word，完整匹配整个单词
    -i：insensitive search，忽略大小写
    -l：显示文件名称，而非匹配到的行的内容
    -v：反向选择，显示出没匹配到的行的内容

    grep -i mystring file.txt	# 忽略大小写，在file.txt中查找并打印出有“mystring”的行
    ls -l | grep -i mystring	# 在ls -l的输出中把有“mystring”的行打印出来（忽略大小写）

### tar：打包，压缩，解压
    tar常用参数
    -jcv：压缩
    -jxv：解压

    tar -jcv myDir/		# 压缩myDir文件夹
    tar -jxv DownloadDir.tar.gz myDir/	# 解压DownloadDir.tar.gz到当前文件夹下，并命令为myDir

### cat：打印文件内容
    cat myFile	# 显示myFile

### ps：查看进程process select
    ps 常用参数：
    -A：显示所有进程
    -a：不与terminal有关的所有进程
    -u：有效用户的相关进程
    -x：一般与-a一起用，列出完整的进程信息
    -l：long，详细列出PID的信息

    ps Aux 	# 查看系统所有的进程数据
    ps ax	

### kill：杀死进程
    kill常用参数：
    -SIGHUP：启动被终止的进程
    -SIGINT：相当于ctrl+c，中断进程
    -SIGKILL：强制中断进程
    -SIGTERM：以正常的结束进程方式来终止进程
    -SIGSTOP：相当于ctrl+z，暂停进程

    kill -SIGKILL 10876	# 强制中断PID=10876的进程（PID可以通过ps查到，有时可以加上| grep进行筛选）

### passwd：修改密码password
    passwd	# 修改当前用户的密码

### pwd：显示工作目录print work directory
    pwd	# 显示当前路径的具体位置

### tee：显示并保存
显示内容并将内容保存在文件中。

    python3.6 test.py | tee result.log	# 运行test.py文件，显示编译与运行结果并保存成result.log文件
### reboot：重启
    reboot	# 输完立马重启（记得保存文件）

其他命令

    alias 设置别名
    alias cp='cp -i'  # 输入cp默认调用cp -i
    alias rm='rm -i'
    alias mv='mv -i'

    bg查看后端运行的进程 background
    bg #会显示后端进程的号码
    kill %1 #强制杀死1号进程

### touch创建新文件
    touch new_file.txt # 创建一个new_file.txt文件

### du
    du -h 打印文件/文件夹的大小
    du -h #打印当前目录下所有子目录与子文件夹的大小
    du -h --max-depth=0 #打印当前目录的大小
    du -h --max-depth=1 #打印当前目录下所有子目录的大小 


## 高级命令

### 重定向命令
重定向命令介绍
重定向也称为输出重定向，把在终端执行命令的结果保存到目标文件。
重定向命令使用

    命令	说明
    >	如果文件存在会覆盖原有的’w’ 模式
    >>	如果文件存在会追加写入的’a’模式
说明只要在终端能显示信息的命令都可以使用重定向，比如：tree。
小结

    终端内容保存到文件使用重定向有两种方式：>和>>
    >表示每次只写入最新的数据，原有数据不保留。
    >>表示每次在原有数据的基础上进行追加，原有数据会保留。
### 查看文件内容命令
查看文件内容命令的使用

    命令	说明
    cat	查看小型文件
    more	分屏查看大型文件
    
    cat命令结合重定向可以完成多个文件的合并
    gedit文件编辑命令，可以查看和编辑文件
查看内容信息过长无法在一屏上显示，可以使用more命令。在终端分配显示文件内容。

操作键说明

    操作键	说明
    空格	显示下一屏信息
    回车	显示下一行信息
    b	显示上一屏信息
    f	显示下一屏信息
    q	退出

管道(|)命令的使用

    管道（|）：一个命令的输出可以通过管道做为另一个命令的输入，可以理解成是一个容器，存放在终端显示的内容。
    说明：管道（|）一般结合more命令使用，主要是分配查看终端显示内容。

小结

    查看小文件使用cat命令
    分屏查看大型文件使用more命令
    查看终端显示内容并分屏展示，使用 管道(|) 结合 more 命令。
    
### 链接命令
链接命令介绍
链接命令是创建链接文件，链接文件分为：
    
    软链接
    硬链接
    命令	说明
    ln -s	创建软连接
    ln	创建硬链接
软链接：
类似于Windows下的快捷方式，当一个源文件的目录层级比较深，我们想要方便使用它可以给源文件创建一个软链接。

注意点:

    • 如果软链接和源文件不在同一个目录，源文件要使用绝对路径，不能使用相对路径。
    • 删除源文件则软链接失效
    • 可以给目录创建软链接

软链接小结

    • 软链接的作用是方便文件的快速访问，比如:给一个复杂路径下的文件创建一个软链接，以后就可以通过软链接完成快速访问操作。
    • 创建软链接命令格式: ln -s 源文件路径(使用绝对路径) 软链接

硬链接
    
    类似于源文件的一个别名，也就是说这两个名字指向的是同一个文件数据。


注意点:

    • 创建硬链接使用相对路径和绝对路径都可以
    • 删除源文件，硬链接还可以访问到数据。
    • 创建硬链接，硬链接数会加1，删除源文件或者硬链接，硬链接数会减1。
    • 创建软链接，硬链接数不会加1
    • 不能给目录创建硬链接
硬链接数:
硬链接数就是文件数据被文件名使用的次数, 好比引用计数

硬链接小结

    • 硬链接的作用是可以给重要文件创建硬链接，能够防止文件数据被误删。
    • 删除源文件，软链接失效，但是硬链接依然可以使用。
    • 创建硬链接命令格式: ln 源文件路径 硬链接

### 文本搜索命令
grep命令的使用

    命令	说明
    grep	文本搜索
    grep命令选项的使用

    命令选项	说明
    -i	忽略大小写
    -n	显示匹配行号
    -v	显示不包含匹配文本的所有行
grep命令结合正则表达式的使用

    正则表达式	说明
    ^	以指定字符串开头
    $	以指定字符串结尾
    .	匹配一个非换行符的字符

扩展

    grep 命令还可以文本搜索管道中的内容，比如: ls / | grep ‘lib’
    在使用 grep 命令的时候还可以省略搜索内容的引号，比如: ls / | grep lib， grep hello 1.txt
小结

    grep 命令是完成文本搜索操作的
    文本搜索的命令格式：grep 选项 文本搜索内容
### 查找文件命令
find命令及选项的使用

    命令	说明
    find	在指定目录下查找文件(包括目录)
find命令选项

    选项	说明
    -name	根据文件名(包括目录名)字查找
    find命令结合通配符的使用
通配符
是一种特殊语句，主要有星号(*)和问号(?)，用来模糊搜索文件

    通配符	说明
    *	代表0个或多个任意字符
    /	代表任意一个字符
扩展

通配符不仅能结合 find 命令使用，还可以结合其它命令使用, 比如: ls、mv、cp 等，这里需要注意只有 find 命令使用通配符需要加上引号。
小结

    • find命令是完成查找文件操作的
    • 查找文件的命令格式: find 指定查找目录 -name “文件名”

### 压缩和解压命令
压缩格式的介绍
Linux默认支持的压缩格式

    .gz
    .bz2
    .zip
说明

    .gz和.bz2的压缩包需要使用tar命令来压缩和解压缩
    .zip的压缩包需要使用zip命令来压缩，使用unzip命令来解压缩
压缩的目的

    为了节省自盘的空间
tar命令及选项的使用
    
    命令	说明
    tar	压缩和解压缩命令
    tar命令选项

    选项	说明
    -c	创建打包文件
    -v	显示打包或者解包的详细信息
    -f	指定文件名称, 必须放到所有选项后面
    -z	压缩或解压缩(.gz)
    -j	压缩或解压缩(.bz2)
    -x	解包
    -C	解压缩到指定目录
zip和unzip命令及选项的使用

    命令	说明
    zip	压缩成.zip格式文件
    unzip	解压缩.zip格式文件
unzip

    选项	说明
    -d	解压缩到指定木目录
说明

    压缩文件尽量使用.gz格式，因为占用空间较少
    使用zip命令压缩的文件占用空间比较多, 当时比较通用，操作更加简单。
小结

    .gz和.bz2的压缩文件使用tar命令来完成压缩和解压缩
    .zip的压缩文件使用zip和unzip命令来完成压缩和解压缩
### 文件权限命令
chmod

    命令	说明
    chmod	修改文件权限
chmod修改文件权限有两种方式

    字母法
    数字法
chmod字母法的使用
角色说明

    角色	说明
    u	user, 表示该文件的所有者
    g	group, 表示用户组
    o	other, 表示其他用户
    a	all, 表示所有用户
权限设置说明

    操作符	说明
    +	增加权限
    -	撤销权限
    =	设置权限
权限说明

    权限	说明
    r	可读
    w	可写
    x	可执行
    -	无任何权限
chmod数字法的使用
    
    数字法就是“rwx” 这些权限也可以用数字来代替
权限说明

    权限	说明
    r	可读，权限值是4
    w	可写，权限值是2
    x	可执行，权限值是1
    -	无任何权限，权限值是0
小结

    利用chmod命令可以控制文件的操作权限
    字母法格式：chmod 不同角色设置的权限 文件
    数字法格式: chmod 不同角色的权限值 文件名
### 获取管理员的相关命令
sudo

    命令	说明
    sudo -s	切换到root用户，获取管理员权限
    sudo	某个命令的执行需要获取管理员权限可以在执行命令前面加上sudo
说明

    如果只是某次操作需要使用管理员权限建议使用 sudo , 也就是说临时使用管理器权限。
    如果大量操作都需要使用管理员权限 sudo –s, 但是操作需谨慎
whoami命令的使用

    命令	说明
    whoami	查看当前用户限
exit命令的使用

    命令	说明
    exit	退出登录用户
说明:

    • 如果是切换后的登陆用户，退出则返回上一个登陆账号。
    • 如果是终端界面，退出当前终端。

who命令的使用

    命令	说明
    who	查看所有的登录用户
passwd命令的使用

    命令	说明
    passwd	修改用户密码，不指定用户默认修改当前登录用户密码
which命令的使用

    命令	说明
    which	查看命令位置
关机和重启命令的使用

    命令	说明
    shutdown -h now	立刻关机
reboot	重启
### 用户相关操作
创建用户

    命令	说明
    useradd	创建(添加用户)
    useradd命令选项

    选项	说明
    -m	自动创建用户主目录,主目录的名字就是用户名
    -g	指定用户所属的用户组，默认不指定会自动创建一个同名的用户组
说明

    • useradd 命令的使用需要使用管理员权限，前面需要加上 sudo
    • 创建用户如果不指定用户组，默认会自动创建一个同名的用户组
    • 查看用户是否创建成功，可以查看/etc/passwd这个文件
    • 查看用户组是否创建成功，可以查看/etc/group这个文件

passwd文件中的每项信息说明,以root:x:0:0:root:/root:/bin/bash为例

    • 第一个：用户名
    • 第二个：密码占位符
    • 第三个：uid, 用户id
    • 第四个：gid, 用户所在组id
    • 第五个：用户描述, 可选，
    • 第六个：用户的主目录所在位置
    • 第七个：用户所用 shell 的类型，一般由bash或者sh，默认不设置是sh类型
group文件中的每项信息说明, 以laowang:x:1001:为例
    
    • 第一个：用户组名
    • 第二个：用户组密码占位符，一般Linux系统的用户组都没有密码的
    • 第三个：组id

id命令查看用户信息

命令	说明
id	查看用户信息

    每项信息说明
    uid=1001(laowang) gid=1001(laowang) 组=1001(laowang)
    • 第一个: uid 表示用户id
    • 第二个: gid 表示用户组id
    • 第三个: 组 表示用户所在的用户组

设置密码
给其它用户设置密码，需要使用: sudo passwd 用户名

切换用户

    命令	说明
    su	切换用户
语法格式: su - 用户名
修改用户信息

    命令	说明
    usermod	修改用户信息
usermod

    命令	说明
    -G	设置一个附加值
    -g	修改用户组
删除用户
    
    命令	说明
    userdel	删除用户
userdel命令选项

    命令	说明
    -r 用户名	删除用户主目录，必须要设置，否则用户主目录不会删除
说明:

删除用户，默认同名的用户组也会被删除
小结

    创建用户命令格式：sudo useradd -m 用户名，默认会创建一个同名的用户组
    查看用户信息使用 id 命令或者 /etc/passwd文件
    查看用户组信息使用 /etc/group文件
    给用户设置密码使用 sudo passwd 用户名
    切换用户使用 su - 用户名
    设置附加组使用 sudo usermod -G 组名 用户名
    删除用户使用 sudo userdel -r 用户名，默认会删除同名的用户组。
### 用户组相关操作
创建用户组

    命令	说明
    groupadd	创建(添加)用户
创建用户并指定用户组
    
    sudo useradd -m -g test lizhe

修改用户组

    sudo groupadd abc
    sudo usermod -g abc laowang

删除用户组

    命令	说明
    groupdel	删除用户组
    sudo groupdel test

说明:如果用户组下面有用户先删除用户在删除用户组
小结

    创建用户组使用: sudo groupadd 用户组名
    创建用户并指定用户组使用: sudo useradd -m -g 用户组 用户名
    修改用户组使用: sudo usermod -g 用户组 用户名
    删除用户组使用: sudo groupdel 用户组名
### 软件安装
软件安装的介绍

Ubuntu软件安装有两种方式:离线安装(deb文件格式安装）、在线安装(apt-get方式安装)
deb文件格式安装
是 Ubuntu 的安装包格式，可以使用 dpkg 命令进行软件的安装和卸载。

    命令	说明
    dpkg	安装和卸载deb安装包
    dpkg命令选项

    选项	说明
    -i	离线安装deb安装包
**apt-get方式安装**
是在线安装deb软件包的命令，主要用于在线从互联网的软件仓库中搜索、安装、升级、卸载软件。
在线安装软件命令格式:

    sudo apt–get install 安装包 , 表示在线安装deb安装包
更改镜像源

因为使用 apt-get 命令默认是从国外的服务器下载安装软件的，会导致下载安装速度很慢，所以需要更改成国内的镜像源服务器。

    镜像源说明：镜像源就是下载软件来源的服务器。
更改镜像源的方式

    可视化方式更改镜像源
    手动方式更改镜像源
    https://mirrors.tuna.tsinghua.edu.cn/
说明

    手动修改镜像源，配置完成以后需要执行 sudo apt-get update 这个命令，更新镜像源保证可以下载最新的软件。
    使用apt-get方式安装软件一定要联网
小结
Ubuntu 操作系统安装软件有两种方式:

    sudo dpkg -i 安装包 命令
    sudo apt-get install 安装包 命令卸载
    使用 apt-get 命令也就是在线安装需要更改镜像源，提高下载和安装速度。

### 编辑器 vim
vim介绍
vim 是一款功能强大的文本编辑器，也是早年 Vi 编辑器的加强版，它的最大特色就是使用命令进行编辑，完全脱离了鼠标的操作。

vim的工作模式

    命令模式
    编辑模式
    末行模式

说明

vim打开文件进入的是命令模式



注意点:编辑模式和末行模式之间不能直接进行切换，都需要通过命令模式来完成。

    vim的末行模式命令
    :w 保存
    :wq 保存退出
    :x 保存退出
    :q! 强制退出
vim常用命令

    命令	说明
    yy	复制光标所在行
    p	粘贴
    dd	删除/剪贴当前行
    V	按行选中
    u	撤销
    ctrl + r	反撤销
    >>	向右缩进
    <<	向左缩进
    :/搜索的内容	搜索指定内容
    :%s/要替换的内容/替换后的内容/g	全局替换
    :开始行数,结束行数s/要替换的内容/替换后的内容	局部替换
    .	重复上一次命令操作
    G	回到最后一行
    gg	回到第一行
    数字 + G	回到指定行
    shift + 6	回到当前行的行首
    shift + 4	回到当前行的行末
    ctrl + f	下一屏
    ctrl + b	上一屏
