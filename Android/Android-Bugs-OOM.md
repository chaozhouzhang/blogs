Failed to allocate a 16 byte allocation with 3840 free bytes and 3KB until OOM



java.lang.OutOfMemoryError





#### 解决方案

```
该异常表示未能成功分配字节内存，通常是因为内存不足导致的内存溢出。
[解决方案]：OOM就是内存溢出，即Out of Memory。也就是说内存占有量超过了VM所分配的最大。怎么解决OOM，通常OOM都发生在需要用到大量内存的情况下（创建或解析Bitmap，分配特大的数组等），这里列举常见避免OOM的几个注意点：
1.适当调整图像大小。
2.采用合适的缓存策略。
3.采用低内存占用量的编码方式，比如Bitmap.Config.ARGB_4444比Bitmap.Config.ARGB_8888更省内存。
4.及时回收Bitmap。
5.不要在循环中创建过多的本地变量。
6.自定义对内存分配大小。
7.特殊情况可在mainfests的Application中增加 android:largeHeap="true"属性，比如临时创建多个小图片(地图marker)
```