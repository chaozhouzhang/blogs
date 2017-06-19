# 依赖注入
[Dagger2](https://github.com/google/dagger)是Square公司的[Dagger](https://github.com/square/dagger)的升级版，是一个依赖注入框架，现在由Google公司接手维护，具体使用见[Google的dagger官方文档](https://google.github.io/dagger/)。
依赖注入是面向对象编程的一种设计模式，其目的是为了降低程序耦合，这个耦合就是类之间的依赖引起的。

```
public class ClassA {
    ClassB b;
    
    public ClassA() {
        b = new ClassB();
    }

    public void do() {
        b.doSomething();
    }
}
```



### 通过接口注入
```
  public interface ClassBInterface {
      void setB(ClassB b);
  }

  public class ClassA implements ClassBInterface {
      ClassB classB;

      @override
      void setB(ClassB b) {
          classB = b;
      }
  }
```
### 通过set方法注入
```
  public class ClassA {
      ClassB classB;

      public void setClassB(ClassB b) {
          classB = b;
      }
  }

```
### 通过构造方法注入
```
 public class ClassA {
      ClassB classB;

      public void ClassA(ClassB b) {
          classB = b;
      }
 }
```
### 通过Java注解
```
  public class ClassA {
      //此时并不会完成注入，还需要依赖注入框架的支持，如RoboGuice,Dagger2
      @inject 
      ClassB classB;

      public ClassA() {}
  }
```

