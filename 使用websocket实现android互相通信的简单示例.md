####一、服务器端

1、使用IntelliJ IDEA开发服务器端程序，创建Web Application，并部署到Tomcat本地容器。

2、使用Java-WebSocket框架实现服务器端，项目地址：
```
https://github.com/TooTallNate/Java-WebSocket
```

3、本示例server端源码地址：
```
https://github.com/chaozhouzhang/demos/tree/master/WebSocketDemo/server-java/WebSocketServer
```

####二、客户端

1、使用Android Studio开发客户端程序，服务器地址使用步骤一部署之后的地址，使用ws前缀开头，服务器host使用本机的ip地址，例如：
```
ws://192.168.3.41:8080/chatServer
```

2、使用autobahn-android框架实现客户端，项目地址：
```
https://github.com/crossbario/autobahn-android
```

3、本示例client端源码地址：
```
https://github.com/chaozhouzhang/demos/tree/master/WebSocketDemo/client-android/WebSocketTest
```

