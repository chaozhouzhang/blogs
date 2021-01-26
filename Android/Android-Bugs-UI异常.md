1、弹框点击外部一段距离不会消失，需要点击距离够长才会消失

解决：在dialog的create下加入以下代码，去掉dialog的title。

```java
requestWindowFeature(Window.FEATURE_NO_TITLE);
```

2、进入singletask页面，需要在Intent跳转的时候加上以下代码，用以清除两次task页面之间的页面。

```kotlin
intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP)
```

