# 1、版本控制系统
## 1.1、集中式版本控制系统：
### 1.1.1、特点
1）效率低、安全性低：中央服务器保存完整的版本库，单独开发和协同合作都需要联网；

2）分支管理：速度慢；

3）标签管理；

### 1.1.2、产品
1）CVS：CVS是一个C/S系统，是最早的开源的免费的代码版本控制软件，由于CVS自身设计的问题，会造成提交文件不完整，版本库莫名其妙损坏的情况；

2）SVN：SVN是Subversion的简称，是一个开放源代码的版本控制系统，相较于RCS、CVS，它采用了分支管理系统，修正了CVS的一些稳定性问题，是目前用得最多的集中式版本库控制系统；

## 1.2、分布式版本控制系统：
### 1.2.1、特点
1）效率高、安全性高：每个开发者都保存有完整的版本库，单独开发无需联网；

2）远程仓库：协同合作时需要中央服务器，用于保存版本库并交换所有开发者的修改，需要联网；

3）分支管理：速度快；

4）标签管理；

### 1.2.2、产品	
1）Git：Git是一款免费、开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目；

2）BitKeeper：BitKeeper是BitMover公司开发的分布式版本控制系统；

3）Mercurial：Mercurial是一种轻量级分布式版本控制系统，采用 Python 语言实现，易于学习和使用，扩展性强。其是基于 GNU General Public License (GPL) 授权的开源项目；

4）Bazaar：Bazaar是一个分布式的版本控制系统，采用 GPL 许可协议，由 Canonical 公司（Ubuntu母公司）赞助；

# 2、安装Git
## 2.1、Linux
1）Debian或Ubuntu Linux
```
sudo apt-get install git
```
2）旧版Debian或旧版Ubuntu Linux
```
sudo apt-get install git-core
```
3）其他Linux版本

先从Git官网下载源码，然后解压，依次输入：./config，make，sudo make install安装。

## 2.2、Mac OS X
### 2.2.1、Homebrew安装
1）安装Homebrew：
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
2）安装Git：
```
brew install git
```
3）查看安装的开源软件包：
```
brew list
```
4）查看某个软件包安装的详细路径和安装内容：
```
brew list git
```
### 2.2.2、XCode安装
1）从AppStore安装Xcode，Xcode集成了Git；

2）运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”完成安装。

## 2.3、Windows
### 2.3.1、msysgit安装
1）msysgit已经将模拟环境和Git都打包好，默认选项安装即可，下载地址：
```
https://git-for-windows.github.io/
```
2）安装完成后，在开始菜单里找到“Git”->“Git Bash”；

3）账号邮箱设置：

```
git config --global user.name "Your Name"

git config --global user.email "email@example.com"
```

# 3、远程仓库
## 4.1、创建SSH Key
进入用户主目录里的.ssh/目录：
```
ssh-keygen -t rsa -C "youremail@example.com"
```
根据提示输入密钥的名称id_rsa以及口令，创建成功后，有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露，id_rsa.pub是公钥。
 
## 4.2、添加公钥到Gtihub
  登陆GitHub，进入“Settings”，打开“SSH and GPG keys”页面，然后点击“Add SSH Key”，在Title文本框填上密钥名称，在Key文本框里粘贴id_rsa.pub文件的内容。

## 4.3、将远程仓库和本地版本库进行关联
在本地版本库目录下，添加远程仓库：
```
git remote add origin git@github.com:chaozhouzhang/test.git
```
添加成功之后，拉取远程仓库到本地主分支：
```
git pull origin master --allow-unrelated-histories
```
拉取成功之后，将修改提交到本地版本库：
```
git add .
git commit -m "add all"
```
提交成功之后，再将本地分支推送到远程仓库：
```
git push origin master
```
# 4、操作指令
| Command      | Operation          |Example                                      |
|--------------|--------------------|------------------------------------|
| init		    | 初始化Git仓库        | git init                          |
| add          | 添加修改到暂存区      | git add readme.txt                 |
| add          | 强制添加修改到暂存区| git add -f App.class         |
| commit       | 提交修改到版本库      | git commit -m "wrote a readme file"|                            
| status       | 查看工作区的状态      | git status                         |
| diff        	 | 查看文件的修改内容    | git diff readme.txt                | 
| diff| 查看文件在工作区和版本库里最新版本的区别| git diff HEAD --readme.txt    |              
| log       	 | 查看提交日志         | git log                            |            
| log       	 | 查看提交单行日志      | git log --pretty=oneline           |
| log       	 | 查看分支合并图        | git log --graph           | 
| log       	 | 查看提交单行简单名称日志| git log --pretty=oneline --abbrev-commit| 
| log | 查看分支单行合并图| git log --graph --pretty=oneline --abbrev-commit|                            
| reset        | 回退版本库到上1个版本 | git reset --hard HEAD^             |       
| reset        | 回退版本库到上2个版本 | git reset --hard HEAD^^             |                         
| reset        | 回退版本库到上100个版本 | git reset --hard HEAD~100         |                       
| reset        | 回退版本库到commitid版本 | git reset --hard 0cd2cfe       | 
| reset        | 回退暂存区的修改到工作区 | git reset HEAD readme.txt       |                                  
| reflog       | 查看命令历史          | git reflog                        |
| checkout     | 丢弃工作区的修改       | git checkout -- readme.txt       |
| checkout     | 创建并切换分支       | git checkout -b dev       |
|checkout|本地创建和远程分支对应的分支|git checkout -b branch-name origin/branch-name|
| checkout     | 切换分支       | git checkout master       |
| branch       | 查看当前分支       | git branch      |
| branch       | 创建分支       | git branch dev     |
| branch       | 删除分支       | git branch -d dev      |
| branch|建立本地分支和远程分支的关联|git branch --set-upstream branch-name origin/branch-name|
| branch       | 强行删除未合并的分支       | git branch -D feature-vulcan     |
| rm           | 从版本库中删除        | git rm readme.txt                 |  
| merge        | 合并指定分支到当前分支        | git merge dev              |  
| merge|普通模式合并，合并后的历史有分支 | git merge --no-ff -m "merge with no-ff" dev|  
| stash        | 储藏工作现场        | git stash              |  
| stash        | 查看储藏工作现场列表        | git stash list              | 
| stash        | 恢复储藏工作现场        | git stash apply              | 
| stash        | 删除储藏工作现场        | git stash drop              |  
| stash        | 恢复并删除储藏工作现场        | git stash pop              | 
| stash        | 恢复指定的储藏工作现场        | git stash apply stash@{0}|  
| clone| 克隆远程仓库到本地仓库| git clone github.com:chaozhouzhang/test.git|
| remote        | 查看远程仓库的信息        | git remote              | 
| remote        | 查看远程仓库的详细信息        | git remote -v             | 
| push        | 推送分支        | git push origin master             |
| push        | 推送某个标签到远程        | git push origin v1.0             |
| push        | 远程删除某个标签        | git push origin :refs/tags/v0.9|
| push        |一次性推送全部尚未推送到远程的本地标签 |git push origin --tags| 
| tag        | 打新标签       | git tag v1.0             | 
| tag        | 查看所有标签       | git tag             | 
| tag        | 给某个提交打标签       | git tag v0.9 6224937             | 
| tag| 创建带有说明的标签| git tag -a v0.1 -m "version 0.1 released" 3628164| 
| tag| 用私钥对标签PGP签名|git tag -s v0.2 -m "signed version 0.2 released" fec145a| 
| tag        | 删除本地标签       | git tag -d v0.1             | 
| show        | 查看某个标签信息       | git show v0.9             | 
| config        | 让Git显示颜色       | git config --global color.ui true |
| config        | 配置用户名       | git config --global user.name "Your Name" | 
| config        | 配置用户邮箱       | git config --global user.email "email@example.com" | 
| check-ignore        | 检查.gitignore规则       | git check-ignore -v App.class |
| config   | 配置命令的别名       |git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit" |

# 5、参考资料：
1）Git官网：
```
https://git-scm.com/
```
2）廖雪峰老师的Git教程：
```
http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
```
3）易百教程的Git教程：
```
http://www.yiibai.com/git/
```


  

