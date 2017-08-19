#Server启动
将自己注册到ServiceManager中，Binder驱动会创建Server对应的Binder实体（保存Server对应的本地服务对象的地址），注册成功后，Server进去消息循环，等待Client的请求；
#Client获取Server接入点/远程服务对象
Client向ServiceManager发送获取服务的请求时，Client通过IPCThreadState和Binder驱动进行通信；
IPCThreadState将ServiceManager反馈的Server的Binder引用信息（BpBinder的mHandler成员）保存到BpBinder中，然后根据BpBinder对象创建对应的远程服务；
#Client向Server发送请求
当Client需要向Server发送请求时，它会调用远程服务接口；远程服务能够获取到BpBinder对象，而BpBinder则通过IPCThreadState和Binder驱动进行通信。由于BpBinder中保存了Server在Binder驱动中的Binder引用；因此，IPCThreadState和Binder驱动通信时，是知道该请求是需要传给哪个Server的。Binder驱动通过Binder引用找到对应的Binder实体，然后将Binder实体中保存的"Server对应的本地服务对象的地址"返回给用户空间。当IPC收到Binder驱动反馈的内容之后，它从内容中找到"Server对应的本地服务对象"，然后调用该对象的onTransact()。不同的本地服务都可以实现自己的onTransact()；这样，不同的服务就可以按照自己的需求来处理请求。





