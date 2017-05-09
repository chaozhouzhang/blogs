# #ifndef
#### 释义
if not defined
#### 所解决的问题
如果两个C文件都include了同一个头文件，而且编译时这两个C文件要一同编译成一个可执行文件，就会产生大量的声明冲突。
#### 使用方法
在头文件中使用：
```
#ifndef 头文件名全部大写，前后加下划线，点变成下划线
#define 头文件名全部大写，前后加下划线，点变成下划线

……

#endif
```
使用示例，在头文件common.h中使用：
```
#ifndef _COMMON_H_
#define _COMMON_H_

……

#endif
```

