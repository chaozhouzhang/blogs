写在前面：
1）感谢Git官网：https://git-scm.com/
2）感谢廖雪峰老师的Git教程：http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000

1、版本控制系统
1.1、集中式版本控制系统：
1.1.1、特点
1）效率低、安全性低：中央服务器保存完整的版本库，单独开发和协同合作都需要联网；
2）分支管理：速度慢；
3）标签管理；
1.1.2、产品
1）CVS：CVS是一个C/S系统，是最早的开源的免费的代码版本控制软件，由于CVS自身设计的问题，会造成提交文件不完整，版本库莫名其妙损坏的情况；
2）SVN：SVN是Subversion的简称，是一个开放源代码的版本控制系统，相较于RCS、CVS，它采用了分支管理系统，修正了CVS的一些稳定性问题，是目前用得最多的集中式版本库控制系统；

1.2、分布式版本控制系统：
1.2.1、特点
1）效率高、安全性高：每个开发者都保存有完整的版本库，单独开发无需联网；
2）远程仓库：协同合作时需要中央服务器，用于保存版本库并交换所有开发者的修改，需要联网；
2）分支管理：速度快；
3）标签管理；
1.2.2、产品
1）Git：Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目；
2）BitKeeper：BitKeeper是BitMover公司开发的分布式版本控制系统；
3）Mercurial：Mercurial是一种轻量级分布式版本控制系统，采用 Python 语言实现，易于学习和使用，扩展性强。其是基于 GNU General Public License (GPL) 授权的开源项目；
4）Bazaar：Bazaar是一个分布式的版本控制系统，采用 GPL 许可协议，由 Canonical 公司（Ubuntu母公司）赞助；

2、安装Git
2.1、Linux
1）Debian或Ubuntu Linux
sudo apt-get install git
2）旧版Debian或旧版Ubuntu Linux
sudo apt-get install git-core
3）其他Linux版本
先从Git官网下载源码，然后解压，依次输入：./config，make，sudo make install安装。

2.2、Mac OS X
2.2.1、Homebrew安装
1）安装Homebrew：/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2）安装Git：brew install git
3）查看安装的开源软件包：brew list
4）查看某个软件包安装的详细路径和安装内容：brew list git
2.2.2、XCode安装
1）从AppStore安装Xcode，Xcode集成了Git；
2）运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”完成安装。

2.3、Windows
2.3.1、msysgit安装
1）msysgit已经将模拟环境和Git都打包好，默认选项安装即可，下载地址：https://git-for-windows.github.io/；
2）安装完成后，在开始菜单里找到“Git”->“Git Bash”；
3）设置：
git config --global user.name "Your Name"
git config --global user.email "email@example.com"

3、





