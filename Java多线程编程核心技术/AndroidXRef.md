AndroidXRef
GrepCode



VisualGo.net
coursera.org




android studio memory monitor
横坐标记录从采集开始点到目前已经过去的时间，纵坐标是分配给App使用的内存总量[Allocated+Free]，
蓝色区域表示已分配[Allocated]使用的的，灰色区域表示空闲[Free]未使用的。
时间轴:从手机连接USB开始算起,每隔5秒一个单位;
内存轴:13.06M--8.00M--0.00M;
Free[2.49M]:空闲未使用的内存大小;
Allocated[7.92M]:已分配使用的内存大小;



我们可以从Memory monitor看到何时发生了GC event，当一个内存短时间内发生掉落，我们可以认为发生了GC操作。
你也可以手动触发GC,下图中的小车子就是触发GC的按钮，一旦按下就会回收那些没被引用的对象
(这个地方不能说没用的对象，因为没用的对象有可能是内存泄漏时的对象，后期会来研究)： 
1.发现内存抖动的场景:，很明显在很短的时间了发生了多次的内存分配和释放。
而且在发生内存抖动的时候，也能感觉到App的卡顿，可以看出来是由于执行了GC操作造成的。 
2.发现大内存对象分配的场景:内存突然增加了好多M;
3.发现内存不断增长的场景;
4.确定卡顿问题是否因为执行了GC操作;


http://blog.csdn.net/itfootball/article/details/48712595
http://www.cnblogs.com/Boohee/p/6217087.html
https://developer.android.com/studio/profile/am-basics.html


http://blog.csdn.net/aaa2832/article/details/19419679/


D:\sdk\platform-tools>hprof-conv.exe
android - java


http://www.jianshu.com/p/d4c2c62ffc35



