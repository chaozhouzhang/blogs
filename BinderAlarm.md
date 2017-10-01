#组件调用
```
                Intent intent = new Intent("BINDER_CLOCK");
                intent.putExtra("msg", "BINDER的闹钟响了！");
                PendingIntent pi = PendingIntent.getBroadcast(this, 0, intent, 0);
                AlarmManager am = (AlarmManager) getSystemService(ALARM_SERVICE);
                am.setRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), 5 * 1000, pi);
```
#设置闹钟模式
```
am.setRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), 5 * 1000, pi);
```
#AlarmManager
```
    public void setRepeating(int type, long triggerAtMillis,
            long intervalMillis, PendingIntent operation) {
        setImpl(type, triggerAtMillis, legacyExactLength(), intervalMillis, 0, operation,
                null, null, null, null, null);
    }
```
```
        try {
            mService.set(mPackageName, type, triggerAtMillis, windowMillis, intervalMillis, flags,
                    operation, recipientWrapper, listenerTag, workSource, alarmClock);
        } catch (RemoteException ex) {
            throw ex.rethrowFromSystemServer();
        }
```

```
    AlarmManager(IAlarmManager service, Context ctx) {
        mService = service;

        mPackageName = ctx.getPackageName();
        mTargetSdkVersion = ctx.getApplicationInfo().targetSdkVersion;
        mAlwaysExact = (mTargetSdkVersion < Build.VERSION_CODES.KITKAT);
        mMainThreadHandler = new Handler(ctx.getMainLooper());
    }
```
#获取闹钟服务
```
AlarmManager am = (AlarmManager) getSystemService(ALARM_SERVICE);
```
#Activity
```
    @Override
    public Object getSystemService(@ServiceName @NonNull String name) {
        if (getBaseContext() == null) {
            throw new IllegalStateException(
                    "System services not available to Activities before onCreate()");
        }

        if (WINDOW_SERVICE.equals(name)) {
            return mWindowManager;
        } else if (SEARCH_SERVICE.equals(name)) {
            ensureSearchManager();
            return mSearchManager;
        }
        return super.getSystemService(name);
    }
```
#ContextThemeWrapper
```
    @Override
    public Object getSystemService(String name) {
        if (LAYOUT_INFLATER_SERVICE.equals(name)) {
            if (mInflater == null) {
                mInflater = LayoutInflater.from(getBaseContext()).cloneInContext(this);
            }
            return mInflater;
        }
        return getBaseContext().getSystemService(name);
    }
```
#Context
```
public abstract Object getSystemService(@ServiceName @NonNull String name);
```
#ContextImpl
```
    @Override
    public Object getSystemService(String name) {
        return SystemServiceRegistry.getSystemService(this, name);
    }
```
#SystemServiceRegistry
```
public static Object getSystemService(ContextImpl ctx, String name) {     ServiceFetcher<?> fetcher = SYSTEM_SERVICE_FETCHERS.get(name);     return fetcher != null ? fetcher.getService(ctx) : null; }

```
```
    public static Object[] createServiceCache() {
        return new Object[sServiceCacheSize];
    }
```
```
        registerService(Context.ALARM_SERVICE, AlarmManager.class,
                new CachedServiceFetcher<AlarmManager>() {
            @Override
            public AlarmManager createService(ContextImpl ctx) {
                IBinder b = ServiceManager.getService(Context.ALARM_SERVICE);
                IAlarmManager service = IAlarmManager.Stub.asInterface(b);
                return new AlarmManager(service, ctx);
            }});
```
#获取IBinder
```
IBinder b = ServiceManager.getService(Context.ACCOUNT_SERVICE);
```
#ServiceManager
```
  public static IBinder getService(String name) {
        try {
            IBinder service = sCache.get(name);
            if (service != null) {
                return service;
            } else {
                return getIServiceManager().getService(name);
            }
        } catch (RemoteException e) {
            Log.e(TAG, "error in getService", e);
        }
        return null;
    }
```
#IAlarmManager
```
    /**
     * windowLength == 0 means exact; windowLength < 0 means the let the OS decide
     */
    @Override
    public void set(int type, long triggerAtTime, long windowLength, long interval, android.app.PendingIntent operation, android.os.WorkSource workSource, android.app.AlarmManager.AlarmClockInfo alarmClock) throws android.os.RemoteException {
        android.os.Parcel _data = android.os.Parcel.obtain();
        android.os.Parcel _reply = android.os.Parcel.obtain();
        try {
            _data.writeInterfaceToken(DESCRIPTOR);
            _data.writeInt(type);
            _data.writeLong(triggerAtTime);
            _data.writeLong(windowLength);
            _data.writeLong(interval);
            if ((operation != null)) {
                _data.writeInt(1);
                operation.writeToParcel(_data, 0);
            } else {
                _data.writeInt(0);
            }
            if ((workSource != null)) {
                _data.writeInt(1);
                workSource.writeToParcel(_data, 0);
            } else {
                _data.writeInt(0);
            }
            if ((alarmClock != null)) {
                _data.writeInt(1);
                alarmClock.writeToParcel(_data, 0);
            } else {
                _data.writeInt(0);
            }
            mRemote.transact(Stub.TRANSACTION_set, _data, _reply, 0);
            _reply.readException();
        } finally {
            _reply.recycle();
            _data.recycle();
        }
    }
```

