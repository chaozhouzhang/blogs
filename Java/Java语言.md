# Java语言


## int和Integer的区别
```
/**
 * 包装类型间的相等判断应该用equals而不是==。
 * 例如Integer类型的相等判断如果使用==，也就是Integer.valueOf(int)方法则在-128和127（或是虚拟机配置）间的对象是相等的，在此范围之外的对象就是不相等的，
 * 因为Integer内部维护了一个Integer缓存数组，如果在此范围之内就返回缓存数组中的对象，此时是同个对象，否则重新创建一个对象，此时是两个不同对象。
 * <p>
 * Character缓存数组:0到127
 * Byte、Short、Long缓存数组：-128到127
 * Integer缓存数组：-128和127（或是127与虚拟机配置间的取大值）
 * Boolean、Float、Double没有缓存数组
 * <p>
 * 基本数据类型和包装类型间的相等比较可以用：
 * 基本数据类型==包装类型
 * 或
 * 包装类型.equals(基本数据类型)
 */

public static void testInteger() {
    /**
     * true
     */
    Integer integer1 = 100;
    Integer integer2 = 100;
    System.out.println(integer1 == integer2);


    /**
     * false
     */
    Integer integer3 = 1000;
    Integer integer4 = 1000;
    System.out.println(integer3 == integer4);


    /**
     * false
     */
    Double d1 = 100.0;
    Double d2 = 100.0;
    System.out.println(d1 == d2);

    /**
     * true
     * true
     */
    int integer5 = 1000;
    Integer integer6 = 1000;
    System.out.println(integer5 == integer6);
    System.out.println(integer6.equals(integer5));
}
```

