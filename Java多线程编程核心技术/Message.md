```
public final boolean sendMessage(Message msg)
```

```
public final boolean sendMessageDelayed(Message msg, long delayMillis)
```

```
public final boolean sendEmptyMessage(int what)
```
```
public final boolean sendEmptyMessageDelayed(int what, long delayMillis)
```

``` public final boolean sendMessageDelayed(Message msg, long delayMillis)
```

```
public boolean sendMessageAtTime(Message msg, long uptimeMillis)
//sendMessageAtTime() called with no mQueue
```

```
private boolean enqueueMessage(MessageQueue queue, Message msg, long uptimeMillis)
```

```
boolean enqueueMessage(Message msg, long when)
//Message must have a target.
//This message is already in use.
//sending message to a Handler on a dead thread
//
```

