(window.webpackJsonp=window.webpackJsonp||[]).push([[946],{2111:function(a,t,s){"use strict";s.r(t);var e=s(12),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"基础命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[a._v("#")]),a._v(" 基础命令")]),a._v(" "),s("h3",{attrs:{id:"ls-列出文件list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls-列出文件list"}},[a._v("#")]),a._v(" ls：列出文件list")]),a._v(" "),s("p",[a._v("List列出当前路径下的文件与文件夹。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ls 常用参数：\n-l：列出文件的详细信息\n-a：all，列出所有文件，包括隐藏文件\n注：参数可以叠加使用，如-la表示列出所有文件及其详细信息\n")])])]),s("h3",{attrs:{id:"cd-切换目录change-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-切换目录change-directory"}},[a._v("#")]),a._v(" cd：切换目录change directory")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("cd /home\t\t# 切换/进入home目录\ncd ..\t\t\t# 到上一目录（父目录）\ncd ../..\t\t# 到父目录的父目录\ncd .\t\t\t# 进入当前目录（其实啥都不做）\n")])])]),s("h3",{attrs:{id:"cp-复制copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp-复制copy"}},[a._v("#")]),a._v(" cp：复制copy")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("cp 常用参数：\n-i：interactive mode，若有同名文件，会询问是否覆盖（如果没这个参数，会不提示，直接覆盖）\n-r：recursive copy，复制文件夹时连同子文件（夹）一起复制，如果是对文件夹进行操作，一定要带这个参数\n\ncp -ir sourceDir/ home/targetDir/\t# 把当前路径下的sourceDir文件夹复制到home目录下，取名为targetDir，且带参数-i和-r\n")])])]),s("h3",{attrs:{id:"mv-移动move"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv-移动move"}},[a._v("#")]),a._v(" mv：移动move")]),a._v(" "),s("p",[a._v("即剪切操作。源文件会被删除。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("mv 参数：\n-i： interactive mode，同cp的-i参数，若覆盖会询问\n\nmv -i sourceFile /home/targetFile\t# 把当前目录下的sourceFile剪切到/home目录下并命名为targetFile\n")])])]),s("h3",{attrs:{id:"rm-移除-删除remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rm-移除-删除remove"}},[a._v("#")]),a._v(" rm：移除，删除remove")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("rm 参数：\n-i：interactive，同上，若覆盖，先询问\n-r：recursive mode，删除所有子文件（夹）\n\nrm Dir/\t# 删除Dir文件夹（错误示例，会报错）\nrm -r Dir/\t# 删除Dir文件夹（正确，对文件夹操作一定要带-r）\n")])])]),s("h3",{attrs:{id:"mkdir-创建文件夹make-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-创建文件夹make-directory"}},[a._v("#")]),a._v(" mkdir：创建文件夹make directory")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("mkdir newDir/\t# 在当前路径创建一个空文件夹newDir/\n")])])]),s("h3",{attrs:{id:"rmdir-移除-删除文件夹remove-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rmdir-移除-删除文件夹remove-directory"}},[a._v("#")]),a._v(" rmdir：移除，删除文件夹remove directory")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("rmdir oldDir/\t# 在当前路径删除oldDir文件夹及其子文件（夹）\n")])])]),s("h3",{attrs:{id:"chown-更改所有者change-owner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chown-更改所有者change-owner"}},[a._v("#")]),a._v(" chown：更改所有者change owner")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("chown 参数：\n-R： 同-r，recursive\n\nchown user -R myDir/\t# 把文件夹myDir的所有者改成user\n")])])]),s("h3",{attrs:{id:"chmod-更改文件的权限模式change-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chmod-更改文件的权限模式change-mode"}},[a._v("#")]),a._v(" chmod：更改文件的权限模式change mode")]),a._v(" "),s("p",[a._v("文件权限模式针对三类对象：当前用户user（这里也是文件的所有者），组group，其他用户other。\n文件权限有读Read，写Write，执行Execute。")]),a._v(" "),s("p",[a._v("chmod参数：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("u: user，权限对象为当前用户（这里是所有者）\ng：group，权限对象为所有者和组\no：other，权限对象为其他用户\nr：read = 4，读权限\nw：write = 2，写权限\ne：execute = 1，执行权限\n+：u/g/o与r/w/e组合使用，加入\n-：删除\n=：设置\n4：仅读\n5：仅读+执行\n6：仅读+写\n7：读+写+执行\n\nchmod 754 myDir/\t# 当前用户（所有者）可读+写+执行，组group可读+执行，其他用户可读\nchmod g+w myDir/\t# 为组group添加写write权限\nchmod -R 777 myDir/ # 给myDir/及其所有子目录添加所有权限\nls -n # 可以查看当前目录下各子目录的文件权限\n")])])]),s("h3",{attrs:{id:"find-查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find-查找"}},[a._v("#")]),a._v(" find：查找")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("find 常用参数：\n-name：根据文件名查找\n-mtime n：n为数字，表示找出在n天前的当天被更改过的文件（0表示今天）\n-mtime +n：查找在n天前（不包括n天当天）被改过的文件\n-mtime -n：查找在n天之内（包括n天当天）被改过的文件\n-size +/-：查找比XXsize大/小的文件\n\nfind /home -name myFile\t\t# 在/home目录下查找文件名为myFile的文件（注：myFile也可以搭配正则表达式使用）\nfind /home -name *.txt\t\t# 在/home目录下查找以txt为后缀的文件\nfind /home -mtime 0\t\t\t# 在/home目录下查找今天内被改过的文件\nfind /home -mtime +1\t\t# 在/home目录下查找昨天之前（不包括昨天）被改过的文件\nfind /home -mtime -1\t\t# 在/home目录下查找昨天至今（即昨天和今天）被改过的文件\nfind /home -size +100M\t\t# 在/home目录下查找大于100MB的文件，注意c表示byte\n")])])]),s("h3",{attrs:{id:"管道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[a._v("#")]),a._v(" |：管道")]),a._v(" "),s("p",[a._v("将前一个命令的输出结果像管道一样传递给后一个命令作为输入")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ls | find -name myFile\t# 列出当前路径的文件（夹）并查找名字为“myFile”的，打印出来\n")])])]),s("h3",{attrs:{id:"grep-按行查找并匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep-按行查找并匹配"}},[a._v("#")]),a._v(" grep：按行查找并匹配")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("grep参数：\n-r：recursive，查找所有子文件（夹）\n-n：number，显示行号\n-w：word，完整匹配整个单词\n-i：insensitive search，忽略大小写\n-l：显示文件名称，而非匹配到的行的内容\n-v：反向选择，显示出没匹配到的行的内容\n\ngrep -i mystring file.txt\t# 忽略大小写，在file.txt中查找并打印出有“mystring”的行\nls -l | grep -i mystring\t# 在ls -l的输出中把有“mystring”的行打印出来（忽略大小写）\n")])])]),s("h3",{attrs:{id:"tar-打包-压缩-解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar-打包-压缩-解压"}},[a._v("#")]),a._v(" tar：打包，压缩，解压")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("tar常用参数\n-jcv：压缩\n-jxv：解压\n\ntar -jcv myDir/\t\t# 压缩myDir文件夹\ntar -jxv DownloadDir.tar.gz myDir/\t# 解压DownloadDir.tar.gz到当前文件夹下，并命令为myDir\n")])])]),s("h3",{attrs:{id:"cat-打印文件内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat-打印文件内容"}},[a._v("#")]),a._v(" cat：打印文件内容")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("cat myFile\t# 显示myFile\n")])])]),s("h3",{attrs:{id:"ps-查看进程process-select"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps-查看进程process-select"}},[a._v("#")]),a._v(" ps：查看进程process select")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("ps 常用参数：\n-A：显示所有进程\n-a：不与terminal有关的所有进程\n-u：有效用户的相关进程\n-x：一般与-a一起用，列出完整的进程信息\n-l：long，详细列出PID的信息\n\nps Aux \t# 查看系统所有的进程数据\nps ax\t\n")])])]),s("h3",{attrs:{id:"kill-杀死进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kill-杀死进程"}},[a._v("#")]),a._v(" kill：杀死进程")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("kill常用参数：\n-SIGHUP：启动被终止的进程\n-SIGINT：相当于ctrl+c，中断进程\n-SIGKILL：强制中断进程\n-SIGTERM：以正常的结束进程方式来终止进程\n-SIGSTOP：相当于ctrl+z，暂停进程\n\nkill -SIGKILL 10876\t# 强制中断PID=10876的进程（PID可以通过ps查到，有时可以加上| grep进行筛选）\n")])])]),s("h3",{attrs:{id:"passwd-修改密码password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#passwd-修改密码password"}},[a._v("#")]),a._v(" passwd：修改密码password")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("passwd\t# 修改当前用户的密码\n")])])]),s("h3",{attrs:{id:"pwd-显示工作目录print-work-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwd-显示工作目录print-work-directory"}},[a._v("#")]),a._v(" pwd：显示工作目录print work directory")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("pwd\t# 显示当前路径的具体位置\n")])])]),s("h3",{attrs:{id:"tee-显示并保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tee-显示并保存"}},[a._v("#")]),a._v(" tee：显示并保存")]),a._v(" "),s("p",[a._v("显示内容并将内容保存在文件中。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("python3.6 test.py | tee result.log\t# 运行test.py文件，显示编译与运行结果并保存成result.log文件\n")])])]),s("h3",{attrs:{id:"reboot-重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reboot-重启"}},[a._v("#")]),a._v(" reboot：重启")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("reboot\t# 输完立马重启（记得保存文件）\n")])])]),s("p",[a._v("其他命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("alias 设置别名\nalias cp='cp -i'  # 输入cp默认调用cp -i\nalias rm='rm -i'\nalias mv='mv -i'\n\nbg查看后端运行的进程 background\nbg #会显示后端进程的号码\nkill %1 #强制杀死1号进程\n")])])]),s("h3",{attrs:{id:"touch创建新文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#touch创建新文件"}},[a._v("#")]),a._v(" touch创建新文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("touch new_file.txt # 创建一个new_file.txt文件\n")])])]),s("h3",{attrs:{id:"du"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#du"}},[a._v("#")]),a._v(" du")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("du -h 打印文件/文件夹的大小\ndu -h #打印当前目录下所有子目录与子文件夹的大小\ndu -h --max-depth=0 #打印当前目录的大小\ndu -h --max-depth=1 #打印当前目录下所有子目录的大小 \n")])])]),s("h2",{attrs:{id:"高级命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级命令"}},[a._v("#")]),a._v(" 高级命令")]),a._v(" "),s("h3",{attrs:{id:"重定向命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定向命令"}},[a._v("#")]),a._v(" 重定向命令")]),a._v(" "),s("p",[a._v("重定向命令介绍\n重定向也称为输出重定向，把在终端执行命令的结果保存到目标文件。\n重定向命令使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\n>\t如果文件存在会覆盖原有的’w’ 模式\n>>\t如果文件存在会追加写入的’a’模式\n")])])]),s("p",[a._v("说明只要在终端能显示信息的命令都可以使用重定向，比如：tree。\n小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("终端内容保存到文件使用重定向有两种方式：>和>>\n>表示每次只写入最新的数据，原有数据不保留。\n>>表示每次在原有数据的基础上进行追加，原有数据会保留。\n")])])]),s("h3",{attrs:{id:"查看文件内容命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看文件内容命令"}},[a._v("#")]),a._v(" 查看文件内容命令")]),a._v(" "),s("p",[a._v("查看文件内容命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\ncat\t查看小型文件\nmore\t分屏查看大型文件\n\ncat命令结合重定向可以完成多个文件的合并\ngedit文件编辑命令，可以查看和编辑文件\n")])])]),s("p",[a._v("查看内容信息过长无法在一屏上显示，可以使用more命令。在终端分配显示文件内容。")]),a._v(" "),s("p",[a._v("操作键说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("操作键\t说明\n空格\t显示下一屏信息\n回车\t显示下一行信息\nb\t显示上一屏信息\nf\t显示下一屏信息\nq\t退出\n")])])]),s("p",[a._v("管道(|)命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("管道（|）：一个命令的输出可以通过管道做为另一个命令的输入，可以理解成是一个容器，存放在终端显示的内容。\n说明：管道（|）一般结合more命令使用，主要是分配查看终端显示内容。\n")])])]),s("p",[a._v("小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("查看小文件使用cat命令\n分屏查看大型文件使用more命令\n查看终端显示内容并分屏展示，使用 管道(|) 结合 more 命令。\n")])])]),s("h3",{attrs:{id:"链接命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接命令"}},[a._v("#")]),a._v(" 链接命令")]),a._v(" "),s("p",[a._v("链接命令介绍\n链接命令是创建链接文件，链接文件分为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("软链接\n硬链接\n命令\t说明\nln -s\t创建软连接\nln\t创建硬链接\n")])])]),s("p",[a._v("软链接：\n类似于Windows下的快捷方式，当一个源文件的目录层级比较深，我们想要方便使用它可以给源文件创建一个软链接。")]),a._v(" "),s("p",[a._v("注意点:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 如果软链接和源文件不在同一个目录，源文件要使用绝对路径，不能使用相对路径。\n• 删除源文件则软链接失效\n• 可以给目录创建软链接\n")])])]),s("p",[a._v("软链接小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 软链接的作用是方便文件的快速访问，比如:给一个复杂路径下的文件创建一个软链接，以后就可以通过软链接完成快速访问操作。\n• 创建软链接命令格式: ln -s 源文件路径(使用绝对路径) 软链接\n")])])]),s("p",[a._v("硬链接")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("类似于源文件的一个别名，也就是说这两个名字指向的是同一个文件数据。\n")])])]),s("p",[a._v("注意点:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 创建硬链接使用相对路径和绝对路径都可以\n• 删除源文件，硬链接还可以访问到数据。\n• 创建硬链接，硬链接数会加1，删除源文件或者硬链接，硬链接数会减1。\n• 创建软链接，硬链接数不会加1\n• 不能给目录创建硬链接\n")])])]),s("p",[a._v("硬链接数:\n硬链接数就是文件数据被文件名使用的次数, 好比引用计数")]),a._v(" "),s("p",[a._v("硬链接小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 硬链接的作用是可以给重要文件创建硬链接，能够防止文件数据被误删。\n• 删除源文件，软链接失效，但是硬链接依然可以使用。\n• 创建硬链接命令格式: ln 源文件路径 硬链接\n")])])]),s("h3",{attrs:{id:"文本搜索命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本搜索命令"}},[a._v("#")]),a._v(" 文本搜索命令")]),a._v(" "),s("p",[a._v("grep命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\ngrep\t文本搜索\ngrep命令选项的使用\n\n命令选项\t说明\n-i\t忽略大小写\n-n\t显示匹配行号\n-v\t显示不包含匹配文本的所有行\n")])])]),s("p",[a._v("grep命令结合正则表达式的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("正则表达式\t说明\n^\t以指定字符串开头\n$\t以指定字符串结尾\n.\t匹配一个非换行符的字符\n")])])]),s("p",[a._v("扩展")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("grep 命令还可以文本搜索管道中的内容，比如: ls / | grep ‘lib’\n在使用 grep 命令的时候还可以省略搜索内容的引号，比如: ls / | grep lib， grep hello 1.txt\n")])])]),s("p",[a._v("小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("grep 命令是完成文本搜索操作的\n文本搜索的命令格式：grep 选项 文本搜索内容\n")])])]),s("h3",{attrs:{id:"查找文件命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找文件命令"}},[a._v("#")]),a._v(" 查找文件命令")]),a._v(" "),s("p",[a._v("find命令及选项的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nfind\t在指定目录下查找文件(包括目录)\n")])])]),s("p",[a._v("find命令选项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("选项\t说明\n-name\t根据文件名(包括目录名)字查找\nfind命令结合通配符的使用\n")])])]),s("p",[a._v("通配符\n是一种特殊语句，主要有星号(*)和问号(?)，用来模糊搜索文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("通配符\t说明\n*\t代表0个或多个任意字符\n/\t代表任意一个字符\n")])])]),s("p",[a._v("扩展")]),a._v(" "),s("p",[a._v("通配符不仅能结合 find 命令使用，还可以结合其它命令使用, 比如: ls、mv、cp 等，这里需要注意只有 find 命令使用通配符需要加上引号。\n小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• find命令是完成查找文件操作的\n• 查找文件的命令格式: find 指定查找目录 -name “文件名”\n")])])]),s("h3",{attrs:{id:"压缩和解压命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩和解压命令"}},[a._v("#")]),a._v(" 压缩和解压命令")]),a._v(" "),s("p",[a._v("压缩格式的介绍\nLinux默认支持的压缩格式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(".gz\n.bz2\n.zip\n")])])]),s("p",[a._v("说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(".gz和.bz2的压缩包需要使用tar命令来压缩和解压缩\n.zip的压缩包需要使用zip命令来压缩，使用unzip命令来解压缩\n")])])]),s("p",[a._v("压缩的目的")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("为了节省自盘的空间\n")])])]),s("p",[a._v("tar命令及选项的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\ntar\t压缩和解压缩命令\ntar命令选项\n\n选项\t说明\n-c\t创建打包文件\n-v\t显示打包或者解包的详细信息\n-f\t指定文件名称, 必须放到所有选项后面\n-z\t压缩或解压缩(.gz)\n-j\t压缩或解压缩(.bz2)\n-x\t解包\n-C\t解压缩到指定目录\n")])])]),s("p",[a._v("zip和unzip命令及选项的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nzip\t压缩成.zip格式文件\nunzip\t解压缩.zip格式文件\n")])])]),s("p",[a._v("unzip")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("选项\t说明\n-d\t解压缩到指定木目录\n")])])]),s("p",[a._v("说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("压缩文件尽量使用.gz格式，因为占用空间较少\n使用zip命令压缩的文件占用空间比较多, 当时比较通用，操作更加简单。\n")])])]),s("p",[a._v("小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v(".gz和.bz2的压缩文件使用tar命令来完成压缩和解压缩\n.zip的压缩文件使用zip和unzip命令来完成压缩和解压缩\n")])])]),s("h3",{attrs:{id:"文件权限命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件权限命令"}},[a._v("#")]),a._v(" 文件权限命令")]),a._v(" "),s("p",[a._v("chmod")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nchmod\t修改文件权限\n")])])]),s("p",[a._v("chmod修改文件权限有两种方式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("字母法\n数字法\n")])])]),s("p",[a._v("chmod字母法的使用\n角色说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("角色\t说明\nu\tuser, 表示该文件的所有者\ng\tgroup, 表示用户组\no\tother, 表示其他用户\na\tall, 表示所有用户\n")])])]),s("p",[a._v("权限设置说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("操作符\t说明\n+\t增加权限\n-\t撤销权限\n=\t设置权限\n")])])]),s("p",[a._v("权限说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("权限\t说明\nr\t可读\nw\t可写\nx\t可执行\n-\t无任何权限\n")])])]),s("p",[a._v("chmod数字法的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("数字法就是“rwx” 这些权限也可以用数字来代替\n")])])]),s("p",[a._v("权限说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("权限\t说明\nr\t可读，权限值是4\nw\t可写，权限值是2\nx\t可执行，权限值是1\n-\t无任何权限，权限值是0\n")])])]),s("p",[a._v("小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("利用chmod命令可以控制文件的操作权限\n字母法格式：chmod 不同角色设置的权限 文件\n数字法格式: chmod 不同角色的权限值 文件名\n")])])]),s("h3",{attrs:{id:"获取管理员的相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取管理员的相关命令"}},[a._v("#")]),a._v(" 获取管理员的相关命令")]),a._v(" "),s("p",[a._v("sudo")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nsudo -s\t切换到root用户，获取管理员权限\nsudo\t某个命令的执行需要获取管理员权限可以在执行命令前面加上sudo\n")])])]),s("p",[a._v("说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("如果只是某次操作需要使用管理员权限建议使用 sudo , 也就是说临时使用管理器权限。\n如果大量操作都需要使用管理员权限 sudo –s, 但是操作需谨慎\n")])])]),s("p",[a._v("whoami命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nwhoami\t查看当前用户限\n")])])]),s("p",[a._v("exit命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nexit\t退出登录用户\n")])])]),s("p",[a._v("说明:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 如果是切换后的登陆用户，退出则返回上一个登陆账号。\n• 如果是终端界面，退出当前终端。\n")])])]),s("p",[a._v("who命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nwho\t查看所有的登录用户\n")])])]),s("p",[a._v("passwd命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\npasswd\t修改用户密码，不指定用户默认修改当前登录用户密码\n")])])]),s("p",[a._v("which命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nwhich\t查看命令位置\n")])])]),s("p",[a._v("关机和重启命令的使用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nshutdown -h now\t立刻关机\n")])])]),s("p",[a._v("reboot\t重启")]),a._v(" "),s("h3",{attrs:{id:"用户相关操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户相关操作"}},[a._v("#")]),a._v(" 用户相关操作")]),a._v(" "),s("p",[a._v("创建用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nuseradd\t创建(添加用户)\nuseradd命令选项\n\n选项\t说明\n-m\t自动创建用户主目录,主目录的名字就是用户名\n-g\t指定用户所属的用户组，默认不指定会自动创建一个同名的用户组\n")])])]),s("p",[a._v("说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• useradd 命令的使用需要使用管理员权限，前面需要加上 sudo\n• 创建用户如果不指定用户组，默认会自动创建一个同名的用户组\n• 查看用户是否创建成功，可以查看/etc/passwd这个文件\n• 查看用户组是否创建成功，可以查看/etc/group这个文件\n")])])]),s("p",[a._v("passwd文件中的每项信息说明,以root❌0:0:root:/root:/bin/bash为例")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 第一个：用户名\n• 第二个：密码占位符\n• 第三个：uid, 用户id\n• 第四个：gid, 用户所在组id\n• 第五个：用户描述, 可选，\n• 第六个：用户的主目录所在位置\n• 第七个：用户所用 shell 的类型，一般由bash或者sh，默认不设置是sh类型\n")])])]),s("p",[a._v("group文件中的每项信息说明, 以laowang❌1001:为例")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("• 第一个：用户组名\n• 第二个：用户组密码占位符，一般Linux系统的用户组都没有密码的\n• 第三个：组id\n")])])]),s("p",[a._v("id命令查看用户信息")]),a._v(" "),s("p",[a._v("命令\t说明\nid\t查看用户信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("每项信息说明\nuid=1001(laowang) gid=1001(laowang) 组=1001(laowang)\n• 第一个: uid 表示用户id\n• 第二个: gid 表示用户组id\n• 第三个: 组 表示用户所在的用户组\n")])])]),s("p",[a._v("设置密码\n给其它用户设置密码，需要使用: sudo passwd 用户名")]),a._v(" "),s("p",[a._v("切换用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nsu\t切换用户\n")])])]),s("p",[a._v("语法格式: su - 用户名\n修改用户信息")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nusermod\t修改用户信息\n")])])]),s("p",[a._v("usermod")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\n-G\t设置一个附加值\n-g\t修改用户组\n")])])]),s("p",[a._v("删除用户")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nuserdel\t删除用户\n")])])]),s("p",[a._v("userdel命令选项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\n-r 用户名\t删除用户主目录，必须要设置，否则用户主目录不会删除\n")])])]),s("p",[a._v("说明:")]),a._v(" "),s("p",[a._v("删除用户，默认同名的用户组也会被删除\n小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("创建用户命令格式：sudo useradd -m 用户名，默认会创建一个同名的用户组\n查看用户信息使用 id 命令或者 /etc/passwd文件\n查看用户组信息使用 /etc/group文件\n给用户设置密码使用 sudo passwd 用户名\n切换用户使用 su - 用户名\n设置附加组使用 sudo usermod -G 组名 用户名\n删除用户使用 sudo userdel -r 用户名，默认会删除同名的用户组。\n")])])]),s("h3",{attrs:{id:"用户组相关操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户组相关操作"}},[a._v("#")]),a._v(" 用户组相关操作")]),a._v(" "),s("p",[a._v("创建用户组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\ngroupadd\t创建(添加)用户\n")])])]),s("p",[a._v("创建用户并指定用户组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("sudo useradd -m -g test lizhe\n")])])]),s("p",[a._v("修改用户组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("sudo groupadd abc\nsudo usermod -g abc laowang\n")])])]),s("p",[a._v("删除用户组")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\ngroupdel\t删除用户组\nsudo groupdel test\n")])])]),s("p",[a._v("说明:如果用户组下面有用户先删除用户在删除用户组\n小结")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("创建用户组使用: sudo groupadd 用户组名\n创建用户并指定用户组使用: sudo useradd -m -g 用户组 用户名\n修改用户组使用: sudo usermod -g 用户组 用户名\n删除用户组使用: sudo groupdel 用户组名\n")])])]),s("h3",{attrs:{id:"软件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软件安装"}},[a._v("#")]),a._v(" 软件安装")]),a._v(" "),s("p",[a._v("软件安装的介绍")]),a._v(" "),s("p",[a._v("Ubuntu软件安装有两种方式:离线安装(deb文件格式安装）、在线安装(apt-get方式安装)\ndeb文件格式安装\n是 Ubuntu 的安装包格式，可以使用 dpkg 命令进行软件的安装和卸载。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\ndpkg\t安装和卸载deb安装包\ndpkg命令选项\n\n选项\t说明\n-i\t离线安装deb安装包\n")])])]),s("p",[s("strong",[a._v("apt-get方式安装")]),a._v("\n是在线安装deb软件包的命令，主要用于在线从互联网的软件仓库中搜索、安装、升级、卸载软件。\n在线安装软件命令格式:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("sudo apt–get install 安装包 , 表示在线安装deb安装包\n")])])]),s("p",[a._v("更改镜像源")]),a._v(" "),s("p",[a._v("因为使用 apt-get 命令默认是从国外的服务器下载安装软件的，会导致下载安装速度很慢，所以需要更改成国内的镜像源服务器。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("镜像源说明：镜像源就是下载软件来源的服务器。\n")])])]),s("p",[a._v("更改镜像源的方式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("可视化方式更改镜像源\n手动方式更改镜像源\nhttps://mirrors.tuna.tsinghua.edu.cn/\n")])])]),s("p",[a._v("说明")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("手动修改镜像源，配置完成以后需要执行 sudo apt-get update 这个命令，更新镜像源保证可以下载最新的软件。\n使用apt-get方式安装软件一定要联网\n")])])]),s("p",[a._v("小结\nUbuntu 操作系统安装软件有两种方式:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("sudo dpkg -i 安装包 命令\nsudo apt-get install 安装包 命令卸载\n使用 apt-get 命令也就是在线安装需要更改镜像源，提高下载和安装速度。\n")])])]),s("h3",{attrs:{id:"编辑器-vim"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑器-vim"}},[a._v("#")]),a._v(" 编辑器 vim")]),a._v(" "),s("p",[a._v("vim介绍\nvim 是一款功能强大的文本编辑器，也是早年 Vi 编辑器的加强版，它的最大特色就是使用命令进行编辑，完全脱离了鼠标的操作。")]),a._v(" "),s("p",[a._v("vim的工作模式")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令模式\n编辑模式\n末行模式\n")])])]),s("p",[a._v("说明")]),a._v(" "),s("p",[a._v("vim打开文件进入的是命令模式")]),a._v(" "),s("p",[a._v("注意点:编辑模式和末行模式之间不能直接进行切换，都需要通过命令模式来完成。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("vim的末行模式命令\n:w 保存\n:wq 保存退出\n:x 保存退出\n:q! 强制退出\n")])])]),s("p",[a._v("vim常用命令")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("命令\t说明\nyy\t复制光标所在行\np\t粘贴\ndd\t删除/剪贴当前行\nV\t按行选中\nu\t撤销\nctrl + r\t反撤销\n>>\t向右缩进\n<<\t向左缩进\n:/搜索的内容\t搜索指定内容\n:%s/要替换的内容/替换后的内容/g\t全局替换\n:开始行数,结束行数s/要替换的内容/替换后的内容\t局部替换\n.\t重复上一次命令操作\nG\t回到最后一行\ngg\t回到第一行\n数字 + G\t回到指定行\nshift + 6\t回到当前行的行首\nshift + 4\t回到当前行的行末\nctrl + f\t下一屏\nctrl + b\t上一屏\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);