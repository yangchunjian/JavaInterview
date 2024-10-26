(window.webpackJsonp=window.webpackJsonp||[]).push([[947],{2111:function(a,t,e){"use strict";e.r(t);var s=e(12),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装命令"}},[a._v("#")]),a._v(" 安装命令")]),a._v(" "),e("h3",{attrs:{id:"常用的-rpm-软件包命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的-rpm-软件包命令"}},[a._v("#")]),a._v(" 常用的 RPM 软件包命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("安装软件的命令格式\trpm -ivh filename.rpm\n升级软件的命令格式\trpm -Uvh filename.rpm\n卸载软件的命令格式\trpm -e filename.rpm\n查询软件描述信息的命令格式\trpm -qpi filename.rpm\n列出软件文件信息的命令格式\trpm -qpl filename.rpm\n查询文件属于哪个 RPM 的命令格式\trpm -qf filename\n")])])]),e("h3",{attrs:{id:"常见的-yum-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的-yum-命令"}},[a._v("#")]),a._v(" 常见的 Yum 命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("yum repolist all\t列出所有仓库\nyum list all\t列出仓库中所有软件包\nyum info\t查看软件包信息\nyum install\t安装软件包\nyum reinstall\t重新安装软件包\nyum update\t升级软件包\nyum remove\t移除软件包\nyum clean all\t清除所有仓库缓存\nyum check-update\t检查可更新的软件包\nyum grouplist\t查看系统中已经安装的软件包组\nyum groupinstall\t安装指定的软件包组\nyum groupremove\t移除指定的软件包组\nyum groupinfo\t查询指定的软件包组信息\n")])])]),e("h3",{attrs:{id:"什么是包管理系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是包管理系统"}},[a._v("#")]),a._v(" 什么是包管理系统？")]),a._v(" "),e("p",[a._v("包管理系统由一组工具和文件格式组成，它们一起用于安装、更新和卸载 Linux 应用。两种最常见的包管理系统来自 Red Hat 和 Debian。 Red Hat、CentOS 和 Fedora 都使用 rpm 系统（.rpm 文件），而 Debian、Ubuntu、Mint 和 Ubuntu 都使用 dpkg（.deb 文件）。Gentoo Linux 使用名为 Portage 的系统，Arch Linux 只使用 tarball（.tar 文件）。这些系统之间的主要区别在于它们如何安装和维护应用。")]),a._v(" "),e("p",[a._v("你可能想知道 .rpm、.deb 或 .tar 文件中的内容。你可能会惊讶地发现，所有这些都只是普通的老式归档文件（如 .zip），其中包含应用的代码，如何安装它的说明，依赖项（它可能依赖的其他应用），以及配置文件的位置。读取和执行所有这些指令的软件称为包管理器。")]),a._v(" "),e("h3",{attrs:{id:"debian、ubuntu、mint-等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debian、ubuntu、mint-等"}},[a._v("#")]),a._v(" Debian、Ubuntu、Mint 等")]),a._v(" "),e("p",[a._v("Debian、Ubuntu、Mint 和其它基于 Debian 的发行版都使用 .deb 文件和 dpkg 包管理系统。有两种方法可以通过此系统安装应用。你可以使用 apt 程序从仓库进行安装，也可以使用 dpkg 程序从 .deb 文件安装应用。我们来看看如何做到这两点。")]),a._v(" "),e("p",[a._v("使用 apt 安装应用非常简单：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo apt install app_name\n")])])]),e("p",[a._v("通过 apt 卸载应用也非常简单：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo apt remove app_name\n")])])]),e("p",[a._v("要升级已安装的应用，首先需要更新应用仓库：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo apt update\n")])])]),e("p",[a._v("完成后，你可以使用以下命令更新任何程序：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo apt upgrade\n")])])]),e("p",[a._v("如果你只想更新一个应用，该怎么办？没问题。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo apt update app_name\n")])])]),e("p",[a._v("最后，假设你要安装的应用不存在于 Debian 仓库中，但有 .deb 下载。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo dpkg -i app_name.deb\n")])])]),e("h3",{attrs:{id:"red-hat、centos-和-fedora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#red-hat、centos-和-fedora"}},[a._v("#")]),a._v(" Red Hat、CentOS 和 Fedora")]),a._v(" "),e("p",[a._v("默认情况下，Red Hat 使用多个包管理系统。这些系统在使用自己的命令时，互相仍然非常相似，而且与 Debian 中使用的也相似。例如，我们可以使用 yum 或 dnf 管理器来安装应用。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo yum install app_name\n$ sudo dnf install app_name\n")])])]),e("p",[a._v(".rpm 格式的应用也可以使用 rpm 命令安装。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo rpm -i app_name.rpm\n")])])]),e("p",[a._v("删除不需要的应用同样容易。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ sudo yum remove app_name\n$ sudo dnf remove app_name\n")])])]),e("p",[a._v("更新应用同样容易。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ yum update\n$ sudo dnf upgrade --refresh\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);