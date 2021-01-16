1、弹框点击外部一段距离不会消失，需要点击距离够长才会消失

解决：在dialog的create下加入以下代码，去掉dialog的title

```java
requestWindowFeature(Window.FEATURE_NO_TITLE);
```

