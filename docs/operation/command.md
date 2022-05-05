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

