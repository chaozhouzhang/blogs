####1、新建文件夹存放服务器文件。
sudo mkdir ~/Sites
####2、切换到Apache路径，备份配置文件，如果后续操作出现错误，则可以恢复配置文件。
cd /etc/apache2
sudo cp httpd.conf httpd.conf.bak
以下命令待操作失误再输入，用以恢复配置文件：
sudo cp httpd.conf.bak httpd.conf
####3、开启Apache。
sudo apachectl -k start
在浏览器中访问【 http://lcoalhost 】或者【 http://127.0.0.1 】，出现【It works!】。
####3、修改配置文件。
sudo vim httpd.conf
搜索【/DocumentRoot】
按下【i】键
将【/Library/WebServer/Documents】替换成：【/User/你的用户名/Sites】
搜索【/php】
将光标定位到此行，并移动到最左边，按下【x】键删除【#】
搜索【/Options】
如果系统版本是10.10，则在【Options】和【FollowSymLinks】之间增加单词【Indexes】
按下【esc】键，输入【:wq】是保存并退出，【:q!】是不保存直接退出。
####4、在Sites文件夹中放入服务器文件，拷贝配置文件后，重启Apache，然后重新在浏览器中访问。
sudo cp php.ini.default php.ini
sudo apachectl -k restart
####5、服务器开关重启命令。
sudo apachectl -k start
sudo apachectl -k restart
sudo apachectl -k stop
####6、vim两种模式。
1、命令模式、用于输入命令（输入法必须在英文状态） 
（1）shift+V 可以选中一行； 
（2）y 复制一行 
（3）p 在当前行下方粘贴复制内容 
（4）d$ 删除到行尾 
（5）x 删除一个字符 
（6）：wq 保存退出 
（7）：q！不保存退出 
（8）：set nu 显示行号 
（9）i 进入编辑模式 
2、编辑模式：用于编辑按Esc可以切换回命令模式



