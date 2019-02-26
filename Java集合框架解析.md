# Java集合框架解析


## Iterable<T>接口

表示实现此接口的类对象是可以迭代的，并可定制迭代器用于迭代。

```
Iterator<T> iterator();


获取迭代器，每个实现Iterable<T>接口的类都要复写此方法获取不同实现的迭代器，迭代器用来迭代实现类的对象。|
```



```
default void forEach(Consumer<? super T> action) {
    Objects.requireNonNull(action);
    for (T t : this) {
        action.accept(t);
    }
}
```
```
default Spliterator<T> spliterator() {
    return Spliterators.spliteratorUnknownSize(iterator(), 0);
}
```


## Iterator<E>接口

表示实现此接口的类对象是迭代器对象，并可以定制迭代的规则。

```
boolean hasNext();

是否有下一个元素
```
```
E next();

获取下一个元素
```

```
default void remove() {
    throw new UnsupportedOperationException("remove");
}
```
```
default void forEachRemaining(Consumer<? super E> action) {
    Objects.requireNonNull(action);
    while (hasNext())
        action.accept(next());
}
```

## Collection<E>接口

继承了接口Iterable<E>。
表示实现此接口的类对象是集合，并可以定制集合的操作规则。


```
int size();

获取大小
```

```
boolean isEmpty();

判断是否为空
```

```
boolean contains(Object o);

判断是否包含某个对象
```



```
Object[] toArray();

将数组转化为列表
```

```
<T> T[] toArray(T[] a);


```

```
boolean add(E e);

添加一个元素
```

```
boolean remove(Object o);

删除一个对象
```


```
boolean containsAll(Collection<?> c);

判断是否包含某个集合
```


```
boolean addAll(Collection<? extends E> c);

添加某个集合
```

```
boolean removeAll(Collection<?> c);

删除某个集合
```


```
default boolean removeIf(Predicate<? super E> filter) {
    Objects.requireNonNull(filter);
    boolean removed = false;
    final Iterator<E> each = iterator();
    while (each.hasNext()) {
        if (filter.test(each.next())) {
            each.remove();
            removed = true;
        }
    }
    return removed;
}
```

```
boolean retainAll(Collection<?> c);
```

```
void clear();

清空集合
```

```
boolean equals(Object o);

判断对象是否相等
```

```
int hashCode();

获取哈希码
```


```
@Override
default Spliterator<E> spliterator() {
    return Spliterators.spliterator(this, 0);
}
```

```
default Stream<E> stream() {
    return StreamSupport.stream(spliterator(), false);
}
```

```
default Stream<E> parallelStream() {
    return StreamSupport.stream(spliterator(), true);
}
```

## List<E>接口

继承了Collection<E>接口。


表示实现此接口的对象是列表，并可以定制列表的操作规则。



```
boolean addAll(int index, Collection<? extends E> c);
```



```
default void replaceAll(UnaryOperator<E> operator) {
    Objects.requireNonNull(operator);
    final ListIterator<E> li = this.listIterator();
    while (li.hasNext()) {
        li.set(operator.apply(li.next()));
    }
}
```


```
@SuppressWarnings({"unchecked", "rawtypes"})
default void sort(Comparator<? super E> c) {
    Object[] a = this.toArray();
    Arrays.sort(a, (Comparator) c);
    ListIterator<E> i = this.listIterator();
    for (Object e : a) {
        i.next();
        i.set((E) e);
    }
}

```




```
E get(int index);
```

```
E set(int index, E element);

```



```
void add(int index, E element);

```



```
E remove(int index);

```


```
int indexOf(Object o);

```



```
int lastIndexOf(Object o);

```

```
ListIterator<E> listIterator();

```


```
ListIterator<E> listIterator(int index);

```

```
List<E> subList(int fromIndex, int toIndex);

```




```
@Override
default Spliterator<E> spliterator() {
    return Spliterators.spliterator(this, Spliterator.ORDERED);
}

```

# AbstractCollection<E> 抽象类

实现了Collection<E>接口。




# AbstractList<E> 抽象类
继承了AbstractCollection<E> 抽象类，实现了List<E>接口。

# ArrayList<E> 类

继承了AbstractList<E> 抽象类，实现了Lit<E>接口，以及java.util.RandomAccess， java.lang.Cloneable， java.io.Serializable接口。






# 疑问

1、标记接口
疑问：ArrayList实现了RandomAccess，它是空的接口，为什么ArrayList这个类就能用下标随机访问了？它根本没做实现呀！而且不实现RandomAccess这个接口，我同样可以用下标访问呀！
解惑：RandomAccess是一个标记接口，可以使用 instanceof进行逻辑判断， 根据RandomAccess来选择一个更快的处理方式，在效率上不同，此种方式后面已被Annotation机制取代。



2、重复实现List接口
疑问：为什么AbstractList已经实现了List接口，ArrayList继承了AbstractList却还要实现List接口？
解惑：ArrayList实现List是保留ArrayList是一个List的事实，而AbstractList实现List只是完成了List要求的某些实现。

参考：
https://stackoverflow.com/questions/4387419/why-does-arraylist-have-implements-list
My 2 cents is to keep to the fact that ArrayList is a List. AbstractList just completes certain implementations that the List requires.

