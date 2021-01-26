# #define

#### 简单定义

```
#define MAXTIME 1000
```
编译器在处理这个代码之前会对MAXTIME进行处理替换为1000，这样的定义看起来类似于普通的常量定义CONST，但也有着不同，因为define的定义更像是简单的文本替换，而不是作为一个量来使用。

#### 函数定义

```
#define max(x,y) (x)>(y)?(x):(y);
```

隐患：

```
#define add(a,b) a+b;

如果遇到如c * add(a,b) * d的时候就会出现问题，代数式的本意是c*(a+b)*d，但是因为使用了define，所以式子实际上变成了c*a + b*d。

```

```
#define pin (int*);
pin a,b;
本意是a和b都是int型指针，但是实际上变成int* a,b;
a是int型指针，而b是int型变量。
这是应该使用typedef来代替define，这样a和b就都是int型指针了。
```

隐患解决：
培养一个好习惯，在用define的时候，将所有的层次都加上括号。


#### 单行定义
```
#define A(x) T_##x
#define B(x) #@x
#define C(x) #x
```
```
A(1) T_1
B(1) '1'
C(1) "1"
```



#### 多行定义

```
#define MACRO(arg1, arg2) do { /
/* declarations */ /
stmt1; /
stmt2; /
/* ... */ /
} while(0) /* (no trailing ; ) */
```
关键是要在每一个换行的时候加上一个"/"。


#### 条件编译

```
#ifdef WINDOWS
......
......
#endif
#ifdef Linux
......
......
#endif
```


