#场景一：解决冲突出错
1、在拉取远程仓库代码的时候出现冲突，例如同时在string.xml添加了字符串资源代码。

```
//将修改添加到暂存区
git add .
//将暂存区提交到本地仓库
git commit -m "add retrofit"
//将远程仓库拉到本地仓库，此时出现了远程仓库代码和本地仓库代码出现了冲突
git pull origin dev
```
本地添加代码：
```
<string name="close">关闭</string>
<string name="tips">提示</string>
<string name="confirm">确定</string>
<string name="cancel">取消</string>
```
远程添加的代码：
```
<string name="footer_loading">加载中...</string>
<string name="footer_error">发生错误了.点击重试</string>
<string name="footer_over">已经到底了!</string>
```
2、在解决冲突的时候出错，误将本地和远程添加的代码部分丢弃，并无法使用回退恢复。

3、将本地版本库回退到最新版本，再重新拉取远程仓库代码并重新解决冲突代码，最后提交解决冲突后的代码并推送到远程仓库。
```
//查看提交日志
git log 
//将本地版本库回退到最新提交的版本，其中0cd2cfe是commitId
git reset --hard 0cd2cfe
//拉取远程仓库的代码
git pull origin dev
//此时解决冲突，解决冲突后，将修改添加到暂存区
git add .
//将暂存区的修改提交到本地版本库
git commit -m "fix conflicts and merge"
//将本地仓库的代码推送到远程仓库
git push origin dev
```



