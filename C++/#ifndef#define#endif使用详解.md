# #ifndef/#define/#endif使用详解

头文件中的 #ifndef/#define/#endif 防止该头文件被重复引用：

```c++
#ifndef TEST_H
#define TEST_H

#endif //TEST_H
```

被重复引用是指一个头文件在同一个cpp文件中被include了多次，这种错误常常是由于include嵌套造成的。

头文件被重复引用引起的后果：

有些头文件重复引用增加了编译工作的工作量，编译效率低下。
有些头文件重复包含，会引起错误，比如在头文件中定义了全局变量，会引起重复定义。

```c++
#ifndef TEST_H
#define TEST_H

#include <math.h> // 引用标准库的头文件 
#include "header.h" // 引用非标准库的头文件 

void Function(); // 全局函数声明 

class Box // 类结构声明 
{ 

}; 

#endif //TEST_H
```

