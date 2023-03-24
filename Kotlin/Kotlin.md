# Kotlin

https://www.kotlincn.net/

声明变量

```kotlin
private var name:String = "Stack"
```

只读变量

```kotlin
private val name:String = "Stack"
```

编译时常量

```kotlin
const val PI = 3.1415F
```

字面常量

```kotlin
//十进制
Long:60L
Float:3.1415F
Double:10.5e10
//十六进制
0x0F
//二进制
0b00001011
//不支持八进制
```

位宽

```kotlin
//小b，位，比特，1位 = 1比特 = 1bit = 1b
//大B，字节，1字节 = 1byte = 1B = 8位
//1B = 8b
//1KB = 1024B
//1MB = 1024KB
//1GB = 1024MB
```

基本类型

```kotlin
private var name: String = "Stack"
private var byt: Byte = 1 //8位
private var sht: Short = 1 //16位
private var age: Int = 1 //32位
private var time: Long = 60L //64位
private var pi: Float = 3.1415F //32位
private var pos: Double = 10.5e10 //64位
private var ca: Char = 'A' //16位
private var ch: Char = '中' //16位
private var yes: Boolean = false //1位
```

类型推断

```kotlin
private var name = "Stack"
private var byt = 1
private var sht = 1
private var age = 1
private var time = 60L
private var pi = 3.1415F
private var pos = 10.5e10
private var cha = 'A'
private var ch: Char = '中'
private var yes = false
```

转换

```
隐式转换
显式转换
```



数值比较

```kotlin
=== 表示比较对象地址，== 表示比较两个值大小。
```

位操作符

```kotlin
shl(bits) – 有符号左移
shr(bits) – 有符号右移
ushr(bits) – 无符号右移
and(bits) – 位与
or(bits) – 位或
xor(bits) – 位异或
inv() – 位非
//使用中缀方式调用具名函数：
val x = (1 shl 2) and 0x000FF000
```

浮点数操作

```kotlin
相等性检测：a == b 与 a != b
比较操作符：a < b、 a > b、 a <= b、 a >= b
区间实例以及区间检测：a..b、 x in a..b、 x !in a..b
```

数值类型转换

```kotlin
toByte(): Byte
toShort(): Short
toInt(): Int
toLong(): Long
toFloat(): Float
toDouble(): Double
toChar(): Char
```

字符串字符

```kotlin
val name = "Stack"
println(name[0])
for (c in name) {
    println(c)
}
```

string模板

```kotlin
//字符串字面值包含模板表达式$
val name = "Stack"
println("name:$name")
```

分界符

```kotlin
//分界符"""，默认 | 用作边界前缀，可使用trimMargin("|")传入自定义边界前缀，trimIndent替换空格不替换换行。
val text = """
    |Tell me and I forget.
    |Teach me and I remember.
    |Involve me and I learn.
    |(Benjamin Franklin)
    """.trimMargin()
println(text)
```

数组

```

```

range表达式

```
```

when表达式

```
```

函数

```
匿名函数
具名函数
```

函数默认参数

```
```

Unit函数

```
```

Nothing函数

```
```

反引号函数

```
```

字节码

```kotlin
Android Studio -> Tools -> Kotlin -> Show Kotlin Bytecode
```

控制流

```kotlin
//if
在 Kotlin 中，if是一个表达式，即它会返回一个值。
如果使用 if 作为表达式而不是语句，该表达式需要有 else 分支。
//when
如果 when 作为一个表达式使用，则必须有 else 分支， 除非编译器能够检测出所有的可能情况都已经覆盖。
例如，对于 枚举（enum）类条目与密封（sealed）类子类型。
//for

//while

```



类

```kotlin
类名
类头：指定其类型参数、主构造函数等
类体
初始化块
类型参数：泛型
主构造函数：主构造函数没有任何注解或者可见性修饰符，可以省略 constructor 关键字。
如果类有一个主构造函数，每个次构造函数需要委托给主构造函数，可以直接委托或者通过别的次构造函数间接委托。

package com.stack.kotlin

class Stack<T> constructor(lan: Int) {

    private var lang: Int
    private lateinit var name: String

    constructor(nam: String, lan: Int) : this(lan) {
        name = nam
    }

    init {
        lang = lan
    }

}
```

