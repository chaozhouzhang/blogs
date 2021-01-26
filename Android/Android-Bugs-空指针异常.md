1、强转null为封装类型后，赋值给基本类型，导致的空指针异常

如果把null强转给对象，是不会抛异常的，本身对象是可以为null的。但是如果是基本类型，比如 int i = (Integer)obj的强转，其实内部会调用intvalue方法去赋值给基本类型，所以这时候是会报错的，调用Integer.intValue是因为存在自动拆箱unboxing。

```java
Object obj = null;
Integer integer = (Integer)obj;
```
```java
Object obj = null;
int intValue = (Integer)obj;
```
```java
Object obj = null;    
int intValue = ((Integer)obj).intValue();
```