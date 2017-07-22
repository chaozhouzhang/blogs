#synchronized
字面意思是同步的，Java语言的关键字，当它用来修饰一个方法或者一个代码块的时候，能够保证在同一时刻最多只有一个线程执行该段代码。

##1、synchronized方法
每个类实例对应一把锁，每个 synchronized 方法都必须获得调用该方法的类实例的锁方能执行，否则所属线程阻塞，方法一旦执行，就独占该锁，直到从该方法返回时才将锁释放，此后被阻塞的线程方能获得该锁，重新进入可执行状态。

在 Java 中，将访问类成员变量的方法声明为synchronized，以此来控制对类成员变量的访问。不光是类实例，每一个类也对应一把锁，也可以将类的静态成员函数声明为synchronized ，以控制其对类的静态成员变量的访问。

 synchronized 方法的缺陷：若将一个大的方法声明为synchronized 将会大大影响效率。


##2、synchronized代码块
一、当两个并发线程访问同一个对象object中的这个synchronized(this)同步代码块时，一个时间内只能有一个线程得到执行。另一个线程必须等待当前线程执行完这个代码块以后才能执行该代码块。
```
public class Thread1 implements Runnable {
    public static void main(String[] args) {
        Thread1 myt1 = new Thread1();//锁的对象是myt1
        Thread t1 = new Thread(myt1, "t1");
        Thread t2 = new Thread(myt1, "t2");
        t1.start();
        t2.start();
    }

    @Override
    public void run() {
        synchronized (this) {
            for (int i = 0; i < 5; i++) {
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(Thread.currentThread().getName() + " : " + i);
            }
        }
    }
}
```
运行结果：
```
t1 : 0
t1 : 1
t1 : 2
t1 : 3
t1 : 4
t2 : 0
t2 : 1
t2 : 2
t2 : 3
t2 : 4
```
二、然而，当一个线程访问object的一个synchronized(this)同步代码块时，另一个线程仍然可以访问该object中的非synchronized(this)同步代码块。
```
public class Thread2 {
    public void m4t1() {
        synchronized (this) {//同步代码块
            int i = 5;
            while (i-- > 0) {
                System.out.println(Thread.currentThread().getName() + " : m4t1()=" + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ie) {
                }
            }
        }
    }

    public void m4t2() {
        int i = 5;
        while (i-- > 0) {
            System.out.println(Thread.currentThread().getName() + " : m4t2()=" + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException ie) {
            }
        }
    }

    public static void main(String[] args) {
        final Thread2 myt2 = new Thread2();//锁的对象是myt2
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                myt2.m4t1();
            }
        }, "t1");
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                myt2.m4t2();
            }
        }, "t2");
        t1.start();
        t2.start();
    }
}
```
运行结果：
```
t2 : m4t2()=4
t1 : m4t1()=4
t1 : m4t1()=3
t2 : m4t2()=3
t2 : m4t2()=2
t1 : m4t1()=2
t1 : m4t1()=1
t2 : m4t2()=1
t2 : m4t2()=0
t1 : m4t1()=0
```
三、尤其关键的是，当一个线程访问object的一个synchronized(this)同步代码块时，它就获得了这个object的对象锁。结果，其它线程对该object对象中所有其他同步代码部分的访问都将被暂时阻塞，包括synchronized同步代码方法和synchronized(this)同步代码块。
```
public class Thread3 {
    public void m4t1() {
        synchronized (this) {//同步代码块
            int i = 5;
            while (i-- > 0) {
                System.out.println(Thread.currentThread().getName() + " : m4t1()=" + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ie) {
                }
            }
        }
    }

    public void m4t2() {
        synchronized (this) {//同步代码块
            int i = 5;
            while (i-- > 0) {
                System.out.println(Thread.currentThread().getName() + " : m4t2()=" + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ie) {
                }
            }
        }

    }

    public synchronized void m4t3() {//同步方法
        int i = 5;
        while (i-- > 0) {
            System.out.println(Thread.currentThread().getName() + " : m4t3()=" + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException ie) {
            }
        }

    }

    public static void main(String[] args) {
        final Thread3 myt3 = new Thread3();//锁的对象是myt3
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                myt3.m4t1();
            }
        }, "t1");
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                myt3.m4t2();
            }
        }, "t2");
        Thread t3 = new Thread(new Runnable() {
            @Override
            public void run() {
                myt3.m4t3();
            }
        }, "t3");
        t1.start();
        t2.start();
        t3.start();
    }
}
```
运行结果：
```
t1 : m4t1()=4
t1 : m4t1()=3
t1 : m4t1()=2
t1 : m4t1()=1
t1 : m4t1()=0
t3 : m4t3()=4
t3 : m4t3()=3
t3 : m4t3()=2
t3 : m4t3()=1
t3 : m4t3()=0
t2 : m4t1()=4
t2 : m4t1()=3
t2 : m4t1()=2
t2 : m4t1()=1
t2 : m4t1()=0
```
四、以上规则对其它对象锁同样适用。
```
public class Thread4 {
    class Inner {
        private void m4t1() {
            int i = 5;
            while (i-- > 0) {
                System.out.println(Thread.currentThread().getName() + " : Inner.m4t1()=" + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ie) {
                }
            }
        }

        private synchronized void m4t2() {//同步Inner类的方法
            int i = 5;
            while (i-- > 0) {
                System.out.println(Thread.currentThread().getName() + " : Inner.m4t2()=" + i);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException ie) {
                }
            }
        }
    }

    private void m4t1(Inner inner) {
        synchronized (inner) { //同步代码块
            inner.m4t1();
        }
    }

    private void m4t2(Inner inner) {
        inner.m4t2();
    }

    public static void main(String[] args) {
        final Thread4 myt4 = new Thread4();
        final Inner inner = myt4.new Inner();//锁的对象是inner
        Thread t1 = new Thread(new Runnable() {
            public void run() {
                myt4.m4t1(inner);
            }
        }, "t1");
        Thread t2 = new Thread(new Runnable() {
            public void run() {
                myt4.m4t2(inner);
            }
        }, "t2");
        t1.start();
        t2.start();
    }
}
```
运行结果：
```
t1 : Inner.m4t1()=4
t1 : Inner.m4t1()=3
t1 : Inner.m4t1()=2
t1 : Inner.m4t1()=1
t1 : Inner.m4t1()=0
t2 : Inner.m4t2()=4
t2 : Inner.m4t2()=3
t2 : Inner.m4t2()=2
t2 : Inner.m4t2()=1
t2 : Inner.m4t2()=0
```



##3、通俗理解
###3.1、同步方法
一个object就像一个大房子，大门永远打开。房子里有很多房间（也就是方法）。这些房间有上锁的（synchronized方法），和不上锁之分（普通方法）。房门口放着一把钥匙（key），这把钥匙可以打开所有上锁的房间。想调用该对象方法的线程是想进入这房子某个房间的人。

一个人想进入某间上了锁的房间，他来到房子门口，看见钥匙在那儿，于是他走上去拿到了钥匙，并且按照自己的计划使用那些房间。注意一点，他每次使用完一次上锁的房间后会马上把钥匙还回去，即使他要连续使用两间上锁的房间，中间他也要把钥匙还回去，再取回来。

这时其他人可以不受限制的使用那些不上锁的房间，一个人用一间可以，两个人用一间也可以，没限制。但是如果当某个人想要进入上锁的房间，他就要跑到大门口去看看了。有钥匙当然拿了就走，没有的话，就只能等了。

要是很多人在等这把钥匙，等钥匙还回来以后，谁会优先得到钥匙？像前面例子里那个想连续使用两个上锁房间的家伙，他中间还钥匙的时候如果还有其他人在等钥匙，那么没有任何因素能保证这家伙能再次拿到。因为JVM不确定哪个线程会被执行，不确定因素有例如Thread.sleep()休息后多久会返回运行，相同优先权的线程那个首先被执行，当要访问对象的锁被 释放后处于等待池的多个线程哪个会优先得到，等等。
###3.2、同步代码块
1.从尺寸上讲，同步代码块比同步方法小。你可以把同步代码块看成是没上锁房间里的一块用带锁的屏风隔开的空间。

2.同步代码块还可以人为的指定获得某个其它对象的key。就像是指定用哪一把钥匙才能开这个屏风的锁，你可以用本房的钥匙；你也可以指定用另一个房子的钥匙才能开，这样的话，你要跑到另一栋房子那儿把那个钥匙拿来，并用那个房子的钥匙来打开这个房子的带锁的屏风。记住你获得的那另一栋房子的钥匙，并不影响其他人进入那栋房子没有锁的房间。


###3.3、为何使用同步代码块？
首先对程序来讲同步的部分很影响运行效率，而一个方法通常是先创建一些局部变量，再对这些变量做一些 操作，如运算，显示等等；而同步所覆盖的代码越多，对效率的影响就越严重。因此我们通常尽量缩小其影响范围。如何做？同步代码块。我们只把一个方法中该同步的地方同步，比如运算。

另外，同步代码块可以指定钥匙这一特点有个额外的好处，是可以在一定时期内霸占某个对象的key。还记得前面说过普通情况下钥匙的使用原则吗。现在不是普通情况了。你所取得的那把钥匙不是永远不还，而是在退出同步代码块时才还。还用前面那个想连续用两个上锁房间的家伙打比方。怎样才能在用完一间以后，继续使用另一间呢。用同步代码块吧。先创建另外一个线程，做一个同步代码 块，把那个代码块的锁指向这个房子的钥匙。然后启动那个线程。只要你能在进入那个代码块时抓到这房子的钥匙，你就可以一直保留到退出那个代码块。也就是说 你甚至可以对本房内所有上锁的房间遍历，甚至再sleep(10*60*1000)，而房门口却还有1000个线程在等这把钥匙呢。很过瘾吧。

在此对sleep()方法和钥匙的关联性讲一下。一个线程在拿到key后，且没有完成同步的内容时，如果被强制sleep()了，那key还一直在 它那儿。直到它再次运行，做完所有同步内容，才会归还key。记住，那家伙只是干活干累了，去休息一下，他并没干完他要干的事。为了避免别人进入那个房间 把里面搞的一团糟，即使在睡觉的时候他也要把那唯一的钥匙戴在身上。

最后，也许有人会问，为什么要一把钥匙通开，而不是一个钥匙一个门呢？我想这纯粹是因为复杂性问题。一个钥匙一个门当然更安全，但是会牵扯好多问题。钥匙 的产生，保管，获得，归还等等。其复杂性有可能随同步方法的增加呈几何级数增加，严重影响效率。这也算是一个权衡的问题吧。为了增加一点点安全性，导致效率大大降低，是多么不可取啊。

##4、synchronized的作用对象
synchronized可作用于instance变量、object reference（对象引用）、static函数和class literals(类名称字面常量)身上。

A．无论synchronized关键字加在方法上还是对象上，它取得的锁都是对象，而不是把一段代码或函数当作锁，而且同步方法很可能还会被其他线程的对象访问。
B．每个对象只有一个锁（lock）与之相关联。
C．实现同步是要很大的系统开销作为代价的，甚至可能造成死锁，所以尽量避免无谓的同步控制。

如果一个类中定义了一个synchronized的static函数A，也定义了一个synchronized 的instance函数B，那么这个类的同一对象Obj在多线程中分别访问A和B两个方法时，不会构成同步，因为它们的锁都不一样。A方法的锁是Obj这个对象，而B的锁是Obj所属的那个Class。

```
public class Thread5 {
	 //零长度的byte数组对象创建起来将比任何对象都经济，查看编译后的字节码，
	 //生成零长度的byte[]对象只需3条操作码，而Object lock = new Object()则需要7行操作码。
    private byte[] lock = new byte[0];

    public void method1() {
        //TODO 1、将synchronized作用于object reference
        synchronized (this) {

        }
    }

    public void method2() {
        //TODO 2、将synchronized作用于特殊的instance对象变量来充当锁。
        synchronized (lock) {

        }
    }

    //TODO 3、将synchronized作用于static函数。
    public synchronized static void method3() {

    }

    public void method4() {
        //TODO 4、将synchronized作用于class literal(类名称字面常量)。
        synchronized (Thread5.class) {

        }
    }
}
```

##小结
搞清楚synchronized锁定的是哪个对象，就能帮助我们设计更安全的多线程程序。
还有一些技巧可以让我们对共享资源的同步访问更加安全：
1． 定义private 的instance变量+它的 get方法，而不要定义public/protected的instance变量。如果将变量定义为public，对象在外界可以绕过同步方法的控制而直接取得它，并改动它。这也是JavaBean的标准实现方式之一。
2． 如果instance变量是一个对象，如数组或ArrayList什么的，那上述方法仍然不安全，因为当外界对象通过get方法拿到这个instance对象的引用后，又将其指向另一个对象，那么这个private变量也就变了，岂不是很危险。 这个时候就需要将get方法也加上synchronized同步，并且，只返回这个private对象的clone()，这样，调用端得到的就是对象副本的引用了。





参考：
http://www.cnblogs.com/GnagWang/archive/2011/02/27/1966606.html

