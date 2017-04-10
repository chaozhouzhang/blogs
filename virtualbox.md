#在Mac的VirtualBox上安装Windows虚拟机后，创建共享文件夹：

1、在VirtualBox界面：设置--共享文件夹--添加--选择共享文件夹的路径--勾选自动挂载和固定分配；

2、在Windows虚拟机界面：Devices--Insert Guest Additions CD mage...--运行程序；

3、在Windows虚拟机中的计算机目录下，会出现Windows盘符；



#在Mac的VirtualBox上安装Ubuntu虚拟机后，创建共享文件夹：

1、同Windows

2、同Windows

3、（1）在Ubuntu虚拟机中创建存放共享文件夹的文件夹：
	
	sudo mkdir /mnt/shareMac
	
（2）改变存放共享文件夹的文件夹读写属性：
	
	sudo chmod 777 /mnt/shareMac
	
（3）挂载存放共享文件夹的文件夹（其中Ubuntu是Mac下共享文件夹的名称）：

	sudo mount -t vboxsf Ubuntu /mnt/shareMac
	
（4）查看存放共享文件夹的文件夹：

	ls /mnt/shareMac

